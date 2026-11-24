window.PRO192_LESSONS = [
  {
    id: "pro_lesson_1",
    num: "Bài 1",
    chapter: "Chương 1: Java Basics, Ép kiểu & Toán tử",
    title: "Hiểu tận gốc Stack/Heap, Ép kiểu & 5 Bẫy Toán tử hay chết nhất ở FE",
    duration: "12 phút",
    level: "Cơ bản • Bắt buộc nắm chắc",
    analogy:
      "Hãy tưởng tượng bộ nhớ Java như 2 khu vực: STACK là bàn làm việc gọn gàng (chứa các biến nguyên thủy `int`, `double` và tờ giấy ghi địa chỉ), còn HEAP là nhà kho khổng lồ (chứa các Object thực sự như `new Student()`, `new String()`). Khi truyền biến vào hàm, Java luôn photo tờ giấy trên Stack (Pass-by-Value)!",
    sections: [
      {
        heading: "1. Quy tắc Thăng hạng số học (Numeric Promotion) — Bẫy số 1",
        text:
          "Trong Java, CPU 32-bit tối ưu tính toán trên `int`, nên hễ bạn cộng/trừ/nhân/chia trên `byte`, `short`, `char` thì kết quả TỰ ĐỘNG biến thành `int`:\n" +
          "• `byte a = 5; byte b = a + 1;` → ❌ **Compile Error** (vì `a + 1` là `int`, không nhét vừa `byte`).\n" +
          "• `byte b = (byte)(a + 1);` → ✅ Hợp lệ.\n" +
          "• `a += 1;` hoặc `a++;` → ✅ Hợp lệ (toán tử gán ghép tự ép kiểu ngầm!).\n" +
          "• Tương tự, `float f = 3.5;` → ❌ **Compile Error** (mặc định `3.5` là `double` 64-bit, phải viết `3.5f`)."
      },
      {
        heading: "2. Truy vết `++x` vs `x++` và Nối chuỗi `+` từ trái sang phải",
        text:
          "• Tiền tố `++x`: **Tăng trước → dùng sau**. Hậu tố `x++`: **Dùng trước → tăng sau**.\n" +
          "• Ví dụ kinh điển: `int x = 5; int y = x++ + ++x;` ⇒ `x++` trả `5` (rồi `x=6`), `++x` tăng `x=7` rồi trả `7` ⇒ `y = 12, x = 7`.\n" +
          "• Chuỗi `+`: Luôn chạy từ TRÁI sang PHẢI!\n" +
          "  – `1 + 2 + \"FPT\"` = `\"3FPT\"` (cộng số trước rồi mới gặp chuỗi).\n" +
          "  – `\"FPT\" + 1 + 2` = `\"FPT12\"` (gặp chuỗi ngay đầu nên phía sau đều thành nối chuỗi!)."
      },
      {
        heading: "3. Short-circuit (`&&`, `||`) vs Bitwise (`&`, `|`) và Switch Fall-through",
        text:
          "• `if (false && ++b > 0)`: Vế trái đã sai nên Java **bỏ qua không chạy** `++b`.\n" +
          "• `if (false & ++b > 0)`: Toán tử đơn `&` **vẫn chạy** `++b` dù biết chắc kết quả là `false`!\n" +
          "• Trong `switch`: Nếu khớp `case` mà thiếu `break;`, code sẽ **trượt thẳng xuống** chạy tất cả các `case` bên dưới cho tới khi gặp `break;` hoặc hết `switch`."
      }
    ],
    feTraps: [
      "Bẫy `x = x++;` trong vòng lặp: giá trị `x` KHÔNG tăng mà luôn giữ nguyên giá trị cũ!",
      "Bẫy `'a' + 1`: nháy đơn là `char` (mã ASCII 97) nên kết quả là số `98`, KHÔNG phải chuỗi `\"a1\"` hay `'b'`!",
      "Bẫy `switch`: KHÔNG hỗ trợ `long`, `float`, `double`, `boolean` — gặp các kiểu này trong `switch` chọn ngay Compile Error!"
    ],
    miniQuiz: [
      {
        q: "Kết quả của `System.out.println(\"A\" + 2 + 3);` là gì?",
        opts: ["A5", "A23", "5A", "Compile Error"],
        ans: 1,
        exp: "Đánh giá từ trái sang phải: `\"A\" + 2` thành chuỗi `\"A2\"`, rồi `\"A2\" + 3` thành `\"A23\"`."
      },
      {
        q: "Câu lệnh nào sau đây gây LỖI BIÊN DỊCH (Compile Error)?",
        opts: ["byte b = 10; b++;", "byte b = 10; b += 5;", "byte b = 10; b = b + 5;", "byte b = 10; b = (byte)(b + 5);"],
        ans: 2,
        exp: "`b + 5` tự thăng hạng lên `int` nên gán trực tiếp vào `byte b` bị lỗi biên dịch. Riêng `b++` và `b += 5` tự ép kiểu ngầm nên hợp lệ."
      },
      {
        q: "Cho `int a = 3, b = 3; if (a == 3 || ++b > 3) {}`. Sau lệnh if, giá trị của `b` là bao nhiêu?",
        opts: ["3", "4", "0", "Compile Error"],
        ans: 0,
        exp: "Toán tử `||` là short-circuit: vì `a == 3` đã là `true` nên vế phải `++b > 3` KHÔNG chạy ⇒ `b` giữ nguyên là `3`."
      }
    ]
  },
  {
    id: "pro_lesson_2",
    num: "Bài 2",
    chapter: "Chương 2: Classes, Constructors, Encapsulation & Static",
    title: "Bí kíp ăn trọn PE Q1 + Làm chủ Access Modifiers & Static vs Instance",
    duration: "15 phút",
    level: "Cốt lõi FE & PE Q1",
    analogy:
      "Class giống như bản vẽ thiết kế chiếc ô tô, còn Object (`new Car()`) là từng chiếc xe thật xuất xưởng. Biến `instance` (biển số xe, màu sơn) thì mỗi xe có riêng; còn biến `static` (tổng số xe toàn hãng đã sản xuất) là bảng đếm treo chung ở nhà máy — tất cả xe dùng chung 1 con số duy nhất!",
    sections: [
      {
        heading: "1. Constructor & Quy tắc vàng cho bài PE Q1",
        text:
          "• Constructor có tên giống hệt tên Class và **KHÔNG có kiểu trả về** (không viết `void`!).\n" +
          "• Nếu bạn viết 1 constructor có tham số mà quên viết constructor rỗng `ClassName() {}`, Java sẽ **KHÔNG tự tạo** constructor rỗng nữa.\n" +
          "• Trong PE Q1 FPT: Luôn tạo đủ 2 constructor (rỗng + đầy đủ tham số), toàn bộ thuộc tính đặt `private`, và viết kỹ logic biến đổi chuỗi/số trong `getter`/`setter`."
      },
      {
        heading: "2. Bảng Ma trận 4 Access Modifiers (Gặp chắc chắn trong FE)",
        text:
          "• `private`: Chỉ thấy trong **cùng Class**.\n" +
          "• `default` (không ghi từ khóa): Thấy trong **cùng Package**.\n" +
          "• `protected`: Thấy trong **cùng Package** + **Lớp con ở Package khác** (chỉ truy cập qua `this` hoặc biến kiểu lớp con!).\n" +
          "• `public`: Thấy ở **mọi nơi**.\n" +
          "→ Nhớ: Top-level class CHỈ được dùng `public` hoặc `default`!"
      },
      {
        heading: "3. Thứ tự chạy Static Block → Instance Block → Constructor",
        text:
          "1. `static { ... }`: Chạy **đầu tiên và chỉ 1 lần duy nhất** khi lớp được nạp vào JVM.\n" +
          "2. `{ ... }` (Instance Initializer Block): Chạy **mỗi lần gọi `new`**, ngay trước thân Constructor.\n" +
          "3. `Constructor()`: Chạy sau cùng để hoàn tất khởi tạo đối tượng.\n" +
          "• Đồng thời nhớ Integer Cache: `Integer a = 127, b = 127; a == b` là `true`, nhưng với `128` thì `a == b` là `false`!"
      }
    ],
    feTraps: [
      "Trong hàm `static` (như `main`), KHÔNG thể dùng `this`, `super` hay gọi trực tiếp biến/hàm non-static!",
      "Viết `public void Student()` không lỗi biên dịch, nhưng nó là method thường chứ KHÔNG phải constructor!",
      "Hàm truyền Object `void change(Box b) { b = new Box(); }` KHÔNG đổi được object gốc ở ngoài hàm!"
    ],
    miniQuiz: [
      {
        q: "Biến `static` trong một class có đặc điểm nào sau đây?",
        opts: [
          "Mỗi đối tượng tạo bằng `new` có một bản sao riêng",
          "Dùng chung duy nhất 1 bản cho toàn bộ các đối tượng thuộc class đó",
          "Không thể thay đổi giá trị sau khi khởi tạo",
          "Chỉ truy cập được bên trong constructor"
        ],
        ans: 1,
        exp: "Biến `static` (class variable) nằm trên vùng nhớ chung của Class, mọi đối tượng đều truy cập chung một giá trị duy nhất."
      },
      {
        q: "Kết quả của `Integer a = 127, b = 127; Integer c = 128, d = 128; System.out.print((a==b) + \"-\" + (c==d));` là gì?",
        opts: ["true-true", "false-false", "true-false", "false-true"],
        ans: 2,
        exp: "Java cache Integer từ `-128` đến `127`. `127` dùng chung object (`true`), `128` tạo 2 object khác nhau (`false`)."
      },
      {
        q: "Lệnh `this(...)` dùng để gọi constructor khác trong cùng class phải đặt ở đâu?",
        opts: ["Cuối constructor", "Sau lệnh super()", "Ở dòng đầu tiên của constructor", "Bất kỳ đâu trong thân hàm"],
        ans: 2,
        exp: "`this(...)` bắt buộc phải là câu lệnh đầu tiên trong constructor (và không thể dùng chung với `super(...)`)."
      }
    ]
  },
  {
    id: "pro_lesson_3",
    num: "Bài 3",
    chapter: "Chương 3: Inheritance, Polymorphism, Abstract & Interface",
    title: "Bản chất Đa hình (Dynamic Binding), Abstract vs Interface & Bí kíp PE Q2",
    duration: "18 phút",
    level: "Siêu Trọng Tâm (22% FE + PE Q2)",
    analogy:
      "Tưởng tượng `Parent p = new Child();` giống như bạn cầm chiếc điều khiển TV đa năng (kiểu khai báo `Parent`) chĩa vào chiếc SmartTV đời mới (đối tượng thật `Child`). Khi bấm nút chức năng (gọi non-static method), SmartTV sẽ chạy tính năng đời mới của `Child`! Nhưng nếu nhìn nhãn dán trên điều khiển (truy cập Field hoặc Static method), bạn vẫn thấy chữ của `Parent`!",
    sections: [
      {
        heading: "1. Quy tắc 3 dòng cho Dynamic Binding (`Parent p = new Child();`)",
        text:
          "• **Instance Method (không static):** Chạy theo **CHILD** (Runtime Type) — miễn hàm đó có tồn tại ở lớp `Parent` lúc biên dịch!\n" +
          "• **Field (thuộc tính `p.x`):** Lấy theo **PARENT** (Compile-time Type).\n" +
          "• **Static Method (`p.staticFn()`):** Chạy theo **PARENT** (Compile-time Type — Method Hiding, KHÔNG phải Overriding!)."
      },
      {
        heading: "2. 4 Quy tắc sống còn của Method Overriding",
        text:
          "1. Tên hàm và danh sách tham số phải **giống hệt** lớp cha.\n" +
          "2. Access Modifier ở lớp con phải **RỘNG HƠN HOẶC BẰNG** lớp cha (`default` → `protected` → `public`). Chú ý: hàm trong `interface` luôn ngầm là `public`, nên lớp implement PHẢI viết `public`!\n" +
          "3. Kiểu trả về giống lớp cha hoặc là lớp con (Covariant Return Type).\n" +
          "4. KHÔNG thể override hàm `private`, `final`, hoặc `static`."
      },
      {
        heading: "3. Abstract Class vs Interface (Bảng chốt nhanh)",
        text:
          "• **Abstract Class (`extends`):** Đơn kế thừa, CÓ constructor, có biến instance thường, có cả hàm thường lẫn `abstract` method. Dùng khi các lớp có chung bản chất ('IS-A' chặt chẽ).\n" +
          "• **Interface (`implements`):** Đa kế thừa, KHÔNG có constructor, biến mặc định `public static final`, method không thân mặc định `public abstract`, Java 8+ có thêm `default` và `static` method. Dùng để định nghĩa hợp đồng hành vi (như `ICar`, `IString` trong PE Q3/Q4!)."
      }
    ],
    feTraps: [
      "Nếu lớp Cha chỉ có `Parent(int x)` (không có constructor rỗng) mà lớp Con không gọi `super(x)` → Compile Error ngay!",
      "Downcasting sai kiểu (`Animal a = new Animal(); Dog d = (Dog) a;`): biên dịch VẪN QUA nhưng chạy sẽ văng `ClassCastException`!",
      "Gọi hàm bị override bên trong constructor lớp Cha sẽ chạy hàm lớp Con KHI biến của lớp Con chưa kịp gán (vẫn bằng `0` / `null`)!"
    ],
    miniQuiz: [
      {
        q: "Cho `class P { int x = 1; void f() { System.out.print(2); } }` và `class C extends P { int x = 9; void f() { System.out.print(8); } }`. Chạy `P p = new C(); System.out.print(p.x); p.f();` in ra gì?",
        opts: ["98", "12", "18", "92"],
        ans: 2,
        exp: "`p.x` lấy theo kiểu khai báo `P` (`1`), còn `p.f()` chạy theo đối tượng thực `C` (`8`) ⇒ in ra `18`!"
      },
      {
        q: "Lớp con `B` implement `interface A { void run(); }`. Khai báo nào trong lớp `B` là HỢP LỆ?",
        opts: ["void run() {}", "protected void run() {}", "private void run() {}", "public void run() {}"],
        ans: 3,
        exp: "Mọi method trong `interface` mặc định là `public abstract`, nên lớp cài đặt bắt buộc phải để `public void run()`!"
      },
      {
        q: "Biểu thức `null instanceof String` cho kết quả gì?",
        opts: ["true", "false", "NullPointerException", "Compile Error"],
        ans: 1,
        exp: "`null instanceof AnyType` luôn trả về `false` mà không gây lỗi."
      }
    ]
  },
  {
    id: "pro_lesson_4",
    num: "Bài 4",
    chapter: "Chương 4: Exception Handling",
    title: "Checked vs Unchecked & Luật bất biến của khối finally",
    duration: "10 phút",
    level: "Dễ ăn trọn điểm FE",
    analogy:
      "Checked Exception giống như cảnh báo bảo vệ sân bay bắt bạn PHẢI kiểm tra hành lý trước khi lên máy bay (lúc biên dịch — không xử lý là không cho bay!). Còn Unchecked Exception (`RuntimeException`) giống như trượt vỏ chuối giữa đường — lúc xuất phát không ai cấm, nhưng sơ suất (chia cho 0, quên khởi tạo `null`) thì lúc chạy sẽ ngã!",
    sections: [
      {
        heading: "1. Phân biệt nhanh Checked vs Unchecked Exception",
        text:
          "• **Unchecked (`RuntimeException` & lớp con):** `NullPointerException`, `ArithmeticException`, `ArrayIndexOutOfBoundsException`, `ClassCastException`, `NumberFormatException`. Không bắt buộc `try-catch` lúc biên dịch.\n" +
          "• **Checked (các `Exception` còn lại):** `IOException`, `FileNotFoundException`, `SQLException`, `ClassNotFoundException`. BẮT BUỘC xử lý bằng `try-catch` hoặc khai báo `throws` ở đầu hàm!"
      },
      {
        heading: "2. 3 Luật thép của `try - catch - finally`",
        text:
          "1. **Con trước — Cha sau:** Nếu có nhiều khối `catch`, ngoại lệ con (`ArithmeticException`, `FileNotFoundException`) PHẢI đứng trên ngoại lệ cha (`Exception`, `IOException`).\n" +
          "2. **`finally` luôn chạy:** Kể cả khi `try` có `return`, khối `finally` vẫn chạy trước khi thoát hàm (chỉ bỏ qua khi gọi `System.exit(0)`).\n" +
          "3. **Bẫy `return` trong `finally`:** `try { return 1; } finally { return 2; }` ⇒ trả về **`2`** (ghi đè). Nhưng `try { return x; } finally { x = 2; }` (không có `return` trong `finally`) ⇒ vẫn trả về **`1`**!"
      }
    ],
    feTraps: [
      "Chia số thực `5.0 / 0.0` KHÔNG ném `ArithmeticException` mà trả về `Infinity`!",
      "`throw` (không s) dùng trong thân hàm để ném 1 đối tượng lỗi; `throws` (có s) đặt ở chữ ký hàm!",
      "`try { ... } finally { ... }` (không có `catch`) hoàn toàn BIÊN DỊCH HỢP LỆ!"
    ],
    miniQuiz: [
      {
        q: "Ngoại lệ nào dưới đây thuộc nhóm CHECKED Exception?",
        opts: ["NullPointerException", "ClassCastException", "FileNotFoundException", "NumberFormatException"],
        ans: 2,
        exp: "`FileNotFoundException` là lớp con của `IOException` → Checked Exception."
      },
      {
        q: "Kết quả của hàm `int f() { try { return 10; } finally { return 20; } }` là bao nhiêu?",
        opts: ["10", "20", "30", "Compile Error"],
        ans: 1,
        exp: "Lệnh `return 20` trong `finally` luôn chạy cuối cùng và ghi đè giá trị `10` của khối `try`."
      },
      {
        q: "Đặt `catch (Exception e)` phía trên `catch (NullPointerException e)` sẽ gây ra điều gì?",
        opts: ["Chạy vào khối Exception", "Chạy vào khối NullPointerException", "Lỗi biên dịch (Unreachable catch block)", "Lỗi Runtime"],
        ans: 2,
        exp: "Lớp cha `Exception` đã bắt hết mọi `NullPointerException` nên khối `catch` bên dưới không thể chạm tới ⇒ Lỗi biên dịch!"
      }
    ]
  },
  {
    id: "pro_lesson_5",
    num: "Bài 5",
    chapter: "Chương 5: Strings & Java Collections Framework",
    title: "Làm chủ String Pool, ArrayList/Set/Map & Comparator để gánh trọn PE Q3–Q4",
    duration: "18 phút",
    level: "Siêu Trọng Tâm (FE + 5 điểm PE Q3 & Q4)",
    analogy:
      "`List` giống hàng người xếp hàng mua vé (có số thứ tự 0, 1, 2 và cho phép 2 người trùng tên). `Set` giống danh sách điểm danh theo MSSV (tuyệt đối KHÔNG trùng lặp). Còn `Map` giống từ điển Anh–Việt (tra theo từ khóa Key duy nhất để ra nghĩa Value ngay lập tức!).",
    sections: [
      {
        heading: "1. String vs StringBuilder vs StringBuffer & Bí kíp PE Q4",
        text:
          "• `String` là **bất biến (Immutable)** → `s.toUpperCase();` KHÔNG đổi `s` nếu không gán lại `s = s.toUpperCase();`.\n" +
          "• `StringBuilder` thay đổi trực tiếp, có sẵn `.reverse()`, `.deleteCharAt()`, `.insert()` — tốc độ cao nhất, dùng cực sướng trong PE Q4!\n" +
          "• Tách từ chuẩn PE Q4: `String[] words = str.trim().split(\"\\\\s+\");` và ghép lại bằng `String.join(\" \", words)`."
      },
      {
        heading: "2. Chọn đúng Collection trong 3 giây",
        text:
          "• **Cần thứ tự + cho trùng + truy xuất nhanh theo index:** `ArrayList`.\n" +
          "• **Cần thêm/xóa đầu cuối cực nhanh:** `LinkedList`.\n" +
          "• **Cần loại trùng siêu nhanh:** `HashSet` (không thứ tự) / `LinkedHashSet` (giữ thứ tự thêm) / `TreeSet` (tự sắp xếp tăng dần, CẤM `null`).\n" +
          "• **Lưu Key → Value:** `HashMap` (cho 1 key `null`, không synchronized) / `TreeMap` (sort theo key, cấm key `null`). Lưu ý: `Map` KHÔNG kế thừa `Collection`!"
      },
      {
        heading: "3. Sắp xếp bằng Comparator & Sublist Sort (Vũ khí tối thượng PE Q3)",
        text:
          "• Sắp xếp tăng dần theo `price`: `Collections.sort(t, (a, b) -> Integer.compare(a.getPrice(), b.getPrice()));`\n" +
          "• Sắp xếp 2 tiêu chí (VD: `maker` tăng dần, bằng nhau thì `price` giảm dần):\n" +
          "  `int c = a.getMaker().compareTo(b.getMaker()); return (c != 0) ? c : Integer.compare(b.getPrice(), a.getPrice());`\n" +
          "• Chỉ sắp xếp đoạn từ vị trí `L` đến `R` (bao gồm `R`): `Collections.sort(t.subList(L, R + 1), cmp);`!"
      }
    ],
    feTraps: [
      "`list.remove(1)` trên `List<Integer>` xóa phần tử ở INDEX 1 chứ không phải giá trị 1!",
      "`s.split(\".\")` trả về mảng rỗng `length = 0` vì `.` là ký tự đại diện trong Regex — phải viết `s.split(\"\\\\.\")`!",
      "`StringBuilder` KHÔNG override `equals()` nên `new StringBuilder(\"a\").equals(new StringBuilder(\"a\"))` trả về `false`!"
    ],
    miniQuiz: [
      {
        q: "Cấu trúc nào KHÔNG kế thừa interface `java.util.Collection`?",
        opts: ["ArrayList", "HashSet", "HashMap", "PriorityQueue"],
        ans: 2,
        exp: "`Map` (gồm `HashMap`, `TreeMap`, `LinkedHashMap`) là nhánh riêng tách biệt, không kế thừa `Collection`."
      },
      {
        q: "Cho `List<Integer> a = new ArrayList<>(Arrays.asList(5, 10, 1)); a.remove(1);`. Danh sách còn lại là gì?",
        opts: ["[5, 10]", "[5, 1]", "[10, 1]", "Lỗi biên dịch"],
        ans: 1,
        exp: "`a.remove(1)` gọi `remove(int index)` nên xóa phần tử ở vị trí 1 (giá trị `10`), còn lại `[5, 1]`."
      },
      {
        q: "Hàm `subList(1, 3)` trên danh sách `[A, B, C, D, E]` lấy ra những phần tử nào?",
        opts: ["[A, B, C]", "[B, C, D]", "[B, C]", "[C, D]"],
        ans: 2,
        exp: "`subList(from, to)` lấy từ `from` (bao gồm) đến `to - 1` (không bao gồm `to`) ⇒ index 1 (`B`) và index 2 (`C`)."
      }
    ]
  },
  {
    id: "pro_lesson_6",
    num: "Bài 6",
    chapter: "Chương 6: Java I/O Streams & Serialization",
    title: "Phân loại luồng Byte vs Character & Cơ chế Serialization + transient",
    duration: "10 phút",
    level: "Trọng tâm FE (7 câu)",
    analogy:
      "Byte Stream giống ống dẫn nguyên liệu thô từng byte (chở ảnh, nhạc, video). Character Stream giống ống có bộ dịch sẵn chữ cái Unicode (chở văn bản tiếng Anh/tiếng Việt). Còn Serialization giống công nghệ 'đóng băng' cả một Object trên RAM thành gói byte cất vào ổ cứng rồi hôm sau 'rã đông' (Deserialize) lại nguyên trạng — trừ những thứ dán nhãn `transient` sẽ bị bỏ lại!",
    sections: [
      {
        heading: "1. Quy tắc nhìn tên đoán ngay họ luồng I/O",
        text:
          "• Đuôi **`InputStream` / `OutputStream`** ⇒ **Byte Stream (8-bit)** (VD: `FileInputStream`, `BufferedOutputStream`, `DataInputStream`, `ObjectOutputStream`).\n" +
          "• Đuôi **`Reader` / `Writer`** ⇒ **Character Stream (16-bit Unicode)** (VD: `FileReader`, `BufferedReader`, `FileWriter`, `PrintWriter`).\n" +
          "• Cầu nối chuyển Byte → Character: `InputStreamReader` và `OutputStreamWriter`."
      },
      {
        heading: "2. Đọc/Ghi file text chuẩn & Các giá trị báo hết file (EOF)",
        text:
          "• Đọc từng dòng văn bản: `BufferedReader br = new BufferedReader(new FileReader(\"in.txt\"));` → vòng lặp `while ((line = br.readLine()) != null)`.\n" +
          "• Ghi nối tiếp (Append) không xóa nội dung cũ: `new FileWriter(\"out.txt\", true)`.\n" +
          "• Nhớ phân biệt EOF: `read()` trả về **`-1`**, còn `readLine()` trả về **`null`**!"
      },
      {
        heading: "3. Serialization & Từ khóa `transient`",
        text:
          "• Class muốn ghi bằng `ObjectOutputStream.writeObject()` BẮT BUỘC phải `implements Serializable` (Marker Interface — rỗng, 0 method). Nếu không sẽ ném `NotSerializableException`!\n" +
          "• Biến có từ khóa `transient` (hoặc `static`) sẽ **KHÔNG được lưu** khi serialize ⇒ lúc đọc lại, biến `transient` mang giá trị mặc định (`0`, `false`, `null`)."
      }
    ],
    feTraps: [
      "`new File(\"a.txt\")` KHÔNG tạo file thật trên ổ cứng — phải gọi `createNewFile()` hoặc mở bằng Stream!",
      "`Serializable` là Marker Interface (0 method), đừng nhầm với Functional Interface (1 abstract method)!",
      "Mặc định `new FileWriter(\"a.txt\")` sẽ XÓA SẠCH nội dung cũ để ghi đè (muốn ghi nối phải truyền thêm `, true`)!"
    ],
    miniQuiz: [
      {
        q: "Lớp nào sau đây là Character Stream dùng để đọc văn bản theo từng dòng (`readLine()`)?",
        opts: ["FileInputStream", "DataInputStream", "BufferedReader", "ObjectInputStream"],
        ans: 2,
        exp: "`BufferedReader` thuộc họ `Reader` (Character Stream) và cung cấp phương thức `readLine()`."
      },
      {
        q: "Khi đọc hết tệp, `BufferedReader.readLine()` trả về giá trị gì?",
        opts: ["-1", "\"\"", "null", "false"],
        ans: 2,
        exp: "`readLine()` trả về `null` khi đạt cuối tệp (EOF), còn `read()` trả về `-1`."
      },
      {
        q: "Sau khi Serialize rồi Deserialize một đối tượng `User` có `transient String pass = \"123\";`, giá trị của `pass` là gì?",
        opts: ["\"123\"", "\"\"", "null", "Ném NotSerializableException"],
        ans: 2,
        exp: "Thuộc tính đánh dấu `transient` bị bỏ qua khi serialize nên lúc đọc lại nhận giá trị mặc định của kiểu `String` là `null`."
      }
    ]
  }
];
