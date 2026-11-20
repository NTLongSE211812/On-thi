window.OSG202_LESSONS = [
  {
    id: "osg_l1",
    num: 1,
    badge: "12% Đề FE (~6 câu)",
    title: "Bài 1: Hệ Điều Hành Là Gì? Dual Mode, TRAP & Kiến Trúc OS",
    subtitle: "Hiểu ngay tại sao CPU phải chia 2 chế độ Kernel/User Mode, cách fork() đẻ tiến trình và Monolithic vs Microkernel.",
    analogy:
      "Hãy tưởng tượng máy tính như một NHÀ HÀNG LỚN:\n" +
      "• Phần cứng (CPU, RAM, Ổ cứng) là BẾP, LÒ NƯỚNG và KHO THỰC PHẨM.\n" +
      "• Chương trình người dùng (Chrome, Game, Word) là KHÁCH NGỒI NGOÀI BÀN (User Mode) — khách KHÔNG ĐƯỢC tự ý chạy thẳng vào bếp lục tủ lạnh (tránh cháy nổ/mất dữ liệu!).\n" +
      "• Hệ điều hành (OS) là ANH PHỤC VỤ + BẾP TRƯỞNG (Kernel Mode): Khách muốn đọc file hay in ấn phải bấm chuông gọi phục vụ — cú bấm chuông đó chính là lệnh TRAP (System Call)!",
    coreRules: [
      "2 Vai trò kinh điển của OS (Tanenbaum Ch.1):\n  • Extended Machine (Top-down): Che giấu phần cứng phức tạp, cho lập trình viên dùng các khái niệm sạch sẽ (File, Process).\n  • Resource Manager (Bottom-up): Chia CPU theo Thời gian (Time Multiplexing) và chia RAM/Đĩa theo Không gian (Space Multiplexing).",
      "Dual Mode (Kernel Mode vs User Mode):\n  • Chuyển từ User Mode → Kernel Mode BẮT BUỘC đi qua lệnh TRAP (System Call).\n  • MMU (Memory Management Unit): Phần cứng dịch địa chỉ Ảo → Vật lý.",
      "System Call POSIX bắt buộc thuộc:\n  • fork() tạo bản sao tiến trình: Trả về 0 cho CON, trả về PID con (> 0) cho CHA, trả về -1 nếu lỗi.\n  • execve() thay thế toàn bộ mã chương trình hiện tại bằng chương trình mới; waitpid() giúp cha chờ con xong.",
      "Monolithic vs Microkernel:\n  • Monolithic (Linux/Windows): Nhanh nhưng 1 lỗi nhỏ ở driver có thể làm sập cả máy (Kernel Panic / Màn hình xanh).\n  • Microkernel (MINIX 3): Đẩy driver & file system ra User Space ⇒ Siêu an toàn & ổn định (high reliability)!"
    ],
    workedExample:
      "📌 Câu hỏi mẫu FE OSG202: Một tiến trình chạy lệnh `pid = fork();` thành công. Sau đó nó kiểm tra `if (pid == 0) printf(\"A\"); else printf(\"B\");`. Tiến trình nào in chữ A và tiến trình nào in chữ B?\n" +
      "• Bước 1: Ngay sau lệnh `fork()`, hệ điều hành nhân đôi thành 2 tiến trình song song: Cha (Parent) và Con (Child).\n" +
      "• Bước 2: Ở tiến trình CON, `fork()` trả về `pid = 0` ⇒ Điều kiện `pid == 0` ĐÚNG ⇒ CON in chữ \"A\".\n" +
      "• Bước 3: Ở tiến trình CHA, `fork()` trả về PID thật của con (một số dương > 0) ⇒ CHA vào nhánh `else` in chữ \"B\".\n" +
      "👉 Mẹo nhớ: \"Con số 0 — Cha số dương\"!",
    traps: [
      "Bẫy 1: Nhầm lẫn Type 1 Hypervisor (chạy trực tiếp trên phần cứng — ESXi, Xen) và Type 2 Hypervisor (chạy như phần mềm trên Windows/macOS — VirtualBox, VMware Workstation).",
      "Bẫy 2: Quyền Linux `chmod`: Nhớ trọng số `r = 4, w = 2, x = 1`. Do đó `rwxr-xr-x` = (4+2+1)(4+0+1)(4+0+1) = `755`, còn `rw-r--r--` = `644`!"
    ],
    miniQuiz: [
      {
        q: "Cơ chế phần cứng/lệnh nào cho phép tiến trình ở User Mode chuyển sang Kernel Mode để yêu cầu dịch vụ của Hệ điều hành?",
        opts: ["Direct Jump", "TRAP instruction (System Call)", "MMU Translation", "DMA Controller"],
        ans: 1,
        exp: "Muốn nhờ OS thực hiện tác vụ đặc quyền, chương trình User Mode bắt buộc phải gọi lệnh TRAP (System Call)!"
      },
      {
        q: "Hệ điều hành chia sẻ 1 CPU cho nhiều tiến trình chạy luân phiên từng lát cắt thời gian gọi là gì?",
        opts: ["Space multiplexing", "Time multiplexing", "Spooling", "Virtualization"],
        ans: 1,
        exp: "Chia sẻ tài nguyên lần lượt theo lát cắt thời gian (CPU, máy in) là Time Multiplexing; còn chia vùng nhớ RAM/Đĩa là Space Multiplexing!"
      }
    ]
  },
  {
    id: "osg_l2",
    num: 2,
    badge: "24% Đề FE (~12 câu — Siêu Trọng Tâm!)",
    title: "Bài 2: Tiến Trình (Process), Luồng (Thread), IPC & Lập Lịch CPU",
    subtitle: "Cách vẽ Sơ đồ Gantt tính FCFS, SJF, SRTN, Round Robin trong 30 giây và công thức CPU Utilization = 1 - pⁿ.",
    analogy:
      "• Process giống như 1 CĂN BẾP RIÊNG (có kho đồ ăn RAM riêng, danh sách file mở riêng).\n" +
      "• Threads trong cùng 1 Process giống như NHIỀU ĐẦU BẾP CÙNG LÀM TRONG 1 CĂN BẾP ĐÓ: Họ dùng chung tủ lạnh & nguyên liệu (Heap, Global Variables, Open Files), nhưng mỗi đầu bếp có ĐÔI TAY (Registers), SỔ GHI NHỚ (Stack) và BƯỚC ĐANG LÀM DỞ (Program Counter) riêng!\n" +
      "• Race Condition: 2 đầu bếp cùng thò tay múc chung 1 tô nước dùng mà không xếp hàng (Mutual Exclusion) ⇒ đổ tung tóe sai dữ liệu!",
    coreRules: [
      "3 Trạng thái Tiến trình (Bẫy cực hay hỏi!):\n  • Hợp lệ: Running → Blocked (chờ I/O) | Blocked → Ready (I/O xong) | Running ↔ Ready (Scheduler).\n  • CẤM TUYỆT ĐỐI: KHÔNG có Blocked → Running và KHÔNG có Ready → Blocked!",
      "Công thức Độ sử dụng CPU đa chương (Xuất hiện gần như mọi kỳ FE!):\n  • Có n tiến trình trong RAM, mỗi tiến trình dành tỉ lệ p thời gian chờ I/O:\n  👉 CPU Utilization = 1 - pⁿ   (VD: n = 4, p = 0.5 ⇒ 1 - 0.5⁴ = 93.75%!).",
      "Công thức Lập lịch CPU (FCFS, SJF, SRTN, Round Robin):\n  • Turnaround Time (TAT) = Completion Time - Arrival Time\n  • Waiting Time (WT) = TAT - Burst Time\n  • SJF luôn cho Average Waiting Time NHỎ NHẤT (tối ưu khi các tiến trình đến cùng lúc).\n  • Real-time Schedulability: Lập lịch được khi ∑ (Cᵢ / Pᵢ) ≤ 1.",
      "User-Level Threads vs Kernel-Level Threads:\n  • User-level: Chuyển cực nhanh (không qua kernel), nhưng 1 thread gọi blocking I/O sẽ làm ĐỨNG HÌNH CẢ PROCESS!\n  • Kernel-level: Chậm hơn nhưng 1 thread block không ảnh hưởng thread khác & chạy song song đa lõi thật sự."
    ],
    workedExample:
      "📌 Câu tính toán FE chuẩn: 3 tiến trình đến cùng lúc t = 0: P1 (Burst=10), P2 (Burst=5), P3 (Burst=8). Tính thời điểm hoàn thành của P2 với Round Robin (quantum q = 4)?\n" +
      "• Vòng 1 (mỗi tiến trình chạy tối đa 4 đơn vị):\n" +
      "  - [0 → 4]: P1 chạy 4 (còn 6)\n" +
      "  - [4 → 8]: P2 chạy 4 (còn 1)\n" +
      "  - [8 → 12]: P3 chạy 4 (còn 4)\n" +
      "• Vòng 2:\n" +
      "  - [12 → 16]: P1 chạy 4 (còn 2)\n" +
      "  - [16 → 17]: P2 chạy nốt 1 đơn vị còn lại → XONG lúc t = 17!\n" +
      "👉 Completion Time của P2 = 17 (Turnaround Time = 17 - 0 = 17; Waiting Time = 17 - 5 = 12)!",
    traps: [
      "Bẫy 1: Quên trừ Arrival Time khi tính Turnaround Time! Luôn nhớ TAT = Finish - Arrival (chỉ khi mọi tiến trình đến lúc t = 0 thì TAT mới bằng Finish).",
      "Bẫy 2: Trong Round Robin, nếu Quantum q QUÁ LỚN → biến thành FCFS; nếu Quantum q QUÁ NHỎ → tốn quá nhiều chi phí Context Switch!",
      "Bẫy 3: Strict Alternation (luân phiên turn = 0 / turn = 1) KHÔNG giải quyết đúng bài toán Critical Region vì vi phạm điều kiện 3 (tiến trình ngoài vùng găng chặn tiến trình khác)."
    ],
    miniQuiz: [
      {
        q: "Hệ thống có 3 tiến trình trong RAM, mỗi tiến trình chờ I/O 80% thời gian (p = 0.8). Độ sử dụng CPU là bao nhiêu?",
        opts: ["20.0%", "48.8%", "51.2%", "80.0%"],
        ans: 1,
        exp: "CPU Utilization = 1 - pⁿ = 1 - 0.8³ = 1 - 0.512 = 0.488 = 48.8%!"
      },
      {
        q: "Chuyển đổi trạng thái nào sau đây KHÔNG BAO GIỜ xảy ra trong mô hình 3 trạng thái tiến trình?",
        opts: ["Running → Blocked", "Blocked → Ready", "Blocked → Running", "Running → Ready"],
        ans: 2,
        exp: "Tiến trình từ Blocked khi xong I/O bắt buộc phải quay về hàng đợi Ready trước, không thể nhảy thẳng lên Running!"
      }
    ]
  },
  {
    id: "osg_l3",
    num: 3,
    badge: "24% Đề FE (~12 câu — Siêu Trọng Tâm!)",
    title: "Bài 3: Quản Lý Bộ Nhớ, Phân Trang (Paging), TLB & Thay Thế Trang",
    subtitle: "Làm chủ 100% dạng bài Dịch địa chỉ Ảo → Vật lý, tính EAT có TLB, và đếm Page Faults (FIFO, LRU, Optimal, NRU).",
    analogy:
      "Phân trang (Paging) giống như bạn CẮT MỘT CUỐN SÁCH 100 TRANG ra thành từng tờ rời (Pages) rồi nhét rải rác vào các ngăn tủ trống bất kỳ (Page Frames) trong thư viện!\n" +
      "• Để không bị thất lạc, bạn ghi lại 1 Tờ Mục Lục (Page Table): \"Trang 0 nằm ở Ngăn 5, Trang 1 nằm ở Ngăn 2, Trang 2 nằm ở Ngăn 6...\".\n" +
      "• TLB chính là TỜ GIẤY NHÁP DÁN TRƯỚC MẶT ghi 5-10 trang bạn vừa mở gần nhất để khỏi phải chạy vào thư viện tra Tờ Mục Lục!",
    coreRules: [
      "3 Bước Dịch Địa Chỉ Ảo (Virtual Address) → Địa Chỉ Vật Lý (Physical Address):\n  • Bước 1: Tính Page Number = ⌊Virtual Address / Page Size⌋  và  Offset = Virtual Address mod Page Size.\n  • Bước 2: Tra Page Table xem Page Number ánh xạ sang Frame Number nào.\n  • Bước 3: Physical Address = Frame Number × Page Size + Offset  (Chú ý: OFFSET KHÔNG BAO GIỜ ĐỔI!).",
      "Công thức Effective Access Time (EAT) với TLB (Chắc chắn ra thi!):\n  👉 EAT = α · (t_TLB + t_MEM) + (1 - α) · (t_TLB + 2 · t_MEM)\n  (Trúng TLB tốn 1 lần đọc RAM; trượt TLB tốn 2 lần đọc RAM: 1 lần đọc Page Table + 1 lần đọc dữ liệu!).",
      "Bảng nhớ nhanh 4 Thuật toán Thay Thế Trang (Page Replacement):\n  • Optimal: Đuổi trang sẽ LÂU ĐƯỢC DÙNG LẠI NHẤT trong tương lai (tốt nhất lý thuyết).\n  • LRU (Least Recently Used): Đuổi trang LÂU NHẤT CHƯA ĐƯỢC CHẠM TỚI trong quá khứ.\n  • FIFO: Đuổi trang VÀO RAM SỚM NHẤT (bị Nghịch lý Belady: tăng số frame lại tăng số page fault!).\n  • NRU (bit R & M): Đuổi từ thấp lên cao: Class 0 (R=0,M=0) → Class 1 (R=0,M=1) → Class 2 (R=1,M=0) → Class 3 (R=1,M=1).",
      "Phân mảnh Nội vs Phân mảnh Ngoại:\n  • Paging (Phân trang): Chỉ có Phân mảnh NỘI (Internal fragmentation).\n  • Pure Segmentation (Phân đoạn): Có Phân mảnh NGOÀI (External fragmentation)."
    ],
    workedExample:
      "📌 Đề mẫu FE OSG202: Hệ thống có Page Size = 4 KB (4096 B). Bảng trang ghi Virtual Page 2 → Physical Frame 6. Hãy dịch địa chỉ ảo 8196 sang địa chỉ vật lý!\n" +
      "• Bước 1: Chia 8196 cho 4096:\n" +
      "  - 8196 = 2 × 4096 + 4  ⇒  Page Number = 2, và Offset = 4.\n" +
      "• Bước 2: Tra bảng trang: Page 2 nằm ở Frame 6.\n" +
      "• Bước 3: Ghép Frame 6 với Offset 4:\n" +
      "  - Physical Address = 6 × 4096 + 4 = 24576 + 4 = 24580!\n" +
      "👉 Bạn có thể thử ngay bằng Máy tính 2 trong tab '🧮 Máy tính OSG202'!",
    traps: [
      "Bẫy 1 (TLB EAT): Khi tính TLB Miss, nhiều bạn quên mất vẫn phải cộng thời gian tra TLB (`t_TLB`) vì phải tra TLB trượt rồi mới biết là Miss! Nhớ công thức đầy đủ: `(1 - α)(t_TLB + 2·t_MEM)`.",
      "Bẫy 2 (Best Fit vs First Fit): Nghe tên 'Best Fit' tưởng là tốt nhất, nhưng trong thực tế First Fit lại NHANH HƠN và TỐT HƠN vì Best Fit tạo ra hàng đống lỗ trống nhỏ li ti không xài được!",
      "Bẫy 3 (Aging): Trong thuật toán Aging, bộ đếm được DỊCH PHẢI 1 bit (chia đôi) rồi cộng bit R vào BIT TRÁI NHẤT (không phải bit phải nhất!)."
    ],
    miniQuiz: [
      {
        q: "Hệ thống có TLB access time = 20 ns, RAM access time = 100 ns, TLB hit ratio = 80%. Thời gian truy cập hiệu dụng (EAT) là bao nhiêu?",
        opts: ["120 ns", "140 ns", "160 ns", "200 ns"],
        ans: 1,
        exp: "EAT = 0.8 × (20 + 100) + 0.2 × (20 + 200) = 0.8 × 120 + 0.2 × 220 = 96 + 44 = 140 ns!"
      },
      {
        q: "Trong thuật toán thay thế trang NRU, lớp trang nào sẽ bị chọn đuổi ra khỏi RAM ĐẦU TIÊN?",
        opts: ["R = 1, M = 1", "R = 1, M = 0", "R = 0, M = 1", "R = 0, M = 0"],
        ans: 3,
        exp: "Class 0 (R = 0, M = 0: chưa được đọc gần đây và chưa bị sửa nên không cần ghi ra đĩa) luôn bị đuổi đầu tiên!"
      }
    ]
  },
  {
    id: "osg_l4",
    num: 4,
    badge: "16% Đề FE (~8 câu)",
    title: "Bài 4: Hệ Thống Tập Tin (File Systems), I-Node, FAT & Links",
    subtitle: "So sánh 4 cách cấp phát đĩa, công thức tính Max File Size của I-node và phân biệt Hard Link vs Symbolic Link.",
    analogy:
      "• Hard Link giống như 1 NGÔI NHÀ có 2 cánh cửa (2 địa chỉ đường khác nhau) cùng dẫn thẳng vào 1 căn phòng (cùng 1 số i-node). Nếu bịt 1 cửa (xóa file gốc), bạn vẫn đi qua cửa kia vào nhà bình thường!\n" +
      "• Symbolic Link (Soft Link / Shortcut) giống như 1 TỜ GIẤY GHI ĐỊA CHỈ dán trên bàn. Nếu ngôi nhà kia bị đập bỏ (xóa file gốc), tờ giấy ghi địa chỉ vẫn còn nhưng đi tới nơi thì... trống không (broken link)!",
    coreRules: [
      "So sánh 4 cách cấp phát file (File Allocation):\n  • Contiguous (Liên tục): Đọc nhanh nhất nhưng phân mảnh ngoài nặng → hợp cho CD-ROM/DVD.\n  • Linked List: Không phân mảnh ngoài nhưng đọc ngẫu nhiên cực chậm.\n  • FAT: Đưa bảng con trỏ lên RAM → đọc ngẫu nhiên nhanh nhưng tốn rất nhiều RAM cho đĩa lớn.\n  • I-nodes (UNIX/Linux): Chỉ nạp i-node của các file ĐANG MỞ vào RAM → siêu tiết kiệm RAM & hỗ trợ file cực lớn!",
      "Công thức tính Max File Size của I-node (Hay ra bài tính!):\n  • Số con trỏ chứa được trong 1 block: K = (Block Size) / (Pointer Size)\n  • Tổng số block tối đa = Direct + K (Single) + K² (Double) + K³ (Triple)\n  • Dung lượng tối đa = (Tổng số block) × (Block Size).",
      "Tính dung lượng Bitmap quản lý Block trống:\n  • Tổng số block = (Dung lượng đĩa) / (Block Size)\n  • Dung lượng Bitmap (bytes) = (Tổng số block) / 8   (vì 1 byte = 8 bits, mỗi block dùng 1 bit!).",
      "Block Size Trade-off & Journaling:\n  • Block LỚN → tốc độ đọc nhanh (Performance ↑) nhưng phân mảnh nội lớn (Space efficiency ↓).\n  • Journaling (ext4, NTFS) ghi log trước khi sửa đĩa giúp hồi phục cực nhanh sau khi mất điện."
    ],
    workedExample:
      "📌 Đề mẫu FE OSG202: Đĩa 16 GB dùng kích thước block 4 KB. Hỏi bảng Bitmap quản lý block trống tốn bao nhiêu dung lượng?\n" +
      "• Bước 1: Đổi sang lũy thừa của 2 cho cực dễ chia:\n" +
      "  - 16 GB = 2⁴ × 2³⁰ = 2³⁴ bytes.\n" +
      "  - 4 KB = 2² × 2¹⁰ = 2¹² bytes.\n" +
      "• Bước 2: Tổng số block = 2³⁴ / 2¹² = 2²² blocks.\n" +
      "• Bước 3: Mỗi block cần 1 bit, đổi sang bytes chia cho 8 (tức 2³):\n" +
      "  - Dung lượng Bitmap = 2²² / 2³ = 2¹⁹ bytes = 2⁹ × 2¹⁰ bytes = 512 KB!\n" +
      "👉 Mẹo vàng: Luôn đổi KB = 2¹⁰, MB = 2²⁰, GB = 2³⁰ để trừ số mũ trong 5 giây!",
    traps: [
      "Bẫy 1: Nhầm lẫn giữa bits và bytes khi tính Bitmap! Tổng số block là số BITS, bắt buộc phải chia cho 8 để ra BYTES!",
      "Bẫy 2: Quên cộng số Direct blocks khi tính I-node Max File Size (VD: 10 direct + 1024 single indirect = 1034 blocks, chứ không phải 1024 blocks!)."
    ],
    miniQuiz: [
      {
        q: "Trong hệ thống UNIX/Linux, loại liên kết (link) nào có thể trỏ tới một file nằm trên một phân vùng đĩa (partition) KHÁC?",
        opts: ["Hard Link", "Symbolic (Soft) Link", "Cả hai loại đều được", "Không loại nào làm được"],
        ans: 1,
        exp: "Chỉ Symbolic Link (chứa đường dẫn text path) mới trỏ xuyên nhiều phân vùng đĩa hoặc ổ mạng khác nhau được; Hard Link chỉ dùng được trong cùng 1 phân vùng!"
      },
      {
        q: "Block size = 4 KB, mỗi địa chỉ block tốn 4 bytes. Một Single Indirect Block trỏ được tới tối đa bao nhiêu data blocks?",
        opts: ["256 blocks", "512 blocks", "1024 blocks", "4096 blocks"],
        ans: 2,
        exp: "Số con trỏ K = 4096 bytes / 4 bytes = 1024 con trỏ ⇒ trỏ được 1024 data blocks!"
      }
    ]
  },
  {
    id: "osg_l5",
    num: 5,
    badge: "12% Đề FE (~6 câu)",
    title: "Bài 5: Input/Output, DMA, Lập Lịch Đầu Đọc Đĩa & RAID",
    subtitle: "Hiểu cơ chế DMA giải phóng CPU, cách tính tổng quãng đường đầu đọc đĩa (SSTF / Elevator) và phân biệt RAID 0–6.",
    analogy:
      "• Programmed I/O giống như bạn đứng canh ấm nước sôi từng giây không làm được việc gì khác.\n" +
      "• Interrupt-Driven I/O giống như bạn cài ấm siêu tốc: mỗi khi sôi 1 cốc nước thì ấm kêu 'tít', bạn chạy ra rót rồi quay lại làm việc.\n" +
      "• DMA (Direct Memory Access) giống như bạn thuê hẳn 1 trợ lý tự đun và rót đủ cả 100 cốc nước vào bình (RAM), xong xuôi hết cả 100 cốc mới gõ cửa báo bạn ĐÚNG 1 LẦN!\n" +
      "• Thuật toán Elevator (SCAN) của đĩa cứng hoạt động Y HỆT THANG MÁY TÒA NHÀ: Đang đi lên thì đón hết khách các tầng trên cùng chiều rồi mới quay đầu đi xuống!",
    coreRules: [
      "4 Tầng Phần mềm I/O (từ phần cứng lên người dùng — hay hỏi thứ tự!):\n  1. Interrupt Handlers → 2. Device Drivers → 3. Device-Independent I/O → 4. User-Space I/O.",
      "Thuật toán Lập lịch Đầu đọc Đĩa (Disk Arm Scheduling):\n  • FCFS: Đi theo đúng thứ tự danh sách yêu cầu (quãng đường rất dài).\n  • SSF / SSTF: Luôn chọn cylinder gần vị trí hiện tại nhất (quãng đường ngắn, nhưng dễ bỏ đói cylinder ở rìa).\n  • Elevator (SCAN / LOOK): Quét hết 1 chiều (lên hoặc xuống) rồi mới đổi chiều — công bằng & hiệu quả!",
      "Bảng so sánh nhanh các mức RAID:\n  • RAID 0 (Striping): Nhanh nhất, KHÔNG chịu lỗi (hỏng 1 ổ = mất hết).\n  • RAID 1 (Mirroring): Nhân đôi dữ liệu, chịu hỏng 1 ổ, tốn 50% dung lượng.\n  • RAID 4: 1 ổ Parity cố định → nghẽn cổ chai khi ghi.\n  • RAID 5: Phân tán Parity đều trên mọi ổ (≥ 3 ổ) → chịu hỏng 1 ổ, phổ biến nhất!\n  • RAID 6: 2 khối Parity (≥ 4 ổ) → chịu hỏng đồng thời 2 ổ!"
    ],
    workedExample:
      "📌 Ví dụ kinh điển Tanenbaum (Đề FE rất hay ra nguyên số này!): Đầu đọc đang ở Cylinder 11, đang đi LÊN (Upward). Hàng đợi yêu cầu: [1, 36, 16, 34, 9, 12]. Tính tổng quãng đường theo Elevator (LOOK/SCAN):\n" +
      "• Chiều LÊN (các số ≥ 11 theo thứ tự tăng dần): 11 → 12 → 16 → 34 → 36.\n" +
      "  👉 Quãng đường lượt lên = 36 - 11 = 25 cylinders (không cần cộng lẻ từng chặng!).\n" +
      "• Hết yêu cầu phía trên, quay đầu đi XUỐNG (các số < 11 giảm dần): 36 → 9 → 1.\n" +
      "  👉 Quãng đường lượt xuống = 36 - 1 = 35 cylinders.\n" +
      "• Tổng quãng đường = 25 + 35 = 60 cylinders! (Cộng cực nhanh trong 5 giây!).",
    traps: [
      "Bẫy 1: Quên mất trong 3 thành phần truy cập đĩa cứng HDD (Seek time, Rotational delay, Transfer time), SEEK TIME luôn là lớn nhất!",
      "Bẫy 2: Nhầm RAID 4 và RAID 5: RAID 4 có 1 ổ Parity RIÊNG cố định (gây bottleneck), còn RAID 5 PHÂN TÁN Parity đều ra tất cả các ổ!"
    ],
    miniQuiz: [
      {
        q: "Cơ chế I/O nào cho phép thiết bị truyền thẳng cả một khối dữ liệu vào RAM mà không cần CPU chép từng byte?",
        opts: ["Programmed I/O", "Polling", "DMA (Direct Memory Access)", "Busy Waiting"],
        ans: 2,
        exp: "DMA (Direct Memory Access) dùng bộ điều khiển DMA chuyển thẳng cả khối dữ liệu vào RAM và chỉ ngắt CPU đúng 1 lần khi hoàn tất!"
      },
      {
        q: "Mức RAID nào có khả năng chịu được việc hỏng ĐỒNG THỜI 2 ổ đĩa bất kỳ?",
        opts: ["RAID 0", "RAID 1", "RAID 5", "RAID 6"],
        ans: 3,
        exp: "RAID 6 sử dụng 2 khối parity độc lập nên chịu được hỏng đồng thời 2 ổ đĩa (RAID 5 chỉ chịu được 1 ổ)."
      }
    ]
  },
  {
    id: "osg_l6",
    num: 6,
    badge: "12% Đề FE (~6 câu — Cực Dễ Ăn Trọn Điểm!)",
    title: "Bài 6: Deadlocks, 4 Điều Kiện Coffman & Thuật Toán Banker",
    subtitle: "Thuộc lòng 4 điều kiện Coffman, chạy Thuật toán Banker tìm Safe Sequence và công thức R_min tránh Deadlock.",
    analogy:
      "Hãy tưởng tượng 2 người ngồi ăn phở nhưng trên bàn chỉ có 1 chiếc đũa trái và 1 chiếc đũa phải:\n" +
      "• Anh A nhanh tay cầm đũa trái và chờ anh B nhả đũa phải.\n" +
      "• Anh B lại cầm đũa phải và chờ anh A nhả đũa trái.\n" +
      "• Cả hai nhất quyết KHÔNG chịu nhả chiếc mình đang cầm (Hold & Wait + No Preemption) ⇒ Cả hai ngồi nhìn nhau tới chết đói — đó chính là DEADLOCK!\n" +
      "• Thuật toán Banker giống như ÔNG CHỦ NGÂN HÀNG thận trọng: Trước khi cho khách vay thêm tiền, ông tính thử xem nếu cho vay xong thì còn đủ tiền cứu lần lượt từng khách về đích không (Safe State)!",
    coreRules: [
      "4 Điều kiện Coffman (PHẢI XẢY RA CẢ 4 CÙNG LÚC mới có Deadlock):\n  1. Mutual Exclusion (Loại trừ tương hỗ)\n  2. Hold and Wait (Giữ tài nguyên này và chờ tài nguyên khác)\n  3. No Preemption (Không thể cưỡng ép thu hồi tài nguyên)\n  4. Circular Wait (Chờ đợi vòng tròn — Phá dễ nhất bằng cách ĐÁNH SỐ THỨ TỰ tài nguyên và chỉ xin theo thứ tự TĂNG DẦN!).",
      "Cách chạy Thuật toán Banker trong 3 bước:\n  • Bước 1: Tính ma trận Need[i] = Max[i] - Allocation[i] cho mọi tiến trình.\n  • Bước 2: Tìm một tiến trình P_i chưa xong mà có Need[i] ≤ Available.\n  • Bước 3: Cho P_i chạy xong và thu hồi toàn bộ tài nguyên nó đang giữ: Available = Available + Allocation[i]. Lặp lại tới khi chạy hết mọi tiến trình ⇒ SAFE STATE!",
      "Công thức Vàng tính số tài nguyên TỐI THIỂU để ĐẢM BẢO không bao giờ Deadlock:\n  👉 R_min = ∑ (Max_i - 1) + 1\n  (Ví dụ: 3 tiến trình, mỗi tiến trình cần tối đa 4 máy in ⇒ R_min = 3 × (4 - 1) + 1 = 10 máy in!).",
      "Ostrich Algorithm (Đà điểu): Linux, Windows, macOS đều chọn cách LỜ ĐI không phòng tránh deadlock hoàn toàn vì chi phí quá đắt!"
    ],
    workedExample:
      "📌 Đề mẫu FE OSG202 (Banker's Algorithm): Hệ thống có 10 tài nguyên. Hiện tại Available = 3. Các tiến trình có (Alloc / Max): A(3/9), B(2/4), C(2/7). Kiểm tra Safe State?\n" +
      "• Bước 1: Tính Need = Max - Alloc:\n" +
      "  - Need(A) = 9 - 3 = 6 | Need(B) = 4 - 2 = 2 | Need(C) = 7 - 2 = 5.\n" +
      "• Bước 2: Đang có Available = 3:\n" +
      "  - Chỉ có B có Need(B) = 2 ≤ 3 ⇒ Chạy B! Sau khi B xong, Available = 3 + Alloc(B) = 3 + 2 = 5.\n" +
      "• Bước 3: Đang có Available = 5:\n" +
      "  - Có C có Need(C) = 5 ≤ 5 ⇒ Chạy C! Sau khi C xong, Available = 5 + Alloc(C) = 5 + 2 = 7.\n" +
      "• Bước 4: Đang có Available = 7:\n" +
      "  - Có A có Need(A) = 6 ≤ 7 ⇒ Chạy A! Xong tất cả!\n" +
      "👉 Trạng thái AN TOÀN (SAFE) với Safe Sequence: <B, C, A>!",
    traps: [
      "Bẫy 1 (Cực hay sai!): Trạng thái UNSAFE KHÔNG có nghĩa là hệ thống ĐÃ bị Deadlock! Nó chỉ có nghĩa là OS không còn đảm bảo tránh được Deadlock nếu các tiến trình đòi đủ mức Max.",
      "Bẫy 2 (Resource Allocation Graph): Chu trình (Cycle) CHỈ là điều kiện cần và đủ cho Deadlock khi mỗi loại tài nguyên có ĐÚNG 1 thực thể (single instance). Nếu có nhiều thực thể (multiple instances), có chu trình CHƯA chắc đã deadlock!"
    ],
    miniQuiz: [
      {
        q: "Có 4 tiến trình, mỗi tiến trình cần tối đa 3 đơn vị tài nguyên R để hoàn thành. Cần ít nhất bao nhiêu đơn vị R để ĐẢM BẢO không bao giờ xảy ra Deadlock?",
        opts: ["8", "9", "10", "12"],
        ans: 1,
        exp: "Áp dụng công thức R_min = ∑ (Max_i - 1) + 1 = 4 × (3 - 1) + 1 = 8 + 1 = 9 đơn vị!"
      },
      {
        q: "Đánh số thứ tự toàn cục cho tất cả các tài nguyên và bắt buộc tiến trình chỉ yêu cầu theo thứ tự tăng dần nhằm phá vỡ điều kiện Coffman nào?",
        opts: ["Mutual Exclusion", "Hold and Wait", "No Preemption", "Circular Wait"],
        ans: 3,
        exp: "Quy định chỉ xin tài nguyên theo thứ tự tăng dần khiến không bao giờ tạo thành vòng tròn khép kín (phá vỡ Circular Wait)!"
      }
    ]
  }
];
