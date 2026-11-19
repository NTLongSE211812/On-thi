(function () {
  const STORAGE_KEY = "nwc204_study_state_v2";

  const defaultState = {
    theme: "dark",
    fontScale: 1.05,
    completedChapters: [],
    masteredFlashcards: [],
    peChecklist: [],
    wrongQuestionIds: [],
    quizBestScore: 0,
    quizAttempts: 0,
    customFlashcards: [],
    customQuestions: []
  };

  let state = loadState();

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { ...defaultState };
      return { ...defaultState, ...JSON.parse(raw) };
    } catch (e) {
      return { ...defaultState };
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      // ignore storage errors
    }
    updateDashboardStats();
  }

  function showToast(msg) {
    const toast = document.getElementById("app-toast");
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(window.__toastTimer);
    window.__toastTimer = setTimeout(() => {
      toast.classList.remove("show");
    }, 2400);
  }

  function getAllQuestions() {
    return [...window.NWC204_DATA.quizQuestions, ...(state.customQuestions || [])];
  }

  function isMultiQuestion(q) {
    return Array.isArray(q.answer);
  }

  function getCorrectArray(q) {
    return Array.isArray(q.answer) ? q.answer : [q.answer];
  }

  function getAllFlashcards() {
    const letters = ["A", "B", "C", "D", "E", "F"];
    const questionCards = getAllQuestions().map((q) => {
      const correctArr = getCorrectArray(q);
      const correctText = correctArr
        .map((i) => `${letters[i] || i + 1}. ${q.options[i]}`)
        .join("\n");
      return {
        id: `q_${q.id}`,
        category: q.topic,
        term: q.question,
        options: q.options,
        correctIndexes: correctArr,
        correctText,
        answer: q.explanation,
        isQuestion: true
      };
    });

    const coreCards = [
      ...window.NWC204_DATA.flashcards.map((c) => ({
        ...c,
        category: `Thuật ngữ: ${c.category}`,
        isQuestion: false
      })),
      ...(state.customFlashcards || [])
    ];

    return [...questionCards, ...coreCards];
  }

  function isAnswerCorrect(q, userAns) {
    if (userAns === undefined || userAns === null) return false;
    const expected = getCorrectArray(q).slice().sort((a, b) => a - b);
    const actual = (Array.isArray(userAns) ? userAns : [userAns]).slice().sort((a, b) => a - b);
    if (expected.length !== actual.length) return false;
    return expected.every((val, idx) => val === actual[idx]);
  }

  function isQuestionCompletedInPractice(q, userAns) {
    if (userAns === undefined || userAns === null) return false;
    if (!isMultiQuestion(q)) return true;
    return Array.isArray(userAns) && userAns.length >= q.answer.length;
  }

  // ==================== THEME, FONT SCALE & TABS ====================
  function applyTheme() {
    if (state.theme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
      document.getElementById("theme-toggle-btn").innerHTML = "🌙 Dark";
    } else {
      document.documentElement.removeAttribute("data-theme");
      document.getElementById("theme-toggle-btn").innerHTML = "☀️ Light";
    }
  }

  function applyFontScale() {
    const scale = state.fontScale || 1.05;
    document.documentElement.style.setProperty("--font-scale", scale);
    document.querySelectorAll(".font-btn").forEach((btn) => {
      btn.classList.toggle("active", parseFloat(btn.dataset.scale) === scale);
    });
  }

  window.setFontScale = function (scale) {
    state.fontScale = scale;
    applyFontScale();
    saveState();
    showToast(
      scale >= 1.15
        ? "Đã chuyển sang cỡ chữ Rất Lớn (A+)"
        : scale >= 1.0
        ? "Đã chuyển sang cỡ chữ Lớn dễ đọc (A)"
        : "Đã chuyển sang cỡ chữ Vừa (A-)"
    );
  };

  function switchTab(tabId) {
    document.querySelectorAll(".nav-tab").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.tab === tabId);
    });
    document.querySelectorAll(".tab-panel").forEach((panel) => {
      panel.classList.toggle("active", panel.id === `tab-${tabId}`);
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  window.switchTab = switchTab;

  window.startExamByTopic = function (topicName) {
    switchTab("quiz");
    const topicSelect = document.getElementById("quiz-topic-select");
    if (topicSelect) {
      topicSelect.value = topicName;
      document.getElementById("quiz-start-btn").click();
    }
  };

  // ==================== DASHBOARD & FE ANALYSIS ====================
  function renderFeAnalysis() {
    const container = document.getElementById("fe-analysis-container");
    if (!container || !window.NWC204_DATA.feAnalysis) return;
    const info = window.NWC204_DATA.feAnalysis;

    container.innerHTML = `
      <div class="card-header">
        <div>
          <h2 class="card-title">🎯 Phân tích Độ khó & Trọng tâm từ 6 Đề FE Kỳ trước (${info.totalAnalyzed} câu)</h2>
          <p style="font-size:0.98rem;color:var(--text-secondary);margin-top:0.35rem;">${info.difficultySummary}</p>
        </div>
        <div style="display:flex;gap:0.55rem;flex-wrap:wrap;">
          <button class="btn btn-success" onclick="switchTab('cheatsheet')">🎯 Sổ tay Trọng tâm Cần nhớ</button>
          <button class="btn" onclick="startExamByTopic('Đề FE Set 1 (Q1-Q50)')">📝 Đề Set 1</button>
          <button class="btn" onclick="startExamByTopic('Đề FE Set 2 (Câu 1-50)')">📝 Đề Set 2</button>
          <button class="btn" onclick="startExamByTopic('Đề FE SU26_RE (Video)')">📝 Đề SU26_RE</button>
          <button class="btn btn-primary" onclick="startExamByTopic('Đề FE SP26_RE (Video)')">🔥 Đề SP26_RE</button>
          <button class="btn btn-primary" onclick="startExamByTopic('Đề FE FA25_RE (Video)')">🔥 Đề FA25_RE</button>
          <button class="btn btn-primary" onclick="startExamByTopic('Đề FE FA25_FE85 (Video)')">🔥 Đề FA25_FE85</button>
        </div>
      </div>

      <div class="theory-grid">
        ${info.distribution
          .map(
            (d) => `
          <div class="theory-box">
            <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;margin-bottom:0.45rem;">
              <h4 style="margin-bottom:0;">${escapeHtml(d.topic)}</h4>
              <span class="badge badge-warning">${escapeHtml(d.weight)}</span>
            </div>
            <ul>
              ${d.keyPoints.map((kp) => `<li>${escapeHtml(kp)}</li>`).join("")}
            </ul>
          </div>
        `
          )
          .join("")}
      </div>
    `;
  }

  function updateDashboardStats() {
    const totalChapters = window.NWC204_DATA.chapters.length;
    const doneChapters = state.completedChapters.length;
    const chPct = Math.round((doneChapters / totalChapters) * 100);

    const allCards = getAllFlashcards();
    const masteredCount = state.masteredFlashcards.filter((id) =>
      allCards.some((c) => c.id === id)
    ).length;
    const fcPct = allCards.length ? Math.round((masteredCount / allCards.length) * 100) : 0;

    const allQs = getAllQuestions();

    const elChVal = document.getElementById("stat-chapters-val");
    if (elChVal) {
      elChVal.textContent = `${doneChapters}/${totalChapters}`;
      document.getElementById("stat-chapters-bar").style.width = `${chPct}%`;
      document.getElementById("stat-chapters-sub").textContent = `Hoàn thành ${chPct}% chương trình`;

      document.getElementById("stat-fc-val").textContent = `${masteredCount}/${allCards.length}`;
      document.getElementById("stat-fc-bar").style.width = `${fcPct}%`;
      document.getElementById("stat-fc-sub").textContent = `Đã thuộc ${fcPct}% thuật ngữ`;

      document.getElementById("stat-quiz-val").textContent = `${state.quizBestScore}%`;
      document.getElementById("stat-quiz-bar").style.width = `${state.quizBestScore}%`;
      document.getElementById("stat-quiz-sub").textContent = `${state.quizAttempts} lần làm • ${allQs.length} câu hỏi FE thực tế`;

      document.getElementById("stat-wrong-val").textContent = state.wrongQuestionIds.length;
    }
  }

  function initGlobalSearch() {
    const input = document.getElementById("global-search-input");
    const resultsBox = document.getElementById("global-search-results");
    if (!input || !resultsBox) return;

    const letters = ["A", "B", "C", "D", "E", "F"];

    input.addEventListener("input", () => {
      const q = input.value.trim().toLowerCase();
      if (q.length < 2) {
        resultsBox.style.display = "none";
        resultsBox.innerHTML = "";
        return;
      }

      const matches = [];

      // Search Quiz first (since user often searches exam questions!)
      getAllQuestions().forEach((qz) => {
        if (
          qz.question.toLowerCase().includes(q) ||
          qz.explanation.toLowerCase().includes(q) ||
          qz.options.some((o) => o.toLowerCase().includes(q))
        ) {
          const ansText = getCorrectArray(qz)
            .map((i) => `${letters[i]}. ${qz.options[i]}`)
            .join(" | ");
          matches.push({
            type: qz.topic,
            title: qz.question,
            desc: `✅ Đáp án đúng: ${ansText}\n💡 ${qz.explanation}`,
            tab: "quiz"
          });
        }
      });

      // Search ports
      window.NWC204_DATA.wellKnownPorts.forEach((p) => {
        if (
          p.port.toLowerCase().includes(q) ||
          p.service.toLowerCase().includes(q) ||
          p.desc.toLowerCase().includes(q)
        ) {
          matches.push({
            type: "Port",
            title: `Port ${p.port} (${p.proto}) - ${p.service}`,
            desc: p.desc,
            tab: "theory"
          });
        }
      });

      // Search CLI
      window.NWC204_DATA.cliCommands.forEach((cat) => {
        cat.items.forEach((item) => {
          if (
            item.cmd.toLowerCase().includes(q) ||
            item.title.toLowerCase().includes(q) ||
            item.desc.toLowerCase().includes(q)
          ) {
            matches.push({
              type: "Cisco CLI",
              title: item.title,
              desc: `${item.cmd.replace(/\n/g, " ; ")} — ${item.desc}`,
              tab: "cli"
            });
          }
        });
      });

      // Search Flashcards
      getAllFlashcards().forEach((fc) => {
        if (fc.term.toLowerCase().includes(q) || fc.answer.toLowerCase().includes(q)) {
          matches.push({
            type: "Flashcard",
            title: fc.term,
            desc: fc.answer,
            tab: "flashcards"
          });
        }
      });

      resultsBox.style.display = "block";
      if (matches.length === 0) {
        resultsBox.innerHTML = `<div style="padding:0.75rem;color:var(--text-secondary);font-size:0.9rem;">Không tìm thấy kết quả nào cho "<strong>${escapeHtml(q)}</strong>".</div>`;
        return;
      }

      resultsBox.innerHTML = matches
        .slice(0, 10)
        .map(
          (m) => `
        <div style="padding:0.75rem;border-bottom:1px solid var(--border);cursor:pointer;" onclick="switchTab('${m.tab}')">
          <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.25rem;">
            <span class="badge">${escapeHtml(m.type)}</span>
            <strong style="font-size:0.92rem;">${escapeHtml(m.title)}</strong>
          </div>
          <div style="font-size:0.83rem;color:var(--text-secondary);white-space:pre-line;">${escapeHtml(m.desc)}</div>
        </div>
      `
        )
        .join("");
    });
  }

  // ==================== OSI INTERACTIVE & THEORY ====================
  function initOsiVisualizer() {
    const stackEl = document.getElementById("osi-stack-list");
    const detailEl = document.getElementById("osi-layer-detail");
    if (!stackEl || !detailEl) return;

    const layers = window.NWC204_DATA.osiLayers;

    function selectLayer(layerNum) {
      const layer = layers.find((l) => l.layer === layerNum) || layers[0];
      stackEl.querySelectorAll(".osi-layer-btn").forEach((btn) => {
        btn.classList.toggle("active", parseInt(btn.dataset.layer, 10) === layer.layer);
      });

      detailEl.innerHTML = `
        <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.75rem;margin-bottom:1.1rem;">
          <div>
            <span class="badge" style="background:${layer.color}25;color:${layer.color};border:1px solid ${layer.color}66;">
              Layer ${layer.layer} • Tương ứng TCP/IP: ${layer.tcpip}
            </span>
            <h3 style="font-size:1.5rem;margin-top:0.45rem;">${layer.name}</h3>
          </div>
          <div class="badge badge-success" style="font-size:0.98rem;padding:0.45rem 0.95rem;">
            PDU: ${layer.pdu}
          </div>
        </div>

        <p style="color:var(--text-secondary);margin-bottom:1.25rem;font-size:1.05rem;">${layer.summary}</p>

        <div class="grid-2" style="margin-bottom:1.15rem;">
          <div class="theory-box">
            <h4>📍 Cơ chế Định danh / Địa chỉ</h4>
            <div style="font-size:0.98rem;">${layer.addressing}</div>
          </div>
          <div class="theory-box">
            <h4>🖧 Thiết bị & Phần cứng tiêu biểu</h4>
            <div style="font-size:0.98rem;">${layer.devices}</div>
          </div>
        </div>

        <div class="theory-box" style="margin-bottom:1.15rem;">
          <h4>⚡ Giao thức & Chuẩn hoạt động tại Tầng ${layer.layer}</h4>
          <div style="display:flex;flex-wrap:wrap;gap:0.5rem;margin-top:0.6rem;">
            ${layer.protocols.map((p) => `<span class="badge mono">${p}</span>`).join("")}
          </div>
        </div>

        <div class="exam-tip">
          <strong>💡 Mẹo làm bài FE NWC204:</strong> ${layer.examTip}
        </div>

        <div style="margin-top:1.25rem;">
          <div style="font-size:0.94rem;font-weight:700;color:var(--text-secondary);margin-bottom:0.4rem;">
            📦 Mô phỏng khung truyền Encapsulation trên đường dây (Layer đang chọn được tô sáng):
          </div>
          <div class="encap-bar">
            <span class="encap-chunk ${layer.layer === 1 ? "highlight" : ""}" style="background:#10b98122;color:#10b981;border:1px solid #10b981;">[L1 Preamble/Bits]</span>
            <span class="encap-chunk ${layer.layer === 2 ? "highlight" : ""}" style="background:#0ea5e922;color:#38bdf8;border:1px solid #0ea5e9;">[L2 Ethernet Header: Dst/Src MAC]</span>
            <span class="encap-chunk ${layer.layer === 3 ? "highlight" : ""}" style="background:#3b82f622;color:#60a5fa;border:1px solid #3b82f6;">[L3 IP Header: Src/Dst IP, TTL]</span>
            <span class="encap-chunk ${layer.layer === 4 ? "highlight" : ""}" style="background:#6366f122;color:#818cf8;border:1px solid #6366f1;">[L4 TCP/UDP Header: Src/Dst Port]</span>
            <span class="encap-chunk ${layer.layer >= 5 ? "highlight" : ""}" style="background:#ec489922;color:#f472b6;border:1px solid #ec4899;">[L5-L7 Application Data]</span>
            <span class="encap-chunk ${layer.layer === 2 ? "highlight" : ""}" style="background:#0ea5e922;color:#38bdf8;border:1px solid #0ea5e9;">[L2 FCS Trailer]</span>
          </div>
        </div>
      `;
    }

    stackEl.innerHTML = layers
      .map(
        (l) => `
      <button class="osi-layer-btn" data-layer="${l.layer}">
        <div style="display:flex;align-items:center;">
          <span class="osi-num" style="background:${l.color}">${l.layer}</span>
          <div>
            <div style="font-weight:800;font-size:1.02rem;">${l.name}</div>
            <div style="font-size:0.86rem;color:var(--text-secondary);">PDU: ${l.pdu}</div>
          </div>
        </div>
        <span class="badge" style="font-size:0.78rem;">${l.tcpip}</span>
      </button>
    `
      )
      .join("");

    stackEl.querySelectorAll(".osi-layer-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        selectLayer(parseInt(btn.dataset.layer, 10));
      });
    });

    selectLayer(7);
  }

  function renderChapters() {
    const container = document.getElementById("chapters-container");
    if (!container) return;

    container.innerHTML = window.NWC204_DATA.chapters
      .map((ch, idx) => {
        const isDone = state.completedChapters.includes(ch.id);
        return `
        <div class="chapter-card ${idx === 0 ? "open" : ""}" id="card-${ch.id}">
          <div class="chapter-header" onclick="toggleChapter('${ch.id}')">
            <div style="display:flex;align-items:center;gap:0.85rem;flex-wrap:wrap;">
              <span class="badge ${isDone ? "badge-success" : ""}">${isDone ? "✓ Đã học" : ch.badge}</span>
              <h3 style="font-size:1.2rem;font-weight:800;">${ch.title}</h3>
            </div>
            <div style="display:flex;align-items:center;gap:0.85rem;" onclick="event.stopPropagation()">
              <label style="display:flex;align-items:center;gap:0.45rem;font-size:0.95rem;font-weight:600;cursor:pointer;color:var(--text-secondary);">
                <input type="checkbox" style="width:18px;height:18px;" ${isDone ? "checked" : ""} onchange="toggleChapterDone('${ch.id}', this.checked)" />
                Hoàn thành
              </label>
              <button class="btn btn-secondary btn-sm" onclick="toggleChapter('${ch.id}')">Mở / Đóng</button>
            </div>
          </div>
          <div class="chapter-body">
            <p style="color:var(--text-secondary);font-size:1.02rem;margin-bottom:0.75rem;">${ch.summary}</p>
            <div class="theory-grid">
              ${ch.blocks
                .map(
                  (b) => `
                <div class="theory-box">
                  <h4>${b.heading}</h4>
                  <ul>
                    ${b.items.map((item) => `<li>${item}</li>`).join("")}
                  </ul>
                </div>
              `
                )
                .join("")}
            </div>
            <div class="exam-tip">
              <strong>🎯 Trọng tâm đi thi:</strong> ${ch.examNote}
            </div>
          </div>
        </div>
      `;
      })
      .join("");
  }

  window.toggleChapter = function (chId) {
    const el = document.getElementById(`card-${chId}`);
    if (el) el.classList.toggle("open");
  };

  window.toggleChapterDone = function (chId, checked) {
    if (checked) {
      if (!state.completedChapters.includes(chId)) state.completedChapters.push(chId);
      showToast("Đã đánh dấu hoàn thành chương học!");
    } else {
      state.completedChapters = state.completedChapters.filter((id) => id !== chId);
    }
    saveState();
    renderChapters();
  };

  function renderPortsTable() {
    const tbody = document.getElementById("ports-table-body");
    const searchInput = document.getElementById("ports-search-input");
    if (!tbody) return;

    function draw(filterText = "") {
      const q = filterText.trim().toLowerCase();
      const rows = window.NWC204_DATA.wellKnownPorts.filter(
        (p) =>
          !q ||
          p.port.toLowerCase().includes(q) ||
          p.proto.toLowerCase().includes(q) ||
          p.service.toLowerCase().includes(q) ||
          p.desc.toLowerCase().includes(q)
      );
      tbody.innerHTML = rows
        .map(
          (p) => `
        <tr>
          <td class="mono" style="font-weight:700;color:var(--accent);">${p.port}</td>
          <td><span class="badge">${p.proto}</span></td>
          <td style="font-weight:700;">${p.service}</td>
          <td style="color:var(--text-secondary);">${p.desc}</td>
        </tr>
      `
        )
        .join("");
    }

    draw();
    if (searchInput) {
      searchInput.addEventListener("input", () => draw(searchInput.value));
    }
  }

  // ==================== SUBNET & VLSM CALCULATOR ====================
  let currentDrill = null;

  function initSubnetTab() {
    const ipInput = document.getElementById("calc-ip-input");
    const prefixInput = document.getElementById("calc-prefix-input");
    const calcBtn = document.getElementById("calc-subnet-btn");

    function runCalc() {
      const res = window.SubnetTools.calculateSubnet(ipInput.value, prefixInput.value);
      const out = document.getElementById("subnet-calc-output");
      if (!res) {
        out.innerHTML = `<div style="color:var(--danger);font-weight:600;">⚠️ Địa chỉ IPv4 không hợp lệ! Vui lòng nhập đúng định dạng (ví dụ: 192.168.10.75).</div>`;
        return;
      }

      out.innerHTML = `
        <div class="grid-3" style="margin-bottom:1rem;">
          <div class="theory-box">
            <h4>🌐 Network & Broadcast</h4>
            <div style="font-size:0.88rem;display:flex;flex-direction:column;gap:0.35rem;">
              <div>Network ID: <strong class="mono" style="color:var(--accent);">${res.network}/${res.prefix}</strong></div>
              <div>Broadcast ID: <strong class="mono" style="color:var(--warning);">${res.broadcast}</strong></div>
              <div>First Usable Host: <strong class="mono" style="color:var(--success);">${res.firstHost}</strong></div>
              <div>Last Usable Host: <strong class="mono" style="color:var(--success);">${res.lastHost}</strong></div>
            </div>
          </div>
          <div class="theory-box">
            <h4>🎭 Subnet Mask & Wildcard</h4>
            <div style="font-size:0.88rem;display:flex;flex-direction:column;gap:0.35rem;">
              <div>Subnet Mask: <strong class="mono">${res.mask}</strong></div>
              <div>Wildcard Mask: <strong class="mono">${res.wildcard}</strong></div>
              <div>Số bit Host (h): <strong>${res.hostBits} bits</strong></div>
              <div>Bước nhảy (Block size): <strong>${res.magicNumber}</strong> (ở Octet #${res.interestingOctetIndex})</div>
            </div>
          </div>
          <div class="theory-box">
            <h4>📊 Số lượng Host & Phân lớp</h4>
            <div style="font-size:0.88rem;display:flex;flex-direction:column;gap:0.35rem;">
              <div>Host khả dụng (2^h - 2): <strong style="color:var(--accent);font-size:1.05rem;">${res.usableHosts.toLocaleString()} hosts</strong></div>
              <div>Tổng số IP (2^h): <strong>${res.totalAddresses.toLocaleString()}</strong></div>
              <div>Phân lớp: <span class="badge">Class ${res.ipClass}</span></div>
              <div>Phạm vi: <strong>${res.scope}</strong></div>
            </div>
          </div>
        </div>

        <div class="binary-box">
          <div style="margin-bottom:0.4rem;font-size:0.8rem;color:var(--text-secondary);">
            Biểu diễn Nhị phân 32-bit bằng phép toán <strong>ANDing</strong> (<span class="bit-net">■ ${res.prefix} bit Network</span> | <span class="bit-host">■ ${res.hostBits} bit Host</span>):
          </div>
          <div>IP Address : ${res.binaryIp} <span style="color:var(--text-secondary)">(${res.ip})</span></div>
          <div>Subnet Mask: ${res.binaryMask} <span style="color:var(--text-secondary)">(${res.mask})</span></div>
          <div>Network ID : ${res.binaryNet} <span style="color:var(--text-secondary)">(${res.network})</span></div>
        </div>

        <div class="exam-tip">
          <strong>🧮 Giải thích cách nhẩm nhanh khi đi thi FE:</strong>
          Với <code>/${res.prefix}</code>, số bit host còn lại là <code>h = 32 - ${res.prefix} = ${res.hostBits}</code> bit.
          Tại Octet thứ <strong>${res.interestingOctetIndex}</strong>, bước nhảy (Magic Number) là <strong>${res.magicNumber}</strong>.
          Địa chỉ mạng là bội số của ${res.magicNumber} gần nhất nhỏ hơn hoặc bằng giá trị octet của IP (<code>${res.network}</code>), và địa chỉ Broadcast là địa chỉ mạng tiếp theo trừ đi 1 (<code>${res.broadcast}</code>).
        </div>
      `;
    }

    if (calcBtn) {
      calcBtn.addEventListener("click", runCalc);
      ipInput.addEventListener("keyup", (e) => e.key === "Enter" && runCalc());
      prefixInput.addEventListener("change", runCalc);
      runCalc();
    }

    // VLSM Calculator
    const vlsmBtn = document.getElementById("vlsm-calc-btn");
    const vlsmAddRowBtn = document.getElementById("vlsm-add-row-btn");

    function runVlsm() {
      const baseIp = document.getElementById("vlsm-base-ip").value;
      const basePrefix = document.getElementById("vlsm-base-prefix").value;
      const rows = document.querySelectorAll(".vlsm-req-row");
      const reqs = [];
      rows.forEach((r) => {
        const name = r.querySelector(".vlsm-name").value.trim() || "Subnet";
        const hosts = parseInt(r.querySelector(".vlsm-hosts").value, 10);
        if (!isNaN(hosts) && hosts > 0) {
          reqs.push({ name, hosts });
        }
      });

      const out = document.getElementById("vlsm-output");
      const result = window.SubnetTools.calculateVLSM(baseIp, basePrefix, reqs);
      if (result.error) {
        out.innerHTML = `<div style="color:var(--danger);font-weight:600;padding:0.75rem;background:var(--danger-soft);border-radius:8px;">⚠️ ${result.error}</div>`;
        return;
      }

      out.innerHTML = `
        <div style="margin-bottom:0.6rem;font-size:0.86rem;color:var(--text-secondary);">
          Đã tự động sắp xếp từ phòng ban lớn nhất xuống nhỏ nhất trên mạng gốc <strong class="mono">${result.baseNetwork}</strong>:
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Tên Subnet</th>
                <th>Cần (Hosts)</th>
                <th>Cấp phát (2^h-2)</th>
                <th>Prefix / Mask</th>
                <th>Network Address</th>
                <th>Dải Host Khả Dụng (First - Last)</th>
                <th>Broadcast</th>
              </tr>
            </thead>
            <tbody>
              ${result.allocations
                .map(
                  (a) => `
                <tr>
                  <td style="font-weight:700;">${escapeHtml(a.name)}</td>
                  <td>${a.reqHosts}</td>
                  <td><span class="badge badge-success">${a.usableHosts} hosts</span> <span style="font-size:0.75rem;color:var(--text-muted);">(dư ${a.wasted})</span></td>
                  <td class="mono"><strong>/${a.prefix}</strong> (${a.mask})</td>
                  <td class="mono" style="color:var(--accent);font-weight:700;">${a.network}</td>
                  <td class="mono" style="color:var(--success);">${a.firstHost} &rarr; ${a.lastHost}</td>
                  <td class="mono" style="color:var(--warning);">${a.broadcast}</td>
                </tr>
              `
                )
                .join("")}
            </tbody>
          </table>
        </div>
      `;
    }

    if (vlsmBtn) {
      vlsmBtn.addEventListener("click", runVlsm);
      runVlsm();
    }

    if (vlsmAddRowBtn) {
      vlsmAddRowBtn.addEventListener("click", () => {
        const list = document.getElementById("vlsm-reqs-list");
        const idx = list.children.length + 1;
        const div = document.createElement("div");
        div.className = "vlsm-req-row";
        div.style.cssText = "display:flex;gap:0.5rem;margin-bottom:0.5rem;";
        div.innerHTML = `
          <input type="text" class="form-control vlsm-name" value="LAN ${idx}" style="flex:1;" />
          <input type="number" class="form-control vlsm-hosts" value="10" min="1" style="width:120px;" />
          <button class="btn btn-secondary btn-sm" onclick="this.parentElement.remove()">✕</button>
        `;
        list.appendChild(div);
      });
    }

    // Random Subnetting Drill
    const newDrillBtn = document.getElementById("drill-new-btn");
    const checkDrillBtn = document.getElementById("drill-check-btn");

    function loadNewDrill() {
      currentDrill = window.SubnetTools.generateDrillQuestion();
      document.getElementById("drill-target-ip").textContent = `${currentDrill.ip}/${currentDrill.prefix}`;
      document.getElementById("drill-ans-net").value = "";
      document.getElementById("drill-ans-first").value = "";
      document.getElementById("drill-ans-last").value = "";
      document.getElementById("drill-ans-bcast").value = "";
      document.getElementById("drill-feedback").innerHTML = "";
    }

    if (newDrillBtn) {
      newDrillBtn.addEventListener("click", loadNewDrill);
      checkDrillBtn.addEventListener("click", () => {
        if (!currentDrill) return;
        const uNet = document.getElementById("drill-ans-net").value.trim();
        const uFirst = document.getElementById("drill-ans-first").value.trim();
        const uLast = document.getElementById("drill-ans-last").value.trim();
        const uBcast = document.getElementById("drill-ans-bcast").value.trim();

        const okNet = uNet === currentDrill.network;
        const okFirst = uFirst === currentDrill.firstHost;
        const okLast = uLast === currentDrill.lastHost;
        const okBcast = uBcast === currentDrill.broadcast;
        const allOk = okNet && okFirst && okLast && okBcast;

        document.getElementById("drill-feedback").innerHTML = `
          <div class="explanation-box" style="border-left-color:${allOk ? "var(--success)" : "var(--warning)"};">
            <div style="font-weight:700;margin-bottom:0.4rem;color:${allOk ? "var(--success)" : "var(--warning)"};">
              ${allOk ? "🎉 Chính xác tuyệt đối! Bạn tính Subnet rất chuẩn!" : "🔍 Đối chiếu kết quả đáp án:"}
            </div>
            <div class="mono" style="font-size:0.85rem;display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:0.4rem;">
              <div>Network ID: <strong>${currentDrill.network}</strong> ${okNet ? "✅" : "❌"}</div>
              <div>First Host: <strong>${currentDrill.firstHost}</strong> ${okFirst ? "✅" : "❌"}</div>
              <div>Last Host: <strong>${currentDrill.lastHost}</strong> ${okLast ? "✅" : "❌"}</div>
              <div>Broadcast: <strong>${currentDrill.broadcast}</strong> ${okBcast ? "✅" : "❌"}</div>
            </div>
            <div style="margin-top:0.45rem;font-size:0.83rem;color:var(--text-secondary);">
              Subnet Mask: <code>${currentDrill.mask}</code> • Bước nhảy: <strong>${currentDrill.magicNumber}</strong> tại Octet #${currentDrill.interestingOctetIndex} • Số Host khả dụng: <strong>${currentDrill.usableHosts}</strong>.
            </div>
          </div>
        `;
      });
      loadNewDrill();
    }
  }

  // ==================== CISCO IOS CLI CHEAT SHEET ====================
  function initCliTab() {
    const container = document.getElementById("cli-categories-container");
    const searchInput = document.getElementById("cli-search-input");
    if (!container) return;

    function renderCli(q = "") {
      const query = q.trim().toLowerCase();
      container.innerHTML = window.NWC204_DATA.cliCommands
        .map((cat) => {
          const filtered = cat.items.filter(
            (item) =>
              !query ||
              item.title.toLowerCase().includes(query) ||
              item.cmd.toLowerCase().includes(query) ||
              item.desc.toLowerCase().includes(query)
          );
          if (filtered.length === 0) return "";
          return `
          <div class="card" style="margin-bottom:1.25rem;">
            <h3 class="card-title" style="margin-bottom:0.9rem;color:var(--accent);">${cat.category}</h3>
            ${filtered
              .map(
                (item) => `
              <div class="cli-card">
                <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;flex-wrap:wrap;">
                  <strong style="font-size:0.92rem;color:#f8fafc;">${item.title}</strong>
                  <span style="font-size:0.8rem;color:#94a3b8;">${item.desc}</span>
                </div>
                <div class="cli-cmd-row">
                  <div style="white-space:pre-wrap;line-height:1.5;"><span class="cli-prompt">${item.prompt}</span>${escapeHtml(item.cmd)}</div>
                  <button class="btn btn-secondary btn-sm" onclick="copyCliCommand(${JSON.stringify(item.cmd).replace(/"/g, "&quot;")})">📋 Copy</button>
                </div>
              </div>
            `
              )
              .join("")}
          </div>
        `;
        })
        .join("");
    }

    renderCli();
    if (searchInput) {
      searchInput.addEventListener("input", () => renderCli(searchInput.value));
    }
  }

  window.copyCliCommand = function (cmdText) {
    navigator.clipboard.writeText(cmdText).then(() => {
      showToast("Đã copy lệnh Cisco IOS vào Clipboard!");
    });
  };

  // ==================== FLASHCARDS ENGINE (ALL QUESTIONS + CORE TERMS) ====================
  let fcList = [];
  let fcIndex = 0;
  let fcViewMode = "single"; // "single" | "grid"
  let fcRevealAll = false;

  function initFlashcardsTab() {
    const catSelect = document.getElementById("fc-category-select");
    const filterSelect = document.getElementById("fc-status-select");
    const searchInput = document.getElementById("fc-search-input");
    const cardEl = document.getElementById("flashcard-el");
    const singleView = document.getElementById("fc-single-view");
    const gridView = document.getElementById("fc-grid-view");
    const gridContainer = document.getElementById("fc-grid-container");
    const singleBtn = document.getElementById("fc-mode-single-btn");
    const gridBtn = document.getElementById("fc-mode-grid-btn");
    const revealAllBtn = document.getElementById("fc-reveal-all-btn");
    const letters = ["A", "B", "C", "D", "E", "F"];

    function populateCategories() {
      const prevVal = catSelect.value;
      const allCards = getAllFlashcards();
      const qCount = allCards.filter((c) => c.isQuestion).length;
      const cats = Array.from(new Set(allCards.map((c) => c.category)));

      catSelect.innerHTML =
        `<option value="ALL">📚 Tất cả Câu hỏi &amp; Thẻ (${allCards.length} thẻ)</option>` +
        `<option value="ALL_QUESTIONS">🔥 Tất cả Câu hỏi 6 Đề FE (${qCount} câu)</option>` +
        cats
          .map((c) => {
            const count = allCards.filter((item) => item.category === c).length;
            return `<option value="${escapeHtml(c)}">${escapeHtml(c)} (${count} thẻ)</option>`;
          })
          .join("");

      if (prevVal && Array.from(catSelect.options).some((o) => o.value === prevVal)) {
        catSelect.value = prevVal;
      }
    }

    function filterCards() {
      const cat = catSelect.value;
      const status = filterSelect.value;
      const query = (searchInput ? searchInput.value : "").trim().toLowerCase();

      fcList = getAllFlashcards().filter((c) => {
        const matchCat =
          cat === "ALL" ||
          (cat === "ALL_QUESTIONS" && c.isQuestion) ||
          c.category === cat;
        const isMastered = state.masteredFlashcards.includes(c.id);
        const matchStatus =
          status === "ALL" ||
          (status === "UNMASTERED" && !isMastered) ||
          (status === "MASTERED" && isMastered);

        let matchQuery = true;
        if (query) {
          const inTerm = c.term.toLowerCase().includes(query);
          const inAns = (c.answer || "").toLowerCase().includes(query);
          const inCorrect = (c.correctText || "").toLowerCase().includes(query);
          const inOpts = (c.options || []).some((o) => o.toLowerCase().includes(query));
          matchQuery = inTerm || inAns || inCorrect || inOpts;
        }
        return matchCat && matchStatus && matchQuery;
      });
      fcIndex = 0;
      renderCurrentCard();
      if (fcViewMode === "grid") {
        renderGridCards();
      }
    }

    function renderCurrentCard() {
      cardEl.classList.remove("flipped");
      const counterEl = document.getElementById("fc-counter");
      const frontCat = document.getElementById("fc-front-cat");
      const frontMulti = document.getElementById("fc-front-multi");
      const frontTerm = document.getElementById("fc-front-term");
      const frontOpts = document.getElementById("fc-front-options");
      const backCorrectBox = document.getElementById("fc-back-correct-box");
      const backAns = document.getElementById("fc-back-ans");
      const masterBtn = document.getElementById("fc-master-btn");

      if (fcList.length === 0) {
        counterEl.textContent = "0 / 0";
        frontCat.textContent = "Trống";
        if (frontMulti) frontMulti.style.display = "none";
        frontTerm.textContent = "Không tìm thấy câu hỏi/thẻ nào khớp với bộ lọc hiện tại!";
        if (frontOpts) frontOpts.innerHTML = "";
        if (backCorrectBox) backCorrectBox.style.display = "none";
        backAns.textContent = "Hãy xóa từ khóa tìm kiếm hoặc chọn lại chủ đề.";
        masterBtn.disabled = true;
        return;
      }

      masterBtn.disabled = false;
      const item = fcList[fcIndex];
      const isMastered = state.masteredFlashcards.includes(item.id);
      counterEl.textContent = `Câu ${fcIndex + 1} / ${fcList.length}`;
      frontCat.textContent = item.category + (isMastered ? " • ✓ Đã thuộc" : "");

      if (frontMulti) {
        if (item.correctIndexes && item.correctIndexes.length > 1) {
          frontMulti.style.display = "inline-flex";
          frontMulti.textContent = `Chọn ${item.correctIndexes.length} đáp án`;
        } else {
          frontMulti.style.display = "none";
        }
      }

      frontTerm.textContent = item.term;

      if (frontOpts) {
        if (item.options && item.options.length > 0) {
          frontOpts.style.display = "flex";
          frontOpts.innerHTML = item.options
            .map(
              (opt, idx) => `
              <div class="fc-opt-item">
                <span class="fc-opt-letter">${letters[idx] || idx + 1}.</span>
                <span>${escapeHtml(opt)}</span>
              </div>
            `
            )
            .join("");
        } else {
          frontOpts.style.display = "none";
          frontOpts.innerHTML = "";
        }
      }

      if (backCorrectBox) {
        if (item.correctText) {
          backCorrectBox.style.display = "block";
          backCorrectBox.innerHTML = `<div style="font-size:0.84rem;color:var(--success);text-transform:uppercase;letter-spacing:0.04em;margin-bottom:0.25rem;">Đáp án đúng:</div><div style="white-space:pre-line;">${escapeHtml(item.correctText)}</div>`;
        } else {
          backCorrectBox.style.display = "none";
        }
      }

      backAns.textContent = item.answer;

      masterBtn.textContent = isMastered ? "✓ Đã thuộc (Bỏ đánh dấu)" : "⭐ Đánh dấu Đã thuộc";
      masterBtn.className = isMastered ? "btn btn-success" : "btn btn-secondary";
    }

    function renderGridCards() {
      if (!gridContainer) return;
      if (fcList.length === 0) {
        gridContainer.innerHTML = `<div class="theory-box">Không có câu hỏi nào khớp với bộ lọc hiện tại.</div>`;
        return;
      }

      gridContainer.innerHTML = fcList
        .map((item, idx) => {
          const isMastered = state.masteredFlashcards.includes(item.id);
          const optsHtml =
            item.options && item.options.length
              ? `<div class="fc-options-preview" style="margin-top:0.45rem;">
                  ${item.options
                    .map(
                      (o, i) => `
                      <div class="fc-opt-item" style="${
                        item.correctIndexes && item.correctIndexes.includes(i)
                          ? "border-color:rgba(16,185,129,0.4);"
                          : ""
                      }">
                        <span class="fc-opt-letter">${letters[i] || i + 1}.</span>
                        <span>${escapeHtml(o)}</span>
                      </div>`
                    )
                    .join("")}
                </div>`
              : "";

          return `
            <div class="fc-mini-card ${fcRevealAll ? "revealed" : ""}" id="fc-mini-${idx}">
              <div>
                <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;margin-bottom:0.5rem;">
                  <span class="badge">${escapeHtml(item.category)}</span>
                  <span style="font-size:0.82rem;color:var(--text-muted);font-weight:700;">#${idx + 1}</span>
                </div>
                <div style="font-weight:800;font-size:1.08rem;line-height:1.5;white-space:pre-line;margin-bottom:0.5rem;">${escapeHtml(item.term)}</div>
                ${optsHtml}
                <div class="fc-mini-ans">
                  ${
                    item.correctText
                      ? `<div style="font-weight:800;color:var(--success);margin-bottom:0.35rem;white-space:pre-line;">✅ Đáp án: ${escapeHtml(item.correctText)}</div>`
                      : ""
                  }
                  <div style="font-size:0.95rem;color:var(--text-secondary);white-space:pre-line;">💡 ${escapeHtml(item.answer)}</div>
                </div>
              </div>
              <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;padding-top:0.6rem;border-top:1px solid var(--border);">
                <button class="btn btn-secondary btn-sm" onclick="toggleMiniCard(${idx})">👁️ Lật xem đáp án</button>
                <button class="btn ${isMastered ? "btn-success" : "btn-secondary"} btn-sm" onclick="toggleMasterById('${escapeHtml(String(item.id))}')">
                  ${isMastered ? "✓ Đã thuộc" : "⭐ Đánh dấu thuộc"}
                </button>
              </div>
            </div>
          `;
        })
        .join("");
    }

    window.toggleMiniCard = function (idx) {
      const el = document.getElementById(`fc-mini-${idx}`);
      if (el) el.classList.toggle("revealed");
    };

    window.toggleMasterById = function (rawId) {
      const target = getAllFlashcards().find((c) => String(c.id) === String(rawId));
      if (!target) return;
      if (state.masteredFlashcards.includes(target.id)) {
        state.masteredFlashcards = state.masteredFlashcards.filter((id) => id !== target.id);
      } else {
        state.masteredFlashcards.push(target.id);
      }
      saveState();
      renderCurrentCard();
      if (fcViewMode === "grid") renderGridCards();
    };

    if (singleBtn && gridBtn) {
      singleBtn.addEventListener("click", () => {
        fcViewMode = "single";
        singleBtn.className = "btn btn-sm";
        gridBtn.className = "btn btn-secondary btn-sm";
        if (revealAllBtn) revealAllBtn.style.display = "none";
        singleView.style.display = "block";
        gridView.style.display = "none";
      });

      gridBtn.addEventListener("click", () => {
        fcViewMode = "grid";
        gridBtn.className = "btn btn-sm";
        singleBtn.className = "btn btn-secondary btn-sm";
        if (revealAllBtn) revealAllBtn.style.display = "inline-flex";
        singleView.style.display = "none";
        gridView.style.display = "block";
        renderGridCards();
      });
    }

    if (revealAllBtn) {
      revealAllBtn.addEventListener("click", () => {
        fcRevealAll = !fcRevealAll;
        revealAllBtn.textContent = fcRevealAll ? "🙈 Ẩn tất cả đáp án" : "👁️ Hiện tất cả đáp án";
        renderGridCards();
      });
    }

    cardEl.addEventListener("click", () => {
      cardEl.classList.toggle("flipped");
    });

    document.getElementById("fc-prev-btn").addEventListener("click", () => {
      if (!fcList.length) return;
      fcIndex = (fcIndex - 1 + fcList.length) % fcList.length;
      renderCurrentCard();
    });

    document.getElementById("fc-next-btn").addEventListener("click", () => {
      if (!fcList.length) return;
      fcIndex = (fcIndex + 1) % fcList.length;
      renderCurrentCard();
    });

    document.getElementById("fc-shuffle-btn").addEventListener("click", () => {
      fcList.sort(() => Math.random() - 0.5);
      fcIndex = 0;
      renderCurrentCard();
      if (fcViewMode === "grid") renderGridCards();
      showToast("Đã trộn ngẫu nhiên toàn bộ câu hỏi Flashcard!");
    });

    document.getElementById("fc-master-btn").addEventListener("click", () => {
      if (!fcList.length) return;
      const item = fcList[fcIndex];
      if (state.masteredFlashcards.includes(item.id)) {
        state.masteredFlashcards = state.masteredFlashcards.filter((id) => id !== item.id);
      } else {
        state.masteredFlashcards.push(item.id);
        showToast("Đã đánh dấu thuộc câu này!");
      }
      saveState();
      renderCurrentCard();
    });

    catSelect.addEventListener("change", filterCards);
    filterSelect.addEventListener("change", filterCards);
    if (searchInput) {
      searchInput.addEventListener("input", filterCards);
    }

    window.addEventListener("keydown", (e) => {
      const activePanel = document.querySelector(".tab-panel.active");
      if (!activePanel || activePanel.id !== "tab-flashcards" || fcViewMode !== "single") return;
      if (["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) return;

      if (e.code === "Space") {
        e.preventDefault();
        cardEl.classList.toggle("flipped");
      } else if (e.code === "ArrowRight") {
        document.getElementById("fc-next-btn").click();
      } else if (e.code === "ArrowLeft") {
        document.getElementById("fc-prev-btn").click();
      }
    });

    window.refreshFlashcardsUI = function () {
      populateCategories();
      filterCards();
    };

    populateCategories();
    filterCards();
  }

  // ==================== QUIZ & MOCK EXAM ENGINE (SUPPORTS MULTI-SELECT) ====================
  let quizSession = {
    mode: "practice",
    questions: [],
    currentIndex: 0,
    userAnswers: {}, // index -> number (single) OR array of numbers (multi)
    flagged: {},
    submitted: false,
    timerSeconds: 0,
    timerInterval: null
  };

  function initQuizTab() {
    const topicSelect = document.getElementById("quiz-topic-select");
    const modeSelect = document.getElementById("quiz-mode-select");
    const countSelect = document.getElementById("quiz-count-select");
    const startBtn = document.getElementById("quiz-start-btn");

    function populateTopics() {
      const prevVal = topicSelect.value;
      const allQs = getAllQuestions();
      const topics = Array.from(new Set(allQs.map((q) => q.topic)));
      topicSelect.innerHTML =
        `<option value="ALL">Tất cả 6 Đề FE kỳ trước (${allQs.length} câu)</option>` +
        `<option value="WRONG">🔥 Các câu từng làm sai (${state.wrongQuestionIds.length} câu)</option>` +
        topics
          .map((t) => {
            const c = allQs.filter((q) => q.topic === t).length;
            return `<option value="${escapeHtml(t)}">${escapeHtml(t)} (${c} câu)</option>`;
          })
          .join("");
      if (prevVal && Array.from(topicSelect.options).some((o) => o.value === prevVal)) {
        topicSelect.value = prevVal;
      }
    }

    function startQuiz() {
      clearInterval(quizSession.timerInterval);
      const topic = topicSelect.value;
      const mode = modeSelect.value;
      const maxCount = parseInt(countSelect.value, 10) || 999;

      let pool = getAllQuestions();
      if (topic === "WRONG") {
        pool = pool.filter((q) => state.wrongQuestionIds.includes(q.id));
        if (pool.length === 0) {
          showToast("Bạn chưa có câu trả lời sai nào! Hệ thống sẽ lấy tất cả câu hỏi.");
          pool = getAllQuestions();
        }
      } else if (topic !== "ALL") {
        pool = pool.filter((q) => q.topic === topic);
      }

      if (mode === "exam") {
        pool = [...pool].sort(() => Math.random() - 0.5);
      }
      pool = pool.slice(0, maxCount);

      quizSession = {
        mode,
        questions: pool,
        currentIndex: 0,
        userAnswers: {},
        flagged: {},
        submitted: false,
        timerSeconds: mode === "exam" ? pool.length * 60 : 0,
        timerInterval: null
      };

      const timerBox = document.getElementById("quiz-timer-box");
      if (mode === "exam") {
        timerBox.style.display = "inline-flex";
        updateTimerDisplay();
        quizSession.timerInterval = setInterval(() => {
          quizSession.timerSeconds--;
          updateTimerDisplay();
          if (quizSession.timerSeconds <= 0) {
            clearInterval(quizSession.timerInterval);
            submitQuiz();
          }
        }, 1000);
      } else {
        timerBox.style.display = "none";
      }

      document.getElementById("quiz-result-banner").style.display = "none";
      renderQuizQuestion();
      renderQuizPalette();
    }

    function updateTimerDisplay() {
      const m = Math.floor(quizSession.timerSeconds / 60)
        .toString()
        .padStart(2, "0");
      const s = (quizSession.timerSeconds % 60).toString().padStart(2, "0");
      document.getElementById("quiz-timer-box").textContent = `⏱️ ${m}:${s}`;
    }

    function renderQuizQuestion() {
      const qList = quizSession.questions;
      const idx = quizSession.currentIndex;
      const q = qList[idx];
      if (!q) return;

      const multi = isMultiQuestion(q);
      const reqCount = multi ? q.answer.length : 1;

      document.getElementById("quiz-q-meta").innerHTML = `
        <span class="badge">${escapeHtml(q.topic)}</span>
        ${multi ? `<span class="badge badge-warning">Chọn ${reqCount} đáp án</span>` : ""}
        <span style="color:var(--text-secondary);font-size:0.86rem;font-weight:600;">Câu ${idx + 1} / ${qList.length}</span>
      `;
      document.getElementById("quiz-q-text").textContent = q.question;

      const flagBtn = document.getElementById("quiz-flag-btn");
      flagBtn.textContent = quizSession.flagged[idx] ? "🚩 Đã gắn cờ" : "🏳️ Gắn cờ xem lại";

      const chosen = quizSession.userAnswers[idx];
      const chosenArr =
        chosen === undefined ? [] : Array.isArray(chosen) ? chosen : [chosen];
      const correctArr = getCorrectArray(q);

      const showAnswerNow =
        quizSession.submitted ||
        (quizSession.mode === "practice" && isQuestionCompletedInPractice(q, chosen));

      const letters = ["A", "B", "C", "D", "E", "F"];
      const optsContainer = document.getElementById("quiz-options-list");
      optsContainer.innerHTML = q.options
        .map((opt, optIdx) => {
          let cls = "option-btn";
          const isSelected = chosenArr.includes(optIdx);
          const isRightOpt = correctArr.includes(optIdx);

          if (isSelected) cls += " selected";
          if (showAnswerNow) {
            if (isRightOpt) cls += " correct";
            else if (isSelected && !isRightOpt) cls += " wrong";
          }
          return `
          <button class="${cls}" ${quizSession.submitted ? "disabled" : ""} onclick="selectQuizOption(${optIdx})">
            <span class="option-letter">${letters[optIdx] || optIdx + 1}</span>
            <span>${escapeHtml(opt)}</span>
          </button>
        `;
        })
        .join("");

      const expContainer = document.getElementById("quiz-explanation-box");
      if (showAnswerNow) {
        const isCorrect = isAnswerCorrect(q, chosen);
        const rightLetters = correctArr.map((i) => letters[i]).join(", ");
        expContainer.style.display = "block";
        expContainer.innerHTML = `
          <div style="font-weight:700;margin-bottom:0.35rem;color:${isCorrect ? "var(--success)" : "var(--danger)"};">
            ${isCorrect ? `✅ Chính xác! (${rightLetters})` : `❌ Chưa đúng! Đáp án đúng là: ${rightLetters}.`}
          </div>
          <div style="color:var(--text-secondary);">${escapeHtml(q.explanation)}</div>
        `;
      } else {
        expContainer.style.display = "none";
      }

      document.getElementById("quiz-prev-btn").disabled = idx === 0;
      document.getElementById("quiz-next-btn").disabled = idx === qList.length - 1;
    }

    function renderQuizPalette() {
      const palette = document.getElementById("quiz-palette-grid");
      palette.innerHTML = quizSession.questions
        .map((q, i) => {
          let cls = "q-dot";
          if (i === quizSession.currentIndex) cls += " current";
          const ans = quizSession.userAnswers[i];
          const completed = isQuestionCompletedInPractice(q, ans);

          if (quizSession.submitted || (quizSession.mode === "practice" && completed)) {
            cls += isAnswerCorrect(q, ans) ? " correct" : " wrong";
          } else if (ans !== undefined && (!Array.isArray(ans) || ans.length > 0)) {
            cls += " answered";
          }
          if (quizSession.flagged[i]) cls += " flagged";
          return `<button class="${cls}" onclick="jumpQuizQuestion(${i})">${i + 1}</button>`;
        })
        .join("");
    }

    window.selectQuizOption = function (optIdx) {
      if (quizSession.submitted) return;
      const idx = quizSession.currentIndex;
      const q = quizSession.questions[idx];

      if (isMultiQuestion(q)) {
        const reqCount = q.answer.length;
        let cur = Array.isArray(quizSession.userAnswers[idx])
          ? [...quizSession.userAnswers[idx]]
          : [];
        if (cur.includes(optIdx)) {
          cur = cur.filter((x) => x !== optIdx);
        } else {
          if (cur.length >= reqCount) {
            // Reset and start fresh selection if already reached required count
            cur = [optIdx];
          } else {
            cur.push(optIdx);
          }
        }
        quizSession.userAnswers[idx] = cur;
      } else {
        quizSession.userAnswers[idx] = optIdx;
      }

      const ans = quizSession.userAnswers[idx];
      if (quizSession.mode === "practice" && isQuestionCompletedInPractice(q, ans)) {
        if (!isAnswerCorrect(q, ans)) {
          if (!state.wrongQuestionIds.includes(q.id)) state.wrongQuestionIds.push(q.id);
        } else {
          state.wrongQuestionIds = state.wrongQuestionIds.filter((id) => id !== q.id);
        }
        saveState();
        populateTopics();
      }

      renderQuizQuestion();
      renderQuizPalette();
    };

    window.jumpQuizQuestion = function (idx) {
      quizSession.currentIndex = idx;
      renderQuizQuestion();
      renderQuizPalette();
    };

    function submitQuiz() {
      clearInterval(quizSession.timerInterval);
      quizSession.submitted = true;
      let correct = 0;

      quizSession.questions.forEach((q, i) => {
        const ans = quizSession.userAnswers[i];
        if (isAnswerCorrect(q, ans)) {
          correct++;
          state.wrongQuestionIds = state.wrongQuestionIds.filter((id) => id !== q.id);
        } else {
          if (!state.wrongQuestionIds.includes(q.id)) state.wrongQuestionIds.push(q.id);
        }
      });

      const total = quizSession.questions.length;
      const pct = total ? Math.round((correct / total) * 100) : 0;
      const grade10 = total ? ((correct / total) * 10).toFixed(1) : "0.0";

      state.quizAttempts++;
      if (pct > state.quizBestScore) state.quizBestScore = pct;
      saveState();
      populateTopics();

      const banner = document.getElementById("quiz-result-banner");
      banner.style.display = "block";
      const passed = pct >= 50;
      banner.innerHTML = `
        <div class="card" style="border-color:${passed ? "var(--success)" : "var(--danger)"};margin-bottom:1.25rem;">
          <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;">
            <div>
              <span class="badge ${passed ? "badge-success" : "badge-danger"}">
                ${passed ? "PASSED FE (>= 5.0)" : "CẦN ÔN THÊM (< 5.0)"}
              </span>
              <h3 style="font-size:1.35rem;margin-top:0.35rem;">
                Kết quả: ${correct}/${total} câu đúng (${pct}% — Điểm hệ 10: ${grade10}/10)
              </h3>
              <p style="color:var(--text-secondary);font-size:0.88rem;">
                Bấm vào từng ô số bên phải để xem giải thích chi tiết cho các câu làm sai (màu đỏ).
              </p>
            </div>
            <button class="btn" onclick="document.getElementById('quiz-start-btn').click()">🔄 Làm đề mới</button>
          </div>
        </div>
      `;

      renderQuizQuestion();
      renderQuizPalette();
      showToast(`Đã nộp bài! Bạn đạt ${grade10}/10 điểm (${pct}%).`);
    }

    document.getElementById("quiz-prev-btn").addEventListener("click", () => {
      if (quizSession.currentIndex > 0) {
        quizSession.currentIndex--;
        renderQuizQuestion();
        renderQuizPalette();
      }
    });

    document.getElementById("quiz-next-btn").addEventListener("click", () => {
      if (quizSession.currentIndex < quizSession.questions.length - 1) {
        quizSession.currentIndex++;
        renderQuizQuestion();
        renderQuizPalette();
      }
    });

    document.getElementById("quiz-flag-btn").addEventListener("click", () => {
      const idx = quizSession.currentIndex;
      quizSession.flagged[idx] = !quizSession.flagged[idx];
      renderQuizQuestion();
      renderQuizPalette();
    });

    document.getElementById("quiz-submit-btn").addEventListener("click", submitQuiz);
    startBtn.addEventListener("click", startQuiz);
    topicSelect.addEventListener("change", startQuiz);
    modeSelect.addEventListener("change", startQuiz);
    countSelect.addEventListener("change", startQuiz);

    window.refreshQuizUI = function () {
      populateTopics();
      startQuiz();
    };

    populateTopics();
    startQuiz();
  }

  // ==================== CUSTOM CONTENT MODAL ====================
  function initCustomModal() {
    const modal = document.getElementById("custom-modal");
    const openBtn = document.getElementById("open-custom-modal-btn");
    const closeBtn = document.getElementById("close-custom-modal-btn");

    if (openBtn && modal) {
      openBtn.addEventListener("click", () => modal.classList.add("open"));
      closeBtn.addEventListener("click", () => modal.classList.remove("open"));
      modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.classList.remove("open");
      });
    }

    const addFcBtn = document.getElementById("add-custom-fc-btn");
    if (addFcBtn) {
      addFcBtn.addEventListener("click", () => {
        const cat = document.getElementById("custom-fc-cat").value.trim() || "Tự thêm";
        const term = document.getElementById("custom-fc-term").value.trim();
        const ans = document.getElementById("custom-fc-ans").value.trim();
        if (!term || !ans) {
          showToast("Vui lòng nhập đầy đủ Thuật ngữ và Giải nghĩa!");
          return;
        }
        state.customFlashcards.push({
          id: Date.now(),
          category: cat,
          term,
          answer: ans
        });
        saveState();
        document.getElementById("custom-fc-term").value = "";
        document.getElementById("custom-fc-ans").value = "";
        if (window.refreshFlashcardsUI) window.refreshFlashcardsUI();
        showToast("Đã thêm Flashcard mới thành công!");
      });
    }

    const addQBtn = document.getElementById("add-custom-q-btn");
    if (addQBtn) {
      addQBtn.addEventListener("click", () => {
        const topic = document.getElementById("custom-q-topic").value.trim() || "Tự thêm";
        const question = document.getElementById("custom-q-text").value.trim();
        const optA = document.getElementById("custom-q-a").value.trim();
        const optB = document.getElementById("custom-q-b").value.trim();
        const optC = document.getElementById("custom-q-c").value.trim();
        const optD = document.getElementById("custom-q-d").value.trim();
        const correctIdx = parseInt(document.getElementById("custom-q-ans").value, 10) || 0;
        const explanation =
          document.getElementById("custom-q-exp").value.trim() || "Câu hỏi tự bổ sung.";

        if (!question || !optA || !optB) {
          showToast("Vui lòng nhập nội dung câu hỏi và ít nhất 2 đáp án A, B!");
          return;
        }
        const options = [optA, optB, optC, optD].filter(Boolean);
        state.customQuestions.push({
          id: Date.now(),
          topic,
          question,
          options,
          answer: Math.min(correctIdx, options.length - 1),
          explanation
        });
        saveState();
        document.getElementById("custom-q-text").value = "";
        document.getElementById("custom-q-a").value = "";
        document.getElementById("custom-q-b").value = "";
        document.getElementById("custom-q-c").value = "";
        document.getElementById("custom-q-d").value = "";
        document.getElementById("custom-q-exp").value = "";
        if (window.refreshQuizUI) window.refreshQuizUI();
        showToast("Đã thêm câu hỏi trắc nghiệm mới vào ngân hàng đề!");
      });
    }

    const resetBtn = document.getElementById("reset-progress-btn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        if (confirm("Bạn có chắc muốn đặt lại tiến độ học tập về ban đầu không?")) {
          state = { ...defaultState, theme: state.theme };
          saveState();
          renderChapters();
          if (window.refreshFlashcardsUI) window.refreshFlashcardsUI();
          if (window.refreshQuizUI) window.refreshQuizUI();
          showToast("Đã đặt lại tiến độ học tập!");
        }
      });
    }
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function initCheatSheetFilter() {
    const input = document.getElementById("cheatsheet-filter-input");
    if (!input) return;
    input.addEventListener("input", () => {
      const q = input.value.trim().toLowerCase();
      document.querySelectorAll("#tab-cheatsheet .cs-item").forEach((el) => {
        if (!q) {
          el.style.display = "";
          return;
        }
        const match = el.textContent.toLowerCase().includes(q);
        el.style.display = match ? "" : "none";
      });
    });
  }

  // ==================== INITIALIZATION ====================
  document.addEventListener("DOMContentLoaded", () => {
    applyTheme();
    applyFontScale();

    document.getElementById("theme-toggle-btn").addEventListener("click", () => {
      state.theme = state.theme === "dark" ? "light" : "dark";
      applyTheme();
      saveState();
    });

    document.querySelectorAll(".nav-tab").forEach((btn) => {
      btn.addEventListener("click", () => switchTab(btn.dataset.tab));
    });

    renderFeAnalysis();
    updateDashboardStats();
    initGlobalSearch();
    initCheatSheetFilter();
    initOsiVisualizer();
    renderChapters();
    renderPortsTable();
    initSubnetTab();
    initCliTab();
    initFlashcardsTab();
    initQuizTab();
    initCustomModal();
  });
})();
