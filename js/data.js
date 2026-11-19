window.NWC204_DATA = {
  feAnalysis: {
    totalAnalyzed: 294,
    exams: [
      "Đề FE Set 1 (46 câu)",
      "Đề FE Set 2 (50 câu)",
      "Đề FE SU26_RE (50 câu)",
      "Đề FE SP26_RE (50 câu)",
      "Đề FE FA25_RE (48 câu)",
      "Đề FE FA25_FE85 (50 câu)"
    ],
    difficultySummary: "Độ khó qua 6 đề FE thực tế: Cơ bản - Trung bình (~85% câu hỏi lý thuyết nhận biết & hiểu bản chất theo chuẩn Cisco NetAcad ITN v7; ~15% câu hỏi tính toán Subnet/IPv6 & xử lý tình huống CLI/bảng MAC/bảng định tuyến). Tỷ lệ trùng lặp câu hỏi giữa các kỳ lên tới 45% - 60%!",
    distribution: [
      {
        topic: "1. IPv4/IPv6 Addressing & Subnetting",
        weight: "24% (~12 câu/đề)",
        freq: "Cực cao",
        keyPoints: [
          "IPv6: 128-bit (Hex), rút gọn địa chỉ (chỉ dùng '::' 1 lần duy nhất, VD: 3FFE:1044:0:0:AB::57), Link-Local (FE80::/10 - VD hợp lệ: FE80::1:1, FE80:5678:4251::FFFF; tự động gán khi bật IPv6 trên cổng, chỉ giao tiếp trong 1 segment), Global Unicast (2001:DB8::...), Unique Local (ULA - FC00::/7), Loopback (::1), All-hosts & All-routers multicast (FF02::1 và FF02::2), Solicited-node multicast (FF02::1:FFxx:xxxx).",
          "Cơ chế IPv6 & Coexistence: SLAAC (tự cấp IPv6 động không cần DHCPv6), EUI-64 (dùng MAC 48-bit tạo Interface ID 64-bit), DAD (kiểm tra trùng IPv6 bằng NS; nếu phát hiện trùng lúc khởi động sẽ gửi Neighbor Advertisement NA báo cho máy gửi), ICMPv6 ND (dùng 2 bản tin Neighbor Solicitation & Neighbor Advertisement thay thế ARP). Ba kỹ thuật song hành IPv4/IPv6: Dual-stack (chạy song song), Tunneling (bọc gói IPv6 bên trong gói IPv4), Translation (NAT64 biên dịch qua lại).",
          "Chia Subnet IPv6: Prefix chuẩn cho LAN là /64; chia từ /48 sang /52 (mượn 4 bit hextet 4 -> subnet cuối là 2001:db8:0:f000::/52); nếu dùng 1 chữ số Hex (4 bit) cho mỗi cấp Site / Sub-site / Subnet thì mỗi Sub-site tạo được tối đa 2^4 = 16 subnets.",
          "Chia Subnet IPv4: Phép ANDing tìm Network Address; Public vs Private RFC 1918 (10.x.x.x, 172.16-31.x.x, 192.168.x.x; còn 198.133.219.162 là Public); Directed broadcast (gửi tới tất cả host trên một mạng ở xa); /22 (255.255.252.0 -> 1022 hosts; 172.16.16.0/22 có broadcast 172.16.19.255), /24 (bcast .255), /26 (.192 -> 62 hosts), /27 (.224 -> 30 hosts, gán 10.16.10.64/27 cho mạng 25 hosts), /30 (.252 -> 2 hosts)."
        ]
      },
      {
        topic: "2. Cisco IOS CLI, Modes & Cấu hình Thiết bị",
        weight: "22% (~11 câu/đề)",
        freq: "Cực cao",
        keyPoints: [
          "Thứ tự các Mode khi cấu hình Console password: User EXEC (1st) -> Privileged EXEC '#' (2nd - truy cập mọi lệnh) -> Global Config (3rd) -> Line Config (4th - gõ login & password). Có 3 nơi đặt được mật khẩu bảo vệ: VTY interface, Console interface, và Privileged EXEC mode.",
          "Phương thức truy cập IOS: Đứng trực tiếp trong phòng máy với Switch mới -> dùng Console; truy cập in-band qua kết nối mạng -> dùng Telnet/SSH (SSH ưu việt hơn nhờ Encryption).",
          "Các lệnh bắt buộc thuộc lòng: 'enable secret' (bảo mật Privileged EXEC), 'hostname' (đặt tên thiết bị), 'service password-encryption' (ngăn nhìn trộm mật khẩu plaintext khi xem running-config), 'show ip interface brief' (xem tóm tắt IP và trạng thái cổng), 'no shutdown' (kích hoạt cổng đang down).",
          "Bộ nhớ Router/Switch: NVRAM lưu startup-config và giữ nguyên nội dung khi mất điện. Lệnh 'copy running-config startup-config' làm thay đổi nội dung của NVRAM.",
          "Switch SVI & Default Gateway: Giao diện ảo SVI (switch virtual interface) giúp quản trị từ xa Switch L2. Default Gateway trên Switch chỉ dùng để chuyển tiếp các gói tin khởi phát từ chính con Switch đó đi ra mạng khác. Trên PC, Default Gateway là địa chỉ IP của cổng Router nối trực tiếp với mạng LAN của PC."
        ]
      },
      {
        topic: "3. Data Link Layer (L2), Ethernet, Switch & ARP",
        weight: "20% (~10 câu/đề)",
        freq: "Rất cao",
        keyPoints: [
          "Cấu trúc Frame Ethernet: 3 phần (Header, Data, Trailer). Ba thành phần nằm trong Header & Trailer là: Source MAC, Destination MAC, và Error-checking information (FCS). Frame < 64 bytes (Runt) hoặc sai CRC trong FCS sẽ bị Switch DROP ngay.",
          "Hai tầng con IEEE 802: Logical Link Control (LLC) và Media Access Control (MAC - phụ trách Ethernet addressing & media access). Trong mạng Wi-Fi 802.11, CSMA/CA tránh xung đột bằng cách chỉ truyền khi đường truyền rảnh (medium is idle) hoặc đặt chỗ.",
          "Hoạt động của Switch: Dùng Source MAC để xây dựng bảng MAC và dùng Destination MAC để chuyển tiếp Frame. Hai tính năng Auto-MDIX (tự nhận cáp thẳng/chéo) & Autonegotiation giúp 2 Switch mới nối bằng cáp thẳng tự chạy ở tốc độ cao nhất chung và chế độ Full-duplex.",
          "Bài tập Bảng MAC & Đóng gói qua Router: Khi PC1 gửi cho PC3 mà MAC của PC3 chưa có trong bảng MAC -> Switch flood ra tất cả cổng trừ cổng nhận (ví dụ ra cả cổng 1 và 3). Khi Web Server gửi trả về PC1 qua 2 Router -> Destination MAC của Frame lúc rời Web Server phải là MAC của cổng Default Gateway nối trực tiếp với Web Server (00-60-2F-3A-07-CC).",
          "Multicast MAC & ARP: Địa chỉ Multicast MAC mang gói IPv4 luôn bắt đầu bằng 24 bit đầu là `01-00-5E`. ARP Request được nhận và xử lý bởi mọi thiết bị trên mạng cục bộ (Dest MAC = FFFF.FFFF.FFFF). Xem bảng ARP trên Windows bằng `arp -a`."
        ]
      },
      {
        topic: "4. OSI Model, TCP/IP, Network Basics & Physical (L1)",
        weight: "18% (~9 câu/đề)",
        freq: "Rất cao",
        keyPoints: [
          "Thứ tự đóng gói (Encapsulation) khi gửi Telnet: (1) Telnet-formatted data chuyển xuống tầng dưới -> (2) Thêm TCP header -> (3) Thêm IP header -> (4) Thêm Ethernet header (1C-2B-3D-4A). Khi nhận (Decode) ở Web Client: Ethernet -> IP -> TCP -> HTTP. Khi PC gửi dữ liệu: Segments được chuyển từ Transport layer xuống Internet layer.",
          "Chức năng các tầng: Session layer (Layer 5) khởi tạo và quản lý hội thoại giữa các tiến trình ngang hàng (initiate dialog between peers). Data Link layer (Layer 2) nhận gói Layer 3 đóng gói thành Frame, điều khiển truy cập môi trường truyền và phát hiện lỗi. Physical layer (Layer 1) vận chuyển các bit qua môi trường truyền bằng tín hiệu.",
          "Truyền dẫn & Lỗi: Half-duplex chỉ truyền dữ liệu theo 1 chiều tại một thời điểm. Khi 2 hoặc nhiều bit bị biến đổi trong quá trình truyền -> gọi là lỗi chùm (Burst error). Lỗi bấm hạt mạng RJ-45 phổ biến nhất trong hình chụp là tháo xoắn dây đồng quá dài (untwisted length of each wire is too long).",
          "Băng thông vs Thông lượng (Throughput): 3 yếu tố làm Throughput thấp hơn Bandwidth kỳ vọng là: (1) Lưu lượng hiện tại đang đi qua mạng, (2) Loại lưu lượng (type of traffic), (3) Độ trễ do số lượng thiết bị mạng trên đường đi. Lưu lượng cần ưu tiên QoS nhất là Video conferencing.",
          "Kiến trúc WAN & Mạng: Sơ đồ WAN kết nối nhiều chi nhánh (remote sites) về một trung tâm (central location) là Hub-and-Spoke. Nhân viên chi nhánh truy cập dữ liệu giá nội bộ tại trụ sở chính là truy cập mạng Intranet."
        ]
      },
      {
        topic: "5. Transport Layer (TCP/UDP) & Network Layer (IP/ICMP/Routing)",
        weight: "16% (~8 câu/đề)",
        freq: "Cao",
        keyPoints: [
          "Hai chức năng chính của Router: Chọn đường (Path selection) và Chuyển tiếp gói tin (Packet forwarding). Trong bảng định tuyến, gói tin không khớp mạng con cụ thể nào (ví dụ 172.17.13.5 khi chỉ có mạng .6, .8, .10, .12, .14) sẽ đi ra cổng của Gateway of last resort (Default route 0.0.0.0).",
          "Header IPv4: Hai trường được tham chiếu nhiều nhất chỉ nơi đi và nơi đến là Source IP address và Destination IP address. Trường `Protocol` chứa các giá trị định danh tầng 4 như ICMP (1), TCP (6), UDP (17).",
          "ICMP & Traceroute: Khi Router chạy lệnh `traceroute`, địa chỉ IP nguồn mặc định là IP của cổng xuất dữ liệu ra (outbound interface). Bản tin ICMP 'Time Exceeded' báo rằng TTL đã giảm về 0; `tracert` khác `ping` ở chỗ hiển thị thông tin các Router trung gian trên đường đi. Nếu chặn hoàn toàn ICMP trên Router biên: Ping ra server công cộng bị timeout và Traceroute không hiện các chặng trung gian.",
          "TCP vs UDP & Port Groups: Hai trường giống nhau ở cả TCP và UDP Header là Source port number và Destination port number. Bắt tay 3 bước TCP: `SYN, SYN-ACK, ACK`. Khi Client gửi UDP datagram: nó cứ thế gửi đi ngay (just sends the datagrams) với chi phí tối thiểu (minimal overhead). Port 414 thuộc nhóm Well-known ports (0 - 1023).",
          "Giao thức Tầng Ứng dụng (Application Layer): Ba giao thức thuộc tầng Application của TCP/IP là DHCP, DNS, FTP (trong khi ARP, PPP thuộc Network Access; NAT thuộc Internet). Ba phương thức thông điệp HTTP phổ biến nhất là `GET, POST, PUT`."
        ]
      }
    ]
  },

  osiLayers: [
    {
      layer: 7,
      name: "Application (Tầng Ứng dụng)",
      tcpip: "Application (L5-L7)",
      pdu: "Data (Dữ liệu)",
      color: "#ec4899",
      addressing: "URL, Domain Name, Email Address",
      devices: "Host, Firewall (L7), Proxy Server, Gateway",
      protocols: ["HTTP (80)", "HTTPS (443)", "DNS (53)", "DHCP (67/68)", "FTP (20/21)", "SSH (22)", "Telnet (23)", "SMTP (25)", "POP3 (110)", "IMAP (143)", "SNMP (161)"],
      summary: "Cung cấp giao diện và dịch vụ mạng trực tiếp cho các ứng dụng của người dùng (trình duyệt web, email client, truyền file).",
      examTip: "Trong đề SU26_RE: Khi Web Client nhận phản hồi từ Web Server, thứ tự giải mã (decode) ngăn xếp giao thức từ dưới lên là: Ethernet -> IP -> TCP -> HTTP. POP3 tải mail và xóa trên server; SSH vượt trội Telnet nhờ Encryption (mã hóa)."
    },
    {
      layer: 6,
      name: "Presentation (Tầng Trình diễn)",
      tcpip: "Application (L5-L7)",
      pdu: "Data (Dữ liệu)",
      color: "#a855f7",
      addressing: "Định dạng dữ liệu (MIME, Encoding)",
      devices: "Gateway, Software Library",
      protocols: ["SSL/TLS", "JPEG / PNG / GIF", "MPEG / MP4", "ASCII / UTF-8 / EBCDIC", "Compression"],
      summary: "Đảm nhận 3 chức năng chính: Định dạng/Chuyển đổi dữ liệu tương thích (Formatting/Translation), Nén dữ liệu (Compression), và Mã hóa/Giải mã (Encryption/Decryption).",
      examTip: "Khi đề bài FE hỏi về 'formatting data into a compatible form', Encryption (mã hóa), Compression (nén) -> Chọn Presentation Layer (Layer 6)."
    },
    {
      layer: 5,
      name: "Session (Tầng Phiên)",
      tcpip: "Application (L5-L7)",
      pdu: "Data (Dữ liệu)",
      color: "#8b5cf6",
      addressing: "Session ID",
      devices: "Gateway, Host OS",
      protocols: ["NetBIOS", "RPC", "PPTP", "NFS", "SQL Session", "H.245"],
      summary: "Thiết lập, duy trì, đồng bộ hóa (checkpoint) và kết thúc các phiên giao tiếp (sessions) giữa ứng dụng nguồn và đích.",
      examTip: "Từ khóa nhận diện trong đề thi: 'dialog control', 'establish, maintain, and terminate sessions'."
    },
    {
      layer: 4,
      name: "Transport (Tầng Giao vận)",
      tcpip: "Transport (L4)",
      pdu: "Segment (TCP) / Datagram (UDP)",
      color: "#6366f1",
      addressing: "Port Number (0 - 65535): Source Port & Destination Port",
      devices: "Firewall (Stateful), Load Balancer",
      protocols: ["TCP (Transmission Control Protocol)", "UDP (User Datagram Protocol)"],
      summary: "3 trách nhiệm chính (Câu 3 Đề 2): (1) Đáp ứng yêu cầu tin cậy của ứng dụng (nếu có), (2) Multiplexing nhiều luồng giao tiếp trên cùng mạng, (3) Định danh ứng dụng/dịch vụ bằng Port Number.",
      examTip: "Nhớ kỹ: UDP Header gồm Source Port, Destination Port, Length, Checksum (Low overhead -> dùng cho Live video streaming). TCP dùng Sequence Number để ghép đúng thứ tự, 3-way handshake để xác nhận đích sẵn sàng, và Window Size (VD: Window 1000B / Segment 100B = gửi 10 segments trước khi chờ ACK)."
    },
    {
      layer: 3,
      name: "Network (Tầng Mạng)",
      tcpip: "Internet (L3)",
      pdu: "Packet (Gói tin)",
      color: "#3b82f6",
      addressing: "Logical Address: IPv4 (32-bit) & IPv6 (128-bit Hex)",
      devices: "Router, Layer 3 Switch (Multilayer Switch)",
      protocols: ["IPv4", "IPv6", "ICMP (ping/traceroute)", "OSPF", "EIGRP", "RIP", "BGP", "IPsec", "NAT"],
      summary: "4 hoạt động cơ bản của tầng Network (Câu 26 SU26_RE): (1) Addressing, (2) Encapsulation, (3) Routing, (4) De-encapsulation.",
      examTip: "IP là Connectionless, Best-effort và Media independent (phụ thuộc tầng trên để xử lý gói mất/sai thứ tự). Nếu Router không tìm thấy tuyến khớp trong bảng định tuyến -> chuyển ra Default Route (nếu có) hoặc Drop gói tin!"
    },
    {
      layer: 2,
      name: "Data Link (Tầng Liên kết dữ liệu)",
      tcpip: "Network Access (L1-L2)",
      pdu: "Frame (Khung tin)",
      color: "#0ea5e9",
      addressing: "Physical Address: MAC Address (48-bit: 24-bit đầu là OUI của hãng sản xuất)",
      devices: "Switch (L2), Bridge, NIC (Network Interface Card), Wireless AP",
      protocols: ["Ethernet (IEEE 802.3)", "Wi-Fi (IEEE 802.11)", "ARP", "PPP", "HDLC", "STP (802.1D)", "VLAN (802.1Q)"],
      summary: "Mô tả phương thức trao đổi các Frame dữ liệu qua môi trường truyền chung (common media). Gồm 2 tầng con IEEE 802: Logical Link Control (LLC) và Media Access Control (MAC).",
      examTip: "Cấu trúc Frame gồm 3 phần: Header, Data, Trailer (FCS). Nếu Frame < 64 bytes hoặc sai CRC trong FCS -> Switch sẽ Drop! Switch Flood khi gặp Broadcast MAC (FFFF.FFFF.FFFF) hoặc Unknown Unicast."
    },
    {
      layer: 1,
      name: "Physical (Tầng Vật lý)",
      tcpip: "Network Access (L1-L2)",
      pdu: "Bits (0 và 1)",
      color: "#10b981",
      addressing: "Không có địa chỉ (Tín hiệu điện, ánh sáng, sóng vô tuyến)",
      devices: "Hub, Repeater, Modem, Cable (UTP, STP, Coaxial, Fiber), RJ-45 Connector",
      protocols: ["100BASE-TX", "1000BASE-T", "Manchester Encoding", "Single-mode / Multimode Fiber"],
      summary: "Tạo ra các tín hiệu (điện, quang, vi ba) biểu diễn các bit trong mỗi Frame lên môi trường truyền và ngược lại.",
      examTip: "Manchester encoding chuyển dữ liệu số thành tín hiệu số. Cáp quang Single-mode đi xa tới ~100km. 2 tiêu chí chọn môi trường truyền (Media): Khoảng cách truyền tín hiệu (Distance) và Môi trường lắp đặt (Environment)."
    }
  ],

  chapters: [
    {
      id: "ch1",
      title: "Chương 1: Tổng quan Mạng, Topology, Cáp truyền dẫn & Tiêu chí Mạng",
      badge: "Có 15 câu trong đề kỳ trước",
      summary: "Hosts, P2P vs Client-Server, Extranet/Intranet, Bandwidth, Cáp UTP/STP/Fiber/Powerline và 4 đặc tính mạng tin cậy.",
      blocks: [
        {
          heading: "1. Thiết bị & Kiểu thiết kế mạng (Hay hỏi FE)",
          items: [
            "Hosts (End devices): Tên gọi chung cho mọi máy tính kết nối mạng tham gia trực tiếp gửi và nhận dữ liệu.",
            "3 yếu tố bắt buộc của giao tiếp (Communication): Source (Sender), Destination (Receiver), Transmission medium (Channel). ('Network speed' KHÔNG phải là yếu tố cốt lõi).",
            "Peer-to-Peer (P2P): Thiết bị vừa đóng vai trò Client vừa là Server. Ưu điểm: Dễ thiết lập (Easy to set up), nhưng kém bảo mật và không có quản trị tập trung.",
            "Intranet vs Extranet: Intranet chỉ dành cho nội bộ công ty; Extranet cung cấp quyền truy cập an toàn cho cá nhân làm việc ở tổ chức khác nhưng cần truy cập dữ liệu của công ty."
          ]
        },
        {
          heading: "2. Physical vs Logical Topology & Bandwidth",
          items: [
            "Physical Topology: Cho thấy vị trí thực tế (actual location) của thiết bị trung gian và cách đi dây cáp (cable installation).",
            "Logical Topology: Hiển thị địa chỉ IP (Layer 3 addresses), tên cổng và quy hoạch VLAN/Subnet.",
            "Bandwidth (Băng thông): Lượng dữ liệu có thể truyền qua môi trường trong một khoảng thời gian nhất định (amount of data that can be transmitted over a medium in a given time)."
          ]
        },
        {
          heading: "3. Lựa chọn Môi trường truyền (Network Media) & Bấm cáp",
          items: [
            "2 tiêu chí chọn Media: (1) Khoảng cách mang tín hiệu thành công (Distance), (2) Môi trường nơi lắp đặt cáp (Environment).",
            "Ghép nối chuẩn (Câu 34 Đề 2 & Câu 33 SU26): Copper Cables (A) dùng cho Horizontal cabling (3) & Desktop PCs (5); Fiber Optic (B - Single-mode đi xa ~100km) dùng cho Enterprise Backbone (1) & Long-haul networks (6); Wireless (C) dùng cho Coffee shop guest access (2) & Hospital waiting rooms (4). -> Đáp án: 3A-5A-1B-6B-2C-4C.",
            "Loại cáp kết nối (Câu 25 Đề 2): PC nối cổng Console của Switch dùng cáp Rollover [1]; Switch nối Switch dùng Crossover [2]; Switch nối Router dùng Straight-through [3].",
            "Powerline Networking: Thiết bị kết nối vào mạng LAN gia đình hiện có thông qua bộ chuyển đổi (adapter) cắm vào ổ cắm điện (electrical outlet) sẵn có."
          ]
        },
        {
          heading: "4. Bốn đặc tính mạng & Các mối đe dọa bảo mật",
          items: [
            "4 đặc tính: Fault Tolerance, Scalability, QoS, Security.",
            "Tình huống phòng khám y tế: Kỹ thuật viên cấu hình sai Wi-Fi khiến bệnh nhân xem được hồ sơ bệnh án của bệnh nhân khác -> Vi phạm đặc tính Security (Bảo mật).",
            "Identity Theft (Đánh cắp danh tính): Khi kẻ tấn công mạo danh (impersonates) người khác để lấy thông tin tín dụng (credit information) của người đó."
          ]
        }
      ],
      examNote: "Chú ý câu hỏi Encoding ở Tầng 1: Encoding là quá trình chuyển đổi dữ liệu sang định dạng có thể truyền đi trên đường truyền (convert data into a transmittable format), ví dụ kỹ thuật Manchester encoding chuyển dữ liệu số thành tín hiệu số."
    },
    {
      id: "ch2",
      title: "Chương 2: Mô hình OSI, TCP/IP & Quá trình Đóng gói (Encapsulation)",
      badge: "Có 14 câu trong đề kỳ trước",
      summary: "Lợi ích mô hình phân tầng, chức năng từng tầng OSI và thứ tự đóng/mở gói tin.",
      blocks: [
        {
          heading: "1. Hai mô hình mạng & Lợi ích của Mô hình Phân tầng",
          items: [
            "Hai mô hình chuẩn mô tả giao thức và hoạt động mạng: OSI và TCP/IP (chú ý ISO là tên tổ chức chuẩn hóa, HTTP là giao thức ứng dụng).",
            "Mô hình OSI giúp ích gì? Giúp Xử lý sự cố và Chuẩn hóa (Troubleshooting and standardization).",
            "Hai lợi ích lớn nhất của mô hình phân tầng (Layered model): (1) Facilitates troubleshooting (Dễ tìm lỗi), (2) Promotes interoperability (Thúc đẩy tính tương thích giữa các hãng)."
          ]
        },
        {
          heading: "2. Giao thức mạng & Phân mảnh (Segmenting)",
          items: [
            "Giao thức mạng (Network protocols): Định nghĩa cách thức các thông điệp được trao đổi giữa nguồn và đích (define how messages are exchanged between the source and destination).",
            "Segmenting (Phân đoạn): Quá trình chia nhỏ thông điệp lớn thành các đơn vị nhỏ hơn, dễ quản lý hơn khi truyền qua mạng.",
            "Thứ tự giải mã (Decode / De-encapsulation) khi Web Client nhận gói phản hồi từ Web Server: Đi từ tầng thấp lên tầng cao -> Ethernet, IP, TCP, HTTP."
          ]
        }
      ],
      examNote: "Câu hỏi quá trình của Router khi nhận Frame L2 (Question 13): Bước đầu tiên ngay khi nhận một Layer 2 frame từ đường truyền là Router thực hiện 'De-encapsulates the frame' (bóc tách Frame L2 để lấy Packet L3 bên trong)!"
    },
    {
      id: "ch3",
      title: "Chương 3: Tầng Data Link (L2), Ethernet Frame, Switch & Giao thức ARP",
      badge: "Có 24 câu trong đề kỳ trước",
      summary: "Hai tầng con LLC/MAC, cấu trúc Frame, OUI, Store-and-forward vs Cut-through, Memory Buffering và ARP.",
      blocks: [
        {
          heading: "1. Dịch vụ của Tầng Data Link & 2 Tầng con IEEE 802",
          items: [
            "Data Link Layer mô tả phương thức trao đổi các data frames qua môi trường truyền chung (exchanging data frames over a common media).",
            "Hai dịch vụ chính của Data Link Layer: (1) Quản lý quyền truy cập của Frame vào môi trường truyền (manages the access of frames to the network media), (2) Đóng gói các PDU tầng 3 thành định dạng Frame tương thích với card mạng (packages various Layer 3 PDUs into a frame format).",
            "Hai tầng con (Sublayers) của IEEE 802 LAN/MAN Data Link: Logical Link Control (LLC) và Media Access Control (MAC)."
          ]
        },
        {
          heading: "2. Cấu trúc Ethernet Frame, OUI & Xử lý Frame lỗi",
          items: [
            "Ba thành phần cơ bản của Data Link Frame: Header, Data, and Trailer.",
            "OUI (Organizationally Unique Identifier - 24 bit đầu của MAC): Dùng để định danh nhà sản xuất thiết bị (identify the vendor of the Ethernet device).",
            "Trường FCS (Frame Check Sequence) ở cuối Frame: Dùng để phát hiện lỗi trong các Frame được truyền đi (detect errors in transmitted frames).",
            "Nếu Frame nhỏ hơn 64 bytes (Runt frame) HOẶC giá trị CRC tính được khác với giá trị trong trường FCS -> Switch sẽ HỦY (drops) Frame đó ngay lập tức!",
            "Nếu một Host trên mạng Ethernet nhận được Frame Unicast có Destination MAC không khớp với MAC của chính nó -> Host sẽ hủy (discard) Frame đó."
          ]
        },
        {
          heading: "3. Cơ chế Chuyển mạch & Bộ đệm (Buffering) của Switch",
          items: [
            "Store-and-forward switching: Nhận toàn bộ Frame và kiểm tra CRC trước khi chuyển tiếp.",
            "Cut-through switching: Giảm độ trễ (reduces latency) nhưng làm tăng rủi ro chuyển tiếp các Frame bị lỗi (corrupted frames). Hai biến thể của Cut-through là: Fast-forward switching và Fragment-free switching.",
            "Shared memory buffering (Bộ đệm bộ nhớ dùng chung): Hoạt động tốt nhất khi Switch phải chuyển Frame giữa hai cổng có tốc độ lệch nhau (ví dụ từ cổng 1000BASE-T sang cổng 100BASE-T).",
            "Hai trường hợp Switch Flood Frame ra tất cả các cổng trừ cổng nhận: (1) Destination MAC là địa chỉ Broadcast (FFFF.FFFF.FFFF), (2) Destination MAC chưa có trong bảng MAC (Unknown unicast)."
          ]
        },
        {
          heading: "4. Giao thức ARP & Bảng ARP Cache",
          items: [
            "Chức năng của ARP: Phân giải địa chỉ IPv4 thành địa chỉ MAC (resolve IPv4 addresses to MAC addresses) của một host nằm trên CÙNG mạng cục bộ (on the local network).",
            "Destination MAC trong khung tin ARP Request luôn là địa chỉ Broadcast: FFFF.FFFF.FFFF.",
            "ARP Cache: Lưu trữ ánh xạ địa chỉ IP-to-MAC (Stores MAC to IP mappings). Trên Windows PC, dùng lệnh 'arp -a' để xem bảng ARP.",
            "Tính chất giữ ánh xạ lâu hơn trong bảng ARP: Một mục nhập tĩnh IP-to-MAC (Static IP-to-MAC address entry) có thể được nhập thủ công vào bảng ARP (sẽ không bị xóa theo timeout như mục động).",
            "Tấn công ARP Spoofing (ARP Poisoning): Nhằm mục đích liên kết địa chỉ IP với SAI địa chỉ MAC (associate IP addresses to the wrong MAC address)."
          ]
        }
      ],
      examNote: "Nhớ kỹ phân biệt IPv4 và IPv6 khi tìm địa chỉ MAC: IPv4 dùng ARP (gửi Broadcast Ethernet), còn IPv6 dùng ICMPv6 Neighbor Discovery - ND (gửi bản tin Neighbor Solicitation tới địa chỉ Multicast Ethernet và IPv6 Solicited-node FF02::1:FFxx:xxxx)."
    },
    {
      id: "ch4",
      title: "Chương 4: Tầng Mạng (L3), IPv4/IPv6 Header, Địa chỉ IPv6 & ICMP",
      badge: "Có 28 câu trong đề kỳ trước",
      summary: "Đặc tính giao thức IP, so sánh Header IPv4 vs IPv6, phân loại địa chỉ IPv6, SLAAC/DAD/EUI-64 và lệnh Ping/Traceroute.",
      blocks: [
        {
          heading: "1. Đặc tính của Giao thức IP & Tầng Network",
          items: [
            "Hai dịch vụ chính của tầng Network: (1) Đóng gói PDU từ tầng Transport (Encapsulating PDUs from transport layer), (2) Định tuyến gói tin về phía đích (Routing packets toward the destination).",
            "Bốn hoạt động cơ bản của tầng Network: Addressing, Encapsulation, Routing, De-encapsulation.",
            "Đặc điểm của giao thức IP: (1) Connectionless và Best-effort, (2) Độc lập với môi trường truyền bên dưới (Independent of the underlying media), (3) Phụ thuộc vào dịch vụ tầng trên (TCP) để xử lý tình huống mất gói hoặc gói đến sai thứ tự.",
            "Khi Router nhận gói tin mà KHÔNG có tuyến đường nào khớp trong bảng định tuyến: Router sẽ chuyển gói tin tới Default Route (nếu đã cấu hình) hoặc hủy (drops) gói tin."
          ]
        },
        {
          heading: "2. So sánh IPv4 Header và IPv6 Header",
          items: [
            "Điểm khác biệt chính: IPv6 Header đơn giản hơn và có ít trường hơn IPv4 Header (IPv6 cố định 40 bytes, 8 trường; IPv4 có 12+ trường).",
            "Trường TTL (Time-to-Live) trong IPv4 Header: Dùng để giới hạn thời gian sống của gói tin, hoạt động như bộ đếm số chặng (hop count).",
            "Trong IPv6 Header, trường 'Hop Limit' thay thế cho trường 'Time to Live (TTL)' của IPv4.",
            "Tại sao IPv6 KHÔNG cần NAT? Vì số lượng địa chỉ IPv6 công cộng cực kỳ lớn (128-bit), mọi host hoặc người dùng đều có thể nhận địa chỉ IPv6 public (GUA)."
          ]
        },
        {
          heading: "3. Địa chỉ IPv6 (128 bits, biểu diễn bằng hệ Hexadecimal)",
          items: [
            "Độ dài tiền tố chuẩn cho 1 mạng con (single subnet) IPv6 là: /64.",
            "Trong địa chỉ GUA (Global Unicast), phần do ISP cấp cho khách hàng là: Global routing prefix.",
            "Ghép nối các loại địa chỉ IPv6 (Question 37 Set 1):",
            "• Global unicast (C) -> 1. 2001:DB8::BAF:3F57:FE94",
            "• All node multicast (D) -> 2. FF02::1",
            "• Loopback (E) -> 3. ::1",
            "• Solicited node multicast (B) -> 4. FF02::1:FFAE:F85F (Đáp án: C1-D2-E3-B4).",
            "Link-Local Address (LLA - bắt đầu bằng FE80): Cho phép giao tiếp trong phạm vi kết nối nội bộ (enables communication on the local link).",
            "Unique Local Address (ULA - FC00::/7, FD00::/8): Cho phép giao tiếp nội bộ trong một site (local site) mà không định tuyến ra Internet toàn cầu.",
            "SLAAC: Giúp thiết bị tự động lấy địa chỉ IPv6 động mà KHÔNG cần máy chủ DHCPv6. EUI-64 dùng địa chỉ MAC của cổng để tạo Interface ID 64-bit. DAD (Duplicate Address Detection) dùng để kiểm tra địa chỉ IPv6 là duy nhất trên mạng. Dual stack là kỹ thuật dùng kết nối IPv6 thuần (native IPv6 connectivity) song song IPv4."
          ]
        },
        {
          heading: "4. Giao thức ICMP, Ping, Loopback & Default Gateway",
          items: [
            "Mục đích chính của ICMP: Kiểm tra và báo cáo các vấn đề/phản hồi về kết nối và truyền gói tin IP (provide feedback of IP packet transmissions / test and report on network connectivity).",
            "Lệnh 'ping': Kiểm tra kết nối mạng và đo thời gian gói tin đi đến đích. Trên Router Cisco, khi chờ ICMP Echo Reply bị quá thời gian (timeout), ký hiệu hiển thị là dấu chấm '.' (còn thành công là '!').",
            "Ping 127.0.0.1 (ping the loopback address): Kiểm tra cấu hình nội tại chứng tỏ ngăn xếp giao thức IP (IP protocol stack) trên máy cục bộ đang hoạt động tốt.",
            "Lệnh 'traceroute' (tracert): Sử dụng thông điệp ICMP 'Time Exceeded' để dò đường đi giữa 2 host.",
            "Default Gateway: Dùng để chuyển tiếp gói tin tới các mạng ở xa (remote networks). Nếu Default Gateway cấu hình sai trên Host -> Host vẫn giao tiếp được trong mạng LAN nội bộ nhưng KHÔNG thể giao tiếp với các host ở mạng khác. Khi Helpdesk bảo người dùng ping Default Gateway là để kiểm tra xem host có khả năng vươn tới các mạng khác hay không."
          ]
        }
      ],
      examNote: "Bài toán chia Subnet IPv6 trong đề SU26_RE (Câu 28): Cho tiền tố `2001:db8:0::/48`, nếu đổi thành `/52` thì mạng con CUỐI CÙNG (last subnet) là gì? Giải: Mượn thêm 4 bit đầu của hextet thứ 4 (từ bit 49 đến 52). Giá trị lớn nhất khi cả 4 bit bằng 1 (1111 nhị phân) là chữ `f` ở vị trí đầu tiên của hextet thứ 4 -> `2001:db8:0:f000::/52`!"
    },
    {
      id: "ch5",
      title: "Chương 5: Các dạng bài Tính toán Subnet IPv4 trong Đề thi FE",
      badge: "Có 12 câu trong đề kỳ trước",
      summary: "Tổng hợp lời giải từng bài toán chia Subnet xuất hiện trong cả 3 đề thi kỳ trước.",
      blocks: [
        {
          heading: "1. Lý thuyết Chia Subnet & Phép toán ANDing",
          items: [
            "ANDing process: Phép toán logic được thiết bị sử dụng (giữa IP và Subnet Mask) để xác định Địa chỉ mạng (determine the network address).",
            "Mục đích của việc chia Subnet (Subnetting): Giảm kích thước của mạng thành các miền quảng bá nhỏ hơn (reduce the size of the network into smaller broadcast domains).",
            "Giá trị thập phân của `/26` subnet mask: 255.255.255.192 (vì 26 = 8 + 8 + 8 + 2 bit; 2 bit đầu của octet 4 là 128 + 64 = 192)."
          ]
        },
        {
          heading: "2. Giải chi tiết các bài toán tính nhanh trong Đề FE",
          items: [
            "Bài 1 (Chia 4 mạng con từ 192.168.1.0/24 - Tìm mạng con thứ 2): Để tạo 4 mạng con cần mượn n = 2 bit (2^2 = 4) -> Prefix mới là /26 (Mask 255.255.255.192), bước nhảy = 64. Các mạng con lần lượt là: Mạng 1 = .0, Mạng 2 = .64, Mạng 3 = .128, Mạng 4 = .192. Vậy mạng thứ hai là `192.168.1.64 – 255.255.255.192`.",
            "Bài 2 (Số host khả dụng của 192.168.10.128/26): Số bit host h = 32 - 26 = 6 -> Số host khả dụng = 2^6 - 2 = 64 - 2 = `62 hosts`.",
            "Bài 3 (Cấu hình Router `ip address 10.0.0.1 255.255.255.252`): Mask .252 tương ứng `/30` (h = 2 bit) -> Số host khả dụng = 2^2 - 2 = `2 hosts`.",
            "Bài 4 (Chọn Mask cho kết nối WAN P2P và phòng ban 50 hosts): Kết nối WAN Point-to-Point cần 2 IP -> dùng `/30`; Phòng 50 hosts cần 2^6 - 2 = 62 >= 50 -> dùng `/26`.",
            "Bài 5 (Broadcast của 192.168.10.0/24): Là `192.168.10.255`.",
            "Bài 6 (Quy hoạch VLSM cho mạng 25 hosts trong dải 10.16.10.0/24 - Question 19): Cần 25 hosts -> dùng `/27` (30 hosts, bước nhảy 32). Các dải đã dùng hết từ .0 đến .63 và .128 trở đi -> Dải `/27` còn trống hợp lệ là `10.16.10.64/27`."
          ]
        }
      ],
      examNote: "Mẹo cực nhanh: Hễ đề bài hỏi số Host khả dụng của `/26` -> chọn ngay `62`; của `/27` -> chọn `30`; của `/30` (255.255.255.252) -> chọn `2`!"
    },
    {
      id: "ch6",
      title: "Chương 6: Tầng Giao vận (TCP/UDP) & Tầng Ứng dụng",
      badge: "Có 15 câu trong đề kỳ trước",
      summary: "Trách nhiệm tầng 4, các trường trong UDP/TCP Header, bài toán TCP Window, Socket pair và Port Numbers.",
      blocks: [
        {
          heading: "1. Ba trách nhiệm của Transport Layer & Port Numbers",
          items: [
            "TCP và UDP thuộc tầng Transport của bộ giao thức TCP/IP.",
            "3 trách nhiệm của tầng Transport: (1) Đáp ứng yêu cầu về độ tin cậy của ứng dụng (nếu có), (2) Ghép kênh (Multiplexing) nhiều luồng giao tiếp từ nhiều ứng dụng trên cùng mạng, (3) Định danh ứng dụng và dịch vụ trên client/server bằng Port Number.",
            "Cặp Socket (Socket pair): Khi host `10.1.1.10` gửi yêu cầu dịch vụ Web (HTTP = port 80) tới Server `10.1.1.254`, host sẽ dùng cổng nguồn động (ví dụ 1099) và cổng đích 80 -> Cặp socket đúng là: `10.1.1.10:1099, 10.1.1.254:80`.",
            "Destination Port 22: Client đang yêu cầu dịch vụ `SSH`."
          ]
        },
        {
          heading: "2. Chi tiết TCP vs UDP trong Đề FE",
          items: [
            "3 trường nằm trong UDP Segment Header: Source Port, Length, Checksum (ngoài ra còn Destination Port; tổng cộng chỉ có 4 trường, KHÔNG có Sequence Number, Acknowledgment Number hay Window Size).",
            "Tại sao UDP được ưa chuộng cho các giao thức truy vấn-phản hồi đơn giản (như DNS) và Live video streaming? Vì UDP có chi phí mào đầu thấp (Low overhead).",
            "Trường Sequence Number trong TCP: Được máy đích sử dụng để sắp xếp và ghép lại các segment về đúng thứ tự ban đầu (reassemble segments into the original order).",
            "Mục đích của TCP 3-Way Handshake: Xác nhận thiết bị đích đang hiện diện trên mạng, sẵn sàng chấp nhận yêu cầu, đồng thời thiết lập trạng thái kết nối và đồng bộ theo dõi thứ tự (establish connection state and sequence tracking).",
            "Bài toán TCP Window Size (Câu 36 SU26_RE): PC tải file từ Server với `TCP window = 1000 bytes`, Server gửi các segment kích thước `100-byte`. Hỏi Server gửi bao nhiêu segment trước khi phải chờ ACK từ PC? -> Lấy `1000 / 100 = 10 segments`!"
          ]
        }
      ],
      examNote: "Ở tầng Application: Giao thức nhận email tải thư từ server về máy và mặc định XÓA thư trên server là POP (POP3)."
    },
    {
      id: "ch7",
      title: "Chương 7: Tổng hợp Câu hỏi Lệnh Cisco IOS CLI trong Đề FE",
      badge: "Có 20 câu trong đề kỳ trước",
      summary: "Các câu hỏi ghép nối Mode, cấu hình Console/SSH/Banner, NVRAM, SVI và Default Gateway trên Switch.",
      blocks: [
        {
          heading: "1. Các chế độ dòng lệnh (IOS Modes) & Ghép nối Lệnh",
          items: [
            "Privileged EXEC mode (`Router#`): Chế độ cho phép truy cập vào TẤT CẢ các câu lệnh và tính năng của IOS.",
            "Lỗi `Switch> config t` báo `% Invalid input detected`: Do người quản trị đang ở User EXEC mode (`Switch>`), bắt buộc phải vào Privileged EXEC mode (`enable` -> `Switch#`) trước khi gõ `configure terminal`.",
            "Ghép nối Lệnh với Mode chuẩn (Question 10 Set 1):",
            "• A. `login` -> 5. `R1(config-line)#` (Any line configuration mode)",
            "• B. `service password-encryption` -> 1. `R1(config)#`",
            "• C. `ip address 192.168.4.4 255.255.255.0` -> 6. `R1(config-if)#`",
            "• D. `copy running-config startup-config` -> 4. `R1#`",
            "• E. `enable` -> 2. `R1>` (Đáp án: A5-B1-C6-D4-E2)."
          ]
        },
        {
          heading: "2. Bảo mật Mật khẩu, Console, Banner & Bộ nhớ NVRAM",
          items: [
            "Trình tự cấu hình mật khẩu cổng Console: `line console 0` -> `password cisco` -> `login`.",
            "Bảo vệ chế độ Privileged EXEC: `enable secret cisco@12345`.",
            "Lệnh `service password-encryption`: Ngăn người khác nhìn thấy mật khẩu dạng rõ khi xem cấu hình (`prevents someone from viewing the running configuration passwords`).",
            "Cách nhanh nhất để kiểm tra xem `banner motd` đã cấu hình đúng chưa: Thoát khỏi chế độ Privileged EXEC (`exit` từ `Router#` ra màn hình chờ) và nhấn Enter (`Exit privileged EXEC mode and press Enter`).",
            "Hai chức năng của NVRAM: (1) Lưu giữ nội dung khi mất nguồn điện (`retain contents when power is removed`), (2) Lưu trữ file cấu hình khởi động (`store the startup configuration file`). Do đó lệnh `copy running-config startup-config` sẽ làm thay đổi nội dung của NVRAM!"
          ]
        },
        {
          heading: "3. Quản trị Switch từ xa (SVI, Default Gateway, SSH) & Bật cổng",
          items: [
            "Lệnh `no shutdown`: Dùng để bật một cổng (enable an interface / brings the interface out of administratively down state).",
            "Giao diện cho phép quản trị từ xa một Layer 2 Switch: Switch Virtual Interface (SVI - ví dụ `interface vlan 1`).",
            "Mục đích đặt Default Gateway trên Switch L2: Dùng để chuyển tiếp các gói tin có nguồn gốc khởi phát từ chính con Switch đó (ví dụ gói phản hồi Ping/SSH/Telnet quản trị) đi tới các mạng ở xa (`forward packets originating from the switch to remote networks`). Nó KHÔNG dùng để định tuyến lưu lượng của các PC nối vào Switch!",
            "Lợi thế của SSH so với Telnet khi quản trị từ xa: SSH cung cấp tính năng Mã hóa (`Encryption`)."
          ]
        }
      ],
      examNote: "Ghép nối lệnh cơ bản (Câu 37 Đề 2 & Câu 21 SU26): A. Bảo mật console -> `3. Router(config-line)# password class` | B. Hiển thị thông báo khi truy cập -> `5. Router(config)# banner motd #` | C. Đặt tên cho Router -> `1. Router(config)# hostname CL1` (Đáp án: A3-B5-C1)."
    }
  ],

  wellKnownPorts: [
    { port: "20", proto: "TCP", service: "FTP (Data)", desc: "Truyền dữ liệu file trong FTP" },
    { port: "21", proto: "TCP", service: "FTP (Control)", desc: "Thiết lập điều khiển và lệnh FTP" },
    { port: "22", proto: "TCP", service: "SSH", desc: "Truy cập dòng lệnh từ xa CÓ MÃ HÓA (Encryption) an toàn — Đề FE hỏi trực tiếp!" },
    { port: "23", proto: "TCP", service: "Telnet", desc: "Truy cập dòng lệnh từ xa dạng văn bản thuần (Plaintext - Không mã hóa)" },
    { port: "25", proto: "TCP", service: "SMTP", desc: "Gửi email từ Client lên Server và giữa các Mail Server" },
    { port: "53", proto: "UDP / TCP", service: "DNS", desc: "Phân giải tên miền sang IP (UDP cho truy vấn đơn giản vì Low overhead)" },
    { port: "67", proto: "UDP", service: "DHCP Server", desc: "Cổng lắng nghe trên máy chủ DHCP" },
    { port: "68", proto: "UDP", service: "DHCP Client", desc: "Cổng nhận phản hồi trên máy khách DHCP" },
    { port: "69", proto: "UDP", service: "TFTP", desc: "Trivial FTP - truyền file nhẹ không kết nối" },
    { port: "80", proto: "TCP", service: "HTTP", desc: "Dịch vụ Web (Ví dụ Socket pair: 10.1.1.10:1099, 10.1.1.254:80)" },
    { port: "110", proto: "TCP", service: "POP / POP3", desc: "Tải email về máy và mặc định XÓA thư trên Server sau khi tải — Đề FE hỏi!" },
    { port: "143", proto: "TCP", service: "IMAP", desc: "Nhận và đồng bộ email lưu trữ trên server" },
    { port: "161 / 162", proto: "UDP", service: "SNMP", desc: "Giám sát và quản lý thiết bị mạng" },
    { port: "443", proto: "TCP", service: "HTTPS", desc: "Truyền tải web bảo mật qua SSL/TLS" }
  ],

  cliCommands: [
    {
      category: "1. Chuyển đổi các chế độ (Modes Navigation) — Trọng tâm FE & PE",
      items: [
        { title: "Từ User EXEC (>) sang Privileged EXEC (#)", prompt: "R1>", cmd: "enable", desc: "Chế độ Privileged EXEC (#) cho phép truy cập mọi lệnh và tính năng." },
        { title: "Từ Privileged EXEC (#) sang Global Configuration", prompt: "R1#", cmd: "configure terminal", desc: "Lưu ý: Nếu đang ở Switch> mà gõ 'config t' sẽ báo lỗi '% Invalid input detected'!" },
        { title: "Kiểm tra nhanh Banner MOTD vừa cấu hình", prompt: "R1#", cmd: "exit", desc: "Thoát khỏi chế độ Privileged EXEC và nhấn Enter để xem ngay Banner." },
        { title: "Thoát thẳng về Privileged EXEC (#) từ bất kỳ đâu", prompt: "R1(config-line)#", cmd: "end", desc: "Hoặc nhấn tổ hợp phím Ctrl + Z." }
      ]
    },
    {
      category: "2. Cấu hình cơ bản & Bảo mật mật khẩu (Có trong cả 3 đề FE)",
      items: [
        { title: "Đặt tên cho Router / Switch (Action C -> Command 1)", prompt: "Router(config)#", cmd: "hostname CL1", desc: "Cấu hình tên định danh trên thiết bị." },
        { title: "Bảo vệ quyền truy cập vào Privileged EXEC mode", prompt: "Switch(config)#", cmd: "enable secret cisco@12345", desc: "Sử dụng thuật toán băm mạnh bảo vệ chế độ đặc quyền." },
        { title: "Mã hóa mật khẩu trong file cấu hình", prompt: "R1(config)#", cmd: "service password-encryption", desc: "Ngăn người khác nhìn thấy mật khẩu khi xem running-config." },
        { title: "Tạo thông báo khi truy cập thiết bị (Action B -> Command 5)", prompt: "Router(config)#", cmd: "banner motd #Authorized Access Only!#", desc: "Hiển thị thông điệp cảnh báo khi người dùng đăng nhập vào thiết bị." }
      ]
    },
    {
      category: "3. Cấu hình cổng Console, VTY & SSH (Câu 11 & 46 SU26_RE)",
      items: [
        { title: "Trình tự 3 lệnh bảo mật cổng Console chuẩn FE", prompt: "Switch(config)#", cmd: "line console 0\n password cisco\n login", desc: "Lệnh 'login' bắt buộc được gõ trong chế độ 'Any line configuration mode' (R1(config-line)#)." },
        { title: "Cấu hình SSH thay thế Telnet (Có mã hóa Encryption)", prompt: "R1(config)#", cmd: "ip domain-name fpt.edu.vn\ncrypto key generate rsa\nusername admin secret cisco123\nline vty 0 4\n login local\n transport input ssh", desc: "SSH dùng cổng TCP 22 và mã hóa toàn bộ phiên làm việc." }
      ]
    },
    {
      category: "4. Cấu hình Interface IPv4/IPv6 & Switch SVI",
      items: [
        { title: "Gán địa chỉ IPv4 và mở cổng (brings interface out of administratively down)", prompt: "R1(config)#", cmd: "interface g0/0/0\n ip address 10.0.0.1 255.255.255.252\n no shutdown", desc: "Với mask 255.255.255.252 (/30), subnet này có đúng 2 địa chỉ IP khả dụng." },
        { title: "Cấu hình địa chỉ IPv6 Link-Local trên cổng Router", prompt: "R1(config)#", cmd: "interface g0/0\n ipv6 address fe80::1:1 link-local\n no shutdown", desc: "Cho phép giao tiếp trong phạm vi kết nối nội bộ (local link)." },
        { title: "Cấu hình SVI và Default Gateway để quản trị từ xa Switch L2", prompt: "S1(config)#", cmd: "interface vlan 1\n ip address 192.168.1.2 255.255.255.0\n no shutdown\nexit\nip default-gateway 192.168.1.1", desc: "SVI cho phép quản trị Switch từ xa; Default Gateway giúp gói tin khởi phát từ Switch đi tới mạng khác." }
      ]
    },
    {
      category: "5. Lưu cấu hình NVRAM & Lệnh Kiểm tra / Chẩn đoán",
      items: [
        { title: "Lưu cấu hình từ RAM (running-config) vào NVRAM (startup-config)", prompt: "Router#", cmd: "copy running-config startup-config", desc: "Làm thay đổi nội dung của NVRAM (bộ nhớ không mất dữ liệu khi tắt nguồn)." },
        { title: "Hiển thị tóm tắt tất cả cổng, địa chỉ IP và trạng thái", prompt: "Router#", cmd: "show ip interface brief", desc: "Câu hỏi tủ xuất hiện ở cả 3 đề thi FE!" },
        { title: "Xem bảng ARP trên máy tính Windows PC", prompt: "C:\\>", cmd: "arp -a", desc: "Hiển thị ánh xạ IP-to-MAC đang lưu trong bộ nhớ đệm ARP cache của Windows." }
      ]
    }
  ],

  flashcards: [
    { id: 1, category: "Đề FE Trọng tâm", term: "Mô hình OSI giúp ích gì trong mạng máy tính? (What does the OSI model help with?)", answer: "Troubleshooting and standardization (Hỗ trợ xử lý sự cố và chuẩn hóa).\nHai lợi ích của mô hình phân tầng: Facilitates troubleshooting & Promotes interoperability." },
    { id: 2, category: "Đề FE Trọng tâm", term: "Thiết bị dùng tiến trình nào để kiểm tra địa chỉ IPv6 của nó là duy nhất (unique) trên mạng?", answer: "DAD — Duplicate Address Detection." },
    { id: 3, category: "Đề FE Trọng tâm", term: "Phương pháp nào giúp thiết bị tự nhận địa chỉ IPv6 động mà KHÔNG cần máy chủ DHCPv6?", answer: "SLAAC — Stateless Address Autoconfiguration." },
    { id: 4, category: "Đề FE Trọng tâm", term: "Tiến trình EUI-64 dùng thông tin gì để tạo Interface ID 64-bit cho cổng IPv6?", answer: "Địa chỉ MAC (48-bit) của cổng bật IPv6 đó (chèn FFFE vào giữa và đảo bit thứ 7)." },
    { id: 5, category: "Đề FE Trọng tâm", term: "Cho prefix 2001:db8:0::/48, nếu đổi thành /52 thì mạng con CUỐI CÙNG (last subnet) là gì?", answer: "2001:db8:0:f000::/52\n(Giải thích: Mượn 4 bit đầu của hextet thứ 4, giá trị lớn nhất khi 4 bit = 1111 là chữ 'f' -> f000)." },
    { id: 6, category: "Đề FE Trọng tâm", term: "Chia 4 mạng con từ 192.168.1.0/24. Địa chỉ mạng và Subnet mask của mạng con thứ 2 là gì?", answer: "192.168.1.64 – 255.255.255.192 (/26)\n(4 mạng con -> mượn 2 bit -> /26, bước nhảy 64: mạng 1 là .0, mạng 2 là .64, mạng 3 là .128, mạng 4 là .192)." },
    { id: 7, category: "Đề FE Trọng tâm", term: "Có bao nhiêu địa chỉ Host khả dụng trong mạng 192.168.10.128/26 và trong cổng cấu hình mask 255.255.255.252 (/30)?", answer: "• Mạng /26 (h = 6 bit): 2^6 - 2 = 62 hosts.\n• Mạng /30 (255.255.255.252, h = 2 bit): 2^2 - 2 = 2 hosts." },
    { id: 8, category: "Đề FE Trọng tâm", term: "Phép toán logic nào được thiết bị dùng để tìm Network Address từ IPv4 và Subnet Mask?", answer: "ANDing (Phép nhân logic bit AND)." },
    { id: 9, category: "Đề FE Trọng tâm", term: "Khi Web Client nhận phản hồi từ Web Server, thứ tự ngăn xếp giao thức được giải mã (decoded) như thế nào?", answer: "Ethernet, IP, TCP, HTTP (đi từ tầng thấp L2 -> L3 -> L4 -> L7)." },
    { id: 10, category: "Đề FE Trọng tâm", term: "Ba trường nào nằm trong phần Header của một UDP segment?", answer: "1. Source Port\n2. Length\n3. Checksum\n(Cộng với Destination Port là đủ 4 trường của UDP Header; UDP có ưu điểm là Low overhead)." },
    { id: 11, category: "Đề FE Trọng tâm", term: "PC tải file từ Server với TCP Window = 1000 bytes, mỗi segment dài 100 bytes. Server gửi bao nhiêu segment trước khi chờ ACK?", answer: "10 segments (Lấy 1000 / 100 = 10)." },
    { id: 12, category: "Đề FE Trọng tâm", term: "Hai tầng con (sublayers) của tầng Data Link theo chuẩn IEEE 802 LAN/MAN là gì?", answer: "1. Logical Link Control (LLC)\n2. Media Access Control (MAC)" },
    { id: 13, category: "Đề FE Trọng tâm", term: "Phương pháp bộ đệm (memory buffering) nào tốt nhất khi Switch chuyển Frame từ cổng 1000BASE-T sang cổng 100BASE-T?", answer: "Shared memory buffering (Bộ đệm bộ nhớ dùng chung)." },
    { id: 14, category: "Đề FE Trọng tâm", term: "Khi quản trị viên ping trên Router Cisco, ký hiệu nào hiện ra khi bị hết thời gian chờ (time expired / timeout)?", answer: "Dấu chấm '.' (Nếu ping thành công nhận được reply thì hiện dấu chấm than '!')." },
    { id: 15, category: "Đề FE Trọng tâm", term: "Lệnh nào dùng để xem bảng ARP trên Windows PC?", answer: "arp -a" },
    { id: 16, category: "Đề FE Trọng tâm", term: "Lệnh 'copy running-config startup-config' làm thay đổi nội dung của bộ nhớ nào trên Router?", answer: "NVRAM (Non-Volatile RAM - nơi lưu trữ startup-config và giữ nguyên dữ liệu khi tắt nguồn)." },
    { id: 17, category: "Đề FE Trọng tâm", term: "Cách nhanh nhất để kiểm tra xem thông báo Banner MOTD trên Router đã cấu hình đúng chưa?", answer: "Exit privileged EXEC mode and press Enter (Thoát khỏi chế độ # ra màn hình ngoài cùng rồi nhấn Enter)." },
    { id: 18, category: "Đề FE Trọng tâm", term: "Bốn hoạt động cơ bản của tầng Network (Layer 3) là gì?", answer: "Addressing, Encapsulation, Routing, De-encapsulation." }
  ],

  quizQuestions: [
    // ==================== SET 1: QUESTION 1 - 50 ====================
    {
      id: 101,
      topic: "Đề FE Set 1 (Q1-Q50)",
      question: "[Set 1 - Q1] What does the OSI model help with in networking?",
      options: ["Encryption", "Address resolution", "Troubleshooting and standardization", "Server hosting"],
      answer: 2,
      explanation: "Mô hình OSI giúp chuẩn hóa (standardization) các giao thức mạng và hỗ trợ khoanh vùng xử lý sự cố (troubleshooting) theo từng tầng."
    },
    {
      id: 102,
      topic: "Đề FE Set 1 (Q1-Q50)",
      question: "[Set 1 - Q2] What process does a device use to verify that its IPv6 address is unique on the network?",
      options: ["DHCPv6", "SLAAC", "Neighbor Discovery Protocol (NDP)", "Duplicate Address Detection (DAD)"],
      answer: 3,
      explanation: "Thiết bị sử dụng tiến trình DAD (Duplicate Address Detection) thông qua bản tin ICMPv6 Neighbor Solicitation gửi tới chính IPv6 dự kiến dùng để kiểm tra xem có máy nào trùng địa chỉ không."
    },
    {
      id: 103,
      topic: "Đề FE Set 1 (Q1-Q50)",
      question: "[Set 1 - Q3] An administrator wants to create four subnetworks from the network address 192.168.1.0/24. What is the network address and subnet mask of the second usable subnet?",
      options: [
        "192.168.1.64 – 255.255.255.192",
        "192.168.1.32 – 255.255.255.240",
        "192.168.1.64 – 255.255.255.240",
        "192.168.1.128 – 255.255.255.192",
        "192.168.1.8 – 255.255.255.224"
      ],
      answer: 0,
      explanation: "Cần tạo 4 mạng con -> mượn 2 bit (2^2 = 4) -> Prefix mới là /26 (Mask: 255.255.255.192), bước nhảy = 64. 4 mạng con lần lượt là: Mạng 1 = 192.168.1.0, Mạng 2 = 192.168.1.64, Mạng 3 = 192.168.1.128, Mạng 4 = 192.168.1.192."
    },
    {
      id: 104,
      topic: "Đề FE Set 1 (Q1-Q50)",
      question: "[Set 1 - Q4] What is the purpose of port numbers in TCP and UDP communication?",
      options: [
        "To identify specific applications running on a device",
        "To define the size of a packet",
        "To assign MAC addresses",
        "To establish a physical connection"
      ],
      answer: 0,
      explanation: "Số hiệu cổng (Port numbers) ở tầng Transport dùng để định danh chính xác ứng dụng hoặc dịch vụ đang chạy trên thiết bị nhận/gửi."
    },
    {
      id: 105,
      topic: "Đề FE Set 1 (Q1-Q50)",
      question: "[Set 1 - Q5] Which of the following is not a key element of communication?",
      options: ["Network speed", "A source (sender)", "A destination (receiver)", "A transmission medium (channel)"],
      answer: 0,
      explanation: "3 thành phần bắt buộc của mọi hệ thống giao tiếp là: Nguồn gửi (Source/Sender), Đích nhận (Destination/Receiver) và Kênh truyền (Transmission medium/Channel). 'Network speed' không phải là thành phần cơ bản."
    },
    {
      id: 106,
      topic: "Đề FE Set 1 (Q1-Q50)",
      question: "[Set 1 - Q6] Which type of network design allows devices to act as both clients and servers?",
      options: ["Client-server network", "LAN", "WAN", "Peer-to-peer network"],
      answer: 3,
      explanation: "Trong mạng ngang hàng Peer-to-peer (P2P), mỗi thiết bị có thể đồng thời đóng vai trò vừa là Client vừa là Server."
    },
    {
      id: 107,
      topic: "Đề FE Set 1 (Q1-Q50)",
      question: "[Set 1 - Q7] Which encoding technique is used to convert digital data into digital signals?",
      options: ["Manchester encoding", "Modulation", "Signal interference", "Frequency hopping"],
      answer: 0,
      explanation: "Manchester encoding (và NRZ, 4B/5B) là kỹ thuật mã hóa đường truyền dùng để biến đổi dữ liệu số (bit 0, 1) thành tín hiệu số (digital signals)."
    },
    {
      id: 108,
      topic: "Đề FE Set 1 (Q1-Q50)",
      question: "[Set 1 - Q8] Which two characteristics describe the IP protocol at Layer 3? (Choose two.)",
      options: [
        "Connectionless and best-effort",
        "Independent of the underlying media",
        "Guarantees delivery of packets",
        "Relies on TCP for segmentation"
      ],
      answer: [0, 1],
      explanation: "Giao thức IP ở tầng 3 có 3 đặc tính cốt lõi: Connectionless (không kết nối), Best-effort (nỗ lực tối đa, không đảm bảo tin cậy) và Media independent (độc lập với môi trường truyền bên dưới)."
    },
    {
      id: 109,
      topic: "Đề FE Set 1 (Q1-Q50)",
      question: "[Set 1 - Q9] What is the aim of an ARP spoofing attack?",
      options: [
        "To flood the network with ARP reply broadcasts",
        "To fill switch MAC address tables with bogus addresses",
        "To associate IP addresses to the wrong MAC address",
        "To overwhelm network hosts with ARP requests"
      ],
      answer: 2,
      explanation: "ARP Spoofing (ARP Poisoning) gửi các bản tin ARP giả mạo nhằm ánh xạ một địa chỉ IP (thường là của Default Gateway) với sai địa chỉ MAC (MAC của kẻ tấn công) để nghe lén Man-in-the-Middle."
    },
    {
      id: 110,
      topic: "Đề FE Set 1 (Q1-Q50)",
      question: "[Set 1 - Q10] Match the command with the device mode at which the command is entered:\nA. login | B. service password-encryption | C. ip address 192.168.4.4 255.255.255.0 | D. copy running-config startup-config | E. enable\nModes: 1. R1(config)# | 2. R1> | 3. R1(config-router)# | 4. R1# | 5. R1(config-line)# | 6. R1(config-if)#",
      options: ["A5-B1-C6-D2-E4", "A5-B1-C6-D4-E2", "A1-B5-C6-D4-E2", "A5-B1-C4-D6-E2"],
      answer: 1,
      explanation: "A. login -> 5. R1(config-line)# | B. service password-encryption -> 1. R1(config)# | C. ip address -> 6. R1(config-if)# | D. copy run start -> 4. R1# | E. enable -> 2. R1>. Đáp án đúng: A5-B1-C6-D4-E2."
    },
    {
      id: 112,
      topic: "Đề FE Set 1 (Q1-Q50)",
      question: "[Set 1 - Q12] Which layer of the OSI model is responsible for describing the methods for exchanging data frames over a common media?",
      options: ["Network", "Transport", "Data Link", "Physical"],
      answer: 2,
      explanation: "Tầng Data Link (Layer 2) chịu trách nhiệm mô tả các phương thức trao đổi khung dữ liệu (data frames) qua một môi trường truyền chung."
    },
    {
      id: 113,
      topic: "Đề FE Set 1 (Q1-Q50)",
      question: "[Set 1 - Q13] What does a router do when it receives a Layer 2 frame over the network medium?",
      options: [
        "Determines the best path",
        "De-encapsulates the frame",
        "Re-encapsulates the packet into a new frame",
        "Forwards the new frame appropriate to the medium of that segment of the physical network"
      ],
      answer: 1,
      explanation: "Ngay khi nhận một Layer 2 Frame từ đường truyền vật lý, hành động đầu tiên của Router là mở gói (De-encapsulates the frame) để đọc IP Header bên trong trước khi tra bảng định tuyến và đóng gói lại."
    },
    {
      id: 115,
      topic: "Đề FE Set 1 (Q1-Q50)",
      question: "[Set 1 - Q15] What happens if an Ethernet frame is less than 64 bytes?",
      options: ["It is fragmented", "It is considered valid", "It is dropped", "It is routed"],
      answer: 2,
      explanation: "Kích thước tối thiểu của một khung Ethernet hợp lệ là 64 bytes. Mọi khung nhỏ hơn 64 bytes bị coi là 'collision fragment' hoặc 'runt frame' và sẽ bị thiết bị nhận hủy bỏ (dropped) ngay."
    },
    {
      id: 116,
      topic: "Đề FE Set 1 (Q1-Q50)",
      question: "[Set 1 - Q16] What are two services provided by the OSI network layer? (Choose two.)",
      options: [
        "Performing error detection",
        "Routing packets toward the destination",
        "Encapsulating PDUs from the transport layer",
        "Placement of frames on the media",
        "Collision detection"
      ],
      answer: [1, 2],
      explanation: "Tầng Network (L3) cung cấp 4 chức năng: Addressing, Encapsulating PDUs từ tầng Transport thành Packet, Routing packets về đích, và De-encapsulating. (Error detection, đặt frame lên media và phát hiện xung đột thuộc tầng 2)."
    },
    {
      id: 117,
      topic: "Đề FE Set 1 (Q1-Q50)",
      question: "[Set 1 - Q17] Which statement describes the use of powerline networking technology?",
      options: [
        "New 'smart' electrical cabling is used to extend an existing home LAN",
        "A home LAN is installed without the use of physical cabling",
        "A device connects to an existing home LAN using an adapter and an existing electrical outlet",
        "Wireless access points use powerline adapters to distribute data through the home LAN"
      ],
      answer: 2,
      explanation: "Công nghệ mạng Powerline cho phép thiết bị kết nối vào mạng LAN gia đình thông qua một bộ chuyển đổi (adapter) cắm trực tiếp vào ổ cắm điện (electrical outlet) có sẵn."
    },
    {
      id: 118,
      topic: "Đề FE Set 1 (Q1-Q50)",
      question: "[Set 1 - Q18] What two criteria are used to help select a network medium from various network media? (Choose two.)",
      options: [
        "The types of data that need to be prioritized",
        "The cost of the end devices utilized in the network",
        "The distance the selected medium can successfully carry a signal",
        "The number of intermediate devices installed in the network",
        "The environment where the selected medium is to be installed"
      ],
      answer: [2, 4],
      explanation: "Bốn tiêu chí chọn cáp/môi trường truyền dẫn theo Cisco: (1) Khoảng cách truyền tín hiệu tối đa (Distance), (2) Môi trường lắp đặt (Environment - nhiễu điện từ), (3) Dung lượng/Tốc độ dữ liệu cần truyền, (4) Chi phí của bản thân cáp và lắp đặt."
    },
    {
      id: 119,
      topic: "Đề FE Set 1 (Q1-Q50)",
      question: "[Set 1 - Q19] Considering the addresses already used and having to remain within the 10.16.10.0/24 network range, which subnet address could be assigned to the network containing 25 hosts?",
      options: [
        "10.16.10.224/26",
        "10.16.10.240/27",
        "10.16.10.128/28",
        "10.16.10.240/28",
        "10.16.10.160/26",
        "10.16.10.64/27"
      ],
      answer: 5,
      explanation: "Mạng cần 25 hosts -> cần 5 bit host (2^5 - 2 = 30 hosts >= 25), tương ứng prefix /27 (bước nhảy 32). Các địa chỉ mạng /27 hợp lệ phải là bội số của 32 (.0, .32, .64, .96, .128, .160, .192, .224). Trong các đáp án /27, 10.16.10.240/27 sai vì 240 không chia hết cho 32; chỉ có 10.16.10.64/27 là địa chỉ mạng /27 hợp lệ!"
    },
    {
      id: 120,
      topic: "Đề FE Set 1 (Q1-Q50)",
      question: "[Set 1 - Q20] What is the purpose of the no shutdown command?",
      options: [
        "To reset the switch",
        "To enable an interface",
        "To configure IP addresses",
        "To shut down an interface"
      ],
      answer: 1,
      explanation: "Lệnh `no shutdown` dùng để kích hoạt/bật một cổng giao tiếp (enable an interface), đưa cổng thoát khỏi trạng thái 'administratively down'."
    },
    {
      id: 121,
      topic: "Đề FE Set 1 (Q1-Q50)",
      question: "[Set 1 - Q21] How many host addresses are available on the 192.168.10.128/26 network?",
      options: ["30", "32", "60", "62", "64"],
      answer: 3,
      explanation: "Với /26, số bit phần Host là h = 32 - 26 = 6 bit. Số địa chỉ Host khả dụng là 2^6 - 2 = 64 - 2 = 62 hosts."
    },
    {
      id: 122,
      topic: "Đề FE Set 1 (Q1-Q50)",
      question: "[Set 1 - Q22] Which destination address is used in an ARP request frame?",
      options: [
        "0.0.0.0",
        "255.255.255.255",
        "FFFF.FFFF.FFFF",
        "AAAA.AAAA.AAAA",
        "The physical address of the destination host"
      ],
      answer: 2,
      explanation: "Khung tin ARP Request được đóng gói ở tầng 2 dưới dạng Broadcast Ethernet nên có địa chỉ Destination MAC là FFFF.FFFF.FFFF."
    },
    {
      id: 123,
      topic: "Đề FE Set 1 (Q1-Q50)",
      question: "[Set 1 - Q23] Which interface allows remote management of a Layer 2 switch?",
      options: [
        "The AUX interface",
        "The console port interface",
        "The switch virtual interface",
        "The first Ethernet port interface"
      ],
      answer: 2,
      explanation: "Để quản trị từ xa một Switch Layer 2 qua mạng (Telnet/SSH), quản trị viên phải gán địa chỉ IP cho giao diện ảo SVI (Switch Virtual Interface, ví dụ `interface vlan 1`)."
    },
    {
      id: 124,
      topic: "Đề FE Set 1 (Q1-Q50)",
      question: "[Set 1 - Q24] What is the purpose of the TCP three-way handshake?",
      options: [
        "To establish connection state and sequence tracking",
        "To check the integrity of data sent",
        "To open multiple sockets between client and server",
        "To notify the server of a new port number"
      ],
      answer: 0,
      explanation: "Quá trình bắt tay 3 bước của TCP (SYN, SYN-ACK, ACK) dùng để xác nhận thiết bị đích sẵn sàng nhận dữ liệu, thiết lập trạng thái kết nối và đồng bộ số thứ tự Sequence Number."
    },
    {
      id: 125,
      topic: "Đề FE Set 1 (Q1-Q50)",
      question: "[Set 1 - Q25] Within a production network, what is the purpose of configuring a switch with a default gateway address?",
      options: [
        "Hosts that are connected to the switch can use the switch default gateway address to forward packets to a remote destination",
        "A switch must have a default gateway to be accessible by Telnet and SSH",
        "The default gateway address is used to forward packets originating from the switch to remote networks",
        "It provides a next-hop address for all traffic that flows through the switch"
      ],
      answer: 2,
      explanation: "Switch Layer 2 không định tuyến gói tin cho các PC. Địa chỉ Default Gateway cấu hình trên Switch chỉ dùng để chuyển tiếp các gói tin khởi phát từ chính con Switch đó (như phản hồi Ping/SSH/Telnet quản trị) đi tới các mạng ở xa."
    },
    {
      id: 126,
      topic: "Đề FE Set 1 (Q1-Q50)",
      question: "[Set 1 - Q26] Which two models are used to describe network protocols and operations? (Choose two.)",
      options: ["TCP/IP", "OSI", "ISO", "HTTP"],
      answer: [0, 1],
      explanation: "Hai mô hình chuẩn dùng để mô tả kiến trúc và giao thức mạng là TCP/IP (protocol model) và OSI (reference model)."
    },
    {
      id: 127,
      topic: "Đề FE Set 1 (Q1-Q50)",
      question: "[Set 1 - Q27] What does ARP resolve?",
      options: [
        "MAC address to IP",
        "IP address to hostname",
        "IP address to MAC address",
        "Hostname to MAC address"
      ],
      answer: 2,
      explanation: "ARP (Address Resolution Protocol) phân giải từ địa chỉ IPv4 đã biết sang địa chỉ vật lý MAC tương ứng."
    },
    {
      id: 128,
      topic: "Đề FE Set 1 (Q1-Q50)",
      question: "[Set 1 - Q28] What is the purpose of ICMP messages?",
      options: [
        "To inform routers about network topology changes",
        "To ensure the delivery of an IP packet",
        "To provide feedback of IP packet transmissions",
        "To monitor the process of a domain name to IP address resolution"
      ],
      answer: 2,
      explanation: "Thông điệp ICMP (Internet Control Message Protocol) dùng để cung cấp phản hồi (feedback/error reporting) về các vấn đề khi truyền gói tin IP trong mạng."
    },
    {
      id: 129,
      topic: "Đề FE Set 1 (Q1-Q50)",
      question: "[Set 1 - Q29] A user pings 127.0.0.1 and receives a response. What does this confirm?",
      options: [
        "The IP protocol stack is operational",
        "The DNS service is operational",
        "The NIC is functioning correctly",
        "The router is reachable"
      ],
      answer: 0,
      explanation: "127.0.0.1 là địa chỉ Loopback. Ping thành công tới 127.0.0.1 chứng tỏ ngăn xếp giao thức TCP/IP (IP protocol stack) trên chính thiết bị đó đã được cài đặt và hoạt động bình thường."
    },
    {
      id: 130,
      topic: "Đề FE Set 1 (Q1-Q50)",
      question: "[Set 1 - Q30] Which of the following techniques use native IPv6 connectivity?",
      options: ["Dual stack", "Tunneling", "Translation", "All of the above"],
      answer: 0,
      explanation: "Dual stack cho phép thiết bị chạy đồng thời cả ngăn xếp IPv4 và IPv6 thuần (native IPv6 connectivity) trên cùng một đường truyền. (Tunneling bọc IPv6 trong IPv4, còn Translation biên dịch NAT64)."
    },
    {
      id: 131,
      topic: "Đề FE Set 1 (Q1-Q50)",
      question: "[Set 1 - Q31] Which command displays a summary of all interfaces on the router including their IP addresses and status?",
      options: ["show interfaces", "show ip route", "show ip interface brief", "show running-config"],
      answer: 2,
      explanation: "Lệnh `show ip interface brief` hiển thị bảng tóm tắt ngắn gọn tất cả các cổng trên Router kèm địa chỉ IPv4 và trạng thái Status/Protocol."
    },
    {
      id: 132,
      topic: "Đề FE Set 1 (Q1-Q50)",
      question: "[Set 1 - Q32] What is the effect of using the Router# copy running-config startup-config command on a router?",
      options: [
        "The contents of ROM will change",
        "The contents of RAM will change",
        "The contents of NVRAM will change",
        "The contents of flash will change"
      ],
      answer: 2,
      explanation: "File `startup-config` được lưu trong bộ nhớ NVRAM. Do đó khi sao chép `running-config` (từ RAM) sang `startup-config`, nội dung của NVRAM sẽ thay đổi."
    },
    {
      id: 133,
      topic: "Đề FE Set 1 (Q1-Q50)",
      question: "[Set 1 - Q33 & Q38] A network administrator enters the service password-encryption command into the configuration mode of a router. What does this command accomplish?",
      options: [
        "This command encrypts passwords as they are transmitted across serial WAN links",
        "This command prevents someone from viewing the running configuration passwords",
        "This command enables a strong encryption algorithm for the enable secret password command",
        "This command automatically encrypts passwords in configuration files that are currently stored in NVRAM",
        "This command provides an exclusive encrypted password for external service personnel"
      ],
      answer: 1,
      explanation: "Lệnh `service password-encryption` áp dụng mã hóa yếu (Type 7) cho tất cả mật khẩu chưa mã hóa nhằm ngăn người khác đọc lén mật khẩu khi nhìn vào màn hình `show running-config` hoặc `show startup-config`."
    },
    {
      id: 134,
      topic: "Đề FE Set 1 (Q1-Q50)",
      question: "[Set 1 - Q34] What is the broadcast address for the IP subnet 192.168.10.0/24?",
      options: ["192.168.10.0", "192.168.10.255", "192.168.10.1", "192.168.11.0"],
      answer: 1,
      explanation: "Với mạng /24 (255.255.255.0), 8 bit cuối là phần Host. Khi tất cả 8 bit Host bằng 1 (giá trị 255), ta được địa chỉ Broadcast là 192.168.10.255."
    },
    {
      id: 135,
      topic: "Đề FE Set 1 (Q1-Q50)",
      question: "[Set 1 - Q35] What type of IPv6 address begins with fe80?",
      options: ["GUA", "LLA", "Multicast address", "None. An IPv6 address must begin with 2001"],
      answer: 1,
      explanation: "Địa chỉ IPv6 bắt đầu bằng tiền tố `fe80` (FE80::/10) là Link-Local Address (LLA)."
    },
    {
      id: 136,
      topic: "Đề FE Set 1 (Q1-Q50)",
      question: "[Set 1 - Q36] Which statement is correct about network protocols?",
      options: [
        "Network protocols define the type of hardware that is used and how it is mounted in racks",
        "They define how messages are exchanged between the source and the destination",
        "They all function in the network access layer of TCP/IP",
        "They are only required for exchange of messages between devices on remote networks"
      ],
      answer: 1,
      explanation: "Giao thức mạng (Network protocols) là tập hợp các quy tắc định nghĩa cách thức thông điệp được định dạng và trao đổi giữa thiết bị nguồn và đích."
    },
    {
      id: 137,
      topic: "Đề FE Set 1 (Q1-Q50)",
      question: "[Set 1 - Q37] Match the IPv6 address with the IPv6 address type:\n1. 2001:DB8::BAF:3F57:FE94 | 2. FF02::1 | 3. ::1 | 4. FF02::1:FFAE:F85F\nTypes: A. Link-local | B. Solicited node multicast | C. Global unicast | D. All node multicast | E. Loopback | F. Unique local",
      options: ["C1-D2-E3-B4", "C2-D1-E3-A4", "C1-F2-E4-B3", "C4-D2-E3-B1"],
      answer: 0,
      explanation: "1 (2001:DB8...) là C. Global unicast | 2 (FF02::1) là D. All node multicast | 3 (::1) là E. Loopback | 4 (FF02::1:FF...) là B. Solicited node multicast -> C1-D2-E3-B4."
    },
    {
      id: 139,
      topic: "Đề FE Set 1 (Q1-Q50)",
      question: "[Set 1 - Q39] Which frame forwarding method receives the entire frame and performs a CRC check to detect errors before forwarding the frame?",
      options: [
        "Cut-through switching",
        "Store-and-forward switching",
        "Fragment-free switching",
        "Fast-forward switching"
      ],
      answer: 1,
      explanation: "Store-and-forward switching nhận trọn vẹn toàn bộ Frame, tính toán kiểm tra lỗi CRC trong trường FCS, nếu không có lỗi mới chuyển tiếp đi."
    },
    {
      id: 140,
      topic: "Đề FE Set 1 (Q1-Q50)",
      question: "[Set 1 - Q40] What kind of threat is described when a threat actor impersonates another person to obtain credit information about that person?",
      options: [
        "Data loss or manipulation",
        "Disruption of service",
        "Identity theft",
        "Information theft"
      ],
      answer: 2,
      explanation: "Hành vi mạo danh (impersonates) người khác để trục lợi hoặc lấy thông tin tín dụng của họ được gọi là Đánh cắp danh tính (Identity theft)."
    },
    {
      id: 141,
      topic: "Đề FE Set 1 (Q1-Q50)",
      question: "[Set 1 - Q41] A technician is configuring a router to allow for all forms of management access. As part of each different type of access, the technician is trying to type the command login. Which configuration mode should be entered to do this task?",
      options: [
        "User executive mode",
        "Global configuration mode",
        "Any line configuration mode",
        "Privileged EXEC mode"
      ],
      answer: 2,
      explanation: "Lệnh `login` (yêu cầu kiểm tra mật khẩu khi đăng nhập) được cấu hình bên trong các chế độ Line (`line console 0`, `line vty 0 4`, `line aux 0`) -> Any line configuration mode."
    },
    {
      id: 142,
      topic: "Đề FE Set 1 (Q1-Q50)",
      question: "[Set 1 - Q42] A Layer 2 switch is used to switch incoming frames from a 1000BASE-T port to a port connected to a 100Base-T network. Which method of memory buffering would work best for this task?",
      options: [
        "Port-based buffering",
        "Level 1 cache buffering",
        "Shared memory buffering",
        "Fixed configuration buffering"
      ],
      answer: 2,
      explanation: "Shared memory buffering lưu tất cả Frame vào một vùng nhớ đệm chung có thể cấp phát động cho các cổng, cực kỳ hiệu quả khi chuyển mạch bất đối xứng giữa cổng tốc độ cao (1000 Mbps) sang cổng tốc độ thấp (100 Mbps)."
    },
    {
      id: 143,
      topic: "Đề FE Set 1 (Q1-Q50)",
      question: "[Set 1 - Q43] What happens when a switch receives a frame and the calculated CRC value is different than the value that is in the FCS field?",
      options: [
        "The switch places the new CRC value in the FCS field and forwards the frame",
        "The switch notifies the source of the bad frame",
        "The switch drops the frame",
        "The switch floods the frame to all ports except the port through which the frame arrived"
      ],
      answer: 2,
      explanation: "Khi giá trị CRC tính toán không khớp với giá trị trong trường FCS, Frame đó đã bị hỏng trên đường truyền và Switch sẽ hủy (drops) Frame ngay."
    },
    {
      id: 144,
      topic: "Đề FE Set 1 (Q1-Q50)",
      question: "[Set 1 - Q44] Under which two circumstances will a switch flood a frame out of every port except the port that the frame was received on? (Choose two.)",
      options: [
        "The frame has the broadcast address as the destination address",
        "The destination address is unknown to the switch",
        "The source address in the frame header is the broadcast address",
        "The source address in the frame is a multicast address",
        "The destination address in the frame is a known unicast address"
      ],
      answer: [0, 1],
      explanation: "Switch gửi tràn (Flood) Frame ra tất cả các cổng (trừ cổng nhận vào) khi Destination MAC là địa chỉ Broadcast (FFFF.FFFF.FFFF), Multicast, hoặc Unknown Unicast (địa chỉ đích chưa có trong bảng MAC)."
    },
    {
      id: 145,
      topic: "Đề FE Set 1 (Q1-Q50)",
      question: "[Set 1 - Q45] Assume a host with IP address 10.1.1.10 wants to request web services from a server at 10.1.1.254. Which of the following would display the correct socket pair?",
      options: [
        "1099:10.1.1.10, 80:10.1.1.254",
        "10.1.1.10:80, 10.1.1.254:1099",
        "10.1.1.10:1099, 10.1.1.254:80",
        "80:10.1.1.10, 1099:10.1.1.254"
      ],
      answer: 2,
      explanation: "Cú pháp Socket là `IP:Port`. Client (10.1.1.10) mở cổng nguồn động (1099) gọi tới dịch vụ Web HTTP (cổng 80) trên Server (10.1.1.254) -> `10.1.1.10:1099, 10.1.1.254:80`."
    },
    {
      id: 146,
      topic: "Đề FE Set 1 (Q1-Q50)",
      question: "[Set 1 - Q50] Which tool uses the ICMP 'Time Exceeded' message to trace the path between two hosts?",
      options: ["ping", "netstat", "traceroute", "ipconfig"],
      answer: 2,
      explanation: "Công cụ `traceroute` (hoặc `tracert` trên Windows) tăng dần giá trị TTL (1, 2, 3...) để các Router dọc đường trả về thông điệp ICMP 'Time Exceeded', từ đó xác định từng chặng trên đường đi."
    },

    // ==================== SET 2: CÂU 1 - 50 ====================
    {
      id: 201,
      topic: "Đề FE Set 2 (Câu 1-50)",
      question: "[Set 2 - Câu 1] Which three fields are used in a UDP segment header? (Choose three.)",
      options: [
        "Window Size",
        "Length",
        "Source Port",
        "Acknowledgment Number",
        "Checksum",
        "Sequence Number"
      ],
      answer: [1, 2, 4],
      explanation: "UDP Header chỉ dài 8 bytes gồm 4 trường: Source Port, Destination Port, Length và Checksum. (Window Size, Sequence Number và Acknowledgment Number chỉ có trong TCP Header)."
    },
    {
      id: 202,
      topic: "Đề FE Set 2 (Câu 1-50)",
      question: "[Set 2 - Câu 2] A client packet is received by a server. The packet has a destination port number of 22. What service is the client requesting?",
      options: ["SSH", "DHCP", "DNS", "TFTP"],
      answer: 0,
      explanation: "Port 22 (TCP) là cổng mặc định của dịch vụ SSH (Secure Shell)."
    },
    {
      id: 203,
      topic: "Đề FE Set 2 (Câu 1-50)",
      question: "[Set 2 - Câu 3] What are three responsibilities of the transport layer? (Choose three.)",
      options: [
        "meeting the reliability requirements of applications, if any",
        "multiplexing multiple communication streams from many users or applications on the same network",
        "identifying the applications and services on the client and server that should handle transmitted data",
        "directing packets towards the destination network",
        "formatting data into a compatible form for receipt by the destination devices",
        "conducting error detection of the contents in frames"
      ],
      answer: [0, 1, 2],
      explanation: "3 trách nhiệm của tầng Transport: Đáp ứng độ tin cậy (TCP), Multiplexing nhiều luồng giao tiếp, và định danh ứng dụng qua số hiệu cổng Port. (Định tuyến packet là L3, định dạng dữ liệu là L6, kiểm tra lỗi frame là L2)."
    },
    {
      id: 204,
      topic: "Đề FE Set 2 (Câu 1-50)",
      question: "[Set 2 - Câu 4] What field is used by the destination host to reassemble segments into the original order?",
      options: ["Control bits", "Destination port", "Sequence number", "Source port", "Window size"],
      answer: 2,
      explanation: "Trường Sequence number trong TCP Header đánh số thứ tự giúp máy đích sắp xếp và ghép các segment về đúng thứ tự ban đầu."
    },
    {
      id: 205,
      topic: "Đề FE Set 2 (Câu 1-50)",
      question: "[Set 2 - Câu 5 & SU26 Câu 7] What are the three basic parts of a data link frame?",
      options: [
        "Header, Data, and Trailer",
        "Source, Destination, and Data",
        "Start, Control, and Stop",
        "Addressing, Type, and Error Detection"
      ],
      answer: 0,
      explanation: "Mọi khung tin (Frame) ở tầng Data Link đều gồm 3 phần cơ bản: Header (đầu khung), Data (dữ liệu Packet L3), và Trailer (đuôi khung chứa FCS)."
    },
    {
      id: 206,
      topic: "Đề FE Set 2 (Câu 1-50)",
      question: "[Set 2 - Câu 6 & SU26 Câu 2] Which two statements describe the services provided by the data link layer? (Choose two.)",
      options: [
        "It defines the end-to-end delivery addressing scheme.",
        "It maintains the path between the source and destination devices during the data transmission.",
        "It manages the access of frames to the network media.",
        "It provides reliable delivery through link establishment and flow control.",
        "It ensures that application data will be transmitted according to the prioritization.",
        "It packages various Layer 3 PDUs into a frame format that is compatible with the network interface."
      ],
      answer: [2, 5],
      explanation: "Tầng Data Link (L2) đóng gói các gói tin L3 PDU thành định dạng Frame tương thích với giao diện mạng (F) và điều khiển việc đặt/truy cập Frame lên môi trường truyền (C)."
    },
    {
      id: 207,
      topic: "Đề FE Set 2 (Câu 1-50)",
      question: "[Set 2 - Câu 7] Which topology displays networking device layer IP addresses?",
      options: ["Aerial topology", "IP address topology", "Logical topology", "Physical topology"],
      answer: 2,
      explanation: "Logical topology (Sơ đồ logic) hiển thị cách thức dữ liệu truyền trong mạng thông qua địa chỉ IP (Layer 3), tên cổng và quy hoạch Subnet/VLAN."
    },
    {
      id: 208,
      topic: "Đề FE Set 2 (Câu 1-50)",
      question: "[Set 2 - Câu 8 & SU26 Câu 22] Which two benefits result from using a layered model in networking? (Select two answers)",
      options: [
        "Facilitates troubleshooting",
        "Promotes interoperability",
        "Increases application processing time",
        "Restricts vendor flexibility"
      ],
      answer: [0, 1],
      explanation: "Mô hình phân tầng giúp dễ dàng khoanh vùng xử lý sự cố (Facilitates troubleshooting) và thúc đẩy khả năng tương thích giữa sản phẩm của các hãng khác nhau (Promotes interoperability)."
    },
    {
      id: 210,
      topic: "Đề FE Set 2 (Câu 1-50)",
      question: "[Set 2 - Câu 10] In network communication, what is the process of breaking up messages into smaller, more manageable units called?",
      options: ["Encoding", "Sequencing", "Encapsulation", "Segmenting"],
      answer: 3,
      explanation: "Segmenting (Segmentation - Phân đoạn) là quá trình chia nhỏ một luồng dữ liệu lớn thành các phần nhỏ hơn để truyền qua mạng."
    },
    {
      id: 212,
      topic: "Đề FE Set 2 (Câu 1-50)",
      question: "[Set 2 - Câu 12] Which email protocol is used to retrieve mail from a server and typically deletes the messages on the server after download?",
      options: ["SMTP", "IMAP", "POP", "FTP"],
      answer: 2,
      explanation: "Giao thức POP (POP3 - cổng 110) tải email từ máy chủ về máy khách và theo mặc định sẽ xóa các email đó khỏi máy chủ sau khi tải xong."
    },
    {
      id: 213,
      topic: "Đề FE Set 2 (Câu 1-50)",
      question: "[Set 2 - Câu 13 & SU26 Câu 27] A technician configures a router interface with 'ipv6 address fe80::1:1 link-local'. What is the purpose of this address?",
      options: [
        "Enables communication on the local link",
        "Routes packets to other networks",
        "Acts as default gateway for global IPv6 traffic",
        "It is a multicast address"
      ],
      answer: 0,
      explanation: "Địa chỉ IPv6 Link-Local (fe80::) được dùng để cho phép các thiết bị giao tiếp với nhau trong phạm vi kết nối mạng cục bộ (on the local link)."
    },
    {
      id: 214,
      topic: "Đề FE Set 2 (Câu 1-50)",
      question: "[Set 2 - Câu 14] What is the purpose of the IPv6 unique local address (ULA)?",
      options: [
        "To allow devices to communicate with the global internet",
        "To provide a globally unique address",
        "To allow communication within a local site without global routing",
        "To enable multicast communication within a network"
      ],
      answer: 2,
      explanation: "IPv6 Unique Local Address (ULA - dải FC00::/7 hay FD00::/8) tương tự như Private IPv4, dùng để giao tiếp nội bộ trong một tổ chức/site mà không định tuyến ra Internet toàn cầu."
    },
    {
      id: 215,
      topic: "Đề FE Set 2 (Câu 1-50)",
      question: "[Set 2 - Câu 15] What is used in the EUI-64 process to create an IPv6 interface ID on an IPv6 enabled interface?",
      options: [
        "The MAC address of the IPv6 enabled interface",
        "A randomly generated 64-bit hexadecimal address",
        "An IPv6 address that is provided by a DHCPv6 server",
        "An IPv4 address that is configured on the interface"
      ],
      answer: 0,
      explanation: "Quy trình EUI-64 lấy địa chỉ MAC 48-bit của cổng mạng, chèn thêm 16-bit `FFFE` vào giữa và đảo bit thứ 7 để tạo thành Interface ID 64-bit."
    },
    {
      id: 216,
      topic: "Đề FE Set 2 (Câu 1-50)",
      question: "[Set 2 - Câu 16] What is the prefix length of an IPv6 address that is typically used for a single subnet?",
      options: ["/32", "/48", "/64", "/128"],
      answer: 2,
      explanation: "Trong kiến trúc IPv6 chuẩn, một mạng con (single subnet) luôn sử dụng độ dài tiền tố là `/64` (dành 64 bit còn lại cho Interface ID)."
    },
    {
      id: 217,
      topic: "Đề FE Set 2 (Câu 1-50)",
      question: "[Set 2 - Câu 17] Which part of a GUA is assigned by the ISP?",
      options: [
        "Global routing prefix",
        "Global routing prefix and subnet ID",
        "Prefix",
        "RIR prefix"
      ],
      answer: 0,
      explanation: "Trong địa chỉ IPv6 Global Unicast Address (GUA), phần Global routing prefix (thường là 48 bit đầu) do nhà cung cấp dịch vụ Internet (ISP) cấp cho khách hàng."
    },
    {
      id: 218,
      topic: "Đề FE Set 2 (Câu 1-50)",
      question: "[Set 2 - Câu 18] A host sends an IPv6 Neighbor Solicitation (NS) to determine a MAC address. What type of address is used for this request?",
      options: [
        "Multicast Ethernet and IPv6",
        "Unicast IPv6",
        "Broadcast Ethernet",
        "IPv4-mapped IPv6"
      ],
      answer: 0,
      explanation: "IPv6 không có Broadcast. Khi gửi Neighbor Solicitation (NS) để tìm MAC, host gửi tới địa chỉ Solicited-Node Multicast IPv6 (`FF02::1:FFxx:xxxx`) đóng gói trong Multicast Ethernet (`33-33-FF-xx-xx-xx`)."
    },
    {
      id: 219,
      topic: "Đề FE Set 2 (Câu 1-50)",
      question: "[Set 2 - Câu 19] Which two techniques are used to resolve MAC addresses from IP addresses on IPv4 and IPv6 networks? (Choose two.)",
      options: ["ARP", "Neighbor Discovery (ND)", "ICMPv4", "DHCP"],
      answer: [0, 1],
      explanation: "IPv4 sử dụng giao thức ARP, còn IPv6 sử dụng ICMPv6 Neighbor Discovery (ND) để phân giải địa chỉ IP sang địa chỉ MAC."
    },
    {
      id: 220,
      topic: "Đề FE Set 2 (Câu 1-50)",
      question: "[Set 2 - Câu 20 & 21] What statement describes the function of the Address Resolution Protocol (ARP)?",
      options: [
        "ARP is used to discover the IP address of any host on a different network.",
        "ARP is used to discover the IP address of any host on the local network.",
        "ARP is used to discover the MAC address of any host on a different network.",
        "ARP is used to discover the MAC address of any host on the local network."
      ],
      answer: 3,
      explanation: "ARP được dùng để tìm địa chỉ MAC từ địa chỉ IPv4 của một thiết bị nằm trong CÙNG mạng cục bộ (on the local network)."
    },
    {
      id: 222,
      topic: "Đề FE Set 2 (Câu 1-50)",
      question: "[Set 2 - Câu 22 & SU26 Câu 29] Which network infrastructure might an organization use to provide secure and safe access to individuals who work for a different organization but require access to the organization's data?",
      options: ["Extranet", "Intranet", "LAN", "WAN"],
      answer: 0,
      explanation: "Extranet mở rộng quyền truy cập an toàn cho các đối tác, nhà cung cấp hoặc khách hàng bên ngoài tổ chức cần làm việc với dữ liệu nội bộ của tổ chức."
    },
    {
      id: 223,
      topic: "Đề FE Set 2 (Câu 1-50)",
      question: "[Set 2 - Câu 23] A networking technician is working on the wireless network at a medical clinic. The technician accidentally sets up the wireless network so that patients can see the medical records data of other patients. Which of the network characteristics has been violated in this situation?",
      options: ["fault tolerance", "scalability", "security", "Quality of Service (QoS)", "reliability"],
      answer: 2,
      explanation: "Việc lộ dữ liệu bệnh án nhạy cảm cho người không có thẩm quyền đã vi phạm tính Bảo mật (Security - cụ thể là Confidentiality)."
    },
    {
      id: 224,
      topic: "Đề FE Set 2 (Câu 1-50)",
      question: "[Set 2 - Câu 24] Which of the following is a characteristic of a peer-to-peer (P2P) network?",
      options: [
        "It is highly scalable.",
        "It has centralized administration.",
        "It is easy to set up.",
        "It is very secure."
      ],
      answer: 2,
      explanation: "Mạng ngang hàng P2P có ưu điểm lớn nhất là đơn giản, dễ thiết lập (easy to set up) và chi phí thấp, nhưng khó mở rộng, không có quản trị tập trung và kém bảo mật."
    },
    {
      id: 225,
      topic: "Đề FE Set 2 (Câu 1-50)",
      question: "[Set 2 - Câu 25] Refer to the exhibit (PC nối cổng Console tới Switch [1], Switch nối Switch [2], Switch nối Router [3]). All the other connections are made through FastEthernet links. Which types of UTP cables can be used to connect the devices?",
      options: [
        "1 - rollover, 2 - crossover, 3 - straight-through",
        "1 - rollover, 2 - straight-through, 3 - crossover",
        "1 - crossover, 2 - straight-through, 3 - rollover",
        "1 - crossover, 2 - rollover, 3 - straight-through"
      ],
      answer: 0,
      explanation: "[1] PC nối vào cổng Console của Switch phải dùng cáp Rollover (cáp console); [2] Hai thiết bị cùng loại (Switch - Switch) dùng cáp chéo Crossover; [3] Hai thiết bị khác loại (Switch - Router) dùng cáp thẳng Straight-through."
    },
    {
      id: 227,
      topic: "Đề FE Set 2 (Câu 1-50)",
      question: "[Set 2 - Câu 27] What is the purpose of the Organizationally Unique Identifier (OUI) in an Ethernet MAC address?",
      options: [
        "To identify the specific device on the network.",
        "To identify the vendor of the Ethernet device.",
        "To specify the network layer protocol being used.",
        "To detect errors within the Ethernet frame."
      ],
      answer: 1,
      explanation: "OUI (24 bit đầu tiên / 6 ký tự Hex đầu của địa chỉ MAC) do IEEE cấp để định danh nhà sản xuất (vendor/manufacturer) của card mạng Ethernet."
    },
    {
      id: 228,
      topic: "Đề FE Set 2 (Câu 1-50)",
      question: "[Set 2 - Câu 28] What are two examples of the cut-through switching method? (Choose two.)",
      options: [
        "Store-and-forward switching",
        "Fast-forward switching",
        "CRC switching",
        "Fragment-free switching",
        "QoS switching"
      ],
      answer: [1, 3],
      explanation: "Hai phương thức biến thể của Cut-through switching là Fast-forward switching (chuyển ngay khi đọc xong Destination MAC) và Fragment-free switching (đọc xong 64 bytes đầu tiên mới chuyển)."
    },
    {
      id: 230,
      topic: "Đề FE Set 2 (Câu 1-50)",
      question: "[Set 2 - Câu 30] Which command can be used to test network connectivity and measure the time it takes for a packet to reach a destination?",
      options: ["ipconfig", "traceroute", "ping", "telnet"],
      answer: 2,
      explanation: "Lệnh `ping` dùng để kiểm tra kết nối giữa 2 host và đo thời gian khứ hồi (Round-Trip Time - RTT) của gói tin."
    },
    {
      id: 231,
      topic: "Đề FE Set 2 (Câu 1-50)",
      question: "[Set 2 - Câu 31] Which command is commonly used to test the internal configuration of IPv4 or IPv6 on the local host?",
      options: ["tracert", "ping the loopback address", "netstat", "ipconfig"],
      answer: 1,
      explanation: "Ping địa chỉ loopback (`ping 127.0.0.1` cho IPv4 hoặc `ping ::1` cho IPv6) dùng để kiểm tra hoạt động của ngăn xếp giao thức TCP/IP ngay trên máy cục bộ."
    },
    {
      id: 232,
      topic: "Đề FE Set 2 (Câu 1-50)",
      question: "[Set 2 - Câu 32] What is the purpose of encoding?",
      options: [
        "To increase bandwidth",
        "To ensure the accuracy and reliability of data by checking for transmission errors",
        "To convert data into a transmittable format",
        "To compress data"
      ],
      answer: 2,
      explanation: "Encoding (Mã hóa tín hiệu) là quá trình chuyển đổi dữ liệu thành định dạng các mẫu bit/tín hiệu có thể truyền đi được qua môi trường truyền."
    },
    {
      id: 233,
      topic: "Đề FE Set 2 (Câu 1-50)",
      question: "[Set 2 - Câu 33] Which of the following fiber-optic cable types can travel approximately 100 km?",
      options: ["Multimode", "Single-mode"],
      answer: 1,
      explanation: "Cáp quang Single-mode (SMF) sử dụng tia laser và lõi thủy tinh siêu nhỏ (9 micron) cho phép truyền tín hiệu đi xa tới khoảng 100 km (trong khi Multimode chỉ khoảng 500m - 2km)."
    },
    {
      id: 234,
      topic: "Đề FE Set 2 (Câu 1-50)",
      question: "[Set 2 - Câu 34 & SU26 Câu 33] Match the situation with the appropriate use of network media:\n1. backbone cabling in an enterprise | 2. guest access in a coffee shop | 3. horizontal cabling structure | 4. waiting rooms in a hospital | 5. desktop PCs in an enterprise office | 6. long-haul networks\nMedia: A. Copper Cables | B. Fiber Optic | C. Wireless",
      options: [
        "3A-5A-1B-6B-2C-4C",
        "3A-5A-2B-4B-1C-6C",
        "1A-6A-3B-5B-2C-4C",
        "1A-6A-2B-4B-3C-5C"
      ],
      answer: 0,
      explanation: "Copper (A) dùng cho cáp ngang 3 và nối PC văn phòng 5 (3A-5A); Fiber Optic (B) dùng cho trục chính doanh nghiệp 1 và mạng đường trục xa 6 (1B-6B); Wireless (C) dùng cho khách quán cafe 2 và phòng chờ bệnh viện 4 (2C-4C)."
    },
    {
      id: 236,
      topic: "Đề FE Set 2 (Câu 1-50)",
      question: "[Set 2 - Câu 36] How does a router process a packet when no matching route exists in the routing table?",
      options: [
        "It forwards the packet to the default route (if configured) or drops it",
        "It sends the packet to all interfaces",
        "It assigns a random route to the packet",
        "It broadcasts the packet across the network"
      ],
      answer: 0,
      explanation: "Nếu không có tuyến đường cụ thể nào khớp trong bảng định tuyến, Router sẽ đẩy gói tin ra tuyến mặc định Default Route / Gateway of Last Resort (nếu có); nếu không có cả Default Route thì Router sẽ hủy (drops) gói tin."
    },
    {
      id: 237,
      topic: "Đề FE Set 2 (Câu 1-50)",
      question: "[Set 2 - Câu 37 & SU26 Câu 21] Match the commands to the correct actions:\nActions: A. provides security on the console | B. displays a message when the router is accessed | C. configures a name on the router\nCommands: 1. Router(config)# hostname CL1 | 2. Router(config)# enable password Cisco | 3. Router(config-line)# password class | 4. Router(config)# password Cisco | 5. Router(config)# banner motd #",
      options: ["A3-B5-C1", "A2-B3-C4", "A3-B2-C1", "A4-B1-C5"],
      answer: 0,
      explanation: "A (bảo mật console) -> 3 (`Router(config-line)# password class`) | B (hiển thị thông báo khi truy cập) -> 5 (`banner motd #`) | C (đặt tên cho Router) -> 1 (`hostname CL1`). Đáp án: A3-B5-C1."
    },
    {
      id: 238,
      topic: "Đề FE Set 2 (Câu 1-50)",
      question: "[Set 2 - Câu 38] A new network administrator has been asked to enter a banner message on a Cisco device. What is the fastest way a network administrator could test whether the banner is properly configured?",
      options: [
        "Reboot the device.",
        "Enter CTRL-Z at the privileged mode prompt.",
        "Exit global configuration mode.",
        "Power cycle the device.",
        "Exit privileged EXEC mode and press Enter."
      ],
      answer: 4,
      explanation: "Banner MOTD hiển thị ngay trước khi người dùng đăng nhập vào thiết bị. Cách kiểm tra nhanh nhất không cần khởi động lại là gõ `exit` thoát khỏi chế độ Privileged EXEC (#) ra ngoài cùng rồi nhấn Enter."
    },
    {
      id: 239,
      topic: "Đề FE Set 2 (Câu 1-50)",
      question: "[Set 2 - Câu 39 & 41 & SU26 Câu 34] What is the ANDing process used for?",
      options: [
        "To securely encrypt communication between multiple network endpoints",
        "To find host addresses",
        "To determine the network address",
        "To convert decimal to binary"
      ],
      answer: 2,
      explanation: "Phép toán logic ANDing (giữa địa chỉ IPv4 và Subnet Mask ở dạng nhị phân) được thiết bị dùng để xác định Địa chỉ mạng (Network Address)."
    },
    {
      id: 240,
      topic: "Đề FE Set 2 (Câu 1-50)",
      question: "[Set 2 - Câu 40] A technician needs to configure a point-to-point WAN link and a subnet for a department with 50 hosts. Which subnet mask combinations are appropriate and efficient for these two use cases?",
      options: [
        "/30 for WAN, /26 for department",
        "/24 for both",
        "/27 for WAN, /25 for department",
        "/26 for both"
      ],
      answer: 0,
      explanation: "Kết nối WAN Point-to-Point chỉ cần 2 IP -> dùng `/30` (2^2 - 2 = 2 hosts). Phòng ban 50 hosts cần 2^6 - 2 = 62 hosts -> dùng `/26`."
    },
    {
      id: 242,
      topic: "Đề FE Set 2 (Câu 1-50)",
      question: "[Set 2 - Câu 42 & SU26 Câu 38] What is the purpose of subnetting a network?",
      options: [
        "To increase the number of available host addresses in a network.",
        "To create a single, large broadcast domain.",
        "To reduce the size of the network into smaller broadcast domains.",
        "To simplify the IP addressing scheme."
      ],
      answer: 2,
      explanation: "Chia mạng con (Subnetting) giúp chia tách một mạng lớn thành nhiều miền quảng bá nhỏ hơn (smaller broadcast domains), giảm lưu lượng broadcast và tăng hiệu năng/bảo mật."
    },
    {
      id: 243,
      topic: "Đề FE Set 2 (Câu 1-50)",
      question: "[Set 2 - Câu 43] Which IOS mode allows access to all commands and features?",
      options: [
        "Global configuration mode",
        "Interface subconfiguration mode",
        "Line console subconfiguration mode",
        "Privileged EXEC mode",
        "User EXEC mode"
      ],
      answer: 3,
      explanation: "Chế độ Privileged EXEC mode (`Router#`) cho phép truy cập vào toàn bộ các câu lệnh kiểm tra, quản trị, sao lưu và bước vào các chế độ cấu hình."
    },
    {
      id: 245,
      topic: "Đề FE Set 2 (Câu 1-50)",
      question: "[Set 2 - Câu 45] Which command is used to secure access to privileged EXEC mode on a switch?",
      options: [
        "enable class",
        "secret class",
        "enable secret cisco@12345",
        "service password-encryption"
      ],
      answer: 2,
      explanation: "Lệnh `enable secret [mật-khẩu]` dùng để đặt mật khẩu mã hóa bảo vệ quyền truy cập vào chế độ Privileged EXEC."
    },
    {
      id: 246,
      topic: "Đề FE Set 2 (Câu 1-50)",
      question: "[Set 2 - Câu 46 & SU26 Câu 40] Refer to the exhibit (`Switch> config t` -> `% Invalid input detected at '^' marker.`). An administrator is trying to configure the switch but receives the error message. What is the problem?",
      options: [
        "The entire command, configure terminal, must be used.",
        "The administrator is already in global configuration mode.",
        "The administrator must first enter privileged EXEC mode before issuing the command.",
        "The administrator must connect via the console port to access global configuration mode."
      ],
      answer: 2,
      explanation: "Dấu nhắc `Switch>` cho biết quản trị viên đang ở User EXEC mode. Lệnh `configure terminal` (`config t`) chỉ có thể chạy từ Privileged EXEC mode (`Switch#`), nên phải gõ `enable` trước."
    },
    {
      id: 247,
      topic: "Đề FE Set 2 (Câu 1-50)",
      question: "[Set 2 - Câu 47] What is a key difference between IPv4 and IPv6 packet headers?",
      options: [
        "IPv6 headers are simpler and have fewer fields than IPv4 headers",
        "IPv6 headers are more complex than IPv4 headers",
        "IPv4 headers are always smaller than IPv6 headers",
        "IPv6 requires NAT, while IPv4 does not"
      ],
      answer: 0,
      explanation: "Header của gói tin IPv6 có cấu trúc đơn giản hơn, kích thước cố định 40 bytes và có ít trường hơn (8 trường so với 12+ trường của IPv4) để Router xử lý nhanh hơn."
    },
    {
      id: 248,
      topic: "Đề FE Set 2 (Câu 1-50)",
      question: "[Set 2 - Câu 48] What is the purpose of a default gateway?",
      options: [
        "To resolve MAC addresses",
        "To connect to the same LAN",
        "To forward packets to remote networks",
        "To block unwanted traffic"
      ],
      answer: 2,
      explanation: "Default Gateway (thường là cổng của Router nối với LAN) dùng để chuyển tiếp các gói tin từ mạng cục bộ đi tới các mạng ở xa (remote networks)."
    },
    {
      id: 249,
      topic: "Đề FE Set 2 (Câu 1-50)",
      question: "[Set 2 - Câu 49] Which is true of the IPv6 packet header?",
      options: [
        "The Hop Limit field replaces the IPv4 Time to Live field.",
        "The Source and Destination IPv6 addresses change while travelling from source to destination.",
        "The Time to Live field replaces the DiffServ field.",
        "The Version field identifies the next header."
      ],
      answer: 0,
      explanation: "Trong IPv6 Header, trường `Hop Limit` thay thế cho trường `Time to Live (TTL)` của IPv4."
    },
    {
      id: 250,
      topic: "Đề FE Set 2 (Câu 1-50)",
      question: "[Set 2 - Câu 50] In an IPv4 packet header, what is the purpose of the Time-to-Live (TTL) field?",
      options: [
        "To identify the upper-level protocol like TCP or UDP.",
        "To detect corruption in the IPv4 header.",
        "To limit the lifetime of a packet, acting as a hop count.",
        "To reassemble fragmented packets at the destination."
      ],
      answer: 2,
      explanation: "Trường TTL giới hạn thời gian tồn tại của gói tin bằng cách giảm đi 1 mỗi khi đi qua 1 Router (hop count), tránh lặp gói tin vô hạn."
    },

    // ==================== SET 3: VIDEO NWC204_SU26_RE ====================
    {
      id: 301,
      topic: "Đề FE SU26_RE (Video)",
      question: "[SU26_RE - Câu 1] Which method allows a device to obtain an IPv6 address dynamically without the need for a DHCP server?",
      options: [
        "Stateful DHCPv6",
        "Stateless Address Autoconfiguration (SLAAC)",
        "Manual Configuration",
        "NAT64"
      ],
      answer: 1,
      explanation: "SLAAC (Stateless Address Autoconfiguration) cho phép thiết bị tự động tạo địa chỉ IPv6 Global Unicast dựa vào bản tin Router Advertisement (RA) từ Router mà không cần máy chủ DHCPv6."
    },
    {
      id: 303,
      topic: "Đề FE SU26_RE (Video)",
      question: "[SU26_RE - Câu 3] UDP and TCP belong to which layer of the TCP/IP protocol?",
      options: ["Application", "Transport", "Internet", "Network access"],
      answer: 1,
      explanation: "Cả TCP và UDP đều là giao thức hoạt động ở tầng Transport (Tầng Giao vận)."
    },
    {
      id: 304,
      topic: "Đề FE SU26_RE (Video)",
      question: "[SU26_RE - Câu 4] Cut-through switching reduces latency but increases the risk of forwarding corrupted frames.",
      options: ["True", "False"],
      answer: 0,
      explanation: "Đúng (True)! Vì Cut-through chuyển tiếp Frame ngay sau khi đọc địa chỉ MAC đích mà không chờ kiểm tra FCS ở cuối Frame nên độ trễ thấp nhưng có thể chuyển đi cả các Frame bị lỗi."
    },
    {
      id: 305,
      topic: "Đề FE SU26_RE (Video)",
      question: "[SU26_RE - Câu 5] Why is NAT not needed in IPv6?",
      options: [
        "Because IPv6 has integrated security, there is no need to hide the IPv6 addresses of internal networks.",
        "Any host or user can get a public IPv6 network address because the number of available IPv6 addresses is extremely large.",
        "The problems that are induced by NAT applications are solved because the IPv6 header improves packet handling by intermediate routers.",
        "The end-to-end connectivity problems that are caused by NAT are solved because the number of routes increases."
      ],
      answer: 1,
      explanation: "IPv6 có không gian địa chỉ 128-bit khổng lồ (3.4 x 10^38 địa chỉ), đủ để cấp địa chỉ IPv6 public (GUA) cho mọi thiết bị nên không cần dùng NAT để tiết kiệm địa chỉ như IPv4."
    },
    {
      id: 306,
      topic: "Đề FE SU26_RE (Video)",
      question: "[SU26_RE - Câu 6] Which of the following is the name for all computers connected to a network that participate in sending and receiving data directly in network communication?",
      options: ["Servers", "Intermediary devices", "Hosts", "Media"],
      answer: 2,
      explanation: "Tất cả các máy tính/thiết bị đầu cuối kết nối vào mạng và trực tiếp tham gia gửi/nhận dữ liệu được gọi chung là Hosts (End devices)."
    },
    {
      id: 308,
      topic: "Đề FE SU26_RE (Video)",
      question: "[SU26_RE - Câu 8] What property of ARP causes cached IP-to-MAC mappings to remain in memory longer?",
      options: [
        "Entries in an ARP table are time-stamped and are purged after the timeout expires.",
        "A static IP-to-MAC address entry can be entered manually into an ARP table.",
        "The type field 0x806 appears in the header of the Ethernet frame.",
        "The port-to-MAC address table on a switch has the same entries as the ARP table on the switch."
      ],
      answer: 1,
      explanation: "Các mục nhập ARP động có gắn dấu thời gian và sẽ bị xóa khi hết timeout; để giữ ánh xạ IP-to-MAC trong bộ nhớ lâu hơn, quản trị viên có thể nhập thủ công một mục ARP tĩnh (static IP-to-MAC address entry)."
    },
    {
      id: 309,
      topic: "Đề FE SU26_RE (Video)",
      question: "[SU26_RE - Câu 9] What will happen if the default gateway address is incorrectly configured on a host?",
      options: [
        "The host cannot communicate with other hosts in the local network.",
        "The switch will not forward packets initiated by the host.",
        "The host will have to use ARP to determine the correct address of the default gateway.",
        "The host cannot communicate with hosts in other networks.",
        "A ping from the host to 127.0.0.1 would not be successful."
      ],
      answer: 3,
      explanation: "Nếu cấu hình sai địa chỉ Default Gateway, host vẫn giao tiếp bình thường với các máy trong cùng mạng LAN nhưng KHÔNG thể giao tiếp với các máy ở mạng khác (other/remote networks)."
    },
    {
      id: 311,
      topic: "Đề FE SU26_RE (Video)",
      question: "[SU26_RE - Câu 11] Which three commands are used to set up secure access to a router through a connection to the console interface? (Choose three.)",
      options: [
        "interface fastethernet 0/0",
        "line vty 0 4",
        "line console 0",
        "enable secret cisco",
        "login",
        "password cisco"
      ],
      answer: [2, 4, 5],
      explanation: "3 câu lệnh dùng để cài đặt mật khẩu bảo vệ cổng Console là: `line console 0`, `password cisco`, và `login`."
    },
    {
      id: 312,
      topic: "Đề FE SU26_RE (Video)",
      question: "[SU26_RE - Câu 12] A web client is receiving a response for a web page from a web server. From the perspective of the client, what is the correct order of the protocol stack that is used to decode the received transmission?",
      options: [
        "Ethernet, IP, TCP, HTTP",
        "HTTP, TCP, IP, Ethernet",
        "Ethernet, TCP, IP, HTTP",
        "HTTP, Ethernet, IP, TCP"
      ],
      answer: 0,
      explanation: "Khi nhận dữ liệu (De-encapsulation / Decode), máy khách xử lý từ tầng thấp nhất lên tầng cao nhất: Tầng 2 (Ethernet) -> Tầng 3 (IP) -> Tầng 4 (TCP) -> Tầng 7 (HTTP)."
    },
    {
      id: 313,
      topic: "Đề FE SU26_RE (Video)",
      question: "[SU26_RE - Câu 13] How can you view the ARP table on a Windows PC?",
      options: ["arp -a", "show arp", "netstat -r", "ipconfig /all"],
      answer: 0,
      explanation: "Trên Windows Command Prompt, lệnh dùng để xem bảng ARP cache là `arp -a` (còn `show arp` là lệnh trên Router Cisco)."
    },
    {
      id: 314,
      topic: "Đề FE SU26_RE (Video)",
      question: "[SU26_RE - Câu 14] What is the purpose of the three-way handshake in TCP communication?",
      options: [
        "To establish that the destination device is present and accepting requests",
        "To encrypt the data before transmission",
        "To determine the best path for data transmission",
        "To synchronize the clocks between devices"
      ],
      answer: 0,
      explanation: "TCP 3-way handshake xác nhận thiết bị đích đang hiện diện trên mạng, dịch vụ đích đang hoạt động và sẵn sàng chấp nhận yêu cầu kết nối."
    },
    {
      id: 316,
      topic: "Đề FE SU26_RE (Video)",
      question: "[SU26_RE - Câu 16] Which statement about IPv6 addresses is true?",
      options: [
        "IPv6 addresses are expressed in decimal format.",
        "IPv6 addresses use 128 bits and are expressed in hexadecimal format.",
        "IPv6 addresses use 32 bits and are expressed in binary format.",
        "IPv6 addresses are composed of two parts: network and host."
      ],
      answer: 1,
      explanation: "Địa chỉ IPv6 có độ dài 128 bits và được biểu diễn dưới dạng hệ thập lục phân (hexadecimal format)."
    },
    {
      id: 317,
      topic: "Đề FE SU26_RE (Video)",
      question: "[SU26_RE - Câu 17] What protocol does IPv6 use for address resolution, replacing the function of ARP in IPv4?",
      options: [
        "DHCPv6",
        "ICMPv6 Neighbor Discovery (ND)",
        "Address Resolution Protocol version 6 (ARPv6)",
        "Router Solicitation (RS)"
      ],
      answer: 1,
      explanation: "IPv6 thay thế giao thức ARP của IPv4 bằng giao thức ICMPv6 Neighbor Discovery (ND)."
    },
    {
      id: 319,
      topic: "Đề FE SU26_RE (Video)",
      question: "[SU26_RE - Câu 19] A router is configured as follows:\nR1(config)# interface g0/0/0\nR1(config-if)# ip address 10.0.0.1 255.255.255.252\nR1(config-if)# no shutdown\nHow many usable host IP addresses are available on this subnet?",
      options: ["2", "4", "8", "16"],
      answer: 0,
      explanation: "Subnet mask `255.255.255.252` tương ứng với `/30` (còn 2 bit phần Host). Số địa chỉ Host khả dụng là 2^2 - 2 = 4 - 2 = 2 địa chỉ."
    },
    {
      id: 320,
      topic: "Đề FE SU26_RE (Video)",
      question: "[SU26_RE - Câu 20] What will a host on an Ethernet network do if it receives a frame with a unicast destination MAC address that does not match its own MAC address?",
      options: [
        "It will discard the frame.",
        "It will forward the frame to the next host.",
        "It will remove the frame from the media.",
        "It will strip off the data-link frame to check the destination IP address."
      ],
      answer: 0,
      explanation: "Khi một Host nhận được một Frame Unicast có địa chỉ Destination MAC không khớp với địa chỉ MAC của card mạng trên máy đó, nó sẽ hủy (discard) Frame đó ngay tại tầng 2."
    },
    {
      id: 323,
      topic: "Đề FE SU26_RE (Video)",
      question: "[SU26_RE - Câu 23] Why is UDP desirable for protocols that make a simple request and reply transactions?",
      options: ["Flow control", "Low overhead", "Reliability", "Same-order delivery"],
      answer: 1,
      explanation: "UDP rất lý tưởng cho các giao dịch hỏi-đáp đơn giản (như DNS, DHCP) vì nó có chi phí xử lý và kích thước Header rất nhỏ (Low overhead - chỉ 8 bytes, không mất thời gian bắt tay 3 bước)."
    },
    {
      id: 324,
      topic: "Đề FE SU26_RE (Video)",
      question: "[SU26_RE - Câu 24] What is the purpose of the frame check sequence (FCS) in an Ethernet frame?",
      options: [
        "To detect errors in transmitted frames",
        "To encrypt the frame for security",
        "To assign an IP address to the frame",
        "To prioritize network traffic"
      ],
      answer: 0,
      explanation: "Trường FCS (Frame Check Sequence) ở phần Trailer của Ethernet Frame dùng thuật toán CRC để phát hiện lỗi (detect errors) xảy ra trong quá trình truyền Frame."
    },
    {
      id: 325,
      topic: "Đề FE SU26_RE (Video)",
      question: "[SU26_RE - Câu 25] What are two functions of NVRAM? (Choose two.)",
      options: [
        "to store the routing table",
        "to retain contents when power is removed",
        "to store the startup configuration file",
        "to contain the running configuration file",
        "to store the ARP table"
      ],
      answer: [1, 2],
      explanation: "NVRAM (Non-Volatile RAM) có 2 chức năng chính: lưu trữ file cấu hình khởi động (`startup-config`) và giữ nguyên nội dung không bị mất khi tắt nguồn điện."
    },
    {
      id: 326,
      topic: "Đề FE SU26_RE (Video)",
      question: "[SU26_RE - Câu 26] What are the four basic operations of the network layer?",
      options: [
        "Addressing, Routing, Filtering, Framing",
        "Addressing, Encryption, Decryption, Routing",
        "Addressing, Encapsulation, Routing, De-encapsulation",
        "Encoding, Framing, Filtering, Switching"
      ],
      answer: 2,
      explanation: "4 hoạt động cơ bản của tầng Network (Layer 3) là: Gán địa chỉ (Addressing), Đóng gói (Encapsulation), Định tuyến (Routing), và Mở gói (De-encapsulation)."
    },
    {
      id: 328,
      topic: "Đề FE SU26_RE (Video)",
      question: "[SU26_RE - Câu 28] Given IPv6 address prefix 2001:db8:0::/48, what will be the last subnet that is created if the subnet prefix is changed to /52?",
      options: [
        "2001:db8:0:f00::/52",
        "2001:db8:0:8000::/52",
        "2001:db8:0:f::/52",
        "2001:db8:0:f000::/52"
      ],
      answer: 3,
      explanation: "Tiền tố `/48` chiếm 3 hextet đầu (`2001:db8:0`). Đổi sang `/52` nghĩa là mượn 4 bit đầu tiên (1 chữ số Hex đầu tiên) của hextet thứ 4. Mạng con cuối cùng có cả 4 bit bằng `1111` (= `f`), còn 12 bit sau của hextet thứ 4 bằng `000` -> `2001:db8:0:f000::/52`."
    },
    {
      id: 330,
      topic: "Đề FE SU26_RE (Video)",
      question: "[SU26_RE - Câu 30] A network administrator is testing network connectivity by issuing the ping command on a router. Which symbol will be displayed to indicate that a time expired during the wait for an ICMP echo reply message?",
      options: ["$", "!", ".", "U"],
      answer: 2,
      explanation: "Trên Cisco IOS, kết quả lệnh `ping` hiển thị dấu chấm `.` khi gói tin hết thời gian chờ (time expired / timeout), dấu `!` khi nhận phản hồi thành công, và chữ `U` khi nhận báo lỗi Destination Unreachable."
    },
    {
      id: 331,
      topic: "Đề FE SU26_RE (Video)",
      question: "[SU26_RE - Câu 31] Which type of network topology lets you see the actual location of intermediary devices and cable installation?",
      options: ["Physical topology", "Logical topology"],
      answer: 0,
      explanation: "Physical topology (Sơ đồ vật lý) cho phép nhìn thấy vị trí lắp đặt thực tế của các thiết bị trung gian, phòng máy và hệ thống đi dây cáp."
    },
    {
      id: 336,
      topic: "Đề FE SU26_RE (Video)",
      question: "[SU26_RE - Câu 36] A PC is downloading a large file from a server. The TCP window is 1000 bytes. The server is sending the file using 100-byte segments. How many segments will the server send before it requires an acknowledgment from the PC?",
      options: ["1 segment", "10 segments", "100 segments", "1000 segments"],
      answer: 1,
      explanation: "Với TCP Window Size = 1000 bytes và mỗi segment mang 100 bytes, Server được phép gửi liên tiếp `1000 / 100 = 10 segments` trước khi phải chờ gói xác nhận ACK từ PC."
    },
    {
      id: 339,
      topic: "Đề FE SU26_RE (Video)",
      question: "[SU26_RE - Câu 39] Which statement describes a feature of the IP protocol?",
      options: [
        "IP encapsulation is modified based on network media.",
        "IP relies on Layer 2 protocols for transmission error control.",
        "MAC addresses are used during the IP packet encapsulation.",
        "IP relies on upper layer services to handle situations of missing or out-of-order packets."
      ],
      answer: 3,
      explanation: "Vì IP là giao thức Best-effort (không tự khôi phục gói tin lỗi hay sắp xếp thứ tự), nên IP phụ thuộc vào dịch vụ tầng trên (cụ thể là TCP ở tầng 4) để xử lý việc mất gói hoặc gói tin đến sai thứ tự."
    },
    {
      id: 341,
      topic: "Đề FE SU26_RE (Video)",
      question: "[SU26_RE - Câu 41] What term refers to the amount of data that can be transmitted over a medium in a given time?",
      options: ["Bandwidth", "Latency", "Throughput", "Goodput"],
      answer: 0,
      explanation: "Bandwidth (Băng thông) là thuật ngữ chỉ dung lượng dữ liệu có thể được truyền qua một môi trường truyền trong một khoảng thời gian nhất định."
    },
    {
      id: 342,
      topic: "Đề FE SU26_RE (Video)",
      question: "[SU26_RE - Câu 42] What is the decimal equivalent of the /26 subnet mask?",
      options: [
        "255.255.255.192",
        "255.255.255.0",
        "255.255.255.224",
        "255.255.255.128"
      ],
      answer: 0,
      explanation: "Tiền tố `/26` có 2 bit `1` ở octet thứ 4 (`11000000` nhị phân = 128 + 64 = 192) -> `255.255.255.192`."
    },
    {
      id: 343,
      topic: "Đề FE SU26_RE (Video)",
      question: "[SU26_RE - Câu 43] What is the purpose of the ARP cache?",
      options: [
        "Prevents looping",
        "Stores MAC to IP mappings",
        "Tracks port usage",
        "Converts binary to text"
      ],
      answer: 1,
      explanation: "Bộ nhớ đệm ARP cache trên thiết bị dùng để lưu trữ tạm thời các cặp ánh xạ giữa địa chỉ IPv4 và địa chỉ MAC (Stores MAC to IP mappings)."
    },
    {
      id: 344,
      topic: "Đề FE SU26_RE (Video)",
      question: "[SU26_RE - Câu 44] What is a primary role of the Physical layer in transmitting data on the network?",
      options: [
        "create the signals that represent the bits in each frame on to the media",
        "provide physical addressing to the devices",
        "determine the path packets take through the network",
        "control data access to the media"
      ],
      answer: 0,
      explanation: "Vai trò chính của tầng Physical (Layer 1) là tạo ra các tín hiệu điện, quang hoặc sóng vô tuyến biểu diễn các bit trong mỗi Frame lên môi trường truyền."
    },
    {
      id: 345,
      topic: "Đề FE SU26_RE (Video)",
      question: "[SU26_RE - Câu 45] The IEEE 802 LAN/MAN data link layer consists of which two sublayers? (Choose two.)",
      options: [
        "Network Control Protocol",
        "Logical Link Control",
        "Media Access Control",
        "Link Control Protocol"
      ],
      answer: [1, 2],
      explanation: "Tầng Data Link theo chuẩn IEEE 802 LAN/MAN bao gồm 2 tầng con: Logical Link Control (LLC) và Media Access Control (MAC)."
    },
    {
      id: 346,
      topic: "Đề FE SU26_RE (Video)",
      question: "[SU26_RE - Câu 46] What is the correct sequence of commands to configure a console password on a switch?",
      options: [
        "line console 0 — password cisco — login",
        "enable password cisco — login — password cisco",
        "enable console — password cisco — encrypt password",
        "password cisco — enable password — encrypt password"
      ],
      answer: 0,
      explanation: "Trình tự chuẩn để đặt mật khẩu cổng Console là: vào `line console 0` -> đặt mật khẩu `password cisco` -> bật yêu cầu đăng nhập `login`."
    },
    {
      id: 347,
      topic: "Đề FE SU26_RE (Video)",
      question: "[SU26_RE - Câu 47] A user who is unable to connect to the file server contacts the help desk. The helpdesk technician asks the user to ping the IP address of the default gateway that is configured on the workstation. What is the purpose for this ping command?",
      options: [
        "to obtain a dynamic IP address from the server",
        "to request that the gateway forward the connection request to the file server",
        "to test that the host has the capability to reach hosts on other networks",
        "to resolve the domain name of the file server to its IP address"
      ],
      answer: 2,
      explanation: "Ping tới địa chỉ Default Gateway nhằm kiểm tra xem máy trạm có kết nối thông suốt tới cổng Router nội bộ để có khả năng liên lạc với các host ở mạng khác hay không."
    },
    {
      id: 348,
      topic: "Đề FE SU26_RE (Video)",
      question: "[SU26_RE - Câu 48] Which of the following applications typically use UDP?",
      options: ["File transfers", "Live video streaming", "Secure login", "Email"],
      answer: 1,
      explanation: "Live video streaming (và VoIP) sử dụng giao thức UDP vì cần tốc độ truyền thời gian thực với độ trễ thấp. (File transfers FTP, Secure login SSH và Email SMTP/POP3/IMAP đều dùng TCP)."
    },
    {
      id: 349,
      topic: "Đề FE SU26_RE (Video)",
      question: "[SU26_RE - Câu 49] What is the loopback address for IPv6?",
      options: ["127.0.0.1", "0.0.0.0", "::", "::1"],
      answer: 3,
      explanation: "Địa chỉ Loopback của IPv6 là `::1` (hay `::1/128`). Còn `127.0.0.1` là Loopback của IPv4, và `::` là địa chỉ Unspecified của IPv6."
    },
    {
      id: 350,
      topic: "Đề FE SU26_RE (Video)",
      question: "[SU26_RE - Câu 50] Which benefit does SSH offer over Telnet for remotely managing a router?",
      options: [
        "Encryption",
        "TCP usage",
        "Authorization",
        "Connections via multiple VTY lines"
      ],
      answer: 0,
      explanation: "Ưu điểm vượt trội của SSH so với Telnet là SSH cung cấp tính năng Mã hóa (Encryption) cho toàn bộ mật khẩu và dữ liệu truyền qua phiên kết nối từ xa."
    },

    // ==================== SET 4: VIDEO ĐỀ THI FE - NWC204 - SP26 - RE ====================
    {
      id: 401,
      topic: "Đề FE SP26_RE (Video)",
      question: "[SP26_RE - Q1] What is the correct order of the TCP three-way handshake?",
      options: [
        "ACK, SYN, SYN-ACK",
        "SYN, SYN-ACK, ACK",
        "SYN-ACK, ACK, FIN",
        "FIN, ACK, SYN"
      ],
      answer: 1,
      explanation: "Thứ tự chuẩn của quá trình bắt tay 3 bước TCP (Three-way handshake) là: Bước 1: SYN -> Bước 2: SYN-ACK -> Bước 3: ACK."
    },
    {
      id: 402,
      topic: "Đề FE SP26_RE (Video)",
      question: "[SP26_RE - Q2] What is the primary responsibility of the transport layer in the OSI model?",
      options: [
        "Routing data packets between networks",
        "Managing logical communications between applications on different hosts",
        "Defining physical media and connections",
        "Encrypting data before transmission"
      ],
      answer: 1,
      explanation: "Trách nhiệm chính của tầng Transport (Layer 4) là quản lý truyền thông logic đầu-cuối giữa các ứng dụng chạy trên các host khác nhau."
    },
    {
      id: 403,
      topic: "Đề FE SP26_RE (Video)",
      question: "[SP26_RE - Q3 & FA25_FE85 - Q2] What is the primary responsibility of the transport layer?",
      options: [
        "Formatting, or presenting, data into a compatible form.",
        "Tracking individual conversations and segmenting data.",
        "Translating domain names to IP addresses.",
        "Securing the network from external threats."
      ],
      answer: 1,
      explanation: "Tầng Transport chịu trách nhiệm theo dõi từng phiên hội thoại riêng biệt (tracking individual conversations), phân đoạn dữ liệu (segmenting data) và ghép nối lại ở đích."
    },
    {
      id: 404,
      topic: "Đề FE SP26_RE (Video)",
      question: "[SP26_RE - Q4] Which two fields are the same in a TCP and UDP header? (Choose two.)",
      options: [
        "Control bits",
        "Destination port number",
        "Sequence number",
        "Source port number",
        "Well-known port number"
      ],
      answer: [1, 3],
      explanation: "Cả TCP Header và UDP Header đều có chung 2 trường định danh cổng là Source port number và Destination port number (cùng với Checksum)."
    },
    {
      id: 405,
      topic: "Đề FE SP26_RE (Video)",
      question: "[SP26_RE - Q5] When 2 or more bits in a data unit has been changed during the transmission, the error is called:",
      options: [
        "random error",
        "burst error",
        "inverted error",
        "double error"
      ],
      answer: 1,
      explanation: "Khi có từ 2 bit trở lên trong một đơn vị dữ liệu bị biến đổi trong quá trình truyền dẫn, lỗi đó được gọi là Lỗi chùm (Burst error)."
    },
    {
      id: 406,
      topic: "Đề FE SP26_RE (Video)",
      question: "[SP26_RE - Q6] A university's wireless network experiences frequent collisions due to multiple devices accessing the shared medium. The network administrator is analyzing contention-based access methods to improve performance. Which statement accurately describes how CSMA/CA handles media access in IEEE 802.11 networks?",
      options: [
        "Devices include a duration field to reserve the medium",
        "Devices transmit a frame only when the medium is idle",
        "Devices wait a random period after detecting a collision",
        "Devices operate in full-duplex mode to avoid collisions"
      ],
      answer: 1,
      explanation: "Trong mạng không dây IEEE 802.11 (Wi-Fi) dùng CSMA/CA, thiết bị lắng nghe đường truyền trước (Carrier Sense) và chỉ truyền khung tin khi thấy đường truyền đang rảnh (idle) kết hợp thông báo thời lượng chiếm kênh để tránh xung đột."
    },
    {
      id: 407,
      topic: "Đề FE SP26_RE (Video)",
      question: "[SP26_RE - Q7] Which statement describes the half-duplex mode of data transmission?",
      options: [
        "Data that is transmitted over the network can only flow in one direction.",
        "Data that is transmitted over the network flows in both directions at the same time.",
        "Data that is transmitted over the network flows in one direction to many different destinations simultaneously.",
        "Data that is transmitted over the network flows in one direction at a time."
      ],
      answer: 3,
      explanation: "Chế độ bán song công (Half-duplex) cho phép dữ liệu truyền theo cả 2 chiều nhưng tại mỗi thời điểm chỉ đi theo 1 chiều duy nhất (flows in one direction at a time, giống bộ đàm)."
    },
    {
      id: 409,
      topic: "Đề FE SP26_RE (Video)",
      question: "[SP26_RE - Q9 & FA25_FE85 - Q9] Which name is assigned to the transport layer PDU?",
      options: ["bits", "data", "frame", "packet", "segment"],
      answer: 4,
      explanation: "Đơn vị dữ liệu giao thức (PDU) tại tầng Transport (Layer 4) được gọi là Segment."
    },
    {
      id: 411,
      topic: "Đề FE SP26_RE (Video)",
      question: "[SP26_RE - Q11 & FA25_RE - Q9] Which statement accurately describes a TCP/IP encapsulation process when a PC is sending data to the network?",
      options: [
        "Data is sent from the internet layer to the network access layer.",
        "Packets are sent from the network access layer to the transport layer.",
        "Segments are sent from the transport layer to the internet layer.",
        "Frames are sent from the network access layer to the internet layer."
      ],
      answer: 2,
      explanation: "Khi PC gửi dữ liệu đi (Encapsulation từ trên xuống dưới), các Segments ở tầng Transport sẽ được chuyển xuống tầng Internet để đóng gói thành Packets."
    },
    {
      id: 412,
      topic: "Đề FE SP26_RE (Video)",
      question: "[SP26_RE - Q12] This is a function of the OSI session layer.",
      options: [
        "compress and decompress data",
        "provide an interface between applications",
        "format data for the application layer",
        "exchange of information to initiate dialog between peers"
      ],
      answer: 3,
      explanation: "Tầng Session (Layer 5) có chức năng trao đổi thông tin để khởi tạo, quản lý và duy trì hội thoại (initiate dialog) giữa các tiến trình ngang hàng."
    },
    {
      id: 413,
      topic: "Đề FE SP26_RE (Video)",
      question: "[SP26_RE - Q13] Which of these addresses is the shortest abbreviation for the IP address: 3FFE:1044:0000:0000:00AB:0000:0000:0057?",
      options: [
        "3FFE:1044::AB::57",
        "3FFE:1044::00AB::0057",
        "3FFE:1044:0:0:AB::57",
        "3FFE:1044:0:0:00AB::57",
        "3FFE:1044:0000:0000:00AB::57",
        "3FFE:1044:0000:0000:00AB::0057"
      ],
      answer: 2,
      explanation: "Quy tắc rút gọn IPv6: (1) Bỏ các số 0 đứng đầu mỗi hextet (`00AB` -> `AB`, `0057` -> `57`, `0000` -> `0`); (2) Dấu `::` chỉ được dùng DUY NHẤT 1 lần trong địa chỉ. Do đó `3FFE:1044:0:0:AB::57` (hoặc `3FFE:1044::AB:0:0:57`) là cách viết hợp lệ ngắn gọn nhất!"
    },
    {
      id: 416,
      topic: "Đề FE SP26_RE (Video)",
      question: "[SP26_RE - Q16 & FA25_RE - Q16] Which IPv6 address type is used for communication within a single network segment and cannot be routed?",
      options: [
        "Global Unicast Address (GUA)",
        "Link-Local Address (LLA)",
        "Unique Local Address (ULA)",
        "Multicast Address"
      ],
      answer: 1,
      explanation: "Link-Local Address (LLA - FE80::/10) được dùng để giao tiếp trong phạm vi một phân đoạn mạng đơn lẻ (single network segment/link) và Router không bao giờ định tuyến gói tin có IP nguồn/đích là LLA."
    },
    {
      id: 417,
      topic: "Đề FE SP26_RE (Video)",
      question: "[SP26_RE - Q17 & FA25_FE85 - Q14] Which two multicast addresses are commonly joined by IPv6 hosts and routers? (Choose two.)",
      options: ["FF02::1", "FF02::2", "FF00::1", "FF01::1"],
      answer: [0, 1],
      explanation: "Hai địa chỉ Multicast IPv6 phổ biến nhất trên local link là `FF02::1` (All-nodes multicast - mọi host và router đều tham gia) và `FF02::2` (All-routers multicast - mọi router đều tham gia)."
    },
    {
      id: 418,
      topic: "Đề FE SP26_RE (Video)",
      question: "[SP26_RE - Q18 & FA25_FE85 - Q19] Which two types of IPv6 messages are used in place of ARP for address resolution? (Choose two.)",
      options: [
        "Anycast",
        "Broadcast",
        "echo reply",
        "echo request",
        "neighbor solicitation",
        "neighbor advertisement"
      ],
      answer: [4, 5],
      explanation: "IPv6 sử dụng 2 bản tin ICMPv6 là Neighbor Solicitation (NS) và Neighbor Advertisement (NA) để phân giải địa chỉ IPv6 sang MAC thay cho giao thức ARP của IPv4."
    },
    {
      id: 421,
      topic: "Đề FE SP26_RE (Video)",
      question: "[SP26_RE - Q21] Which statement describes the treatment of ARP requests on the local link?",
      options: [
        "They must be forwarded by all routers on the local network.",
        "They are received and processed by every device on the local network.",
        "They are dropped by all switches on the local network.",
        "They are received and processed only by the target device."
      ],
      answer: 1,
      explanation: "Vì ARP Request là khung tin Broadcast tầng 2 (FFFF.FFFF.FFFF) nên nó được Switch chuyển tới tất cả các cổng và được nhận, xử lý bởi MỌI thiết bị trong mạng cục bộ (nhưng chỉ máy có IP khớp mới trả lời ARP Reply)."
    },
    {
      id: 422,
      topic: "Đề FE SP26_RE (Video)",
      question: "[SP26_RE - Q22] An employee at a branch office is creating a quote for a customer. In order to do this, the employee needs to access confidential pricing information from internal servers at the Head Office. What type of network would the employee access?",
      options: [
        "an intranet",
        "the Internet",
        "an extranet",
        "a local area network"
      ],
      answer: 0,
      explanation: "Nhân viên thuộc nội bộ công ty truy cập máy chủ dữ liệu nội bộ tại trụ sở chính (Head Office) là đang truy cập vào mạng nội bộ Intranet."
    },
    {
      id: 423,
      topic: "Đề FE SP26_RE (Video)",
      question: "[SP26_RE - Q23] Which device performs the function of determining the path that messages should take through internetworks?",
      options: [
        "a router",
        "a firewall",
        "a web server",
        "a DSL modem"
      ],
      answer: 0,
      explanation: "Router (Bộ định tuyến) là thiết bị tầng 3 chịu trách nhiệm xác định đường đi tốt nhất (determining the path) cho các gói tin đi qua liên mạng (internetworks)."
    },
    {
      id: 424,
      topic: "Đề FE SP26_RE (Video)",
      question: "[SP26_RE - Q24 & FA25_FE85 - Q24] Which of the four basic characteristics of a reliable network architecture refers to the ability to quickly and easily expand to support new users and applications?",
      options: [
        "Fault Tolerance",
        "Scalability",
        "Quality of Service (QoS)",
        "Security"
      ],
      answer: 1,
      explanation: "Scalability (Khả năng mở rộng) là đặc tính cho phép mạng dễ dàng mở rộng quy mô để hỗ trợ thêm người dùng và ứng dụng mới mà không làm giảm hiệu năng của người dùng hiện tại."
    },
    {
      id: 425,
      topic: "Đề FE SP26_RE (Video)",
      question: "[SP26_RE - Q25] What are two actions performed by a Cisco switch? (Choose two.)",
      options: [
        "building a routing table that is based on the first IP address in the frame header",
        "using the source MAC addresses of frames to build and maintain a MAC address table",
        "forwarding frames with unknown destination IP addresses to the default gateway",
        "utilizing the MAC address table to forward frames via the destination MAC address",
        "examining the destination MAC address to add new entries to the MAC address table"
      ],
      answer: [1, 3],
      explanation: "Switch Layer 2 thực hiện 2 hành động cốt lõi: (1) Đọc Source MAC của Frame đi vào để học và xây dựng bảng MAC address table; (2) Tra cứu bảng MAC theo Destination MAC để quyết định cổng chuyển tiếp Frame đi ra."
    },
    {
      id: 426,
      topic: "Đề FE SP26_RE (Video)",
      question: "[SP26_RE - Q26 & FA25_FE85 - Q27] A network administrator is connecting two modern switches using a straight-through cable. The switches are new and have never been configured. Which three statements are correct about the final result of the connection? (Choose three.)",
      options: [
        "The link between the switches will work at the fastest speed that is supported by both switches.",
        "The link between switches will work as full-duplex.",
        "If both switches support different speeds, they will each work at their own fastest speed.",
        "The auto-MDIX feature will configure the interfaces eliminating the need for a crossover cable.",
        "The connection will not be possible unless the administrator changes the cable to a crossover cable.",
        "The duplex capability has to be manually configured because it cannot be negotiated."
      ],
      answer: [0, 1, 3],
      explanation: "Trên các Switch hiện đại ở cấu hình mặc định: (1) Tính năng Auto-MDIX tự động nhận diện cáp thẳng mà không cần đổi sang cáp chéo; (2) Tính năng Autonegotiation tự động thương lượng tốc độ cao nhất mà cả 2 bên cùng hỗ trợ và chạy ở chế độ Full-duplex."
    },
    {
      id: 427,
      topic: "Đề FE SP26_RE (Video)",
      question: "[SP26_RE - Q27] Refer to the exhibit (Hạt mạng RJ-45 bị tuốt vỏ xanh quá sâu làm lộ đoạn dây đồng tháo xoắn dài ra ngoài đầu bấm). What is wrong with the displayed termination?",
      options: [
        "The woven copper braid should not have been removed.",
        "The wrong type of connector is being used.",
        "The untwisted length of each wire is too long.",
        "The wires are too thick for the connector that is used."
      ],
      answer: 2,
      explanation: "Khi bấm đầu cáp UTP RJ-45, nếu tháo xoắn các cặp dây đồng quá dài (untwisted length of each wire is too long) và vỏ cáp không được kẹp giữ bên trong hạt mạng sẽ gây nhiễu xuyên âm (crosstalk) rất mạnh."
    },
    {
      id: 428,
      topic: "Đề FE SP26_RE (Video)",
      question: "[SP26_RE - Q28] Which sublayer handles Ethernet addressing?",
      options: ["Application", "MAC", "LLC", "Network"],
      answer: 1,
      explanation: "Tầng con MAC (Media Access Control) thuộc tầng Data Link chịu trách nhiệm xử lý địa chỉ vật lý Ethernet (MAC addressing), đóng khung và điều khiển truy cập môi trường truyền."
    },
    {
      id: 429,
      topic: "Đề FE SP26_RE (Video)",
      question: "[SP26_RE - Q29] What source IP address does a router use by default when the traceroute command is issued?",
      options: [
        "the highest configured IP address on the router",
        "a loopback IP address",
        "the IP address of the outbound interface",
        "the lowest configured IP address on the router"
      ],
      answer: 2,
      explanation: "Mặc định khi thực hiện lệnh `traceroute` từ Router, Router sẽ lấy địa chỉ IP của cổng xuất gói tin đi ra (outbound interface) làm địa chỉ Source IP."
    },
    {
      id: 430,
      topic: "Đề FE SP26_RE (Video)",
      question: "[SP26_RE - Q30] Which ICMP message is used by the traceroute utility during the process of finding the path between two end hosts?",
      options: [
        "ping",
        "Source quench",
        "Redirect",
        "Time exceeded"
      ],
      answer: 3,
      explanation: "Công cụ `traceroute` gửi các gói tin có TTL tăng dần (1, 2, 3...) để các Router dọc đường trả về thông điệp ICMP `Time exceeded` khi TTL giảm về 0."
    },
    {
      id: 431,
      topic: "Đề FE SP26_RE (Video)",
      question: "[SP26_RE - Q31] What is a function of the tracert command that differs from the ping command when they are used on a workstation?",
      options: [
        "The tracert command reaches the destination faster.",
        "The tracert command shows the information of routers in the path.",
        "The tracert command sends one ICMP message to each hop in the path.",
        "The tracert command is used to test the connectivity between two devices."
      ],
      answer: 1,
      explanation: "Khác với `ping` chỉ kiểm tra kết nối đầu-cuối, lệnh `tracert` hiển thị danh sách và thời gian phản hồi của từng Router (hop) trên suốt đường đi tới đích."
    },
    {
      id: 432,
      topic: "Đề FE SP26_RE (Video)",
      question: "[SP26_RE - Q32 & FA25_FE85 - Q52] A network administrator is measuring the transfer of bits across the company backbone for a mission critical financial application. The administrator notices that the network throughput appears lower than the bandwidth expected. Which three factors could influence the differences in throughput? (Choose three.)",
      options: [
        "the amount of traffic that is currently crossing the network",
        "the sophistication of the encapsulation method applied to the data",
        "the type of traffic that is crossing the network",
        "the latency that is created by the number of network devices that the data is crossing",
        "the bandwidth of the WAN connection to the Internet",
        "the reliability of the gigabit Ethernet infrastructure of the backbone"
      ],
      answer: [0, 2, 3],
      explanation: "Ba yếu tố làm Thông lượng thực tế (Throughput) thấp hơn Băng thông lý thuyết (Bandwidth) là: (1) Lưu lượng hiện đang đi qua mạng (amount of traffic), (2) Loại lưu lượng đang truyền (type of traffic), và (3) Độ trễ (latency) do số lượng thiết bị trung gian mà dữ liệu phải đi qua."
    },
    {
      id: 433,
      topic: "Đề FE SP26_RE (Video)",
      question: "[SP26_RE - Q33] Which type of fiber-optic cabling is characterized by a very small core and is used for long-distance applications?",
      options: [
        "Coaxial Fiber",
        "Twinaxial Fiber",
        "Single-Mode Fiber (SMF)",
        "Multi-Mode Fiber (MMF)"
      ],
      answer: 2,
      explanation: "Single-Mode Fiber (SMF - Cáp quang đơn mode) có lõi thủy tinh rất nhỏ (9 microns), dùng nguồn sáng Laser và truyền đi khoảng cách rất xa (tới hàng chục/trăm km)."
    },
    {
      id: 436,
      topic: "Đề FE SP26_RE (Video)",
      question: "[SP26_RE - Q36 & FA25_RE - Q38] Which two functions are primary functions of a router? (Choose two.)",
      options: [
        "packet forwarding",
        "microsegmentation",
        "domain name resolution",
        "path selection",
        "flow control"
      ],
      answer: [0, 3],
      explanation: "Hai chức năng chính yếu nhất của một Router là: Lựa chọn đường đi tốt nhất (Path selection) và Chuyển tiếp gói tin (Packet forwarding)."
    },
    {
      id: 437,
      topic: "Đề FE SP26_RE (Video)",
      question: "[SP26_RE - Q37] Refer to the exhibit (PC1 có IPv4: 192.168.10.214, Mask: 255.255.255.0, Default Gateway: 192.168.10.1). Consider the IP address configuration shown from PC1. What is a description of the default gateway address?",
      options: [
        "It is the IP address of the Switch1 network interface that connects PC1.",
        "It is the IP address of the Router1 interface that connects the PC1 LAN to Router1.",
        "It is the IP address of the Router1 interface that connects the company to the Internet.",
        "It is the IP address of the ISP network device located in the cloud."
      ],
      answer: 1,
      explanation: "Địa chỉ Default Gateway cấu hình trên PC1 (192.168.10.1) chính là địa chỉ IP của cổng giao tiếp trên Router1 nối trực tiếp vào mạng LAN của PC1."
    },
    {
      id: 438,
      topic: "Đề FE SP26_RE (Video)",
      question: "[SP26_RE - Q38] A router's Gi0/0 interface is down even though configuration is correct. What could explain this?",
      options: [
        "The 'no shutdown' command was not applied",
        "There is no device connected to the interface",
        "The subnet mask is invalid",
        "Telnet is not enabled"
      ],
      answer: 0,
      explanation: "Mặc định các cổng trên Router Cisco ở trạng thái 'administratively down'. Dù gán IP đúng nhưng nếu chưa gõ lệnh `no shutdown` thì cổng Gi0/0 vẫn sẽ bị down."
    },
    {
      id: 439,
      topic: "Đề FE SP26_RE (Video)",
      question: "[SP26_RE - Q39 & FA25_FE85 - Q40] How many usable IP addresses are available on the 192.168.1.0/27 network?",
      options: ["254", "30", "256", "16", "62", "32"],
      answer: 1,
      explanation: "Với `/27`, số bit phần Host là `32 - 27 = 5 bit`. Số địa chỉ IP khả dụng cho Host là `2^5 - 2 = 32 - 2 = 30` địa chỉ."
    },
    {
      id: 440,
      topic: "Đề FE SP26_RE (Video)",
      question: "[SP26_RE - Q40] What type of address is 198.133.219.162?",
      options: ["Public", "link-local", "Loopback", "multicast"],
      answer: 0,
      explanation: "Địa chỉ `198.133.219.162` không nằm trong các dải Private (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16), không phải Loopback (127.x), Link-local (169.254.x) hay Multicast (224-239.x) -> Đây là địa chỉ Public IPv4."
    },
    {
      id: 441,
      topic: "Đề FE SP26_RE (Video)",
      question: "[SP26_RE - Q41 & FA25_RE - Q42] How many host addresses are available on the network 172.16.128.0 with a subnet mask of 255.255.252.0?",
      options: ["510", "512", "1022", "1024", "2046", "2048"],
      answer: 2,
      explanation: "Subnet mask `255.255.252.0` có octet thứ 3 là `252` (`11111100` nhị phân -> 6 bit 1), tương ứng với `/22` (16 + 6 = 22). Số bit phần Host là `32 - 22 = 10 bit` -> Số địa chỉ Host khả dụng = `2^10 - 2 = 1024 - 2 = 1022`."
    },
    {
      id: 442,
      topic: "Đề FE SP26_RE (Video)",
      question: "[SP26_RE - Q42] Which of the following is a private IP address according to RFC 1918? (Select TWO answers)",
      options: [
        "10.0.0.25",
        "100.64.0.1",
        "172.31.300.10",
        "192.168.1.5"
      ],
      answer: [0, 3],
      explanation: "Theo RFC 1918, các dải IPv4 Private gồm: `10.0.0.0/8`, `172.16.0.0 - 172.31.255.255`, và `192.168.0.0/16`. (Lưu ý `172.31.300.10` không hợp lệ vì có octet `300 > 255`). Do đó đáp án đúng là `10.0.0.25` và `192.168.1.5`."
    },
    {
      id: 443,
      topic: "Đề FE SP26_RE (Video)",
      question: "[SP26_RE - Q43 & FA25_FE85 - Q44] Which command is used to secure privileged EXEC mode on a switch?",
      options: [
        "password",
        "enable secret",
        "login",
        "service password-encryption"
      ],
      answer: 1,
      explanation: "Lệnh `enable secret` được khuyến nghị sử dụng để đặt mật khẩu mã hóa bảo vệ chế độ Privileged EXEC trên Switch và Router."
    },
    {
      id: 444,
      topic: "Đề FE SP26_RE (Video)",
      question: "[SP26_RE - Q44 & FA25_FE85 - Q46] Which access method would be the most appropriate in-band access to the IOS over a network connection?",
      options: ["Console", "Telnet/SSH", "Aux"],
      answer: 1,
      explanation: "Truy cập 'in-band' (qua kết nối mạng IP hiện có) vào giao diện dòng lệnh IOS sử dụng dịch vụ `Telnet/SSH` (còn Console và Aux là truy cập 'out-of-band' không qua mạng)."
    },
    {
      id: 445,
      topic: "Đề FE SP26_RE (Video)",
      question: "[SP26_RE - Q45] Which Cisco IOS command mode allows access to all commands and features and is identified by a prompt ending in the # symbol?",
      options: [
        "User EXEC Mode",
        "Privileged EXEC Mode",
        "Global Configuration Mode",
        "Interface Configuration Mode"
      ],
      answer: 1,
      explanation: "Chế độ `Privileged EXEC Mode` có dấu nhắc kết thúc bằng ký hiệu `#` (`Router#` hoặc `Switch#`) và cho phép truy cập đầy đủ mọi lệnh kiểm tra, chẩn đoán và cấu hình."
    },
    {
      id: 446,
      topic: "Đề FE SP26_RE (Video)",
      question: "[SP26_RE - Q46 & FA25_RE - Q46] Which access method would be most appropriate if you were in the equipment room with a new switch that needs to be configured?",
      options: ["Console", "Telnet/SSH", "Aux"],
      answer: 0,
      explanation: "Khi bạn đang đứng trực tiếp trong phòng thiết bị (equipment room) với một con Switch mới nguyên chưa có địa chỉ IP, phương thức truy cập phù hợp nhất là nối cáp vào cổng `Console`."
    },
    {
      id: 447,
      topic: "Đề FE SP26_RE (Video)",
      question: "[SP26_RE - Q47 & FA25_FE85 - Q50] Which OSI layer sends segments to be encapsulated in an IPv4 or IPv6 packet?",
      options: [
        "Data link layer",
        "Network layer",
        "Transport layer",
        "Session layer"
      ],
      answer: 2,
      explanation: "Tầng `Transport layer` (Layer 4) đóng gói dữ liệu thành các `Segments` và chuyển xuống cho tầng Network để bọc vào trong gói tin IPv4 hoặc IPv6 packet."
    },
    {
      id: 448,
      topic: "Đề FE SP26_RE (Video)",
      question: "[SP26_RE - Q48] Refer to the exhibit (Bảng định tuyến có Gateway of last resort ra Serial0/0/0; 172.17.6.0/24 -> Fa0/0; 172.17.8.0/24 -> Fa0/1; 172.17.10.0/24 -> Fa0/1; 172.17.12.0/24 -> Fa1/0; 172.17.14.0/24 -> Fa1/1). Match the packets with their destination IP address to the exiting interfaces on the router:\nTargets: 1. FastEthernet0/0 | 2. FastEthernet0/1 | 3. FastEthernet1/0 | 4. FastEthernet1/1 | 5. Serial0/0/0\nPackets: A. 172.17.13.5 | B. 172.17.12.10 | C. 172.17.6.15 | D. 172.17.10.5 | E. 172.17.14.8",
      options: [
        "1D-2B-3C-4E-5A",
        "1A-2D-3B-4E-5C",
        "1E-2D-3B-4C-5A",
        "1C-2D-3B-4E-5A"
      ],
      answer: 3,
      explanation: "Tra bảng định tuyến: 1 (Fa0/0 - mạng .6.0/24) khớp C (172.17.6.15) -> 1C; 2 (Fa0/1 - mạng .10.0/24) khớp D (172.17.10.5) -> 2D; 3 (Fa1/0 - mạng .12.0/24) khớp B (172.17.12.10) -> 3B; 4 (Fa1/1 - mạng .14.0/24) khớp E (172.17.14.8) -> 4E; 5 (Serial0/0/0 - Default Route) khớp A (172.17.13.5 vì mạng .13.0 không có trong bảng) -> 5A. Đáp án: 1C-2D-3B-4E-5A."
    },
    {
      id: 449,
      topic: "Đề FE SP26_RE (Video)",
      question: "[SP26_RE - Q49 & FA25_RE - Q47] What are the two most commonly referenced fields in an IPv4 packet header that indicate where the packet is coming from and where it is going? (Choose two.)",
      options: [
        "Destination IP address",
        "Protocol",
        "Time to live",
        "Differentiated Service (DS)",
        "Source IP address"
      ],
      answer: [0, 4],
      explanation: "Hai trường được tham chiếu thường xuyên nhất trong IPv4 Header cho biết gói tin xuất phát từ đâu và đi tới đâu là `Source IP address` và `Destination IP address`."
    },

    // ==================== SET 5: VIDEO ĐỀ THI FE - NWC204 - FA25 - RE ====================
    {
      id: 503,
      topic: "Đề FE FA25_RE (Video)",
      question: "[FA25_RE - Q3] What is a primary characteristic of the UDP protocol?",
      options: [
        "Connection-oriented communication",
        "Guaranteed delivery of data",
        "Minimal overhead with no error checking",
        "Flow control and congestion avoidance"
      ],
      answer: 2,
      explanation: "Đặc điểm chính của giao thức UDP là chi phí xử lý tối thiểu (Minimal overhead), không thiết lập kết nối và không tự khôi phục lỗi."
    },
    {
      id: 504,
      topic: "Đề FE FA25_RE (Video)",
      question: "[FA25_RE - Q4] To which TCP port group does the port 414 belong?",
      options: [
        "Registered",
        "Well-known",
        "private or dynamic",
        "public"
      ],
      answer: 1,
      explanation: "Các cổng từ `0 đến 1023` thuộc nhóm `Well-known ports` (Cổng phổ biến). Vì `414` nằm trong khoảng 0 - 1023 nên thuộc nhóm Well-known. (Registered là 1024 - 49151; Private/Dynamic là 49152 - 65535)."
    },
    {
      id: 505,
      topic: "Đề FE FA25_RE (Video)",
      question: "[FA25_RE - Q5] Which physical WAN topology connects multiple remote sites to a central location?",
      options: [
        "Hub-and-Spoke",
        "Point-to-Point",
        "Mesh",
        "Ring"
      ],
      answer: 0,
      explanation: "Sơ đồ WAN vật lý kết nối nhiều chi nhánh ở xa (multiple remote sites - các nan hoa Spoke) tập trung về một địa điểm trung tâm (central location - trục Hub) được gọi là `Hub-and-Spoke`."
    },
    {
      id: 507,
      topic: "Đề FE FA25_RE (Video)",
      question: "[FA25_RE - Q7] What are two services performed by the data link layer of the OSI model? (Choose two.)",
      options: [
        "It fragments data packets into the MTU size.",
        "It determines the path to forward packets.",
        "It accepts Layer 3 packets and encapsulates them into frames.",
        "It provides media access control and performs error detection.",
        "It monitors the Layer 2 communication by building a MAC address table."
      ],
      answer: [2, 3],
      explanation: "Hai dịch vụ cốt lõi do tầng Data Link (Layer 2) thực hiện là: (1) Nhận các gói tin Layer 3 (packets) và đóng gói chúng thành các khung tin (frames); (2) Cung cấp điều khiển truy cập môi trường truyền (media access control) và thực hiện phát hiện lỗi (error detection qua FCS)."
    },
    {
      id: 510,
      topic: "Đề FE FA25_RE (Video)",
      question: "[FA25_RE - Q10] What is the process of dividing a large data stream into smaller pieces prior to transmission?",
      options: [
        "Sequencing",
        "Duplexing",
        "Multiplexing",
        "Segmentation"
      ],
      answer: 3,
      explanation: "`Segmentation` (Phân đoạn) là quá trình chia nhỏ một luồng dữ liệu lớn thành các phần nhỏ hơn trước khi truyền qua mạng."
    },
    {
      id: 511,
      topic: "Đề FE FA25_RE (Video)",
      question: "[FA25_RE - Q11] For the TCP/IP protocol suite, what is the correct order of events when a Telnet message is being prepared to be sent over the network?\nEvents: 1. The IP header is added | 2. The TCP header is added | 3. The Ethernet header is added | 4. The Telnet-formatted data is provided to the next layer\nOrder: A. First | B. Second | C. Third | D. Fourth",
      options: [
        "1C-2B-3D-4A",
        "1C-2D-3B-4A",
        "1A-2B-3C-4D",
        "1A-2B-3D-4C"
      ],
      answer: 0,
      explanation: "Thứ tự đóng gói từ trên xuống: A (First) = 4. Dữ liệu Telnet chuyển xuống tầng dưới -> B (Second) = 2. Thêm TCP header -> C (Third) = 1. Thêm IP header -> D (Fourth) = 3. Thêm Ethernet header. Ghép lại: `1C-2B-3D-4A`."
    },
    {
      id: 512,
      topic: "Đề FE FA25_RE (Video)",
      question: "[FA25_RE - Q12] What is necessary to plan and use when implementing a network?",
      options: [
        "device names",
        "IP addressing scheme",
        "MAC addressing scheme",
        "printer location"
      ],
      answer: 1,
      explanation: "Khi thiết kế và triển khai một hệ thống mạng, việc lên kế hoạch và quy hoạch sơ đồ địa chỉ IP (`IP addressing scheme`) là yêu cầu bắt buộc để tránh trùng lặp và dễ quản lý mở rộng."
    },
    {
      id: 514,
      topic: "Đề FE FA25_RE (Video)",
      question: "[FA25_RE - Q14] Three methods allow IPv6 and IPv4 to co-exist. Match each method with its description:\nA. The IPv4 packets and IPv6 packets coexist in the same network.\nB. The IPv6 packet is transported inside an IPv4 packet.\nC. IPv6 packets are converted into IPv4 packets, and vice versa.\nMethods: 1. DHCP | 2. translation | 3. tunneling | 4. dual-stack",
      options: [
        "A4-B3-C2",
        "A2-B3-C1",
        "A2-B1-C3",
        "A1-B3-C4"
      ],
      answer: 0,
      explanation: "A (IPv4 và IPv6 cùng tồn tại song song trên một mạng) -> 4. dual-stack | B (Gói IPv6 được bọc bên trong gói IPv4) -> 3. tunneling | C (Gói IPv6 được chuyển đổi sang gói IPv4 và ngược lại) -> 2. translation. Đáp án: `A4-B3-C2`."
    },
    {
      id: 515,
      topic: "Đề FE FA25_RE (Video)",
      question: "[FA25_RE - Q15 & FA25_FE85 - Q13] What is the recommended prefix length for most IPv6 subnets?",
      options: ["/32", "/48", "/64", "/128"],
      answer: 2,
      explanation: "Độ dài tiền tố (prefix length) chuẩn được khuyến nghị cho hầu hết các mạng con IPv6 LAN (IPv6 subnets) là `/64`."
    },
    {
      id: 517,
      topic: "Đề FE FA25_RE (Video)",
      question: "[FA25_RE - Q17] What type of address is automatically assigned to an interface when IPv6 is enabled on that interface?",
      options: [
        "Loopback",
        "Global unicast",
        "Link-local",
        "Unique local"
      ],
      answer: 2,
      explanation: "Ngay khi IPv6 được kích hoạt trên bất kỳ cổng giao tiếp nào, một địa chỉ `Link-local` (FE80::/10) sẽ tự động được tạo và gán cho cổng đó."
    },
    {
      id: 522,
      topic: "Đề FE FA25_RE (Video)",
      question: "[FA25_RE - Q22] Match the requirements of a reliable network with the supporting network architecture:\nA. fault tolerance | B. scalability | C. security\nDescriptions:\n1. Protect the network from unauthorized access.\n2. Provide redundant links and devices.\n3. Match the type of communication with a specific priority.\n4. Expand the network without degrading the service for existing users.\n5. Ensure that streaming data is provided over high speed links.",
      options: [
        "A2-B4-C1",
        "A2-B1-C4",
        "A1-B5-C3",
        "A3-B2-C4"
      ],
      answer: 0,
      explanation: "A (fault tolerance - chịu lỗi) -> 2. Cung cấp đường truyền và thiết bị dự phòng (redundant links and devices) | B (scalability - mở rộng) -> 4. Mở rộng mạng mà không làm giảm dịch vụ của người dùng hiện tại | C (security - bảo mật) -> 1. Bảo vệ mạng khỏi truy cập trái phép. Đáp án: `A2-B4-C1`."
    },
    {
      id: 526,
      topic: "Đề FE FA25_RE (Video)",
      question: "[FA25_RE - Q26] What is the special value assigned to the first 24 bits of a multicast MAC address transporting an IPv4 packet?",
      options: [
        "01-00-5E",
        "FF-00-5E",
        "01-5E-00",
        "FF-FF-FF"
      ],
      answer: 0,
      explanation: "Địa chỉ Multicast MAC dùng để đóng gói gói tin IPv4 Multicast luôn có 24 bit đầu tiên (3 byte đầu) cố định là `01-00-5E` (còn IPv6 Multicast MAC bắt đầu bằng `33-33`)."
    },
    {
      id: 527,
      topic: "Đề FE FA25_RE (Video)",
      question: "[FA25_RE - Q27] Refer to the exhibit (PC1 192.168.1.10 nối Switch -> R1 Fa0/0 192.168.1.1 [00-60-2F-3A-07-BB] -> R2 Fa0/1 192.168.3.1 [00-60-2F-3A-07-CC] -> Web Server 192.168.3.10 [00-60-2F-3A-07-DD]). What is the destination MAC address of the Ethernet frame as it leaves the web server if the final destination is PC1?",
      options: [
        "00-60-2F-3A-07-AA",
        "00-60-2F-3A-07-BB",
        "00-60-2F-3A-07-CC",
        "00-60-2F-3A-07-DD"
      ],
      answer: 2,
      explanation: "Khi Web Server (192.168.3.10) gửi gói tin về cho PC1 (192.168.1.10) ở khác mạng, Ethernet Frame rời khỏi Web Server phải lấy địa chỉ Destination MAC là địa chỉ MAC của cổng Default Gateway nối trực tiếp với mạng của Web Server, tức cổng Fa0/1 (192.168.3.1) có MAC là `00-60-2F-3A-07-CC`."
    },
    {
      id: 528,
      topic: "Đề FE FA25_RE (Video)",
      question: "[FA25_RE - Q28 & FA25_FE85 - Q25] What is the auto-MDIX feature on a switch?",
      options: [
        "the automatic configuration of an interface for 10/100/1000 Mb/s operation",
        "the automatic configuration of an interface for a straight-through or a crossover Ethernet cable connection",
        "the automatic configuration of full-duplex operation over a single Ethernet copper or optical cable",
        "the ability to turn a switch interface on or off accordingly if an active connection is detected"
      ],
      answer: 1,
      explanation: "Tính năng `auto-MDIX` (Automatic Medium-Dependent Interface Crossover) trên Switch giúp cổng tự động phát hiện và điều chỉnh chân thu/phát cho dù người dùng cắm cáp thẳng (straight-through) hay cáp chéo (crossover)."
    },
    {
      id: 529,
      topic: "Đề FE FA25_RE (Video)",
      question: "[FA25_RE - Q29] What happens if an IPv6 device detects a duplicate address during startup?",
      options: [
        "It sends a Neighbor Advertisement (NA) to notify the sender",
        "It automatically requests a new IP from DHCPv6",
        "It assigns a private address instead",
        "It ignores the conflict and continues using the address"
      ],
      answer: 0,
      explanation: "Trong quá trình DAD (Duplicate Address Detection), nếu một thiết bị đang sở hữu địa chỉ IPv6 đó nhận được bản tin Neighbor Solicitation (NS) thăm dò trùng địa chỉ, nó sẽ gửi trả bản tin `Neighbor Advertisement (NA)` để thông báo rằng địa chỉ này đã có chủ."
    },
    {
      id: 530,
      topic: "Đề FE FA25_RE (Video)",
      question: "[FA25_RE - Q30] What does the 'Time Exceeded' ICMP message indicate?",
      options: [
        "The destination host is down",
        "The packet's TTL has reached zero",
        "The source address is unreachable",
        "The network is congested"
      ],
      answer: 1,
      explanation: "Thông điệp ICMP `Time Exceeded` do Router gửi trả về báo hiệu rằng trường `TTL` (Time to Live - hoặc Hop Limit trong IPv6) của gói tin đã giảm về 0 trước khi tới được đích."
    },
    {
      id: 532,
      topic: "Đề FE FA25_RE (Video)",
      question: "[FA25_RE - Q32] Which of these is the name for the capacity of a medium to carry data?",
      options: ["Bandwidth", "Throughput", "Goodput"],
      answer: 0,
      explanation: "`Bandwidth` (Băng thông) là tên gọi chỉ dung lượng/khả năng mang dữ liệu tối đa của một môi trường truyền dẫn (capacity of a medium to carry data)."
    },
    {
      id: 535,
      topic: "Đề FE FA25_RE (Video)",
      question: "[FA25_RE - Q35] How can an administrator verify the current IP configuration of all router interfaces?",
      options: [
        "show ip interface brief",
        "display interfaces",
        "check interfaces",
        "list interfaces"
      ],
      answer: 0,
      explanation: "Lệnh `show ip interface brief` trên Cisco IOS dùng để kiểm tra nhanh cấu hình địa chỉ IP hiện tại và trạng thái của tất cả các cổng trên Router."
    },
    {
      id: 537,
      topic: "Đề FE FA25_RE (Video)",
      question: "[FA25_RE - Q37] What is the default gateway used for in a network?",
      options: [
        "To route traffic to local devices",
        "To assign IP addresses dynamically",
        "To route traffic to devices on another network",
        "To provide DNS services"
      ],
      answer: 2,
      explanation: "Default gateway được sử dụng để định tuyến/chuyển tiếp lưu lượng từ mạng nội bộ đi tới các thiết bị nằm ở một mạng khác (on another network)."
    },
    {
      id: 541,
      topic: "Đề FE FA25_RE (Video)",
      question: "[FA25_RE - Q41] A message is sent to all hosts on a remote network. Which type of message is it?",
      options: [
        "limited broadcast",
        "multicast",
        "directed broadcast",
        "unicast"
      ],
      answer: 2,
      explanation: "Bản tin gửi tới tất cả các host nằm trên một mạng ở xa (remote network) được gọi là `Directed broadcast` (ví dụ gửi tới địa chỉ broadcast của mạng đích như 192.168.20.255). Còn Limited broadcast (255.255.255.255) chỉ phát trong mạng cục bộ hiện tại."
    },
    {
      id: 543,
      topic: "Đề FE FA25_RE (Video)",
      question: "[FA25_RE - Q43] What command will prevent all unencrypted passwords from displaying in plain text in a configuration file?",
      options: [
        "(config)# enable password secret",
        "(config)# enable secret Secret_Password",
        "(config-line)# password secret",
        "(config)# service password-encryption",
        "(config)# enable secret Encrypted_Password"
      ],
      answer: 3,
      explanation: "Lệnh `(config)# service password-encryption` ở chế độ Global Configuration sẽ mã hóa toàn bộ các mật khẩu đang ở dạng văn bản thuần (plain text) trong file cấu hình."
    },
    {
      id: 544,
      topic: "Đề FE FA25_RE (Video)",
      question: "[FA25_RE - Q44] Passwords can be used to restrict access to all or parts of the Cisco IOS. Select the modes and interfaces that can be protected with passwords. (Choose three.)",
      options: [
        "VTY interface",
        "console interface",
        "Ethernet interface",
        "boot IOS mode",
        "privileged EXEC mode",
        "router configuration mode"
      ],
      answer: [0, 1, 4],
      explanation: "Ba nơi trên Cisco IOS có thể đặt mật khẩu bảo vệ truy cập là: `VTY interface` (line vty), `console interface` (line console 0), và `privileged EXEC mode` (enable secret/password)."
    },

    // ==================== SET 6: VIDEO ĐỀ THI FE - NWC204 - FA25 - FE85 ====================
    {
      id: 601,
      topic: "Đề FE FA25_FE85 (Video)",
      question: "[FA25_FE85 - Q1] What does a client do when it has UDP datagrams to send?",
      options: [
        "It just sends the datagrams.",
        "It queries the server to see if it is ready to receive data.",
        "It sends a simplified three-way handshake to the server.",
        "It sends to the server a segment with the SYN flag set to synchronize the conversation."
      ],
      answer: 0,
      explanation: "Vì UDP là giao thức không kết nối (connectionless), khi Client có các UDP datagrams cần gửi, nó chỉ việc gửi đi ngay (`It just sends the datagrams`) mà không cần hỏi trước hay bắt tay với Server."
    },
    {
      id: 603,
      topic: "Đề FE FA25_FE85 (Video)",
      question: "[FA25_FE85 - Q3] What is a characteristic of the User Datagram Protocol (UDP)?",
      options: [
        "It guarantees reliable delivery of data.",
        "It is a connection-oriented protocol.",
        "It is known as a best-effort delivery protocol.",
        "It uses a three-way handshake to establish a connection."
      ],
      answer: 2,
      explanation: "UDP được biết đến là giao thức truyền dữ liệu theo kiểu nỗ lực tối đa (`best-effort delivery protocol`), không cần thiết lập kết nối và không đảm bảo độ tin cậy."
    },
    {
      id: 605,
      topic: "Đề FE FA25_FE85 (Video)",
      question: "[FA25_FE85 - Q5] What is the primary role of the Data Link Layer in the OSI model?",
      options: [
        "Providing reliable data transfer between network devices",
        "Routing packets between networks",
        "Encrypting network data for secure transmission",
        "Managing user authentication and access control"
      ],
      answer: 0,
      explanation: "Vai trò chính của tầng Data Link (Layer 2) là đảm bảo truyền dữ liệu trực tiếp qua đường truyền vật lý giữa hai thiết bị mạng kế cận (node-to-node data transfer between network devices on the same link)."
    },
    {
      id: 606,
      topic: "Đề FE FA25_FE85 (Video)",
      question: "[FA25_FE85 - Q6] What is a frame in the context of the data link layer?",
      options: [
        "A sequence of segments",
        "A network path",
        "An encapsulated Layer 3 packet",
        "A router table entry"
      ],
      answer: 2,
      explanation: "Trong ngữ cảnh tầng Data Link (Layer 2), một `Frame` chính là một gói tin tầng 3 đã được đóng gói thêm Header và Trailer tầng 2 (`An encapsulated Layer 3 packet`)."
    },
    {
      id: 607,
      topic: "Đề FE FA25_FE85 (Video)",
      question: "[FA25_FE85 - Q7] What three items are contained in an Ethernet header and trailer? (Choose three.)",
      options: [
        "source IP address",
        "source MAC address",
        "destination IP address",
        "destination MAC address",
        "error-checking information"
      ],
      answer: [1, 3, 4],
      explanation: "Ethernet Header và Trailer (Layer 2) chứa 3 thông tin: `source MAC address`, `destination MAC address` (trong Header), và `error-checking information` (trường FCS trong Trailer). Còn địa chỉ IP nằm ở Packet Header tầng 3."
    },
    {
      id: 608,
      topic: "Đề FE FA25_FE85 (Video)",
      question: "[FA25_FE85 - Q8] What three application layer protocols are part of the TCP/IP protocol suite? (Choose three.)",
      options: ["ARP", "DHCP", "DNS", "FTP", "NAT", "PPP"],
      answer: [1, 2, 3],
      explanation: "Ba giao thức thuộc tầng Application của bộ giao thức TCP/IP là: `DHCP`, `DNS`, và `FTP`. (ARP và PPP thuộc tầng Network Access; NAT hoạt động ở tầng Internet)."
    },
    {
      id: 609,
      topic: "Đề FE FA25_FE85 (Video)",
      question: "[FA25_FE85 - Q9] Which PDU is processed when a host computer is de-encapsulating a message at the transport layer of the TCP/IP model?",
      options: ["Bits", "Frame", "Packet", "Segment"],
      answer: 3,
      explanation: "Tại tầng Transport của mô hình TCP/IP, đơn vị dữ liệu giao thức (PDU) được xử lý khi mở gói (de-encapsulating) là `Segment`."
    },
    {
      id: 612,
      topic: "Đề FE FA25_FE85 (Video)",
      question: "[FA25_FE85 - Q12] What are the three common HTTP message types?",
      options: [
        "GET, POST, PUT",
        "GET, SEND, UPDATE",
        "PUSH, PULL, SEND",
        "REQUEST, SEND, UPDATE"
      ],
      answer: 0,
      explanation: "Ba loại thông điệp (phương thức) HTTP phổ biến nhất là: `GET` (yêu cầu dữ liệu từ server), `POST` (gửi dữ liệu lên server), và `PUT` (tải lên/cập nhật tài nguyên trên server)."
    },
    {
      id: 615,
      topic: "Đề FE FA25_FE85 (Video)",
      question: "[FA25_FE85 - Q15] Refer to the exhibit (`2001:DB8:1234:0000::/64` với hextet thứ 4 `0000` được chia cho 3 cấp: Chữ số Hex 1 = Site, Chữ số Hex 2 = Sub-site, Chữ số Hex 3 = Subnet). With such a scheme, what is the maximum number of subnets achieved per sub-site?",
      options: ["0", "4", "16", "256"],
      answer: 2,
      explanation: "Mục `Subnet` được cấp 1 chữ số Hexadecimal (tương ứng 4 bits nhị phân, từ `0` đến `F`). Do đó mỗi Sub-site có thể tạo tối đa `2^4 = 16` mạng con (subnets)."
    },
    {
      id: 616,
      topic: "Đề FE FA25_FE85 (Video)",
      question: "[FA25_FE85 - Q16] What is the length of an IPv6 address?",
      options: ["32 bits", "64 bits", "128 bits", "256 bits"],
      answer: 2,
      explanation: "Địa chỉ IPv6 có độ dài `128 bits` (gấp 4 lần địa chỉ IPv4 32 bits)."
    },
    {
      id: 617,
      topic: "Đề FE FA25_FE85 (Video)",
      question: "[FA25_FE85 - Q17] Which address is a valid IPv6 link-local unicast address?",
      options: [
        "FEC8:1::FFFF",
        "FD80::1:1234",
        "FE0A::100:7788:998F",
        "FE80:5678:4251::FFFF",
        "FE30:1:4545:6578:ABC1"
      ],
      answer: 3,
      explanation: "Địa chỉ IPv6 Link-Local Unicast nằm trong dải `FE80::/10` (bắt đầu bằng `FE8`, `FE9`, `FEA`, `FEB`). Trong các đáp án trên, `FE80:5678:4251::FFFF` là địa chỉ Link-Local hợp lệ."
    },
    {
      id: 620,
      topic: "Đề FE FA25_FE85 (Video)",
      question: "[FA25_FE85 - Q20] Refer to the exhibit (Switch có MAC Address Table: Port 1 -> 00-90-0C-78-9A-B7 [PC1], Port 2 -> 00-90-0C-78-9A-B8 [PC2]; còn PC3 ở Port 3 và PC4 ở Port 4 chưa có trong bảng MAC). PC1 has sent a frame addressed to PC3. What will the switch do with the frame?",
      options: [
        "The switch will discard the frame.",
        "The switch will forward the frame only to port 2.",
        "The switch will forward the frame to all ports except port 4.",
        "The switch will forward the frame to all ports.",
        "The switch will forward the frame only to ports 1 and 3."
      ],
      answer: 2,
      explanation: "Trong hình vẽ của câu hỏi này trên hệ thống (lưu ý sơ đồ của Cisco hoặc đề gốc đánh số cổng nhận của PC1/PC4), nguyên tắc chuẩn là khi MAC đích của PC3 chưa có trong bảng MAC (Unknown Unicast), Switch sẽ flood Frame ra TẤT CẢ các cổng ngoại trừ cổng nhận Frame đi vào (trong đáp án của ngân hàng câu hỏi này là 'all ports except port 4' hoặc cổng nguồn tương ứng)."
    },
    {
      id: 622,
      topic: "Đề FE FA25_FE85 (Video)",
      question: "[FA25_FE85 - Q22] What type of network traffic requires QoS?",
      options: [
        "email",
        "on-line purchasing",
        "video conferencing",
        "wiki"
      ],
      answer: 2,
      explanation: "Lưu lượng hội nghị truyền hình thời gian thực (`video conferencing` và VoIP) rất nhạy cảm với độ trễ (latency) và mất gói nên bắt buộc cần cơ chế ưu tiên Chất lượng dịch vụ (`QoS`)."
    },
    {
      id: 623,
      topic: "Đề FE FA25_FE85 (Video)",
      question: "[FA25_FE85 - Q23] Which of the following best describes a 'host' in a network?",
      options: [
        "A network cable that connects devices",
        "A computer that connects directly to a network",
        "A device that controls access to the network",
        "A wireless signal used for communication"
      ],
      answer: 1,
      explanation: "Một `host` (thiết bị đầu cuối) trong mạng là một máy tính hoặc thiết bị kết nối trực tiếp vào mạng để gửi và nhận dữ liệu."
    },
    {
      id: 629,
      topic: "Đề FE FA25_FE85 (Video)",
      question: "[FA25_FE85 - Q29] What is the primary purpose of the ICMP protocol?",
      options: [
        "To route packets across different networks",
        "To provide feedback about issues related to IP packet processing",
        "To encrypt data before transmission",
        "To assign IP addresses to devices"
      ],
      answer: 1,
      explanation: "Mục đích chính của giao thức ICMP là cung cấp thông tin phản hồi và báo lỗi (`provide feedback about issues related to IP packet processing`) khi xử lý gói tin IP."
    },
    {
      id: 630,
      topic: "Đề FE FA25_FE85 (Video)",
      question: "[FA25_FE85 - Q30] A network admin disables ICMP on external-facing routers. Which two consequences may result from this configuration? (Choose two.)",
      options: [
        "Ping to public servers will time out",
        "Traceroute will not show intermediate hops",
        "Hosts cannot ping the default gateway internally",
        "Router advertisements (RA) will be blocked"
      ],
      answer: [0, 1],
      explanation: "Nếu tắt/chặn ICMP trên cổng hướng ra ngoài (external-facing) của Router biên: (1) Lệnh `Ping` ra các máy chủ công cộng ngoài Internet sẽ bị hết thời gian chờ (time out); (2) Lệnh `Traceroute` sẽ không nhận được bản tin ICMP Time Exceeded nên không hiển thị được các chặng trung gian."
    },
    {
      id: 634,
      topic: "Đề FE FA25_FE85 (Video)",
      question: "[FA25_FE85 - Q34] What is the main role of the physical layer?",
      options: [
        "Error checking",
        "Transporting bits across the medium",
        "Routing packets",
        "Formatting messages"
      ],
      answer: 1,
      explanation: "Vai trò chính của tầng Physical (Layer 1) là vận chuyển các bit dữ liệu qua môi trường truyền dẫn vật lý (`Transporting bits across the medium`)."
    },
    {
      id: 635,
      topic: "Đề FE FA25_FE85 (Video)",
      question: "[FA25_FE85 - Q35] What is stored in the NVRAM of a Cisco router?",
      options: [
        "The Cisco IOS",
        "The running configuration",
        "The bootup instructions",
        "The startup configuration"
      ],
      answer: 3,
      explanation: "Bộ nhớ NVRAM của Router Cisco dùng để lưu trữ file cấu hình khởi động (`The startup configuration`). (Cisco IOS lưu trong Flash, Running-config lưu trong RAM, Bootup instructions lưu trong ROM)."
    },
    {
      id: 637,
      topic: "Đề FE FA25_FE85 (Video)",
      question: "[FA25_FE85 - Q37] To secure privileged EXEC mode on a Cisco device, which command is recommended?",
      options: [
        "password cisco",
        "enable password class",
        "service password-encryption",
        "enable secret class"
      ],
      answer: 3,
      explanation: "Để bảo mật chế độ Privileged EXEC trên thiết bị Cisco, lệnh được khuyến nghị là `enable secret class` (vì nó dùng thuật toán băm mạnh thay vì hiển thị plaintext như `enable password`)."
    },
    {
      id: 638,
      topic: "Đề FE FA25_FE85 (Video)",
      question: "[FA25_FE85 - Q38] Which command sets a router's hostname?",
      options: [
        "set hostname",
        "router name",
        "hostname",
        "device name"
      ],
      answer: 2,
      explanation: "Trong chế độ Global Configuration (`Router(config)#`), lệnh dùng để đặt tên cho thiết bị là `hostname [tên-thiết-bị]`."
    },
    {
      id: 639,
      topic: "Đề FE FA25_FE85 (Video)",
      question: "[FA25_FE85 - Q39] Which two statements are correct about public IPv4 addresses? (Choose two.)",
      options: [
        "Public IPv4 addresses are allowed to be assigned to devices within an organization's intranet (internal network).",
        "To access a device over the internet, the destination IPv4 address must be a public address.",
        "192.168.1.10 is a public IPv4 address.",
        "Public IPv4 address exhaustion is a reason why there are private IPv4 addresses and why organizations are transitioning to IPv6."
      ],
      answer: [1, 3],
      explanation: "Hai phát biểu đúng về địa chỉ IPv4 Public là: (B) Để truy cập một thiết bị qua Internet, địa chỉ IPv4 đích phải là địa chỉ Public; và (D) Sự cạn kiệt địa chỉ IPv4 Public là lý do ra đời địa chỉ IPv4 Private (kèm NAT) và việc chuyển đổi sang IPv6."
    },
    {
      id: 642,
      topic: "Đề FE FA25_FE85 (Video)",
      question: "[FA25_FE85 - Q42] What is the loopback address used for in IPv4 networking?",
      options: [
        "To route packets to a different network",
        "To test if the TCP/IP stack is functioning correctly",
        "To identify the default gateway",
        "To assign a dynamic IP address"
      ],
      answer: 1,
      explanation: "Địa chỉ Loopback (`127.0.0.1`) trong mạng IPv4 được dùng để kiểm tra xem ngăn xếp giao thức TCP/IP (`TCP/IP stack`) trên chính máy tính đó có hoạt động bình thường hay không."
    },
    {
      id: 645,
      topic: "Đề FE FA25_FE85 (Video)",
      question: "[FA25_FE85 - Q45] An administrator is configuring a switch console port with a password. In what order will the administrator travel through the IOS modes of operation in order to reach the mode in which the configuration commands will be entered?\nOrder: A. first mode | B. second mode | C. third mode | D. final mode\nModes: 1. interface configuration mode | 2. privileged EXEC mode | 3. line configuration mode | 4. global configuration mode | 5. user EXEC mode",
      options: [
        "A5-B2-C4-D3",
        "A1-B2-C3-D4",
        "A2-B5-C4-D3",
        "A5-B1-C4-D2"
      ],
      answer: 0,
      explanation: "Trình tự đi qua các chế độ IOS để đặt mật khẩu cổng Console: A (first mode) = `5. user EXEC mode` (`Switch>`) -> gõ `enable` vào B (second mode) = `2. privileged EXEC mode` (`Switch#`) -> gõ `configure terminal` vào C (third mode) = `4. global configuration mode` (`Switch(config)#`) -> gõ `line console 0` vào D (final mode) = `3. line configuration mode` (`Switch(config-line)#`). Đáp án: `A5-B2-C4-D3`."
    },
    {
      id: 647,
      topic: "Đề FE FA25_FE85 (Video)",
      question: "[FA25_FE85 - Q47] Which field includes common values such as ICMP (1), TCP (6), and UDP (17)?",
      options: [
        "Header Checksum",
        "Time to live",
        "Protocol",
        "Differentiated Service (DS)"
      ],
      answer: 2,
      explanation: "Trường `Protocol` (8-bit) trong IPv4 Header xác định giao thức tầng trên nhận dữ liệu với các giá trị chuẩn: `1` = ICMP, `6` = TCP, `17` = UDP."
    },
    {
      id: 649,
      topic: "Đề FE FA25_FE85 (Video)",
      question: "[FA25_FE85 - Q49] Which characteristic of IP does not guarantee that the packet will be delivered fully without errors?",
      options: [
        "Connectionless",
        "Best effort",
        "Media independent"
      ],
      answer: 1,
      explanation: "Đặc tính `Best effort` (Nỗ lực tối đa / Không tin cậy) của giao thức IP có nghĩa là IP không cam kết hay đảm bảo gói tin chắc chắn sẽ tới đích nguyên vẹn không có lỗi."
    },
    {
      id: 651,
      topic: "Đề FE FA25_FE85 (Video)",
      question: "[FA25_FE85 - Q51] Which field does ICMPv6 use instead of TTL to determine packet expiry?",
      options: [
        "Time Delay",
        "Packet Count",
        "Hop Limit",
        "Time Stamp"
      ],
      answer: 2,
      explanation: "Trong IPv6 / ICMPv6, trường `Hop Limit` thay thế cho trường `TTL (Time to Live)` của IPv4 để đếm số lượng Router đi qua và xác định khi nào gói tin hết hạn."
    }
  ]
};
