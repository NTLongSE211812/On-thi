window.OSG202_DATA = {
  feAnalysis: {
    totalAnalyzed: 70,
    difficultySummary:
      "Đề thi FE môn OSG202 (Operating Systems — 50 câu / 60 phút, chuẩn giáo trình Modern Operating Systems - Andrew S. Tanenbaum 4th Ed.) tại FPT University gồm ~60% lý thuyết trọng tâm (Processes, Threads, IPC, Virtual Memory, File Systems, I/O, Deadlocks) và ~40% bài tập tính toán kinh điển (Lập lịch CPU, Dịch địa chỉ Paging & TLB EAT, Đếm Page Faults FIFO/LRU/Optimal, Cấp phát bộ nhớ First/Best/Worst Fit, Lập lịch đĩa cứng SSTF/SCAN, Banker's Algorithm và kích thước file I-node).",
    distribution: [
      {
        topic: "1. Chương 1: Introduction & OS Concepts (~12% — 6 câu)",
        weight: "12% (~6 câu)",
        keyPoints: [
          "2 vai trò cốt lõi của Hệ điều hành (OS): (1) Extended Machine (Máy ảo mở rộng — ẩn đi phần cứng phức tạp) và (2) Resource Manager (Quản lý tài nguyên CPU, RAM, I/O bằng Time & Space Multiplexing).",
          "Dual-Mode Operation: Kernel Mode (chế độ đặc quyền chạy lệnh I/O, đổi thanh ghi phần cứng) vs User Mode. Chuyển từ User Mode → Kernel Mode thông qua lệnh TRAP (System Call).",
          "Kiến trúc OS: Monolithic (Linux/Unix — nhanh nhưng khó bảo trì), Layered (THE), Microkernel (MINIX 3 — an toàn, chạy driver ở User Space), Client-Server, Virtual Machines (Type 1 vs Type 2 Hypervisor), Exokernels.",
          "System Calls POSIX bắt buộc nhớ: fork() (tạo tiến trình con trả về 0 cho con và PID con cho cha), execve() (nạp chương trình mới), waitpid() (chờ con kết thúc), open/read/write/close, chmod, mount, kill."
        ]
      },
      {
        topic: "2. Chương 2: Processes, Threads, IPC & CPU Scheduling (~24% — 12 câu — Siêu Trọng Tâm!)",
        weight: "24% (~12 câu)",
        keyPoints: [
          "3 trạng thái tiến trình: Running → Blocked (chờ I/O), Running → Ready (hết quantum/bị ngắt), Ready → Running (scheduler chọn), Blocked → Ready (I/O xong). KHÔNG BAO GIỜ có chuyển thẳng Blocked → Running hay Ready → Blocked!",
          "User-Level Threads (nhanh, chuyển ngữ cảnh không cần kernel, nhưng 1 thread gọi blocking syscall sẽ khóa cả tiến trình) vs Kernel-Level Threads (chậm hơn nhưng không bị khóa chéo, chạy song song đa nhân thật sự).",
          "Điều kiện giải bài toán Critical Region (4 điều kiện): Mutual Exclusion, Không giả định tốc độ/số CPU, Không tiến trình ngoài vùng găng được chặn tiến trình khác, Không chờ vô hạn (No Starvation).",
          "Thuật toán Lập lịch CPU (Cực hay tính toán!): Non-preemptive (FCFS, SJF) vs Preemptive (SRTN, Round Robin). Nhớ: TAT = Finish - Arrival; Waiting Time = TAT - Burst. SJF cho thời gian chờ trung bình NHỎ NHẤT (tối ưu khi biết trước Burst Time). Real-time: Rate Monotonic (tĩnh) vs EDF (động)."
        ]
      },
      {
        topic: "3. Chương 3: Memory Management & Virtual Memory (~24% — 12 câu — Siêu Trọng Tâm!)",
        weight: "24% (~12 câu)",
        keyPoints: [
          "Cấp phát liên tục (Free-list): First Fit (nhanh, lấy lỗ trống đầu tiên đủ lớn), Next Fit (tìm tiếp từ vị trí vừa cấp), Best Fit (chọn lỗ nhỏ nhất đủ lớn — gây nhiều mảnh vụn nhỏ!), Worst Fit (chọn lỗ lớn nhất).",
          "Phân trang (Paging): Virtual Address = [Page Number (p) | Offset (d)]. Nếu Page Size = 2^k bytes thì k bit thấp là Offset, phần còn lại là Page Number. Khi dịch sang Physical Address: thay Page Number bằng Frame Number (tra trong Page Table), GIỮ NGUYÊN Offset!",
          "TLB & Thời gian truy cập hiệu dụng (EAT): Nếu tỉ lệ trúng TLB là α, thời gian tra TLB là t_TLB và truy cập RAM là t_mem ⇒ EAT = α·(t_TLB + t_mem) + (1 - α)·(t_TLB + 2·t_mem).",
          "Thay thế trang (Page Replacement): Optimal (thay trang lâu dùng lại nhất trong tương lai), FIFO (dính Nghịch lý Belady — tăng frame lại tăng page faults!), Second Chance / Clock (xét bit R), LRU (thay trang lâu chưa dùng nhất), NRU (4 lớp theo bit R & M: Lớp 0 [0,0] → Lớp 1 [0,1] → Lớp 2 [1,0] → Lớp 3 [1,1]), Working Set & WSClock."
        ]
      },
      {
        topic: "4. Chương 4: File Systems (~16% — 8 câu)",
        weight: "16% (~8 câu)",
        keyPoints: [
          "4 cách cấp phát Block trên đĩa: Contiguous (đọc nhanh nhưng phân mảnh ngoài), Linked List (không phân mảnh ngoài nhưng truy cập ngẫu nhiên chậm), FAT (đưa bảng liên kết lên RAM), và I-nodes (UNIX/Linux — chỉ nạp i-node của file đang mở vào RAM).",
          "Công thức tính Dung lượng file tối đa của I-node: Nếu 1 block = B bytes, mỗi con trỏ = P bytes ⇒ mỗi indirect block chứa K = B/P con trỏ. Max blocks = Direct + K (Single) + K² (Double) + K³ (Triple).",
          "Hard Link (cùng số i-node, tăng link counter, chỉ trong cùng 1 phân vùng đĩa, xóa file gốc vẫn đọc được) vs Symbolic/Soft Link (là 1 file nhỏ chứa đường dẫn path, trỏ qua nhiều phân vùng khác nhau, xóa file gốc sẽ thành link hỏng).",
          "Kích thước Block (Block Size Trade-off): Block lớn → tốc độ đọc nhanh (data rate cao) nhưng lãng phí dung lượng đĩa do phân mảnh nội (internal fragmentation). Block nhỏ → tiết kiệm đĩa nhưng đọc chậm."
        ]
      },
      {
        topic: "5. Chương 5: Input/Output, Disk Scheduling & RAID (~12% — 6 câu)",
        weight: "12% (~6 câu)",
        keyPoints: [
          "3 cơ chế I/O: Programmed I/O (CPU polling liên tục → lãng phí CPU), Interrupt-Driven I/O (thiết bị ngắt CPU mỗi khi xong 1 byte/word), và DMA (Direct Memory Access — chip DMA truyền cả khối dữ liệu thẳng vào RAM rồi mới ngắt CPU 1 lần).",
          "4 tầng phần mềm I/O (từ dưới lên): Interrupt Handlers → Device Drivers → Device-Independent I/O Software → User-Space I/O Software.",
          "Lập lịch đầu đọc đĩa (Disk Arm Scheduling): FCFS (theo thứ tự đến), SSF/SSTF (Shortest Seek First — chọn cylinder gần đầu đọc nhất, có thể gây đói tài nguyên ở rìa), Elevator/SCAN (quét lên xuống như thang máy), C-SCAN.",
          "Các mức RAID hay hỏi: RAID 0 (Striping — nhanh, KHÔNG chịu lỗi), RAID 1 (Mirroring — nhân đôi ổ, tốn 50% dung lượng), RAID 4 (Dedicated parity drive — nghẽn cổ chai ở ổ parity), RAID 5 (Distributed parity — phân tán parity đều các ổ, chịu hỏng 1 ổ), RAID 6 (Dual parity — chịu hỏng 2 ổ)."
        ]
      },
      {
        topic: "6. Chương 6: Deadlocks & Banker's Algorithm (~12% — 6 câu — Cực Dễ Ăn Điểm!)",
        weight: "12% (~6 câu)",
        keyPoints: [
          "4 điều kiện cần và đủ của Coffman để xảy ra Deadlock (PHẢI THUỘC LÒNG!): (1) Mutual Exclusion (Loại trừ tương hỗ), (2) Hold and Wait (Giữ và Chờ), (3) No Preemption (Không trưng dụng), (4) Circular Wait (Chờ đợi vòng tròn).",
          "4 chiến lược đối phó Deadlock: (1) Ostrich Algorithm (Đà điểu — lờ đi như Linux/Windows), (2) Detection & Recovery (Phát hiện chu trình trên Resource Allocation Graph & thu hồi/kill), (3) Dynamic Avoidance (Thuật toán Banker của Dijkstra), (4) Prevention (Phá vỡ 1 trong 4 điều kiện Coffman, VD: đánh số thứ tự tài nguyên để phá Circular Wait).",
          "Thuật toán Banker (Chắc chắn ra 1-2 câu tính!): Tính Need[i] = Max[i] - Allocation[i]. Tìm tiến trình P_i có Need[i] ≤ Available → cấp phát cho nó chạy xong rồi thu hồi: Available = Available + Allocation[i]. Nếu chạy hết được mọi tiến trình ⇒ SAFE STATE!",
          "Phân biệt Deadlock (tắc nghẽn đứng yên vĩnh viễn) vs Livelock (vẫn chạy và đổi trạng thái nhưng không tiến triển) vs Starvation (1 tiến trình bị bỏ đói mãi mãi do ưu tiên thấp)."
        ]
      }
    ]
  },

  chapters: [
    {
      id: "osg_ch1",
      title: "Chương 1: Introduction — Tổng Quan Hệ Điều Hành, Dual Mode & System Calls",
      badge: "Trọng tâm FE (~6 câu)",
      summary: "Vai trò OS, Hardware (CPU/Cache/Pipeline/MMU), Monolithic/Microkernel/VM, Kernel vs User Mode & POSIX System Calls.",
      blocks: [
        {
          heading: "1.1 – 1.3: Định nghĩa, 2 Vai trò của OS & Lịch sử các thế hệ",
          items: [
            "Hai góc nhìn về Hệ điều hành:\n  • Top-down (Extended Machine / Virtual Machine): Cung cấp giao diện trừu tượng sạch sẽ, dễ dùng (file, process, socket) thay vì phải lập trình trực tiếp thanh ghi phần cứng.\n  • Bottom-up (Resource Manager): Điều phối tài nguyên CPU, bộ nhớ, đĩa, mạng giữa các chương trình bằng 2 cơ chế: Time Multiplexing (chia thời gian — CPU, máy in) và Space Multiplexing (chia không gian — RAM, đĩa cứng).",
            "4 thế hệ máy tính & OS:\n  • Gen 1 (1945–55): Ống chân không (Vacuum tubes), bảng cắm dây (Plugboards), chưa có OS.\n  • Gen 2 (1955–65): Transistors, hệ thống xử lý theo lô (Batch systems — FMS, IBSYS).\n  • Gen 3 (1965–80): Mạch tích hợp (ICs), hệ điều hành đa chương (Multiprogramming — OS/360), Spooling và Chia sẻ thời gian (Timesharing — CTSS, MULTICS, UNIX).\n  • Gen 4 (1980–nay): Máy tính cá nhân (PCs — MS-DOS, Windows, macOS, Linux) & Di động (Android, iOS)."
          ]
        },
        {
          heading: "1.4: Phần cứng máy tính (Hardware) & Dual Mode",
          items: [
            "Dual-Mode (2 chế độ hoạt động của CPU): Dùng 1 bit trong thanh ghi PSW (Program Status Word):\n  • Kernel Mode (Supervisor Mode): Thực thi MỌI lệnh máy, truy cập trực tiếp phần cứng I/O.\n  • User Mode: Chỉ thực thi tập con các lệnh an toàn; không được phép thực hiện lệnh I/O trực tiếp hay tắt ngắt.\n  • Muốn dùng dịch vụ của OS (như đọc file), tiến trình ở User Mode phải gọi lệnh TRAP (System Call) để chuyển sang Kernel Mode.",
            "Kỹ thuật tăng tốc CPU: Pipeline (chồng gối Fetch-Decode-Execute), Superscalar (nhiều đơn vị thực thi song song), Multithreading (Hyperthreading) và Multicore.",
            "Hệ thống phân cấp bộ nhớ (Memory Hierarchy — từ nhanh/đắt/nhỏ → chậm/rẻ/lớn): Registers → Cache (L1, L2, L3) → Main Memory (RAM) → SSD / Magnetic Disk → Magnetic Tape.",
            "MMU (Memory Management Unit): Bộ phận phần cứng nằm gần CPU, tự động dịch địa chỉ ảo (virtual address) sang địa chỉ vật lý (physical address)."
          ]
        },
        {
          heading: "1.5 – 1.7: System Calls (POSIX) & Cấu trúc Hệ điều hành",
          items: [
            "Các System Call quan trọng trong POSIX (UNIX/Linux):\n  • fork(): Tạo bản sao chính xác của tiến trình cha. Trả về PID của con (> 0) cho cha, trả về 0 cho tiến trình con, và -1 nếu lỗi.\n  • waitpid(pid, &statloc, options): Cha chờ tiến trình con kết thúc.\n  • execve(name, argv, envp): Thay thế toàn bộ ảnh bộ nhớ của tiến trình bằng chương trình mới.\n  • open / read / write / close / lseek / stat / mkdir / mount / umount / kill / chmod.",
            "Các cấu trúc (Architectures) của OS:\n  • Monolithic Systems: Toàn bộ OS chạy trong 1 khối duy nhất ở Kernel Mode (nhanh, nhưng 1 lỗi nhỏ trong driver có thể làm sập toàn bộ hệ thống — BSOD / Kernel Panic).\n  • Layered Systems: Chia tầng (VD: hệ thống THE của Dijkstra có 6 tầng).\n  • Microkernels (MINIX 3): Chỉ giữ lại phần tối thiểu (IPC, lập lịch, quản lý ngắt cơ bản) trong Kernel Mode; đẩy File Server, Device Drivers lên User Mode ⇒ cực kỳ ổn định, lỗi driver không làm sập máy!\n  • Virtual Machines (Hypervisors): Type 1 chạy trực tiếp trên phần cứng (VMware ESXi, Xen); Type 2 chạy trên một OS chủ (VirtualBox, VMware Workstation)."
          ]
        }
      ],
      examNote: "Đề FE rất hay hỏi: (1) Cơ chế chuyển từ User Mode sang Kernel Mode là gì? → TRAP / System Call; (2) Giá trị trả về của fork() ở tiến trình con là gì? → 0; (3) Điểm mạnh lớn nhất của Microkernel là gì? → Độ tin cậy cao (high reliability) vì lỗi ở driver/server không làm crash kernel!"
    },
    {
      id: "osg_ch2",
      title: "Chương 2: Processes, Threads, IPC & CPU Scheduling (Lập lịch CPU)",
      badge: "Siêu Trọng tâm (~12 câu)",
      summary: "3 trạng thái Process, User vs Kernel Threads, Race Condition, Semaphores/Mutex/Monitors & Các thuật toán Lập lịch CPU.",
      blocks: [
        {
          heading: "2.1 – 2.2: Tiến trình (Processes) & Luồng (Threads)",
          items: [
            "Tiến trình (Process): Là một chương trình đang thực thi (program in execution), có không gian địa chỉ riêng (Text/Code, Data, Heap, Stack) và một mục trong Process Table (PCB - Process Control Block).",
            "3 trạng thái cơ bản & 4 phép chuyển đổi hợp lệ:\n  1. Running → Blocked: Tiến trình tự chặn vì chờ I/O hoặc chờ sự kiện.\n  2. Running → Ready: Hết lượt (quantum) hoặc bị tiến trình ưu tiên cao hơn chiếm quyền (Scheduler quyết định).\n  3. Ready → Running: Scheduler chọn chạy trên CPU.\n  4. Blocked → Ready: Sự kiện/I/O hoàn tất.\n  ⚠️ KHÔNG có mũi tên từ Blocked → Running và KHÔNG có Ready → Blocked!",
            "Luồng (Threads): Các thread trong CÙNG 1 process chia sẻ chung: Address Space (Code, Data, Heap), Open Files, Global Variables; nhưng MỖI thread có RIÊNG: Program Counter (PC), Registers, Stack và State!",
            "User-Level Threads vs Kernel-Level Threads:\n  • User-Level: Quản lý ở thư viện User Space (kernel không biết). Ưu: cực nhanh, không tốn trap. Nhược: 1 thread gọi blocking system call ⇒ CẢ process bị block!\n  • Kernel-Level: Kernel quản lý bảng thread. Ưu: 1 thread block không ảnh hưởng thread khác, chạy song song đa lõi. Nhược: tốn chi phí context switch qua kernel."
          ]
        },
        {
          heading: "2.3: Giao tiếp giữa các tiến trình (IPC) & Đồng bộ hóa",
          items: [
            "Race Condition (Điều kiện tranh chấp): Khi 2 hay nhiều tiến trình cùng đọc/ghi dữ liệu dùng chung và kết quả cuối cùng phụ thuộc vào thứ tự chạy ai trước ai sau.",
            "4 điều kiện để giải quyết bài toán Vùng găng (Critical Region):\n  1. Không có 2 tiến trình nào ở trong vùng găng cùng lúc (Mutual Exclusion).\n  2. Không đặt giả định nào về tốc độ hay số lượng CPU.\n  3. Không tiến trình nào chạy ngoài vùng găng được quyền chặn tiến trình khác.\n  4. Không tiến trình nào phải chờ vô hạn để vào vùng găng.",
            "Các giải pháp Mutual Exclusion:\n  • Busy Waiting (Chờ tích cực — tốn CPU & dễ dính Priority Inversion): Tắt ngắt (chỉ tốt cho kernel 1 CPU), Lock variables (sai!), Strict Alternation (vi phạm ĐK 3), Peterson's Algorithm (đúng, bằng phần mềm), lệnh phần cứng TSL (Test and Set Lock) / XCHG.\n  • Sleep & Wakeup (Producer-Consumer bị dính lỗi Lost Wakeup nếu không đồng bộ!).\n  • Semaphores (Dijkstra): Dùng 2 phép toán nguyên tử down (P / wait) và up (V / signal). Binary Semaphore = Mutex.\n  • Monitors: Cấu trúc mức ngôn ngữ lập trình (Java synchronized), chỉ cho phép tối đa 1 tiến trình hoạt động bên trong tại 1 thời điểm, dùng biến điều kiện (condition variables: wait & signal)."
          ]
        },
        {
          heading: "2.4: Thuật toán Lập lịch CPU (CPU Scheduling — Hay ra tính toán!)",
          items: [
            "Phân loại: Non-preemptive (chạy tới khi xong hoặc tự block: FCFS, SJF) vs Preemptive (có thể ngắt giữa chừng khi hết quantum hoặc tiến trình ngắn/ưu tiên hơn tới: SRTN, Round Robin, Priority Preemptive).",
            "Các công thức tính toán bắt buộc:\n  • Turnaround Time (Thời gian lưu hệ thống): TAT = Completion Time - Arrival Time\n  • Waiting Time (Thời gian chờ): WT = TAT - Burst Time\n  • CPU Utilization (với n tiến trình, mỗi tiến trình chờ I/O tỉ lệ p): CPU Util = 1 - pⁿ  (VD: 3 tiến trình, mỗi tiến trình chờ I/O 80% ⇒ p = 0.8 ⇒ CPU Util = 1 - 0.8³ = 1 - 0.512 = 48.8%!).",
            "Đặc điểm các thuật toán:\n  • FCFS (First-Come First-Served): Đơn giản, không bị đói nhưng bị hiệu ứng đoàn tàu (Convoy effect).\n  • SJF (Shortest Job First): Tối ưu hóa Average Turnaround Time & Waiting Time khi tất cả các job đến cùng lúc.\n  • SRTN (Shortest Remaining Time Next): Phiên bản Preemptive của SJF.\n  • Round Robin (RR): Mỗi tiến trình chạy tối đa 1 lát cắt thời gian (Quantum q). Nếu q quá nhỏ → tốn nhiều context switch; nếu q quá lớn → suy biến thành FCFS!\n  • Hệ thời gian thực (Real-time): Schedulable khi ∑ (C_i / P_i) ≤ 1 (với C_i là thời gian chạy, P_i là chu kỳ)."
          ]
        }
      ],
      examNote: "Nhớ kỹ công thức Độ sử dụng CPU đa chương: CPU Utilization = 1 - pⁿ! Ví dụ có 4 tiến trình, mỗi tiến trình chờ I/O 50% (p = 0.5) ⇒ CPU Util = 1 - (0.5)⁴ = 1 - 1/16 = 93.75%. Câu này xuất hiện trong gần như mọi đề OSG202!"
    },
    {
      id: "osg_ch3",
      title: "Chương 3: Memory Management & Virtual Memory (Phân trang, TLB & Thay thế trang)",
      badge: "Siêu Trọng tâm (~12 câu)",
      summary: "Base/Limit, First/Best/Worst Fit, Paging, Dịch địa chỉ Ảo→Vật lý, TLB EAT, Page Replacement (FIFO/LRU/Optimal/Clock/NRU).",
      blocks: [
        {
          heading: "3.1 – 3.2: Không gian địa chỉ, Swapping & Cấp phát bộ nhớ trống",
          items: [
            "Relocation & Protection: Dùng 2 thanh ghi phần cứng Base (cộng thêm vào địa chỉ logic để ra địa chỉ vật lý) và Limit (kiểm tra xem địa chỉ có vượt quá giới hạn vùng nhớ của tiến trình không).",
            "Quản lý vùng nhớ trống: Bitmap (dễ tìm nhưng quét chuỗi k số 0 chậm) vs Linked List (danh sách các đoạn P - Process và H - Hole).",
            "5 thuật toán chọn lỗ trống (Hole Allocation):\n  • First Fit: Chọn lỗ đầu tiên đủ lớn (Nhanh nhất & ít phân mảnh hơn Best Fit!).\n  • Next Fit: Giống First Fit nhưng bắt đầu tìm tiếp từ vị trí vừa dừng lần trước.\n  • Best Fit: Quét toàn bộ danh sách, chọn lỗ NHỎ NHẤT mà vẫn đủ lớn (Chậm hơn & sinh ra rất nhiều mảnh vụn bé xíu không dùng được!).\n  • Worst Fit: Chọn lỗ LỚN NHẤT để phần dư còn lại đủ lớn cho tiến trình sau.\n  • Quick Fit: Duy trì nhiều danh sách riêng cho các kích thước phổ biến."
          ]
        },
        {
          heading: "3.3: Bộ nhớ ảo (Virtual Memory), Paging & TLB",
          items: [
            "Phân trang (Paging): Chia bộ nhớ ảo thành các Trang (Pages) và RAM vật lý thành các Khung trang (Page Frames) có CÙNG KÍCH THƯỚC (VD: 4 KB = 4096 = 2¹² bytes).",
            "Cách dịch Địa chỉ Ảo (Virtual Address) sang Địa chỉ Vật lý (Physical Address):\n  • Bước 1: Tính Page Number = ⌊Virtual Address / Page Size⌋ và Offset = Virtual Address mod Page Size.\n  • Bước 2: Tra bảng Page Table tại dòng Page Number để lấy Frame Number (kiểm tra bit Present/Absent = 1; nếu = 0 thì xảy ra Page Fault!).\n  • Bước 3: Physical Address = Frame Number × Page Size + Offset.",
            "TLB (Translation Lookaside Buffer): Bộ nhớ đệm tốc độ cao bên trong MMU lưu các cặp (Page → Frame) vừa dùng gần nhất.\n  • Công thức Effective Access Time (EAT) với tỉ lệ trúng TLB α:\n    EAT = α · (t_TLB + t_MEM) + (1 - α) · (t_TLB + 2 · t_MEM).",
            "Khi không gian địa chỉ quá lớn (32-bit / 64-bit): Dùng Multi-Level Page Tables (Phân trang đa cấp) hoặc Inverted Page Table (Bảng trang đảo — kích thước tỉ lệ theo số Frame của RAM chứ không theo không gian địa chỉ ảo!)."
          ]
        },
        {
          heading: "3.4 – 3.7: Thuật toán Thay thế trang (Page Replacement), Thrashing & Segmentation",
          items: [
            "1. Optimal (Tối ưu): Thay trang sẽ KHÔNG được dùng trong thời gian dài nhất ở tương lai (chỉ làm mốc lý thuyết so sánh).",
            "2. NRU (Not Recently Used): Phân trang thành 4 lớp dựa trên 2 bit R (Referenced) và M (Modified), ưu tiên đuổi lớp thấp nhất:\n  • Class 0: R = 0, M = 0 (Không đọc, không sửa — ĐUỔI ĐẦU TIÊN!)\n  • Class 1: R = 0, M = 1 (Không đọc nhưng đã sửa)\n  • Class 2: R = 1, M = 0 (Có đọc, chưa sửa)\n  • Class 3: R = 1, M = 1 (Vừa đọc vừa sửa — giữ lại cuối cùng!)",
            "3. FIFO (First-In First-Out): Đuổi trang vào RAM lâu nhất. Dễ dính Nghịch lý Belady (Belady's Anomaly: cấp thêm Frame lại tăng số Page Faults!).",
            "4. Second Chance & Clock: Kiểm tra bit R của trang cũ nhất; nếu R = 0 thì đuổi luôn; nếu R = 1 thì xóa R về 0 và cho thêm cơ hội thứ hai.",
            "5. LRU (Least Recently Used): Đuổi trang lâu nhất chưa được chạm tới trong quá khứ (xấp xỉ bằng phần mềm qua thuật toán NFU và Aging — dịch phải bit đếm rồi cộng bit R vào bit trái nhất!).",
            "6. Working Set & WSClock: Tập các trang mà tiến trình sử dụng trong k lần tham chiếu gần nhất. Nếu RAM không đủ chứa Working Set → xảy ra Thrashing (máy chỉ lo tráo trang liên tục, hiệu năng tụt dốc).",
            "7. Phân đoạn (Segmentation): Chia bộ nhớ thành nhiều không gian địa chỉ 2 chiều độc lập (Code, Stack, Symbol Table...). Phân trang có phân mảnh NỘI (internal), Phân đoạn có phân mảnh NGOÀI (external)!"
          ]
        }
      ],
      examNote: "Dùng Máy tính 2 (Dịch Paging & TLB EAT) và Máy tính 3 (Chạy bảng FIFO / LRU / Optimal) trong tab '🧮 Máy tính OSG202' để luyện mọi bài tập Chương 3 trong 5 giây!"
    },
    {
      id: "osg_ch4",
      title: "Chương 4: File Systems — Cấu trúc File, FAT, I-nodes, Links & Quản lý Đĩa",
      badge: "Trọng tâm FE (~8 câu)",
      summary: "Cấp phát Contiguous/Linked/FAT/I-node, tính Max File Size của I-node, Hard vs Soft Link, fsck & Block Size Trade-off.",
      blocks: [
        {
          heading: "4.1 – 4.2: File, Directories & Đường dẫn",
          items: [
            "3 loại cấu trúc file: Byte sequence (UNIX/Windows — OS không quan tâm cấu trúc bên trong), Record sequence, và Tree.",
            "Truy cập file: Sequential access (tuần tự từ đầu đến cuối) vs Random access (nhảy tới bất kỳ vị trí nào bằng lseek).",
            "Đường dẫn tuyệt đối (Absolute path: bắt đầu từ root `/`, VD: `/usr/ast/mailbox`) vs Đường dẫn tương đối (Relative path: tính từ thư mục hiện hành — working directory; `.` là thư mục hiện tại, `..` là thư mục cha)."
          ]
        },
        {
          heading: "4.3: 4 Phương pháp Cấp phát File (File Allocation) & I-node",
          items: [
            "1. Contiguous Allocation (Liên tục): Lưu file thành dãy block liền kề nhau. Ưu: đọc cực nhanh, chỉ cần lưu (block đầu, độ dài). Nhược: phân mảnh đĩa nặng khi xóa/mở rộng file (thích hợp cho CD-ROM/DVD ghi 1 lần!).",
            "2. Linked List Allocation: Mỗi block chứa con trỏ trỏ tới block tiếp theo. Ưu: không phân mảnh ngoài. Nhược: truy cập ngẫu nhiên cực chậm, dữ liệu trong block không còn là lũy thừa của 2.",
            "3. FAT (File Allocation Table): Gom toàn bộ con trỏ vào 1 bảng đặt ở RAM. Ưu: truy cập ngẫu nhiên nhanh. Nhược: toàn bộ bảng FAT phải luôn nằm trong RAM (đĩa 1 TB với block 1 KB tốn hàng GB RAM!).",
            "4. I-nodes (Index-nodes — UNIX/Linux): Mỗi file có 1 cấu trúc i-node lưu thuộc tính + con trỏ trực tiếp (Direct blocks) + con trỏ gián tiếp (Single, Double, Triple Indirect). Ưu: chỉ nạp i-node của các file ĐANG MỞ vào RAM!",
            "Công thức tính Dung lượng file tối đa của I-node:\n  • Số con trỏ trong 1 block: K = (Block Size) / (Pointer Size)\n  • Tổng số block dữ liệu tối đa = Direct + K + K² + K³\n  • Max File Size = (Tổng số block) × (Block Size)."
          ]
        },
        {
          heading: "4.4: Shared Files (Hard Link vs Symbolic Link), Block Size & Journaling",
          items: [
            "Hard Link: Tạo 1 mục thư mục mới trỏ thẳng vào CÙNG i-node và tăng Link Counter lên 1. Chỉ xóa dữ liệu khi counter về 0. Nhược: không tạo được giữa 2 phân vùng đĩa (partitions) khác nhau và không link thư mục.",
            "Symbolic Link (Soft Link): Tạo 1 file mới kiểu LINK chứa chuỗi ký tự đường dẫn tới file đích. Ưu: trỏ xuyên nhiều phân vùng/máy mạng được. Nhược: tốn thêm 1 i-node và nếu file gốc bị xóa sẽ thành broken link (dangling pointer).",
            "Đánh đổi Kích thước Block (Block Size Trade-off): Block càng LỚN → tốc độ truyền dữ liệu (performance) càng cao, nhưng hiệu suất sử dụng dung lượng đĩa (space efficiency) càng giảm do phân mảnh nội.",
            "Quản lý block trống: Linked list các block chứa địa chỉ block trống vs Bitmap (1 bit cho mỗi block trên đĩa). Kiểm tra nhất quán file system bằng công cụ fsck (Linux) hoặc chkdsk (Windows). Journaling File Systems (ext4, NTFS) ghi nhật ký (log) trước khi ghi đĩa để phục hồi nhanh sau mất điện."
          ]
        }
      ],
      examNote: "Công thức I-node rất hay hỏi: VD block 4 KB (4096 B), con trỏ 4 B ⇒ mỗi indirect block chứa 4096/4 = 1024 con trỏ. Có 10 direct + 1 single indirect ⇒ tối đa (10 + 1024) × 4 KB = 4136 KB!"
    },
    {
      id: "osg_ch5",
      title: "Chương 5: Input/Output, DMA, Disk Arm Scheduling & RAID",
      badge: "Trọng tâm FE (~6 câu)",
      summary: "Programmed I/O vs Interrupt vs DMA, 4 tầng I/O Software, Disk Scheduling (FCFS/SSTF/Elevator) & RAID 0–6.",
      blocks: [
        {
          heading: "5.1 – 5.3: Phần cứng I/O, DMA & 4 Tầng Phần mềm I/O",
          items: [
            "Phân loại thiết bị: Block devices (lưu theo khối có địa chỉ riêng như ổ đĩa, USB — đọc/ghi ngẫu nhiên) vs Character devices (truyền luồng ký tự như bàn phím, chuột, máy in — không seek được).",
            "3 phương thức thực hiện I/O:\n  1. Programmed I/O (Busy Waiting / Polling): CPU liên tục hỏi trạng thái thiết bị cho tới khi in xong từng ký tự → tốn 100% CPU!\n  2. Interrupt-Driven I/O: CPU gửi 1 ký tự rồi làm việc khác; thiết bị xong sẽ phát ngắt (interrupt) báo CPU gửi ký tự tiếp theo.\n  3. DMA (Direct Memory Access): Bộ điều khiển DMA tự chuyển NGUYÊN 1 KHỐI dữ liệu giữa thiết bị và RAM mà không cần CPU nhúng tay; chỉ phát 1 ngắt duy nhất khi xong toàn bộ khối!",
            "4 Tầng Phần mềm I/O (từ phần cứng lên ứng dụng): Interrupt Handlers → Device Drivers → Device-Independent I/O Software (buffering, đặt tên thiết bị thống nhất, báo lỗi) → User-Space I/O Software (thư viện `printf`, Spooling daemon)."
          ]
        },
        {
          heading: "5.4: Đĩa cứng (Disks), Disk Arm Scheduling & RAID",
          items: [
            "3 thành phần thời gian đọc 1 sector trên đĩa từ (HDD): Seek time (di chuyển đầu đọc tới đúng track/cylinder — LÂU NHẤT!) + Rotational delay (chờ đĩa quay tới đúng sector) + Transfer time (đọc dữ liệu).",
            "Các thuật toán Lập lịch Đầu đọc Đĩa (Disk Arm Scheduling):\n  • FCFS: Phục vụ đúng thứ tự yêu cầu đến.\n  • SSF / SSTF (Shortest Seek First): Luôn di chuyển tới cylinder gần vị trí đầu đọc hiện tại nhất (giảm tổng quãng đường rõ rệt, nhưng dễ làm đói các cylinder ở 2 rìa ngoài!).\n  • Elevator (SCAN): Đầu đọc quét theo 1 chiều lên (hoặc xuống) phục vụ tất cả yêu cầu trên đường đi cho tới khi hết yêu cầu theo chiều đó mới quay ngược lại — cân bằng & không gây đói!",
            "Bảng nhớ nhanh các mức RAID (Redundant Array of Independent Disks):\n  • RAID 0 (Striping): Chia đều dải dữ liệu lên nhiều ổ → Đọc/ghi nhanh nhất, KHÔNG có dự phòng (hỏng 1 ổ là mất hết!).\n  • RAID 1 (Mirroring): Sao chép y hệt sang ổ gương → Chịu lỗi tốt, đọc nhanh, tốn gấp đôi số ổ đĩa.\n  • RAID 4: Striping theo khối + 1 ổ riêng chứa Parity → Nghẽn cổ chai (bottleneck) khi ghi nhỏ vì mọi thao tác ghi đều phải cập nhật ổ parity duy nhất.\n  • RAID 5: Phân tán đều Parity xoay vòng trên tất cả các ổ (tối thiểu 3 ổ) → Phổ biến nhất, chịu hỏng 1 ổ bất kỳ.\n  • RAID 6: Dùng 2 khối parity độc lập (tối thiểu 4 ổ) → Chịu hỏng đồng thời 2 ổ!"
          ]
        }
      ],
      examNote: "Dùng Máy tính 5 (Mô phỏng Disk Scheduling FCFS / SSTF / SCAN) trong tab '🧮 Máy tính OSG202' để kiểm tra ngay tổng quãng đường di chuyển đầu đọc (Total Head Movement)!"
    },
    {
      id: "osg_ch6",
      title: "Chương 6: Deadlocks — 4 Điều Kiện Coffman, Banker's Algorithm & Phòng Tránh",
      badge: "Cực Dễ Ăn Điểm (~6 câu)",
      summary: "4 Điều kiện Coffman, Resource Allocation Graph, Thuật toán Banker (Safe/Unsafe), Ostrich & 4 Cách Phá Deadlock.",
      blocks: [
        {
          heading: "6.1 – 6.3: Khái niệm Deadlock & 4 Điều kiện Coffman",
          items: [
            "Định nghĩa chính thức của Deadlock: Một tập các tiến trình bị Deadlock nếu MỖI tiến trình trong tập đang chờ một sự kiện mà CHỈ có một tiến trình KHÁC trong chính tập đó mới có thể gây ra.",
            "Tài nguyên có thể trưng dụng (Preemptable — như RAM, CPU) vs Không thể trưng dụng (Nonpreemptable — như máy in, ổ ghi CD/DVD). Deadlock thường xảy ra với tài nguyên Nonpreemptable!",
            "4 Điều kiện Coffman (CẢ 4 PHẢI ĐỒNG THỜI XẢY RA thì mới có Deadlock):\n  1. Mutual Exclusion (Loại trừ tương hỗ): Mỗi tài nguyên tại 1 thời điểm chỉ thuộc về tối đa 1 tiến trình.\n  2. Hold and Wait (Giữ và Chờ): Tiến trình đang giữ ít nhất 1 tài nguyên và yêu cầu thêm tài nguyên mới.\n  3. No Preemption (Không trưng dụng): Tài nguyên đã cấp không thể bị cưỡng ép lấy lại; chỉ tiến trình đang giữ mới tự nhả ra.\n  4. Circular Wait (Chờ đợi vòng tròn): Tồn tại vòng tròn P₁ chờ P₂, P₂ chờ P₃, ..., Pₙ chờ P₁."
          ]
        },
        {
          heading: "6.4 – 6.7: 4 Chiến lược Xử lý Deadlock & Thuật toán Banker",
          items: [
            "1. Ostrich Algorithm (Thuật toán Đà điểu — rúc đầu vào cát): Lờ đi không xử lý vì chi phí phòng tránh quá đắt so với tần suất xảy ra (Linux, Windows, macOS đều dùng cách này cho đa số tài nguyên!).",
            "2. Detection & Recovery: Phát hiện chu trình (cycle) trên Resource Allocation Graph (nếu mỗi loại tài nguyên có 1 thực thể thì có chu trình ⇔ có deadlock; nếu có nhiều thực thể thì dùng thuật toán ma trận C và R). Khôi phục bằng: Preemption, Rollback (checkpoint), hoặc Kill process.",
            "3. Avoidance — Thuật toán Banker (Dijkstra):\n  • Trạng thái An toàn (Safe State): Tồn tại ít nhất 1 thứ tự thực thi (Safe Sequence) để tất cả tiến trình đều chạy xong mà không bị deadlock.\n  • Lưu ý bẫy FE: Trạng thái KHÔNG an toàn (Unsafe State) KHÔNG có nghĩa là ĐÃ bị Deadlock ngay lập tức — nó chỉ có nghĩa là OS không còn đảm bảo tránh được Deadlock nữa!\n  • Cách chạy: Tính Need = Max - Allocation → Tìm tiến trình có Need ≤ Available → Cho chạy xong và cộng Allocation của nó vào Available → Lặp tới khi hết.",
            "4. Prevention (Phòng ngừa — Phá 1 trong 4 điều kiện Coffman):\n  • Phá Mutual Exclusion: Dùng Spooling (cho máy in).\n  • Phá Hold and Wait: Yêu cầu xin TẤT CẢ tài nguyên ngay từ lúc khởi tạo (lãng phí & khó biết trước).\n  • Phá No Preemption: Khó thực hiện với máy in.\n  • Phá Circular Wait (Hiệu quả nhất!): Đánh số thứ tự toàn cục cho tất cả các tài nguyên; mọi tiến trình chỉ được yêu cầu tài nguyên theo thứ tự TĂNG DẦN!"
          ]
        }
      ],
      examNote: "Dùng Máy tính 4 (Banker's Algorithm) trong tab '🧮 Máy tính OSG202' để kiểm tra Safe / Unsafe State và tìm Safe Sequence tự động trong 2 giây!"
    }
  ],

  flashcards: [
    {
      id: 1,
      category: "Ch.1: OS Basics",
      term: "Cơ chế nào giúp tiến trình ở User Mode chuyển sang Kernel Mode để sử dụng dịch vụ của Hệ điều hành?",
      options: [
        "Gọi trực tiếp lệnh I/O từ chương trình người dùng",
        "Thực thi lệnh TRAP (System Call) để CPU chuyển bit chế độ trong PSW sang Kernel Mode",
        "Tắt toàn bộ ngắt phần cứng (Disable interrupts) trong User Mode",
        "Gọi một lời gọi hàm cục bộ (local function call) thông thường"
      ],
      correctIndex: 1,
      answer: "Thông qua lệnh TRAP (System Call). CPU sẽ chuyển bit chế độ trong thanh ghi PSW sang Kernel Mode và nhảy tới trình xử lý System Call tương ứng trong nhân. Chương trình ở User Mode không được tự tắt ngắt hay thao tác phần cứng trực tiếp."
    },
    {
      id: 2,
      category: "Ch.1: OS Basics",
      term: "Hàm system call fork() trong POSIX/UNIX trả về giá trị gì cho tiến trình Cha và tiến trình Con khi tạo thành công?",
      options: [
        "Trả về PID của cha cho tiến trình Con và trả về 0 cho tiến trình Cha",
        "Trả về 0 cho cả tiến trình Cha lẫn tiến trình Con",
        "Trả về 0 cho tiến trình Con và trả về PID của con (> 0) cho tiến trình Cha",
        "Trả về -1 cho tiến trình Con và trả về 1 cho tiến trình Cha"
      ],
      correctIndex: 2,
      answer: "• Trả về 0 cho tiến trình Con (Child process).\n• Trả về PID của con (> 0) cho tiến trình Cha (Parent process) để cha quản lý con.\n• Trả về -1 nếu tạo tiến trình thất bại."
    },
    {
      id: 3,
      category: "Ch.2: Processes",
      term: "Hai phép chuyển đổi trạng thái nào KHÔNG BAO GIỜ tồn tại trong mô hình 3 trạng thái (Running, Ready, Blocked)?",
      options: [
        "Running → Ready và Blocked → Ready",
        "Blocked → Running và Ready → Blocked",
        "Running → Blocked và Ready → Running",
        "Ready → Running và Running → Ready"
      ],
      correctIndex: 1,
      answer: "1. KHÔNG có Blocked → Running: Khi I/O xong, tiến trình phải về hàng đợi Ready để chờ Scheduler chọn cấp CPU trước.\n2. KHÔNG có Ready → Blocked: Tiến trình đang ở Ready chưa chạy lệnh nào trên CPU nên không thể tự gọi I/O để bị block."
    },
    {
      id: 4,
      category: "Ch.2: Processes",
      term: "Trong cùng một tiến trình (Process), mỗi luồng (Thread) SỞ HỮU RIÊNG những thành phần nào sau đây?",
      options: [
        "Address Space (Code, Data, Heap) và các tệp đang mở (Open Files)",
        "Biến toàn cục (Global Variables) và Tiến trình con (Child Processes)",
        "Program Counter (PC), các thanh ghi (Registers), Ngăn xếp (Stack) và Trạng thái (State)",
        "Toàn bộ không gian địa chỉ ảo và Bảng trang (Page Table)"
      ],
      correctIndex: 2,
      answer: "• SỞ HỮU RIÊNG mỗi Thread: Program Counter (PC), Registers, Stack (lưu biến cục bộ & địa chỉ trả về hàm) và State.\n• CHIA SẺ CHUNG trong Process: Address Space (Code, Data, Heap), Global Variables, Open Files và Child processes."
    },
    {
      id: 5,
      category: "Ch.2: Scheduling",
      term: "Công thức tính Độ sử dụng CPU (CPU Utilization) khi có n tiến trình trong RAM và mỗi tiến trình dành tỉ lệ p thời gian chờ I/O là gì?",
      options: [
        "CPU Utilization = pⁿ",
        "CPU Utilization = 1 - pⁿ",
        "CPU Utilization = 1 - n·p",
        "CPU Utilization = (1 - p)ⁿ"
      ],
      correctIndex: 1,
      answer: "Xác suất để CẢ n tiến trình cùng chờ I/O (CPU rảnh/lãng phí) là pⁿ ⇒ Xác suất CPU đang bận xử lý là: CPU Utilization = 1 - pⁿ.\n(Ví dụ: n = 3 tiến trình, mỗi tiến trình chờ I/O 80% ⇒ p = 0.8 ⇒ CPU Util = 1 - 0.8³ = 1 - 0.512 = 48.8%)."
    },
    {
      id: 6,
      category: "Ch.3: Memory",
      term: "Công thức tính Thời gian truy cập hiệu dụng (EAT) khi có TLB (tỉ lệ trúng α, thời gian tra TLB là t_TLB, thời gian đọc RAM là t_MEM) là gì?",
      options: [
        "EAT = α · t_TLB + (1 - α) · t_MEM",
        "EAT = α · (t_TLB + t_MEM) + (1 - α) · (t_TLB + 2 · t_MEM)",
        "EAT = α · (t_TLB + 2 · t_MEM) + (1 - α) · (t_TLB + t_MEM)",
        "EAT = t_TLB + 2 · t_MEM"
      ],
      correctIndex: 1,
      answer: "EAT = α · (t_TLB + t_MEM) + (1 - α) · (t_TLB + 2 · t_MEM).\n• Khi trúng TLB (xác suất α): Tra TLB rồi đọc thẳng dữ liệu trong RAM (1 lần đọc RAM).\n• Khi trượt TLB (xác suất 1 - α): Tra TLB → đọc Page Table trong RAM → đọc dữ liệu trong RAM (2 lần đọc RAM)."
    },
    {
      id: 7,
      category: "Ch.3: Memory",
      term: "Trong thuật toán thay thế trang NRU (Not Recently Used), trang thuộc lớp (Class) nào sẽ bị ưu tiên chọn ĐUỔI RA ĐẦU TIÊN theo 2 bit R và M?",
      options: [
        "Class 0: R = 0, M = 0 (chưa tham chiếu, chưa sửa đổi)",
        "Class 1: R = 0, M = 1 (chưa tham chiếu, đã sửa đổi)",
        "Class 2: R = 1, M = 0 (đã tham chiếu, chưa sửa đổi)",
        "Class 3: R = 1, M = 1 (đã tham chiếu, đã sửa đổi)"
      ],
      correctIndex: 0,
      answer: "NRU đuổi từ lớp thấp đến lớp cao để ít tốn chi phí ghi đĩa nhất:\n• Class 0 (R=0, M=0): Đuổi đầu tiên!\n• Class 1 (R=0, M=1)\n• Class 2 (R=1, M=0)\n• Class 3 (R=1, M=1): Giữ lại sau cùng."
    },
    {
      id: 8,
      category: "Ch.3: Memory",
      term: "Nghịch lý Belady (Belady's Anomaly) là hiện tượng gì và xảy ra ở thuật toán thay thế trang nào?",
      options: [
        "Tăng số khung trang làm giảm lỗi trang; xảy ra ở LRU",
        "Tăng số khung trang (Page Frames) nhưng số lỗi trang (Page Faults) lại TĂNG LÊN; xảy ra ở FIFO",
        "Giảm kích thước trang làm giảm kích thước bảng trang; xảy ra ở Optimal",
        "CPU đạt 100% hiệu suất khi xảy ra Thrashing; xảy ra ở Working Set"
      ],
      correctIndex: 1,
      answer: "Nghịch lý Belady là hiện tượng CẤP THÊM khung trang (Page Frames) nhưng số lỗi trang (Page Faults) lại TĂNG LÊN.\nXảy ra ở thuật toán FIFO (không bao giờ xảy ra ở LRU và Optimal vì hai thuật toán này thỏa tính chất Stack Algorithm)."
    },
    {
      id: 9,
      category: "Ch.4: File Systems",
      term: "Phát biểu nào sau đây phân biệt ĐÚNG giữa Hard Link và Symbolic (Soft) Link trong UNIX/Linux?",
      options: [
        "Hard Link có thể trỏ xuyên nhiều phân vùng đĩa khác nhau, còn Symbolic Link thì không",
        "Hard Link trỏ trực tiếp tới cùng số i-node trong cùng 1 phân vùng (xóa file gốc vẫn đọc được); Symbolic Link là file riêng chứa đường dẫn (xóa file gốc sẽ thành link hỏng)",
        "Symbolic Link làm tăng bộ đếm liên kết (link count) của i-node tệp gốc, còn Hard Link không làm tăng",
        "Xóa tệp gốc sẽ làm cả Hard Link lẫn Symbolic Link đều mất dữ liệu ngay lập tức"
      ],
      correctIndex: 1,
      answer: "• Hard Link: Trỏ thẳng tới CÙNG số i-node, tăng link count, chỉ tạo được trong cùng 1 partition, xóa tên file gốc vẫn đọc được dữ liệu (chỉ xóa thật khi link count = 0).\n• Symbolic Link: Là 1 file riêng chứa đường dẫn (path), trỏ xuyên nhiều partition/máy mạng, xóa file gốc sẽ thành link hỏng (dangling link)."
    },
    {
      id: 10,
      category: "Ch.5: I/O & RAID",
      term: "Nhận định nào sau đây ĐÚNG khi so sánh các cấp độ RAID (0, 1, 4, 5, 6)?",
      options: [
        "RAID 0 chịu được hỏng 1 ổ đĩa nhờ lưu bản sao dữ liệu",
        "RAID 4 phân tán dữ liệu Parity đều lên mọi ổ đĩa để tránh nghẽn cổ chai",
        "RAID 0 không chịu lỗi; RAID 1 nhân đôi ổ (tốn 50% dung lượng); RAID 5 phân tán Parity (chịu hỏng 1 ổ); RAID 6 có 2 khối Parity (chịu hỏng 2 ổ)",
        "RAID 5 dùng 1 ổ Parity cố định duy nhất nên luôn gây nghẽn cổ chai ghi"
      ],
      correctIndex: 2,
      answer: "• RAID 0: Striping, nhanh nhất, KHÔNG chịu lỗi.\n• RAID 1: Mirroring (nhân đôi ổ), tốn 50% dung lượng.\n• RAID 4: 1 ổ Parity cố định → nghẽn cổ chai ghi.\n• RAID 5: Phân tán Parity đều các ổ → chịu hỏng 1 ổ.\n• RAID 6: 2 khối Parity → chịu hỏng đồng thời 2 ổ."
    },
    {
      id: 11,
      category: "Ch.6: Deadlocks",
      term: "Cách phòng tránh Deadlock hiệu quả nhất để phá vỡ điều kiện thứ 4 của Coffman — Circular Wait (Chờ đợi vòng tròn) là gì?",
      options: [
        "Dùng kỹ thuật Spooling cho mọi thiết bị (phá Mutual Exclusion)",
        "Đánh số thứ tự toàn cục cho tất cả tài nguyên và bắt buộc tiến trình chỉ yêu cầu tài nguyên theo thứ tự TĂNG DẦN",
        "Bắt tiến trình giải phóng CPU mỗi 10 ms bằng Round Robin",
        "Dùng thuật toán Đà điểu (Ostrich Algorithm) để bỏ qua mọi kiểm tra"
      ],
      correctIndex: 1,
      answer: "4 Điều kiện Coffman gồm: (1) Mutual Exclusion, (2) Hold and Wait, (3) No Preemption, và (4) Circular Wait.\nĐể phá Circular Wait: Đánh số thứ tự toàn cục (numerical ordering) cho tất cả tài nguyên và quy định mọi tiến trình chỉ được xin tài nguyên theo thứ tự tăng dần — khi đó không bao giờ tạo được vòng chờ khép kín!"
    },
    {
      id: 12,
      category: "Ch.6: Deadlocks",
      term: "Trong thuật toán Banker, trạng thái UNSAFE (Không an toàn) có đồng nghĩa với việc hệ thống ĐÃ bị DEADLOCK hay không?",
      options: [
        "Có, mọi trạng thái Unsafe đều đang bị Deadlock ngay lập tức",
        "Không — trạng thái Unsafe chưa chắc đã bị Deadlock ngay, nhưng HĐH không còn đảm bảo tránh được Deadlock",
        "Có, chỉ trừ khi hệ thống dùng phân trang bộ nhớ",
        "Không — trạng thái Unsafe thực chất vẫn luôn tìm được ít nhất 1 chuỗi an toàn (Safe Sequence)"
      ],
      correctIndex: 1,
      answer: "KHÔNG! Một trạng thái Unsafe CHƯA chắc đã bị Deadlock ngay lập tức (vì các tiến trình có thể không xin đến mức Max mà tự nhả tài nguyên sớm), nhưng HĐH KHÔNG CÒN đảm bảo tránh được Deadlock. Ngược lại, mọi trạng thái Deadlock chắc chắn đều là Unsafe."
    }
  ],

  quizQuestions: [
    // ==================== CHƯƠNG 1: INTRODUCTION (10 CÂU) ====================
    {
      id: 101,
      topic: "Ch.1: Introduction & OS Concepts",
      question: "[FE OSG202] What are the two main functions of an Operating System according to Tanenbaum?",
      options: [
        "Compiler and Linker",
        "Extended Machine (Virtual Machine) and Resource Manager",
        "Hardware Designer and Network Router",
        "Database Manager and Web Server"
      ],
      answer: 1,
      explanation: "Theo giáo trình Tanenbaum (Ch.1), Hệ điều hành có 2 chức năng cốt lõi:\n1. Extended Machine (Top-down): Che giấu sự phức tạp của phần cứng và cung cấp giao diện trừu tượng dễ dùng.\n2. Resource Manager (Bottom-up): Quản lý và phân bổ tài nguyên (CPU, RAM, I/O) theo thời gian (Time Multiplexing) và không gian (Space Multiplexing)."
    },
    {
      id: 102,
      topic: "Ch.1: Introduction & OS Concepts",
      question: "[FE OSG202] How does a user program running in User Mode switch to Kernel Mode to request a service from the Operating System?",
      options: [
        "By directly modifying the PSW mode bit",
        "By executing a TRAP instruction (System Call)",
        "By calling a normal local function jump",
        "By disabling all hardware interrupts"
      ],
      answer: 1,
      explanation: "Chương trình ở User Mode không thể tự đổi bit chế độ trong thanh ghi PSW hay tắt ngắt. Nó bắt buộc phải thực thi lệnh TRAP (System Call) để chuyển quyền điều khiển an toàn sang Kernel Mode."
    },
    {
      id: 103,
      topic: "Ch.1: Introduction & OS Concepts",
      question: "[FE OSG202] In POSIX/UNIX, what value does the fork() system call return to the CHILD process upon successful creation?",
      options: [
        "-1",
        "0",
        "The child's PID (a positive integer)",
        "The parent's PID"
      ],
      answer: 1,
      explanation: "Hàm fork() tạo một bản sao của tiến trình cha:\n• Trả về 0 cho tiến trình CON.\n• Trả về PID của con (> 0) cho tiến trình CHA.\n• Trả về -1 nếu thất bại."
    },
    {
      id: 104,
      topic: "Ch.1: Introduction & OS Concepts",
      question: "[FE OSG202] Which Operating System structure moves device drivers, file systems, and most OS services out of the kernel into User Space to maximize reliability?",
      options: [
        "Monolithic System",
        "MS-DOS Structure",
        "Microkernel (e.g., MINIX 3)",
        "Batch System"
      ],
      answer: 2,
      explanation: "Kiến trúc Microkernel (như MINIX 3) giữ nhân nhỏ gọn tối đa và đẩy các trình điều khiển thiết bị (device drivers), file server lên chạy như các tiến trình ở User Mode ⇒ Nếu driver bị lỗi/crash sẽ không làm sập cả nhân OS!"
    },
    {
      id: 105,
      topic: "Ch.1: Introduction & OS Concepts",
      question: "[FE OSG202] Which hardware component is responsible for mapping virtual addresses to physical addresses?",
      options: [
        "ALU (Arithmetic Logic Unit)",
        "DMA Controller",
        "MMU (Memory Management Unit)",
        "BIOS"
      ],
      answer: 2,
      explanation: "MMU (Memory Management Unit) là bộ phận phần cứng nằm gần CPU chịu trách nhiệm dịch địa chỉ ảo (virtual address) sang địa chỉ vật lý (physical address)."
    },
    {
      id: 106,
      topic: "Ch.1: Introduction & OS Concepts",
      question: "[FE OSG202] What is the key difference between a Type 1 Hypervisor and a Type 2 Hypervisor?",
      options: [
        "Type 1 runs directly on bare metal hardware; Type 2 runs as an application on top of a host OS",
        "Type 2 runs directly on bare metal hardware; Type 1 runs on top of Windows/Linux",
        "Type 1 cannot run Linux guest OS",
        "Type 2 does not require CPU virtualization support"
      ],
      answer: 0,
      explanation: "• Type 1 Hypervisor (Bare-metal — VD: VMware ESXi, Xen, Hyper-V): Chạy trực tiếp trên phần cứng máy chủ.\n• Type 2 Hypervisor (Hosted — VD: VirtualBox, VMware Workstation): Chạy như một phần mềm trên nền một hệ điều hành chủ (Host OS)."
    },
    {
      id: 107,
      topic: "Ch.1: Introduction & OS Concepts",
      question: "[FE OSG202] Sharing the CPU among multiple processes by giving each process a short time slice is an example of:",
      options: [
        "Space multiplexing",
        "Time multiplexing",
        "Direct Memory Access",
        "Spooling"
      ],
      answer: 1,
      explanation: "• Time multiplexing (Ghép kênh theo thời gian): Các chương trình lần lượt thay phiên dùng cùng 1 tài nguyên (VD: CPU, máy in).\n• Space multiplexing (Ghép kênh theo không gian): Chia nhỏ tài nguyên thành nhiều phần dùng đồng thời (VD: RAM, ổ đĩa cứng)."
    },
    {
      id: 108,
      topic: "Ch.1: Introduction & OS Concepts",
      question: "[FE OSG202] Which statement about the Memory Hierarchy is CORRECT as you move from Registers down to Magnetic Disk?",
      options: [
        "Access time decreases, capacity decreases, cost per bit increases",
        "Access time increases (slower), capacity increases (larger), cost per bit decreases (cheaper)",
        "Access time increases, capacity decreases, cost per bit increases",
        "Both access time and cost per bit remain constant"
      ],
      answer: 1,
      explanation: "Đi từ trên xuống dưới trong kim tự tháp bộ nhớ (Registers → Cache → RAM → SSD/HDD → Tape): Tốc độ chậm dần (access time tăng), dung lượng lớn dần (capacity tăng), và giá trên mỗi bit rẻ dần (cost per bit giảm)."
    },
    {
      id: 109,
      topic: "Ch.1: Introduction & OS Concepts",
      question: "[FE OSG202] In UNIX/Linux, what does the execve() system call do?",
      options: [
        "Creates a new empty directory",
        "Replaces the current process's memory image (core image) with a new program",
        "Suspends the process until a signal arrives",
        "Terminates the process and returns an exit code"
      ],
      answer: 1,
      explanation: "Sau khi gọi fork() tạo tiến trình con, tiến trình con thường gọi execve() để nạp và thay thế toàn bộ ảnh bộ nhớ hiện tại bằng một chương trình thực thi mới."
    },
    {
      id: 110,
      topic: "Ch.1: Introduction & OS Concepts",
      question: "[FE OSG202] Which of the following Linux shell commands changes the file permissions of 'script.sh' to rwxr-xr-x?",
      options: [
        "chmod 644 script.sh",
        "chmod 755 script.sh",
        "chown 755 script.sh",
        "chmod 777 script.sh"
      ],
      answer: 1,
      explanation: "Quy đổi quyền nhị phân (r=4, w=2, x=1):\n• Owner: rwx = 4+2+1 = 7\n• Group: r-x = 4+0+1 = 5\n• Others: r-x = 4+0+1 = 5\n⇒ Dùng lệnh `chmod 755 script.sh`."
    },

    // ==================== CHƯƠNG 2: PROCESSES, THREADS, IPC & SCHEDULING (16 CÂU) ====================
    {
      id: 201,
      topic: "Ch.2: Processes, Threads & Scheduling",
      question: "[FE OSG202] In the 3-state process model (Running, Ready, Blocked), which of the following state transitions is IMPOSSIBLE?",
      options: [
        "Running → Blocked",
        "Blocked → Ready",
        "Blocked → Running",
        "Running → Ready"
      ],
      answer: 2,
      explanation: "Khi sự kiện I/O hoàn tất, tiến trình ở trạng thái Blocked PHẢI chuyển về hàng đợi Ready trước, rồi mới chờ Scheduler chọn lên Running. Do đó KHÔNG CÓ chuyển đổi trực tiếp Blocked → Running (và cũng không có Ready → Blocked)!"
    },
    {
      id: 202,
      topic: "Ch.2: Processes, Threads & Scheduling",
      question: "[FE OSG202] Which of the following items is PRIVATE (per-thread) rather than shared among all threads in the same process?",
      options: [
        "Global variables",
        "Open files",
        "Address space (Heap & Code)",
        "Stack and Registers (including Program Counter)"
      ],
      answer: 3,
      explanation: "Các luồng (threads) trong cùng 1 tiến trình dùng chung Không gian địa chỉ (Code, Data, Heap), Biến toàn cục và File đang mở; nhưng MỖI luồng có RIÊNG Stack, Registers, Program Counter (PC) và State!"
    },
    {
      id: 203,
      topic: "Ch.2: Processes, Threads & Scheduling",
      question: "[FE OSG202] What is the major disadvantage of User-Level Threads compared to Kernel-Level Threads?",
      options: [
        "Thread switching is very slow because it requires a trap to the kernel",
        "If one thread makes a blocking system call, the entire process (all threads in it) is blocked",
        "User-level threads cannot be implemented on an OS that does not support threads",
        "User-level threads consume much more kernel memory"
      ],
      answer: 1,
      explanation: "Vì Kernel hoàn toàn không biết sự tồn tại của User-Level Threads, nên khi 1 thread gọi blocking system call (như đọc đĩa/bàn phím), Kernel sẽ block TOÀN BỘ tiến trình (tất cả các thread còn lại cũng bị dừng theo!)."
    },
    {
      id: 204,
      topic: "Ch.2: Processes, Threads & Scheduling",
      question: "[FE OSG202 - Tính toán] A computer has enough RAM to hold 4 processes simultaneously. Each process spends 50% of its time waiting for I/O. What is the expected CPU utilization?",
      options: [
        "50%",
        "87.5%",
        "93.75%",
        "75%"
      ],
      answer: 2,
      explanation: "Áp dụng công thức Độ sử dụng CPU đa chương:\n• Số tiến trình n = 4; tỉ lệ chờ I/O p = 0.5.\n• Xác suất cả 4 tiến trình cùng chờ I/O = p⁴ = (0.5)⁴ = 1/16 = 0.0625 (6.25%).\n• CPU Utilization = 1 - p⁴ = 1 - 0.0625 = 0.9375 = 93.75%!"
    },
    {
      id: 205,
      topic: "Ch.2: Processes, Threads & Scheduling",
      question: "[FE OSG202 - Tính toán] Suppose a system has 3 processes in memory, each spending 80% of its time waiting for I/O. What is the CPU utilization?",
      options: [
        "20.0%",
        "48.8%",
        "51.2%",
        "60.0%"
      ],
      answer: 1,
      explanation: "Ta có n = 3 và p = 0.8:\n• CPU Utilization = 1 - pⁿ = 1 - (0.8)³ = 1 - 0.512 = 0.488 = 48.8%!"
    },
    {
      id: 206,
      topic: "Ch.2: Processes, Threads & Scheduling",
      question: "[FE OSG202] A situation where two or more processes read/write shared data and the final result depends on precisely who runs when is called a:",
      options: [
        "Deadlock",
        "Race condition",
        "Thrashing",
        "Page fault"
      ],
      answer: 1,
      explanation: "Định nghĩa chuẩn của Race Condition (Điều kiện tranh chấp): Kết quả cuối cùng phụ thuộc vào thứ tự thực thi của các tiến trình khi cùng thao tác dữ liệu dùng chung."
    },
    {
      id: 207,
      topic: "Ch.2: Processes, Threads & Scheduling",
      question: "[FE OSG202] Which of the following is NOT one of the 4 required conditions for a good solution to the Critical Region problem?",
      options: [
        "No two processes may be simultaneously inside their critical regions.",
        "No assumptions may be made about speeds or the number of CPUs.",
        "No process running outside its critical region may block other processes.",
        "Processes must execute in strict alternating order (Strict Alternation)."
      ],
      answer: 3,
      explanation: "Strict Alternation (luân phiên cứng nhắc) VI PHẠM điều kiện thứ 3 (một tiến trình chậm ở ngoài vùng găng lại chặn tiến trình nhanh muốn vào vùng găng 2 lần liên tiếp!). 4 điều kiện chuẩn gồm: Mutual Exclusion, Không giả định tốc độ/số CPU, Không chặn từ ngoài vùng găng, Không chờ vô hạn."
    },
    {
      id: 208,
      topic: "Ch.2: Processes, Threads & Scheduling",
      question: "[FE OSG202] What is the 'Priority Inversion Problem' that occurs with busy-waiting locks (like TSL)?",
      options: [
        "A high-priority process is busy-waiting for a lock held by a low-priority process, which never gets scheduled to release the lock",
        "Two low-priority processes swap priorities",
        "A process finishes before its arrival time",
        "CPU utilization reaches 100%"
      ],
      answer: 0,
      explanation: "Lỗi đảo ngược ưu tiên (Priority Inversion): Tiến trình ưu tiên thấp L đang giữ khóa thì bị tiến trình ưu tiên cao H chiếm CPU. H vào vòng lặp busy-waiting chờ L nhả khóa, nhưng vì H ưu tiên cao hơn nên L KHÔNG BAO GIỜ được CPU chạy để nhả khóa!"
    },
    {
      id: 209,
      topic: "Ch.2: Processes, Threads & Scheduling",
      question: "[FE OSG202] What happens when a process executes down(S) on a Semaphore S whose current value is 0?",
      options: [
        "S is incremented to 1 and the process continues",
        "The process is put to sleep (blocked) without completing the down operation",
        "The system crashes with a segmentation fault",
        "S becomes -1 and the process immediately enters the critical region"
      ],
      answer: 1,
      explanation: "Theo Tanenbaum: Phép toán nguyên tử down(S) kiểm tra: nếu S > 0 thì giảm S đi 1 và tiếp tục; nếu S = 0 thì tiến trình bị đưa vào trạng thái ngủ (blocked) cho đến khi có tiến trình khác gọi up(S)."
    },
    {
      id: 210,
      topic: "Ch.2: Processes, Threads & Scheduling",
      question: "[FE OSG202] Which synchronization construct is a high-level language feature that guarantees at most ONE process can be active inside it at any instant?",
      options: [
        "Busy-waiting spinlock",
        "Monitor",
        "Pipe",
        "Interrupt mask"
      ],
      answer: 1,
      explanation: "Monitor (do Hoare & Brinch Hansen đề xuất) là cấu trúc mức ngôn ngữ lập trình (như từ khóa synchronized trong Java) đảm bảo trình biên dịch tự động khóa loại trừ tương hỗ để tối đa chỉ 1 tiến trình hoạt động trong Monitor tại một thời điểm."
    },
    {
      id: 211,
      topic: "Ch.2: Processes, Threads & Scheduling",
      question: "[FE OSG202 - Tính toán CPU Scheduling] Four jobs arrive at time 0 with burst times: P1 = 8, P2 = 4, P3 = 4, P4 = 4 (ms). What is the Average Turnaround Time using SJF (Shortest Job First)?",
      options: [
        "11.0 ms",
        "12.0 ms",
        "14.0 ms",
        "10.0 ms"
      ],
      answer: 0,
      explanation: "Sắp xếp các job theo Burst Time tăng dần (SJF): P2(4) → P3(4) → P4(4) → P1(8).\nThời điểm hoàn thành (Completion Time = TAT vì Arrival = 0):\n• P2 xong lúc 4\n• P3 xong lúc 8\n• P4 xong lúc 12\n• P1 xong lúc 20\n⇒ Average Turnaround Time = (4 + 8 + 12 + 20) / 4 = 44 / 4 = 11.0 ms!"
    },
    {
      id: 212,
      topic: "Ch.2: Processes, Threads & Scheduling",
      question: "[FE OSG202 - Tính toán CPU Scheduling] Three processes arrive at time 0 with burst times: P1 = 10, P2 = 5, P3 = 8. Using Round Robin with time quantum q = 4, what is the completion time of P2?",
      options: [
        "9",
        "13",
        "17",
        "15"
      ],
      answer: 2,
      explanation: "Chạy sơ đồ Gantt của Round Robin (q = 4) theo đúng thứ tự hàng đợi Ready:\n• Vòng 1: P1 chạy [0 → 4] (còn 6), P2 chạy [4 → 8] (còn 1), P3 chạy [8 → 12] (còn 4).\n• Vòng 2: P1 chạy [12 → 16] (còn 2), P2 chạy nốt 1 đơn vị ở [16 → 17] ⇒ P2 hoàn thành lúc t = 17!"
    },
    {
      id: 213,
      topic: "Ch.2: Processes, Threads & Scheduling",
      question: "[FE OSG202 - Tính toán CPU Scheduling] Three processes arrive as follows: P1 (Arrival=0, Burst=7), P2 (Arrival=2, Burst=4), P3 (Arrival=4, Burst=1). Using SRTN (Preemptive SJF), what is the Average Waiting Time?",
      options: [
        "2.0",
        "2.33",
        "3.0",
        "4.0"
      ],
      answer: 0,
      explanation: "Chạy SRTN từng mốc thời gian:\n• [0 → 2]: P1 chạy 2 (còn 5). Lúc t=2, P2(4) đến < P1(5) nên P2 chiếm CPU!\n• [2 → 4]: P2 chạy 2 (còn 2). Lúc t=4, P3(1) đến < P2(2) nên P3 chiếm CPU!\n• [4 → 5]: P3 chạy xong lúc 5! (WT_P3 = 5 - 4 - 1 = 0)\n• [5 → 7]: P2 chạy nốt 2, xong lúc 7! (WT_P2 = 7 - 2 - 4 = 1)\n• [7 → 12]: P1 chạy nốt 5, xong lúc 12! (WT_P1 = 12 - 0 - 7 = 5)\n⇒ Average Waiting Time = (5 + 1 + 0) / 3 = 6 / 3 = 2.0!"
    },
    {
      id: 214,
      topic: "Ch.2: Processes, Threads & Scheduling",
      question: "[FE OSG202 - Real-Time Scheduling] A real-time system has 3 periodic events with periods 100ms, 200ms, 500ms, requiring 50ms, 30ms, and 100ms of CPU time respectively. Is this system schedulable?",
      options: [
        "Yes, because ∑ (Cᵢ / Pᵢ) = 0.85 ≤ 1",
        "No, because ∑ (Cᵢ / Pᵢ) = 1.15 > 1",
        "Yes, because ∑ (Cᵢ / Pᵢ) = 0.50 ≤ 1",
        "Cannot be determined"
      ],
      answer: 0,
      explanation: "Điều kiện lập lịch hệ thời gian thực (Real-time schedulability test):\n∑ (Cᵢ / Pᵢ) = 50/100 + 30/200 + 100/500 = 0.50 + 0.15 + 0.20 = 0.85 ≤ 1 ⇒ Hệ thống lập lịch được (Schedulable)!"
    },
    {
      id: 215,
      topic: "Ch.2: Processes, Threads & Scheduling",
      question: "[FE OSG202] In Round Robin scheduling, what happens if the time quantum q is set VERY LARGE (larger than the longest CPU burst)?",
      options: [
        "Context switch overhead becomes extremely high",
        "Round Robin degenerates into FCFS (First-Come First-Served)",
        "Round Robin becomes identical to SJF",
        "Starvation occurs immediately"
      ],
      answer: 1,
      explanation: "• Nếu quantum q quá nhỏ → tốn rất nhiều thời gian cho context switch (làm giảm hiệu suất CPU).\n• Nếu quantum q quá lớn → mọi tiến trình chạy 1 mạch tới xong mà không bị ngắt, khiến Round Robin suy biến thành FCFS!"
    },
    {
      id: 216,
      topic: "Ch.2: Processes, Threads & Scheduling",
      question: "[FE OSG202] Which classic IPC problem models 5 philosophers sitting around a table with 5 forks who alternate between thinking and eating?",
      options: [
        "Producer-Consumer problem",
        "Readers-Writers problem",
        "Dining Philosophers problem",
        "Sleeping Barber problem"
      ],
      answer: 2,
      explanation: "Bài toán 5 triết gia ăn tối (Dining Philosophers — do Dijkstra đặt ra năm 1965) mô hình hóa bài toán cạnh tranh truy cập độc quyền nhiều tài nguyên (5 chiếc dĩa/đũa) dễ dẫn tới Deadlock và Starvation."
    },

    // ==================== CHƯƠNG 3: MEMORY MANAGEMENT & VIRTUAL MEMORY (16 CÂU) ====================
    {
      id: 301,
      topic: "Ch.3: Memory & Virtual Memory",
      question: "[FE OSG202 - Tính toán Paging] A system uses 16-bit virtual addresses and a page size of 4 KB (4096 bytes). If Virtual Page 2 is mapped to Physical Frame 6, what is the physical address corresponding to virtual address 8196?",
      options: [
        "24580",
        "24576",
        "12292",
        "16388"
      ],
      answer: 0,
      explanation: "Giải từng bước dịch địa chỉ Paging:\n1. Page Size = 4096 bytes.\n2. Virtual Page Number = ⌊8196 / 4096⌋ = 2.\n3. Offset = 8196 mod 4096 = 8196 - 8192 = 4.\n4. Tra bảng trang: Page 2 → Frame 6.\n5. Physical Address = Frame × Page Size + Offset = 6 × 4096 + 4 = 24576 + 4 = 24580!"
    },
    {
      id: 302,
      topic: "Ch.3: Memory & Virtual Memory",
      question: "[FE OSG202 - Tính toán Paging] A computer has 32-bit virtual addresses and a 4 KB page size. How many entries are needed in a single-level page table?",
      options: [
        "2¹² (4,096)",
        "2²⁰ (1,048,576 — 1 Million)",
        "2¹⁶ (65,536)",
        "2²⁴ (16 Million)"
      ],
      answer: 1,
      explanation: "• Không gian địa chỉ ảo = 2³² bytes.\n• Kích thước 1 trang = 4 KB = 2¹² bytes (tức 12 bit dùng làm Offset).\n• Số bit cho Page Number = 32 - 12 = 20 bit ⇒ Số mục trong Page Table = 2²⁰ = 1,048,576 entries (khoảng 1 triệu mục)!"
    },
    {
      id: 303,
      topic: "Ch.3: Memory & Virtual Memory",
      question: "[FE OSG202 - Tính toán TLB EAT] A paging system has a TLB access time of 20 ns, main memory access time of 100 ns, and a TLB hit ratio of 80% (0.8). What is the Effective Access Time (EAT)?",
      options: [
        "120 ns",
        "140 ns",
        "160 ns",
        "220 ns"
      ],
      answer: 1,
      explanation: "Áp dụng công thức EAT:\n• Khi TLB Hit (80%): Tốn t_TLB + t_MEM = 20 + 100 = 120 ns.\n• Khi TLB Miss (20%): Tốn t_TLB + 2·t_MEM = 20 + 200 = 220 ns.\n• EAT = 0.8 × 120 + 0.2 × 220 = 96 + 44 = 140 ns!"
    },
    {
      id: 304,
      topic: "Ch.3: Memory & Virtual Memory",
      question: "[FE OSG202 - Tính toán Page Replacement] Given the page reference string: 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5 and 3 page frames (initially empty). How many page faults occur using FIFO?",
      options: [
        "9",
        "10",
        "8",
        "11"
      ],
      answer: 0,
      explanation: "Chạy FIFO với 3 frames (chú ý đây chính là ví dụ kinh điển chứng minh Nghịch lý Belady!):\n1(F):[1] | 2(F):[1,2] | 3(F):[1,2,3] | 4(F, đuổi 1):[4,2,3] | 1(F, đuổi 2):[4,1,3] | 2(F, đuổi 3):[4,1,2] | 5(F, đuổi 4):[5,1,2] | 1(Hit) | 2(Hit) | 3(F, đuổi 1):[5,3,2] | 4(F, đuổi 2):[5,3,4] | 5(Hit).\nTổng cộng: 9 Page Faults! (Đặc biệt: nếu tăng lên 4 frames với chuỗi này, FIFO lại ra tới 10 Page Faults — đó chính là Belady's Anomaly!)."
    },
    {
      id: 305,
      topic: "Ch.3: Memory & Virtual Memory",
      question: "[FE OSG202 - Tính toán Page Replacement] Given the page reference string: 7, 0, 1, 2, 0, 3, 0, 4, 2, 3 and 3 page frames (initially empty). How many page faults occur using LRU (Least Recently Used)?",
      options: [
        "7",
        "8",
        "9",
        "6"
      ],
      answer: 1,
      explanation: "Chạy LRU với 3 frames:\n1. 7 → [7] (Fault 1)\n2. 0 → [7, 0] (Fault 2)\n3. 1 → [7, 0, 1] (Fault 3)\n4. 2 → đuổi 7 → [2, 0, 1] (Fault 4)\n5. 0 → Hit\n6. 3 → lâu nhất chưa dùng là 1 → [2, 0, 3] (Fault 5)\n7. 0 → Hit\n8. 4 → lâu nhất chưa dùng là 2 → [4, 0, 3] (Fault 6)\n9. 2 → lâu nhất chưa dùng là 3 → [4, 0, 2] (Fault 7)\n10. 3 → lâu nhất chưa dùng là 0 → [4, 3, 2] (Fault 8)\nTổng cộng: 8 Page Faults!"
    },
    {
      id: 306,
      topic: "Ch.3: Memory & Virtual Memory",
      question: "[FE OSG202 - Tính toán Memory Allocation] Free memory holes have sizes: 10 KB, 4 KB, 20 KB, 18 KB, 7 KB, 9 KB, 12 KB, 15 KB (in order). Which hole is selected for a 12 KB request by First Fit, Best Fit, and Worst Fit respectively?",
      options: [
        "First Fit: 20 KB | Best Fit: 12 KB | Worst Fit: 20 KB",
        "First Fit: 12 KB | Best Fit: 12 KB | Worst Fit: 20 KB",
        "First Fit: 20 KB | Best Fit: 15 KB | Worst Fit: 18 KB",
        "First Fit: 18 KB | Best Fit: 12 KB | Worst Fit: 20 KB"
      ],
      answer: 0,
      explanation: "Xét yêu cầu 12 KB trên danh sách [10, 4, 20, 18, 7, 9, 12, 15]:\n• First Fit: Quét từ đầu, 10 < 12 (bỏ), 4 < 12 (bỏ), 20 ≥ 12 → Chọn 20 KB!\n• Best Fit: Chọn lỗ nhỏ nhất ≥ 12 → Chọn đúng lỗ 12 KB (vừa khít)!\n• Worst Fit: Chọn lỗ lớn nhất trong danh sách → Chọn 20 KB!"
    },
    {
      id: 307,
      topic: "Ch.3: Memory & Virtual Memory",
      question: "[FE OSG202] In the NRU (Not Recently Used) page replacement algorithm, which class of pages is selected for eviction FIRST?",
      options: [
        "Class 0: Not referenced (R=0), Not modified (M=0)",
        "Class 1: Not referenced (R=0), Modified (M=1)",
        "Class 2: Referenced (R=1), Not modified (M=0)",
        "Class 3: Referenced (R=1), Modified (M=1)"
      ],
      answer: 0,
      explanation: "NRU ưu tiên đuổi trang thuộc lớp nhỏ nhất không rỗng: Class 0 (R=0, M=0: không được dùng gần đây và cũng không bị sửa nên không cần tốn công ghi lại ra đĩa!)."
    },
    {
      id: 308,
      topic: "Ch.3: Memory & Virtual Memory",
      question: "[FE OSG202] What is 'Belady's Anomaly' in virtual memory management?",
      options: [
        "Increasing the page size reduces internal fragmentation",
        "Allocating MORE page frames to a process can actually INCREASE the number of page faults (in FIFO)",
        "Using LRU causes thrashing even with infinite RAM",
        "TLB miss rate increases when TLB size increases"
      ],
      answer: 1,
      explanation: "Nghịch lý Belady xảy ra trong thuật toán thay thế trang FIFO: cấp thêm số khung trang (page frames) nhưng số lỗi trang (page faults) lại tăng lên!"
    },
    {
      id: 309,
      topic: "Ch.3: Memory & Virtual Memory",
      question: "[FE OSG202] Why is Best Fit often WORSE than First Fit in practice?",
      options: [
        "Best Fit cannot allocate memory larger than 4 KB",
        "Best Fit must search the entire list and tends to leave behind many tiny, unusable memory fragments",
        "Best Fit causes Belady's anomaly",
        "Best Fit requires hardware TLB support"
      ],
      answer: 1,
      explanation: "Best Fit vừa chạy chậm hơn (phải quét hết cả danh sách lỗ trống mỗi lần cấp phát), vừa thường để lại hàng loạt mảnh bộ nhớ thừa nhỏ li ti không thể dùng cho tiến trình nào khác!"
    },
    {
      id: 310,
      topic: "Ch.3: Memory & Virtual Memory",
      question: "[FE OSG202] What is the main advantage of an Inverted Page Table (Bảng trang đảo) on 64-bit machines?",
      options: [
        "It eliminates the need for a TLB",
        "Its size is proportional to the number of PHYSICAL page frames rather than the huge virtual address space",
        "It prevents all page faults",
        "It allows variable-sized pages"
      ],
      answer: 1,
      explanation: "Với máy 64-bit, Page Table thường sẽ lớn khổng lồ (hàng triệu GB). Inverted Page Table chỉ lưu ĐÚNG 1 mục cho mỗi Physical Frame trong RAM, giúp tiết kiệm bộ nhớ cực lớn!"
    },
    {
      id: 311,
      topic: "Ch.3: Memory & Virtual Memory",
      question: "[FE OSG202] Which page replacement algorithm uses a circular list of pages and inspects the R (Referenced) bit of the page pointed to by a clock hand?",
      options: [
        "Optimal",
        "Clock Algorithm",
        "FIFO",
        "NFU"
      ],
      answer: 1,
      explanation: "Thuật toán Clock (Đồng hồ) tổ chức các khung trang thành vòng tròn với 1 kim đồng hồ: nếu trang ở kim có R = 0 thì đuổi luôn; nếu R = 1 thì đặt R = 0 rồi xoay kim sang trang kế tiếp."
    },
    {
      id: 312,
      topic: "Ch.3: Memory & Virtual Memory",
      question: "[FE OSG202] What happens when a computer spends almost all of its time paging (swapping pages in and out of disk) and gets very little useful work done?",
      options: [
        "Compaction",
        "Thrashing",
        "Spooling",
        "Deadlock"
      ],
      answer: 1,
      explanation: "Thrashing xảy ra khi tổng Working Set của các tiến trình đang chạy lớn hơn dung lượng RAM vật lý, khiến máy liên tục sinh Page Fault và đọc/ghi đĩa thay vì xử lý công việc."
    },
    {
      id: 313,
      topic: "Ch.3: Memory & Virtual Memory",
      question: "[FE OSG202] Which type of fragmentation occurs in Paging, and which type occurs in Pure Segmentation?",
      options: [
        "Paging: Internal fragmentation | Pure Segmentation: External fragmentation",
        "Paging: External fragmentation | Pure Segmentation: Internal fragmentation",
        "Both suffer only from External fragmentation",
        "Neither suffers from any fragmentation"
      ],
      answer: 0,
      explanation: "• Paging (kích thước trang cố định): Không có phân mảnh ngoài, chỉ có phân mảnh NỘI (Internal fragmentation) ở trang cuối cùng của tiến trình (trung bình lãng phí nửa trang).\n• Pure Segmentation (kích thước đoạn thay đổi): Có phân mảnh NGOÀI (External fragmentation — checkerboarding)."
    },
    {
      id: 314,
      topic: "Ch.3: Memory & Virtual Memory",
      question: "[FE OSG202] In the Aging page replacement algorithm, how is the counter of each page updated at each clock tick?",
      options: [
        "Shifted left by 1 bit and the R bit is added to the rightmost bit",
        "Shifted right by 1 bit and the R bit is added to the leftmost (most significant) bit",
        "Incremented by 1 regardless of the R bit",
        "Reset to 0 on every clock tick"
      ],
      answer: 1,
      explanation: "Thuật toán Aging (xấp xỉ LRU bằng phần mềm): Mỗi nhịp đồng hồ, bộ đếm của mỗi trang được DỊCH PHẢI 1 BIT (chia đôi trọng số quá khứ), sau đó cộng bit R vào BIT TRÁI NHẤT (most significant bit)!"
    },
    {
      id: 315,
      topic: "Ch.3: Memory & Virtual Memory",
      question: "[FE OSG202] What is the 'Working Set' of a process?",
      options: [
        "All pages currently stored on the swap partition",
        "The set of pages that a process is currently using (referenced in the last k memory references)",
        "The list of free memory holes in RAM",
        "The set of processes waiting for I/O"
      ],
      answer: 1,
      explanation: "Working Set (Tập làm việc) của một tiến trình là tập hợp các trang bộ nhớ mà tiến trình đang sử dụng tích cực trong khoảng k lần truy cập gần nhất."
    },
    {
      id: 316,
      topic: "Ch.3: Memory & Virtual Memory",
      question: "[FE OSG202] What is the purpose of the 'Dirty Bit' (Modified bit M) in a Page Table Entry?",
      options: [
        "To indicate whether the page is currently in RAM",
        "To indicate whether the page has been modified in RAM and must be written back to disk before eviction",
        "To protect the page from being read by user programs",
        "To count how many processes share the page"
      ],
      answer: 1,
      explanation: "Bit M (Modified / Dirty bit): Nếu M = 1 (trang đã bị ghi sửa trong RAM), khi bị đuổi ra khỏi RAM thì OS bắt buộc phải ghi lại xuống đĩa (write-back). Nếu M = 0 (trang sạch), chỉ cần bỏ đi luôn mà không tốn thao tác ghi đĩa!"
    },

    // ==================== CHƯƠNG 4: FILE SYSTEMS (10 CÂU) ====================
    {
      id: 401,
      topic: "Ch.4: File Systems",
      question: "[FE OSG202 - Tính toán I-node] A UNIX file system has a 4 KB block size and 4-byte disk block addresses. An i-node contains 10 direct block pointers and 1 single-indirect block pointer. What is the maximum file size?",
      options: [
        "4,136 KB (1,034 blocks)",
        "4,096 KB (1,024 blocks)",
        "1,034 bytes",
        "40 KB"
      ],
      answer: 0,
      explanation: "• Số con trỏ trong 1 indirect block: K = 4096 bytes / 4 bytes = 1,024 con trỏ.\n• Tổng số block dữ liệu tối đa = 10 (direct) + 1,024 (single indirect) = 1,034 blocks.\n• Dung lượng tối đa = 1,034 × 4 KB = 4,136 KB!"
    },
    {
      id: 402,
      topic: "Ch.4: File Systems",
      question: "[FE OSG202] Which file allocation method is ideal for write-once media like CD-ROMs and DVDs where file sizes are known in advance?",
      options: [
        "Linked List Allocation",
        "Contiguous Allocation",
        "I-node Allocation",
        "FAT-32"
      ],
      answer: 1,
      explanation: "Cấp phát liên tục (Contiguous Allocation) lưu file thành 1 khối liền kề nhau — không có vấn đề xóa/mở rộng trên đĩa ghi 1 lần như CD-ROM/DVD và cho tốc độ đọc tuần tự lẫn ngẫu nhiên tối đa!"
    },
    {
      id: 403,
      topic: "Ch.4: File Systems",
      question: "[FE OSG202] What is the primary disadvantage of File Allocation Table (FAT) on very large hard disks?",
      options: [
        "Random access is impossible",
        "The entire FAT table must be kept in main memory (RAM) at all times for good performance",
        "It cannot support subdirectories",
        "It wastes space inside every data block for pointers"
      ],
      answer: 1,
      explanation: "Điểm yếu lớn nhất của FAT trên đĩa dung lượng lớn là toàn bộ bảng FAT phải luôn nằm thường trú trong RAM (tốn hàng trăm MB hoặc hàng GB RAM), trong khi I-node chỉ cần nạp i-node của những file đang mở!"
    },
    {
      id: 404,
      topic: "Ch.4: File Systems",
      question: "[FE OSG202] Which statement correctly distinguishes a Hard Link from a Symbolic (Soft) Link in UNIX/Linux?",
      options: [
        "A hard link can point to a file on a different disk partition, while a symbolic link cannot",
        "A hard link shares the same i-node number as the original file; a symbolic link has its own i-node storing the target's path name",
        "Deleting the original file immediately breaks all hard links",
        "Symbolic links do not consume any disk space or i-node"
      ],
      answer: 1,
      explanation: "• Hard Link trỏ vào CÙNG 1 i-node (cùng 1 phân vùng đĩa), tăng link counter; xóa tên gốc thì link cứng vẫn đọc bình thường.\n• Symbolic Link có i-node riêng chứa đường dẫn (path) tới file đích, trỏ xuyên nhiều phân vùng được nhưng sẽ bị gãy nếu file đích bị xóa."
    },
    {
      id: 405,
      topic: "Ch.4: File Systems",
      question: "[FE OSG202] What is the trade-off of choosing a LARGER disk block size (e.g., 64 KB vs 1 KB) in a file system?",
      options: [
        "Higher disk space efficiency, slower data transfer rate",
        "Faster data transfer rate (better performance), but lower disk space efficiency (more internal fragmentation)",
        "Both space efficiency and performance decrease",
        "Both space efficiency and performance increase"
      ],
      answer: 1,
      explanation: "Quy luật đánh đổi Block Size: Block càng LỚN → đọc/ghi ít thao tác seek hơn nên hiệu năng (data rate) CAO hơn, nhưng các file nhỏ sẽ lãng phí rất nhiều phần thừa trong block (phân mảnh nội cao → hiệu suất dùng dung lượng đĩa GIẢM)."
    },
    {
      id: 406,
      topic: "Ch.4: File Systems",
      question: "[FE OSG202 - Tính toán Bitmap Free Space] A 16 GB disk uses 4 KB blocks. How much space is required to store the free-space Bitmap?",
      options: [
        "512 KB",
        "4 MB",
        "1 MB",
        "64 KB"
      ],
      answer: 0,
      explanation: "• Tổng số block trên đĩa = 16 GB / 4 KB = 2³⁴ / 2¹² = 2²² blocks (4,194,304 blocks).\n• Bitmap dùng 1 BIT cho mỗi block ⇒ Cần 2²² bits = 2²² / 8 bytes = 2¹⁹ bytes = 512 KB!"
    },
    {
      id: 407,
      topic: "Ch.4: File Systems",
      question: "[FE OSG202] What is the primary purpose of a Journaling File System (such as ext4 or NTFS)?",
      options: [
        "To compress all user files automatically",
        "To record metadata changes in a sequential log (journal) before committing them to disk, enabling fast and consistent crash recovery",
        "To eliminate the need for directories",
        "To increase maximum partition size"
      ],
      answer: 1,
      explanation: "Journaling File System ghi lại các thao tác dự kiến vào nhật ký (journal/log) trước khi thực sự sửa cấu trúc đĩa, giúp khôi phục tính nhất quán cực nhanh sau khi mất điện/crash mà không cần chạy `fsck` quét toàn bộ ổ đĩa."
    },
    {
      id: 408,
      topic: "Ch.4: File Systems",
      question: "[FE OSG202] In UNIX, what utility is used to check and repair file system consistency (missing blocks, duplicate blocks, wrong link counts)?",
      options: [
        "grep",
        "fsck",
        "ps",
        "kill"
      ],
      answer: 1,
      explanation: "`fsck` (File System Check) trong UNIX/Linux (tương đương `chkdsk` / `sfc` trong Windows) dùng để quét bảng block & i-node nhằm phát hiện và sửa lỗi thiếu block, trùng block hoặc sai link count."
    },
    {
      id: 409,
      topic: "Ch.4: File Systems",
      question: "[FE OSG202] In a UNIX directory tree, what do the special directory entries '.' and '..' represent?",
      options: [
        "'.' is the root directory; '..' is the home directory",
        "'.' is the current working directory; '..' is the parent directory",
        "'.' is a hidden file; '..' is a symbolic link",
        "'.' is the previous command; '..' is the next command"
      ],
      answer: 1,
      explanation: "Trong hệ thống cây thư mục UNIX/Linux và Windows: `.` đại diện cho thư mục hiện hành (current directory) và `..` đại diện cho thư mục cha (parent directory)."
    },
    {
      id: 410,
      topic: "Ch.4: File Systems",
      question: "[FE OSG202] Where is the Master Boot Record (MBR) located on a traditional hard disk?",
      options: [
        "In the last sector of the disk",
        "In Sector 0 of the disk (containing boot code and the partition table)",
        "Inside the /root directory",
        "Inside the CPU L1 cache"
      ],
      answer: 1,
      explanation: "MBR (Master Boot Record) nằm ở Sector 0 của ổ đĩa cứng, chứa đoạn mã khởi động (boot loader) và bảng phân vùng (Partition Table) chỉ ra phân vùng nào đang active để boot OS."
    },

    // ==================== CHƯƠNG 5: I/O, DISK SCHEDULING & RAID (9 CÂU) ====================
    {
      id: 501,
      topic: "Ch.5: Input/Output, Disks & RAID",
      question: "[FE OSG202] Which I/O mechanism transfers an entire block of data directly between an I/O device and main memory without CPU intervention for each byte, interrupting the CPU only once when done?",
      options: [
        "Programmed I/O (Polling)",
        "Interrupt-Driven I/O",
        "DMA (Direct Memory Access)",
        "Memory-Mapped Busy Waiting"
      ],
      answer: 2,
      explanation: "DMA (Direct Memory Access) giao việc truyền cả khối dữ liệu cho bộ điều khiển DMA thực hiện trực tiếp với RAM; CPU được giải phóng hoàn toàn và chỉ nhận đúng 1 ngắt khi cả khối đã truyền xong!"
    },
    {
      id: 502,
      topic: "Ch.5: Input/Output, Disks & RAID",
      question: "[FE OSG202] What is the correct order of the 4 I/O Software Layers from BOTTOM (closest to hardware) to TOP (closest to user)?",
      options: [
        "User-space I/O → Device Drivers → Device-Independent I/O → Interrupt Handlers",
        "Interrupt Handlers → Device Drivers → Device-Independent I/O Software → User-Space I/O Software",
        "Device Drivers → Interrupt Handlers → User-Space I/O → Device-Independent I/O",
        "Interrupt Handlers → Device-Independent I/O → Device Drivers → User-Space I/O"
      ],
      answer: 1,
      explanation: "Thứ tự chuẩn 4 tầng phần mềm I/O (Tanenbaum Ch.5) từ dưới lên trên:\n1. Interrupt Handlers (Xử lý ngắt)\n2. Device Drivers (Trình điều khiển thiết bị)\n3. Device-Independent OS Software (Phần mềm I/O độc lập thiết bị)\n4. User-Space I/O Software (Thư viện người dùng, Spooling)."
    },
    {
      id: 503,
      topic: "Ch.5: Input/Output, Disks & RAID",
      question: "[FE OSG202 - Tính toán Disk Scheduling] A disk arm is currently at cylinder 11. Pending requests are at cylinders: 1, 36, 16, 34, 9, 12. What is the total arm movement (in cylinders) using SSF / SSTF (Shortest Seek First)?",
      options: [
        "111 cylinders",
        "61 cylinders",
        "60 cylinders",
        "46 cylinders"
      ],
      answer: 1,
      explanation: "Chạy SSF/SSTF (luôn chọn cylinder gần nhất) bắt đầu từ 11:\n• 11 → 12 (đi 1)\n• 12 → 9 (đi 3)\n• 9 → 16 (đi 7)\n• 16 → 1 (khoảng cách 15) vs 16 → 34 (khoảng cách 18) ⇒ chọn 1 (đi 15)!\n• 1 → 34 (đi 33)\n• 34 → 36 (đi 2)\n⇒ Tổng quãng đường = 1 + 3 + 7 + 15 + 33 + 2 = 61 cylinders! (Đúng ví dụ kinh điển trong sách Tanenbaum!)."
    },
    {
      id: 504,
      topic: "Ch.5: Input/Output, Disks & RAID",
      question: "[FE OSG202 - Tính toán Disk Scheduling] Using the same scenario (Head starts at cylinder 11, moving UPWARD; pending requests: 1, 36, 16, 34, 9, 12), what is the total arm movement using the Elevator (LOOK/SCAN) algorithm?",
      options: [
        "61 cylinders",
        "60 cylinders",
        "111 cylinders",
        "50 cylinders"
      ],
      answer: 1,
      explanation: "Chạy thuật toán Elevator (Thang máy — đang đi LÊN từ 11):\n• Đi lên phục vụ các yêu cầu ≥ 11: 11 → 12 (1) → 16 (4) → 34 (18) → 36 (2)  [Tổng lượt lên = 36 - 11 = 25].\n• Hết yêu cầu phía trên, đảo chiều đi xuống phục vụ: 36 → 9 (27) → 1 (8)  [Tổng lượt xuống = 36 - 1 = 35].\n⇒ Tổng quãng đường = 25 + 35 = 60 cylinders!"
    },
    {
      id: 505,
      topic: "Ch.5: Input/Output, Disks & RAID",
      question: "[FE OSG202] Which RAID level distributes parity blocks evenly across ALL drives in the array to avoid the single parity-drive bottleneck of RAID 4?",
      options: [
        "RAID 0",
        "RAID 1",
        "RAID 5",
        "RAID 2"
      ],
      answer: 2,
      explanation: "RAID 5 phân tán đều khối parity xoay vòng trên tất cả các ổ đĩa (khắc phục điểm nghẽn cổ chai ở ổ parity cố định của RAID 4) và chịu hỏng được 1 ổ bất kỳ."
    },
    {
      id: 506,
      topic: "Ch.5: Input/Output, Disks & RAID",
      question: "[FE OSG202] Which RAID level provides NO fault tolerance (if any single disk fails, all data is lost) and is used purely for maximum striping performance?",
      options: [
        "RAID 0",
        "RAID 1",
        "RAID 5",
        "RAID 6"
      ],
      answer: 0,
      explanation: "RAID 0 (Striping) không lưu bất kỳ dữ liệu dự phòng hay parity nào — hỏng 1 ổ là mất sạch dữ liệu của cả mảng, nhưng cho tốc độ đọc ghi tối đa."
    },
    {
      id: 507,
      topic: "Ch.5: Input/Output, Disks & RAID",
      question: "[FE OSG202] Which of the following is an example of a Character Device (as opposed to a Block Device)?",
      options: [
        "Hard Disk Drive (HDD)",
        "USB Flash Drive",
        "Keyboard / Printer / Network Interface",
        "CD-ROM / DVD"
      ],
      answer: 2,
      explanation: "• Block device: Ổ đĩa cứng, SSD, USB, CD-ROM (đọc ghi theo từng block có địa chỉ, hỗ trợ seek).\n• Character device: Bàn phím, chuột, máy in, card mạng (truyền/nhận dòng ký tự nối tiếp, không có địa chỉ block để seek)."
    },
    {
      id: 508,
      topic: "Ch.5: Input/Output, Disks & RAID",
      question: "[FE OSG202] Which component of disk access time is typically the LARGEST (slowest) on a traditional magnetic hard disk?",
      options: [
        "Transfer time",
        "Seek time (moving the disk arm to the right cylinder)",
        "Controller register decoding time",
        "DMA bus arbitration time"
      ],
      answer: 1,
      explanation: "Trên ổ đĩa từ cơ học (HDD), Seek time (thời gian di chuyển cánh tay cơ học tới đúng track/cylinder) thường chiếm phần lớn nhất (5–10 ms), lâu hơn nhiều so với rotational delay và transfer time."
    },
    {
      id: 509,
      topic: "Ch.5: Input/Output, Disks & RAID",
      question: "[FE OSG202] Which RAID level can survive the simultaneous failure of ANY TWO disks?",
      options: [
        "RAID 0",
        "RAID 4",
        "RAID 5",
        "RAID 6"
      ],
      answer: 3,
      explanation: "RAID 6 sử dụng 2 khối parity độc lập phân tán trên tối thiểu 4 ổ đĩa, giúp hệ thống vẫn sống sót ngay cả khi hỏng đồng thời 2 ổ bất kỳ."
    },

    // ==================== CHƯƠNG 6: DEADLOCKS & BANKER'S ALGORITHM (9 CÂU) ====================
    {
      id: 601,
      topic: "Ch.6: Deadlocks & Banker's Algorithm",
      question: "[FE OSG202] Which of the following is NOT one of the four Coffman conditions required for a deadlock to occur?",
      options: [
        "Mutual Exclusion",
        "Hold and Wait",
        "No Preemption",
        "Starvation / Priority Inversion"
      ],
      answer: 3,
      explanation: "4 điều kiện Coffman bắt buộc để xảy ra Deadlock là: (1) Mutual Exclusion, (2) Hold and Wait, (3) No Preemption, và (4) Circular Wait. Starvation không nằm trong 4 điều kiện Coffman."
    },
    {
      id: 602,
      topic: "Ch.6: Deadlocks & Banker's Algorithm",
      question: "[FE OSG202] How is the 'Circular Wait' condition prevented in Deadlock Prevention?",
      options: [
        "By spooling all printers",
        "By imposing a global numerical ordering on all resource types and requiring processes to request resources strictly in increasing order",
        "By using the Ostrich algorithm",
        "By killing all processes every hour"
      ],
      answer: 1,
      explanation: "Cách hiệu quả nhất để phá bỏ điều kiện Circular Wait là đánh số thứ tự toàn cục cho tất cả các tài nguyên và quy định mọi tiến trình chỉ được yêu cầu tài nguyên theo thứ tự số TĂNG DẦN (không bao giờ tạo thành vòng khép kín được!)."
    },
    {
      id: 603,
      topic: "Ch.6: Deadlocks & Banker's Algorithm",
      question: "[FE OSG202] What strategy for dealing with deadlocks is actually used by most general-purpose operating systems like UNIX, Linux, and Windows?",
      options: [
        "Banker's Algorithm on every malloc()",
        "The Ostrich Algorithm (ignore the problem altogether)",
        "Strict global resource numbering for all files",
        "Rolling back every process every second"
      ],
      answer: 1,
      explanation: "Hầu hết các hệ điều hành phổ thông (Linux, Windows, macOS) dùng Thuật toán Đà điểu (Ostrich Algorithm — lờ đi không xử lý) vì chi phí hiệu năng để kiểm tra deadlock liên tục đắt hơn nhiều so với rủi ro hiếm khi xảy ra."
    },
    {
      id: 604,
      topic: "Ch.6: Deadlocks & Banker's Algorithm",
      question: "[FE OSG202 - Tính toán Banker's Algorithm] A system has 10 units of a single resource. Processes A, B, C have (Allocated / Max): A=(3/9), B=(2/4), C=(2/7). Currently Available = 3. Is this state SAFE? If yes, what is a Safe Sequence?",
      options: [
        "SAFE — Safe sequence: <B, C, A>",
        "SAFE — Safe sequence: <A, B, C>",
        "UNSAFE — No safe sequence exists",
        "SAFE — Safe sequence: <C, B, A>"
      ],
      answer: 0,
      explanation: "Tính Need = Max - Allocated:\n• Need(A) = 9 - 3 = 6\n• Need(B) = 4 - 2 = 2\n• Need(C) = 7 - 2 = 5\nĐang có Available = 3:\n1. Chỉ có Need(B) = 2 ≤ 3 ⇒ Chạy B trước! B xong nhả lại 2 ⇒ Available = 3 + 2 = 5.\n2. Tiếp theo Need(C) = 5 ≤ 5 ⇒ Chạy C! C xong nhả lại 2 ⇒ Available = 5 + 2 = 7.\n3. Cuối cùng Need(A) = 6 ≤ 7 ⇒ Chạy A! A xong nhả lại 3 ⇒ Available = 10.\n⇒ Trạng thái AN TOÀN (SAFE) với chuỗi <B, C, A>!"
    },
    {
      id: 605,
      topic: "Ch.6: Deadlocks & Banker's Algorithm",
      question: "[FE OSG202 - Tính toán Deadlock Minimum Resources] A system has 3 processes, and each process needs at most 4 units of resource R to complete. What is the MINIMUM number of units of R required to GUARANTEE that Deadlock can NEVER occur?",
      options: [
        "9",
        "10",
        "11",
        "12"
      ],
      answer: 1,
      explanation: "MẸO CÔNG THỨC 3 GIÂY (Áp dụng Nguyên lý Chuồng bồ câu cho Deadlock):\n• Nếu mỗi tiến trình đều ôm tối đa (Max - 1) = 3 tài nguyên thì 3 tiến trình ôm hết 3 × 3 = 9 tài nguyên → vẫn có nguy cơ deadlock!\n• Chỉ cần thêm ĐÚNG 1 tài nguyên nữa thì chắc chắn có ít nhất 1 tiến trình đủ 4 tài nguyên để chạy xong rồi nhả hết cho các tiến trình còn lại!\n⇒ Công thức vàng: R_min = ∑ (Max_i - 1) + 1 = 3 × (4 - 1) + 1 = 10 tài nguyên!"
    },
    {
      id: 606,
      topic: "Ch.6: Deadlocks & Banker's Algorithm",
      question: "[FE OSG202] Which statement about SAFE vs UNSAFE states in Banker's Algorithm is TRUE?",
      options: [
        "Every unsafe state is already deadlocked",
        "An unsafe state does NOT necessarily mean deadlock has occurred; it means the OS can no longer guarantee that deadlock will be avoided",
        "A safe state can still lead to deadlock even if the OS follows the safe sequence",
        "Banker's algorithm does not require knowing the maximum resource needs in advance"
      ],
      answer: 1,
      explanation: "Câu lý thuyết cực hay bẫy: Trạng thái Unsafe CHƯA chắc là đã Deadlock (tiến trình có thể tự trả tài nguyên trước khi đòi mức Max), nhưng OS không còn đảm bảo tránh được Deadlock nữa. Nhược điểm lớn của Banker là phải biết trước Max resource needs của mọi tiến trình!"
    },
    {
      id: 607,
      topic: "Ch.6: Deadlocks & Banker's Algorithm",
      question: "[FE OSG202] In a Resource Allocation Graph where EVERY resource type has only ONE instance, a cycle in the graph is:",
      options: [
        "Necessary, but NOT sufficient for deadlock",
        "Both necessary AND sufficient for deadlock",
        "Neither necessary nor sufficient for deadlock",
        "Always an indication of starvation only"
      ],
      answer: 1,
      explanation: "• Nếu mỗi loại tài nguyên chỉ có ĐÚNG 1 thực thể (single instance): Tồn tại chu trình (cycle) ⇔ CHẮC CHẮN có Deadlock (điều kiện cần và đủ)!\n• Nếu loại tài nguyên có NHIỀU thực thể (multiple instances): Tồn tại chu trình chỉ là điều kiện CẦN, chưa đủ để kết luận có Deadlock!"
    },
    {
      id: 608,
      topic: "Ch.6: Deadlocks & Banker's Algorithm",
      question: "[FE OSG202] What is the difference between Deadlock and Livelock?",
      options: [
        "In Deadlock, processes are blocked and do nothing; in Livelock, processes continuously run/change state (e.g., politely yielding resources) without making any forward progress",
        "Livelock only occurs in file systems",
        "Deadlock consumes 100% CPU while Livelock consumes 0% CPU",
        "There is no difference"
      ],
      answer: 0,
      explanation: "• Deadlock: Các tiến trình bị block đứng yên hoàn toàn, chờ nhau mãi mãi.\n• Livelock: Các tiến trình vẫn chạy (không bị block), liên tục thay đổi trạng thái (VD: 2 người đi ngược chiều cứ nhường nhau cùng sang trái rồi cùng sang phải) nhưng vẫn không tiến thêm được bước nào!"
    },
    {
      id: 609,
      topic: "Ch.6: Deadlocks & Banker's Algorithm",
      question: "[FE OSG202] Which type of resource can be taken away from a process owning it with no ill effects (such as Main Memory)?",
      options: [
        "Nonpreemptable resource",
        "Preemptable resource",
        "Deadlocked resource",
        "Virtual resource"
      ],
      answer: 1,
      explanation: "Preemptable resource (tài nguyên có thể trưng dụng, VD: RAM, CPU) có thể tạm thu hồi khỏi tiến trình mà không gây hỏng việc (như swap RAM ra đĩa). Ngược lại, máy in hay ổ ghi DVD là Nonpreemptable resource."
    },

    // ==================== ĐỀ FE OSG202 CÁC MÙA TRƯỚC (FPT QUESTION BANK — 30 CÂU THẬT) ====================
    {
      id: 701,
      topic: "🏆 Đề FE OSG202 Các Mùa Trước (FPT Bank)",
      question: "[FPT OSG202 Bank - qn=1] A CPU may have multiple execution units, so that it can carry out multiple instructions at the same time. This architecture is called:",
      options: [
        "Pipeline",
        "Superscalar",
        "Multiprogramming",
        "Time-sharing"
      ],
      answer: 1,
      explanation: "Kiến trúc Superscalar có nhiều đơn vị thực thi (multiple execution units) bên trong 1 nhân CPU, cho phép nạp, giải mã và thực thi nhiều lệnh cùng lúc trong một chu kỳ xung nhịp."
    },
    {
      id: 702,
      topic: "🏆 Đề FE OSG202 Các Mùa Trước (FPT Bank)",
      question: "[FPT OSG202 Bank - qn=2] The four main structural elements of a computer system are:",
      options: [
        "Processor, Main Memory, I/O Modules, System Bus",
        "CPU, Monitor, Keyboard, Mouse",
        "Kernel, Shell, File System, Drivers",
        "Registers, Cache, RAM, Hard Disk"
      ],
      answer: 0,
      explanation: "4 thành phần cấu trúc chính của một hệ thống máy tính gồm: Processor (CPU), Main Memory (RAM), I/O Modules và System Bus."
    },
    {
      id: 703,
      topic: "🏆 Đề FE OSG202 Các Mùa Trước (FPT Bank)",
      question: "[FPT OSG202 Bank - qn=3] Which of the following instructions should be ALLOWED in User Mode?",
      options: [
        "Disable all interrupts",
        "Set the time-of-day clock",
        "Read the time-of-day clock",
        "Change the memory map (Page Table pointer)"
      ],
      answer: 2,
      explanation: "• Đọc giờ hệ thống (Read the time-of-day clock) là thao tác an toàn nên ĐƯỢC PHÉP chạy ở User Mode.\n• Các lệnh đặc quyền như đặt giờ (Set clock), tắt ngắt, đổi bảng trang bắt buộc chỉ được chạy ở Kernel Mode!"
    },
    {
      id: 704,
      topic: "🏆 Đề FE OSG202 Các Mùa Trước (FPT Bank)",
      question: "[FPT OSG202 Bank - qn=5] Information that must be saved prior to the processor transferring control to the interrupt handler routine includes:",
      options: [
        "Only the Stack Pointer",
        "PSW (Program Status Word) and PC (Program Counter)",
        "Only the Base and Limit registers",
        "The entire hard disk cache"
      ],
      answer: 1,
      explanation: "Trước khi CPU chuyển quyền điều khiển sang trình xử lý ngắt (interrupt handler), phần cứng bắt buộc phải lưu lại tối thiểu PSW (Program Status Word) và PC (Program Counter) lên stack để sau khi xử lý xong có thể quay lại chạy tiếp đúng lệnh cũ!"
    },
    {
      id: 705,
      topic: "🏆 Đề FE OSG202 Các Mùa Trước (FPT Bank)",
      question: "[FPT OSG202 Bank - qn=7] What is the main characteristic of a Real-Time Operating System (RTOS)?",
      options: [
        "High throughput for batch jobs",
        "Time is a key parameter (strict deadlines must be met)",
        "Maximum disk storage efficiency",
        "Graphical user interface priority"
      ],
      answer: 1,
      explanation: "Đặc trưng cốt lõi nhất của hệ điều hành thời gian thực (RTOS) là thời gian (Time) là tham số then chốt — các tác vụ phải hoàn thành đúng hạn chót (deadline)."
    },
    {
      id: 706,
      topic: "🏆 Đề FE OSG202 Các Mùa Trước (FPT Bank)",
      question: "[FPT OSG202 Bank - qn=8] Which of the following statements is NOT correct about System Calls?",
      options: [
        "System calls provide an interface to the services made available by an OS",
        "System calls usually involve a switch from User Mode to Kernel Mode via TRAP",
        "In terms of performance, using system calls is better (faster) than using procedure calls",
        "POSIX defines a standard set of system calls for UNIX-like systems"
      ],
      answer: 2,
      explanation: "SAI! Về mặt hiệu năng, gọi System Call CHẬM HƠN NHIỀU so với gọi hàm thường (procedure call) vì System Call phải thực hiện chuyển ngữ cảnh từ User Mode sang Kernel Mode (TRAP) và kiểm tra bảo mật."
    },
    {
      id: 707,
      topic: "🏆 Đề FE OSG202 Các Mùa Trước (FPT Bank)",
      question: "[FPT OSG202 Bank - qn=11] What is the 'sequential processes' concept?",
      options: [
        "Multiple threads running simultaneously inside one process",
        "No concurrency inside a process; everything happens sequentially",
        "Processes executed strictly in alphabetical order",
        "A process that cannot perform I/O operations"
      ],
      answer: 1,
      explanation: "Khái niệm tiến trình tuần tự (sequential process): bên trong một tiến trình đơn luồng không có sự đồng thời (no concurrency), các câu lệnh thực thi tuần tự từng lệnh một."
    },
    {
      id: 708,
      topic: "🏆 Đề FE OSG202 Các Mùa Trước (FPT Bank)",
      question: "[FPT OSG202 Bank - qn=13] How many percent of the CPU time is WASTED when a computer system has enough room to hold two programs and these programs are idle waiting for I/O half the time?",
      options: [
        "50%",
        "25%",
        "75%",
        "12.5%"
      ],
      answer: 1,
      explanation: "⚠️ ĐỌC KỸ CHỮ 'WASTED' (Bị lãng phí)!\n• Số chương trình n = 2; tỉ lệ chờ I/O p = 0.5.\n• Tỉ lệ CPU BỊ LÃNG PHÍ (cả 2 cùng chờ I/O) = pⁿ = (0.5)² = 0.25 = 25%!\n• (Còn nếu hỏi CPU Utilization mới là 1 - pⁿ = 75%)."
    },
    {
      id: 709,
      topic: "🏆 Đề FE OSG202 Các Mùa Trước (FPT Bank)",
      question: "[FPT OSG202 Bank - qn=14] According to Tanenbaum, how many main ways can Threads be implemented?",
      options: [
        "1",
        "2",
        "3 (User space, Kernel space, and Hybrid implementation)",
        "4"
      ],
      answer: 2,
      explanation: "Theo Tanenbaum (Ch.2), có 3 cách triển khai Threads: (1) Trong User Space, (2) Trong Kernel Space, và (3) Kết hợp (Hybrid implementation)."
    },
    {
      id: 710,
      topic: "🏆 Đề FE OSG202 Các Mùa Trước (FPT Bank)",
      question: "[FPT OSG202 Bank - qn=15] The 'Critical Region' (Critical Section) concept used in Interprocess Communication is:",
      options: [
        "A protected area of the hard disk reserved for the OS",
        "A part of the program where shared memory / shared resources are accessed",
        "A hardware register inside the CPU",
        "The area of RAM storing the interrupt vector table"
      ],
      answer: 1,
      explanation: "Vùng găng (Critical Region / Critical Section) là đoạn mã trong chương trình có truy cập vào bộ nhớ dùng chung hoặc tài nguyên dùng chung."
    },
    {
      id: 711,
      topic: "🏆 Đề FE OSG202 Các Mùa Trước (FPT Bank)",
      question: "[FPT OSG202 Bank - qn=16] Which of the following is a HARDWARE instruction solution to the Critical Region problem?",
      options: [
        "Peterson's algorithm",
        "TSL (Test and Set Lock)",
        "Monitor",
        "Message Passing"
      ],
      answer: 1,
      explanation: "TSL (Test and Set Lock) và XCHG là các lệnh phần cứng nguyên tử (atomic hardware instructions) khóa bus bộ nhớ để giải quyết bài toán Critical Region."
    },
    {
      id: 712,
      topic: "🏆 Đề FE OSG202 Các Mùa Trước (FPT Bank)",
      question: "[FPT OSG202 Bank - qn=20] The First-Come, First-Served (FCFS) CPU scheduling algorithm is fine for most ____ systems.",
      options: [
        "Interactive",
        "Real-time",
        "Batch",
        "Embedded"
      ],
      answer: 2,
      explanation: "Thuật toán FCFS (không trưng dụng) phù hợp cho các hệ thống xử lý theo lô (Batch systems), không thích hợp cho hệ tương tác (interactive) vì thời gian phản hồi kém."
    },
    {
      id: 713,
      topic: "🏆 Đề FE OSG202 Các Mùa Trước (FPT Bank)",
      question: "[FPT OSG202 Bank - qn=21] Five batch jobs A through E arrive at almost the same time with estimated running times of 8, 6, 2, 10, and 4 minutes. Determine the AVERAGE WAITING TIME for SJF (Shortest Job First) scheduling.",
      options: [
        "8 minutes",
        "14 minutes",
        "6 minutes",
        "10 minutes"
      ],
      answer: 0,
      explanation: "Sắp xếp theo SJF tăng dần: 2, 4, 6, 8, 10.\nThời gian chờ (Waiting Time) của từng job:\n• Job 2: chờ 0\n• Job 4: chờ 2\n• Job 6: chờ 2 + 4 = 6\n• Job 8: chờ 6 + 6 = 12\n• Job 10: chờ 12 + 8 = 20\n⇒ Average Waiting Time = (0 + 2 + 6 + 12 + 20) / 5 = 40 / 5 = 8 minutes!"
    },
    {
      id: 714,
      topic: "🏆 Đề FE OSG202 Các Mùa Trước (FPT Bank)",
      question: "[FPT OSG202 Bank - qn=23] Which of the following is true about Cache in the memory hierarchy?",
      options: [
        "Large amount of slow, cheap memory",
        "Small amount of fast, expensive memory",
        "Non-volatile secondary storage",
        "Slower than main RAM"
      ],
      answer: 1,
      explanation: "Cache (L1, L2, L3) là bộ nhớ dung lượng nhỏ, tốc độ cực nhanh và chi phí đắt nằm giữa thanh ghi CPU và RAM."
    },
    {
      id: 715,
      topic: "🏆 Đề FE OSG202 Các Mùa Trước (FPT Bank)",
      question: "[FPT OSG202 Bank - qn=24] Which of the following is a standard method to keep track of free and allocated memory usage?",
      options: [
        "Only bitmaps",
        "Only linked lists",
        "Both memory management with bitmaps and memory management with linked lists",
        "Only inverted page tables"
      ],
      answer: 2,
      explanation: "Theo Tanenbaum (Ch.3), có 2 cách cơ bản theo dõi vùng nhớ trống/đã cấp phát: dùng Bitmaps và dùng Linked Lists (danh sách liên kết các đoạn P và H)."
    },
    {
      id: 716,
      topic: "🏆 Đề FE OSG202 Các Mùa Trước (FPT Bank)",
      question: "[FPT OSG202 Bank - qn=26] One of the most important innovations of Demand Paging was that it made ____ feasible.",
      options: [
        "Batch processing",
        "Virtual memory",
        "Contiguous file allocation",
        "DMA"
      ],
      answer: 1,
      explanation: "Phân trang theo yêu cầu (Demand Paging — chỉ nạp trang vào RAM khi CPU thực sự cần dùng tới) là nền tảng giúp Bộ nhớ ảo (Virtual Memory) trở nên khả thi."
    },
    {
      id: 717,
      topic: "🏆 Đề FE OSG202 Các Mùa Trước (FPT Bank)",
      question: "[FPT OSG202 Bank - qn=27] Which of these statements about an Inverted Page Table is TRUE?",
      options: [
        "There is one entry per virtual page per process",
        "An entry contains the pair (process, virtual page) mapped into the corresponding physical page frame",
        "It uses more RAM than a traditional page table on 64-bit systems",
        "It cannot be used with a TLB"
      ],
      answer: 1,
      explanation: "Bảng trang đảo (Inverted Page Table) có đúng 1 mục cho mỗi khung trang vật lý trong RAM, mỗi mục lưu cặp (Process ID, Virtual Page) đang chiếm giữ khung trang đó."
    },
    {
      id: 718,
      topic: "🏆 Đề FE OSG202 Các Mùa Trước (FPT Bank)",
      question: "[FPT OSG202 Bank - qn=28] If a logical address space has 64 pages and the page size is 2048 words, what is the length of a logical address?",
      options: [
        "16 bits",
        "17 bits",
        "18 bits",
        "15 bits"
      ],
      answer: 1,
      explanation: "• 64 pages = 2⁶ ⇒ cần 6 bits cho Page Number.\n• Page size = 2048 words = 2¹¹ ⇒ cần 11 bits cho Offset.\n⇒ Tổng độ dài địa chỉ logic = 6 + 11 = 17 bits!"
    },
    {
      id: 719,
      topic: "🏆 Đề FE OSG202 Các Mùa Trước (FPT Bank)",
      question: "[FPT OSG202 Bank - qn=29] A system uses 32-bit virtual addresses. If the page size is 4 KB and each page table entry occupies 4 bytes, what is the size of a single-level page table?",
      options: [
        "1 MB",
        "2 MB",
        "4 MB",
        "8 MB"
      ],
      answer: 2,
      explanation: "• Số trang ảo = 2³² / 4 KB = 2³² / 2¹² = 2²⁰ entries (1 triệu mục).\n• Mỗi mục tốn 4 bytes ⇒ Kích thước Page Table = 2²⁰ × 4 bytes = 4 MB!"
    },
    {
      id: 720,
      topic: "🏆 Đề FE OSG202 Các Mùa Trước (FPT Bank)",
      question: "[FPT OSG202 Bank - qn=30] Which of the following statements is INCORRECT about the Translation Lookaside Buffer (TLB)?",
      options: [
        "TLB is a small, fast hardware cache inside the MMU",
        "A TLB hit avoids accessing the page table in main memory",
        "A TLB miss implies a disk operation will necessarily follow",
        "TLB entries contain virtual page numbers and corresponding page frame numbers"
      ],
      answer: 2,
      explanation: "SAI! Một TLB Miss KHÔNG đồng nghĩa với phải đọc ổ đĩa cứng! Khi TLB Miss, MMU chỉ cần đọc bảng Page Table nằm trong RAM; CHỈ khi trang đó không có trong RAM (Page Fault) thì mới phải đọc từ đĩa cứng!"
    },
    {
      id: 721,
      topic: "🏆 Đề FE OSG202 Các Mùa Trước (FPT Bank)",
      question: "[FPT OSG202 Bank - qn=36] ____ is a specialized write command for existing data files that allows adding new data strictly to the end of the file.",
      options: [
        "Seek",
        "Append",
        "Truncate",
        "Rename"
      ],
      answer: 1,
      explanation: "Phép toán `Append` là phiên bản hạn chế của `Write`, chỉ cho phép ghi nối thêm dữ liệu vào cuối file hiện có."
    },
    {
      id: 722,
      topic: "🏆 Đề FE OSG202 Các Mùa Trước (FPT Bank)",
      question: "[FPT OSG202 Bank - qn=38] A disk can be divided into one or more partitions. The very first block of EVERY partition is called the:",
      options: [
        "Superblock",
        "Boot block",
        "I-node block",
        "Root directory"
      ],
      answer: 1,
      explanation: "Cấu trúc chuẩn của mỗi phân vùng đĩa (partition) theo Tanenbaum (Ch.4): [Boot block] → [Superblock] → [Free space mgmt] → [I-nodes] → [Root dir] → [Files and directories]. Vậy block đầu tiên của mỗi partition là Boot block!"
    },
    {
      id: 723,
      topic: "🏆 Đề FE OSG202 Các Mùa Trước (FPT Bank)",
      question: "[FPT OSG202 Bank - qn=42] What is the maximum partition size in FAT-32 (which uses 28-bit block addresses) if the block size is 4 KB?",
      options: [
        "256 GB",
        "512 GB",
        "1 TB",
        "4 TB"
      ],
      answer: 2,
      explanation: "Dù tên là FAT-32 nhưng thực chất chỉ dùng 28 bits để đánh địa chỉ block (4 bit cao để dự phòng).\n⇒ Max Partition Size = 2²⁸ blocks × 4 KB = 2²⁸ × 2¹² bytes = 2⁴⁰ bytes = 1 TB!"
    },
    {
      id: 724,
      topic: "🏆 Đề FE OSG202 Các Mùa Trước (FPT Bank)",
      question: "[FPT OSG202 Bank - qn=46] Which of the following statements is NOT correct about DMA (Direct Memory Access)?",
      options: [
        "DMA transfers data blocks directly between I/O devices and main memory",
        "DMA reduces the number of interrupts the CPU must handle",
        "The DMA controller is usually faster than the CPU",
        "DMA may use cycle stealing to access the memory bus"
      ],
      answer: 2,
      explanation: "SAI! Bộ điều khiển DMA KHÔNG nhanh hơn CPU — ngược lại, CPU thường nhanh hơn DMA controller rất nhiều, nhưng dùng DMA giúp giải phóng CPU đi làm các tiến trình khác thay vì ngồi chờ I/O!"
    },
    {
      id: 725,
      topic: "🏆 Đề FE OSG202 Các Mùa Trước (FPT Bank)",
      question: "[FPT OSG202 Bank - qn=47] An interrupt that leaves the machine in a well-defined state (all instructions before PC completed, none after PC started) is called a(n):",
      options: [
        "Imprecise interrupt",
        "Precise interrupt",
        "Masked interrupt",
        "Spurious interrupt"
      ],
      answer: 1,
      explanation: "Precise interrupt (Ngắt chính xác) để lại máy tính ở trạng thái xác định rõ ràng (PC lưu tại vị trí xác định, mọi lệnh trước PC đã xong hoàn toàn, chưa lệnh nào sau PC được thực thi)."
    },
    {
      id: 726,
      topic: "🏆 Đề FE OSG202 Các Mùa Trước (FPT Bank)",
      question: "[FPT OSG202 Bank - qn=50] Each I/O device attached to a computer comes with a device-specific program called a ____ that facilitates communication between the device and the OS.",
      options: [
        "Interrupt vector",
        "Device driver",
        "Spooler",
        "Memory mapper"
      ],
      answer: 1,
      explanation: "Device driver (Trình điều khiển thiết bị) là phần mềm chuyên biệt cho từng loại phần cứng, đóng vai trò cầu nối giữa phần cứng và tầng Device-Independent của Hệ điều hành."
    },
    {
      id: 727,
      topic: "🏆 Đề FE OSG202 Các Mùa Trước (FPT Bank)",
      question: "[FPT OSG202 Bank - qn=51] On a magnetic hard disk platter, each concentric circle is called a ____.",
      options: [
        "Sector",
        "Track",
        "Cylinder",
        "Cluster"
      ],
      answer: 1,
      explanation: "• Mỗi vòng tròn đồng tâm trên một mặt đĩa là 1 Track.\n• Mỗi Track chia thành các cung gọi là Sector.\n• Tập hợp các Track cùng bán kính nằm chồng lên nhau qua nhiều mặt đĩa gọi là Cylinder."
    },
    {
      id: 728,
      topic: "🏆 Đề FE OSG202 Các Mùa Trước (FPT Bank)",
      question: "[FPT OSG202 Bank] In Memory-Mapped I/O, how does the CPU communicate with the control registers of I/O devices?",
      options: [
        "Using special IN and OUT CPU instructions only",
        "Each device control register is assigned a unique memory address in the normal address space",
        "Only through the BIOS at boot time",
        "By writing directly to the hard disk MBR"
      ],
      answer: 1,
      explanation: "Trong Memory-Mapped I/O, mỗi thanh ghi điều khiển của thiết bị I/O được gán một địa chỉ bộ nhớ duy nhất (unique memory address) chung không gian địa chỉ với RAM, nên CPU dùng ngay các lệnh đọc/ghi bộ nhớ bình thường."
    },
    {
      id: 729,
      topic: "🏆 Đề FE OSG202 Các Mùa Trước (FPT Bank)",
      question: "[FPT OSG202 Bank] When is the appropriate time for an Operating System to release a process's page table and allocated page frames?",
      options: [
        "When the process moves from Running to Ready",
        "When a TLB miss occurs",
        "At process termination time",
        "Whenever the process waits for disk I/O"
      ],
      answer: 2,
      explanation: "Bảng trang (page table) và các khung trang (page frames) của tiến trình được hệ điều hành giải phóng vào thời điểm tiến trình kết thúc (process termination time)."
    },
    {
      id: 730,
      topic: "🏆 Đề FE OSG202 Các Mùa Trước (FPT Bank)",
      question: "[FPT OSG202 Bank] Which information bit in a page table entry indicates whether the page has been accessed/called recently?",
      options: [
        "Dirty (Modified) bit",
        "Referenced bit (R bit)",
        "Present/Absent bit",
        "Protection bit"
      ],
      answer: 1,
      explanation: "Referenced bit (bit R) được phần cứng bật lên 1 mỗi khi trang được đọc hoặc ghi, giúp các thuật toán như NRU, Second Chance, Clock, Aging biết trang đó có vừa được dùng gần đây hay không."
    }
  ]
};
