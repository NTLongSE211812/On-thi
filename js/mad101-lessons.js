window.MAD101_LESSONS = [
  {
    id: "lesson_1",
    num: 1,
    badge: "16% Đề FE (~8 câu)",
    title: "Bài 1: Logic Mệnh Đề, Lượng Từ (∀/∃) & Quy Tắc Suy Diễn",
    subtitle: "Hiểu bản chất phép kéo theo p → q, cách dịch câu tiếng Anh sang ký hiệu Logic không bao giờ nhầm.",
    analogy:
      "Hãy tưởng tượng bạn hứa với người yêu: \"Nếu trời mưa (p), anh sẽ qua đón em (q)\" (ký hiệu: p → q).\n" +
      "• Khi nào bạn bị coi là NÓI DỐI (False)? Chỉ có DUY NHẤT 1 trường hợp: Trời ĐÃ MƯA (p = True) nhưng bạn KHÔNG đón (q = False)!\n" +
      "• Nếu trời KHÔNG mưa (p = False), dù bạn có đón hay không đón thì bạn cũng KHÔNG hề thất hứa ⇒ Mệnh đề p → q luôn ĐÚNG (True)!\n" +
      "👉 Nhớ câu thần chú: \"p → q chỉ SAI khi Đúng kéo theo Sai (T → F = F), còn lại TẤT CẢ đều ĐÚNG!\"",
    coreRules: [
      "Bảng dịch từ khóa Tiếng Anh sang Logic (Bắt buộc nhớ để ăn 2 câu dịch đề):\n  • 'neither p nor q' (không p cũng không q)  ≡  ¬p ∧ ¬q  ≡  ¬(p ∨ q)\n  • 'p, but not q' / 'Although p, not q'  ≡  p ∧ ¬q   (chữ 'but' / 'although' trong logic chính là AND ∧!)\n  • 'p if q' / 'p when q'  ≡  q → p   (vế sau chữ if/when nằm BÊN TRÁI mũi tên!)\n  • 'p only if q'  ≡  p → q   (chữ 'only if' giữ nguyên chiều mũi tên!)",
      "3 công thức biến đổi hay thi nhất:\n  • Đổi kéo theo sang OR:  p → q  ≡  ¬p ∨ q\n  • Phủ định kéo theo:  ¬(p → q)  ≡  p ∧ ¬q\n  • Mệnh đề Phản đảo (Contrapositive):  p → q  ≡  ¬q → ¬p  (LUÔN tương đương với câu gốc!)",
      "Quy tắc Lượng từ ∀ (Với mọi) và ∃ (Tồn tại):\n  • 'Every student...' (Mọi sinh viên đều...) luôn dùng ∀x đi kèm mũi tên (→):  ∀x (Student(x) → ...)\n  • 'Some student...' (Có sinh viên...) luôn dùng ∃x đi kèm phép hội (∧):  ∃x (Student(x) ∧ ...)\n  • Phủ định lượng từ: Đổi ∀ ↔ ∃ rồi phủ định mệnh đề bên trong (VD: ¬∃x(P(x) ∧ ¬Q(x)) ≡ ∀x(P(x) → Q(x))).",
      "4 Quy tắc Suy diễn (Rules of Inference) ra thi liên tục:\n  • Modus Ponens: Có (p → q) và có p  ⇒  suy ra q.\n  • Modus Tollens: Có (p → q) và có ¬q  ⇒  suy ra ¬p.\n  • Disjunctive Syllogism: Có (p ∨ q) và có ¬p  ⇒  suy ra q.\n  • Hypothetical Syllogism (Bắc cầu): Có (p → q) và (q → r)  ⇒  suy ra (p → r)."
    ],
    workedExample:
      "📌 Đề thật SP26_FE (Câu 19): \"It is cold (c) or snowing (s). If it is snowing, I will not go out (¬g). I go out today (g). Therefore, it is cold but not snowing.\" Hỏi dùng quy tắc gì?\n" +
      "• Bước 1: Viết 3 giả thiết ra ký hiệu: (1) c ∨ s ;  (2) s → ¬g ;  (3) g.\n" +
      "• Bước 2: Nhìn (2) và (3): Ta có (s → ¬g) và có g (chính là phủ định của vế phải ¬g) ⇒ Suy ra ¬s. Đây là quy tắc MODUS TOLLENS!\n" +
      "• Bước 3: Nhìn (1) và kết quả ¬s vừa tìm: Ta có (c ∨ s) và loại bỏ s (¬s) ⇒ Suy ra c. Đây là quy tắc DISJUNCTIVE SYLLOGISM!\n" +
      "👉 Kết luận: Chọn ngay \"Modus tollens and disjunctive syllogism\"!",
    traps: [
      "Bẫy 1 (Đề SU26_815892 - Câu 5): Xét trên tập SỐ NGUYÊN DƯƠNG Z⁺ = {1, 2, 3...}, mệnh đề ∀x (x² > x) là SAI! Vì tại x = 1 ta có 1² = 1 (không lớn hơn 1). Luôn thử x = 1 trước tiên!",
      "Bẫy 2 (Đề SU26_815892 - Câu 8): Giả thiết cho 's → h' và 's → m', kết luận 'm → h'. Hai mũi tên cùng xuất phát từ s KHÔNG nối bắc cầu được ⇒ Lập luận KHÔNG HỢP LỆ (Invalid)!",
      "Bẫy 3 (Đề SP26 - Câu 46): Hỏi ¬(p → q) → p có phải Tautology không? Đổi ¬(p → q) thành (p ∧ ¬q), ta được (p ∧ ¬q) → p — luôn ĐÚNG (vì có cả p và ¬q thì chắc chắn có p)!"
    ],
    miniQuiz: [
      {
        q: "Câu tiếng Anh: \"Tom neither washed the car (p) nor went to the market (q)\" viết sang logic là gì?",
        opts: ["¬(p ∧ q)", "¬(p ∨ q)", "¬p ∨ ¬q", "p → ¬q"],
        ans: 1,
        exp: "'Neither p nor q' nghĩa là không p VÀ không q (¬p ∧ ¬q). Theo luật De Morgan, ¬p ∧ ¬q ≡ ¬(p ∨ q)!"
      },
      {
        q: "Trên tập số nguyên dương Z⁺ = {1, 2, 3, ...}, mệnh đề nào sau đây là SAI (False)?",
        opts: ["∀x (|x| > 0)", "∃x (x² = x)", "∀x (x² > x)", "∀x (x + 1 > x)"],
        ans: 2,
        exp: "Tại x = 1 ∈ Z⁺ thì 1² = 1 không lớn hơn 1, nên ∀x (x² > x) là SAI!"
      }
    ]
  },
  {
    id: "lesson_2",
    num: 2,
    badge: "12% Đề FE (~6 câu)",
    title: "Bài 2: Tập Hợp, Ký Hiệu ∈ vs ⊆, Chuỗi Bit & Hàm Số",
    subtitle: "Phân biệt rạch ròi ∈ (phần tử) với ⊆ (tập con), cách nhìn 1 giây biết hàm Đơn ánh / Toàn ánh / Song ánh.",
    analogy:
      "Hãy tưởng tượng hàm số f: A → B giống như việc xếp m học sinh (tập A) ngồi vào n cái ghế (tập B):\n" +
      "• Đơn ánh (One-to-one / Injective): Mỗi học sinh ngồi 1 ghế RIÊNG, KHÔNG ai ngồi chung ghế với ai (tức số học sinh m ≤ số ghế n).\n" +
      "• Toàn ánh (Onto / Surjective): MỌI cái ghế bên B đều có ít nhất 1 người ngồi, KHÔNG có ghế nào bị bỏ trống (tức số học sinh m ≥ số ghế n).\n" +
      "• Song ánh (Bijection): Vừa mỗi người 1 ghế riêng, vừa không thừa ghế nào (số học sinh = số ghế: m = n)!",
    coreRules: [
      "Phân biệt ∈ (Thuộc - Phần tử) và ⊆ (Tập con) — Cực hay bẫy ở đề FA25:\n  • x ∈ A: Nghĩa là x nằm NGUYÊN HÌNH DẠNG ĐÓ ở bên trong cặp ngoặc nhọn { ... } của A.\n  • B ⊆ A: Nghĩa là BỘC LỘT lớp ngoặc ngoài của B ra, mọi phần tử bên trong B đều nằm trong A.\n  • Tập rỗng ∅ luôn là TẬP CON của mọi tập hợp (∅ ⊆ A luôn ĐÚNG), nhưng ∅ ∈ A chỉ đúng nếu thấy rõ ký hiệu ∅ bên trong A!",
      "Biểu diễn Tập con bằng Chuỗi Bit (Ex Book tr.13):\n  • Cho tập vũ trụ U = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}. Với tập con A, vị trí thứ i bật số 1 nếu i ∈ A, ngược lại là số 0.\n  • VD: A = {2, 5, 7, 9} ⇒ vị trí 2, 5, 7, 9 là bit 1 ⇒ 0100101010.",
      "Đếm số phần tử & Đếm số hàm (với |A| = m, |B| = n):\n  • Tập lũy thừa (Power Set): |P(A)| = 2^m  |  Tích Descartes: |A × B| = m × n.\n  • Tổng số hàm từ A sang B:  n^m   (Chú ý: Đích mũ Nguồn = |Đích|^|Nguồn|!).\n  • Số hàm Đơn ánh: P(n, m) = n! / (n - m)!   |   Số hàm Song ánh (m = n): n!.",
      "Hàm hợp (Composition) & Hàm ngược (Inverse):\n  • (f ◦ g)(x) = f(g(x)): Tính hàm đứng sau g(x) trước, rồi thay nguyên cục đó vào biến x của f!\n  • Hàm ngược f⁻¹(y): Chỉ tồn tại khi f là Song ánh. Đặt y = f(x) rồi giải rút x theo y."
    ],
    workedExample:
      "📌 Đề thật FA25_RE (Câu 10): Trong các khẳng định sau, khẳng định nào SAI?\n" +
      "  (1) x ∈ {x}   (2) {x} ⊆ {x}   (3) {x} ∈ {x}   (4) {x} ∈ {{x}}\n" +
      "• Bước 1: Mở cặp ngoặc ngoài cùng của tập {x} → bên trong chỉ có ĐÚNG 1 phần tử là chữ x (không có ngoặc).\n" +
      "• Bước 2: Do đó x ∈ {x} ĐÚNG; mọi tập đều là tập con của chính nó nên {x} ⊆ {x} ĐÚNG.\n" +
      "• Bước 3: Nhưng {x} ∈ {x} là SAI (bên trong {x} chỉ có x chứ không có hộp {x}!). Còn {{x}} mở ngoặc ngoài ra có hộp {x} nên {x} ∈ {{x}} ĐÚNG.\n" +
      "👉 Kết luận: Khẳng định SAI là {x} ∈ {x}!",
    traps: [
      "Bẫy 1 (Đề SP26 - Câu 35): Cho X = {∅, {∅}, {a,c}} (|X|=3) và Y = {y, {z,z}, y}. Vì trong tập hợp phần tử trùng chỉ tính 1 lần nên Y = {y, {z}} chỉ có |Y| = 2! Hỏi số hàm từ Y ĐẾN X là |X|^|Y| = 3² = 9 (rất nhiều bạn bấm nhầm 2³ = 8!).",
      "Bẫy 2 (Đề SU26_815892 - Câu 13): Hàm f(x) = x² + 1 trên R thì không đơn ánh (vì (-1)² = 1²), NHƯNG trên tập tự nhiên N = {0, 1, 2...} (không có số âm) thì f(x) = x² + 1 LẠI LÀ ĐƠN ÁNH!",
      "Bẫy 3 (Đề SU26_B5 - Câu 36): Hàm f: N → N cho bởi f(x) = ⌊x/2⌋ có f(0) = f(1) = 0 (chung ghế ⇒ KHÔNG đơn ánh), nhưng mọi số tự nhiên k đều có f(2k) = k (ghế nào cũng có người ngồi ⇒ TOÀN ÁNH!)."
    ],
    miniQuiz: [
      {
        q: "Cho tập A = {1, {1}, 1, 3, {1, 3}}. Lực lượng (số phần tử) |A| bằng bao nhiêu?",
        opts: ["3", "4", "5", "6"],
        ans: 1,
        exp: "Loại bỏ số 1 bị lặp lại, tập A gồm 4 phần tử phân biệt: 1, {1}, 3, và {1, 3} ⇒ |A| = 4."
      },
      {
        q: "Cho |X| = 3 và |Y| = 2. Có bao nhiêu hàm số f: Y → X (đi từ Y sang X)?",
        opts: ["6", "8", "9", "12"],
        ans: 2,
        exp: "Công thức: |Đích|^|Nguồn| = |X|^|Y| = 3² = 9 hàm số!"
      }
    ]
  },
  {
    id: "lesson_3",
    num: 3,
    badge: "13% Đề FE (~6–7 câu)",
    title: "Bài 3: Thuật Toán (Sort, Search, Merge) & Độ Phức Tạp Big-O",
    subtitle: "Cách chạy tay Insertion Sort, Binary Search, đếm phép so sánh khi Merge 2 danh sách và tìm Big-O trong 5 giây.",
    analogy:
      "• Insertion Sort (Sắp xếp chèn) giống hệt cách bạn xếp bài Tiến Lên trên tay: Tay trái luôn giữ sẵn một xấp bài ĐÃ XẾP TĂNG DẦN, mỗi lượt bốc 1 lá mới bên tay phải rồi chèn vào đúng chỗ của nó!\n" +
      "• Big-O giống như đo \"tốc độ lớn lên\" của một công ty khi quy mô n tăng lên hàng triệu: mấy số lẻ cộng thêm hay hằng số nhân phía trước không còn quan trọng — ta CHỈ giữ lại \"ông trùm\" tăng nhanh nhất!",
    coreRules: [
      "Mẹo 3 giây cho Insertion Sort (Đề SU26 & SP26 đều hỏi!):\n  • Kết thúc vòng lặp thứ i (với i chạy từ 2 đến n): ĐÚNG i phần tử ĐẦU TIÊN của mảng đã được xếp tăng dần, còn tất cả các phần tử từ vị trí i+1 trở đi GIỮ NGUYÊN Y HỆT ban đầu!",
      "Mẹo 3 giây cho Binary Search (Tìm kiếm nhị phân trên mảng đã tăng dần):\n  • Mỗi bước tính chỉ số giữa m = ⌊(i + j) / 2⌋.\n  • Nếu x > a_m thì bỏ nửa trái, đặt i = m + 1; ngược lại (x ≤ a_m) bỏ nửa phải, đặt j = m.",
      "Công thức 3 giây đếm số phép so sánh khi Trộn (Merge) 2 danh sách đã sắp xếp L₁ và L₂ (Đề nào cũng ra!):\n  • Số phép so sánh = |L₁| + |L₂| - k\n  • Trong đó k là SỐ PHẦN TỬ Ở CUỐI danh sách còn lại mà lớn hơn phần tử lớn nhất của danh sách kết thúc trước!",
      "Bảng xếp hạng Big-O từ chậm đến nhanh & Mẹo tính phân thức:\n  • O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(n³) < O(2ⁿ) < O(n!).\n  • Với phân thức P(x) / Q(x): Chỉ lấy số hạng bậc cao nhất của tử chia cho bậc cao nhất của mẫu!"
    ],
    workedExample:
      "📌 Đề thật SU26_815892 (Câu 28 & 29): Cần bao nhiêu phép so sánh để trộn (merge) 2 danh sách [2, 3, 5, 6] và [1, 4]?\n" +
      "• Bước 1: Đếm tổng số phần tử: |L₁| = 4, |L₂| = 2 ⇒ Tổng = 4 + 2 = 6.\n" +
      "• Bước 2: So sánh số lớn nhất của 2 danh sách: max(L₁) = 6 và max(L₂) = 4 ⇒ Danh sách L₂ (kết thúc ở số 4) sẽ cạn trước!\n" +
      "• Bước 3: Đếm xem bên L₁ có bao nhiêu số lớn hơn 4? Có đúng 2 số là {5, 6} (k = 2) sẽ được chép thẳng vào cuối mà không cần so sánh nữa.\n" +
      "👉 Áp dụng công thức: 6 - 2 = 4 phép so sánh! (Chính xác 100% trong 3 giây!)",
    traps: [
      "Bẫy 1 (Đề SU26_815892 - Câu 18): Vòng lặp 3 lớp i=1..5, j=1..6, k=1..7 có câu lệnh 'p := i * j * k'. Tổng lượt lặp là 5×6×7 = 210, NHƯNG mỗi lệnh có 2 DẤU NHÂN (*) ⇒ Phải nhân đôi thành 420 phép nhân!",
      "Bẫy 2 (Đề SU26_B5 - Câu 29): Tìm số nguyên n nhỏ nhất để (x⁵ log x - x⁴ + log¹⁰ x) / (x log² x - 1) là O(xⁿ). Lấy tử/mẫu trội nhất: (x⁵ log x)/(x log² x) = x⁴ / log x ≤ x⁴ ⇒ Đáp án là n = 4 (không phải 3 vì x⁴/log x lớn hơn x³!).",
      "Bẫy 3 (Đề SP26 & FA25): Thuật toán đệ quy có 'if n = 1 then f(1) := 0 else f(n) := f(n-1) * n'. Vì gốc f(1) = 0 nên nhân bao nhiêu lần cũng ra 0!"
    ],
    miniQuiz: [
      {
        q: "Chạy Insertion Sort trên mảng [7, 2, 4, 3, 1, 6, 5]. Sau vòng lặp i = 3, mảng trở thành gì?",
        opts: ["2, 4, 7, 3, 1, 6, 5", "1, 2, 3, 4, 7, 6, 5", "2, 3, 4, 7, 1, 6, 5", "2, 7, 4, 3, 1, 6, 5"],
        ans: 0,
        exp: "Sau bước i = 3, đúng 3 phần tử đầu {7, 2, 4} được xếp tăng dần thành {2, 4, 7}, phần đuôi {3, 1, 6, 5} giữ nguyên ⇒ 2, 4, 7, 3, 1, 6, 5!"
      },
      {
        q: "Cần bao nhiêu phép so sánh để trộn (merge) 2 danh sách đã sắp xếp [1, 3, 5, 7, 9] và [2, 6]?",
        opts: ["4", "5", "6", "7"],
        ans: 1,
        exp: "Tổng 5 + 2 = 7 phần tử. Danh sách [2, 6] dừng ở 6, để lại k = 2 số lớn hơn là {7, 9} ở danh sách kia ⇒ 7 - 2 = 5 phép so sánh!"
      }
    ]
  },
  {
    id: "lesson_4",
    num: 4,
    badge: "14% Đề FE (~6–7 câu)",
    title: "Bài 4: Số Học Modulo (Số Âm div/mod), GCD/LCM & Số Giả Ngẫu Nhiên",
    subtitle: "Nắm chắc quy tắc đồng hồ Modulo, cách không bao giờ sai phép chia số âm và mẹo tìm GCD/LCM bằng số mũ.",
    analogy:
      "Hãy tưởng tượng Số học Modulo giống như MẶT ĐỒNG HỒ:\n" +
      "• Phép chia lấy dư (a mod m) là kết quả chỉ kim đồng hồ có m vạch (từ 0 đến m - 1). Kim đồng hồ KHÔNG BAO GIỜ chỉ số âm!\n" +
      "• Nếu bạn quay ngược kim đồng hồ (số âm, ví dụ -131 mod 37), bạn cứ cộng thêm bội của 37 cho đến khi số đó lọt vào khoảng từ 0 đến 36 là xong!",
    coreRules: [
      "Quy tắc Vàng cho phép chia Số Âm (a = d·q + r với BẮT BUỘC 0 ≤ r < d):\n  • Thương q = a div d = ⌊a / d⌋ (luôn làm tròn XUỐNG sâu hơn về phía âm! VD: -137 / 31 = -4.41 ⇒ q = -5).\n  • Số dư r = a mod d = a - d·q (luôn dương!).\n  • 2 MẸO TÍNH NHANH 3 GIÂY (khi n không chia hết cho d):\n    (1) (n div d) + (-n div d) = -1   (Đề SU26_B5 Q18!)\n    (2) (n mod d) + (-n mod d) = d   (Đề FA25_RE Q20!)",
      "GCD và LCM từ phân tích Thừa số nguyên tố:\n  • gcd(m, n): Lấy số mũ NHỎ NHẤT (min) của các thừa số nguyên tố chung.\n  • lcm(m, n): Lấy số mũ LỚN NHẤT (max) của tất cả các thừa số nguyên tố.\n  • Công thức liên hệ:  m × n = gcd(m, n) × lcm(m, n).",
      "Dãy số giả ngẫu nhiên (Linear Congruential Generator — Ra thi mọi kỳ!):\n  • Công thức: x_(n+1) = (a · x_n + c) mod m.\n  • Nếu đề cho x₃ bắt tìm ngược x₂: Lấy từng đáp án x₂ thay vào (a·x₂ + c) mod m xem cái nào khớp x₃!",
      "Đổi giữa 2 cơ số lạ bất kỳ (VD: từ cơ số 3 sang cơ số 7):\n  • Bước 1: Đổi từ cơ số cũ sang hệ 10 (nhân lũy thừa). VD: (122)₃ = 1·3² + 2·3¹ + 2 = 17₁₀.\n  • Bước 2: Chia liên tiếp số hệ 10 đó cho cơ số mới rồi đọc số dư NGƯỢC từ dưới lên: 17 = 2×7 + 3 ⇒ (23)₇."
    ],
    workedExample:
      "📌 Đề thật FA25_RE (Câu 20): Cho a = 131 mod 37 và b = -131 mod 37. Tính a - b?\n" +
      "• Bước 1: Tính a = 131 mod 37. Ta có 37 × 3 = 111 ⇒ 131 = 37 × 3 + 20 ⇒ a = 20.\n" +
      "• Bước 2: Dùng Mẹo Vàng (2): Vì 131 không chia hết cho 37 nên b = (-131 mod 37) = 37 - a = 37 - 20 = 17!\n" +
      "  (Kiểm tra lại: -131 = 37 × (-4) + 17 = -148 + 17, số dư đúng bằng 17!).\n" +
      "• Bước 3: Tính a - b = 20 - 17 = 3.\n" +
      "👉 Xong trong 10 giây, không bao giờ nhầm dấu!",
    traps: [
      "Bẫy 1 (Đề SP26 - Câu 8): Hỏi LCM của 11·13³·17² và 2⁷·5²·9²·11². Nhớ kiểm tra xem tất cả các cơ số đã là SỐ NGUYÊN TỐ chưa (9 = 3² không phải số nguyên tố!).",
      "Bẫy 2 (Đề SU26_815892 - Câu 23): Tính lũy thừa lớn 11⁵ mod 101. Đừng nhân 11⁵ lên hàng trăm nghìn! Hãy hạ bậc từng bước: 11² = 121 ≡ 20 ⇒ 11⁴ ≡ 20² = 400 ≡ -4 (mod 101) ⇒ 11⁵ ≡ (-4)×11 = -44 ≡ 101 - 44 = 57!",
      "Bẫy 3 (Đề SP26 - Câu 47): Hỏi số nào đồng dư với 5 mod 17? Mẹo: Lấy từng đáp án TRỪ ĐI 5, số nào chia hết cho 17 thì chọn luôn (VD: -29 - 5 = -34 = 17 × (-2) chia hết cho 17!)."
    ],
    miniQuiz: [
      {
        q: "Cho a = 137 div 31 và b = -137 div 31. Giá trị của a + b là bao nhiêu?",
        opts: ["0", "-1", "1", "-2"],
        ans: 1,
        exp: "a = ⌊137/31⌋ = 4; b = ⌊-137/31⌋ = -5 ⇒ a + b = -1. (Mẹo: Khi n không chia hết cho d thì (n div d) + (-n div d) luôn bằng -1!)."
      },
      {
        q: "Cho dãy giả ngẫu nhiên x_(n+1) = 3·x_n mod 11. Nếu x₃ = 7 thì x₂ bằng bao nhiêu?",
        opts: ["2", "5", "6", "8"],
        ans: 2,
        exp: "Thay x₂ = 6 vào công thức: x₃ = (3 × 6) mod 11 = 18 mod 11 = 7 (khớp!)."
      }
    ]
  },
  {
    id: "lesson_5",
    num: 5,
    badge: "10% Đề FE (~5 câu)",
    title: "Bài 5: Chứng Minh Quy Nạp, Đệ Quy & Định Lý Master",
    subtitle: "Khung 4 bước Quy nạp không bao giờ xếp sai thứ tự, cách giải nhanh Tập đệ quy S và 2 công thức Master.",
    analogy:
      "Chứng minh Quy nạp (Mathematical Induction) giống hệt trò chơi XẾP QUÂN DOMINO:\n" +
      "1. Bước cơ sở (Basis step): Đẩy đổ quân domino đầu tiên (n = 1).\n" +
      "2. Giả thiết quy nạp (Inductive hypothesis): Giả sử quân thứ k bị đổ.\n" +
      "3. Bước quy nạp (Inductive step): Chứng minh hễ quân thứ k đổ thì nó sẽ kéo đổ quân thứ (k + 1).\n" +
      "4. Kết luận (Conclusion): Vậy TOÀN BỘ hàng domino đều đổ!",
    coreRules: [
      "Khung sắp xếp thứ tự bài Quy nạp (Đề nào cũng có 1 câu cho sẵn 4-5 câu lộn xộn bắt xếp thứ tự!):\n  • Luôn xếp đúng trình tự: [1. Kiểm tra n = 1 (hoặc n = 12..15)] → [2. Suppose/Assume đúng với k] → [3. Need to show / Chứng minh đúng với k + 1] → [4. Therefore / So... Kết luận].",
      "Tìm công thức đệ quy từ công thức tổng quát a_n (VD: a_n = n² + n):\n  • Đừng biến đổi rườm rà! Chỉ cần tính a₁, a₂, a₃ rồi thay vào 4 đáp án xem công thức nào khớp là khoanh ngay!\n  • Hoặc tính hiệu a_n - a_(n-1) để tìm phần cộng thêm.",
      "Giải nhanh bài Tập hợp đệ quy S (VD: (0,0) ∈ S; nếu (a,b) ∈ S thì (a+2, b+3) ∈ S và (a+3, b+2) ∈ S):\n  • Tìm BẤT BIẾN (tổng a + b): Mỗi bước cộng thêm (2 + 3 = 5) nên (a + b) BẮT BUỘC chia hết cho 5!\n  • Đồng thời hệ 2x + 3y = a và 3x + 2y = b phải có nghiệm nguyên KHÔNG ÂM (x, y ≥ 0).",
      "Định lý Master cho T(n) = a·T(n/b) + c·n^d:\n  • So sánh a với b^d:\n    - Nếu a < b^d  ⇒  O(n^d)\n    - Nếu a = b^d  ⇒  O(n^d · log n)\n    - Nếu a > b^d  ⇒  O(n^(log_b a))\n  • Dạng tính giá trị chính xác f(n) = a·f(n/b) + c (File thầy Phú Mục 6.5):\n    f(n) = C₁ · n^(log_b a) + C₂   với   C₁ = f(1) + c/(a - 1)  và  C₂ = -c/(a - 1)."
    ],
    workedExample:
      "📌 Đề thật SP26_B5 (Câu 45): Cho f(n + 1) = 2·f(n) - f(n - 1) với f(0) = 1, f(1) = 4. Tính f(2010)?\n" +
      "• Bước 1: Chuyển vế ta thấy: f(n + 1) - f(n) = f(n) - f(n - 1)!\n" +
      "• Bước 2: Hiệu 2 số liên tiếp KHÔNG ĐỔI ⇒ Đây là CẤP SỐ CỘNG với công sai d = f(1) - f(0) = 4 - 1 = 3!\n" +
      "• Bước 3: Công thức cấp số cộng: f(n) = f(0) + n·d = 1 + 3n.\n" +
      "👉 Thay n = 2010: f(2010) = 1 + 3 × 2010 = 6031! (Không cần giải phương trình đặc trưng nghiệm kép r = 1 mất thời gian!).",
    traps: [
      "Bẫy 1 (Đề SU26_B5 - Câu 48): Với dãy a_n = n² + n (n ≥ 1), công thức đệ quy BẮT BUỘC phải có điều kiện cơ sở a₁ = 2 (thiếu a₁ = 2 là định nghĩa đệ quy bị thiếu, phải loại!).",
      "Bẫy 2 (Đề SP26 - Câu 12): Tập S sinh bởi (a+2, b+3) và (a+3, b+2): cặp (10, 5) có 10 + 5 = 15 chia hết cho 5 NHƯNG giải ra x = -1 < 0 ⇒ KHÔNG thuộc S! Luôn nhớ tỷ lệ 2/3 ≤ a/b ≤ 3/2!"
    ],
    miniQuiz: [
      {
        q: "Cho f(n) = f(n/5) + 2n³. Theo Định lý Master, ước lượng Big-O tốt nhất cho f(n) là gì?",
        opts: ["O(n⁵)", "O(n³)", "O(n³ log n)", "O(log n)"],
        ans: 1,
        exp: "Ta có a = 1, b = 5, d = 3. So sánh a = 1 < b^d = 5³ = 125 ⇒ Rơi vào trường hợp a < b^d ⇒ O(n^d) = O(n³)!"
      },
      {
        q: "Cho (0,0) ∈ S; nếu (a,b) ∈ S thì (a+2, b+3) ∈ S và (a+3, b+2) ∈ S. Cặp nào sau đây THUỘC S?",
        opts: ["(6, 7)", "(5, 10)", "(7, 8)", "(8, 9)"],
        ans: 2,
        exp: "Tổng a+b phải chia hết cho 5 (loại (6,7) và (8,9)). Với (5,10) tỷ lệ 5/10 < 2/3 nên vô nghiệm x,y ≥ 0. Với (7,8): chọn x=2, y=1 ⇒ (2·2+3·1, 3·2+2·1) = (7,8) ∈ S!"
      }
    ]
  },
  {
    id: "lesson_6",
    num: 6,
    badge: "10% Đề FE (~5 câu)",
    title: "Bài 6: Phép Đếm, Tổ Hợp, Nguyên Lý Bù Trừ & Chuồng Bồ Câu",
    subtitle: "Phân biệt khi nào dùng Quy tắc Nhân, Bù trừ, Đối xứng, Chuồng bồ câu và Chia kẹo Euler.",
    analogy:
      "• Nguyên lý Chuồng bồ câu (Pigeonhole): Giả sử có 13 người trong phòng và chỉ có 12 tháng sinh ⇒ CHẮC CHẮN có ít nhất 2 người sinh cùng tháng!\n" +
      "• Nguyên lý Bù trừ (Inclusion-Exclusion): Đếm số bạn thích Toán HOẶC thích Lý = (Số bạn thích Toán) + (Số bạn thích Lý) - (Số bạn thích CẢ HAI để khỏi đếm trùng 2 lần!).",
    coreRules: [
      "Nguyên lý Bù trừ đếm số chia hết (Ra thi ở SU26_B5 và FA25_FE!):\n  • Số nguyên dương ≤ N chia hết cho a HOẶC b = ⌊N/a⌋ + ⌊N/b⌋ - ⌊N/lcm(a,b)⌋.\n  • Chú ý chữ 'not exceeding N' (≤ N) vs 'less than N' (< N, tức là ≤ N - 1)!",
      "Đếm chuỗi độ dài L có ĐÚNG k chữ số giống nhau (Ra thi ở SU26 & FA25_RE!):\n  • Bước 1: Chọn k vị trí trong L vị trí để đặt chữ số đặc biệt: C(L, k) cách.\n  • Bước 2: Mỗi vị trí còn lại trong (L - k) vị trí có 9 cách chọn (trừ chữ số đặc biệt đó ra): 9^(L - k) cách.\n  • Kết quả: C(L, k) × 9^(L - k).",
      "Mẹo Đối xứng & Giải đấu thể thao (Ra thi ở SU26, SU26_B5, SP26!):\n  • Xếp n người thành hàng sao cho A đứng bên phải B (không cần kề nhau): n! / 2.\n  • Giải đấu có n đội đá vòng tròn Lượt đi & Lượt về (each other twice): P(n, 2) = n × (n - 1) trận (VD: 20 đội ⇒ 20 × 19 = 380 trận!).",
      "Chuồng bồ câu & Chia kẹo Euler:\n  • Có N vật vào k chuồng ⇒ có chuồng chứa ít nhất ⌈N / k⌉ vật. Để chắc chắn có 1 chuồng chứa r vật ⇒ cần tối thiểu N = k·(r - 1) + 1 vật.\n  • Chia r viên kẹo giống nhau cho n người (nghiệm nguyên ≥ 0 của x₁ + ... + xₙ = r): C(n + r - 1, r)."
    ],
    workedExample:
      "📌 Đề thật FA25_RE (Câu 30): Có bao nhiêu chuỗi gồm 4 chữ số thập phân chứa ĐÚNG hai chữ số 0?\n" +
      "• Bước 1: Chọn 2 vị trí trong 4 vị trí để đặt số '0': C(4, 2) = (4 × 3) / 2 = 6 cách.\n" +
      "• Bước 2: 2 vị trí còn lại mỗi vị trí có 9 cách chọn (từ 1 đến 9, khác 0): 9 × 9 = 81 cách.\n" +
      "• Bước 3: Theo quy tắc nhân: 6 × 81 = 486 chuỗi!\n" +
      "👉 Nhớ: 'string of decimal digits' được phép bắt đầu bằng số 0!",
    traps: [
      "Bẫy 1 (Đề FA25_FE - Câu 30): Đề hỏi 'positive integers LESS THAN 100 divisible by 3 or 4' → 'less than 100' là từ 1 đến 99 (KHÔNG tính 100)! Tính: ⌊99/3⌋ + ⌊99/4⌋ - ⌊99/12⌋ = 33 + 24 - 8 = 49 (nếu lấy 100 chia 4 ra 25 là sai ngay!).",
      "Bẫy 2 (Đề SU26_B5 - Câu 41): Đếm tổng số chữ số của dãy 1; 2; ...; 25: Từ 1..9 có 9 số × 1 = 9 chữ số; từ 10..25 có (25 - 10 + 1) = 16 số × 2 = 32 chữ số ⇒ 9 + 32 = 41 chữ số (hay quên +1 khi đếm 10..25!)."
    ],
    miniQuiz: [
      {
        q: "Có bao nhiêu số nguyên dương không vượt quá 200 chia hết cho 2 hoặc 3?",
        opts: ["133", "134", "166", "100"],
        ans: 0,
        exp: "⌊200/2⌋ + ⌊200/3⌋ - ⌊200/6⌋ = 100 + 66 - 33 = 133 số."
      },
      {
        q: "Xếp 5 người thành 1 hàng ngang (trong đó có cô dâu và chú rể). Có bao nhiêu cách xếp để cô dâu đứng đâu đó bên phải chú rể?",
        opts: ["120", "60", "48", "24"],
        ans: 1,
        exp: "Theo tính đối xứng, đúng 1 nửa số hoán vị có cô dâu đứng bên phải chú rể ⇒ 5! / 2 = 120 / 2 = 60 cách."
      }
    ]
  },
  {
    id: "lesson_7",
    num: 7,
    badge: "18% Đề FE (~9 câu — Siêu Trọng Tâm!)",
    title: "Bài 7: Lý Thuyết Đồ Thị — Bắt Tay, Lưỡng Phân, Euler, Hamilton & Dijkstra",
    subtitle: "Phần chiếm tỷ trọng lớn nhất đề thi! Cách nhìn 5 giây biết ngay đồ thị có Lưỡng phân, có Euler hay Hamilton không.",
    analogy:
      "Phân biệt EULER và HAMILTON bằng 1 câu nói duy nhất:\n" +
      "• EULER (Đi qua mỗi CẠNH đúng 1 lần): Giống trò chơi vẽ hình BẰNG 1 NÉT BÚT không nhấc tay và không tô đè lại nét cũ (chỉ cần đếm bậc CHẴN / LẺ của đỉnh!).\n" +
      "• HAMILTON (Đi qua mỗi ĐỈNH đúng 1 lần): Giống anh shipper giao hàng tới tất cả các ngôi nhà (đỉnh), mỗi nhà ghé đúng 1 lần rồi về (độ dài chu trình Hamilton luôn = TỔNG SỐ ĐỈNH!).",
    coreRules: [
      "Bảng 5 Đồ thị Đặc biệt & Đồ thị Bù (Phải thuộc như bảng cửu chương):\n  • Kₙ: n đỉnh, n(n-1)/2 cạnh, mỗi đỉnh bậc (n-1).\n  • Cₙ: n đỉnh, n cạnh, mỗi đỉnh bậc 2 (Lưỡng phân ⇔ n CHẴN).\n  • Wₙ: n+1 đỉnh, 2n cạnh (Luôn có tam giác ⇒ KHÔNG bao giờ lưỡng phân).\n  • Qₙ (n-cube): 2ⁿ đỉnh, n·2^(n-1) cạnh, mỗi đỉnh bậc n (Luôn lưỡng phân; có Euler circuit ⇔ n chẵn).\n  • K_(m,n): m+n đỉnh, m·n cạnh (Số số 0 trong ma trận kề là m² + n²; có Chu trình Hamilton ⇔ m = n ≥ 2!).",
      "Điều kiện Euler (Cả Vô hướng lẫn Có hướng — Đề FA25_FE hỏi cả có hướng!):\n  • Đồ thị Vô hướng liên thông:\n    - Có Chu trình Euler (Circuit) ⇔ MỌI đỉnh đều có bậc CHẴN (0 đỉnh bậc lẻ).\n    - Có Đường đi Euler (Path) ⇔ Có 0 hoặc ĐÚNG 2 đỉnh bậc LẺ.\n  • Đồ thị Có hướng liên thông yếu:\n    - Có Chu trình Euler ⇔ MỌI đỉnh có deg⁻(v) = deg⁺(v).\n    - Có Đường đi Euler ⇔ Có 1 đỉnh deg⁺ - deg⁻ = 1 (đỉnh đầu), 1 đỉnh deg⁻ - deg⁺ = 1 (đỉnh cuối), mọi đỉnh còn lại deg⁻ = deg⁺.",
      "Đồ thị Lưỡng phân (Bipartite) & Cạnh cắt (Cut-edge):\n  • Lưỡng phân ⇔ KHÔNG chứa chu trình độ dài LẺ (nhìn hình thấy 1 hình TAM GIÁC C₃ là loại ngay!).\n  • Cạnh cắt (Cut-edge / Bridge): Cạnh nào nằm trên một vòng khép kín (chu trình) thì KHÔNG BAO GIỜ là cut-edge!",
      "Đếm đường đi (walks) độ dài 3 & Dijkstra:\n  • Số đường đi độ dài 3 giữa 2 đỉnh khác nhau trong K₄ = 7; giữa 2 đỉnh khác phía trong K₂,₂ = 2 × 2 = 4.\n  • Trắc nghiệm Dijkstra cho sẵn 4 đường đi: Chỉ cần cộng trọng số 4 đáp án xem đường nào nhỏ nhất là chọn ngay!"
    ],
    workedExample:
      "📌 Đề thật FA25_RE (Câu 40): Với m > n > 2, đồ thị nào sau đây KHÔNG CÓ chu trình Hamilton: K_(m,n), Cₙ, Qₙ, Kₙ, Wₙ?\n" +
      "• Phân tích: Trong đồ thị hai phía K_(m,n), mỗi bước đi đều phải nhảy qua lại giữa tập V₁ (m đỉnh) và tập V₂ (n đỉnh): V₁ → V₂ → V₁ → V₂ → ... → V₁.\n" +
      "• Để đi hết tất cả các đỉnh mỗi đỉnh đúng 1 lần rồi quay lại đỉnh xuất phát, số đỉnh ở 2 phía BẮT BUỘC PHẢI BẰNG NHAU (m = n)!\n" +
      "• Vì đề cho m > n (số đỉnh 2 bên lệch nhau) nên K_(m,n) KHÔNG THỂ CÓ chu trình Hamilton!\n" +
      "👉 Chọn ngay K_(m,n)!",
    traps: [
      "Bẫy 1 (Đề FA25_FE - Câu 40): Cho dãy (in-degree, out-degree) của 4 đỉnh là [(3,2), (2,2), (2,2), (1,2)]. Thấy 1 đỉnh (3,2) có vào nhiều hơn ra 1, 1 đỉnh (1,2) có ra nhiều hơn vào 1, 2 đỉnh kia cân bằng ⇒ CÓ ĐƯỜNG ĐI EULER (nhưng không có chu trình Euler)!",
      "Bẫy 2 (Đề SP26_B5 - Câu 30): Cho K_(m,n) có 15 cạnh, hỏi số đỉnh có thể là bao nhiêu? Vì số cạnh m·n = 15 chỉ tách được thành 1×15 (tổng 16 đỉnh) hoặc 3×5 (tổng 8 đỉnh)!",
      "Bẫy 3 (Đề SP26 - Câu 11): Kiểm tra dãy bậc của đồ thị đơn 5 đỉnh: (1) Tổng các bậc phải CHẴN (Định lý bắt tay); (2) Không đỉnh nào có bậc ≥ 5 (tối đa là n - 1 = 4)!"
    ],
    miniQuiz: [
      {
        q: "Với m > n > 2, đồ thị nào sau đây KHÔNG CÓ chu trình Hamilton?",
        opts: ["Kₙ", "Wₙ", "K_(m,n)", "Qₙ"],
        ans: 2,
        exp: "Đồ thị lưỡng phân đầy đủ K_(m,n) chỉ có chu trình Hamilton khi m = n ≥ 2. Vì m > n nên K_(m,n) không có chu trình Hamilton!"
      },
      {
        q: "Một đồ thị đơn G có 10 đỉnh và 20 cạnh. Đồ thị bù G' của nó có bao nhiêu cạnh?",
        opts: ["20", "25", "45", "70"],
        ans: 1,
        exp: "Đồ thị đầy đủ K₁₀ có 10×9/2 = 45 cạnh ⇒ Đồ thị bù G' có 45 - 20 = 25 cạnh!"
      }
    ]
  },
  {
    id: "lesson_8",
    num: 8,
    badge: "16% Đề FE (~8 câu — Dễ Ăn Điểm!)",
    title: "Bài 8: Cây (Trees), Cây m-Phân, Duyệt Cây, Huffman & MST (Prim/Kruskal)",
    subtitle: "Bộ 3 công thức vàng cho Cây m-phân đầy đủ, cách tính Postfix/Prefix, mã Huffman và Prim/Kruskal không bao giờ sai.",
    analogy:
      "• Cây (Tree) giống như CÂY GIA PHẢ: Không bao giờ có vòng tròn khép kín (chu trình), và nếu gia phả có n người thì luôn có đúng (n - 1) sợi dây nối cha-con!\n" +
      "• Mã Huffman giống như quy tắc viết tắt tin nhắn: Ký tự nào XUẤT HIỆN NHIỀU NHẤT thì cho mã ngắn nhất (1 bit), ký tự nào ít xuất hiện thì cho mã dài hơn để tổng dung lượng tin nhắn nhỏ nhất!",
    coreRules: [
      "Công thức Vàng cho Cây & Cây m-phân đầy đủ (Full m-ary tree):\n  • Cây có n đỉnh luôn có đúng e = n - 1 cạnh. (Muốn biến đồ thị liên thông có v đỉnh, e cạnh thành cây khung ⇒ phải XÓA đúng e - (v - 1) cạnh!).\n  • Cây m-phân đầy đủ có i đỉnh trong:\n    - Tổng số đỉnh:  n = m·i + 1\n    - Số lá (leaves):  l = (m - 1)·i + 1\n    - Chiều cao tối đa (với n đỉnh): h_max = i = (n - 1) / m  (với cây nhị phân: h_max = (n - 1)/2).\n    - Số lá ÍT NHẤT (với chiều cao h): l_min = (m - 1)·h + 1.",
      "3 Thứ tự Duyệt Cây & Biểu thức Ba Lan (Prefix / Postfix):\n  • Preorder (NLR): Gốc → Trái → Phải  |  Inorder (LNR): Trái → Gốc → Phải  |  Postorder (LRN): Trái → Phải → Gốc.\n  • Tính Postfix (Hậu tố): Đọc từ TRÁI sang PHẢI, gặp dấu phép toán thì áp dụng cho 2 số ngay trước nó.\n  • Tính Prefix (Tiền tố): Đọc từ PHẢI sang TRÁI, gặp dấu phép toán thì áp dụng cho 2 số ngay sau nó.",
      "Mã Tiền tố (Prefix Code) & Huffman Coding:\n  • Prefix Code: KHÔNG có từ mã nào là phần mở đầu của từ mã khác.\n  • Mẹo Huffman cho từ có đúng 3 chữ cái khác nhau (như 'AILILI' hoặc 'KYAYKY', tần suất 3, 2, 1): Chữ nhiều nhất dài 1 bit, 2 chữ kia dài 2 bit ⇒ Tổng số bit = 3×1 + 2×2 + 1×2 = 9 bits!",
      "Cây khung nhỏ nhất MST (Prim vs. Kruskal):\n  • Cả hai thuật toán đều chọn đúng (|V| - 1) cạnh sao cho tổng trọng số nhỏ nhất và không tạo chu trình.\n  • Kruskal: Sắp xếp TOÀN BỘ cạnh tăng dần theo trọng số, nhặt lần lượt cạnh nhỏ nhất không tạo chu trình.\n  • Prim: Xuất phát từ 1 đỉnh, mỗi bước chọn cạnh nhỏ nhất nối 1 đỉnh TRONG cây với 1 đỉnh NGOÀI cây."
    ],
    workedExample:
      "📌 Đề thật SP26_FE (Câu 26 — Ex Book tr.57 bài 12c): Tính giá trị biểu thức Postfix:  3 2 * 2 ↑ 5 3 - 8 4 / * -\n" +
      "• Bước 1: Quét từ trái sang phải, gặp cụm `3 2 *` → 3 × 2 = 6. (Còn: `6 2 ↑ 5 3 - 8 4 / * -`)\n" +
      "• Bước 2: Gặp `6 2 ↑` (dấu ↑ là lũy thừa) → 6² = 36. (Còn: `36 5 3 - 8 4 / * -`)\n" +
      "• Bước 3: Gặp `5 3 -` → 5 - 3 = 2, và `8 4 /` → 8 / 4 = 2. (Còn: `36 2 2 * -`)\n" +
      "• Bước 4: Gặp `2 2 *` → 4, cuối cùng `36 4 -` → 36 - 4 = 32!\n" +
      "👉 Đáp án chính xác: 32!",
    traps: [
      "Bẫy 1 (Đề SU26_B5 - Câu 31): Bài Kruskal có nhiều cạnh CÙNG TRỌNG SỐ, đề dặn rõ 'choose in reverse dictionary order' (chọn theo thứ tự từ điển NGƯỢC từ z về a: ví dụ 'gh' chọn trước 'bc')! Đọc thật kỹ dòng chữ in nghiêng này!",
      "Bẫy 2 (Đề SU26_B5 - Câu 42): Cho sẵn 8 mã dài 3 bit (000..111 — đã dùng HẾT 2³ = 8 tổ hợp 3 bit!) hỏi thêm mã cho chữ 'i' được không? KHÔNG THỂ thêm bất kỳ chuỗi nào nữa ⇒ Chọn 'None of the other choices'!",
      "Bẫy 3 (Đề SP26 - Câu 2): Hỏi vị trí của đỉnh gốc d trong duyệt Inorder (cây tổng quát): Vị trí của gốc d luôn bằng (Tổng số đỉnh trong cây con trái nhất của d) + 1!"
    ],
    miniQuiz: [
      {
        q: "Một cây nhị phân đầy đủ (full binary tree) có 101 đỉnh. Chiều cao lớn nhất (maximum height) của cây là bao nhiêu?",
        opts: ["50", "51", "100", "7"],
        ans: 0,
        exp: "Số đỉnh trong i = (n - 1) / 2 = (101 - 1) / 2 = 50. Chiều cao tối đa h_max = i = 50!"
      },
      {
        q: "Số lá ÍT NHẤT của một cây 3-phân đầy đủ (full 3-ary tree) có chiều cao h = 3 là bao nhiêu?",
        opts: ["6", "7", "9", "27"],
        ans: 1,
        exp: "Áp dụng công thức l_min = (m - 1)·h + 1 = (3 - 1) × 3 + 1 = 7 lá!"
      }
    ]
  }
];
