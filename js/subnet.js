window.SubnetTools = (function () {
  function ipToInt(ipStr) {
    const parts = ipStr.trim().split(".");
    if (parts.length !== 4) return null;
    let num = 0;
    for (let i = 0; i < 4; i++) {
      if (!/^\d+$/.test(parts[i])) return null;
      const octet = parseInt(parts[i], 10);
      if (octet < 0 || octet > 255) return null;
      num = ((num << 8) | octet) >>> 0;
    }
    return num >>> 0;
  }

  function intToIp(intVal) {
    const u = intVal >>> 0;
    return [
      (u >>> 24) & 255,
      (u >>> 16) & 255,
      (u >>> 8) & 255,
      u & 255
    ].join(".");
  }

  function intToBinaryDots(intVal, prefix) {
    const u = intVal >>> 0;
    const bits = u.toString(2).padStart(32, "0");
    let html = "";
    for (let i = 0; i < 32; i++) {
      if (i > 0 && i % 8 === 0) html += '<span style="color:var(--text-muted)">.</span>';
      const cls = i < prefix ? "bit-net" : "bit-host";
      html += `<span class="${cls}">${bits[i]}</span>`;
    }
    return html;
  }

  function classifyIp(ipInt) {
    const first = (ipInt >>> 24) & 255;
    const second = (ipInt >>> 16) & 255;
    let ipClass = "A";
    if (first >= 128 && first <= 191) ipClass = "B";
    else if (first >= 192 && first <= 223) ipClass = "C";
    else if (first >= 224 && first <= 239) ipClass = "D (Multicast)";
    else if (first >= 240) ipClass = "E (Reserved)";

    let scope = "Public IP (Định tuyến Internet)";
    if (first === 10) {
      scope = "Private IP (Lớp A - RFC 1918)";
    } else if (first === 172 && second >= 16 && second <= 31) {
      scope = "Private IP (Lớp B - RFC 1918)";
    } else if (first === 192 && second === 168) {
      scope = "Private IP (Lớp C - RFC 1918)";
    } else if (first === 127) {
      scope = "Loopback Address (127.0.0.0/8)";
    } else if (first === 169 && second === 254) {
      scope = "APIPA / Link-Local (169.254.0.0/16)";
    }
    return { ipClass, scope };
  }

  function calculateSubnet(ipStr, prefix) {
    const ipInt = ipToInt(ipStr);
    const p = parseInt(prefix, 10);
    if (ipInt === null || isNaN(p) || p < 1 || p > 32) {
      return null;
    }

    const maskInt = p === 0 ? 0 : (0xffffffff << (32 - p)) >>> 0;
    const wildcardInt = (~maskInt) >>> 0;
    const netInt = (ipInt & maskInt) >>> 0;
    const bcastInt = (netInt | wildcardInt) >>> 0;

    const hostBits = 32 - p;
    const totalAddresses = Math.pow(2, hostBits);
    let usableHosts = totalAddresses - 2;
    let firstHost = intToIp(netInt + 1);
    let lastHost = intToIp(bcastInt - 1);

    if (p === 31) {
      usableHosts = 2;
      firstHost = intToIp(netInt);
      lastHost = intToIp(bcastInt);
    } else if (p === 32) {
      usableHosts = 1;
      firstHost = intToIp(netInt);
      lastHost = intToIp(netInt);
    }

    const { ipClass, scope } = classifyIp(ipInt);

    // Step-by-step Magic Number explanation
    const interestingOctetIndex = Math.min(4, Math.floor((p - 1) / 8) + 1);
    const bitsInOctet = p - (interestingOctetIndex - 1) * 8;
    const magicNumber = Math.pow(2, 8 - bitsInOctet);

    return {
      ip: intToIp(ipInt),
      prefix: p,
      mask: intToIp(maskInt),
      wildcard: intToIp(wildcardInt),
      network: intToIp(netInt),
      broadcast: intToIp(bcastInt),
      firstHost,
      lastHost,
      hostBits,
      totalAddresses,
      usableHosts: Math.max(0, usableHosts),
      ipClass,
      scope,
      binaryIp: intToBinaryDots(ipInt, p),
      binaryMask: intToBinaryDots(maskInt, p),
      binaryNet: intToBinaryDots(netInt, p),
      interestingOctetIndex,
      magicNumber
    };
  }

  function calculateVLSM(baseIpStr, basePrefix, requirements) {
    const baseInt = ipToInt(baseIpStr);
    const p = parseInt(basePrefix, 10);
    if (baseInt === null || isNaN(p) || p < 8 || p > 30) {
      return { error: "Địa chỉ mạng gốc hoặc Prefix không hợp lệ (chọn Prefix từ /8 đến /30)." };
    }

    const baseMask = (0xffffffff << (32 - p)) >>> 0;
    const baseNetInt = (baseInt & baseMask) >>> 0;
    const baseMaxInt = (baseNetInt | ((~baseMask) >>> 0)) >>> 0;

    // Sort descending by required hosts
    const sorted = [...requirements]
      .filter((r) => r.hosts > 0)
      .sort((a, b) => b.hosts - a.hosts);

    let currentNetInt = baseNetInt;
    const allocations = [];

    for (const req of sorted) {
      let hostBits = 2;
      while (Math.pow(2, hostBits) - 2 < req.hosts) {
        hostBits++;
      }
      const subPrefix = 32 - hostBits;
      const blockSize = Math.pow(2, hostBits);
      const usable = blockSize - 2;
      const subMaskInt = (0xffffffff << hostBits) >>> 0;
      const subBcastInt = (currentNetInt + blockSize - 1) >>> 0;

      if (subBcastInt > baseMaxInt) {
        return {
          error: `Không đủ không gian địa chỉ trong mạng gốc ${intToIp(baseNetInt)}/${p} để cấp cho "${req.name}" (${req.hosts} hosts)!`
        };
      }

      allocations.push({
        name: req.name,
        reqHosts: req.hosts,
        usableHosts: usable,
        wasted: usable - req.hosts,
        prefix: subPrefix,
        mask: intToIp(subMaskInt),
        network: intToIp(currentNetInt),
        firstHost: intToIp(currentNetInt + 1),
        lastHost: intToIp(subBcastInt - 1),
        broadcast: intToIp(subBcastInt)
      });

      currentNetInt = (subBcastInt + 1) >>> 0;
    }

    return {
      baseNetwork: `${intToIp(baseNetInt)}/${p}`,
      allocations
    };
  }

  function generateDrillQuestion() {
    const prefixes = [20, 21, 22, 23, 25, 26, 27, 28, 29, 30];
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const templates = [
      [192, 168, Math.floor(Math.random() * 50) + 1, Math.floor(Math.random() * 250) + 2],
      [172, Math.floor(Math.random() * 16) + 16, Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 250) + 2],
      [10, Math.floor(Math.random() * 40) + 1, Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 250) + 2]
    ];
    const octets = templates[Math.floor(Math.random() * templates.length)];
    const ip = octets.join(".");
    return calculateSubnet(ip, prefix);
  }

  return {
    calculateSubnet,
    calculateVLSM,
    generateDrillQuestion
  };
})();
