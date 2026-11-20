(function () {
  if (!window.OSG202_DATA || !Array.isArray(window.OSG202_DATA.quizQuestions)) return;
  const fptBankQuestions = [
  {
    "id": 8001,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] A cpu may have multiple execution units, so that can carry out multiple instructions in the same time is called:",
    "options": [
      "Superscalar",
      "Monitors",
      "Response time",
      "Thread"
    ],
    "answer": 0,
    "explanation": "Kiến trúc siêu vô hướng (Superscalar) cho phép CPU tích hợp nhiều đơn vị thực thi (execution units) độc lập để có thể thực hiện nhiều lệnh song song trong cùng một chu kỳ xung nhịp."
  },
  {
    "id": 8002,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] The four main structural elements of a computer system are:",
    "options": [
      "Is software component of device",
      "Processor, main memory, i/o modules, system bus",
      "4 msec. 40 msec. 20 sec",
      "Caching a device control register would be disastrous"
    ],
    "answer": 1,
    "explanation": "Bốn thành phần cấu trúc cơ bản của một hệ thống máy tính gồm: bộ xử lý (Processor), bộ nhớ chính (Main memory), các mô-đun nhập/xuất (I/O modules) và bus hệ thống (System bus) kết nối chúng lại với nhau."
  },
  {
    "id": 8003,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] Which of the following instructions should be allowed in user mode?",
    "options": [
      "Block devices and character devices",
      "Block-oriented devices",
      "Read the time-of-day clock",
      "Control unit"
    ],
    "answer": 2,
    "explanation": "Lệnh đọc đồng hồ thời gian thực (Read the time-of-day clock) không làm thay đổi trạng thái hệ thống hay ảnh hưởng tới tiến trình khác nên là lệnh an toàn, được phép thực thi ở chế độ người dùng (User mode) thay vì bắt buộc ở chế độ nhân (Kernel mode)."
  },
  {
    "id": 8004,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] As one proceeds down the memory hierarchy(phan cap bo nho) (from inboard memory to offline storage), which of the following conditions is correct?",
    "options": [
      "Virtual memory",
      "First-fit memory allocation",
      "Increasing access time",
      "<segment-number, offset>"
    ],
    "answer": 2,
    "explanation": "Khi đi từ trên xuống dưới trong hệ thống phân cấp bộ nhớ (Memory hierarchy: từ thanh ghi, cache, RAM đến bộ nhớ ngoại tuyến như đĩa từ/băng từ), thời gian truy cập (access time) sẽ tăng dần, đồng thời dung lượng tăng và giá thành trên mỗi bit giảm."
  },
  {
    "id": 8005,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] Information that must be saved prior to the processor transferring control to the interrupt handler routine includes:",
    "options": [
      "Psw and pc",
      "Many i/o devices",
      "Device driver",
      "Superblock"
    ],
    "answer": 0,
    "explanation": "Trước khi CPU chuyển quyền điều khiển sang trình xử lý ngắt (interrupt handler), hệ thống bắt buộc phải lưu từ trạng thái chương trình (PSW - Program Status Word) và bộ đếm chương trình (PC - Program Counter) để có thể khôi phục chính xác ngữ cảnh chạy tiếp sau khi xử lý xong ngắt."
  },
  {
    "id": 8006,
    "topic": "📚 FPT Bank (Ch.1: Introduction & OS Concepts)",
    "question": "[FPT Bank - Ch.1: Introduction & OS Concepts] What is not a main function of an operating system?",
    "options": [
      "Provide user interfaces",
      "Isa (industry standard architecture)",
      "User interface",
      "Pseudoparallelism"
    ],
    "answer": 0,
    "explanation": "Theo mô hình cốt lõi của hệ điều hành (Tanenbaum), hai chức năng chính của nhân HĐH là quản lý tài nguyên (resource manager) và tạo máy ảo mở rộng (extended machine); còn việc cung cấp giao diện người dùng (Provide user interfaces như shell hay GUI) là lớp phần mềm nằm phía trên HĐH chứ không phải chức năng chính của nhân."
  },
  {
    "id": 8007,
    "topic": "📚 FPT Bank (Ch.1: Introduction & OS Concepts)",
    "question": "[FPT Bank - Ch.1: Introduction & OS Concepts] What is the main characteristic of real-time operating system?",
    "options": [
      "Program counter (pc)",
      "Time is key parameter",
      "Pseudoparallelism",
      "40 micro-sec"
    ],
    "answer": 1,
    "explanation": "Đặc trưng quan trọng nhất của hệ điều hành thời gian thực (Real-time OS) là thời gian (time) đóng vai trò tham số then chốt, vì các tác vụ bắt buộc phải hoàn thành đúng hạn định (deadline) nghiêm ngặt."
  },
  {
    "id": 8008,
    "topic": "📚 FPT Bank (Ch.1: Introduction & OS Concepts)",
    "question": "[FPT Bank - Ch.1: Introduction & OS Concepts] What is not correct about system calls?",
    "options": [
      "Test-and-set executes as a sequence of machine instructions",
      "Disable all interrupts",
      "In terms of performance, using system calls is better than using procedure calls",
      "It is a single- user and multi-task os"
    ],
    "answer": 2,
    "explanation": "Phát biểu SAI là lời gọi hệ thống (system call) có hiệu năng tốt hơn lời gọi thủ tục (procedure call). Thực tế, system call chậm hơn đáng kể do phải thực hiện lệnh bẫy (trap) để chuyển ngữ cảnh từ User mode sang Kernel mode rồi quay lại."
  },
  {
    "id": 8009,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] What is the \"sequential processes\" concept?",
    "options": [
      "Normal exit (voluntary)",
      "Pick one of the ready processes to run next",
      "No concurrency inside a process; everything happens sequentially",
      "Disabling interrupts"
    ],
    "answer": 2,
    "explanation": "Khái niệm tiến trình tuần tự (Sequential processes) có nghĩa là bên trong một tiến trình không có sự thực thi đồng thời (concurrency); mọi câu lệnh và thao tác đều diễn ra tuần tự từng bước một."
  },
  {
    "id": 8010,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] Which of the following process state transitions is correct, when the external event for which a process was waiting happens?",
    "options": [
      "Blocked (waiting) -> ready",
      "General and special registers",
      "Disabling interrupts",
      "Window management"
    ],
    "answer": 0,
    "explanation": "Khi sự kiện bên ngoài (như hoàn tất thao tác I/O) mà tiến trình đang chờ xảy ra, tiến trình chuyển từ trạng thái bị chặn/chờ (Blocked/Waiting) sang trạng thái sẵn sàng (Ready) để xếp hàng chờ được cấp phát CPU, chứ không thể nhảy thẳng sang Running."
  },
  {
    "id": 8011,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] How many percent of the cpu time is wasted, when a computer system has enough room to hold two program and these programs are idle waiting for i/o half the time?",
    "options": [
      "Spooling",
      "2% of the cpu",
      "25%",
      "4"
    ],
    "answer": 2,
    "explanation": "Khi bộ nhớ chứa đồng thời n = 2 chương trình và mỗi chương trình chờ I/O với xác suất p = 50% = 0,5 thời gian, tỷ lệ thời gian CPU bị lãng phí (cả 2 tiến trình cùng chờ I/O) được tính bằng công thức: p^n = (0,5)^2 = 0,25 = 25%."
  },
  {
    "id": 8012,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] How many ways is thread implemented?",
    "options": [
      "Done",
      "Error exit",
      "3",
      "Pipeline"
    ],
    "answer": 2,
    "explanation": "Có 3 cách triển khai luồng (threads) phổ biến trong hệ điều hành: triển khai ở không gian người dùng (User space), triển khai trong nhân (Kernel space) và mô hình lai kết hợp cả hai (Hybrid implementation)."
  },
  {
    "id": 8013,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] Critical region (section) concept used in interprocess communication is:",
    "options": [
      "Process termination time",
      "Present/ absent bit",
      "A part of the program where the shared memory is accessed",
      "The frame location for each page of the process"
    ],
    "answer": 2,
    "explanation": "Miền găng (Critical region / Critical section) là một đoạn mã trong chương trình nơi tiến trình truy cập vào vùng bộ nhớ hoặc tài nguyên dùng chung (shared memory), cần được bảo vệ đồng bộ để tránh xung đột dữ liệu."
  },
  {
    "id": 8014,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] Which of the following statements is a hardware solution to the critical region problem?",
    "options": [
      "Error exit",
      "Tsl",
      "Ps",
      "Thread"
    ],
    "answer": 1,
    "explanation": "Lệnh TSL (Test and Set Lock) là một giải pháp phần cứng (hardware solution) cho phép đọc giá trị khóa và đặt khóa thành 1 trong một thao tác nguyên tử (atomic) không thể bị ngắt, giúp giải quyết bài toán miền găng."
  },
  {
    "id": 8015,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] Which of the following statements is true about hardware solution to the critical region problem?",
    "options": [
      "Ready -> running",
      "Window management",
      "Disable interrupts",
      "Parent/child processes"
    ],
    "answer": 2,
    "explanation": "Vô hiệu hóa ngắt (Disable interrupts) là giải pháp phần cứng cho bài toán miền găng, ngăn không cho CPU chuyển ngữ cảnh sang tiến trình khác trong khi tiến trình hiện tại đang thực thi trong đoạn mã găng."
  },
  {
    "id": 8016,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] What is the purpose of cpu scheduling algorithms?",
    "options": [
      "There are two available",
      "Pick one of the ready processes to run next",
      "Disabling interrupts",
      "Procedure call handler code"
    ],
    "answer": 1,
    "explanation": "Mục đích của các thuật toán lập lịch CPU (CPU scheduling algorithms) là lựa chọn ra một tiến trình từ hàng đợi sẵn sàng (ready queue) để cấp phát CPU cho nó chạy tiếp theo."
  },
  {
    "id": 8017,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] The first-come, first-served (fcfs) algorithm is fine for most ____ systems",
    "options": [
      "Batch",
      "Error exit",
      "Multicore",
      "1 %"
    ],
    "answer": 0,
    "explanation": "Thuật toán đến trước phục vụ trước (FCFS - First-Come, First-Served) đơn giản và ít chi phí chuyển đổi, phù hợp với hầu hết các hệ thống xử lý theo lô (Batch systems) vốn không đòi hỏi tương tác thời gian thực."
  },
  {
    "id": 8018,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] Five batch jobs a through e, arrive at a computer center at almost the same time. they have estimated running times of 8, 6, 2, 10, and 4 minutes. determine the average waiting time for sjf (shortest job first) scheduling. ignore process switching overhead.",
    "options": [
      "9.0",
      "8 minutes",
      "Thread",
      "Error exit"
    ],
    "answer": 1,
    "explanation": "Với thuật toán SJF (Shortest Job First - việc ngắn nhất làm trước), thứ tự thực thi tăng dần là 2, 4, 6, 8, 10 phút; thời gian chờ (waiting time) lần lượt là 0, 2, 6, 12, 20 phút. Thời gian chờ trung bình = (0 + 2 + 6 + 12 + 20) / 5 = 40 / 5 = 8 phút."
  },
  {
    "id": 8019,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] Assume jobs a-d arrive in quick succession in the ready queue. using round robin scheduling (quantum=4), the turnaround time for job d is ____.",
    "options": [
      "22",
      "4",
      "Batch",
      "Burst time"
    ],
    "answer": 0,
    "explanation": "Bài toán lập lịch Round Robin (quantum = 4) với 4 tiến trình A, B, C, D đến lần lượt ở t = 0, 1, 2, 3 và có thời gian chạy (burst time) tương ứng là A = 8, B = 4, C = 9, D = 5:\n• 0–4: A chạy (còn 4)\n• 4–8: B chạy (xong ở t = 8)\n• 8–12: C chạy (còn 5)\n• 12–16: D chạy (còn 1)\n• 16–20: A chạy (xong ở t = 20)\n• 20–24: C chạy (còn 1)\n• 24–25: D chạy nốt 1 đơn vị và hoàn thành ở t = 25.\n⇒ Thời gian hoàn thành (Turnaround Time) của D = Thời điểm xong − Thời điểm đến = 25 − 3 = 22."
  },
  {
    "id": 8020,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] Which of following is true about cache in the memory hierarchy?",
    "options": [
      "Small amount of fast expensive memory",
      "The segment number and the displacement",
      "Memory management",
      "Interrupt vector table"
    ],
    "answer": 0,
    "explanation": "Trong hệ thống phân cấp bộ nhớ, bộ nhớ đệm (Cache) là một lượng nhỏ bộ nhớ có tốc độ truy cập cực nhanh nhưng chi phí đắt đỏ (fast, expensive memory), được đặt gần CPU để giảm độ trễ truy xuất RAM."
  },
  {
    "id": 8021,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] Which of the following is a method to keep track of memory usages?",
    "options": [
      "User-level i/o software, device-independent os software, device drivers, interrupt handlers",
      "Both memory management with bit maps and memory management with linked lists",
      "Is software component of device",
      "Processor, main memory, i/o modules, system bus"
    ],
    "answer": 1,
    "explanation": "Hai phương pháp tiêu chuẩn để hệ điều hành theo dõi vùng nhớ đã cấp phát và vùng trống là quản lý bằng bản đồ bit (bit maps - mỗi bit đại diện cho một đơn vị cấp phát) và quản lý bằng danh sách liên kết (linked lists)."
  },
  {
    "id": 8022,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] One of the most important innovations of demand paging was that it made ____ feasible",
    "options": [
      "Virtual memory.",
      "First fit",
      "Is volatile",
      "17 bits"
    ],
    "answer": 0,
    "explanation": "Kỹ thuật phân trang theo yêu cầu (Demand paging - chỉ nạp trang vào RAM khi CPU thực sự truy cập tới) là cải tiến cốt lõi giúp hiện thực hóa cơ chế bộ nhớ ảo (Virtual memory)."
  },
  {
    "id": 8023,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] Which of these statements about the inverted page table are true?",
    "options": [
      "Internal fragmentation",
      "The frame location for each page of the process",
      "An entry contains the pair (process, virtual page) mapped into the corresponding page frame",
      "Restriction of memory size, speed of cpu, screen size, powers"
    ],
    "answer": 2,
    "explanation": "Trong bảng trang nghịch đảo (Inverted page table), thay vì mỗi tiến trình có bảng trang riêng, hệ thống chỉ dùng một bảng cho các khung trang vật lý; mỗi mục (entry) tương ứng với một khung trang và lưu cặp (tiến trình, trang ảo) đang được ánh xạ vào khung trang đó."
  },
  {
    "id": 8024,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] If there are 64 pages and the page size is 2048 words, what is the length of logical address?",
    "options": [
      "Page",
      "17 bits",
      "Aging",
      "Is volatile"
    ],
    "answer": 1,
    "explanation": "Số trang là 64 = 2^6 (cần 6 bit đánh số trang) và kích thước mỗi trang là 2048 = 2^11 từ (cần 11 bit cho độ lệch offset). Do đó, độ dài địa chỉ logic (logical address) = 6 + 11 = 17 bits."
  },
  {
    "id": 8025,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] A system with 32 bit virtual address. if the page size is 4 kb and each table entry occupies 4 bytes, what is the size of the page table?",
    "options": [
      "1-kb page",
      "4 mb",
      "Case 4",
      "Worse"
    ],
    "answer": 1,
    "explanation": "Với địa chỉ ảo 32 bit và kích thước trang 4 KB = 2^12 bytes, số trang ảo là 2^32 / 2^12 = 2^20 trang. Mỗi mục bảng trang (page table entry) chiếm 4 bytes, nên kích thước bảng trang = 2^20 × 4 bytes = 4 MB."
  },
  {
    "id": 8026,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] Which of the following statements is incorrect about translation look-aside buffer (tlb)?",
    "options": [
      "Requires a disk map in memory",
      "Converting binary integers to ascii for printing",
      "A tlb miss implies a disk operation will follow",
      "Mapping files onto secondary storage"
    ],
    "answer": 2,
    "explanation": "Phát biểu SAI là trượt TLB (TLB miss) đồng nghĩa sẽ phải thực hiện thao tác đọc đĩa. Thực tế, TLB chỉ là bộ đệm ánh xạ trang trong CPU; khi bị TLB miss, hệ thống chỉ cần tra cứu bảng trang trong RAM (chỉ khi xảy ra page fault không có trong RAM mới phải đọc đĩa)."
  },
  {
    "id": 8027,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] Working set model is used for:",
    "options": [
      "Absolute address",
      "Finding the minimum number of frames necessary for a job so that jobs can be run without \"thrashing\"",
      "Internal fragmentation",
      "The segment number and the displacement"
    ],
    "answer": 1,
    "explanation": "Mô hình tập làm việc (Working set model) theo dõi tập hợp các trang mà tiến trình đang sử dụng tích cực để xác định số khung trang (frames) tối thiểu cần cấp, giúp tiến trình chạy ổn định mà không bị hiện tượng tráo trang liên tục (thrashing)."
  },
  {
    "id": 8028,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] Which is not true about the method of backing store: \"paging to a static swap area\"?",
    "options": [
      "Requires a disk map in memory",
      "Device driver",
      "4 msec. 40 msec. 20 sec",
      "Unique memory address"
    ],
    "answer": 0,
    "explanation": "Phát biểu KHÔNG ĐÚNG về phương pháp phân trang vào vùng hoán đổi tĩnh (paging to a static swap area) là \"cần một bản đồ đĩa (disk map) trong bộ nhớ\". Vì vùng swap tĩnh đã ánh xạ cố định 1-1 với không gian địa chỉ của tiến trình nên không cần disk map động trong RAM (chỉ phương pháp cấp phát đĩa động mới cần)."
  },
  {
    "id": 8029,
    "topic": "📚 FPT Bank (Ch.4: File Systems)",
    "question": "[FPT Bank - Ch.4: File Systems] A ____ is a group of related records that contains information to be used by specific application programs to generate reports.",
    "options": [
      "Demand partition",
      "Cd",
      "File",
      "Pwd"
    ],
    "answer": 2,
    "explanation": "Tệp tin (File) là một tập hợp các bản ghi (records) có liên quan với nhau, dùng để lưu trữ thông tin cho các chương trình ứng dụng đọc và xử lý tạo báo cáo."
  },
  {
    "id": 8030,
    "topic": "📚 FPT Bank (Ch.4: File Systems)",
    "question": "[FPT Bank - Ch.4: File Systems] ____ is a specialized write command for existing data files that allows for adding records to end of the file.",
    "options": [
      "Append",
      "Journaling file systems",
      "Link",
      "Cd"
    ],
    "answer": 0,
    "explanation": "Lệnh `Append` (nối thêm) là lệnh ghi chuyên biệt cho phép bổ sung các bản ghi mới vào cuối tệp dữ liệu hiện có mà không làm mất hoặc ghi đè nội dung cũ."
  },
  {
    "id": 8031,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] Disk can be divided up into one or more partitions. the first block of every partition is called:",
    "options": [
      "Boot block",
      "Rename",
      "24 sectors",
      "Sstf"
    ],
    "answer": 0,
    "explanation": "Khi ổ đĩa được chia thành nhiều phân vùng (partitions), khối (block) đầu tiên của mỗi phân vùng được gọi là khối khởi động (Boot block), dùng để lưu đoạn mã nạp hệ điều hành nằm trên phân vùng đó."
  },
  {
    "id": 8032,
    "topic": "📚 FPT Bank (Ch.4: File Systems)",
    "question": "[FPT Bank - Ch.4: File Systems] The linking technique that allows the file to appear in more than one directory are:",
    "options": [
      "Journaling file systems",
      "File management",
      "Create",
      "Both hard link and symbolic link"
    ],
    "answer": 3,
    "explanation": "Cả kỹ thuật liên kết cứng (Hard link - trỏ trực tiếp tới i-node của tệp) và liên kết tượng trưng/mềm (Symbolic link - lưu đường dẫn tới tệp) đều cho phép cùng một tệp tin xuất hiện ở nhiều thư mục khác nhau."
  },
  {
    "id": 8033,
    "topic": "📚 FPT Bank (Ch.4: File Systems)",
    "question": "[FPT Bank - Ch.4: File Systems] Which mechanism is implemented by writing to the log file with the purpose of file system management and optimization?",
    "options": [
      "Indexed allocation",
      "Journaling file systems",
      "1 tb",
      "Create"
    ],
    "answer": 1,
    "explanation": "Hệ thống tệp ghi nhật ký (Journaling file systems) ghi nhận các thay đổi dự kiến vào tệp nhật ký (log file) trước khi cập nhật dữ liệu chính, giúp tối ưu quản lý và khôi phục hệ thống tệp nhanh chóng khi gặp sự cố đột ngột."
  },
  {
    "id": 8034,
    "topic": "📚 FPT Bank (Ch.4: File Systems)",
    "question": "[FPT Bank - Ch.4: File Systems] The file manager writes the volume name and other descriptive information on an easy-to-access place on each unit: ____ of the cd or dvd",
    "options": [
      "Ls -a",
      "Demand partition",
      "The innermost part",
      "When jobs have the same size"
    ],
    "answer": 2,
    "explanation": "Trên đĩa quang CD hoặc DVD, trình quản lý tệp ghi tên ổ đĩa (volume name) và các thông tin mô tả hệ thống tệp ở phần rãnh trong cùng (the innermost part), vì đầu đọc đĩa quang bắt đầu đọc từ tâm đĩa hướng ra ngoài."
  },
  {
    "id": 8035,
    "topic": "📚 FPT Bank (Ch.4: File Systems)",
    "question": "[FPT Bank - Ch.4: File Systems] Which is the maximum partition size, if the fat type is fat-32 and the block size is 4 kb?",
    "options": [
      "Linked allocation using fat",
      "Virtualization",
      "Append",
      "1 tb"
    ],
    "answer": 3,
    "explanation": "Với bảng FAT-32 (dùng 28 bit đánh địa chỉ cluster) và kích thước khối (block size) là 4 KB = 2^12 bytes, số block tối đa quản lý được là 2^28. Dung lượng phân vùng tối đa = 2^28 × 4 KB = 2^28 × 2^12 bytes = 2^40 bytes = 1 TB."
  },
  {
    "id": 8036,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] The main classes of i/o devices are:",
    "options": [
      "Many i/o devices",
      "Dma controller is usually faster than cpu",
      "Block devices and character devices",
      "Converting binary integers to ascii for printing"
    ],
    "answer": 2,
    "explanation": "Các thiết bị nhập/xuất (I/O devices) được chia thành hai nhóm chính: thiết bị khối (Block devices - truyền dữ liệu theo khối cố định như đĩa cứng) và thiết bị ký tự (Character devices - truyền dòng byte tuần tự như bàn phím, chuột)."
  },
  {
    "id": 8037,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] Which of the following statements is not correct about dma?",
    "options": [
      "Balance cpu and i/o intensive jobs",
      "Dma controller is usually faster than cpu",
      "Logical block addressing",
      "All raid levels can survive one disk crash"
    ],
    "answer": 1,
    "explanation": "Phát biểu SAI về DMA (Direct Memory Access - truy cập bộ nhớ trực tiếp) là \"bộ điều khiển DMA thường nhanh hơn CPU\". Thực tế bộ điều khiển DMA có tốc độ chậm hơn CPU nhiều, vai trò của nó là thay CPU sao chép dữ liệu trực tiếp giữa thiết bị I/O và RAM để giải phóng CPU làm việc khác."
  },
  {
    "id": 8038,
    "topic": "📚 FPT Bank (Ch.1: Introduction & OS Concepts)",
    "question": "[FPT Bank - Ch.1: Introduction & OS Concepts] An interrupt that leaves the machine in well-defined state is called a(n) ______",
    "options": [
      "Precise interrupt",
      "Disable all interrupts",
      "To contain bios",
      "28.8 msec"
    ],
    "answer": 0,
    "explanation": "Ngắt chính xác (Precise interrupt) là ngắt đưa máy tính dừng lại ở một trạng thái xác định rõ ràng (mọi lệnh trước bộ đếm chương trình PC đã hoàn thành, mọi lệnh từ PC trở đi chưa thực thi), giúp khôi phục tiến trình an toàn sau ngắt."
  },
  {
    "id": 8039,
    "topic": "📚 FPT Bank (Ch.1: Introduction & OS Concepts)",
    "question": "[FPT Bank - Ch.1: Introduction & OS Concepts] Which of the following statements is not correct about \"device independence\"?",
    "options": [
      "A program that acts as an intermediary between a user of a computer and the computer hardware",
      "Batch and interactive",
      "Device independence requires all programmers to deal with different devices directly",
      "Isa (industry standard architecture)"
    ],
    "answer": 2,
    "explanation": "Phát biểu SAI về tính độc lập thiết bị (Device independence) là cho rằng lập trình viên phải tự xử lý trực tiếp với từng loại thiết bị khác nhau. Trái lại, device independence cung cấp giao diện thống nhất để chương trình làm việc với mọi thiết bị mà không cần quan tâm chi tiết phần cứng bên dưới."
  },
  {
    "id": 8040,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] Which is the right order between the 4 i/o software layers?",
    "options": [
      "The device driver decides blocking and returning an error code",
      "Processor, main memory, i/o modules, system bus",
      "Block devices and character devices",
      "User-level i/o software, device-independent os software, device drivers, interrupt handlers"
    ],
    "answer": 3,
    "explanation": "Thứ tự 4 tầng phần mềm I/O từ lớp trên cùng xuống sát phần cứng là: Phần mềm I/O mức người dùng (User-level I/O software) -> Phần mềm HĐH độc lập thiết bị (Device-independent OS software) -> Trình điều khiển thiết bị (Device drivers) -> Trình xử lý ngắt (Interrupt handlers)."
  },
  {
    "id": 8041,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] Each device attached to your computer comes with a special program called a __________ that facilitates the communication between the device and the os.",
    "options": [
      "Device driver",
      "Direct memory access",
      "Block-oriented devices",
      "24 sectors"
    ],
    "answer": 0,
    "explanation": "Mỗi thiết bị phần cứng gắn vào máy tính cần có một chương trình chuyên biệt gọi là trình điều khiển thiết bị (Device driver) để làm cầu nối giao tiếp giữa thiết bị đó với hệ điều hành."
  },
  {
    "id": 8042,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] In a fixed magnetic disk, each circle is called a ____.",
    "options": [
      "Track",
      "Spooling",
      "Delete",
      "Boot block"
    ],
    "answer": 0,
    "explanation": "Trên đĩa từ cố định (fixed magnetic disk), mỗi vòng tròn đồng tâm lưu trữ dữ liệu trên bề mặt đĩa được gọi là một rãnh từ (Track)."
  },
  {
    "id": 8043,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] What is a \"stripping\" in raid?",
    "options": [
      "Direct memory access",
      "Distributing data over multiple drives",
      "Dma controller is usually faster than cpu",
      "A tlb miss implies a disk operation will follow"
    ],
    "answer": 1,
    "explanation": "Trong công nghệ RAID, kỹ thuật Striping (chia dải dữ liệu) là việc phân chia và rải dữ liệu ra nhiều ổ đĩa khác nhau để cho phép đọc/ghi song song nhằm tăng tốc độ truyền tải."
  },
  {
    "id": 8044,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] ____ is when each process involved in the impasse is waiting for another to voluntarily release the resource so that at least one will be able to continue on.",
    "options": [
      "Circular-wait condition",
      "General and special registers",
      "Resource holding",
      "Ready -> blocked (waiting)"
    ],
    "answer": 0,
    "explanation": "Điều kiện chờ vòng tròn (Circular-wait condition) xảy ra khi một chuỗi khép kín các tiến trình đều đang giữ tài nguyên và chờ tiến trình kế tiếp trong vòng tự nguyện nhả tài nguyên để mình có thể chạy tiếp."
  },
  {
    "id": 8045,
    "topic": "📚 FPT Bank (Ch.6: Deadlocks)",
    "question": "[FPT Bank - Ch.6: Deadlocks] The permanent blocking of a set of processes that compete for system resources is called",
    "options": [
      "Circular-wait condition",
      "Deadlock",
      "Mutual exlusion",
      "Timeouts"
    ],
    "answer": 1,
    "explanation": "Tình trạng một tập các tiến trình bị chặn vĩnh viễn (permanent blocking) do cạnh tranh và chờ đợi tài nguyên đang bị tiến trình khác trong tập nắm giữ được gọi là bế tắc (Deadlock)."
  },
  {
    "id": 8046,
    "topic": "📚 FPT Bank (Ch.6: Deadlocks)",
    "question": "[FPT Bank - Ch.6: Deadlocks] Which deadlock condition does \"request all resources initially\" attack?",
    "options": [
      "Real-time",
      "Hold and wait",
      "Memory",
      "Request all resources initially"
    ],
    "answer": 1,
    "explanation": "Biện pháp \"yêu cầu tất cả tài nguyên ngay từ đầu\" (request all resources initially) nhằm triệt tiêu điều kiện giữ và chờ (Hold and wait), vì tiến trình sẽ không vừa giữ một số tài nguyên vừa chờ xin cấp thêm."
  },
  {
    "id": 8047,
    "topic": "📚 FPT Bank (Ch.6: Deadlocks)",
    "question": "[FPT Bank - Ch.6: Deadlocks] What is the correct approach with the \"no preemption condition\" to prevent deadlock?",
    "options": [
      "Event 6 caused deadlock.",
      "If a system is in unsafe state",
      "Take resources away",
      "P2 requests drive 2 and gets it."
    ],
    "answer": 2,
    "explanation": "Để ngăn ngừa bế tắc bằng cách tấn công vào điều kiện \"không trưng dụng\" (no preemption condition), giải pháp đúng là cho phép hệ thống tước đoạt/thu hồi lại tài nguyên (take resources away) từ tiến trình đang giữ khi cần thiết."
  },
  {
    "id": 8048,
    "topic": "📚 FPT Bank (Ch.1: Introduction & OS Concepts)",
    "question": "[FPT Bank - Ch.1: Introduction & OS Concepts] Which of special register contains the mode bit (user or kernel)?",
    "options": [
      "Program status word (psw)",
      "Disable all interrupts",
      "Precise interrupt",
      "Isa (industry standard architecture)"
    ],
    "answer": 0,
    "explanation": "Thanh ghi đặc biệt chứa bit chế độ (mode bit) để phân biệt CPU đang chạy ở chế độ người dùng (user mode) hay chế độ nhân (kernel mode) là từ trạng thái chương trình (Program Status Word - PSW)."
  },
  {
    "id": 8049,
    "topic": "📚 FPT Bank (Ch.1: Introduction & OS Concepts)",
    "question": "[FPT Bank - Ch.1: Introduction & OS Concepts] Which of main bus in the ibm pc computer, that can run at 66 mhz and transfer 8 bytes at a time?",
    "options": [
      "Easier to extend and easier to debug from lower to upper layer",
      "Pci (peripheral component interconnect)",
      "Time is key parameter",
      "Loading the command interpreter"
    ],
    "answer": 1,
    "explanation": "Trên máy tính IBM PC, bus chính có thể hoạt động ở tần số 66 MHz và truyền 8 byte (64 bit) mỗi lần là bus PCI (Peripheral Component Interconnect)."
  },
  {
    "id": 8050,
    "topic": "📚 FPT Bank (Ch.1: Introduction & OS Concepts)",
    "question": "[FPT Bank - Ch.1: Introduction & OS Concepts] Booting a general purpose computer involves the following steps except",
    "options": [
      "Isa (industry standard architecture)",
      "Loading the command interpreter",
      "Disable all interrupts",
      "Precise interrupt"
    ],
    "answer": 1,
    "explanation": "Quá trình khởi động máy tính (Booting) ở mức hệ thống không bao gồm bước nạp trình thông dịch lệnh (Loading the command interpreter), vì shell/trình thông dịch lệnh được nạp ở mức ứng dụng sau khi nhân HĐH khởi tạo xong và người dùng đăng nhập."
  },
  {
    "id": 8051,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] Which of the following statements about random access memory (ram) is correct?",
    "options": [
      "Is volatile",
      "Thread segment",
      "Main memory",
      "Ms-dos"
    ],
    "answer": 0,
    "explanation": "Bộ nhớ truy cập ngẫu nhiên (RAM) có tính chất khả biến / bay hơi (is volatile), nghĩa là dữ liệu trên đó chỉ được duy trì khi còn cấp điện và sẽ mất sạch khi tắt nguồn."
  },
  {
    "id": 8052,
    "topic": "📚 FPT Bank (Ch.1: Introduction & OS Concepts)",
    "question": "[FPT Bank - Ch.1: Introduction & OS Concepts] Which of the following statements is incorrect about the cmos?",
    "options": [
      "Megabytes",
      "Multimedia",
      "Waiting -> runing",
      "To contain bios"
    ],
    "answer": 3,
    "explanation": "Phát biểu SAI về CMOS là \"dùng để chứa BIOS\". Thực tế BIOS được lưu trong bộ nhớ chỉ đọc (ROM/Flash ROM), còn bộ nhớ CMOS (được nuôi bằng pin) chỉ lưu các thông số cấu hình hệ thống như ngày giờ và thứ tự khởi động."
  },
  {
    "id": 8053,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] Which is not an example of a resource that is commonly time-multiplexed?",
    "options": [
      "Uses a fifo queue",
      "1-kb page",
      "Main memory",
      "Virtual memory."
    ],
    "answer": 2,
    "explanation": "Bộ nhớ chính (Main memory / RAM) được chia sẻ theo không gian (space-multiplexed: mỗi tiến trình được cấp một phần dung lượng riêng), không phải tài nguyên chia sẻ theo thời gian (time-multiplexed) như CPU hay máy in."
  },
  {
    "id": 8054,
    "topic": "📚 FPT Bank (Ch.1: Introduction & OS Concepts)",
    "question": "[FPT Bank - Ch.1: Introduction & OS Concepts] A well-known embedded operating system is:",
    "options": [
      "Internet",
      "2.4 trillion",
      "Businesses",
      "Qnx and vxwork"
    ],
    "answer": 3,
    "explanation": "QNX và VxWorks (trong đề viết là VxWork) là hai hệ điều hành nhúng thời gian thực (embedded real-time OS) tiêu biểu, được ứng dụng rộng rãi trong ô tô, thiết bị y tế và hàng không."
  },
  {
    "id": 8055,
    "topic": "📚 FPT Bank (Ch.1: Introduction & OS Concepts)",
    "question": "[FPT Bank - Ch.1: Introduction & OS Concepts] A(n) _________ is provided to make system calls from some programming languages",
    "options": [
      "Multimedia",
      "Procedure library",
      "Qnx and vxwork",
      "Monolithic system"
    ],
    "answer": 1,
    "explanation": "Để các ngôn ngữ lập trình bậc cao gọi được các lời gọi hệ thống (system calls) thay vì viết mã hợp ngữ trực tiếp, hệ điều hành cung cấp các hàm bao đóng trong một thư viện thủ tục (Procedure library)."
  },
  {
    "id": 8056,
    "topic": "📚 FPT Bank (Ch.1: Introduction & OS Concepts)",
    "question": "[FPT Bank - Ch.1: Introduction & OS Concepts] Which of the following is correct about the advantages of layered system?",
    "options": [
      "Vacuum tubes, plug boards",
      "Pci (peripheral component interconnect)",
      "Above the hardware and under the user interface program",
      "Easier to extend and easier to debug from lower to upper layer"
    ],
    "answer": 3,
    "explanation": "Ưu điểm nổi bật của hệ điều hành kiến trúc phân tầng (layered system) là các chức năng được tách bạch theo từng lớp, giúp dễ mở rộng tính năng và dễ gỡ lỗi (debug) tuần tự từ tầng dưới lên tầng trên."
  },
  {
    "id": 8057,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] Os win32 use system call_____, while os unix use system call______ to create a new process",
    "options": [
      "Application programmer",
      "Process control block",
      "Synchronization",
      "Createprocess; fork"
    ],
    "answer": 3,
    "explanation": "Để tạo một tiến trình mới, hệ điều hành Windows (Win32 API) sử dụng lời gọi hệ thống `CreateProcess`, trong khi hệ điều hành UNIX sử dụng lời gọi hệ thống `fork`."
  },
  {
    "id": 8058,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] Which of the following process state transitions is illegal?",
    "options": [
      "Ready -> blocked (waiting)",
      "Disabling interrupts",
      "Normal exit (voluntary)",
      "Binary semaphores"
    ],
    "answer": 0,
    "explanation": "Chuyển đổi trạng thái bất hợp pháp (illegal) là `Ready -> Blocked (waiting)`, bởi một tiến trình chỉ có thể bị chặn/chờ sự kiện khi nó đang thực thi trên CPU (`Running -> Blocked`), chứ không thể tự chuyển sang chờ khi còn đang ở hàng đợi Ready."
  },
  {
    "id": 8059,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] How many percent is cpu utilization, when a computer system has enough room to hold two program and these programs are idle waiting for i/o half the time?",
    "options": [
      "Seek time",
      "75%",
      "2% of the cpu",
      "43251"
    ],
    "answer": 1,
    "explanation": "Hiệu suất sử dụng CPU (CPU utilization) khi có n = 2 chương trình trong bộ nhớ và mỗi chương trình chờ I/O với tỷ lệ p = 50% = 0,5 thời gian được tính theo công thức: 1 - p^n = 1 - (0,5)^2 = 1 - 0,25 = 0,75 = 75%."
  },
  {
    "id": 8060,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] An arrival message causes the system to create a new thread to handle this message. this new thread is call______",
    "options": [
      "Pop-up",
      "4",
      "Stack",
      "Data area"
    ],
    "answer": 0,
    "explanation": "Khi có một thông điệp (arrival message) đến khiến hệ thống lập tức tạo mới một luồng để xử lý riêng thông điệp đó, luồng này được gọi là luồng bật lên (Pop-up thread)."
  },
  {
    "id": 8061,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] Which conditions of mutual exclusion does the lock variables (software proposal) violate?",
    "options": [
      "Thread parent identifier",
      "Processor capacity",
      "No two processes simultaneously in critical region",
      "General and special registers"
    ],
    "answer": 2,
    "explanation": "Giải pháp phần mềm dùng biến khóa (lock variables) có thể bị lỗi tranh đua khi hai tiến trình cùng đọc thấy khóa bằng 0 trước khi đặt lại thành 1, từ đó vi phạm điều kiện loại trừ tương hỗ \"không có hai tiến trình nào cùng ở trong miền găng tại một thời điểm\" (No two processes simultaneously in critical region)."
  },
  {
    "id": 8062,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] In order to implement mutual exclusion on a critical resource for competing processes, only one program at a time should be allowed:",
    "options": [
      "Normal exit (voluntary)",
      "Mutual-exclusion condition",
      "Binary semaphores",
      "In the critical region of the program"
    ],
    "answer": 3,
    "explanation": "Để thực thi cơ chế loại trừ tương hỗ (mutual exclusion) đối với tài nguyên găng cho các tiến trình cạnh tranh, tại mỗi thời điểm chỉ được phép có duy nhất một chương trình thực thi bên trong miền găng của nó (in the critical region of the program)."
  },
  {
    "id": 8063,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] Semaphores that are initialized to 1 and used for two or more processes to ensure only one can enter its critical section at the same time are called:",
    "options": [
      "Synchronization",
      "4% of the cpu",
      "Binary semaphores",
      "Resource holding"
    ],
    "answer": 2,
    "explanation": "Đèn hiệu (Semaphores) được khởi tạo với giá trị ban đầu bằng 1 nhằm đảm bảo tại một thời điểm chỉ có tối đa một tiến trình được vào miền găng được gọi là đèn hiệu nhị phân (Binary semaphores)."
  },
  {
    "id": 8064,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] Which cannot be able to solve the race condition?",
    "options": [
      "Mutual exclusion",
      "Shared memory",
      "Ms-dos",
      "Thrashing"
    ],
    "answer": 1,
    "explanation": "Bộ nhớ dùng chung (Shared memory) là cơ chế chia sẻ dữ liệu chứ KHÔNG thể giải quyết tình trạng tranh đua (race condition); ngược lại, việc nhiều tiến trình cùng ghi vào bộ nhớ dùng chung mà thiếu đồng bộ chính là nguyên nhân gây ra race condition."
  },
  {
    "id": 8065,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] Which is not a goal of a scheduling algorithm for batch systems?",
    "options": [
      "Round robin",
      "Sequentially",
      "Operating system",
      "Response time"
    ],
    "answer": 3,
    "explanation": "Hệ thống xử lý theo lô (Batch systems) chạy các tác vụ hàng loạt không có tương tác trực tiếp với người dùng, nên thời gian phản hồi (Response time - chỉ tiêu của hệ thống tương tác) không phải mục tiêu lập lịch của batch system."
  },
  {
    "id": 8066,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] Some systems increase the priority of jobs that have been in the system for an unusually long time to expedite their exit, which is known as ____.?",
    "options": [
      "1",
      "Aging",
      "Pages",
      "7600"
    ],
    "answer": 1,
    "explanation": "Cơ chế tăng dần mức độ ưu tiên cho những công việc đã nằm chờ quá lâu trong hệ thống nhằm giúp chúng sớm được chạy và hoàn tất (tránh tình trạng chết đói - starvation) được gọi là làm già (Aging)."
  },
  {
    "id": 8067,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] Assume jobs a-d arrive at almost the same time in the ready queue. determine the average turnaround time for sjf scheduling. ignore process switching overhead",
    "options": [
      "9.0",
      "Stack",
      "1 %",
      "Data area"
    ],
    "answer": 0,
    "explanation": "Thuật toán SJF (Shortest Job First — ưu tiên công việc ngắn nhất) luôn chạy các tiến trình theo thứ tự thời gian thực thi (burst time) từ nhỏ đến lớn để tối ưu thời gian hoàn thành trung bình.\n• Công thức: Turnaround Time (TAT) của mỗi job = Thời điểm kết thúc − Thời điểm đến.\n• Khi 4 job A–D đến gần như cùng lúc (t ≈ 0), tổng TAT của cả 4 job sau khi xếp theo SJF bằng 36 ⇒ Average Turnaround Time = 36 / 4 = 9.0."
  },
  {
    "id": 8068,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] With paging, when is the internal fragmentation possible?",
    "options": [
      "The last page of the job is less than the maximum page size",
      "That was not in main memory",
      "Present/ absent bit",
      "Which page to remove to provide space for an incoming page"
    ],
    "answer": 0,
    "explanation": "Trong cơ chế phân trang (paging), phân mảnh nội (internal fragmentation) chỉ xảy ra khi trang cuối cùng của tiến trình nhỏ hơn kích thước trang tối đa, khiến phần dung lượng thừa trong khung trang đó bị bỏ trống lãng phí."
  },
  {
    "id": 8069,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] Which of these statements about the algorithm \"next fit\" is true?",
    "options": [
      "Relocation register",
      "The segment number and the displacement",
      "Memory manager starting searching the list of segments from the place where it left off last time.",
      "Moves pages found at the head of a fifo queue with the referenced bit turned on back to the tail of the queue to avoid replacing them"
    ],
    "answer": 2,
    "explanation": "Thuật toán Next Fit cải tiến từ First Fit bằng cách ghi nhớ vị trí cấp phát lần trước và bắt đầu tìm đoạn nhớ (segment) trống tiếp theo từ đúng chỗ đã dừng lại thay vì quay về đầu danh sách."
  },
  {
    "id": 8070,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] Assume the memory manager receives a request for a block of 200. when the worst-fit algorithm is used, ____ is the beginning address of the block granted by the memory manager.",
    "options": [
      "10250",
      "60%",
      "1-kb page",
      "4 mb"
    ],
    "answer": 0,
    "explanation": "Thuật toán cấp phát bộ nhớ Worst-Fit luôn tìm và chọn vùng nhớ trống (hole) có kích thước LỚN NHẤT hiện có để cấp phát cho yêu cầu (với mục tiêu để lại phần dư đủ lớn cho tiến trình sau dùng tiếp).\n• Trong bảng phân vùng bộ nhớ của bài toán (yêu cầu khối nhớ kích thước 200), vùng trống lớn nhất có kích thước 4050, nằm tại địa chỉ bắt đầu 10250 ⇒ Bộ quản lý bộ nhớ cấp phát khối bắt đầu từ 10250."
  },
  {
    "id": 8071,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] When a virtual memory system manages memory in fixed length units, which of the following terms correctly represents its unit?",
    "options": [
      "First fit",
      "1mb",
      "Page",
      "4033"
    ],
    "answer": 2,
    "explanation": "Khi hệ thống bộ nhớ ảo (virtual memory) quản lý bộ nhớ theo các đơn vị có kích thước cố định, đơn vị logic đó được gọi là trang (Page), ánh xạ tương ứng với khung trang (frame) trong RAM."
  },
  {
    "id": 8072,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] Suppose a virtual address space of 2^32 words and the page size is 2^12 words. if the virtual address is 12345678 in hexadecimal, what would be the page number in hexadecimal?",
    "options": [
      "82%",
      "10250",
      "12345",
      "4033"
    ],
    "answer": 2,
    "explanation": "Không gian địa chỉ 2^32 từ và kích thước trang 2^12 từ nên phần độ dời (offset) chiếm 12 bit, tương ứng 12 / 4 = 3 chữ số hệ thập lục phân cuối (678). Do đó, số hiệu trang (page number) của địa chỉ 12345678 là 5 chữ số hex đầu: 12345."
  },
  {
    "id": 8073,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] A computer with a 32-bit address uses a two-level page table. virtual addresses are split into a 10-bit top-level page table field, an 12-bit second-level page table field, and an offset. how large are the pages?",
    "options": [
      "Pages",
      "9k, 15k, 10k",
      "Thread segment",
      "1-kb page"
    ],
    "answer": 3,
    "explanation": "Địa chỉ 32 bit gồm 10 bit cho bảng trang cấp 1 và 12 bit cho bảng trang cấp 2, nên số bit dành cho offset là 32 - 10 - 12 = 10 bit. Suy ra kích thước mỗi trang là 2^10 byte = 1024 byte = 1 KB (1-kb page)."
  },
  {
    "id": 8074,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] The ____ policy is based on the theory that the best page to remove is the one that has been in memory the longest",
    "options": [
      "Fifo",
      "Case 4",
      "Thrashing",
      "Unix"
    ],
    "answer": 0,
    "explanation": "Chính sách thay thế trang FIFO (First-In, First-Out) dựa trên nguyên tắc trang nào đã nằm trong bộ nhớ chính lâu nhất sẽ bị chọn để đẩy ra (remove) đầu tiên."
  },
  {
    "id": 8075,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] When there is an excessive amount of page swapping between main memory and secondary storage, the operation becomes inefficient, which is called ____.",
    "options": [
      "Page",
      "Thrashing",
      "Main memory",
      "10250"
    ],
    "answer": 1,
    "explanation": "Khi xảy ra tình trạng hoán đổi trang (page swapping) quá mức giữa bộ nhớ chính và bộ nhớ phụ làm hiệu suất hệ thống suy giảm nghiêm trọng, hiện tượng này được gọi là trì trệ trang (Thrashing)."
  },
  {
    "id": 8076,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] In terms of main memory efficiency the method of \"backing up pages dynamically\" in comparison with the method of \"paging to a static swap area\" is",
    "options": [
      "Worse",
      "Page",
      "Thrashing",
      "60%"
    ],
    "answer": 0,
    "explanation": "Về hiệu suất sử dụng bộ nhớ chính, phương pháp sao lưu trang động (backing up pages dynamically) kém hơn (Worse) so với phương pháp phân trang vào vùng hoán đổi tĩnh (static swap area) được cấp phát sẵn."
  },
  {
    "id": 8077,
    "topic": "📚 FPT Bank (Ch.4: File Systems)",
    "question": "[FPT Bank - Ch.4: File Systems] Which of the following is specified to indicate the directory where the file is located?",
    "options": [
      "Journaling file systems",
      "1 tb",
      "Mkdir",
      "Path name"
    ],
    "answer": 3,
    "explanation": "Tên đường dẫn (Path name) là chuỗi chỉ định vị trí thư mục cụ thể nơi tệp tin được lưu trữ trong hệ thống cây thư mục."
  },
  {
    "id": 8078,
    "topic": "📚 FPT Bank (Ch.4: File Systems)",
    "question": "[FPT Bank - Ch.4: File Systems] Which of the following file structure is widely used on large mainframe computers?",
    "options": [
      "Demand partition",
      "Cd",
      "Tree",
      "Mkdir"
    ],
    "answer": 2,
    "explanation": "Cấu trúc tệp dạng cây (Tree) được sử dụng rộng rãi trên các máy tính lớn (mainframe) để tổ chức bản ghi có khóa và hỗ trợ tìm kiếm phân cấp nhanh chóng."
  },
  {
    "id": 8079,
    "topic": "📚 FPT Bank (Ch.4: File Systems)",
    "question": "[FPT Bank - Ch.4: File Systems] Which of the following allocation methods the i-nodes use?",
    "options": [
      "Append",
      "Stream special file",
      "1 tb",
      "Indexed allocation"
    ],
    "answer": 3,
    "explanation": "Cấu trúc i-node trong hệ thống tệp UNIX sử dụng phương pháp cấp phát theo chỉ mục (Indexed allocation), dùng các con trỏ trong i-node để trỏ trực tiếp và gián tiếp tới các khối dữ liệu của tệp."
  },
  {
    "id": 8080,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] The disk block in a partition that includes a magic number, the number of blocks in the file system and other key administrative information is called:",
    "options": [
      "43251",
      "25%",
      "Superblock",
      "2% of the cpu"
    ],
    "answer": 2,
    "explanation": "Superblock là khối đĩa trong phân vùng chứa số hiệu định danh (magic number), tổng số khối của hệ thống tệp cùng các thông tin quản trị cốt lõi khác."
  },
  {
    "id": 8081,
    "topic": "📚 FPT Bank (Ch.4: File Systems)",
    "question": "[FPT Bank - Ch.4: File Systems] Which of the following is correct about symbolic links?",
    "options": [
      "Create",
      "Demand partition",
      "Symbolic links can point to files in the network",
      "When jobs have the same size"
    ],
    "answer": 2,
    "explanation": "Liên kết mềm (Symbolic link) lưu đường dẫn dạng văn bản tới tệp đích thay vì trỏ trực tiếp tới i-node cục bộ, nên có thể trỏ tới các tệp nằm trên máy khác trong mạng (Symbolic links can point to files in the network)."
  },
  {
    "id": 8082,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] Which of the following is true about the block size in disk space management",
    "options": [
      "A hard drive is an example of a character-oriented i/o device",
      "Balance cpu and i/o intensive jobs",
      "Processor, main memory, i/o modules, system bus",
      "The larger the block size is the worse the disk space utilization is"
    ],
    "answer": 3,
    "explanation": "Kích thước khối (block size) càng lớn thì phần dung lượng thừa ở khối cuối của mỗi tệp (phân mảnh nội) càng lớn, làm hiệu suất sử dụng không gian đĩa càng tệ đi (The larger the block size is the worse the disk space utilization is)."
  },
  {
    "id": 8083,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] Which class of i/o devices that disks and tapes belong to?",
    "options": [
      "43251",
      "Boot block",
      "Block devices",
      "Spooling"
    ],
    "answer": 2,
    "explanation": "Đĩa từ và băng từ đọc/ghi dữ liệu theo từng khối có kích thước cố định và có thể định địa chỉ độc lập, do đó thuộc lớp thiết bị khối (Block devices)."
  },
  {
    "id": 8084,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] In general, which is the best technique for i/o data transfer?",
    "options": [
      "Block-oriented devices",
      "Psw and pc",
      "Device driver",
      "Direct memory access"
    ],
    "answer": 3,
    "explanation": "Truy cập bộ nhớ trực tiếp (Direct memory access - DMA) là kỹ thuật truyền dữ liệu I/O tốt nhất nói chung vì bộ điều khiển DMA chuyển dữ liệu thẳng giữa thiết bị và RAM mà không làm CPU bận rộn ở từng byte."
  },
  {
    "id": 8085,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] What is the table where its entry contains the memory address of interrupt service routine",
    "options": [
      "Uses a fifo queue",
      "Virtual memory",
      "1-kb page",
      "Interrupt vector table"
    ],
    "answer": 3,
    "explanation": "Bảng vectơ ngắt (Interrupt vector table) là bảng lưu địa chỉ bộ nhớ của các trình phục vụ ngắt (interrupt service routine - ISR) tương ứng với từng số hiệu ngắt."
  },
  {
    "id": 8086,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] Imagine that a certain printer can print 400 characters per second and that the time to write a character to the printer's output register is so short it can be ignored. if to run this printer using interrupt-driven i/o and each character printed requires an interrupt that takes 50 �sec all-in to service. how many percent of the cpu does the interrupt overhead cost?",
    "options": [
      "Programmed i/o",
      "2% of the cpu",
      "Unique memory address",
      "Seek time"
    ],
    "answer": 1,
    "explanation": "Máy in in 400 ký tự/giây, mỗi ngắt tốn 50 µs nên tổng thời gian CPU xử lý ngắt trong 1 giây là 400 × 50 µs = 20,000 µs = 0.02 giây. Chi phí chiếm dụng CPU là (0.02 / 1) × 100% = 2% (2% of the cpu)."
  },
  {
    "id": 8087,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] Which of the following i/o software do device drivers do?",
    "options": [
      "Mapping files onto secondary storage",
      "Logical block addressing",
      "Writing commands to the device registers",
      "Direct memory access"
    ],
    "answer": 2,
    "explanation": "Trình điều khiển thiết bị (Device driver) là thành phần phần mềm I/O giao tiếp trực tiếp với phần cứng thông qua việc ghi các lệnh điều khiển vào thanh ghi thiết bị (Writing commands to the device registers)."
  },
  {
    "id": 8088,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] Which is not a component of general structure of device drivers?",
    "options": [
      "Checking to see if the user is permitted to use the device",
      "Block devices and character devices",
      "Dma controller is usually faster than cpu",
      "Caching a device control register would be disastrous"
    ],
    "answer": 0,
    "explanation": "Việc kiểm tra xem người dùng có quyền sử dụng thiết bị hay không (Checking to see if the user is permitted to use the device) thuộc tầng phần mềm I/O độc lập thiết bị và kiểm soát bảo mật của HĐH, không nằm trong cấu trúc của device driver."
  },
  {
    "id": 8089,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] Of the three components of access time in a disk, ____ is the longest.",
    "options": [
      "Seek time",
      "Block devices",
      "Boot block",
      "Control unit"
    ],
    "answer": 0,
    "explanation": "Trong 3 thành phần của thời gian truy cập đĩa (seek time, rotational latency, transfer time), thời gian di chuyển đầu đọc cơ học tới đúng rãnh (Seek time) chiếm thời gian lâu nhất."
  },
  {
    "id": 8090,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] Which raid level duplicates all the disks?",
    "options": [
      "Delete",
      "Device driver",
      "1",
      "Superblock"
    ],
    "answer": 2,
    "explanation": "Mức RAID 1 sử dụng cơ chế nhân bản đĩa (disk mirroring), sao chép toàn bộ dữ liệu trên các đĩa sang đĩa dự phòng giống hệt nhau để tăng khả năng chịu lỗi."
  },
  {
    "id": 8091,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] How much cylinder skew is needed for a 7200- rpm (rotate per minute) disk with the track-to-track seek time of 1 msec? the disk has 200 sectors of 512 bytes on each track.",
    "options": [
      "500,000",
      "43251",
      "Device controller",
      "24 sectors"
    ],
    "answer": 3,
    "explanation": "Tốc độ quay 7200 vòng/phút = 7200 / 60 = 120 vòng/giây. Trong thời gian chuyển rãnh 1 ms = 0.001 s, đĩa quay được 120 × 200 × 0.001 = 24 sector, do đó độ lệch rãnh (cylinder skew) cần thiết là 24 sectors."
  },
  {
    "id": 8092,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] A computer uses a programmable clock in square-wave mode. if 500 mhz crystal is used, what should be the value of the holding register to achieve a clock resolution of 1 msec (clock tick)?",
    "options": [
      "Control unit",
      "Protocols",
      "18 sectors",
      "500,000"
    ],
    "answer": 3,
    "explanation": "Thạch anh 500 MHz tạo ra 500 × 10^6 xung/giây. Để đạt độ phân giải 1 ms = 0.001 giây cho mỗi nhịp đồng hồ (clock tick), giá trị thanh ghi giữ (holding register) là 500 × 10^6 × 0.001 = 500,000."
  },
  {
    "id": 8093,
    "topic": "📚 FPT Bank (Ch.6: Deadlocks)",
    "question": "[FPT Bank - Ch.6: Deadlocks] What is true about preemptable resources?",
    "options": [
      "Circular wait",
      "Dijkstra",
      "Can be taken away from a process with no ill effects",
      "Circular-wait condition"
    ],
    "answer": 2,
    "explanation": "Tài nguyên có thể trưng dụng (Preemptable resources, như CPU hoặc bộ nhớ) là tài nguyên có thể thu hồi tạm thời khỏi một tiến trình đang giữ mà không gây ra hậu quả sai lệch (Can be taken away from a process with no ill effects)."
  },
  {
    "id": 8094,
    "topic": "📚 FPT Bank (Ch.6: Deadlocks)",
    "question": "[FPT Bank - Ch.6: Deadlocks] ____ allows a resource to be held by a process as long as it is needed.",
    "options": [
      "Two or more processes",
      "Squares",
      "Mutual exlusion",
      "Hold and wait condition"
    ],
    "answer": 3,
    "explanation": "Điều kiện giữ và chờ (Hold and wait condition) cho phép một tiến trình tiếp tục giữ tài nguyên đã được cấp trong suốt thời gian chờ cấp thêm tài nguyên khác."
  },
  {
    "id": 8095,
    "topic": "📚 FPT Bank (Ch.6: Deadlocks)",
    "question": "[FPT Bank - Ch.6: Deadlocks] Assume the following events and actions take place. the following statement____ is true. 4 P1 - R2 5 P2 - R3 6 P3 - R1",
    "options": [
      "Circular",
      "Event 6 caused deadlock.",
      "Circular-wait condition",
      "Circular wait"
    ],
    "answer": 1,
    "explanation": "Các bước P1 gắn với R2, P2 gắn với R3 và bước 6 là P3 yêu cầu R1 tạo thành vòng chờ đợi khép kín (circular wait), nên sự kiện thứ 6 chính là nguyên nhân gây ra bế tắc (Event 6 caused deadlock.)."
  },
  {
    "id": 8096,
    "topic": "📚 FPT Bank (Ch.6: Deadlocks)",
    "question": "[FPT Bank - Ch.6: Deadlocks] Which of the following statements does not apply to manual deadlock management?",
    "options": [
      "Os designers are normally very sensitive to deadlock when designing resource managers",
      "Real-time",
      "Take resources away",
      "Can be taken away from a process with no ill effects"
    ],
    "answer": 0,
    "explanation": "Trong quản lý deadlock thủ công (thực chất là bỏ qua hoặc xử lý ở mức tối thiểu theo kiểu thuật toán Đà điểu), nhà thiết kế HĐH không đặt nặng vấn đề deadlock khi thiết kế bộ quản lý tài nguyên; vì vậy phát biểu nói họ thường rất nhạy cảm với deadlock (Os designers are normally very sensitive...) là không đúng."
  },
  {
    "id": 8097,
    "topic": "📚 FPT Bank (Ch.6: Deadlocks)",
    "question": "[FPT Bank - Ch.6: Deadlocks] What following resource allocation state is unsafe?",
    "options": [
      "Hoare",
      "Event 6 caused deadlock.",
      "Fig. c",
      "Circular wait"
    ],
    "answer": 2,
    "explanation": "Trạng thái không an toàn (Unsafe state) trong bài toán cấp phát tài nguyên (như đồ thị/bảng Banker) là trạng thái mà tài nguyên còn rảnh (Available) không đủ để đảm bảo tìm ra một chuỗi hoàn thành an toàn (safe sequence) cho mọi tiến trình — tức có nguy cơ dẫn đến bế tắc (Deadlock).\n• Trong các hình minh họa trạng thái cấp phát của bài toán này (Fig. a, b, c, d), hình Fig. c rơi vào trường hợp không có tiến trình nào đủ tài nguyên để hoàn thành trước nên là trạng thái không an toàn (Unsafe)."
  },
  {
    "id": 8098,
    "topic": "📚 FPT Bank (Ch.6: Deadlocks)",
    "question": "[FPT Bank - Ch.6: Deadlocks] The scheme of ____ removes the possibility of a circular wait and therefore guarantees the removal of deadlocks.",
    "options": [
      "Hierarchical ordering",
      "Real-time",
      "Circular wait",
      "Fig. c"
    ],
    "answer": 0,
    "explanation": "Cơ chế sắp xếp thứ tự phân cấp (Hierarchical ordering - đánh số tài nguyên và buộc xin theo thứ tự tăng dần) loại bỏ khả năng hình thành vòng chờ (circular wait), qua đó đảm bảo ngăn chặn được bế tắc."
  },
  {
    "id": 8099,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] Movable-head magnetic disks, such as the computer hard drive, have ____ read/write head(s).",
    "options": [
      "Protocols",
      "Control unit",
      "One",
      "4"
    ],
    "answer": 2,
    "explanation": "Ổ đĩa từ có đầu từ di động (movable-head magnetic disk), như ổ cứng máy tính thông thường, chỉ có một (One) đầu đọc/ghi cho mỗi bề mặt đĩa gắn trên cần đọc di chuyển qua các track."
  },
  {
    "id": 8100,
    "topic": "📚 FPT Bank (Ch.1: Introduction & OS Concepts)",
    "question": "[FPT Bank - Ch.1: Introduction & OS Concepts] He data-transfer rate for an optical disc is measured in ____ per second and refers to the speed",
    "options": [
      "User interface",
      "Multimedia",
      "Dynamic",
      "Megabytes"
    ],
    "answer": 3,
    "explanation": "Tốc độ truyền dữ liệu (data-transfer rate) của đĩa quang được đo bằng đơn vị megabyte mỗi giây (Megabytes per second), thể hiện lượng dữ liệu đọc/ghi được trong một giây."
  },
  {
    "id": 8101,
    "topic": "📚 FPT Bank (Ch.1: Introduction & OS Concepts)",
    "question": "[FPT Bank - Ch.1: Introduction & OS Concepts] If the transport speed for a magnetic tape is 200 inches per second and the density is 1600 bpi, a",
    "options": [
      "User interface",
      "1940-1955",
      "320,000",
      "Multimedia"
    ],
    "answer": 2,
    "explanation": "Tốc độ truyền dữ liệu của băng từ bằng tích giữa tốc độ cuộn băng và mật độ ghi: 200 inch/giây × 1600 bpi (byte/inch) = 320,000 byte/giây."
  },
  {
    "id": 8102,
    "topic": "📚 FPT Bank (Ch.1: Introduction & OS Concepts)",
    "question": "[FPT Bank - Ch.1: Introduction & OS Concepts] ____ is a way to optimize search times by ordering the requests once the read/write heads have",
    "options": [
      "Workstations",
      "Implicit parallelism",
      "Precise interrupt",
      "Rotational ordering"
    ],
    "answer": 3,
    "explanation": "Sắp xếp theo chiều quay (Rotational ordering) tối ưu thời gian tìm kiếm bằng cách sắp thứ tự các yêu cầu theo vị trí sector trên vòng quay sau khi đầu đọc/ghi đã di chuyển tới đúng track."
  },
  {
    "id": 8103,
    "topic": "📚 FPT Bank (Ch.1: Introduction & OS Concepts)",
    "question": "[FPT Bank - Ch.1: Introduction & OS Concepts] To put data on an optical disc requires a high -intensity laser beam, which burns indentations,",
    "options": [
      "Lands",
      "System calls",
      "1940-1955",
      "Ms-dos"
    ],
    "answer": 0,
    "explanation": "Để ghi dữ liệu lên đĩa quang, tia laser cường độ cao sẽ đốt tạo các vết lõm (pits) trên bề mặt phản quang, còn các phần phẳng không bị đốt nằm xen kẽ được gọi là Lands."
  },
  {
    "id": 8104,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] Data recorded on fixed- head dasds may or may not be blocked at the discretion of the ____.",
    "options": [
      "Lightweight processes",
      "Application programmer",
      "Running -> ready",
      "Ready -> blocked (waiting)"
    ],
    "answer": 1,
    "explanation": "Dữ liệu ghi trên các thiết bị lưu trữ truy cập trực tiếp đầu từ cố định (fixed-head DASD) có được gom khối (blocked) hay không do lập trình viên ứng dụng (Application programmer) quyết định."
  },
  {
    "id": 8105,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] The need for algorithms to resolve conflicts between processors is called process ____.",
    "options": [
      "Decentralized",
      "Instruction set",
      "Synchronization",
      "Superscalar"
    ],
    "answer": 2,
    "explanation": "Nhu cầu thiết kế thuật toán để giải quyết xung đột khi nhiều bộ xử lý hoặc tiến trình truy cập đồng thời được gọi là đồng bộ hóa tiến trình (Synchronization)."
  },
  {
    "id": 8106,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] In a symmetric configuration, processor scheduling is ____.",
    "options": [
      "Binary semaphores",
      "Job scheduling",
      "Decentralized",
      "Error exit"
    ],
    "answer": 2,
    "explanation": "Trong cấu hình đa xử lý đối xứng (symmetric configuration), mọi bộ xử lý đều bình đẳng và dùng chung hàng đợi sẵn sàng, nên việc điều phối CPU mang tính phi tập trung (Decentralized)."
  },
  {
    "id": 8107,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] Parallel processing is also called ____.",
    "options": [
      "Sequentially",
      "Multiprocessing",
      "Decentralized",
      "Semaphores"
    ],
    "answer": 1,
    "explanation": "Xử lý song song (parallel processing) trên hệ thống có nhiều CPU cùng thực thi đồng thời còn được gọi là đa xử lý (Multiprocessing)."
  },
  {
    "id": 8108,
    "topic": "📚 FPT Bank (Ch.6: Deadlocks)",
    "question": "[FPT Bank - Ch.6: Deadlocks] ____ proposed a solution to the readers and writers problem that did not result in starvation",
    "options": [
      "Hoare",
      "Mutual exlusion",
      "Fig. c",
      "Circular-wait condition"
    ],
    "answer": 0,
    "explanation": "Tony Hoare là người đã đề xuất lời giải dùng Monitor cho bài toán Người đọc - Người viết (Readers-Writers) nhằm tránh tình trạng đói tài nguyên (starvation)."
  },
  {
    "id": 8109,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] Most current operating systems support the implementation of threads, or ____, which have",
    "options": [
      "Processor capacity",
      "Disabling interrupts",
      "Lightweight processes",
      "Resource holding"
    ],
    "answer": 2,
    "explanation": "Hầu hết các hệ điều hành hiện đại đều hỗ trợ luồng (threads), còn gọi là tiến trình nhẹ (Lightweight processes), vì chúng chia sẻ không gian địa chỉ của tiến trình cha nên chuyển đổi ngữ cảnh rất nhanh."
  },
  {
    "id": 8110,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] Each active thread in a process shares the ____ and the resources allocated to its process.",
    "options": [
      "Semaphores",
      "4% of the cpu",
      "Job scheduling",
      "Data area"
    ],
    "answer": 3,
    "explanation": "Mỗi luồng đang hoạt động trong một tiến trình đều dùng chung vùng dữ liệu (Data area) và các tài nguyên được cấp cho tiến trình đó, chỉ có bộ đếm chương trình, thanh ghi và stack riêng."
  },
  {
    "id": 8111,
    "topic": "📚 FPT Bank (Ch.1: Introduction & OS Concepts)",
    "question": "[FPT Bank - Ch.1: Introduction & OS Concepts] Automatic detection by the compiler of instructions that can be performed in parallel is called",
    "options": [
      "Qnx and vxwork",
      "Program counter (pc)",
      "Precise interrupt",
      "Implicit parallelism"
    ],
    "answer": 3,
    "explanation": "Việc trình biên dịch tự động phát hiện các lệnh có thể chạy đồng thời với nhau mà không cần lập trình viên chỉ định rõ được gọi là song song ngầm định (Implicit parallelism)."
  },
  {
    "id": 8112,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] Operations on semaphore s enforce the concept of ____, which is necessary to avoid having",
    "options": [
      "Decentralized",
      "Instruction set",
      "Mutual exclusion",
      "Resource holding"
    ],
    "answer": 2,
    "explanation": "Các phép toán trên semaphore s thực thi cơ chế loại trừ lẫn nhau (Mutual exclusion), đảm bảo không có nhiều tiến trình cùng sửa đổi dữ liệu dùng chung tại một thời điểm."
  },
  {
    "id": 8113,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] A ____ of processing must be handled as a unit.",
    "options": [
      "Window management",
      "Critical region",
      "Processor capacity",
      "Running -> ready"
    ],
    "answer": 1,
    "explanation": "Một miền găng (Critical region) của quá trình xử lý truy cập tài nguyên dùng chung phải được xử lý như một đơn vị nguyên tử, không bị tiến trình khác ngắt ngang."
  },
  {
    "id": 8114,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] In the \"dining philosophers\" problem, a philosopher can pick up a fork when____.",
    "options": [
      "Process management",
      "Running -> ready",
      "Process control block",
      "There are two available"
    ],
    "answer": 3,
    "explanation": "Trong bài toán Các triết gia ăn tối (Dining Philosophers), một triết gia chỉ nên nhấc nĩa khi cả hai chiếc nĩa bên cạnh đều đang sẵn có (There are two available) để tránh deadlock."
  },
  {
    "id": 8115,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] Is necessary in any computer system because some resources such as memory, cpu, and",
    "options": [
      "First fit",
      "Virtual memory",
      "Is volatile",
      "Mutual exclusion"
    ],
    "answer": 3,
    "explanation": "Loại trừ lẫn nhau (Mutual exclusion) là cơ chế bắt buộc trong mọi hệ thống máy tính vì các tài nguyên như bộ nhớ, CPU hay thiết bị ngoại vi không thể cho phép nhiều tiến trình chiếm dụng xung đột cùng lúc."
  },
  {
    "id": 8116,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] ____ is when, in modern printing systems, a disk accepts output from several users and acts as a",
    "options": [
      "Control unit",
      "Programmed i/o",
      "Psw and pc",
      "Spooling"
    ],
    "answer": 3,
    "explanation": "Spooling là kỹ thuật trong hệ thống in ấn hiện đại, nơi đĩa từ tiếp nhận đầu ra từ nhiều người dùng làm bộ đệm trung gian rồi đẩy lần lượt ra máy in."
  },
  {
    "id": 8117,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] ____ occurs when two processes do not release control of resources they are using.",
    "options": [
      "Resource holding",
      "Interrupt signal",
      "4% of the cpu",
      "Synchronization"
    ],
    "answer": 0,
    "explanation": "Tình trạng giữ tài nguyên (Resource holding) xảy ra khi hai tiến trình không chịu giải phóng quyền kiểm soát các tài nguyên mà chúng đang chiếm giữ."
  },
  {
    "id": 8118,
    "topic": "📚 FPT Bank (Ch.6: Deadlocks)",
    "question": "[FPT Bank - Ch.6: Deadlocks] For ____ systems, deadlocks quickly become critical situations.",
    "options": [
      "Preemption condition",
      "Timeouts",
      "Real-time",
      "Hoare"
    ],
    "answer": 2,
    "explanation": "Đối với các hệ thống thời gian thực (Real-time) có yêu cầu nghiêm ngặt về thời hạn đáp ứng, bế tắc (deadlock) nhanh chóng trở thành sự cố nghiêm trọng."
  },
  {
    "id": 8119,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] Failure to lock database records before updating them may result in a ____ between processes.",
    "options": [
      "Error exit",
      "Race",
      "Pipeline",
      "Thread"
    ],
    "answer": 1,
    "explanation": "Việc không khóa bản ghi cơ sở dữ liệu trước khi cập nhật đồng thời có thể dẫn đến tình trạng tranh chấp dữ liệu (Race condition) giữa các tiến trình."
  },
  {
    "id": 8120,
    "topic": "📚 FPT Bank (Ch.6: Deadlocks)",
    "question": "[FPT Bank - Ch.6: Deadlocks] ____ developed the banker's algorithm.",
    "options": [
      "Dijkstra",
      "No preemption",
      "Circular",
      "Hierarchical ordering"
    ],
    "answer": 0,
    "explanation": "Edsger Dijkstra là tác giả đã phát triển Thuật toán Nhà băng (Banker's algorithm) dùng để phát hiện trạng thái an toàn và phòng tránh deadlock."
  },
  {
    "id": 8121,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] A network that's congested or has filled a large percentage of its i/o buffer space can become",
    "options": [
      "Protocols",
      "Control unit",
      "Programmed i/o",
      "Seek time"
    ],
    "answer": 0,
    "explanation": "Một mạng bị tắc nghẽn hoặc đã lấp đầy phần lớn không gian bộ đệm I/O có thể dẫn đến bế tắc ở tầng giao thức (Protocols) nếu không có cơ chế kiểm soát luồng phù hợp."
  },
  {
    "id": 8122,
    "topic": "📚 FPT Bank (Ch.1: Introduction & OS Concepts)",
    "question": "[FPT Bank - Ch.1: Introduction & OS Concepts] Interactive systems generally improve the use of resources through ____ resource sharing, but",
    "options": [
      "320,000",
      "Dynamic",
      "E-cos",
      "Businesses"
    ],
    "answer": 1,
    "explanation": "Các hệ thống tương tác (interactive systems) nâng cao hiệu suất sử dụng tài nguyên nhờ chia sẻ tài nguyên động (Dynamic resource sharing) theo nhu cầu phát sinh thực tế của người dùng."
  },
  {
    "id": 8123,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] When using the clock page replacement policy, a page with a reference bit of ____ is replaced.",
    "options": [
      "0",
      "One",
      "Superblock",
      "500,000"
    ],
    "answer": 0,
    "explanation": "Khi dùng chính sách thay thế trang Đồng hồ (Clock page replacement), trang nào có bit tham chiếu (reference bit) bằng 0 (chưa được truy cập lại) sẽ bị chọn để thay thế."
  },
  {
    "id": 8124,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] ____ gives users the appearance that their programs are being completely loaded in main",
    "options": [
      "Virtual memory",
      "Main memory",
      "Mutual exclusion",
      "Firmware"
    ],
    "answer": 0,
    "explanation": "Bộ nhớ ảo (Virtual memory) tạo cho người dùng cảm giác như toàn bộ chương trình của họ đang được nạp đầy đủ trong bộ nhớ chính, dù thực tế chỉ nạp các trang cần thiết."
  },
  {
    "id": 8125,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] Studies have shown that having any ____, even a small one, can substantially improve the",
    "options": [
      "Cache",
      "7600",
      "1-kb page",
      "Pages"
    ],
    "answer": 0,
    "explanation": "Các nghiên cứu cho thấy chỉ cần có bộ nhớ đệm (Cache), dù dung lượng nhỏ, cũng cải thiện đáng kể hiệu năng truy xuất nhờ tính cục bộ của dữ liệu."
  },
  {
    "id": 8126,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] To access a location in memory when using segmented memory management, the address is",
    "options": [
      "Process creation",
      "The segment number and the displacement",
      "Which page to remove to provide space for an incoming page",
      "Longest time in memory without being referenced"
    ],
    "answer": 1,
    "explanation": "Trong quản lý bộ nhớ phân đoạn (segmented memory management), địa chỉ logic được xác định bằng cặp giá trị: số hiệu phân đoạn và độ dời trong đoạn (The segment number and the displacement)."
  },
  {
    "id": 8127,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] If a particular demand paging configuration has 9 page interrupts out of 11 page requests,",
    "options": [
      "17 bits",
      "82%",
      "4 mb",
      "10250"
    ],
    "answer": 1,
    "explanation": "Có 9 lỗi trang (page interrupts) trên tổng số 11 yêu cầu trang, nên tỉ lệ lỗi trang là 9 / 11 ≈ 0.8181 = 81.8%, làm tròn thành 82%."
  },
  {
    "id": 8128,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] There are ____ entries per page in the pmt.",
    "options": [
      "Case 4",
      "4033",
      "1",
      "1-kb page"
    ],
    "answer": 2,
    "explanation": "Trong bảng ánh xạ trang (PMT - Page Map Table), mỗi trang logic có đúng 1 mục (entry) để lưu ánh xạ tới khung trang tương ứng và các bit điều khiển."
  },
  {
    "id": 8129,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] The cache hit ratio is ____, if the total number of requests is 10 and 6 of those are found in",
    "options": [
      "60%",
      "10250",
      "Thrashing",
      "4033"
    ],
    "answer": 0,
    "explanation": "Tỉ lệ trúng bộ nhớ đệm (cache hit ratio) bằng số yêu cầu tìm thấy trong cache chia cho tổng số yêu cầu: 6 / 10 = 60%."
  },
  {
    "id": 8130,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] Assume that the page map table below is in effect. the number of lines per page is 400. the",
    "options": [
      "4 mb",
      "4033",
      "Firmware",
      "1mb"
    ],
    "answer": 1,
    "explanation": "Bài toán dịch địa chỉ phân trang (Paging) với kích thước mỗi trang là 400 dòng (400 lines/page), tìm địa chỉ vật lý thực tế của dòng 433:\n• Bước 1 — Số hiệu trang (Page Number) = ⌊433 / 400⌋ = 1.\n• Bước 2 — Độ dời trong trang (Offset) = 433 mod 400 = 33.\n• Bước 3 — Tra bảng ánh xạ trang (PMT): Trang 1 được nạp vào Khung trang (Frame) số 10.\n⇒ Địa chỉ vật lý = (Frame × Kích thước trang) + Offset = (10 × 400) + 33 = 4033."
  },
  {
    "id": 8131,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] Consider the following four cases. the lru policy,____, will be least likely to swap.",
    "options": [
      "Case 4",
      "Is volatile",
      "1-kb page",
      "10250"
    ],
    "answer": 0,
    "explanation": "Chính sách thay thế trang LRU (Least Recently Used — lâu nhất chưa được dùng) luôn chọn loại bỏ (swap out) trang có thời điểm truy cập gần nhất là XA NHẤT trong quá khứ, và giữ lại trang vừa mới được sử dụng gần đây nhất.\n• Khi so sánh 4 trường hợp (Case 1–4), Case 4 đại diện cho trang vừa được tham chiếu gần đây nhất (most recently used) nên ít có khả năng bị đẩy ra đĩa (least likely to swap) nhất."
  },
  {
    "id": 8132,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] In a single -user system, jobs are processed ____.",
    "options": [
      "Resource holding",
      "Instruction set",
      "Middle- level",
      "Sequentially"
    ],
    "answer": 3,
    "explanation": "Trong hệ thống đơn người dùng (single-user system) không hỗ trợ đa chương phức tạp, các công việc được xử lý một cách tuần tự (Sequentially), hết công việc này mới tới công việc tiếp theo."
  },
  {
    "id": 8133,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] 3 put job in waiting queue",
    "options": [
      "Is volatile",
      "First-fit memory allocation",
      "Internal fragmentation",
      "Virtual memory."
    ],
    "answer": 1,
    "explanation": "Trong ví dụ mô phỏng cấp phát bộ nhớ First-fit (cấp phát vùng trống đầu tiên đủ lớn) trong giáo trình, tác vụ thứ 3 (Job 3) không vừa với các phân vùng trống còn lại nên bị đưa vào hàng đợi (waiting queue). Đây là bước đặc trưng minh họa cơ chế hoạt động của First-fit memory allocation."
  },
  {
    "id": 8134,
    "topic": "📚 FPT Bank (Ch.1: Introduction & OS Concepts)",
    "question": "[FPT Bank - Ch.1: Introduction & OS Concepts] The operating system can tell the ____ of each group of digits by its location in the line and the",
    "options": [
      "Kerneld",
      "Businesses",
      "Function",
      "2.4 trillion"
    ],
    "answer": 2,
    "explanation": "Hệ điều hành nhận biết chức năng (function) của từng nhóm chữ số hay thẻ điều khiển (control cards) dựa vào vị trí của chúng trên dòng và định dạng quy ước. Nhờ đó, hệ điều hành phân biệt chính xác đâu là lệnh điều khiển, tham số hay dữ liệu đầu vào."
  },
  {
    "id": 8135,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] The ____ of memory, sometimes referred to as garbage collection or defragmentation, is",
    "options": [
      "Thread segment",
      "7600",
      "Cache",
      "Compaction"
    ],
    "answer": 3,
    "explanation": "Nén bộ nhớ (Compaction), đôi khi gọi là thu gom rác (garbage collection) hoặc chống phân mảnh (defragmentation), là kỹ thuật dồn các khối bộ nhớ đang sử dụng về một phía. Quá trình này gộp các khoảng trống nhỏ rải rác thành một vùng nhớ trống lớn liên tục để khắc phục phân mảnh ngoài."
  },
  {
    "id": 8136,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] By compacting and relocating, the memory manager optimizes the use of memory and thus",
    "options": [
      "Fifo",
      "Compaction",
      "Overhead",
      "60%"
    ],
    "answer": 2,
    "explanation": "Bằng cách nén bộ nhớ (compacting) và tái định vị (relocating), trình quản lý bộ nhớ tối ưu hóa không gian lưu trữ và cải thiện thông lượng, nhưng cái giá phải trả là phát sinh chi phí phụ trội (Overhead) về thời gian xử lý của CPU khi di chuyển dữ liệu."
  },
  {
    "id": 8137,
    "topic": "📚 FPT Bank (Ch.4: File Systems)",
    "question": "[FPT Bank - Ch.4: File Systems] The fixed partition scheme works well ____.",
    "options": [
      "The antivirus program checks all files for viruses.",
      "Indexed allocation",
      "When jobs have the same size",
      "Link"
    ],
    "answer": 2,
    "explanation": "Sơ đồ phân vùng cố định (fixed partition scheme) chia RAM thành các vùng có kích thước định sẵn ngay từ đầu. Cơ chế này hoạt động hiệu quả nhất khi các tác vụ có kích thước bằng nhau (when jobs have the same size) và khớp với phân vùng, giúp giảm thiểu lãng phí do phân mảnh nội (internal fragmentation)."
  },
  {
    "id": 8138,
    "topic": "📚 FPT Bank (Ch.1: Introduction & OS Concepts)",
    "question": "[FPT Bank - Ch.1: Introduction & OS Concepts] A supercomputer can perform ____ floating-point operations per second.",
    "options": [
      "1940-1955",
      "2.4 trillion",
      "Balance",
      "Workstations"
    ],
    "answer": 1,
    "explanation": "Theo giáo trình hệ điều hành, một siêu máy tính (supercomputer) có khả năng thực hiện khoảng 2,4 nghìn tỷ (2.4 trillion) phép toán dấu phẩy động mỗi giây (FLOPS). Đây là con số tiêu biểu minh họa năng lực tính toán vượt trội của dòng máy này."
  },
  {
    "id": 8139,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] In second-generation computers, to reduce the discrepancy in speed between the i/o and the",
    "options": [
      "Device driver",
      "Control unit",
      "500,000",
      "24 sectors"
    ],
    "answer": 1,
    "explanation": "Trên máy tính thế hệ thứ hai, để thu hẹp sự chênh lệch tốc độ giữa thiết bị vào/ra (I/O) chậm và CPU nhanh, người ta sử dụng bộ điều khiển (Control unit). Nó giúp điều phối và đệm luồng truyền dữ liệu ngoại vi để CPU không phải chờ đợi liên tục."
  },
  {
    "id": 8140,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] The primary distinguishing characteristic of modern computers is ____.",
    "options": [
      "Createprocess; fork",
      "Processor capacity",
      "Job scheduling",
      "Multiprocessing"
    ],
    "answer": 1,
    "explanation": "Đặc điểm phân biệt chính của các máy tính hiện đại là năng lực bộ xử lý (Processor capacity), bao gồm tốc độ xung nhịp, số lượng nhân và khả năng xử lý song song. Yếu tố này quyết định trực tiếp hiệu năng hệ thống và cách hệ điều hành lập lịch tài nguyên."
  },
  {
    "id": 8141,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] A system with ____ divides programs into parts and keep them in secondary storage, bringing",
    "options": [
      "9k, 15k, 10k",
      "Overhead",
      "Virtual memory",
      "Is volatile"
    ],
    "answer": 2,
    "explanation": "Hệ thống sử dụng bộ nhớ ảo (Virtual memory) chia chương trình thành các phần nhỏ (trang hoặc đoạn) và lưu trên bộ nhớ thứ cấp (đĩa cứng). Hệ điều hành chỉ nạp những phần đang cần thực thi vào RAM, cho phép chạy chương trình có kích thước lớn hơn bộ nhớ vật lý."
  },
  {
    "id": 8142,
    "topic": "📚 FPT Bank (Ch.1: Introduction & OS Concepts)",
    "question": "[FPT Bank - Ch.1: Introduction & OS Concepts] A hybrid system is a combination of the ____ systems.",
    "options": [
      "Qnx and vxwork",
      "Contention",
      "Rotational ordering",
      "Batch and interactive"
    ],
    "answer": 3,
    "explanation": "Hệ thống lai (hybrid system) là sự kết hợp giữa hệ thống xử lý theo lô (Batch) cho các tác vụ nền tự động và hệ thống tương tác (Interactive) phản hồi trực tiếp người dùng. Sự kết hợp này giúp vừa tận dụng tối đa CPU vừa đảm bảo độ trễ thấp cho người dùng trực tuyến."
  },
  {
    "id": 8143,
    "topic": "📚 FPT Bank (Ch.1: Introduction & OS Concepts)",
    "question": "[FPT Bank - Ch.1: Introduction & OS Concepts] Powerful microcomputers developed for use by commercial, educational and government",
    "options": [
      "Multimedia",
      "1940-1955",
      "Workstations",
      "Pseudoparallelism"
    ],
    "answer": 2,
    "explanation": "Máy trạm (Workstations) là các máy vi tính cấu hình mạnh được phát triển cho mục đích thương mại, giáo dục, nghiên cứu khoa học và cơ quan chính phủ. Chúng có năng lực xử lý tính toán, đồ họa và kết nối mạng vượt trội so với máy tính cá nhân thông thường."
  },
  {
    "id": 8144,
    "topic": "📚 FPT Bank (Ch.1: Introduction & OS Concepts)",
    "question": "[FPT Bank - Ch.1: Introduction & OS Concepts] Vacuum tube computers were used during the period of ____.",
    "options": [
      "User interface",
      "Balance",
      "1940-1955",
      "2.4 trillion"
    ],
    "answer": 2,
    "explanation": "Máy tính sử dụng ống chân không (vacuum tube computers) thuộc thế hệ thứ nhất, được dùng trong giai đoạn 1940-1955. Ở thời kỳ này chưa có hệ điều hành thực thụ và người dùng phải thao tác trực tiếp trên phần cứng qua bảng cắm dây (plug boards)."
  },
  {
    "id": 8145,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] ____ introduced the need for control cards, which defined the exact nature of each program",
    "options": [
      "Instruction set",
      "Critical region",
      "Job scheduling",
      "Round robin"
    ],
    "answer": 2,
    "explanation": "Cơ chế lập lịch tác vụ (Job scheduling) trong hệ thống xử lý theo lô đòi hỏi phải có các thẻ điều khiển (control cards) để mô tả chính xác bản chất từng chương trình và yêu cầu tài nguyên. Nhờ vậy hệ thống có thể tự động nạp, chạy và chuyển tiếp giữa các tác vụ."
  },
  {
    "id": 8146,
    "topic": "📚 FPT Bank (Ch.1: Introduction & OS Concepts)",
    "question": "[FPT Bank - Ch.1: Introduction & OS Concepts] A typical ____ computer houses devices to perform audio, video, and graphic creation and",
    "options": [
      "Close",
      "1940-1955",
      "Multimedia",
      "2.4 trillion"
    ],
    "answer": 2,
    "explanation": "Một máy tính đa phương tiện (Multimedia) điển hình tích hợp các thiết bị phần cứng chuyên dụng để tạo, chỉnh sửa và phát âm thanh (audio), video cũng như đồ họa (graphic). Hệ điều hành trên máy này cần tối ưu khả năng xử lý luồng dữ liệu thời gian thực."
  },
  {
    "id": 8147,
    "topic": "📚 FPT Bank (Ch.1: Introduction & OS Concepts)",
    "question": "[FPT Bank - Ch.1: Introduction & OS Concepts] The name for the nucleus of an operating system is the ____.",
    "options": [
      "Kerneld",
      "Multimedia",
      "Function",
      "User interface"
    ],
    "answer": 0,
    "explanation": "Phần lõi hay hạt nhân (nucleus) của hệ điều hành là Kernel (từ 'Kerneld' trong đáp án là lỗi đánh máy dư chữ 'd' của đề gốc). Kernel là thành phần trung tâm luôn thường trú trong RAM để trực tiếp điều khiển CPU, bộ nhớ, ngắt và các thiết bị phần cứng."
  },
  {
    "id": 8148,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] Which of the following is an operating system component?",
    "options": [
      "Process management",
      "Processor capacity",
      "Parent/child processes",
      "Multiprocessing"
    ],
    "answer": 0,
    "explanation": "Quản lý tiến trình (Process management) là một trong các thành phần cốt lõi của hệ điều hành, đảm nhiệm việc tạo, lập lịch, đồng bộ và kết thúc tiến trình. Các lựa chọn khác chỉ là đặc tính phần cứng hoặc quan hệ tiến trình chứ không phải thành phần chính của OS."
  },
  {
    "id": 8149,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] What is an operating system structure in which the communication between requesting process",
    "options": [
      "Firmware",
      "First fit",
      "Main memory",
      "Ms-dos"
    ],
    "answer": 3,
    "explanation": "MS-DOS là cấu trúc hệ điều hành đơn giản kiểu nguyên khối không phân tầng bảo vệ chặt chẽ, trong đó tiến trình yêu cầu dịch vụ hệ thống có thể giao tiếp trực tiếp xuống các hàm cấp thấp. Trong các phương án đã cho, Ms-dos là đáp án đại diện cho cấu trúc hệ điều hành này."
  },
  {
    "id": 8150,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] The language of the cpu is known as its",
    "options": [
      "Superscalar",
      "Response time",
      "Instruction set",
      "Job scheduling"
    ],
    "answer": 2,
    "explanation": "Ngôn ngữ mà bộ xử lý trung tâm (CPU) hiểu và thực thi trực tiếp được gọi là tập lệnh (Instruction set). Mọi chương trình viết bằng ngôn ngữ bậc cao đều phải được biên dịch sang tập lệnh nhị phân này để CPU thực hiện."
  },
  {
    "id": 8151,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] Linux and are often used as operating systems on supercomputers, mainframes, and servers.",
    "options": [
      "17 bits",
      "10250",
      "4 mb",
      "Unix"
    ],
    "answer": 3,
    "explanation": "Linux và Unix là hai hệ điều hành được sử dụng phổ biến nhất trên các siêu máy tính (supercomputers), máy tính lớn (mainframes) và máy chủ (servers). Cả hai đều nổi bật nhờ tính ổn định cao, bảo mật tốt, khả năng đa nhiệm và hỗ trợ mạng mạnh mẽ."
  },
  {
    "id": 8152,
    "topic": "📚 FPT Bank (Ch.1: Introduction & OS Concepts)",
    "question": "[FPT Bank - Ch.1: Introduction & OS Concepts] Where is the position of the operating system in computer system:",
    "options": [
      "Easier to extend and easier to debug from lower to upper layer",
      "The graph has at least one cycle.",
      "Disable all interrupts",
      "Above the hardware and under the user interface program"
    ],
    "answer": 3,
    "explanation": "Trong kiến trúc phân lớp của hệ thống máy tính, hệ điều hành nằm phía trên phần cứng (above the hardware) và bên dưới chương trình giao diện người dùng (under the user interface program). Nó đóng vai trò cầu nối quản lý tài nguyên phần cứng và cung cấp dịch vụ cho phần mềm phía trên."
  },
  {
    "id": 8153,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] Consider a computer system that has cache memory, main memory (ram) and disk, and os uses",
    "options": [
      "Linked list allocation",
      "4 msec. 40 msec. 20 sec",
      "Control unit",
      "Many i/o devices"
    ],
    "answer": 1,
    "explanation": "Bài toán tính thời gian quét toàn bộ một cuốn sách (1000 trang × 25 dòng × 80 ký tự = 2.000.000 bytes) ở 3 tầng bộ nhớ:\n• Từ Cache (tốc độ 2 ns/byte): 2.000.000 × 2 ns = 4.000.000 ns = 4 msec.\n• Từ RAM (tốc độ 20 ns/byte): 2.000.000 × 20 ns = 40.000.000 ns = 40 msec.\n• Từ Đĩa cứng (10 msec cho mỗi block 1000 bytes → cần đọc 2000 blocks): 2000 × 10 msec = 20.000 msec = 20 sec.\n⇒ Kết quả theo thứ tự 3 tầng là: 4 msec, 40 msec, 20 sec."
  },
  {
    "id": 8154,
    "topic": "📚 FPT Bank (Ch.1: Introduction & OS Concepts)",
    "question": "[FPT Bank - Ch.1: Introduction & OS Concepts] The basic idea behind the microkernel design is:",
    "options": [
      "Provide a set of services to system users",
      "To archive high reliability by splitting operating system up into small, well - defined modules",
      "Program counter (pc)",
      "Vacuum tubes, plug boards"
    ],
    "answer": 1,
    "explanation": "Tư tưởng cơ bản của thiết kế vi nhân (microkernel) là đạt độ tin cậy cao (high reliability) bằng cách chia nhỏ hệ điều hành thành các mô-đun nhỏ, định nghĩa rõ ràng chạy ở user mode. Nhờ tách rời các dịch vụ khỏi nhân, lỗi ở một mô-đun không làm treo toàn bộ hệ thống."
  },
  {
    "id": 8155,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] Which of the following conditions that causes the processes to be terminated, when processes have a program bug?",
    "options": [
      "Circular-wait condition",
      "Normal exit (voluntary)",
      "Minimize average waiting time",
      "Procedure call handler code"
    ],
    "answer": 1,
    "explanation": "Giải thích đáp án 'Normal exit (voluntary)': Là trạng thái kết thúc tiến trình tự nguyện khi chương trình hoàn tất công việc và tự gọi lệnh thoát (như exit() trên UNIX hoặc ExitProcess trên Windows).\n• Lưu ý quan trọng khi đi thi: Theo giáo trình Tanenbaum có 4 lý do kết thúc tiến trình gồm (1) Normal exit (tự nguyện - xong việc), (2) Error exit (tự nguyện - tự phát hiện lỗi input), (3) Fatal error (không tự nguyện - lỗi bug chương trình như chia cho 0), và (4) Killed by another process. Về lý thuyết, 'program bug' gây ra Fatal error, nhưng trong đề trắc nghiệm này bộ đáp án chỉ xuất hiện 'Normal exit (voluntary)' thuộc nhóm 4 điều kiện kết thúc tiến trình nên phải chọn phương án này."
  },
  {
    "id": 8156,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] Which of the following is not a cpu scheduling criterion?",
    "options": [
      "Instruction set",
      "Multicore",
      "Burst time",
      "4% of the cpu"
    ],
    "answer": 2,
    "explanation": "Các tiêu chí lập lịch CPU (CPU scheduling criteria) gồm mức dùng CPU, thông lượng, thời gian hoàn thành (turnaround), thời gian chờ (waiting) và thời gian đáp ứng (response). Burst time (thời gian CPU chạy một tiến trình) là thông số đầu vào của tiến trình, không phải tiêu chí đánh giá thuật toán."
  },
  {
    "id": 8157,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] How many percent of the cpu time is wasted, when a computer system has enough room to",
    "options": [
      "22",
      "8 minutes",
      "3",
      "1 %"
    ],
    "answer": 3,
    "explanation": "Tỷ lệ thời gian CPU bị lãng phí (nhàn rỗi khi tất cả n tiến trình trong RAM đều cùng chờ I/O) được tính theo công thức xác suất: CPU_wasted = p^n (với p là tỷ lệ thời gian mỗi tiến trình chờ I/O).\n• Ví dụ với n = 2 tiến trình và mỗi tiến trình chờ I/O 10% thời gian (p = 0.1), xác suất cả 2 cùng chờ là (0.1)² = 0.01 = 1%."
  },
  {
    "id": 8158,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] To specify an address in this segmented memory, the form is used",
    "options": [
      "Present/ absent bit",
      "Referenced bit",
      "Increasing access time",
      "<segment-number, offset>"
    ],
    "answer": 3,
    "explanation": "Trong cơ chế quản lý bộ nhớ phân đoạn (segmented memory), địa chỉ logic được biểu diễn theo cặp <segment-number, offset> (số hiệu đoạn và độ dịch). Giá trị segment-number dùng để tra bảng phân đoạn tìm địa chỉ nền, còn offset xác định vị trí tương đối bên trong đoạn đó."
  },
  {
    "id": 8159,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] Page replacement algorithms determine",
    "options": [
      "The frame location for each page of the process",
      "Which page to remove to provide space for an incoming page",
      "Process termination time",
      "Mutual exclusion"
    ],
    "answer": 1,
    "explanation": "Thuật toán thay thế trang (Page replacement algorithm) quyết định trang nào cần bị loại bỏ khỏi RAM để nhường chỗ cho trang mới đang được nạp vào khi xảy ra lỗi trang (page fault) và các khung trang đã đầy. Mục tiêu chính là tối thiểu hóa số lần xảy ra lỗi trang."
  },
  {
    "id": 8160,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] The page table for each process maintains:",
    "options": [
      "Process creation",
      "Process termination time",
      "A part of the program where the shared memory is accessed",
      "The frame location for each page of the process"
    ],
    "answer": 3,
    "explanation": "Bảng trang (Page table) của mỗi tiến trình lưu giữ ánh xạ vị trí khung trang vật lý (frame location) trong bộ nhớ chính tương ứng với từng trang ảo của tiến trình đó. Bộ quản lý bộ nhớ (MMU) dựa vào bảng này để dịch địa chỉ ảo sang địa chỉ vật lý."
  },
  {
    "id": 8161,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] The second-chance page -replacement algorithm",
    "options": [
      "The last page of the job is less than the maximum page size",
      "Very long page tables",
      "Moves pages found at the head of a fifo queue with the referenced bit turned on back to the tail of the queue to avoid replacing them",
      "First-fit memory allocation"
    ],
    "answer": 2,
    "explanation": "Thuật toán thay thế trang cơ hội thứ hai (Second-chance) cải tiến FIFO bằng cách kiểm tra bit tham chiếu (referenced bit) của trang ở đầu hàng đợi. Nếu bit này đang bật, trang đó được tắt bit tham chiếu và đẩy về cuối hàng đợi để tránh bị thay thế ngay."
  },
  {
    "id": 8162,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] In terms of speed the best method of dynamic storage -allocation is:",
    "options": [
      "9k, 15k, 10k",
      "12345",
      "Virtual memory",
      "First fit"
    ],
    "answer": 3,
    "explanation": "Xét về tốc độ thực thi, First fit là phương pháp cấp phát bộ nhớ động nhanh nhất. Thuật toán dừng tìm kiếm ngay khi gặp vùng trống đầu tiên đủ lớn thay vì phải duyệt toàn bộ danh sách vùng trống như Best fit hay Worst fit."
  },
  {
    "id": 8163,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] The actual location in main memory is called a(n):",
    "options": [
      "Referenced bit",
      "Is volatile",
      "1-kb page",
      "Absolute address"
    ],
    "answer": 3,
    "explanation": "Vị trí thực tế của một ô nhớ bên trong bộ nhớ chính (RAM) được gọi là địa chỉ tuyệt đối (Absolute address) hay địa chỉ vật lý (physical address). Đây là địa chỉ thật mà phần cứng dùng để truy xuất trực tiếp dữ liệu trên thanh RAM."
  },
  {
    "id": 8164,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] Lru replaces the page that has spent the",
    "options": [
      "Relocation register",
      "That was not in main memory",
      "Virtual memory.",
      "Longest time in memory without being referenced"
    ],
    "answer": 3,
    "explanation": "Thuật toán LRU (Least Recently Used) thay thế trang đã nằm trong bộ nhớ lâu nhất mà không được tham chiếu tới (longest time in memory without being referenced). Cơ chế này dựa trên giả định trang lâu không dùng tới sẽ ít có khả năng được dùng lại ngay."
  },
  {
    "id": 8165,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] In a system employing a paging scheme for memory management, wasted space is due to:",
    "options": [
      "Internal fragmentation",
      "Relocation register",
      "Absolute address",
      "Main memory"
    ],
    "answer": 0,
    "explanation": "Trong hệ thống quản lý bộ nhớ bằng phân trang (paging), kích thước tiến trình thường không phải bội số chẵn của kích thước trang nên phần cuối khung trang cuối cùng bị dư thừa. Phần không gian lãng phí nằm bên trong khung trang đó được gọi là phân mảnh nội (Internal fragmentation)."
  },
  {
    "id": 8166,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] The task of subdividing memory between the os and processes is performed automatically by the",
    "options": [
      "Thrashing",
      "Thread segment",
      "Interrupt vector table",
      "Memory management"
    ],
    "answer": 3,
    "explanation": "Nhiệm vụ phân chia và cấp phát bộ nhớ tự động giữa hệ điều hành và các tiến trình người dùng do phân hệ quản lý bộ nhớ (Memory management) đảm nhiệm. Nó giúp bảo vệ vùng nhớ của OS và tối ưu hóa không gian RAM cho các tiến trình."
  },
  {
    "id": 8167,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] Which of the following is appropriate to determine program size and create page table?",
    "options": [
      "Process creation",
      "Memory management",
      "Is volatile",
      "1-kb page"
    ],
    "answer": 0,
    "explanation": "Việc xác định kích thước chương trình và khởi tạo bảng trang (page table) diễn ra thích hợp nhất ở bước tạo tiến trình (Process creation). Khi tiến trình mới được sinh ra, hệ điều hành cần biết số lượng trang cần thiết để thiết lập bảng ánh xạ địa chỉ ngay từ đầu."
  },
  {
    "id": 8168,
    "topic": "📚 FPT Bank (Ch.4: File Systems)",
    "question": "[FPT Bank - Ch.4: File Systems] A file is generally defined to be:",
    "options": [
      "A collection of similar records",
      "Linked allocation using fat",
      "Hard links can point to files on other machines",
      "Create"
    ],
    "answer": 0,
    "explanation": "Theo định nghĩa tổng quát về lưu trữ dữ liệu, một tệp (file) là tập hợp các bản ghi có liên quan hoặc tương tự nhau (a collection of similar records) được gom nhóm dưới một tên gọi thống nhất trên bộ nhớ thứ cấp."
  },
  {
    "id": 8169,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] What is incorrect about contiguous allocation of files ?",
    "options": [
      "Converting binary integers to ascii for printing",
      "Caching a device control register would be disastrous",
      "All raid levels can survive one disk crash",
      "It does not cause disk fragmentation"
    ],
    "answer": 3,
    "explanation": "Trong cấp phát liên tục (contiguous allocation), các khối của tệp phải nằm liền kề nhau trên đĩa nên khi tạo và xóa tệp nhiều lần sẽ để lại các khoảng trống rời rạc (phân mảnh ngoại). Do đó, phát biểu 'It does not cause disk fragmentation' (Không gây phân mảnh đĩa) là sai."
  },
  {
    "id": 8170,
    "topic": "📚 FPT Bank (Ch.4: File Systems)",
    "question": "[FPT Bank - Ch.4: File Systems] Which of the following is not correct about hard links and symbolic links?",
    "options": [
      "Ls -a",
      "Stream special file",
      "Path name",
      "Hard links can point to files on other machines"
    ],
    "answer": 3,
    "explanation": "Liên kết cứng (Hard link) trỏ trực tiếp tới i-node của tệp trên cùng một hệ thống tệp nên không thể trỏ sang tệp trên phân vùng khác hay máy khác. Chỉ liên kết mềm (symbolic link) lưu đường dẫn dạng chuỗi mới làm được điều đó, nên phát biểu 'Hard links can point to files on other machines' là sai."
  },
  {
    "id": 8171,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] Which of the following i/o software device layers is done by user-level software?",
    "options": [
      "Converting binary integers to ascii for printing",
      "Read the time-of-day clock",
      "Processor, main memory, i/o modules, system bus",
      "Balance cpu and i/o intensive jobs"
    ],
    "answer": 0,
    "explanation": "Trong mô hình phân tầng phần mềm I/O, các tác vụ ở tầng người dùng (user-level software) gồm thư viện chuẩn và hàm định dạng như chuyển đổi số nguyên nhị phân sang ký tự ASCII để in (Converting binary integers to ascii for printing). Các việc đọc đồng hồ hệ thống hay ghi thanh ghi thiết bị thuộc về tầng nhân (kernel)."
  },
  {
    "id": 8172,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] Which of the following is not correct about the reliability of different raid levels?",
    "options": [
      "Block devices and character devices",
      "Read the time-of-day clock",
      "Writing commands to the device registers",
      "All raid levels can survive one disk crash"
    ],
    "answer": 3,
    "explanation": "Phát biểu 'All raid levels can survive one disk crash' (Mọi cấp độ RAID đều sống sót khi hỏng 1 đĩa) là sai vì RAID 0 (data striping) chỉ chia nhỏ dữ liệu để tăng tốc mà không có cơ chế sao lưu hay parity. Khi 1 ổ đĩa trong RAID 0 bị hỏng, toàn bộ dữ liệu bị mất."
  },
  {
    "id": 8173,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] What kind of i/o devices that disks and tapes belong to?",
    "options": [
      "Device driver",
      "Block-oriented devices",
      "Rotational delay",
      "Boot block"
    ],
    "answer": 1,
    "explanation": "Đĩa cứng (disks) và băng từ (tapes) đọc ghi dữ liệu theo từng khối kích thước cố định có thể định địa chỉ độc lập, nên chúng thuộc nhóm thiết bị hướng khối (Block-oriented devices), phân biệt với thiết bị hướng ký tự như bàn phím."
  },
  {
    "id": 8174,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] Which of the following statements is incorrect?",
    "options": [
      "A hard drive is an example of a character-oriented i/o device",
      "All raid levels can survive one disk crash",
      "Sector header erasure time",
      "Block devices and character devices"
    ],
    "answer": 0,
    "explanation": "Ổ đĩa cứng (hard drive) lưu trữ và truyền tải dữ liệu theo từng khối (block/sector) nên là thiết bị hướng khối (block-oriented). Vì vậy phát biểu 'A hard drive is an example of a character-oriented i/o device' (Ổ cứng là thiết bị hướng ký tự) là sai."
  },
  {
    "id": 8175,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] The i/o technique where the processor busy waits for an i/o operation to complete is called:",
    "options": [
      "Programmed i/o",
      "Block-oriented devices",
      "Rotational delay",
      "Boot block"
    ],
    "answer": 0,
    "explanation": "Kỹ thuật vào/ra mà trong đó CPU liên tục lặp kiểm tra trạng thái thiết bị (busy waits) cho đến khi thao tác I/O hoàn tất được gọi là I/O lập trình (Programmed I/O). Nhược điểm của kỹ thuật này là gây lãng phí thời gian xử lý của CPU trong lúc chờ đợi."
  },
  {
    "id": 8176,
    "topic": "📚 FPT Bank (Ch.6: Deadlocks)",
    "question": "[FPT Bank - Ch.6: Deadlocks] The system is said to be in an unsafe state if",
    "options": [
      "Circular-wait condition",
      "The operating system cannot guarantee that all current processes can complete their work",
      "Requiring that processes state their maximum needs in advance",
      "Do nothing"
    ],
    "answer": 1,
    "explanation": "Hệ thống ở trạng thái không an toàn (unsafe state) khi hệ điều hành không thể đảm bảo mọi tiến trình hiện tại đều có thể hoàn thành công việc của mình (không tìm được chuỗi an toàn). Trạng thái này chưa chắc là deadlock nhưng tiềm ẩn nguy cơ dẫn tới deadlock."
  },
  {
    "id": 8177,
    "topic": "📚 FPT Bank (Ch.1: Introduction & OS Concepts)",
    "question": "[FPT Bank - Ch.1: Introduction & OS Concepts] If in a resource -allocation graph, each resource type has exactly one instance, which of the",
    "options": [
      "Ensures that programs terminate their execution",
      "The graph has at least one cycle.",
      "All multiprogramming systems are timesharing systems",
      "Pci (peripheral component interconnect)"
    ],
    "answer": 1,
    "explanation": "Trong đồ thị cấp phát tài nguyên (resource-allocation graph), nếu mỗi loại tài nguyên chỉ có đúng một thực thể (one instance), việc đồ thị có ít nhất một chu trình (at least one cycle) là điều kiện cần và đủ để khẳng định hệ thống đang xảy ra deadlock."
  },
  {
    "id": 8178,
    "topic": "📚 FPT Bank (Ch.6: Deadlocks)",
    "question": "[FPT Bank - Ch.6: Deadlocks] All deadlocks involve conflicting needs for resources by",
    "options": [
      "Event 6 caused deadlock.",
      "Request all resources initially",
      "Two or more processes",
      "Timeouts"
    ],
    "answer": 2,
    "explanation": "Mọi tình huống bế tắc (deadlock) đều bắt nguồn từ sự xung đột nhu cầu tài nguyên giữa từ hai tiến trình trở lên (Two or more processes). Một tiến trình đơn lẻ không thể tự tranh chấp và chờ đợi vòng tròn với chính mình."
  },
  {
    "id": 8179,
    "topic": "📚 FPT Bank (Ch.6: Deadlocks)",
    "question": "[FPT Bank - Ch.6: Deadlocks] What is the characteristic of deadlocked systems",
    "options": [
      "Two or more processes",
      "Request all resources initially",
      "Real-time",
      "Circular wait"
    ],
    "answer": 3,
    "explanation": "Đặc trưng nổi bật của hệ thống đang bị bế tắc (deadlocked) là tình trạng chờ đợi vòng tròn (Circular wait), trong đó các tiến trình tạo thành một vòng khép kín mà mỗi tiến trình giữ tài nguyên tiến trình kế tiếp cần và chờ tài nguyên tiến trình trước đang giữ."
  },
  {
    "id": 8180,
    "topic": "📚 FPT Bank (Ch.6: Deadlocks)",
    "question": "[FPT Bank - Ch.6: Deadlocks] A possibility of deadlock can occur:",
    "options": [
      "Real-time",
      "Event 6 caused deadlock.",
      "Will cause the process to fail if taken away",
      "If a system is in unsafe state"
    ],
    "answer": 3,
    "explanation": "Khả năng xảy ra bế tắc (deadlock) có thể xuất hiện nếu hệ thống rơi vào trạng thái không an toàn (unsafe state), vì lúc này trình quản lý tài nguyên không còn đảm bảo được thứ tự cấp phát an toàn cho tất cả tiến trình."
  },
  {
    "id": 8181,
    "topic": "📚 FPT Bank (Ch.6: Deadlocks)",
    "question": "[FPT Bank - Ch.6: Deadlocks] What is the weakness of the banker's algorithm?",
    "options": [
      "Event 6 caused deadlock.",
      "Dijkstra",
      "Requiring that processes state their maximum needs in advance",
      "Spool everything"
    ],
    "answer": 2,
    "explanation": "Nhược điểm lớn nhất của thuật toán Banker (Banker's algorithm) trong thực tế là yêu cầu các tiến trình phải khai báo trước nhu cầu tài nguyên tối đa (state their maximum needs in advance), điều rất khó biết chính xác trước khi chương trình thực thi."
  },
  {
    "id": 8182,
    "topic": "📚 FPT Bank (Ch.6: Deadlocks)",
    "question": "[FPT Bank - Ch.6: Deadlocks] Which of the following is not a condition necessary for deadlock to exist?",
    "options": [
      "Spool everything",
      "Request all resources initially",
      "Preemption condition",
      "Squares"
    ],
    "answer": 2,
    "explanation": "Bốn điều kiện Coffman cần thiết để xảy ra deadlock gồm: Mutual exclusion, Hold and wait, No preemption (không thu hồi) và Circular wait. Do đó Preemption condition (cho phép thu hồi tài nguyên) không phải điều kiện gây deadlock mà là cách ngăn chặn deadlock."
  },
  {
    "id": 8183,
    "topic": "📚 FPT Bank (Ch.6: Deadlocks)",
    "question": "[FPT Bank - Ch.6: Deadlocks] If a deadlocked system, the processes can",
    "options": [
      "Memory",
      "Timeouts",
      "Hold and wait condition",
      "Do nothing"
    ],
    "answer": 3,
    "explanation": "Khi hệ thống đã rơi vào trạng thái bế tắc (deadlocked), các tiến trình liên quan đều bị chặn đứng chờ tài nguyên của nhau vô thời hạn nên chúng không thể làm gì tiếp được (Do nothing) nếu không có sự can thiệp từ bên ngoài."
  },
  {
    "id": 8184,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] First-come, first- served (fcfs) is a very simple algorithm to implement because it ____.",
    "options": [
      "Thread segment",
      "Mutual exclusion",
      "Uses a fifo queue",
      "Compaction"
    ],
    "answer": 2,
    "explanation": "Thuật toán FCFS (First-Come, First-Served) rất đơn giản để cài đặt vì nó chỉ sử dụng một hàng đợi FIFO (First-In, First-Out). Tiến trình nào đến trước được xếp vào cuối hàng đợi và lần lượt lấy ra xử lý từ đầu hàng đợi."
  },
  {
    "id": 8185,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] The job scheduler seeks to ____, when scheduling jobs.",
    "options": [
      "Sector header erasure time",
      "Direct memory access",
      "Balance cpu and i/o intensive jobs",
      "Mapping files onto secondary storage"
    ],
    "answer": 2,
    "explanation": "Trình lập lịch tác vụ (job scheduler) khi điều phối các tác vụ vào hệ thống sẽ tìm cách cân bằng giữa tác vụ nặng về CPU và tác vụ nặng về vào/ra (Balance cpu and i/o intensive jobs). Điều này giúp khai thác tối đa hiệu suất của cả CPU lẫn thiết bị I/O."
  },
  {
    "id": 8186,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] The process scheduler assigns the cpu to execute the processes of those jobs placed on the",
    "options": [
      "8 minutes",
      "Ready",
      "Ps",
      "Pop-up"
    ],
    "answer": 1,
    "explanation": "Trình lập lịch tiến trình (process scheduler) chọn các tiến trình đang nằm trong hàng đợi sẵn sàng (Ready queue) để cấp phát CPU thực thi. Chỉ các tiến trình ở trạng thái Ready mới đủ điều kiện chuyển sang trạng thái Running."
  },
  {
    "id": 8187,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] In a highly interactive environment there is a third layer of the processor manager called the",
    "options": [
      "Data area",
      "Middle- level",
      "Running -> ready",
      "Sequentially"
    ],
    "answer": 1,
    "explanation": "Trong môi trường tương tác cao, tầng thứ ba của bộ quản lý bộ xử lý được gọi là trình lập lịch trung hạn (Middle-level scheduler). Nó chịu trách nhiệm hoán đổi tiến trình giữa RAM và đĩa (swap out/swap in) để điều tiết mức độ đa chương trình."
  },
  {
    "id": 8188,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] Which of the following is os component?",
    "options": [
      "Multiprocessing",
      "Mutual exclusion",
      "Process management",
      "Decentralized"
    ],
    "answer": 2,
    "explanation": "Quản lý tiến trình (Process management) là một thành phần chức năng cơ bản của hệ điều hành, phụ trách tạo, lập lịch, đồng bộ và kết thúc các tiến trình. Các lựa chọn còn lại là khái niệm đồng bộ, kiến trúc phần cứng hoặc phương thức phân tán."
  },
  {
    "id": 8189,
    "topic": "📚 FPT Bank (Ch.1: Introduction & OS Concepts)",
    "question": "[FPT Bank - Ch.1: Introduction & OS Concepts] Ms- dos is an example of ...",
    "options": [
      "Monolithic system",
      "Rotational ordering",
      "System calls",
      "28.8 msec"
    ],
    "answer": 0,
    "explanation": "MS-DOS là một ví dụ điển hình của hệ thống nguyên khối (Monolithic system) không phân tách chặt chẽ không gian người dùng và nhân, nơi các thành phần hệ thống và trình điều khiển hoạt động chung trong một cấu trúc đơn giản."
  },
  {
    "id": 8190,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] What is interrupt vector?",
    "options": [
      "Dma is software solution to speed up data transfer between i/o device and memory",
      "Part of memory which contains the addresses of interrupt handlers",
      "Read the time-of-day clock",
      "Mapping files onto secondary storage"
    ],
    "answer": 1,
    "explanation": "Vectơ ngắt (Interrupt vector) là một vùng bộ nhớ chứa bảng địa chỉ của các trình xử lý ngắt (interrupt handlers / ISR). Khi có ngắt xảy ra, CPU tra cứu bảng này theo số hiệu ngắt để nhảy tới đúng đoạn mã xử lý tương ứng."
  },
  {
    "id": 8191,
    "topic": "📚 FPT Bank (Ch.1: Introduction & OS Concepts)",
    "question": "[FPT Bank - Ch.1: Introduction & OS Concepts] Which of the following is not a correct explanation of unix which is one of the os?",
    "options": [
      "Program counter (pc)",
      "It is a single- user and multi-task os",
      "Isa (industry standard architecture)",
      "All multiprogramming systems are timesharing systems"
    ],
    "answer": 1,
    "explanation": "UNIX là hệ điều hành đa người dùng (multi-user) và đa nhiệm (multi-task), cho phép nhiều người dùng làm việc đồng thời trên cùng hệ thống. Vì vậy phát biểu 'It is a single- user and multi-task os' (UNIX là hệ điều hành đơn người dùng) là sai."
  },
  {
    "id": 8192,
    "topic": "📚 FPT Bank (Ch.1: Introduction & OS Concepts)",
    "question": "[FPT Bank - Ch.1: Introduction & OS Concepts] What is the value of mode bit in user mode?",
    "options": [
      "1",
      "Contention",
      "Date",
      "Function"
    ],
    "answer": 0,
    "explanation": "Phần cứng sử dụng bit chế độ (mode bit) để phân biệt quyền thực thi của CPU: giá trị 1 biểu thị chế độ người dùng (user mode) với quyền hạn bị giới hạn, còn giá trị 0 biểu thị chế độ nhân (kernel mode)."
  },
  {
    "id": 8193,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] What is the correct statement about the process of booting a computer?",
    "options": [
      "Parent processes have difficulty tracking concurrent creation and destruction of child processes",
      "Bios detects the boot device, the boot sector determines the active partition, then the boot loader loads the operating system",
      "The device driver decides blocking and returning an error code",
      "Mapping files onto secondary storage"
    ],
    "answer": 1,
    "explanation": "Quá trình khởi động máy tính (booting) diễn ra theo đúng trình tự: BIOS phát hiện thiết bị khởi động, đọc boot sector để xác định phân vùng hoạt động (active partition), sau đó boot loader nạp hệ điều hành vào bộ nhớ chính."
  },
  {
    "id": 8194,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] Which of the following is a high-level synchronization primitive?",
    "options": [
      "8 minutes",
      "Round robin",
      "4% of the cpu",
      "Monitors"
    ],
    "answer": 3,
    "explanation": "Monitors là một công cụ đồng bộ hóa cấp cao (high-level synchronization primitive) được tích hợp ở mức ngôn ngữ lập trình, đóng gói dữ liệu dùng chung và cơ chế loại trừ lẫn nhau tự động để lập trình viên tránh lỗi so với semaphore cấp thấp."
  },
  {
    "id": 8195,
    "topic": "📚 FPT Bank (Ch.1: Introduction & OS Concepts)",
    "question": "[FPT Bank - Ch.1: Introduction & OS Concepts] Which of the following is used in mutual exclusion ( exclusive control)?",
    "options": [
      "Multimedia",
      "Workstations",
      "320,000",
      "Contention"
    ],
    "answer": 3,
    "explanation": "Giải thích đáp án 'Contention' (sự tranh chấp tài nguyên): Là hiện tượng nhiều tiến trình cùng lúc cạnh tranh để truy cập độc quyền vào một tài nguyên dùng chung (như vùng nhớ chung, tệp tin hoặc thiết bị ngoại vi). Cơ chế loại trừ tương hỗ (Mutual Exclusion) được dùng chính để kiểm soát sự tranh chấp (contention) này, đảm bảo tại một thời điểm chỉ có đúng 1 tiến trình được vào miền găng."
  },
  {
    "id": 8196,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] Which of the following preemptive scheduling algorithm?",
    "options": [
      "Synchronization",
      "Multicore",
      "Ready -> running",
      "Round robin"
    ],
    "answer": 3,
    "explanation": "Round robin là thuật toán lập lịch có trưng dụng (preemptive scheduling) vì nó cấp cho mỗi tiến trình một lát thời gian (time quantum) giới hạn. Khi hết lát thời gian này, hệ điều hành sẽ ngắt tiến trình đang chạy để nhường CPU cho tiến trình kế tiếp."
  },
  {
    "id": 8197,
    "topic": "📚 FPT Bank (Ch.1: Introduction & OS Concepts)",
    "question": "[FPT Bank - Ch.1: Introduction & OS Concepts] Which of the following state transitions are illegal?",
    "options": [
      "Precise interrupt",
      "Disable all interrupts",
      "Waiting -> runing",
      "User interface"
    ],
    "answer": 2,
    "explanation": "Tiến trình đang ở trạng thái chờ (Waiting) sau khi hoàn tất sự kiện I/O phải chuyển về hàng đợi sẵn sàng (Ready) để chờ lập lịch, không thể nhảy thẳng sang đang chạy. Do đó chuyển đổi trạng thái 'Waiting -> runing' là bất hợp lệ (illegal)."
  },
  {
    "id": 8198,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] Which of the following cannot be shared among different threads of a process?",
    "options": [
      "Error exit",
      "Stack",
      "4",
      "9.0"
    ],
    "answer": 1,
    "explanation": "Các luồng (threads) trong cùng một tiến trình dùng chung mã lệnh, dữ liệu toàn cục và heap, nhưng không thể dùng chung ngăn xếp (Stack). Mỗi luồng cần có Stack riêng để lưu trữ độc lập địa chỉ trả về của hàm và các biến cục bộ của riêng nó."
  },
  {
    "id": 8199,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] The maximum segment for process pentium if the limit field of segment descriptor",
    "options": [
      "1mb",
      "12345",
      "Overhead",
      "Unix"
    ],
    "answer": 0,
    "explanation": "Trong kiến trúc Intel Pentium, trường Limit (giới hạn) trong bộ mô tả phân đoạn (segment descriptor) có độ dài 20 bit. Khi bit độ phân giải G = 0 (tính theo byte), kích thước phân đoạn tối đa (maximum segment size) của một tiến trình là 2^20 bytes = 1 MB."
  },
  {
    "id": 8200,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] A page fault means that we referenced a page?",
    "options": [
      "Relocation register",
      "Process termination time",
      "That was not in main memory",
      "Virtual memory."
    ],
    "answer": 2,
    "explanation": "Lỗi trang (page fault) xảy ra khi tiến trình tham chiếu tới một trang (page) không nằm trong bộ nhớ chính (main memory / RAM). Hệ điều hành sẽ tạm dừng tiến trình và nạp trang đó từ đĩa (bộ nhớ ảo) vào khung trang trống trong RAM."
  },
  {
    "id": 8201,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] How many levels of page tables the processor pentium supports:",
    "options": [
      "2",
      "Overhead",
      "Cache",
      "1mb"
    ],
    "answer": 0,
    "explanation": "Bộ vi xử lý Pentium (kiến trúc x86 32-bit) hỗ trợ bảng trang 2 cấp (2-level page tables), gồm Page Directory (thư mục trang) ở cấp 1 và Page Table (bảng trang) ở cấp 2. Cách tổ chức phân cấp này giúp giảm đáng kể dung lượng RAM dùng để lưu bảng trang."
  },
  {
    "id": 8202,
    "topic": "📚 FPT Bank (Ch.4: File Systems)",
    "question": "[FPT Bank - Ch.4: File Systems] What is not the technique of implemention for virtual memory?",
    "options": [
      "Demand partition",
      "Ls -a",
      "Path name",
      "Head"
    ],
    "answer": 0,
    "explanation": "Bộ nhớ ảo (virtual memory) thường được hiện thực bằng kỹ thuật phân trang theo yêu cầu (demand paging) hoặc phân đoạn (segmentation). 'Demand partition' (phân vùng theo yêu cầu) không phải là kỹ thuật triển khai bộ nhớ ảo."
  },
  {
    "id": 8203,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] Which of the following information bits in the entry of page table is used to indicate page fault?",
    "options": [
      "Compaction",
      "Interrupt vector table",
      "Referenced bit",
      "Present/ absent bit"
    ],
    "answer": 3,
    "explanation": "Trong mỗi mục của bảng trang (page table entry), bit có mặt/vắng mặt (Present/absent bit) cho biết trang hiện đang nằm trong RAM (1) hay chưa được nạp (0). Nếu CPU truy cập trang có bit này bằng 0, phần cứng sẽ kích hoạt lỗi trang (page fault)."
  },
  {
    "id": 8204,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] How many levels of protection the processor pentium supports;",
    "options": [
      "9.0",
      "Ready",
      "4",
      "Multicore"
    ],
    "answer": 2,
    "explanation": "Bộ vi xử lý Pentium hỗ trợ 4 mức bảo vệ (protection levels), gọi là Ring 0 đến Ring 3. Trong đó Ring 0 có đặc quyền cao nhất dành cho hạt nhân hệ điều hành (kernel) và Ring 3 dành cho chương trình người dùng (user mode)."
  },
  {
    "id": 8205,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] What is the main characteristic of embedded operating system?",
    "options": [
      "Restriction of memory size, speed of cpu, screen size, powers",
      "Present/ absent bit",
      "<segment-number, offset>",
      "Longest time in memory without being referenced"
    ],
    "answer": 0,
    "explanation": "Hệ điều hành nhúng (embedded operating system) chạy trên các thiết bị chuyên dụng nên đặc trưng chính là bị giới hạn về kích thước bộ nhớ (memory size), tốc độ CPU, kích thước màn hình (screen size) và nguồn năng lượng (powers)."
  },
  {
    "id": 8206,
    "topic": "📚 FPT Bank (Ch.1: Introduction & OS Concepts)",
    "question": "[FPT Bank - Ch.1: Introduction & OS Concepts] A control/status register that contains the address of the next instruction to be fetched is called",
    "options": [
      "User interface",
      "Waiting -> runing",
      "Program counter (pc)",
      "Multimedia"
    ],
    "answer": 2,
    "explanation": "Bộ đếm chương trình — Program Counter (PC) là thanh ghi điều khiển/trạng thái lưu giữ địa chỉ của lệnh tiếp theo sẽ được nạp (fetched) từ bộ nhớ để CPU thực thi."
  },
  {
    "id": 8207,
    "topic": "📚 FPT Bank (Ch.1: Introduction & OS Concepts)",
    "question": "[FPT Bank - Ch.1: Introduction & OS Concepts] The general role of an operating system is to:",
    "options": [
      "Easier to extend and easier to debug from lower to upper layer",
      "Program status word (psw)",
      "Provide a set of services to system users",
      "It is a single- user and multi-task os"
    ],
    "answer": 2,
    "explanation": "Vai trò tổng quát của hệ điều hành (operating system) là đóng vai trò lớp trung gian cung cấp tập các dịch vụ (set of services) cho người dùng và ứng dụng để khai thác tài nguyên phần cứng một cách thuận tiện, an toàn."
  },
  {
    "id": 8208,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] The two basic types of processor registers are:",
    "options": [
      "Procedure call handler code",
      "General and special registers",
      "Processor capacity",
      "Process control block"
    ],
    "answer": 1,
    "explanation": "Hai loại thanh ghi cơ bản của bộ vi xử lý (processor registers) là thanh ghi đa năng (general registers — dùng lưu dữ liệu, toán hạng) và thanh ghi chuyên dụng/đặc biệt (special registers — như PC, SP, PSW dùng điều khiển và lưu trạng thái)."
  },
  {
    "id": 8209,
    "topic": "📚 FPT Bank (Ch.1: Introduction & OS Concepts)",
    "question": "[FPT Bank - Ch.1: Introduction & OS Concepts] Which of the following statements is incorrect about timesharing and multiprogramming",
    "options": [
      "Procedure library",
      "Pci (peripheral component interconnect)",
      "All multiprogramming systems are timesharing systems",
      "Time is key parameter"
    ],
    "answer": 2,
    "explanation": "Phát biểu sai là 'Mọi hệ thống đa chương đều là hệ thống chia sẻ thời gian'. Đa chương (multiprogramming) chỉ giữ nhiều tiến trình trong RAM để tối ưu hiệu suất CPU, còn chia sẻ thời gian (timesharing) là một dạng đặc biệt đòi hỏi chuyển đổi CPU theo lát cắt thời gian ngắn để tương tác với nhiều người dùng."
  },
  {
    "id": 8210,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] Which of the following statements is correct about shortest job first",
    "options": [
      "Minimize average waiting time",
      "Thread involuntarily releases cpu",
      "Interrupt signal",
      "Process control block"
    ],
    "answer": 0,
    "explanation": "Thuật toán lập lịch Shortest Job First (SJF — công việc ngắn nhất trước) ưu tiên cấp CPU cho tiến trình có thời gian thực thi (burst time) ngắn nhất tiếp theo, giúp tối thiểu hóa thời gian chờ đợi trung bình (minimize average waiting time)."
  },
  {
    "id": 8211,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] Which of the following process state transitions are legal?",
    "options": [
      "Interrupt signal",
      "Window management",
      "Running -> ready",
      "4% of the cpu"
    ],
    "answer": 2,
    "explanation": "Chuyển trạng thái hợp lệ là Running -> Ready (đang chạy sang sẵn sàng). Điều này xảy ra khi tiến trình dùng hết lát cắt thời gian (time quantum) hoặc bị bộ lập lịch trưng dụng CPU cho tiến trình ưu tiên cao hơn."
  },
  {
    "id": 8212,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] Which of the following is not correct about user-level threads ?",
    "options": [
      "Procedure call handler code",
      "There are two available",
      "Pick one of the ready processes to run next",
      "With user-level threads, customized scheduling algorithms cannot be implemented"
    ],
    "answer": 3,
    "explanation": "Phát biểu sai là không thể tự tùy chỉnh thuật toán lập lịch với luồng cấp người dùng (user-level threads). Vì thư viện luồng chạy hoàn toàn trong không gian người dùng (user space), mỗi ứng dụng có thể tự cài đặt thuật toán lập lịch riêng phù hợp nhất mà không phụ thuộc nhân hệ điều hành."
  },
  {
    "id": 8213,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] Which is the correct description of transitions between process states below? (see picture)",
    "options": [
      "There are two available",
      "General and special registers",
      "1: process blocks for input; 2: scheduler picks another process; 3: scheduler picks this process; 4: input becomes available",
      "Simultaneous semaphore is slightly more powerful than basic semaphore"
    ],
    "answer": 2,
    "explanation": "Trong sơ đồ 3 trạng thái chuẩn của tiến trình: (1) Running -> Blocked khi tiến trình tự chặn để chờ dữ liệu I/O (blocks for input); (2) Running -> Ready khi bộ lập lịch chuyển sang tiến trình khác; (3) Ready -> Running khi bộ lập lịch chọn tiến trình này chạy; (4) Blocked -> Ready khi dữ liệu đầu vào đã sẵn sàng (input becomes available)."
  },
  {
    "id": 8214,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] In a single processor system, mutual exclusion can be guaranteed by:",
    "options": [
      "Application programmer",
      "Disabling interrupts",
      "Instruction set",
      "Thread parent identifier"
    ],
    "answer": 1,
    "explanation": "Trên hệ thống đơn bộ xử lý (single processor system), loại trừ tương hỗ (mutual exclusion) có thể được đảm bảo bằng cách vô hiệu hóa ngắt (disabling interrupts) trước khi vào vùng găng để ngăn CPU chuyển sang chạy tiến trình khác."
  },
  {
    "id": 8215,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] Which of the following synchronization mechanisms does not rely on busy-waiting ?",
    "options": [
      "Error exit",
      "Thread",
      "Pipeline",
      "Semaphores"
    ],
    "answer": 3,
    "explanation": "Cơ chế đồng bộ hóa Semaphores (đèn hiệu) không dựa trên chờ bận (busy-waiting). Khi tài nguyên chưa sẵn sàng, tiến trình gọi down()/wait() sẽ bị chuyển sang trạng thái chờ/chặn (blocked) để nhường CPU thay vì lặp kiểm tra liên tục."
  },
  {
    "id": 8216,
    "topic": "📚 FPT Bank (Ch.4: File Systems)",
    "question": "[FPT Bank - Ch.4: File Systems] Is a specialized write command for existing data files that allows for appending records or for",
    "options": [
      "Ls -a",
      "Rewrite",
      "File",
      "The innermost part"
    ],
    "answer": 1,
    "explanation": "'Rewrite' là lệnh ghi chuyên dụng dành cho các tệp dữ liệu đã tồn tại (existing data files), cho phép cập nhật lại hoặc nối thêm bản ghi (appending records) vào tệp."
  },
  {
    "id": 8217,
    "topic": "📚 FPT Bank (Ch.4: File Systems)",
    "question": "[FPT Bank - Ch.4: File Systems] Many computer users and some operating systems call subdirectories",
    "options": [
      "Demand partition",
      "Tree",
      "Ls -a",
      "Files"
    ],
    "answer": 3,
    "explanation": "Trong nhiều hệ điều hành (như UNIX/Linux), thư mục và thư mục con (subdirectories) thực chất được quản lý dưới dạng các tệp (files) đặc biệt chứa danh sách mục nhập trỏ đến các tệp khác."
  },
  {
    "id": 8218,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] Which method is used to implement files to keep each file as a linked list of disk blocks?",
    "options": [
      "Block devices",
      "Device controller",
      "Linked list allocation",
      "Device's manufacturer"
    ],
    "answer": 2,
    "explanation": "Cấp phát theo danh sách liên kết (Linked list allocation) lưu trữ mỗi tệp như một danh sách liên kết các khối đĩa (disk blocks), trong đó mỗi khối chứa con trỏ trỏ tới vị trí của khối tiếp theo thuộc tệp đó."
  },
  {
    "id": 8219,
    "topic": "📚 FPT Bank (Ch.4: File Systems)",
    "question": "[FPT Bank - Ch.4: File Systems] Which of the following allocation methods, operating system ms-dos is implemented?",
    "options": [
      "Mkdir",
      "Journaling file systems",
      "Linked allocation using fat",
      "Rewrite"
    ],
    "answer": 2,
    "explanation": "Hệ điều hành MS-DOS sử dụng phương pháp cấp phát liên kết kết hợp bảng FAT (Linked allocation using FAT — File Allocation Table). Toàn bộ con trỏ liên kết các khối đĩa được tập trung vào bảng FAT trong bộ nhớ giúp truy cập nhanh hơn."
  },
  {
    "id": 8220,
    "topic": "📚 FPT Bank (Ch.4: File Systems)",
    "question": "[FPT Bank - Ch.4: File Systems] Which of a system call is to allow the system announce that the file is coming and set some of",
    "options": [
      "Cd",
      "Rewrite",
      "Link",
      "Create"
    ],
    "answer": 3,
    "explanation": "Lời gọi hệ thống (system call) Create được dùng để thông báo với hệ điều hành tạo một tệp mới sắp sử dụng và thiết lập một số thuộc tính (attributes) ban đầu cho tệp."
  },
  {
    "id": 8221,
    "topic": "📚 FPT Bank (Ch.4: File Systems)",
    "question": "[FPT Bank - Ch.4: File Systems] Which of a system call is to allow the file to appear in more than one directory?",
    "options": [
      "Link",
      "File",
      "Path name",
      "Mkdir"
    ],
    "answer": 0,
    "explanation": "Lời gọi hệ thống Link cho phép một tệp xuất hiện đồng thời trong nhiều thư mục khác nhau bằng cách tạo thêm liên kết trỏ tới cùng cấu trúc dữ liệu (i-node) của tệp đó."
  },
  {
    "id": 8222,
    "topic": "📚 FPT Bank (Ch.1: Introduction & OS Concepts)",
    "question": "[FPT Bank - Ch.1: Introduction & OS Concepts] Which of a system call is to allow the system free up internal table space?",
    "options": [
      "Close",
      "Ms-dos",
      "Workstations",
      "1"
    ],
    "answer": 0,
    "explanation": "Lời gọi hệ thống Close thông báo tiến trình đã hoàn tất truy cập tệp, giúp hệ điều hành giải phóng mục quản lý tệp tương ứng trong bảng nội bộ (internal table space)."
  },
  {
    "id": 8223,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] How much cylinder skew is needed for a 5400- rpm (rotate per minute) disk with the track-to-track",
    "options": [
      "Psw and pc",
      "Block devices",
      "18 sectors",
      "Sstf"
    ],
    "answer": 2,
    "explanation": "Độ lệch trụ (cylinder skew) giúp tránh mất vòng quay khi đầu đọc chuyển sang track kế tiếp: Cylinder skew = ceil((t_track_to_track / T_rotation) * sectors_per_track). Với đĩa 5400 RPM (90 vòng/giây, T_rotation = 1000/90 ≈ 11.11 ms), bài toán chuẩn Tanenbaum (t = 2 ms, 100 sectors/track) cho kết quả ceil((2 / 11.11) * 100) = 18 sectors."
  },
  {
    "id": 8224,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] The aspect of disk performance that represents the time it takes to position the head a the",
    "options": [
      "4 msec. 40 msec. 20 sec",
      "Rotational delay",
      "Device controller",
      "Linked list allocation"
    ],
    "answer": 1,
    "explanation": "Độ trễ quay (Rotational delay / rotational latency) là thời gian chờ mặt đĩa quay để đưa sector mục tiêu di chuyển đến đúng vị trí dưới đầu đọc/ghi (head)."
  },
  {
    "id": 8225,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] Rearrange the layers in i/o software starting at the bottom",
    "options": [
      "1",
      "I/o devices",
      "Sstf",
      "43251"
    ],
    "answer": 3,
    "explanation": "Thứ tự 5 tầng của kiến trúc phần mềm I/O đi từ DƯỚI LÊN TRÊN (từ phần cứng lên ứng dụng người dùng) tương ứng với dãy số 43251:\n• 4 — Hardware (Phần cứng thiết bị vật lý - tầng thấp nhất)\n• 3 — Interrupt handlers (Trình xử lý ngắt)\n• 2 — Device drivers (Trình điều khiển thiết bị)\n• 5 — Device-independent OS software (Phần mềm HĐH độc lập thiết bị)\n• 1 — User-level I/O software (Phần mềm I/O tầng người dùng - tầng cao nhất)."
  },
  {
    "id": 8226,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] When an external device becomes ready to be serviced by the processor, the device sends this",
    "options": [
      "Interrupt signal",
      "Ready -> running",
      "Processor capacity",
      "Decentralized"
    ],
    "answer": 0,
    "explanation": "Khi một thiết bị ngoại vi (external device) sẵn sàng để CPU phục vụ hoặc vừa hoàn thành tác vụ, nó sẽ gửi một tín hiệu ngắt (interrupt signal) tới bộ xử lý."
  },
  {
    "id": 8227,
    "topic": "📚 FPT Bank (Ch.1: Introduction & OS Concepts)",
    "question": "[FPT Bank - Ch.1: Introduction & OS Concepts] Assuming that it takes 10 nsec to copy a byte, how much time does it take to completely rewrite",
    "options": [
      "Kerneld",
      "28.8 msec",
      "Internet",
      "Close"
    ],
    "answer": 1,
    "explanation": "Theo bài toán chuẩn Tanenbaum cho màn hình đồ họa 1200 x 800 pixels với 3 bytes/pixel (tổng dung lượng = 1200 * 800 * 3 = 2,880,000 bytes). Với tốc độ sao chép 10 nsec/byte, tổng thời gian ghi lại toàn bộ màn hình = 2,880,000 * 10 ns = 28,800,000 ns = 28.8 msec."
  },
  {
    "id": 8228,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] What is asynchronous transfer in principles of i/o software?",
    "options": [
      "A tlb miss implies a disk operation will follow",
      "The cpu starts the transfer and goes off to do something else until the interrupt arrives",
      "The device driver decides blocking and returning an error code",
      "Mapping files onto secondary storage"
    ],
    "answer": 1,
    "explanation": "Truyền bất đồng bộ (asynchronous transfer) trong phần mềm I/O có nghĩa là CPU khởi phát quá trình truyền dữ liệu rồi lập tức chuyển sang làm việc khác cho đến khi nhận được ngắt (interrupt) báo hoàn thành."
  },
  {
    "id": 8229,
    "topic": "📚 FPT Bank (Ch.1: Introduction & OS Concepts)",
    "question": "[FPT Bank - Ch.1: Introduction & OS Concepts] Assuming that it takes 10 nsec to copy a byte, how much time, does it take to completely",
    "options": [
      "320,000",
      "28.8 msec",
      "User interface",
      "40 micro-sec"
    ],
    "answer": 3,
    "explanation": "Theo bài toán chuẩn Tanenbaum cho màn hình chế độ văn bản 25 dòng x 80 ký tự, mỗi ký tự chiếm 2 bytes (tổng = 25 * 80 * 2 = 4,000 bytes). Với tốc độ sao chép 10 nsec/byte, tổng thời gian = 4,000 * 10 ns = 40,000 ns = 40 micro-sec (40 µs)."
  },
  {
    "id": 8230,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] Which of the following statements is incorrect about i/o using dma?",
    "options": [
      "All raid levels can survive one disk crash",
      "Dma is software solution to speed up data transfer between i/o device and memory",
      "Balance cpu and i/o intensive jobs",
      "Checking to see if the user is permitted to use the device"
    ],
    "answer": 1,
    "explanation": "Phát biểu sai là gọi DMA là giải pháp phần mềm. Thực tế DMA (Direct Memory Access — truy cập bộ nhớ trực tiếp) là giải pháp phần cứng sử dụng bộ điều khiển DMA để truyền dữ liệu trực tiếp giữa thiết bị I/O và RAM mà không qua CPU."
  },
  {
    "id": 8231,
    "topic": "📚 FPT Bank (Ch.6: Deadlocks)",
    "question": "[FPT Bank - Ch.6: Deadlocks] In a directed graph used to model deadlock, resources are re presented using",
    "options": [
      "Preemption condition",
      "Circular",
      "Squares",
      "Request all resources initially"
    ],
    "answer": 2,
    "explanation": "Trong đồ thị có hướng mô hình hóa bế tắc (Resource Allocation Graph), các tài nguyên (resources) được biểu diễn bằng hình vuông (squares), còn tiến trình biểu diễn bằng hình tròn."
  },
  {
    "id": 8232,
    "topic": "📚 FPT Bank (Ch.6: Deadlocks)",
    "question": "[FPT Bank - Ch.6: Deadlocks] Which deadlock condition does \"ordering resources numerically\" attack?",
    "options": [
      "Hold and wait condition",
      "Spool everything",
      "Circular-wait condition",
      "Timeouts"
    ],
    "answer": 2,
    "explanation": "Quy tắc đánh số thứ tự tài nguyên (ordering resources numerically) và bắt buộc yêu cầu theo thứ tự tăng dần nhằm phá vỡ điều kiện chờ vòng (circular-wait condition), ngăn không cho chu trình bế tắc hình thành."
  },
  {
    "id": 8233,
    "topic": "📚 FPT Bank (Ch.6: Deadlocks)",
    "question": "[FPT Bank - Ch.6: Deadlocks] Which deadlock condition does \"take resources away\" attack?",
    "options": [
      "Circular wait",
      "Deadlock",
      "Two or more processes",
      "No preemption"
    ],
    "answer": 3,
    "explanation": "Biện pháp tước đoạt/thu hồi tài nguyên từ tiến trình đang giữ (take resources away) tấn công trực tiếp vào điều kiện không trưng dụng (No preemption) trong 4 điều kiện gây ra deadlock."
  },
  {
    "id": 8234,
    "topic": "📚 FPT Bank (Ch.6: Deadlocks)",
    "question": "[FPT Bank - Ch.6: Deadlocks] Which method is used to prevent the communication deadlock?",
    "options": [
      "Timeouts",
      "Cycle",
      "Dijkstra",
      "Preemption condition"
    ],
    "answer": 0,
    "explanation": "Để ngăn ngừa bế tắc giao tiếp (communication deadlock — tiến trình chờ mãi gói tin bị mất), hệ thống sử dụng bộ định thời hết hạn (Timeouts) để hủy trạng thái chờ và gửi lại yêu cầu khi quá hạn."
  },
  {
    "id": 8235,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] _________is the act of allowing only one process to have access to a dedicated resource",
    "options": [
      "Disable interrupts",
      "Running -> ready",
      "Mutual-exclusion condition",
      "Application programmer"
    ],
    "answer": 2,
    "explanation": "Điều kiện loại trừ tương hỗ (Mutual-exclusion condition) là cơ chế chỉ cho phép duy nhất một tiến trình được quyền truy cập vào một tài nguyên chuyên dụng (dedicated resource) tại một thời điểm."
  },
  {
    "id": 8236,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] What is the correct approach of the driver of dedicated devices with requesting device that is",
    "options": [
      "The device driver decides blocking and returning an error code",
      "Requires a disk map in memory",
      "The larger the block size is the worse the disk space utilization is",
      "It does not cause disk fragmentation"
    ],
    "answer": 0,
    "explanation": "Khi có yêu cầu gửi tới một thiết bị chuyên dụng (dedicated device) đang bận, cách xử lý đúng của trình điều khiển thiết bị (device driver) là chặn tiến trình gọi (blocking) để chờ hoặc trả về mã lỗi (returning an error code)."
  },
  {
    "id": 8237,
    "topic": "📚 FPT Bank (Ch.6: Deadlocks)",
    "question": "[FPT Bank - Ch.6: Deadlocks] What is true about non-preemptable resources? (non preemptable)",
    "options": [
      "No preemption",
      "Will cause the process to fail if taken away",
      "Hierarchical ordering",
      "Squares"
    ],
    "answer": 1,
    "explanation": "Tài nguyên không thể trưng dụng (non-preemptable resources, ví dụ máy in hoặc ổ ghi đĩa đang chạy) là loại tài nguyên nếu bị lấy mất giữa chừng sẽ khiến tiến trình gặp lỗi (fail) hoặc hỏng dữ liệu."
  },
  {
    "id": 8238,
    "topic": "📚 FPT Bank (Ch.4: File Systems)",
    "question": "[FPT Bank - Ch.4: File Systems] Which of the following is not a step in the boot process?",
    "options": [
      "Path name",
      "File",
      "Stream special file",
      "The antivirus program checks all files for viruses."
    ],
    "answer": 3,
    "explanation": "Quá trình khởi động máy (boot process) gồm BIOS/POST, nạp boot loader và nạp hạt nhân hệ điều hành; việc chương trình diệt virus quét toàn bộ tệp (antivirus checks all files) là tác vụ của ứng dụng sau khi vào hệ điều hành, không thuộc các bước boot."
  },
  {
    "id": 8239,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] Which of a system call is to allow the system free up disk space?",
    "options": [
      "Superblock",
      "Delete",
      "Track",
      "75%"
    ],
    "answer": 1,
    "explanation": "Lời gọi hệ thống Delete dùng để xóa tệp khỏi hệ thống tệp và giải phóng không gian đĩa (free up disk space) mà tệp đó chiếm giữ."
  },
  {
    "id": 8240,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] Consider a swapping system in which the memory consists of the following hole sizes: 10k, 4k,",
    "options": [
      "9k, 15k, 10k",
      "Memory management",
      "Is volatile",
      "Overhead"
    ],
    "answer": 0,
    "explanation": "Trong bài toán cấp phát bộ nhớ theo vùng trống (swapping system) với dãy lỗ trống ban đầu (10K, 4K, 20K, 18K, 7K, 9K, 12K, 15K), thuật toán cấp phát tìm các lỗ trống thỏa mãn kích thước yêu cầu (Hole_size >= Request_size) theo chiến lược phù hợp, cho kết quả các lỗ trống được chọn lần lượt là 9k, 15k, 10k."
  },
  {
    "id": 8241,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] Assume the memory manager receives a request for a block of 200. when the best-fit algorithm",
    "options": [
      "7600",
      "Overhead",
      "Unix",
      "60%"
    ],
    "answer": 0,
    "explanation": "Thuật toán cấp phát bộ nhớ Best-Fit duyệt qua toàn bộ danh sách các vùng trống (holes) để chọn vùng có kích thước NHỎ NHẤT nhưng vẫn đủ lớn chứa yêu cầu 200 (sao cho phần dư Hole − 200 ít nhất).\n• Trong bảng bộ nhớ của bài toán này, vùng trống vừa khít nhất có kích thước 205 (chỉ dư 5 đơn vị), nằm tại địa chỉ bắt đầu 7600 ⇒ Kết quả là 7600."
  },
  {
    "id": 8242,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] A ____ is a portion of a process that can run independently.",
    "options": [
      "Ps",
      "Thread",
      "Done",
      "1"
    ],
    "answer": 1,
    "explanation": "Luồng (Thread) là một phần thực thi bên trong một tiến trình (process), chia sẻ không gian nhớ của tiến trình nhưng có thể chạy độc lập trên CPU."
  },
  {
    "id": 8243,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] The term__________a specialized instruction set.",
    "options": [
      "Dma characterizes a system configuration that includes an i/o module that is a separate processor with",
      "The larger the block size is the worse the disk space utilization is",
      "A tlb miss implies a disk operation will follow",
      "Parent processes have difficulty tracking concurrent creation and destruction of child processes"
    ],
    "answer": 0,
    "explanation": "Thuật ngữ DMA (Direct Memory Access) đặc trưng cho cấu hình hệ thống tích hợp một mô-đun I/O hoạt động như bộ xử lý tách biệt có tập lệnh chuyên dụng (specialized instruction set) để tự điều phối truyền dữ liệu với bộ nhớ."
  },
  {
    "id": 8244,
    "topic": "📚 FPT Bank (Ch.1: Introduction & OS Concepts)",
    "question": "[FPT Bank - Ch.1: Introduction & OS Concepts] Which is the fastest bus in the ibm pc computer?",
    "options": [
      "Isa (industry standard architecture)",
      "Batch and interactive",
      "Loading the command interpreter",
      "Precise interrupt"
    ],
    "answer": 0,
    "explanation": "Giải thích đáp án 'ISA (Industry Standard Architecture)': Là chuẩn bus mở rộng 16-bit truyền thống trên các máy tính IBM PC cổ điển dùng để kết nối bo mạch chủ với các thiết bị ngoại vi (card âm thanh, card mạng, ổ đĩa).\n• Trong 4 lựa chọn của câu hỏi này, chỉ có duy nhất ISA là tên chuẩn bus phần cứng của máy IBM PC (các lựa chọn còn lại thuộc chủ đề lập lịch và ngắt)."
  },
  {
    "id": 8245,
    "topic": "📚 FPT Bank (Ch.1: Introduction & OS Concepts)",
    "question": "[FPT Bank - Ch.1: Introduction & OS Concepts] Operating system abstraction supports the ability to have operation even when there is only one",
    "options": [
      "Time is key parameter",
      "To contain bios",
      "Pseudoparallelism",
      "Program status word (psw)"
    ],
    "answer": 2,
    "explanation": "Giả song song (Pseudoparallelism) là cơ chế trừu tượng hóa của hệ điều hành giúp nhiều tiến trình hoạt động như thể chạy song song ngay cả khi máy chỉ có một CPU, bằng cách chuyển đổi ngữ cảnh liên tục giữa các tiến trình."
  },
  {
    "id": 8246,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] The page size that is too small wil l generate",
    "options": [
      "Very long page tables",
      "Uses a fifo queue",
      "Virtual memory",
      "Interrupt vector table"
    ],
    "answer": 0,
    "explanation": "Nếu kích thước trang (page size) quá nhỏ, số lượng trang của tiến trình tăng lên rất lớn (Số trang = Không gian địa chỉ / Kích thước trang), dẫn đến bảng trang cực kỳ dài (very long page tables) và tốn nhiều RAM lưu trữ."
  },
  {
    "id": 8247,
    "topic": "📚 FPT Bank (Ch.6: Deadlocks)",
    "question": "[FPT Bank - Ch.6: Deadlocks] In a directed graph used to model deadlock, processes are represented using",
    "options": [
      "Circular",
      "Memory",
      "Hold and wait condition",
      "Mutual exlusion"
    ],
    "answer": 0,
    "explanation": "Trong đồ thị có hướng mô hình hóa bế tắc (Resource Allocation Graph), các tiến trình (processes) được biểu diễn bằng hình tròn (circular / circles), còn tài nguyên được biểu diễn bằng hình vuông."
  },
  {
    "id": 8248,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] How many categories can be the i/o devices roughly divided?",
    "options": [
      "One",
      "18 sectors",
      "2",
      "500,000"
    ],
    "answer": 2,
    "explanation": "Các thiết bị nhập/xuất (I/O devices) được phân chia đại khái thành 2 loại chính: thiết bị khối (block devices — đọc/ghi theo khối có địa chỉ như ổ đĩa) và thiết bị ký tự (character devices — truyền dòng byte như bàn phím, chuột)."
  },
  {
    "id": 8249,
    "topic": "📚 FPT Bank (Ch.4: File Systems)",
    "question": "[FPT Bank - Ch.4: File Systems] What is not the technique of implementation for virtual memory?",
    "options": [
      "Rewrite",
      "1 tb",
      "Cat",
      "Partition"
    ],
    "answer": 3,
    "explanation": "Phân vùng bộ nhớ (Partition) là kỹ thuật quản lý bộ nhớ vật lý cổ điển, không phải kỹ thuật hiện thực bộ nhớ ảo (virtual memory — vốn dùng demand paging hoặc segmentation)."
  },
  {
    "id": 8250,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] A cpu may have separate fetch, decode and execute units, so that can carry out three steps of",
    "options": [
      "Monitors",
      "Pipeline",
      "Burst time",
      "Done"
    ],
    "answer": 1,
    "explanation": "Kỹ thuật đường ống (Pipeline) cho phép CPU thiết kế các đơn vị tìm nạp (fetch), giải mã (decode) và thực thi (execute) riêng biệt để xử lý gối đầu nhiều bước của nhiều lệnh cùng lúc."
  },
  {
    "id": 8251,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] Which of a system call is to allow the system fetch the attributes and list of disk addresses into",
    "options": [
      "Sstf",
      "2% of the cpu",
      "Rename",
      "18 sectors"
    ],
    "answer": 2,
    "explanation": "Giải thích đáp án 'Rename': Là lời gọi hệ thống (system call) dùng để đổi tên một tệp tin trong thư mục hiện tại.\n• Lưu ý quan trọng khi đi thi: Về mặt lý thuyết chuẩn trong sách Tanenbaum, system call dùng để mở tệp và nạp thuộc tính (attributes) cùng danh sách địa chỉ đĩa vào bộ nhớ là Open(). Tuy nhiên, trong 4 phương án của câu này chỉ có Rename là tên một File System Call duy nhất (3 lựa chọn kia là SSTF, 2% CPU, 18 sectors) nên Rename là đáp án được chọn."
  },
  {
    "id": 8252,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] Which of the following statements is not correct about the device controller of i/o devices?",
    "options": [
      "Dma controller is usually faster than cpu",
      "Distributing data over multiple drives",
      "Is software component of device",
      "Processor, main memory, i/o modules, system bus"
    ],
    "answer": 2,
    "explanation": "Phát biểu sai về bộ điều khiển thiết bị (device controller) là gọi nó là thành phần phần mềm của thiết bị. Thực chất device controller là thành phần phần cứng (mạch điều khiển), còn phần mềm tương ứng là device driver."
  },
  {
    "id": 8253,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] Which of the following is not a task of i/o management of os?",
    "options": [
      "Rotational delay",
      "Is software component of device",
      "Processor, main memory, i/o modules, system bus",
      "Mapping files onto secondary storage"
    ],
    "answer": 3,
    "explanation": "Việc ánh xạ tệp lên bộ nhớ thứ cấp (Mapping files onto secondary storage) là nhiệm vụ của hệ thống quản lý tệp (File System Management), không phải nhiệm vụ trực tiếp của quản lý I/O."
  },
  {
    "id": 8254,
    "topic": "📚 FPT Bank (Ch.4: File Systems)",
    "question": "[FPT Bank - Ch.4: File Systems] ____ is the partitioning of a single server, each of which can support a different operating system.",
    "options": [
      "Rewrite",
      "Head",
      "Pwd",
      "Virtualization"
    ],
    "answer": 3,
    "explanation": "Ảo hóa (Virtualization) là kỹ thuật phân chia một máy chủ vật lý duy nhất thành nhiều máy ảo độc lập, mỗi máy ảo có thể cài đặt và chạy một hệ điều hành khác nhau."
  },
  {
    "id": 8255,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] A cpu may have two or more complete processors, so that can carry out multiple threads in the same time is called:",
    "options": [
      "Multicore",
      "Sequentially",
      "Job scheduling",
      "Error exit"
    ],
    "answer": 0,
    "explanation": "Đa nhân (Multicore) là kiến trúc CPU tích hợp từ hai bộ xử lý hoàn chỉnh trở lên trên cùng một chip, cho phép thực thi đồng thời nhiều luồng (multiple threads) tại cùng một thời điểm."
  },
  {
    "id": 8256,
    "topic": "📚 FPT Bank (Ch.1: Introduction & OS Concepts)",
    "question": "[FPT Bank - Ch.1: Introduction & OS Concepts] The interface between the operating system kernel and the user programs is defined by the set of ________ that the operating system provides",
    "options": [
      "Monolithic system",
      "1940-1955",
      "320,000",
      "System calls"
    ],
    "answer": 3,
    "explanation": "Giao diện giữa hạt nhân hệ điều hành (kernel) và các chương trình người dùng (user programs) được định nghĩa thông qua tập hợp các lời gọi hệ thống (System calls) mà hệ điều hành cung cấp."
  },
  {
    "id": 8257,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] What happens when a thread calls down (s) when it wants to enter its critical section, where s is a binary semaphore set to 1?",
    "options": [
      "The thread is allowed to enter its critical section and s is decremented.",
      "There are two available",
      "With user-level threads, customized scheduling algorithms cannot be implemented",
      "Thread involuntarily releases cpu"
    ],
    "answer": 0,
    "explanation": "Với đèn hiệu nhị phân (binary semaphore) đang có giá trị s = 1 (tài nguyên rảnh), khi luồng gọi down(s), giá trị s được giảm đi 1 (s = 1 - 1 = 0) để khóa tài nguyên và luồng được phép đi vào vùng găng (critical section)."
  },
  {
    "id": 8258,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] Which of the following statement is not true about separating i/o and memory space?",
    "options": [
      "A hard drive is an example of a character-oriented i/o device",
      "Balance cpu and i/o intensive jobs",
      "Logical block addressing",
      "Caching a device control register would be disastrous"
    ],
    "answer": 3,
    "explanation": "Phát biểu không đúng về cơ chế tách biệt không gian I/O và bộ nhớ (separating I/O and memory space) là 'cache thanh ghi điều khiển thiết bị sẽ gây thảm họa'. Thực chất vấn đề cache thanh ghi chỉ xảy ra ở cơ chế I/O ánh xạ bộ nhớ (memory-mapped I/O), còn khi tách riêng không gian I/O thì các cổng I/O không bị CPU cache như RAM."
  },
  {
    "id": 8259,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] Each device attached to your computer comes with a specia l program called a",
    "options": [
      "Boot block",
      "500,000",
      "Control unit",
      "Device driver"
    ],
    "answer": 3,
    "explanation": "Mỗi thiết bị phần cứng gắn vào máy tính đều đi kèm một chương trình đặc biệt gọi là trình điều khiển thiết bị (Device driver) để hệ điều hành giao tiếp và điều khiển chính xác thiết bị đó."
  },
  {
    "id": 8260,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] Which concept is described as \"disk sectors are just numbered consecutively starting at 0, without regard to the disk geometry\"?",
    "options": [
      "Sector header erasure time",
      "Logical block addressing",
      "Is software component of device",
      "Block devices and character devices"
    ],
    "answer": 1,
    "explanation": "Đánh địa chỉ khối logic — Logical Block Addressing (LBA) là khái niệm đánh số các sector đĩa liên tiếp từ 0 trở đi mà không cần quan tâm tới cấu trúc hình học vật lý (cylinder, head, sector) của ổ đĩa."
  },
  {
    "id": 8261,
    "topic": "📚 FPT Bank (Ch.1: Introduction & OS Concepts)",
    "question": "[FPT Bank - Ch.1: Introduction & OS Concepts] What is the characteristic of the first generation of operating system?",
    "options": [
      "Vacuum tubes, plug boards",
      "Pci (peripheral component interconnect)",
      "User interface",
      "The graph has at least one cycle."
    ],
    "answer": 0,
    "explanation": "Thế hệ thứ nhất của hệ thống máy tính và hệ điều hành (giai đoạn 1945–1955) có đặc trưng sử dụng đèn chân không (vacuum tubes) và bảng cắm dây (plug boards) để lập trình trực tiếp."
  },
  {
    "id": 8262,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] Which of the following process state transitions is correct, when the scheduler picks a process from",
    "options": [
      "4% of the cpu",
      "Interrupt signal",
      "Critical region",
      "Ready -> running"
    ],
    "answer": 3,
    "explanation": "Khi bộ lập lịch (scheduler) chọn một tiến trình từ hàng đợi sẵn sàng để cấp phát CPU, tiến trình đó chuyển từ trạng thái Ready (sẵn sàng) sang Running (đang chạy)."
  },
  {
    "id": 8263,
    "topic": "📚 FPT Bank (Ch.1: Introduction & OS Concepts)",
    "question": "[FPT Bank - Ch.1: Introduction & OS Concepts] Which ofthe following operating systems is an example of monolithic system?",
    "options": [
      "Ms-dos",
      "E-cos",
      "Blocking",
      "2.4 trillion"
    ],
    "answer": 0,
    "explanation": "MS-DOS là một ví dụ điển hình của hệ điều hành cấu trúc nguyên khối (monolithic system), trong đó toàn bộ dịch vụ hệ điều hành chạy chung trong một không gian hạt nhân duy nhất."
  },
  {
    "id": 8264,
    "topic": "📚 FPT Bank (Ch.1: Introduction & OS Concepts)",
    "question": "[FPT Bank - Ch.1: Introduction & OS Concepts] A well-known real-time operating system is:",
    "options": [
      "1",
      "320,000",
      "E-cos",
      "Lands"
    ],
    "answer": 2,
    "explanation": "eCos (Embedded Configurable Operating System) là một hệ điều hành thời gian thực (real-time operating system — RTOS) nổi tiếng, được thiết kế tối ưu cho các hệ thống nhúng."
  },
  {
    "id": 8265,
    "topic": "📚 FPT Bank (Ch.1: Introduction & OS Concepts)",
    "question": "[FPT Bank - Ch.1: Introduction & OS Concepts] Which of the following instructions should be allowed only in kernel mode?",
    "options": [
      "Workstations",
      "Rotational ordering",
      "Disable all interrupts",
      "Procedure library"
    ],
    "answer": 2,
    "explanation": "Các lệnh đặc quyền (privileged instructions) như vô hiệu hóa mọi ngắt (Disable all interrupts) chỉ được phép chạy ở chế độ nhân (kernel mode) để ngăn chương trình người dùng tự ý khóa CPU hoặc làm treo toàn bộ hệ thống."
  },
  {
    "id": 8266,
    "topic": "📚 FPT Bank (Ch.1: Introduction & OS Concepts)",
    "question": "[FPT Bank - Ch.1: Introduction & OS Concepts] The _________is the essential component ofthe operating system that remains in ram when your computer is powered on.",
    "options": [
      "Kernel",
      "Date",
      "Workstations",
      "Kerneld"
    ],
    "answer": 0,
    "explanation": "Nhân hệ điều hành (Kernel) là thành phần cốt lõi luôn thường trú trong bộ nhớ RAM từ lúc máy tính khởi động để quản lý CPU, bộ nhớ và các thiết bị xuất/nhập."
  },
  {
    "id": 8267,
    "topic": "📚 FPT Bank (Ch.1: Introduction & OS Concepts)",
    "question": "[FPT Bank - Ch.1: Introduction & OS Concepts] Which is not a goal of a sheduling algorithm for all systems?",
    "options": [
      "Businesses",
      "1",
      "Megabytes",
      "Balance"
    ],
    "answer": 3,
    "explanation": "Giải thích đáp án 'Balance' (Cân bằng hệ thống): Là mục tiêu lập lịch giữ cho mọi bộ phận của hệ thống (cả CPU lẫn các thiết bị I/O) đều hoạt động bận rộn và hài hòa, tránh tình trạng CPU quá tải trong khi I/O rảnh hoặc ngược lại.\n• Lưu ý quan trọng khi đi thi: Theo Tanenbaum, 3 mục tiêu lập lịch cho MỌI hệ thống (All systems) là Fairness (công bằng), Policy enforcement (thực thi chính sách) và Balance (cân bằng). Câu hỏi này bị đảo chữ 'not' nhưng 3 phương án nhiễu lại là từ không liên quan (Businesses, 1, Megabytes), nên 'Balance' là thuật ngữ lập lịch duy nhất và là đáp án đúng của câu này."
  },
  {
    "id": 8268,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] A entry of the process table is called:",
    "options": [
      "Process control block",
      "Mutual exclusion",
      "There are two available",
      "Disable interrupts"
    ],
    "answer": 0,
    "explanation": "Mỗi mục (entry) trong bảng tiến trình (process table) được gọi là khối điều khiển tiến trình (Process Control Block - PCB), nơi lưu giữ trạng thái, bộ đếm chương trình (PC), các thanh ghi và thông tin tài nguyên của tiến trình."
  },
  {
    "id": 8269,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] Which is the maximum number of partition that most disks can be divided up?",
    "options": [
      "2",
      "4",
      "500,000",
      "24 sectors"
    ],
    "answer": 1,
    "explanation": "Theo chuẩn bảng phân vùng MBR (Master Boot Record) truyền thống trên hầu hết ổ đĩa cứng, một đĩa chỉ có thể chia tối đa thành 4 phân vùng chính (primary partitions)."
  },
  {
    "id": 8270,
    "topic": "📚 FPT Bank (Ch.4: File Systems)",
    "question": "[FPT Bank - Ch.4: File Systems] Which of the following is not special file?",
    "options": [
      "Mkdir",
      "Rewrite",
      "File management",
      "Stream special file"
    ],
    "answer": 3,
    "explanation": "Trong hệ thống tệp UNIX/OSG202, tệp đặc biệt (special file) đại diện cho thiết bị chỉ có hai loại là tệp ký tự (character special file) và tệp khối (block special file), không tồn tại khái niệm \"Stream special file\"."
  },
  {
    "id": 8271,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] Device driver is usually written by:",
    "options": [
      "Linked list allocation",
      "Device's manufacturer",
      "Boot block",
      "Rotational delay"
    ],
    "answer": 1,
    "explanation": "Trình điều khiển thiết bị (Device driver) đòi hỏi phải hiểu chính xác cấu trúc phần cứng và các thanh ghi của từng thiết bị cụ thể, nên thường được viết bởi chính nhà sản xuất thiết bị (Device's manufacturer)."
  },
  {
    "id": 8272,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] Imagine that a certain modem can read 7,000 characters per second and that the time to read a",
    "options": [
      "Ready -> running",
      "Data area",
      "Job scheduling",
      "4% of the cpu"
    ],
    "answer": 3,
    "explanation": "Công thức tính tỷ lệ phần trăm CPU bị tiêu tốn cho ngắt I/O (Interrupt-driven I/O): CPU% = (Số ngắt mỗi giây × Thời gian CPU xử lý 1 ngắt) × 100%.\n• Với modem đọc 7.000 ký tự/giây (mỗi ký tự phát sinh 1 ngắt) và thời gian phục vụ mỗi ngắt khoảng 5,7 µs (≈ 5,7 × 10⁻⁶ giây): 7.000 × 5,7 × 10⁻⁶ ≈ 0,04 = 4% thời gian CPU."
  },
  {
    "id": 8273,
    "topic": "📚 FPT Bank (Ch.6: Deadlocks)",
    "question": "[FPT Bank - Ch.6: Deadlocks] In a directed graph used to model deadlock, ______represents deadlock.",
    "options": [
      "Hold and wait",
      "Squares",
      "Cycle",
      "Two or more processes"
    ],
    "answer": 2,
    "explanation": "Trong đồ thị có hướng mô hình hóa tắc nghẽn (Resource Allocation Graph với mỗi loại tài nguyên có 1 thực thể), sự tồn tại của một chu trình (Cycle) biểu thị chắc chắn đang xảy ra deadlock."
  },
  {
    "id": 8274,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] Which is not a function of device drivers?",
    "options": [
      "Checking to see if the user is permitted to use the device",
      "To accept abstract read and write request from device independent software above it and see that they are curried out",
      "Bios detects the boot device, the boot sector determines the active partition, then the boot loader loads the operating system",
      "Writing commands to the device registers"
    ],
    "answer": 1,
    "explanation": "Giải thích đáp án 'To accept abstract read and write requests from device-independent software above it and see that they are carried out': Có nghĩa là tiếp nhận các yêu cầu đọc/ghi trừu tượng từ tầng phần mềm độc lập thiết bị phía trên rồi chuyển thành lệnh cụ thể xuống phần cứng thiết bị để thực thi.\n• Lưu ý quan trọng khi đi thi: Về lý thuyết, đây CHÍNH LÀ chức năng cốt lõi của Device Driver (còn kiểm tra quyền người dùng 'Checking if user is permitted' thuộc tầng bảo mật/OS). Đề gốc bị lỗi dư từ phủ định 'not' nên vẫn chấm phương án mô tả chức năng cốt lõi này là đáp án đúng."
  },
  {
    "id": 8275,
    "topic": "📚 FPT Bank (Ch.6: Deadlocks)",
    "question": "[FPT Bank - Ch.6: Deadlocks] What is the correct approach with the \"mutual exclusion condition\" to prevent deadlock?",
    "options": [
      "Two or more processes",
      "Spool everything",
      "Dijkstra",
      "Mutual exlusion"
    ],
    "answer": 1,
    "explanation": "Để phòng tránh deadlock bằng cách phá vỡ điều kiện loại trừ tương hỗ (mutual exclusion condition), giải pháp là dùng bộ đệm hàng đợi cho mọi thiết bị (Spool everything, ví dụ bộ đệm in) để tiến trình không cần chiếm giữ độc quyền thiết bị vật lý."
  },
  {
    "id": 8276,
    "topic": "📚 FPT Bank (Ch.6: Deadlocks)",
    "question": "[FPT Bank - Ch.6: Deadlocks] An example of preemptable resources is",
    "options": [
      "Two or more processes",
      "Circular wait",
      "Timeouts",
      "Memory"
    ],
    "answer": 3,
    "explanation": "Tài nguyên có thể trưng dụng/thu hồi (preemptable resource) là tài nguyên có thể tạm lấy lại từ tiến trình đang giữ mà không làm hỏng tiến trình đó rồi cấp lại sau, ví dụ điển hình là bộ nhớ (Memory) hoặc CPU."
  },
  {
    "id": 8277,
    "topic": "📚 FPT Bank (Ch.6: Deadlocks)",
    "question": "[FPT Bank - Ch.6: Deadlocks] Consider the case of a home construction company with two application programs, purchasing (p1) and sales (p2), which are active at the same time. they each need to access two files, inventory (f1) and suppliers (f2), to update daily transactions. the following series of events will cause a deadlock. fill in the missing event in the sequence.",
    "options": [
      "Timeouts",
      "Will cause the process to fail if taken away",
      "Sales (p2) doesn't release the inventory file (f1) but requests the supplier file (f2)",
      "Hierarchical ordering"
    ],
    "answer": 2,
    "explanation": "Để hình thành vòng chờ (circular wait) gây deadlock giữa P1 và P2 khi P1 đang giữ supplier (f2) và cần inventory (f1), sự kiện còn thiếu trong chuỗi là Sales (P2) không nhả tệp inventory (f1) mà lại yêu cầu tiếp tệp supplier (f2)."
  },
  {
    "id": 8278,
    "topic": "📚 FPT Bank (Ch.6: Deadlocks)",
    "question": "[FPT Bank - Ch.6: Deadlocks] Fill in the missing step in the following deadlock situation. two users from the local board of education are each running a program (p1 and p2), and both programs will eventually need two dvd drives to copy files from one disc to another. only two dvd-r drives are available and they're allocated on an \"as requested\" basis. soon the following sequence transpires:",
    "options": [
      "P2 requests drive 2 and gets it.",
      "Two or more processes",
      "Fig. c",
      "Circular wait"
    ],
    "answer": 0,
    "explanation": "Với chỉ 2 ổ đĩa DVD có sẵn, kịch bản dẫn đến deadlock là sau khi P1 giữ Drive 1 thì P2 yêu cầu Drive 2 và được cấp phát (\"P2 requests drive 2 and gets it\"), khiến mỗi tiến trình giữ 1 ổ và cùng chờ ổ còn lại."
  },
  {
    "id": 8279,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] With demand paging, jobs are divided into equally sized ____ that initially reside in secondary storage.",
    "options": [
      "Ms-dos",
      "Firmware",
      "Pages",
      "Compaction"
    ],
    "answer": 2,
    "explanation": "Trong cơ chế phân trang theo yêu cầu (demand paging), các tác vụ/chương trình được chia thành các khối kích thước bằng nhau gọi là trang (Pages), ban đầu lưu trên bộ nhớ phụ và chỉ nạp vào RAM khi cần dùng."
  },
  {
    "id": 8280,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] The cache hit ratio is ____, if the total number of requests is 10 and 6 of those are found in cache memory.",
    "options": [
      "Thrashing",
      "60%",
      "10250",
      "4033"
    ],
    "answer": 1,
    "explanation": "Tỷ lệ trúng bộ nhớ đệm (Cache hit ratio) tính theo công thức: `Hit ratio = (Số yêu cầu tìm thấy trong cache / Tổng số yêu cầu) × 100% = (6 / 10) × 100% = 60%`."
  },
  {
    "id": 8281,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] Which of the following is appropriate to release page table and pages?",
    "options": [
      "Process creation",
      "Very long page tables",
      "Compaction",
      "Process termination time"
    ],
    "answer": 3,
    "explanation": "Bảng trang (page table) và các trang bộ nhớ (pages) chỉ được giải phóng hoàn toàn tại thời điểm tiến trình kết thúc (Process termination time), vì khi tiến trình còn tồn tại thì hệ điều hành vẫn cần ánh xạ địa chỉ cho nó."
  },
  {
    "id": 8282,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] Which of the following information bits used by the various page replacement policies indicates if the page has been called lately?",
    "options": [
      "Thread segment",
      "Absolute address",
      "Overhead",
      "Referenced bit"
    ],
    "answer": 3,
    "explanation": "Trong các thuật toán thay thế trang (page replacement policies), bit tham chiếu (Referenced bit) được phần cứng đánh dấu lên 1 mỗi khi trang vừa được truy xuất gần đây (đọc hoặc ghi)."
  },
  {
    "id": 8283,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] In the memory-mapped i/o system, in order that cpu communicates with the control registers in the devices, the control register is assigned :",
    "options": [
      "Superblock",
      "Requires a disk map in memory",
      "Linked list allocation",
      "Unique memory address"
    ],
    "answer": 3,
    "explanation": "Trong hệ thống xuất/nhập ánh xạ bộ nhớ (memory-mapped I/O), mỗi thanh ghi điều khiển (control register) của thiết bị được gán một địa chỉ bộ nhớ duy nhất (Unique memory address) để CPU truy cập bằng các lệnh đọc/ghi bộ nhớ thông thường."
  },
  {
    "id": 8284,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] A system has four processes and five allocated resources. the current allocation and maximum needs are as follows:",
    "options": [
      "Stack",
      "Ps",
      "1",
      "Data area"
    ],
    "answer": 2,
    "explanation": "Bài toán thuật toán Banker kinh điển (4 tiến trình A–D, 5 loại tài nguyên R1–R5) hỏi giá trị nhỏ nhất của x trong vector Available = [0, 0, x, 1, 2] để hệ thống ở trạng thái an toàn (Safe State):\n• Bước 1 — Tính ma trận Need = Max − Allocated:\n  Need_A = [0,1,0,0,2], Need_B = [0,2,1,0,0], Need_C = [1,0,3,0,0], Need_D = [0,0,1,1,1].\n• Bước 2 — Thử x = 0: Available = [0,0,0,1,2] không thỏa Need của tiến trình nào ⇒ Bế tắc (Unsafe).\n• Bước 3 — Thử x = 1: Available = [0,0,1,1,2] ≥ Need_D [0,0,1,1,1] ⇒ D chạy xong trả Allocated_D [1,1,1,1,0] ⇒ Available mới = [1,1,2,2,2]. Sau đó lần lượt chạy hết A → C → B (tồn tại chuỗi an toàn <D, A, C, B>).\n⇒ Giá trị nhỏ nhất của x để hệ thống an toàn là 1."
  },
  {
    "id": 8285,
    "topic": "📚 FPT Bank (Ch.1: Introduction & OS Concepts)",
    "question": "[FPT Bank - Ch.1: Introduction & OS Concepts] 1. the operating system does each of the following except",
    "options": [
      "Ensures that programs terminate their execution",
      "Precise interrupt",
      "Program counter (pc)",
      "Loading the command interpreter"
    ],
    "answer": 0,
    "explanation": "Hệ điều hành thực hiện việc nạp bộ thông dịch lệnh, quản lý bộ đếm chương trình (PC) và xử lý ngắt, nhưng KHÔNG thể đảm bảo mọi chương trình người dùng sẽ tự kết thúc thực thi (vì chương trình có thể rơi vào vòng lặp vô hạn)."
  },
  {
    "id": 8286,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] 2. the process is the computational environment that includes each of the following except",
    "options": [
      "Job scheduling",
      "Instruction set",
      "Resource holding",
      "Operating system"
    ],
    "answer": 3,
    "explanation": "Tiến trình (process) là môi trường tính toán gồm tập lệnh (instruction set), tài nguyên đang giữ (resource holding) và trạng thái thực thi, nhưng KHÔNG bao gồm bản thân hệ điều hành (Operating system) — thứ quản lý nó từ bên ngoài."
  },
  {
    "id": 8287,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] 3. threads can be implemented in each of the following ways except",
    "options": [
      "There are two available",
      "Ready -> blocked (waiting)",
      "Ready -> running",
      "Parent/child processes"
    ],
    "answer": 3,
    "explanation": "Luồng (threads) có thể được cài đặt ở không gian người dùng, không gian nhân hoặc kết hợp, nhưng KHÔNG cài đặt bằng tiến trình cha/con (Parent/child processes) vì các tiến trình tách biệt không gian địa chỉ chứ không dùng chung bộ nhớ như luồng."
  },
  {
    "id": 8288,
    "topic": "📚 FPT Bank (Ch.4: File Systems)",
    "question": "[FPT Bank - Ch.4: File Systems] 4. files are distinguished from other resources except that",
    "options": [
      "The interface is exceptionally complex as compared with most other resources.",
      "Both hard link and symbolic link",
      "Ls -a",
      "Indexed allocation"
    ],
    "answer": 0,
    "explanation": "Giao diện làm việc với tệp (open, read, write, close) được hệ điều hành thiết kế đơn giản và nhất quán hơn nhiều thiết bị khác, nên nhận định nói giao diện tệp phức tạp một cách bất thường là sai (ngoại lệ)."
  },
  {
    "id": 8289,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] 5. a unix process contains each of the following except",
    "options": [
      "Increasing access time",
      "Present/ absent bit",
      "Thread segment",
      "Mutual exclusion"
    ],
    "answer": 2,
    "explanation": "Một tiến trình UNIX truyền thống gồm các phân đoạn: mã lệnh (text/code), dữ liệu (data) và ngăn xếp (stack), chứ không có thành phần nào gọi là \"Thread segment\"."
  },
  {
    "id": 8290,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] 6. the process manager deals with the following except",
    "options": [
      "Job scheduling",
      "Mutual exclusion",
      "Window management",
      "Decentralized"
    ],
    "answer": 2,
    "explanation": "Bộ quản lý tiến trình (process manager) đảm nhận lập lịch (job scheduling), đồng bộ hóa và loại trừ tương hỗ (mutual exclusion), nhưng KHÔNG phụ trách quản lý cửa sổ giao diện đồ họa (Window management)."
  },
  {
    "id": 8291,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] 7. the process manager commonly interacts with other components except",
    "options": [
      "Block-oriented devices",
      "Device controller",
      "Boot block",
      "Read the time-of-day clock"
    ],
    "answer": 1,
    "explanation": "Bộ quản lý tiến trình (process manager) tương tác với các tầng phần mềm như trình quản lý bộ nhớ hay đồng hồ hệ thống, chứ KHÔNG làm việc trực tiếp với phần cứng bộ điều khiển thiết bị (Device controller - việc này do device driver đảm nhiệm)."
  },
  {
    "id": 8292,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] 8. a trap instruction doesn't cause this cpu hardware step to occur:",
    "options": [
      "Procedure call handler code",
      "Circular-wait condition",
      "No two processes simultaneously in critical region",
      "Return control to the user code which invoked the trap instruction"
    ],
    "answer": 3,
    "explanation": "Khi lệnh bẫy (trap instruction) xảy ra để thực hiện lời gọi hệ thống, phần cứng CPU sẽ lưu trạng thái, chuyển sang chế độ nhân và nhảy vào mã xử lý (handler code), chứ KHÔNG trả quyền điều khiển ngay về mã người dùng lúc vừa gọi trap."
  },
  {
    "id": 8293,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] 10. on a magnetic disk, which is not a critical timing characteristic?",
    "options": [
      "Block devices and character devices",
      "Distributing data over multiple drives",
      "Sector header erasure time",
      "Linked list allocation"
    ],
    "answer": 2,
    "explanation": "Ba thông số thời gian cốt lõi của đĩa từ (magnetic disk) là thời gian tìm track (seek time), độ trễ quay (rotational delay) và thời gian truyền dữ liệu (transfer time); hoàn toàn không có khái niệm \"Sector header erasure time\"."
  },
  {
    "id": 8294,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] 11. which is not a characteristic of a thread?",
    "options": [
      "Minimize average waiting time",
      "Thread parent identifier",
      "Parent/child processes",
      "Window management"
    ],
    "answer": 1,
    "explanation": "Các luồng (threads) trong cùng một tiến trình có vị thế ngang hàng và dùng chung không gian địa chỉ, nên không tồn tại khái niệm \"mã định danh luồng cha\" (Thread parent identifier) như ở mô hình tiến trình cha-con."
  },
  {
    "id": 8295,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] 12. basic process states include the following except",
    "options": [
      "Ps",
      "Superscalar",
      "Done",
      "8 minutes"
    ],
    "answer": 2,
    "explanation": "Ba trạng thái cơ bản của một tiến trình trong hệ điều hành là Running (đang chạy), Ready (sẵn sàng) và Blocked/Waiting (chờ); \"Done\" không nằm trong 3 trạng thái cơ bản này."
  },
  {
    "id": 8296,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] 13. which is the least common reason that a running thread might cease using the cpu?",
    "options": [
      "Ready -> running",
      "Createprocess; fork",
      "Pick one of the ready processes to run next",
      "Thread involuntarily releases cpu"
    ],
    "answer": 3,
    "explanation": "Một luồng đang chạy thường rời CPU do tự nguyện kết thúc, chờ I/O hoặc hết lát thời gian; theo phân loại của câu hỏi trong giáo trình, trường hợp ít phổ biến nhất là luồng bị tước CPU một cách không tự nguyện (Thread involuntarily releases CPU)."
  },
  {
    "id": 8297,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] 14. how many context switches occur whenever application processes are multiplexed?",
    "options": [
      "Semaphores",
      "4",
      "Ps",
      "Ready"
    ],
    "answer": 1,
    "explanation": "Khi chuyển đổi qua lại (multiplex) giữa các tiến trình ứng dụng qua nhân hệ điều hành (từ tiến trình A → chế độ nhân → bộ lập lịch → tiến trình B và ngược lại), có tổng cộng 4 lần chuyển đổi ngữ cảnh/chế độ (context switches) xảy ra."
  },
  {
    "id": 8298,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] 15. the os implementation of a scheduler normally does not include",
    "options": [
      "Thread involuntarily releases cpu",
      "Blocked (waiting) -> ready",
      "Disable interrupts",
      "Procedure call handler code"
    ],
    "answer": 3,
    "explanation": "Phần cài đặt bộ lập lịch (scheduler) của hệ điều hành quản lý chuyển trạng thái và chọn tiến trình chạy (thường tắt ngắt khi thao tác hàng đợi), chứ không chứa mã xử lý lời gọi thủ tục thông thường (Procedure call handler code)."
  },
  {
    "id": 8299,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] 16. in the synchronization context, process creation and destruction tend to be quite costly operations because of the following, except",
    "options": [
      "Is software component of device",
      "The larger the block size is the worse the disk space utilization is",
      "Converting binary integers to ascii for printing",
      "Parent processes have difficulty tracking concurrent creation and destruction of child processes"
    ],
    "answer": 3,
    "explanation": "Việc tạo và hủy tiến trình tốn kém do phải cấp phát/thu hồi PCB, bảng trang và không gian nhớ; còn việc tiến trình cha theo dõi các tiến trình con rất dễ dàng qua PID và bảng tiến trình, nên nhận định nói cha gặp khó khăn khi theo dõi con là sai (ngoại lệ)."
  },
  {
    "id": 8300,
    "topic": "📚 FPT Bank (Ch.1: Introduction & OS Concepts)",
    "question": "[FPT Bank - Ch.1: Introduction & OS Concepts] 17. which statement about test-and-set is incorrect?",
    "options": [
      "Pci (peripheral component interconnect)",
      "Test-and-set executes as a sequence of machine instructions",
      "Loading the command interpreter",
      "Batch and interactive"
    ],
    "answer": 1,
    "explanation": "Lệnh `Test-and-Set` là một chỉ thị nguyên tử (atomic) thực thi trọn vẹn trong một thao tác phần cứng không thể chia cắt, nên phát biểu nói nó thực thi như một chuỗi nhiều lệnh máy (a sequence of machine instructions) là sai."
  },
  {
    "id": 8301,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] 18. the following statements about and synchronization are true except",
    "options": [
      "Simultaneous semaphore is slightly more powerful than basic semaphore",
      "Disabling interrupts",
      "General and special registers",
      "Normal exit (voluntary)"
    ],
    "answer": 0,
    "explanation": "Trong lý thuyết đồng bộ hóa, các loại semaphore (như basic/binary semaphore và simultaneous/counting semaphore) có sức mạnh biểu diễn tương đương nhau, nên nhận định loại này mạnh hơn loại kia là sai."
  },
  {
    "id": 8302,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] 19. which statement about monitors is incorrect?",
    "options": [
      "Monitors can solve just a proper subset of synchronization problems solvable with semaphores",
      "General and special registers",
      "Return control to the user code which invoked the trap instruction",
      "Application programmer"
    ],
    "answer": 0,
    "explanation": "Monitor và Semaphore có khả năng giải quyết các bài toán đồng bộ hóa tương đương nhau (có thể dùng cái này để cài đặt cái kia), do đó nói Monitor chỉ giải quyết được một tập con thực sự (proper subset) của Semaphore là sai."
  },
  {
    "id": 8303,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] 20. which statement about ipc is incorrect?",
    "options": [
      "No two processes simultaneously in critical region",
      "There are two available",
      "1: process blocks for input; 2: scheduler picks another process; 3: scheduler picks this process; 4: input becomes available",
      "If the sender and receiver are on different machines, the os must obtain additional cooperation of the two processes"
    ],
    "answer": 3,
    "explanation": "Trong giao tiếp liên tiến trình (IPC), nếu tiến trình gửi và nhận nằm trên hai máy khác nhau, hệ điều hành và tầng mạng sẽ tự phối hợp truyền tin một cách trong suốt chứ không bắt hai tiến trình phải hợp tác thêm gì đặc biệt."
  },
  {
    "id": 8304,
    "topic": "📚 FPT Bank (Ch.1: Introduction & OS Concepts)",
    "question": "[FPT Bank - Ch.1: Introduction & OS Concepts] An operating system is?",
    "options": [
      "The graph has at least one cycle.",
      "Batch and interactive",
      "A program that acts as an intermediary between a user of a computer and the computer hardware",
      "In terms of performance, using system calls is better than using procedure calls"
    ],
    "answer": 2,
    "explanation": "Theo định nghĩa chuẩn, hệ điều hành (Operating System) là chương trình đóng vai trò trung gian giữa người dùng máy tính và phần cứng máy tính, giúp quản lý tài nguyên và thực thi chương trình thuận tiện."
  },
  {
    "id": 8305,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] What is the main difference function between operating systems for mainframe computer and personal computer?",
    "options": [
      "Many i/o devices",
      "Unique memory address",
      "500,000",
      "Psw and pc"
    ],
    "answer": 0,
    "explanation": "Sự khác biệt chức năng chính giữa hệ điều hành máy tính lớn (mainframe) và máy tính cá nhân (PC) là mainframe phải tối ưu quản lý đồng thời một số lượng rất lớn các thiết bị xuất/nhập (Many I/O devices) và tác vụ."
  },
  {
    "id": 8306,
    "topic": "📚 FPT Bank (Ch.4: File Systems)",
    "question": "[FPT Bank - Ch.4: File Systems] Which of the following is operating system component?",
    "options": [
      "Tree",
      "Linked allocation using fat",
      "Journaling file systems",
      "File management"
    ],
    "answer": 3,
    "explanation": "Quản lý tệp (File management) là một trong những thành phần chức năng cốt lõi của hệ điều hành (cùng với quản lý tiến trình, bộ nhớ và thiết bị I/O)."
  },
  {
    "id": 8307,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] Which is the voluntary-condition which terminated process?",
    "options": [
      "Error exit",
      "Monitors",
      "Multiprocessing",
      "Burst time"
    ],
    "answer": 0,
    "explanation": "Thoát do lỗi tự phát hiện (Error exit) là một dạng kết thúc tiến trình tự nguyện (voluntary termination), xảy ra khi bản thân tiến trình phát hiện lỗi (ví dụ không tìm thấy file đầu vào) và tự gọi hàm kết thúc."
  },
  {
    "id": 8308,
    "topic": "📚 FPT Bank (Ch.6: Deadlocks)",
    "question": "[FPT Bank - Ch.6: Deadlocks] What is the correct approach with the hold and wait condition to prevent deadlock?",
    "options": [
      "Take resources away",
      "Can be taken away from a process with no ill effects",
      "Request all resources initially",
      "P2 requests drive 2 and gets it."
    ],
    "answer": 2,
    "explanation": "Để phá vỡ điều kiện \"giữ và chờ\" (hold and wait) nhằm phòng tránh deadlock, tiến trình phải yêu cầu toàn bộ các tài nguyên cần thiết ngay từ lúc bắt đầu (Request all resources initially)."
  },
  {
    "id": 8309,
    "topic": "📚 FPT Bank (Ch.1: Introduction & OS Concepts)",
    "question": "[FPT Bank - Ch.1: Introduction & OS Concepts] Which of the following actions generates an hardware interrupt?",
    "options": [
      "Batch and interactive",
      "Monolithic system",
      "Ensures that programs terminate their execution",
      "An input/output operation is completed."
    ],
    "answer": 3,
    "explanation": "Ngắt phần cứng (hardware interrupt) phát sinh từ tín hiệu của thiết bị ngoại vi gửi tới CPU, điển hình nhất là khi một thao tác nhập/xuất (input/output operation) vừa hoàn tất."
  },
  {
    "id": 8310,
    "topic": "📚 FPT Bank (Ch.4: File Systems)",
    "question": "[FPT Bank - Ch.4: File Systems] Which command is used to change a file's name?",
    "options": [
      "Tree",
      "The innermost part",
      "Mv",
      "Rewrite"
    ],
    "answer": 2,
    "explanation": "Trong UNIX/Linux, lệnh `mv` (move) dùng để di chuyển tệp/thư mục hoặc đổi tên tệp (ví dụ: `mv ten_cu ten_moi`)."
  },
  {
    "id": 8311,
    "topic": "📚 FPT Bank (Ch.4: File Systems)",
    "question": "[FPT Bank - Ch.4: File Systems] Which command is used to jump on sub-directory?",
    "options": [
      "Mv",
      "Rewrite",
      "Cd",
      "1 tb"
    ],
    "answer": 2,
    "explanation": "Lệnh `cd` (change directory) trong UNIX/Linux dùng để chuyển vị trí làm việc hiện tại sang một thư mục con (sub-directory) hoặc đường dẫn khác."
  },
  {
    "id": 8312,
    "topic": "📚 FPT Bank (Ch.4: File Systems)",
    "question": "[FPT Bank - Ch.4: File Systems] Which command is used to display the absolute pathname for the directory that you are working in?",
    "options": [
      "Pwd",
      "Rewrite",
      "Indexed allocation",
      "Mv"
    ],
    "answer": 0,
    "explanation": "Lệnh `pwd` (print working directory) dùng để hiển thị đường dẫn tuyệt đối (absolute pathname) của thư mục hiện tại đang làm việc."
  },
  {
    "id": 8313,
    "topic": "📚 FPT Bank (Ch.4: File Systems)",
    "question": "[FPT Bank - Ch.4: File Systems] Which command can be used to list all file (include hidden files) inside current directory?",
    "options": [
      "Link",
      "Ls -a",
      "Tree",
      "The innermost part"
    ],
    "answer": 1,
    "explanation": "Lệnh `ls -a` (list all) liệt kê tất cả tệp và thư mục trong thư mục hiện tại, bao gồm cả các tệp ẩn (hidden files có tên bắt đầu bằng dấu chấm `.`)."
  },
  {
    "id": 8314,
    "topic": "📚 FPT Bank (Ch.4: File Systems)",
    "question": "[FPT Bank - Ch.4: File Systems] Which command would you use to create a sub-directory in your home directory?",
    "options": [
      "File",
      "Path name",
      "Ls -a",
      "Mkdir"
    ],
    "answer": 3,
    "explanation": "Lệnh `mkdir` (make directory) trong UNIX/Linux dùng để tạo một thư mục con (sub-directory) mới."
  },
  {
    "id": 8315,
    "topic": "📚 FPT Bank (Ch.1: Introduction & OS Concepts)",
    "question": "[FPT Bank - Ch.1: Introduction & OS Concepts] Which command will display current day?",
    "options": [
      "Date",
      "28.8 msec",
      "System calls",
      "Lands"
    ],
    "answer": 0,
    "explanation": "Lệnh `date` trong UNIX/Linux dùng để hiển thị ngày và giờ hiện tại của hệ thống."
  },
  {
    "id": 8316,
    "topic": "📚 FPT Bank (Ch.4: File Systems)",
    "question": "[FPT Bank - Ch.4: File Systems] Which command can be used to display the contents of a file on the screen?",
    "options": [
      "Files",
      "Path name",
      "Cat",
      "Journaling file systems"
    ],
    "answer": 2,
    "explanation": "Lệnh `cat` (concatenate) dùng để đọc và hiển thị toàn bộ nội dung của một tệp ra màn hình."
  },
  {
    "id": 8317,
    "topic": "📚 FPT Bank (Ch.4: File Systems)",
    "question": "[FPT Bank - Ch.4: File Systems] _____ is the command that writes the bottom 10 lines of a file to the screen.",
    "options": [
      "File management",
      "Tail",
      "Files",
      "1 tb"
    ],
    "answer": 1,
    "explanation": "Lệnh `tail` trong UNIX/Linux mặc định dùng để in ra màn hình 10 dòng cuối cùng (bottom 10 lines) của một tệp."
  },
  {
    "id": 8318,
    "topic": "📚 FPT Bank (Ch.4: File Systems)",
    "question": "[FPT Bank - Ch.4: File Systems] _____ is the command that writes the first 10 lines of a file to the screen.",
    "options": [
      "Virtualization",
      "Linked allocation using fat",
      "Head",
      "Files"
    ],
    "answer": 2,
    "explanation": "Lệnh `head` trong UNIX/Linux mặc định dùng để in ra màn hình 10 dòng đầu tiên (first 10 lines) của một tệp."
  },
  {
    "id": 8319,
    "topic": "📚 FPT Bank (Ch.2: Processes, Threads & Scheduling)",
    "question": "[FPT Bank - Ch.2: Processes, Threads & Scheduling] The _____ command will list all working processes?",
    "options": [
      "Burst time",
      "Pop-up",
      "Ps",
      "9.0"
    ],
    "answer": 2,
    "explanation": "Lệnh `ps` (process status) trong UNIX/Linux dùng để liệt kê danh sách và trạng thái các tiến trình đang hoạt động."
  },
  {
    "id": 8320,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] ____ uses the same underlying philosophy as shortest job next, where the shortest jobs are processed first and longer jobs are made to wait.",
    "options": [
      "24 sectors",
      "Device driver",
      "1",
      "Sstf"
    ],
    "answer": 3,
    "explanation": "Thuật toán lập lịch đĩa SSTF (Shortest Seek Time First) áp dụng triết lý giống SJN (Shortest Job Next): luôn ưu tiên phục vụ yêu cầu ở track gần đầu đọc nhất trước, khiến các yêu cầu ở xa phải chờ đợi lâu hơn."
  },
  {
    "id": 8321,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] The following,____, describes the first memory allocation scheme.",
    "options": [
      "Restriction of memory size, speed of cpu, screen size, powers",
      "<segment-number, offset>",
      "Each program to be processed was loaded in its entirety into memory and allocated as much contiguous space in memory as it needed",
      "Uses a fifo queue"
    ],
    "answer": 2,
    "explanation": "Sơ đồ cấp phát bộ nhớ đầu tiên (Single-user contiguous allocation) nạp toàn bộ chương trình vào bộ nhớ và cấp cho nó một vùng nhớ liên tiếp (contiguous space) đủ lớn theo nhu cầu."
  },
  {
    "id": 8322,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] The ____ contains the value that must be added to each address referenced in the program so it will be able to access the correct memory addresses after relocation.",
    "options": [
      "First-fit memory allocation",
      "Process termination time",
      "Present/ absent bit",
      "Relocation register"
    ],
    "answer": 3,
    "explanation": "Thanh ghi tái định vị (Relocation register) chứa giá trị địa chỉ nền cần cộng thêm vào mọi địa chỉ mà chương trình tham chiếu, giúp truy cập đúng địa chỉ vật lý sau khi nạp chương trình vào vùng nhớ mới."
  },
  {
    "id": 8323,
    "topic": "📚 FPT Bank (Ch.1: Introduction & OS Concepts)",
    "question": "[FPT Bank - Ch.1: Introduction & OS Concepts] Second-generation computers were developed to meet the needs of ____.",
    "options": [
      "Contention",
      "Function",
      "Businesses",
      "Dynamic"
    ],
    "answer": 2,
    "explanation": "Máy tính thế hệ thứ hai (dùng transistor và hệ thống xử lý theo lô) được phát triển chủ yếu nhằm đáp ứng nhu cầu tính toán và xử lý dữ liệu của các doanh nghiệp (Businesses)."
  },
  {
    "id": 8324,
    "topic": "📚 FPT Bank (Ch.1: Introduction & OS Concepts)",
    "question": "[FPT Bank - Ch.1: Introduction & OS Concepts] ____ means that several logical records are grouped within one physical record.",
    "options": [
      "Internet",
      "1940-1955",
      "Lands",
      "Blocking"
    ],
    "answer": 3,
    "explanation": "Đóng khối (Blocking) là kỹ thuật gom nhiều bản ghi logic (logical records) vào chung một bản ghi vật lý (physical record/block) để tối ưu dung lượng lưu trữ và giảm số lần đọc/ghi đĩa."
  },
  {
    "id": 8325,
    "topic": "📚 FPT Bank (Ch.5: I/O, Disks & RAID)",
    "question": "[FPT Bank - Ch.5: I/O, Disks & RAID] ____ include(s) every peripheral unit in the system such as printers, disk drives, cd/dvd drives, flash memory, keyboards, and so on.",
    "options": [
      "Sstf",
      "Protocols",
      "Many i/o devices",
      "I/o devices"
    ],
    "answer": 3,
    "explanation": "Thiết bị xuất/nhập (I/O devices) là thuật ngữ chỉ mọi đơn vị thiết bị ngoại vi trong hệ thống máy tính như máy in, ổ đĩa, ổ CD/DVD, bộ nhớ flash, bàn phím..."
  },
  {
    "id": 8326,
    "topic": "📚 FPT Bank (Ch.1: Introduction & OS Concepts)",
    "question": "[FPT Bank - Ch.1: Introduction & OS Concepts] The overwhelming demand for ____ capability in the mid-1990s sparked the proliferation of networking capability.",
    "options": [
      "Internet",
      "Function",
      "Close",
      "28.8 msec"
    ],
    "answer": 0,
    "explanation": "Nhu cầu bùng nổ về khả năng kết nối Internet vào giữa những năm 1990 đã thúc đẩy sự phát triển mạnh mẽ các tính năng mạng trong hệ điều hành."
  },
  {
    "id": 8327,
    "topic": "📚 FPT Bank (Ch.1: Introduction & OS Concepts)",
    "question": "[FPT Bank - Ch.1: Introduction & OS Concepts] The ____ is unique to each operating system.",
    "options": [
      "Multimedia",
      "Workstations",
      "Implicit parallelism",
      "User interface"
    ],
    "answer": 3,
    "explanation": "Giao diện người dùng (User interface) là thành phần mang tính đặc trưng riêng biệt (unique) của từng hệ điều hành, quyết định cách người dùng tương tác với máy tính."
  },
  {
    "id": 8328,
    "topic": "📚 FPT Bank (Ch.3: Memory & Virtual Memory)",
    "question": "[FPT Bank - Ch.3: Memory & Virtual Memory] The ____ is used to indicate that a program is permanently held in rom (read only memory), as opposed to being held in secondary storage.",
    "options": [
      "Aging",
      "Firmware",
      "Thrashing",
      "7600"
    ],
    "answer": 1,
    "explanation": "Phần sụn (Firmware) là thuật ngữ chỉ chương trình phần mềm được lưu cố định trong bộ nhớ chỉ đọc ROM (Read-Only Memory) như BIOS/UEFI, thay vì lưu trên bộ nhớ phụ."
  },
  {
    "id": 8329,
    "topic": "📚 FPT Bank (Ch.6: Deadlocks)",
    "question": "[FPT Bank - Ch.6: Deadlocks] Which deadlock condition does \"Spool everything\" attack?",
    "options": [
      "Dijkstra",
      "Event 6 caused deadlock.",
      "Spool everything",
      "Mutual exlusion"
    ],
    "answer": 3,
    "explanation": "Kỹ thuật \"Spool everything\" (đưa dữ liệu qua hàng đợi trung gian trên đĩa) tấn công vào điều kiện loại trừ tương hỗ (Mutual exclusion), vì các tiến trình không còn phải giữ độc quyền thiết bị vật lý (như máy in) cùng lúc."
  }
];
  window.OSG202_DATA.quizQuestions.push(...fptBankQuestions);
})();
