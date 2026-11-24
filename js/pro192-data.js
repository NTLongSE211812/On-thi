window.PRO192_DATA = {
  feAnalysis: {
    totalAnalyzed: 100,
    difficultySummary:
      "Môn PRO192 (Object-Oriented Programming with Java — Lập trình hướng đối tượng Java) tại FPT University gồm 2 kỳ thi cốt lõi: (1) Thi Thực hành PE (85 phút trên NetBeans — 4 câu Q1–Q4: Encapsulation, Inheritance, List<T> & Comparator, String Processing) và (2) Thi Trắc nghiệm FE trên EOS (50 câu / 60 phút). Đề FE có ~45% câu đọc code đoán Output / lỗi biên dịch (Compile Error vs Runtime Exception) và ~55% lý thuyết OOP, Access Modifiers, Polymorphism, Exception, Collections & Java I/O.",
    distribution: [
      {
        topic: "1. Chương 1: Java Basics, Data Types, Operators & Control Flow (~16% — 8 câu)",
        weight: "16% (~8 câu)",
        keyPoints: [
          "8 kiểu nguyên thủy (Primitive): byte (8-bit: -128..127), short (16-bit), int (32-bit), long (64-bit, hậu tố L), float (32-bit, hậu tố f), double (64-bit), char (16-bit Unicode 0..65535), boolean (true/false — KHÔNG ép được sang int!).",
          "Ép kiểu (Casting): Widening tự động (byte → short → int → long → float → double); Narrowing bắt buộc ép tường minh. Bẫy FE: byte b = 1; b = b + 1; → LỖI BIÊN DỊCH vì b + 1 tự thăng hạng lên int (nhưng b += 1 hoặc b++ lại HỢP LỆ vì tự ép kiểu ngầm!).",
          "Toán tử bẫy: ++x (tăng trước dùng sau) vs x++ (dùng trước tăng sau); Short-circuit && / || (dừng sớm nếu biết kết quả) vs Bitwise & / | (luôn chạy cả 2 vế); Nối chuỗi từ trái sang phải: 1 + 2 + \"A\" = \"3A\" nhưng \"A\" + 1 + 2 = \"A12\".",
          "Vòng lặp & Switch: switch thiếu break sẽ rơi xuống (fall-through) chạy luôn các case dưới! switch hỗ trợ byte, short, char, int, String, enum (KHÔNG hỗ trợ long, float, double, boolean)."
        ]
      },
      {
        topic: "2. Chương 2: Classes, Objects, Constructors, Encapsulation & Static (~18% — 9 câu)",
        weight: "18% (~9 câu)",
        keyPoints: [
          "Constructor: Tên trùng tên class, KHÔNG có kiểu trả về (thậm chí không có void — nếu viết void Foo() thì đó là method thường!). Java chỉ tạo Default Constructor khi bạn KHÔNG viết bất kỳ constructor nào.",
          "Access Modifiers (Siêu hay bẫy!): private (chỉ trong class) < default/package-private (cùng package) < protected (cùng package + lớp con ở package khác) < public (mọi nơi). Class top-level chỉ được dùng public hoặc default!",
          "Java LUÔN là Pass-by-Value (truyền tham trị): với biến Object, Java copy giá trị của địa chỉ tham chiếu. Thay đổi thuộc tính bên trong object (obj.x = 5) thì ngoài hàm thấy, nhưng gán lại biến tham chiếu (obj = new Obj()) thì KHÔNG ảnh hưởng biến gốc!",
          "Thứ tự chạy khi tạo đối tượng: Static block (chạy 1 lần khi nạp class, Cha trước Con sau) → Instance initializer block → Constructor (Cha trước Con sau). Autoboxing cache: Integer trong [-128..127] dùng chung pool nên == trả về true, ngoài khoảng này == trả về false!"
        ]
      },
      {
        topic: "3. Chương 3: Inheritance, Polymorphism, Abstract Class & Interface (~22% — 11 câu — Siêu Trọng Tâm!)",
        weight: "22% (~11 câu)",
        keyPoints: [
          "super() hoặc this() PHẢI nằm ở dòng đầu tiên của constructor (không thể dùng cả hai cùng lúc!). Nếu không viết super(), trình biên dịch tự chèn super() không tham số → nếu lớp Cha không có constructor rỗng sẽ báo Compile Error!",
          "Overloading (Compile-time — cùng tên, KHÁC danh sách tham số) vs Overriding (Runtime — cùng tên, CÙNG tham số, Access Modifier lớp con phải RỘNG HƠN HOẶC BẰNG lớp cha, không ném thêm Checked Exception mới, hỗ trợ Covariant Return Type).",
          "BẪY KINH ĐIỂN Dynamic Binding: Khi khai báo Parent p = new Child(); → Gọi non-static method sẽ chạy hàm của CHILD (runtime type), NHƯNG truy cập biến Field (p.x) hoặc gọi static method (p.show()) lại theo PARENT (compile-time type)!",
          "Abstract Class (có constructor, biến instance thường, kế thừa đơn extends) vs Interface (mọi field mặc định là public static final, mọi method không body mặc định là public abstract; từ Java 8 có thêm default & static method; hỗ trợ đa kế thừa implements)."
        ]
      },
      {
        topic: "4. Chương 4: Exception Handling (~12% — 6 câu)",
        weight: "12% (~6 câu)",
        keyPoints: [
          "Cây phân cấp: Object → Throwable → (1) Error (lỗi JVM như OutOfMemoryError, StackOverflowError — không nên catch) và (2) Exception → Checked Exception (IOException, SQLException, ClassNotFoundException — BẮT BUỘC try-catch hoặc throws) vs Unchecked / RuntimeException (NullPointerException, ArithmeticException, ArrayIndexOutOfBoundsException, ClassCastException, NumberFormatException).",
          "Thứ tự catch: Bắt buộc catch lớp CON trước, lớp CHA sau (viết catch(Exception e) trước catch(ArithmeticException e) sẽ báo lỗi biên dịch Unreachable catch block!).",
          "Khối finally LUÔN LUÔN chạy (kể cả khi có return trong try/catch!), ngoại trừ khi gọi System.exit(0) hoặc JVM bị tắt đột ngột. Nếu finally cũng có return, giá trị return của finally sẽ ghi đè giá trị return của try/catch!",
          "Phân biệt throw (ném ra 1 đối tượng ngoại lệ cụ thể bên trong thân hàm: throw new IOException();) vs throws (khai báo ở chữ ký hàm có thể phát sinh ngoại lệ)."
        ]
      },
      {
        topic: "5. Chương 5: Strings, Arrays & Java Collections Framework (~18% — 9 câu)",
        weight: "18% (~9 câu)",
        keyPoints: [
          "String (Immutable — bất biến, có String Pool nên \"abc\" == \"abc\" là true, nhưng new String(\"abc\") == \"abc\" là false! Luôn dùng .equals() để so sánh nội dung) vs StringBuilder (Mutable, nhanh nhất, không thread-safe) vs StringBuffer (Mutable, có synchronized nên thread-safe).",
          "3 nhánh Collection chính: List (có thứ tự, CHO phép trùng — ArrayList truy xuất O(1), LinkedList thêm/xóa đầu cuối O(1)), Set (KHÔNG cho trùng — HashSet nhanh O(1) không thứ tự, LinkedHashSet giữ thứ tự thêm, TreeSet tự sắp xếp tăng dần), Map (cặp Key-Value, Key không trùng — HashMap cho phép 1 key null, TreeMap KHÔNG cho key null).",
          "Sắp xếp đối tượng (Siêu trọng tâm PE Q3 & FE!): Comparable<T> (implement trong chính class, viết compareTo(T o) — 1 tiêu chí tự nhiên) vs Comparator<T> (tạo bộ so sánh rời, viết compare(T o1, T o2) — linh hoạt nhiều tiêu chí).",
          "Contract giữa equals() và hashCode(): Nếu a.equals(b) == true thì BẮT BUỘC a.hashCode() == b.hashCode(). Ngược lại, hai object có cùng hashCode chưa chắc đã equals() (hash collision)!"
        ]
      },
      {
        topic: "6. Chương 6: Java I/O Streams, Serialization & File Handling (~14% — 7 câu)",
        weight: "14% (~7 câu)",
        keyPoints: [
          "Byte Streams (xử lý 8-bit nhị phân: ảnh, âm thanh, file bất kỳ — lớp gốc InputStream / OutputStream, hay dùng FileInputStream, BufferedInputStream, DataInputStream, ObjectInputStream).",
          "Character Streams (xử lý 16-bit Unicode văn bản text — lớp gốc Reader / Writer, hay dùng FileReader, FileWriter, BufferedReader có readLine(), PrintWriter có println()).",
          "Serialization (Tuần tự hóa đối tượng): Class phải implements Serializable (là một Marker Interface — không có method nào!). Dùng ObjectOutputStream.writeObject() để ghi và ObjectInputStream.readObject() để đọc.",
          "Từ khóa transient: Biến đánh dấu transient (và biến static) sẽ KHÔNG được lưu khi Serialize — khi đọc lại (Deserialize), biến đó nhận giá trị mặc định (0, false, null)!"
        ]
      }
    ]
  },

  chapters: [
    {
      id: "pro_ch1",
      title: "Chương 1: Java Basics — Kiểu Dữ Liệu, Ép Kiểu, Toán Tử & Luồng Điều Khiển",
      badge: "Trọng tâm FE (~8 câu)",
      summary: "JVM/JRE/JDK, 8 Primitive Types, Widening/Narrowing Casting, ++x vs x++, Short-circuit, Switch Fall-through & Arrays.",
      blocks: [
        {
          heading: "1.1 – 1.2: Kiến trúc Java (JDK/JRE/JVM) & 8 Kiểu Nguyên Thủy",
          items: [
            "JDK ⊃ JRE ⊃ JVM: Code .java → trình biên dịch javac dịch sang Bytecode (.class) → JVM (Java Virtual Machine) thông dịch/JIT chạy trên mọi hệ điều hành ('Write Once, Run Anywhere').",
            "8 kiểu Primitive (lưu trực tiếp giá trị trên Stack):\n  • Số nguyên: byte (1B: -128..127), short (2B), int (4B — mặc định cho số nguyên), long (8B — thêm L).\n  • Số thực: float (4B — BẮT BUỘC thêm f, ví dụ float x = 3.5f; viết float x = 3.5; → LỖI BIÊN DỊCH!), double (8B — mặc định cho số thực).\n  • Ký tự & Logic: char (2B Unicode, dấu nháy đơn 'A', bản chất là số không âm 0..65535), boolean (chỉ true/false, KHÔNG thể viết if(1))."
          ]
        },
        {
          heading: "1.3 – 1.4: Ép Kiểu (Casting), Toán Tử Bẫy & Vòng Lặp",
          items: [
            "Quy tắc thăng hạng biểu thức (Numeric Promotion): Mọi phép tính (+, -, *, /) trên byte, short, char đều TỰ ĐỘNG chuyển về int!\n  ⚠️ Bẫy kinh điển: byte a = 5; byte b = a + 1; → COMPILE ERROR (vì a + 1 là int)! Sửa: byte b = (byte)(a + 1); hoặc dùng a += 1; / a++; (toán tử gán ghép tự ép kiểu ngầm!).",
            "Toán tử cộng chuỗi (+): Đánh giá từ TRÁI sang PHẢI:\n  • 1 + 2 + \"3\" → \"33\" (cộng số 1+2=3 trước rồi mới nối \"3\").\n  • \"3\" + 1 + 2 → \"312\" (gặp chuỗi trước nên tất cả phía sau đều thành nối chuỗi!).",
            "Short-circuit vs Non-short-circuit:\n  • (false && ++x > 0): vế phải KHÔNG chạy → x giữ nguyên!\n  • (false & ++x > 0): vế phải VẪN chạy → x tăng thêm 1!",
            "Switch-case: Nếu case khớp mà KHÔNG có break; thì chương trình chạy tuốt xuống tất cả các case bên dưới (kể cả default) cho tới khi gặp break hoặc hết khối switch!"
          ]
        }
      ],
      examNote: "Mẹo FE Ch.1: Gặp câu có 'float f = 1.5;' hoặc 'byte b = b + 1;' hoặc 'if (x = 5)' (với int x) → Chọn ngay Compile Error! Nhưng 'boolean b = false; if (b = true)' lại HỢP LỆ và chạy vào nhánh if!"
    },
    {
      id: "pro_ch2",
      title: "Chương 2: Classes, Objects, Constructors, Encapsulation & Static",
      badge: "Trọng tâm FE & PE Q1 (~9 câu)",
      summary: "Default Constructor, this/this(), Bảng Access Modifiers, Pass-by-Value, Static vs Instance & Wrapper Cache.",
      blocks: [
        {
          heading: "2.1 – 2.2: Class, Object, Constructor & Từ khóa this",
          items: [
            "Constructor dùng để khởi tạo trạng thái ban đầu của Object. Tên giống hệt tên class và KHÔNG có kiểu trả về.\n  ⚠️ Bẫy: Nếu bạn định nghĩa constructor có tham số Student(String name), Java sẽ KHÔNG tự tạo constructor mặc định Student() nữa → gọi new Student() sẽ báo lỗi biên dịch!",
            "Từ khóa this:\n  • this.name: phân biệt biến thuộc tính (instance variable) với tham số trùng tên.\n  • this(args): gọi constructor khác trong CÙNG class — PHẢI nằm ở dòng đầu tiên của constructor!",
            "Encapsulation (Tính đóng gói — PE Q1): Khai báo tất cả field là private, chỉ cho phép truy cập/thay đổi qua getter/setter là public (có kiểm tra điều kiện hợp lệ bên trong setter)."
          ]
        },
        {
          heading: "2.3 – 2.4: Access Modifiers, Static, Final & Pass-by-Value",
          items: [
            "4 mức Access Modifier (từ hẹp → rộng):\n  • private: Chỉ trong cùng Class.\n  • default (không ghi gì): Trong cùng Package.\n  • protected: Cùng Package + Lớp con (Subclass) ở Package khác.\n  • public: Mọi nơi trong toàn project.",
            "Từ khóa static:\n  • Biến static (class variable) dùng chung cho MỌI đối tượng của class.\n  • Hàm static KHÔNG thể dùng từ khóa this/super và KHÔNG gọi trực tiếp được biến/hàm non-static (vì chưa có đối tượng tồn tại!).",
            "Từ khóa final:\n  • final variable = hằng số (không gán lại giá trị; với object thì không trỏ sang object khác, nhưng VẪN đổi được field bên trong object!).\n  • final method = KHÔNG cho lớp con Override.\n  • final class (như String, Integer, Math) = KHÔNG cho kế thừa (extends).",
            "Wrapper Cache (Bẫy cực hay ra FE!): Integer a = 100, b = 100; ⇒ a == b là TRUE (vì Java cache Integer từ -128 đến 127). Nhưng Integer c = 200, d = 200; ⇒ c == d là FALSE (vì tạo 2 object khác nhau trên Heap!)."
          ]
        }
      ],
      examNote: "Mẹo PE Q1: Luôn đọc kỹ đề xem getter có yêu cầu cắt chuỗi (substring), viết hoa (toUpperCase) hay setter có nhân/cộng thêm giá trị không. Không đổi tên package, tên class hay chữ ký hàm có sẵn!"
    },
    {
      id: "pro_ch3",
      title: "Chương 3: Inheritance, Polymorphism, Abstract Class & Interface",
      badge: "Siêu Trọng tâm FE & PE Q2 (~11 câu)",
      summary: "super(), Overload vs Override, Dynamic Binding (Method vs Field/Static), Abstract Class vs Interface & Casting.",
      blocks: [
        {
          heading: "3.1 – 3.2: Kế thừa (Inheritance), super() & Thứ tự Khởi tạo",
          items: [
            "Java chỉ hỗ trợ ĐƠN kế thừa giữa các Class (class B extends A), nhưng hỗ trợ ĐA kế thừa thông qua Interface (class B extends A implements I1, I2). Mọi class đều ngầm kế thừa java.lang.Object.",
            "Quy tắc vàng Constructor khi kế thừa:\n  • Dòng đầu tiên của constructor lớp con LUÔN gọi super(...) (nếu không viết, compiler tự chèn super()).\n  • Thứ tự chạy: Static block Cha → Static block Con → Instance block Cha → Constructor Cha → Instance block Con → Constructor Con!",
            "Overloading (Nạp chồng — Compile-time) vs Overriding (Ghi đè — Runtime):\n  • Overloading: Cùng tên hàm, KHÁC kiểu/số lượng/thứ tự tham số (chỉ khác kiểu trả về → LỖI BIÊN DỊCH!).\n  • Overriding: Ở lớp con, cùng tên + cùng tham số + Access Modifier RỘNG HƠN HOẶC BẰNG lớp cha + kiểu trả về giống hoặc là lớp con của kiểu trả về cha (Covariant Return Type) + không ném thêm Checked Exception mới."
          ]
        },
        {
          heading: "3.3 – 3.4: Đa hình (Polymorphism), Abstract Class & Interface",
          items: [
            "SIÊU BẪY FE — Dynamic Binding khi Parent p = new Child():\n  • Gọi Instance Method (p.display()): Chạy hàm của CHILD (Runtime Polymorphism)!\n  • Truy cập Field (p.x) hoặc gọi Static Method (p.staticShow()): Lấy của PARENT (Compile-time Binding — static method chỉ là Method Hiding, KHÔNG phải Overriding!).",
            "Upcasting vs Downcasting:\n  • Upcasting (Parent p = new Child();): Luôn hợp lệ, tự động.\n  • Downcasting (Child c = (Child) p;): Phải ép kiểu tường minh. Nếu đối tượng thật bên dưới KHÔNG phải Child (ví dụ Parent p = new Parent(); Child c = (Child) p;) → Compile OK nhưng chạy sẽ văng ClassCastException! Luôn kiểm tra bằng instanceof trước khi ép.",
            "Abstract Class vs Interface:\n  • Abstract Class: Dùng từ khóa abstract, CÓ constructor (để lớp con gọi super()), có thể chứa cả method thường lẫn abstract method, biến instance bình thường.\n  • Interface: KHÔNG có constructor; mọi field mặc định public static final; mọi method không thân mặc định public abstract; từ Java 8 có thêm default method (có thân) và static method."
          ]
        }
      ],
      examNote: "Mẹo PE Q2: Class con SpecX extends X luôn gọi super(...) trong constructor, dùng super.get...() hoặc super.set...() nếu thuộc tính lớp cha là private, và override toString() đúng chuẩn dấu phẩy/khoảng trắng của test case!"
    },
    {
      id: "pro_ch4",
      title: "Chương 4: Exception Handling — Xử Lý Ngoại Lệ",
      badge: "Trọng tâm FE (~6 câu)",
      summary: "Throwable, Checked vs Unchecked, try-catch-finally với return, throw vs throws & Custom Exception.",
      blocks: [
        {
          heading: "4.1 – 4.2: Phân loại Ngoại lệ (Checked vs Unchecked)",
          items: [
            "Cây phân cấp:\n  • Throwable → Error (OutOfMemoryError, StackOverflowError — lỗi hệ thống JVM).\n  • Throwable → Exception → RuntimeException (Unchecked — không bắt buộc xử lý khi biên dịch) và các Exception khác (Checked — BẮT BUỘC try-catch hoặc khai báo throws!).",
            "Các Unchecked Exception (RuntimeException) hay gặp nhất:\n  • NullPointerException (gọi hàm trên biến null)\n  • ArithmeticException (chia số nguyên cho 0 — lưu ý: 5.0 / 0.0 với double KHÔNG ném exception mà ra Infinity!)\n  • ArrayIndexOutOfBoundsException / StringIndexOutOfBoundsException\n  • ClassCastException (ép kiểu sai)\n  • NumberFormatException (Integer.parseInt(\"abc\"))",
            "Các Checked Exception hay gặp nhất: IOException, FileNotFoundException, SQLException, ClassNotFoundException, ParseException."
          ]
        },
        {
          heading: "4.3 – 4.4: Quy tắc try-catch-finally, throw vs throws",
          items: [
            "Một khối try bắt buộc đi kèm ít nhất 1 catch HOẶC 1 finally (try-finally không có catch hoàn toàn HỢP LỆ!).",
            "Thứ tự nhiều khối catch: Lớp CON phải đặt TRƯỚC lớp CHA (VD: catch (FileNotFoundException e) trước catch (IOException e)). Đặt ngược lại → Lỗi biên dịch!",
            "Khối finally LUÔN được thực thi dù có lỗi hay không, kể cả khi trong try hoặc catch có lệnh return! Chỉ KHÔNG chạy khi gọi System.exit(0). Nếu finally có return x; thì giá trị x sẽ GHI ĐÈ giá trị return trước đó!",
            "throw (không s — dùng trong thân hàm để ném 1 đối tượng lỗi: throw new IllegalArgumentException(\"Sai\");) vs throws (có s — đặt ở đầu hàm để đẩy trách nhiệm xử lý lên hàm gọi: void read() throws IOException)."
          ]
        }
      ],
      examNote: "Bẫy FE cực hay ra: Trong try có return 1; trong finally có return 2; ⇒ Hàm trả về 2! Còn nếu try có int x = 1; return x; và finally sửa x = 2; (không có return trong finally) ⇒ Hàm VẪN trả về 1 (vì giá trị trả về 1 đã được lưu tạm trước khi vào finally)!"
    },
    {
      id: "pro_ch5",
      title: "Chương 5: Strings, Arrays & Java Collections Framework",
      badge: "Siêu Trọng tâm FE & PE Q3–Q4 (~9 câu)",
      summary: "String Pool, StringBuilder/Buffer, ArrayList/LinkedList/HashSet/TreeSet/HashMap, Comparable vs Comparator & equals/hashCode.",
      blocks: [
        {
          heading: "5.1: String, StringBuilder & StringBuffer (Cốt lõi PE Q4)",
          items: [
            "String là Immutable (bất biến): Mọi hàm như s.concat(\"a\"), s.toUpperCase(), s.replace(...) KHÔNG làm thay đổi chuỗi gốc s mà trả về một chuỗi mới! Phải gán lại: s = s.toUpperCase();.",
            "String Pool: String s1 = \"Java\"; String s2 = \"Java\"; ⇒ s1 == s2 là TRUE. Nhưng String s3 = new String(\"Java\"); ⇒ s1 == s3 là FALSE (khác địa chỉ Heap), s1.equals(s3) là TRUE!",
            "So sánh 3 lớp chuỗi:\n  • String: Bất biến, an toàn nhưng nối chuỗi trong vòng lặp rất tốn bộ nhớ.\n  • StringBuilder: Thay đổi trực tiếp (mutable), NHANH NHẤT, không synchronized (dùng cho đơn luồng, có hàm .reverse() cực tiện cho PE Q4!).\n  • StringBuffer: Mutable, có synchronized (an toàn đa luồng — thread-safe), chậm hơn StringBuilder một chút."
          ]
        },
        {
          heading: "5.2 – 5.3: Collections (List, Set, Map) & Sắp xếp (Cốt lõi PE Q3)",
          items: [
            "List (Có chỉ số index, cho phép trùng lặp, cho phép null):\n  • ArrayList: Mảng động, truy xuất get(i) cực nhanh O(1), chèn/xóa giữa chậm O(n).\n  • LinkedList: Danh sách liên kết đôi, thêm/xóa đầu cuối nhanh O(1), truy xuất get(i) chậm O(n).",
            "Set (KHÔNG cho phần tử trùng lặp):\n  • HashSet: Dựa trên HashMap, cực nhanh O(1), KHÔNG giữ thứ tự, cho phép tối đa 1 phần tử null.\n  • LinkedHashSet: Giữ đúng thứ tự chèn vào.\n  • TreeSet: Tự động sắp xếp tăng dần (Red-Black Tree O(log n)), KHÔNG cho phép null (văng NullPointerException!).",
            "Map (Lưu cặp Key → Value, Key duy nhất; KHÔNG kế thừa interface Collection!):\n  • HashMap: Không giữ thứ tự, cho phép 1 key null và nhiều value null, không synchronized (khác Hashtable: synchronized và cấm mọi null).\n  • TreeMap: Tự sắp xếp theo Key tăng dần, KHÔNG cho phép key null.",
            "Comparable vs Comparator (BẮT BUỘC thuộc cho PE Q3!):\n  • Comparable<T>: Cài ngay trong class (implements Comparable<T>), override compareTo(T o).\n  • Comparator<T>: Viết ngoài bằng Lambda/Anonymous class: Collections.sort(t, (a, b) -> ...); sắp xếp tăng dần (a - b), giảm dần (b - a), hoặc Double.compare(a.p, b.p), a.name.compareTo(b.name)."
          ]
        }
      ],
      examNote: "Mẹo PE Q3: Nếu đề yêu cầu 'sắp xếp 5 phần tử đầu tiên' hoặc 'sắp xếp từ phần tử thứ 2 đến thứ 5', chỉ cần gọi Collections.sort(t.subList(start, endExclusive), comparator) — siêu gọn trong 3 dòng code!"
    },
    {
      id: "pro_ch6",
      title: "Chương 6: Java I/O Streams, File Handling & Serialization",
      badge: "Trọng tâm FE (~7 câu)",
      summary: "Byte Streams vs Character Streams, BufferedReader/PrintWriter, File Class, Serializable & từ khóa transient.",
      blocks: [
        {
          heading: "6.1 – 6.2: Byte Streams vs Character Streams",
          items: [
            "2 họ luồng I/O chính trong java.io:\n  • Byte Streams (8-bit — cho file nhị phân như ảnh, video, PDF): Lớp trừu tượng gốc InputStream & OutputStream. Các lớp con hay hỏi: FileInputStream, FileOutputStream, BufferedInputStream, DataInputStream (đọc int/double/UTF), ObjectInputStream.",
            "• Character Streams (16-bit Unicode — cho file văn bản text): Lớp trừu tượng gốc Reader & Writer. Các lớp con hay hỏi: FileReader, FileWriter, BufferedReader (đọc từng dòng bằng readLine() — trả về null khi hết file!), PrintWriter (ghi từng dòng bằng println()).",
            "Cầu nối Byte ↔ Character: InputStreamReader (chuyển InputStream → Reader) và OutputStreamWriter (chuyển OutputStream → Writer). Ví dụ: new BufferedReader(new InputStreamReader(System.in)).",
            "Lớp java.io.File: Đại diện cho đường dẫn file/thư mục. Lưu ý: new File(\"a.txt\") CHƯA tạo file vật lý trên đĩa! Phải gọi createNewFile() hoặc mở bằng FileWriter/FileOutputStream."
          ]
        },
        {
          heading: "6.3: Serialization (Tuần tự hóa) & Từ khóa transient",
          items: [
            "Serialization biến trạng thái của một Object trên RAM thành luồng byte để lưu ra file (ObjectOutputStream.writeObject()) hoặc truyền qua mạng; Deserialization khôi phục lại Object (ObjectInputStream.readObject()).",
            "Để Serialize được, class BẮT BUỘC phải implements java.io.Serializable (nếu không sẽ ném NotSerializableException!). Serializable là Marker Interface (interface rỗng không có phương thức nào).",
            "Biến nào KHÔNG được Serialize?\n  1. Biến đánh dấu từ khóa transient (VD: private transient String password;) → khi đọc lại sẽ là null (hoặc 0 / false).\n  2. Biến static (vì thuộc về Class chứ không thuộc trạng thái riêng của từng Object)."
          ]
        }
      ],
      examNote: "Mẹo nhớ nhanh FE Ch.6: Tên lớp tận cùng bằng InputStream/OutputStream ⇒ Byte Stream (8-bit); tận cùng bằng Reader/Writer ⇒ Character Stream (16-bit). Hỏi 'Read a line of text' ⇒ BufferedReader.readLine()!"
    }
  ],

  peTemplates: [
    {
      id: "pe_q1",
      badge: "PE Q1 • 2.0 điểm • 10 phút",
      title: "Q1: Encapsulation — Tạo Class, Constructor, Getter biến đổi & Setter có điều kiện",
      summary: "Dạng dễ ăn trọn 2 điểm nhất! Đề cho 1 class (VD: Book, Engine, House, Desert) với 2 thuộc tính private, yêu cầu viết constructor rỗng & có tham số, getter biến đổi chuỗi/số và setter cập nhật theo công thức.",
      tips: [
        "Kiểm tra đúng tên class, tên thuộc tính và kiểu dữ liệu (String, int, double).",
        "Không sửa bất kỳ dòng nào trong file Main.java của đề!",
        "Đọc kỹ getter: hay yêu cầu viết hoa ký tự đầu/cuối, lấy 2-3 ký tự đầu (substring(0, 3)), hoặc đảo chuỗi.",
        "Kiểm tra điều kiện độ dài chuỗi trước khi dùng substring để tránh StringIndexOutOfBoundsException."
      ],
      code: `public class Engine {
    private String designer;
    private int power;

    // 1. Default constructor (BẮT BUỘC PHẢI CÓ)
    public Engine() {
    }

    // 2. Parameterized constructor
    public Engine(String designer, int power) {
        this.designer = designer;
        this.power = power;
    }

    // 3. Getter có biến đổi (VD: trả về 3 ký tự đầu viết thường)
    public String getDesigner() {
        if (designer == null || designer.length() < 3) {
            return designer == null ? "" : designer.toLowerCase();
        }
        return designer.substring(0, 3).toLowerCase();
    }

    public int getPower() {
        return power;
    }

    // 4. Setter có công thức (VD: gán power mới hoặc kiểm tra điều kiện)
    public void setPower(int power) {
        this.power = power;
    }

    public void setDesigner(String designer) {
        this.designer = designer;
    }
}`
    },
    {
      id: "pe_q2",
      badge: "PE Q2 • 3.0 điểm • 15 phút",
      title: "Q2: Inheritance & Overriding — Class Con (Spec...) kế thừa Class Cha",
      summary: "Tạo lớp con SpecX extends X có thêm 1 thuộc tính mới, gọi super(...), override toString(), viết setData() (chèn/cắt/thay chuỗi) và getValue() (tính giá trị theo điều kiện).",
      tips: [
        "Dòng đầu constructor con PHẢI gọi super(param1, param2); rồi mới gán thuộc tính riêng.",
        "Thuộc tính lớp cha là private ⇒ PHẢI đọc/ghi thông qua super.get...() và super.set...().",
        "Hàm toString() phải đúng từng dấu phẩy và khoảng trắng (VD: super.toString() + \", \" + type).",
        "Nếu setData() yêu cầu chèn chuỗi vào vị trí k: dùng s.substring(0, k) + insertStr + s.substring(k)."
      ],
      code: `public class SpecCar extends Car {
    private int type;

    public SpecCar() {
        super();
    }

    public SpecCar(String maker, int price, int type) {
        super(maker, price);
        this.type = type;
    }

    // Override toString(): nối thêm thuộc tính con đúng định dạng đề
    @Override
    public String toString() {
        return super.getMaker() + ", " + super.getPrice() + ", " + this.type;
    }

    // Ví dụ setData(): Chèn "XZ" vào đầu maker và tăng price thêm 20
    public void setData() {
        super.setMaker("XZ" + super.getMaker());
        super.setPrice(super.getPrice() + 20);
    }

    // Ví dụ getValue(): Nếu type < 7 cộng 10, ngược lại cộng 15
    public int getValue() {
        int inc = (this.type < 7) ? 10 : 15;
        return super.getPrice() + inc;
    }
}`
    },
    {
      id: "pe_q3",
      badge: "PE Q3 • 3.0 điểm • 30 phút",
      title: "Q3: Collections (List<T>) — Implement Interface f1 (Đếm/Tính), f2 (Sửa/Xóa/Đảo), f3 (Sort/Sublist Sort)",
      summary: "Câu phân loại điểm cao! Implement interface với 3 hàm f1, f2, f3 thao tác trên List<T>. Hay ra nhất: tính trung bình/đếm, hoán đổi phần tử min-max đầu tiên, đảo ngược 1 đoạn, và sắp xếp toàn bộ hoặc 1 đoạn con (sublist) theo 2 tiêu chí.",
      tips: [
        "Trong f2: Khi xóa phần tử trong vòng lặp for, duyệt ngược (i = n-1 về 0) hoặc dùng break ngay sau khi xóa phần tử đầu tiên/thứ hai thỏa điều kiện.",
        "Trong f3: Muốn sắp xếp 1 đoạn con từ vị trí L đến R (bao gồm cả R), dùng t.subList(L, R + 1) — nhớ tham số thứ 2 của subList là EXCLUSIVE!",
        "Nếu đề yêu cầu 'sắp xếp các phần tử thỏa điều kiện X nhưng giữ nguyên vị trí các phần tử còn lại': lưu riêng các phần tử thỏa X vào 1 list phụ, sort list phụ rồi gán ngược lại đúng các index đã lưu!",
        "So sánh số dùng Integer.compare(a, b) / Double.compare(a, b); so sánh chuỗi dùng s1.compareTo(s2)."
      ],
      code: `import java.util.*;

public class MyCar implements ICar {

    // f1: Ví dụ tính giá trung bình (làm tròn xuống int) các xe trong list
    @Override
    public int f1(List<Car> t) {
        if (t == null || t.isEmpty()) return 0;
        int sum = 0;
        for (Car c : t) {
            sum += c.getRate();
        }
        return sum / t.size();
    }

    // f2: Ví dụ hoán đổi vị trí phần tử có rate lớn nhất đầu tiên & nhỏ nhất đầu tiên
    @Override
    public void f2(List<Car> t) {
        if (t == null || t.size() < 2) return;
        int minIdx = 0, maxIdx = 0;
        for (int i = 1; i < t.size(); i++) {
            if (t.get(i).getRate() < t.get(minIdx).getRate()) minIdx = i;
            if (t.get(i).getRate() > t.get(maxIdx).getRate()) maxIdx = i;
        }
        Collections.swap(t, minIdx, maxIdx);
    }

    // f3: Sắp xếp theo maker tăng dần; nếu maker bằng nhau thì rate GIẢM dần
    @Override
    public void f3(List<Car> t) {
        Collections.sort(t, new Comparator<Car>() {
            @Override
            public int compare(Car o1, Car o2) {
                int cmp = o1.getMaker().compareTo(o2.getMaker());
                if (cmp != 0) return cmp;              // Tăng dần theo maker
                return Integer.compare(o2.getRate(), o1.getRate()); // Giảm dần theo rate
            }
        });
        // MẸO SORT ĐOẠN CON (VD: 5 phần tử đầu từ index 0..4):
        // Collections.sort(t.subList(0, Math.min(5, t.size())), comparator);
    }
}`
    },
    {
      id: "pe_q4",
      badge: "PE Q4 • 2.0 điểm • 25 phút",
      title: "Q4: String Processing — Implement IString f1 (Đếm/Tìm từ) & f2 (Biến đổi/Đảo/Thay thế chuỗi)",
      summary: "Xử lý chuỗi văn bản: tách từ bằng split(\"\\\\s+\"), kiểm tra số nguyên tố / chữ số / palindrome, tìm từ dài nhất đầu tiên, thay thế hoặc đảo ngược từ trong câu.",
      tips: [
        "LUÔN gọi str.trim().split(\"\\\\s+\") để tách từ an toàn kể cả khi có nhiều dấu cách liên tiếp.",
        "Kiểm tra Palindrome siêu nhanh: w.equals(new StringBuilder(w).reverse().toString()).",
        "Đếm chữ số trong từ: dùng Character.isDigit(c); kiểm tra chữ cái: Character.isLetter(c).",
        "Khi ghép mảng từ thành chuỗi kết quả: dùng String.join(\" \", words) để không bao giờ bị dư dấu cách ở cuối!"
      ],
      code: `public class MyString implements IString {

    // Hàm phụ: Kiểm tra chuỗi đối xứng (Palindrome)
    private boolean isPalindrome(String s) {
        return s.length() > 1 && s.equals(new StringBuilder(s).reverse().toString());
    }

    // Hàm phụ: Kiểm tra số nguyên tố
    private boolean isPrime(int n) {
        if (n < 2) return false;
        for (int i = 2; i * i <= n; i++) {
            if (n % i == 0) return false;
        }
        return true;
    }

    // f1: Ví dụ đếm số từ chứa ít nhất 1 chữ số nguyên tố (2, 3, 5, 7)
    @Override
    public int f1(String str) {
        if (str == null || str.trim().isEmpty()) return 0;
        String[] words = str.trim().split("\\\\s+");
        int count = 0;
        for (String w : words) {
            for (int i = 0; i < w.length(); i++) {
                char c = w.charAt(i);
                if (Character.isDigit(c) && isPrime(c - '0')) {
                    count++;
                    break;
                }
            }
        }
        return count;
    }

    // f2: Ví dụ đảo ngược từ dài nhất đầu tiên trong chuỗi
    @Override
    public String f2(String str) {
        if (str == null || str.trim().isEmpty()) return "";
        String[] words = str.trim().split("\\\\s+");
        int maxIdx = 0;
        for (int i = 1; i < words.length; i++) {
            if (words[i].length() > words[maxIdx].length()) {
                maxIdx = i;
            }
        }
        words[maxIdx] = new StringBuilder(words[maxIdx]).reverse().toString();
        return String.join(" ", words);
    }
}`
    }
  ],

  flashcards: [
    {
      id: 1,
      category: "Ch.1: Java Basics",
      term: "Đoạn code: `byte b = 10; b = b + 1;` khi biên dịch trong Java sẽ xảy ra điều gì?",
      options: [
        "Chạy bình thường và b có giá trị 11",
        "Lỗi biên dịch (Compile Error) vì b + 1 tự động thăng hạng lên kiểu int",
        "Lỗi lúc chạy (Runtime Exception: ArithmeticException)",
        "b bị tràn số về -128"
      ],
      correctIndex: 1,
      answer: "Trong Java, mọi phép toán số học trên byte, short, char đều tự động thăng hạng (numeric promotion) lên kiểu int ⇒ `b + 1` có kiểu int nên không gán ngược lại vào biến `byte b` được (phải ép kiểu `(byte)(b + 1)`). Ngược lại, `b += 1;` hoặc `b++;` lại biên dịch thành công vì Java tự ép kiểu ngầm!"
    },
    {
      id: 2,
      category: "Ch.1: Java Basics",
      term: "Kết quả in ra của lệnh `System.out.println(1 + 2 + \"3\" + 4 + 5);` trong Java là gì?",
      options: [
        "15",
        "12345",
        "3345",
        "339"
      ],
      correctIndex: 2,
      answer: "Java đánh giá toán tử `+` từ TRÁI sang PHẢI:\n• `1 + 2` = `3` (cộng hai số int)\n• `3 + \"3\"` = `\"33\"` (gặp String → nối chuỗi)\n• `\"33\" + 4` = `\"334\"` → `\"334\" + 5` = `\"3345\"`!"
    },
    {
      id: 3,
      category: "Ch.2: OOP & Static",
      term: "Khi nào trình biên dịch Java TỰ ĐỘNG tạo Default Constructor (constructor không tham số) cho một class?",
      options: [
        "Luôn luôn tạo cho mọi class kể cả khi ta đã viết constructor có tham số",
        "CHỈ tạo khi ta KHÔNG định nghĩa bất kỳ constructor nào trong class đó",
        "Chỉ tạo khi class được khai báo là abstract",
        "Chỉ tạo khi class có ít nhất 1 biến static"
      ],
      correctIndex: 1,
      answer: "Java chỉ tự tạo default constructor `ClassName() {}` khi bạn KHÔNG viết bất kỳ constructor nào. Ngay khi bạn tự viết 1 constructor có tham số (VD: `Student(String name)`), Java sẽ KHÔNG tự tạo `Student()` nữa!"
    },
    {
      id: 4,
      category: "Ch.2: OOP & Static",
      term: "Access Modifier nào cho phép truy cập từ: cùng Class, cùng Package, và Lớp con (Subclass) nằm ở Package KHÁC?",
      options: [
        "private",
        "default (package-private)",
        "protected",
        "static"
      ],
      correctIndex: 2,
      answer: "Thứ tự mở rộng Access Modifier: `private` (cùng class) < `default` (cùng package) < `protected` (cùng package + subclass khác package) < `public` (mọi nơi)."
    },
    {
      id: 5,
      category: "Ch.2: OOP & Static",
      term: "Kết quả của `Integer a = 100, b = 100; Integer c = 200, d = 200; System.out.print((a == b) + \" \" + (c == d));` là gì?",
      options: [
        "true true",
        "false false",
        "true false",
        "false true"
      ],
      correctIndex: 2,
      answer: "Java duy trì bộ đệm Integer Cache cho các giá trị từ `-128` đến `127`. Do đó `100` dùng chung 1 đối tượng trong pool (`a == b` là `true`), còn `200` nằm ngoài vùng cache nên tạo 2 đối tượng mới trên Heap (`c == d` là `false`). Luôn dùng `.equals()` để so sánh Wrapper!"
    },
    {
      id: 6,
      category: "Ch.3: Inheritance & Polymorphism",
      term: "Khi khai báo `Parent p = new Child();` (cả Parent và Child đều có cùng tên biến `x` và cùng hàm instance `show()`), điều gì xảy ra khi gọi `p.x` và `p.show()`?",
      options: [
        "Cả p.x và p.show() đều lấy của Child",
        "Cả p.x và p.show() đều lấy của Parent",
        "p.x lấy của Parent (compile-time), còn p.show() chạy của Child (runtime dynamic binding)",
        "p.x lấy của Child, còn p.show() chạy của Parent"
      ],
      correctIndex: 2,
      answer: "Siêu bẫy FE PRO192: Trong Java, chỉ có **Non-static (Instance) Method** mới áp dụng Dynamic Binding (chạy theo đối tượng thật lúc runtime = `Child`). Còn **Field (biến thuộc tính)** và **Static Method** luôn gắn theo kiểu khai báo lúc biên dịch (`Parent`)!"
    },
    {
      id: 7,
      category: "Ch.3: Inheritance & Polymorphism",
      term: "Khi lớp con Override một method `protected void run()` của lớp cha, lớp con ĐƯỢC PHÉP khai báo Access Modifier nào?",
      options: [
        "Chỉ private hoặc default",
        "protected hoặc public (bằng hoặc rộng hơn lớp cha)",
        "Bất kỳ modifier nào miễn trùng tên hàm",
        "Chỉ được dùng đúng private"
      ],
      correctIndex: 1,
      answer: "Quy tắc Overriding: Access Modifier ở lớp con KHÔNG được thu hẹp phạm vi truy cập so với lớp cha — phải **bằng hoặc rộng hơn** (`protected` → `protected` hoặc `public`). Nếu hạ xuống `default` hoặc `private` sẽ báo Compile Error!"
    },
    {
      id: 8,
      category: "Ch.4: Exceptions",
      term: "Trong Java, ngoại lệ nào sau đây là CHECKED Exception (bắt buộc phải dùng try-catch hoặc khai báo throws mới biên dịch được)?",
      options: [
        "NullPointerException",
        "ArithmeticException",
        "IOException",
        "ArrayIndexOutOfBoundsException"
      ],
      correctIndex: 2,
      answer: "`IOException` (cùng `FileNotFoundException`, `SQLException`, `ClassNotFoundException`) là **Checked Exception** — trình biên dịch bắt buộc phải xử lý. Còn `NullPointerException`, `ArithmeticException`, `ArrayIndexOutOfBoundsException` đều là con của `RuntimeException` (**Unchecked**)."
    },
    {
      id: 9,
      category: "Ch.4: Exceptions",
      term: "Nếu một hàm có `try { return 1; } finally { return 2; }` thì giá trị hàm trả về là bao nhiêu?",
      options: [
        "1",
        "2",
        "Lỗi biên dịch vì có 2 lệnh return",
        "Ném RuntimeException"
      ],
      correctIndex: 1,
      answer: "Khối `finally` LUÔN thực thi trước khi hàm thoát ra ngoài (kể cả khi `try` đã gặp lệnh `return 1`). Vì `finally` cũng có lệnh `return 2`, giá trị `2` sẽ ghi đè lên giá trị `1` trước đó ⇒ hàm trả về `2`!"
    },
    {
      id: 10,
      category: "Ch.5: Strings & Collections",
      term: "Trong các cấu trúc Collection sau, lớp nào KHÔNG cho phép phần tử trùng lặp và TỰ ĐỘNG sắp xếp tăng dần (nhưng cấm phần tử null)?",
      options: [
        "ArrayList",
        "HashSet",
        "TreeSet",
        "LinkedHashSet"
      ],
      correctIndex: 2,
      answer: "`TreeSet` (cài đặt bằng cây đỏ-đen Red-Black Tree) không chứa phần tử trùng lặp, tự động sắp xếp tăng dần theo `Comparable`/`Comparator` và KHÔNG cho phép `null` (thêm `null` sẽ ném `NullPointerException`)."
    },
    {
      id: 11,
      category: "Ch.5: Strings & Collections",
      term: "Sự khác biệt cốt lõi giữa `Comparable` và `Comparator` khi sắp xếp đối tượng trong Java là gì?",
      options: [
        "Comparable định nghĩa compareTo(T o) bên trong chính class (1 thứ tự tự nhiên); Comparator định nghĩa compare(T o1, T o2) tách rời (linh hoạt nhiều tiêu chí)",
        "Comparator phải viết bên trong class, còn Comparable viết bên ngoài",
        "Comparable chỉ dùng cho String, còn Comparator chỉ dùng cho số nguyên",
        "Cả hai hoàn toàn giống hệt nhau và đều dùng phương thức sort()"
      ],
      correctIndex: 0,
      answer: "• `Comparable<T>` (`java.lang`): implement trong chính class cần sort, viết `int compareTo(T other)`.\n• `Comparator<T>` (`java.util`): tách riêng khỏi class, viết `int compare(T o1, T o2)` — cực kỳ linh hoạt cho bài PE Q3 f3 khi cần sort nhiều tiêu chí khác nhau!"
    },
    {
      id: 12,
      category: "Ch.6: Java I/O & Serialization",
      term: "Trong Java Serialization, từ khóa nào dùng để đánh dấu một biến thành viên KHÔNG được lưu lại khi tuần tự hóa đối tượng ra luồng byte?",
      options: [
        "volatile",
        "transient",
        "native",
        "abstract"
      ],
      correctIndex: 1,
      answer: "Từ khóa `transient` báo cho JVM bỏ qua trường đó (ví dụ mật khẩu, dữ liệu tạm) khi ghi bằng `ObjectOutputStream`. Khi đọc lại (Deserialize), biến `transient` nhận giá trị mặc định (`null`, `0`, hoặc `false`). Ngoài ra biến `static` cũng không được serialize."
    }
  ],

  quizQuestions: [
    // ==================== CHƯƠNG 1: JAVA BASICS & OPERATORS (15 CÂU) ====================
    {
      id: 101,
      topic: "Ch.1: Java Basics & Operators",
      question: "[FE PRO192] What is the output of the following Java code?\n\nint x = 5;\nint y = x++ + ++x;\nSystem.out.println(x + \" \" + y);",
      options: [
        "7 11",
        "7 12",
        "6 11",
        "6 12"
      ],
      answer: 1,
      explanation: "Đánh giá từ trái sang phải:\n1. `x++`: lấy giá trị hiện tại `5`, sau đó tăng `x` lên `6`.\n2. `++x`: tăng `x` từ `6` lên `7`, rồi lấy giá trị `7`.\n⇒ `y = 5 + 7 = 12` và cuối cùng `x = 7`. Kết quả in ra: `7 12`."
    },
    {
      id: 102,
      topic: "Ch.1: Java Basics & Operators",
      question: "[FE PRO192] Which of the following variable declarations causes a COMPILE-TIME ERROR in Java?",
      options: [
        "double d = 10;",
        "float f = 10.5;",
        "long l = 100L;",
        "char c = 65;"
      ],
      answer: 1,
      explanation: "Số thực mặc định trong Java có kiểu `double` (64-bit). Do đó `float f = 10.5;` cố gán `double` vào `float` (32-bit) mà không ép kiểu ⇒ LỖI BIÊN DỊCH! Phải viết `float f = 10.5f;`. Lưu ý `char c = 65;` hoàn toàn hợp lệ (tương ứng ký tự `'A'`)."
    },
    {
      id: 103,
      topic: "Ch.1: Java Basics & Operators",
      question: "[FE PRO192] What is the output of this code?\n\nint a = 1, b = 2;\nif (a > 5 && ++b > 2) {\n    a = 10;\n}\nSystem.out.println(a + \" \" + b);",
      options: [
        "1 2",
        "1 3",
        "10 3",
        "10 2"
      ],
      answer: 0,
      explanation: "Toán tử `&&` là short-circuit (đoản mạch): vì vế trái `a > 5` (`1 > 5`) đã là `false`, Java DỪNG NGAY và KHÔNG thực thi vế phải `++b > 2`. Do đó `b` vẫn giữ nguyên là `2` ⇒ In ra `1 2`."
    },
    {
      id: 104,
      topic: "Ch.1: Java Basics & Operators",
      question: "[FE PRO192] Compare with the previous question — what is the output if `&` is used instead of `&&`?\n\nint a = 1, b = 2;\nif (a > 5 & ++b > 2) {\n    a = 10;\n}\nSystem.out.println(a + \" \" + b);",
      options: [
        "1 2",
        "1 3",
        "10 3",
        "Compile Error"
      ],
      answer: 1,
      explanation: "Khác với `&&`, toán tử đơn `&` với kiểu boolean KHÔNG đoản mạch — nó LUÔN thực thi cả hai vế! Vì vậy `++b` vẫn chạy làm `b` tăng từ `2` lên `3`. Cả biểu thức vẫn `false` nên `a` giữ nguyên `1` ⇒ In ra `1 3`."
    },
    {
      id: 105,
      topic: "Ch.1: Java Basics & Operators",
      question: "[FE PRO192] What is the output of the following switch statement?\n\nint n = 2;\nswitch (n) {\n    case 1: System.out.print(\"A\");\n    case 2: System.out.print(\"B\");\n    case 3: System.out.print(\"C\"); break;\n    default: System.out.print(\"D\");\n}",
      options: [
        "B",
        "BC",
        "BCD",
        "ABCD"
      ],
      answer: 1,
      explanation: "Hiện tượng Fall-through trong `switch`: `n = 2` khớp `case 2` nên in `B`, nhưng vì `case 2` KHÔNG có lệnh `break;` nên nó chạy tiếp xuống `case 3` in `C`, sau đó mới gặp `break;` và thoát ⇒ Kết quả là `BC`."
    },
    {
      id: 106,
      topic: "Ch.1: Java Basics & Operators",
      question: "[FE PRO192] Which data type is NOT supported by the `switch` statement in Java?",
      options: [
        "String",
        "char",
        "long",
        "byte"
      ],
      answer: 2,
      explanation: "`switch` trong Java hỗ trợ: `byte`, `short`, `char`, `int` (cùng Wrapper tương ứng), `enum` và `String` (từ Java 7). Nó KHÔNG hỗ trợ `long`, `float`, `double` và `boolean`!"
    },
    {
      id: 107,
      topic: "Ch.1: Java Basics & Operators",
      question: "[FE PRO192] What happens when you compile and run the following code?\n\nbyte b = 127;\nb++;\nSystem.out.println(b);",
      options: [
        "Compile Error because b++ produces int",
        "Runtime ArithmeticException (Overflow)",
        "Prints 128",
        "Prints -128"
      ],
      answer: 3,
      explanation: "Hai bẫy cùng lúc:\n1. `b++` (khác `b = b + 1`) tự động ép kiểu ngầm `(byte)(b + 1)` nên BIÊN DỊCH HỢP LỆ.\n2. Kiểu `byte` có miền giá trị `[-128..127]`, nên khi `127` tăng thêm `1` sẽ tràn số vòng (two's complement overflow) về `-128`!"
    },
    {
      id: 108,
      topic: "Ch.1: Java Basics & Operators",
      question: "[FE PRO192] What is the output of:\n\nSystem.out.println('a' + 1);",
      options: [
        "a1",
        "b",
        "98",
        "Compile Error"
      ],
      answer: 2,
      explanation: "Ký tự `'a'` (nháy đơn `char`, KHÔNG phải chuỗi `\"a\"`) có mã ASCII/Unicode là `97`. Khi cộng với số nguyên `1`, `'a'` tự động nâng lên `int` ⇒ `97 + 1 = 98`! (Muốn in `'b'` phải ép kiểu `(char)('a' + 1)`)."
    },
    {
      id: 109,
      topic: "Ch.1: Java Basics & Operators",
      question: "[FE PRO192] What is the output of:\n\nboolean flag = false;\nif (flag = true) {\n    System.out.println(\"YES\");\n} else {\n    System.out.println(\"NO\");\n}",
      options: [
        "YES",
        "NO",
        "Compile Error",
        "Runtime Exception"
      ],
      answer: 0,
      explanation: "Bẫy cực kinh điển: `flag = true` là phép GÁN (không phải so sánh `==`), nhưng vì `flag` có kiểu `boolean` nên biểu thức gán trả về giá trị `true` — hoàn toàn hợp lệ trong điều kiện `if` ⇒ In ra `YES`! (Nếu là `int x; if (x = 1)` thì mới báo Compile Error)."
    },
    {
      id: 110,
      topic: "Ch.1: Java Basics & Operators",
      question: "[FE PRO192] What is the default value of elements in a newly created `int[] arr = new int[5];` array in Java?",
      options: [
        "null",
        "Garbage values (uninitialized memory)",
        "0",
        "-1"
      ],
      answer: 2,
      explanation: "Mảng trong Java luôn là một Object trên Heap nên các phần tử luôn được tự động khởi tạo giá trị mặc định: số nguyên là `0`, số thực là `0.0`, `boolean` là `false`, `char` là `'\\u0000'`, và kiểu tham chiếu (Object/String) là `null`."
    },
    {
      id: 111,
      topic: "Ch.1: Java Basics & Operators",
      question: "[FE PRO192] What is the output of the following code?\n\nint i = 0;\nfor (; i < 3; i++) {\n    if (i == 1) continue;\n    System.out.print(i);\n}\nSystem.out.print(i);",
      options: [
        "023",
        "0123",
        "022",
        "02"
      ],
      answer: 0,
      explanation: "• `i = 0`: in `0`\n• `i = 1`: gặp `continue` bỏ qua lệnh in, nhảy tới `i++`\n• `i = 2`: in `2`, sau đó `i++` tăng `i` lên `3`\n• `3 < 3` sai → thoát vòng lặp và in `i` cuối cùng là `3` ⇒ Tổng cộng in ra `023`."
    },
    {
      id: 112,
      topic: "Ch.1: Java Basics & Operators",
      question: "[FE PRO192] What is the size and range of the `char` primitive data type in Java?",
      options: [
        "8-bit signed (-128 to 127)",
        "16-bit unsigned (0 to 65,535)",
        "16-bit signed (-32,768 to 32,767)",
        "32-bit unsigned"
      ],
      answer: 1,
      explanation: "Khác với C/C++ (char 1 byte), `char` trong Java dùng chuẩn Unicode UTF-16 có kích thước **16-bit KHÔNG DẤU (unsigned)** từ `0` đến `65,535` (`2¹⁶ - 1`)."
    },
    {
      id: 113,
      topic: "Ch.1: Java Basics & Operators",
      question: "[FE PRO192] Which of the following is a VALID declaration of a Java `main` method that can be executed by the JVM?",
      options: [
        "public void main(String[] args)",
        "private static void main(String[] args)",
        "static public void main(String... args)",
        "public static int main(String[] args)"
      ],
      answer: 2,
      explanation: "JVM yêu cầu `main` phải có đủ `public`, `static`, `void` và nhận mảng `String[]` (hoặc varargs `String...`). Thứ tự giữa `public` và `static` có thể đổi chỗ (`static public void main(String... args)` hoàn toàn hợp lệ!)."
    },
    {
      id: 114,
      topic: "Ch.1: Java Basics & Operators",
      question: "[FE PRO192] What is the output of:\n\nint x = 10;\nSystem.out.println(x > 5 ? x < 8 ? \"A\" : \"B\" : \"C\");",
      options: [
        "A",
        "B",
        "C",
        "Compile Error"
      ],
      answer: 1,
      explanation: "Toán tử 3 ngôi lồng nhau: `x > 5` (`10 > 5`) là `true` → xét nhánh thứ nhất `x < 8 ? \"A\" : \"B\"`. Vì `10 < 8` là `false` ⇒ chọn `\"B\"`."
    },
    {
      id: 115,
      topic: "Ch.1: Java Basics & Operators",
      question: "[FE PRO192] Which statement about `varargs` (e.g., `void print(int a, String... b)`) in Java is TRUE?",
      options: [
        "A method can have multiple varargs parameters",
        "The varargs parameter MUST be the last parameter in the method signature",
        "Varargs cannot accept 0 arguments",
        "Varargs is converted to an ArrayList internally"
      ],
      answer: 1,
      explanation: "Mỗi phương thức chỉ được có tối đa **1 tham số varargs** và nó BẮT BUỘC phải đứng ở **vị trí cuối cùng** trong danh sách tham số. Bên trong hàm, varargs được Java xử lý như một mảng (`String[]`) và có thể nhận 0, 1 hoặc nhiều đối số."
    },

    // ==================== CHƯƠNG 2: CLASSES, OBJECTS, CONSTRUCTORS & STATIC (15 CÂU) ====================
    {
      id: 201,
      topic: "Ch.2: Classes, Objects & Static",
      question: "[FE PRO192] What happens when you compile the following class?\n\nclass Book {\n    String title;\n    Book(String t) { title = t; }\n}\npublic class Test {\n    public static void main(String[] args) {\n        Book b = new Book();\n    }\n}",
      options: [
        "Compiles and sets title to null",
        "Compiles and sets title to empty string",
        "Compile-time Error: constructor Book() is undefined",
        "Runtime NullPointerException"
      ],
      answer: 2,
      explanation: "Vì lớp `Book` đã tự định nghĩa một constructor có tham số `Book(String t)`, trình biên dịch Java KHÔNG tự sinh constructor mặc định `Book()` nữa ⇒ Lệnh `new Book()` gây lỗi biên dịch!"
    },
    {
      id: 202,
      topic: "Ch.2: Classes, Objects & Static",
      question: "[FE PRO192] What is the output of this code?\n\nclass Box { int v = 10; }\npublic class Main {\n    static void change(Box b) {\n        b.v = 20;\n        b = new Box();\n        b.v = 30;\n    }\n    public static void main(String[] args) {\n        Box x = new Box();\n        change(x);\n        System.out.println(x.v);\n    }\n}",
      options: [
        "10",
        "20",
        "30",
        "Compile Error"
      ],
      answer: 1,
      explanation: "Java truyền tham trị (Pass-by-Value) bản sao địa chỉ tham chiếu:\n1. `b.v = 20;` thay đổi trực tiếp trên đối tượng gốc mà `x` đang trỏ tới ⇒ `x.v` thành `20`.\n2. `b = new Box(); b.v = 30;` chỉ làm biến cục bộ `b` trỏ sang object mới, KHÔNG làm `x` đổi địa chỉ! ⇒ Cuối cùng `x.v` là `20`."
    },
    {
      id: 203,
      topic: "Ch.2: Classes, Objects & Static",
      question: "[FE PRO192] What is the output of the following code?\n\nclass Counter {\n    static int count = 0;\n    Counter() { count++; }\n}\npublic class Test {\n    public static void main(String[] args) {\n        new Counter();\n        new Counter();\n        Counter c = new Counter();\n        System.out.println(c.count);\n    }\n}",
      options: [
        "0",
        "1",
        "3",
        "Compile Error"
      ],
      answer: 2,
      explanation: "Biến `static int count` thuộc về Class và dùng CHUNG cho mọi đối tượng. Mỗi lần gọi `new Counter()`, constructor tăng `count` lên 1. Sau 3 lần tạo đối tượng, `count = 3`."
    },
    {
      id: 204,
      topic: "Ch.2: Classes, Objects & Static",
      question: "[FE PRO192] Which statement about a `static` method in Java is INCORRECT?",
      options: [
        "A static method can be called without creating an instance of the class",
        "A static method can access static variables directly",
        "A static method can use the `this` keyword to access instance variables",
        "A static method cannot be overridden in the true polymorphic sense"
      ],
      answer: 2,
      explanation: "SAI! Hàm `static` thuộc về Class chứ không gắn với đối tượng cụ thể nào nên **KHÔNG được phép dùng `this` hoặc `super`** và không thể truy cập trực tiếp biến/hàm non-static."
    },
    {
      id: 205,
      topic: "Ch.2: Classes, Objects & Static",
      question: "[FE PRO192] What is the output of this code?\n\nclass Demo {\n    static { System.out.print(\"S\"); }\n    { System.out.print(\"I\"); }\n    Demo() { System.out.print(\"C\"); }\n    public static void main(String[] args) {\n        new Demo();\n        new Demo();\n    }\n}",
      options: [
        "SICSIC",
        "SICIC",
        "ISCC",
        "SSCICI"
      ],
      answer: 1,
      explanation: "• Khối `static { ... }` chỉ chạy **DUY NHẤT 1 LẦN** khi nạp class ⇒ in `S`.\n• Mỗi khi gọi `new Demo()`, khối instance `{ ... }` chạy trước constructor ⇒ lần 1 in `IC`, lần 2 in `IC`.\n⇒ Tổng kết quả: `SICIC`!"
    },
    {
      id: 206,
      topic: "Ch.2: Classes, Objects & Static",
      question: "[FE PRO192] Which access modifiers are ALLOWED for a top-level (outer) class in Java?",
      options: [
        "public, protected, default, private",
        "Only public or default (no modifier)",
        "Only public or private",
        "Only public or protected"
      ],
      answer: 1,
      explanation: "Một top-level class (class ngoài cùng trong file `.java`) CHỈ được dùng `public` hoặc `default` (không ghi gì). Khai báo `private class A` hoặc `protected class A` ở top-level sẽ báo lỗi biên dịch! (Chỉ inner class mới dùng được `private`/`protected`)."
    },
    {
      id: 207,
      topic: "Ch.2: Classes, Objects & Static",
      question: "[FE PRO192] What happens with the following code?\n\nclass Person {\n    final StringBuilder name = new StringBuilder(\"An\");\n    void update() {\n        name.append(\"h\");\n    }\n}",
      options: [
        "Compile Error: cannot modify a final variable",
        "Runtime UnsupportedOperationException",
        "Compiles and runs fine; name becomes \"Anh\"",
        "Compiles but name remains \"An\""
      ],
      answer: 2,
      explanation: "Bẫy từ khóa `final` với Object reference: `final` chỉ cấm gán lại biến `name` trỏ sang đối tượng mới (`name = new StringBuilder(...)` → Lỗi), còn việc thay đổi NỘI DUNG bên trong đối tượng (`name.append(\"h\")`) hoàn toàn HỢP LỆ!"
    },
    {
      id: 208,
      topic: "Ch.2: Classes, Objects & Static",
      question: "[FE PRO192] What is the issue with the following method in class `Student`?\n\npublic class Student {\n    public void Student() {\n        System.out.println(\"Hello\");\n    }\n}",
      options: [
        "Compile Error because constructor cannot have void",
        "It compiles fine, but `void Student()` is a normal method, NOT a constructor",
        "It runs automatically whenever `new Student()` is called",
        "Runtime Error"
      ],
      answer: 1,
      explanation: "Bẫy kinh điển của đề FE: Một hàm trùng tên class nhưng có kiểu trả về (`void`) vẫn biên dịch hợp lệ, nhưng nó chỉ là **một method thông thường**, KHÔNG phải Constructor! Java vẫn tự tạo default constructor ẩn."
    },
    {
      id: 209,
      topic: "Ch.2: Classes, Objects & Static",
      question: "[FE PRO192] Where MUST a `this(...)` constructor call be placed inside another constructor?",
      options: [
        "Anywhere inside the constructor body",
        "As the very first statement in the constructor",
        "Right after super()",
        "At the very last line of the constructor"
      ],
      answer: 1,
      explanation: "Lệnh `this(...)` (gọi constructor khác trong cùng class) BẮT BUỘC phải là **câu lệnh đầu tiên** của constructor — do đó không thể vừa có `this(...)` vừa có `super(...)` trong cùng 1 constructor!"
    },
    {
      id: 210,
      topic: "Ch.2: Classes, Objects & Static",
      question: "[FE PRO192] What is Encapsulation (Tính đóng gói) best achieved by in Java?",
      options: [
        "Declaring all fields as public and methods as private",
        "Declaring fields as private and providing public getter/setter methods with validation",
        "Using only static variables in every class",
        "Making every class abstract"
      ],
      answer: 1,
      explanation: "Tính đóng gói (Encapsulation) che giấu dữ liệu nội bộ bằng cách đặt thuộc tính là `private` và cung cấp các hàm `public` getter/setter (có kiểm soát dữ liệu đầu vào) để truy xuất an toàn."
    },
    {
      id: 211,
      topic: "Ch.2: Classes, Objects & Static",
      question: "[FE PRO192] What is the output of:\n\nInteger x = 128;\nInteger y = 128;\nSystem.out.println((x == y) + \", \" + x.equals(y));",
      options: [
        "true, true",
        "false, true",
        "true, false",
        "false, false"
      ],
      answer: 1,
      explanation: "Integer Pool chỉ cache trong đoạn `[-128, 127]`. Giá trị `128` nằm ngoài vùng cache nên `x` và `y` là 2 đối tượng khác địa chỉ ⇒ `x == y` là `false`, còn `x.equals(y)` so sánh giá trị bên trong nên là `true`!"
    },
    {
      id: 212,
      topic: "Ch.2: Classes, Objects & Static",
      question: "[FE PRO192] In Java, what happens when a local variable inside a method is declared without initialization and then printed?\n\nvoid test() {\n    int x;\n    System.out.println(x);\n}",
      options: [
        "Prints 0",
        "Prints null",
        "Compile-time Error: variable x might not have been initialized",
        "Runtime Exception"
      ],
      answer: 2,
      explanation: "Khác với thuộc tính (instance/static fields) được tự gán giá trị mặc định `0/null/false`, **biến cục bộ (local variable)** trong hàm KHÔNG có giá trị mặc định — sử dụng trước khi gán sẽ gây lỗi biên dịch!"
    },
    {
      id: 213,
      topic: "Ch.2: Classes, Objects & Static",
      question: "[FE PRO192] Which statement is TRUE about Garbage Collection (GC) in Java?",
      options: [
        "Calling System.gc() guarantees immediate destruction of all unused objects",
        "An object becomes eligible for GC when no live thread holds a reachable reference to it",
        "Programmers must manually free objects using the delete keyword",
        "Local primitive variables are collected by the Garbage Collector"
      ],
      answer: 1,
      explanation: "Đối tượng trên Heap đủ điều kiện thu gom rác (eligible for GC) khi không còn tham chiếu sống nào trỏ tới nó. `System.gc()` chỉ mang tính **gợi ý** JVM chứ không đảm bảo chạy ngay lập tức."
    },
    {
      id: 214,
      topic: "Ch.2: Classes, Objects & Static",
      question: "[FE PRO192] Class A is in package `p1` with a `protected int k = 5;`. Class B is in package `p2` and `B extends A`. Inside Class B, which line is VALID?",
      options: [
        "A a = new A(); System.out.println(a.k);",
        "B b = new B(); System.out.println(b.k);",
        "Neither of them compiles",
        "Only if k is declared private"
      ],
      answer: 1,
      explanation: "Siêu bẫy `protected` khác package: Ở package `p2`, lớp con `B` CHỈ được truy cập thành viên `protected` thông qua **chính nó hoặc tham chiếu kiểu lớp con `B`** (`this.k` hoặc `b.k`), KHÔNG được truy cập thông qua tham chiếu trực tiếp kiểu lớp cha (`a.k` → Compile Error!)."
    },
    {
      id: 215,
      topic: "Ch.2: Classes, Objects & Static",
      question: "[FE PRO192] What is the output of:\n\nclass A {\n    int x = 1;\n    void setX(int x) { x = x; }\n    public static void main(String[] args) {\n        A a = new A();\n        a.setX(5);\n        System.out.println(a.x);\n    }\n}",
      options: [
        "5",
        "1",
        "0",
        "Compile Error"
      ],
      answer: 1,
      explanation: "Trong `setX(int x)`, tham số `x` che khuất thuộc tính `this.x` (variable shadowing). Câu lệnh `x = x;` chỉ tự gán tham số cho chính nó mà không đụng tới `this.x` ⇒ `a.x` vẫn là `1`!"
    },

    // ==================== CHƯƠNG 3: INHERITANCE, POLYMORPHISM, ABSTRACT & INTERFACE (18 CÂU) ====================
    {
      id: 301,
      topic: "Ch.3: Inheritance & Polymorphism",
      question: "[FE PRO192] What is the output of this classic Dynamic Binding question?\n\nclass Parent {\n    int x = 10;\n    void show() { System.out.print(\"P\"); }\n}\nclass Child extends Parent {\n    int x = 20;\n    void show() { System.out.print(\"C\"); }\n}\npublic class Test {\n    public static void main(String[] args) {\n        Parent p = new Child();\n        System.out.print(p.x);\n        p.show();\n    }\n}",
      options: [
        "20C",
        "10P",
        "10C",
        "20P"
      ],
      answer: 2,
      explanation: "Quy tắc vàng Polymorphism:\n• `p.x`: Truy cập **biến thuộc tính (Field)** dùng Compile-time Binding theo kiểu khai báo `Parent` ⇒ `10`.\n• `p.show()`: Gọi **Instance Method** dùng Runtime Dynamic Binding theo đối tượng thực `Child` ⇒ `C`.\n⇒ In ra `10C`!"
    },
    {
      id: 302,
      topic: "Ch.3: Inheritance & Polymorphism",
      question: "[FE PRO192] What is the output when calling a `static` method on a polymorphic reference?\n\nclass A {\n    static void hi() { System.out.print(\"A\"); }\n}\nclass B extends A {\n    static void hi() { System.out.print(\"B\"); }\n}\npublic class Test {\n    public static void main(String[] args) {\n        A obj = new B();\n        obj.hi();\n    }\n}",
      options: [
        "B",
        "A",
        "AB",
        "Compile Error"
      ],
      answer: 1,
      explanation: "Phương thức `static` KHÔNG thể bị Override (chỉ là Method Hiding) nên được liên kết tĩnh lúc biên dịch (Compile-time Binding) theo kiểu khai báo của biến `obj` là `A` ⇒ In ra `A`!"
    },
    {
      id: 303,
      topic: "Ch.3: Inheritance & Polymorphism",
      question: "[FE PRO192] What happens when you compile this code?\n\nclass A {\n    A(int x) { System.out.print(x); }\n}\nclass B extends A {\n    B() { System.out.print(\"B\"); }\n}",
      options: [
        "Prints B",
        "Prints 0B",
        "Compile-time Error: constructor A() is undefined",
        "Runtime Exception"
      ],
      answer: 2,
      explanation: "Trong constructor `B()`, vì bạn không viết `super(...)`, Java tự động chèn `super();` (gọi constructor rỗng của `A`). Nhưng `A` đã có `A(int x)` nên KHÔNG còn constructor rỗng `A()` ⇒ LỖI BIÊN DỊCH!"
    },
    {
      id: 304,
      topic: "Ch.3: Inheritance & Polymorphism",
      question: "[FE PRO192] What is the output of constructor chaining?\n\nclass A {\n    A() { System.out.print(\"A\"); }\n}\nclass B extends A {\n    B() { System.out.print(\"B\"); }\n}\nclass C extends B {\n    C() { System.out.print(\"C\"); }\n    public static void main(String[] args) { new C(); }\n}",
      options: [
        "CBA",
        "ABC",
        "C",
        "BCA"
      ],
      answer: 1,
      explanation: "Constructor luôn chạy từ lớp Cha cao nhất xuống lớp Con (`Object` → `A` → `B` → `C`) do `super()` ngầm định ở đầu mỗi constructor ⇒ In ra `ABC`."
    },
    {
      id: 305,
      topic: "Ch.3: Inheritance & Polymorphism",
      question: "[FE PRO192] Which of the following is NOT a valid rule for Method Overriding in Java?",
      options: [
        "The overriding method must have the same parameter list",
        "The overriding method can have a narrower access modifier than the parent method",
        "The overriding method can return a subtype of the parent method's return type (Covariant)",
        "A `final` method in the parent class cannot be overridden"
      ],
      answer: 1,
      explanation: "SAI! Khi Override, Access Modifier ở lớp con **KHÔNG được hẹp hơn** (narrower) lớp cha — nó bắt buộc phải bằng hoặc rộng hơn (VD: `protected` → `public` thì được, nhưng `public` → `protected` sẽ báo lỗi biên dịch!)."
    },
    {
      id: 306,
      topic: "Ch.3: Inheritance & Polymorphism",
      question: "[FE PRO192] Which of the following methods CANNOT be overridden by a subclass?",
      options: [
        "protected void display()",
        "public void compute()",
        "private void helper()",
        "abstract void draw()"
      ],
      answer: 2,
      explanation: "Phương thức `private` không được kế thừa xuống lớp con nên **không thể Override** (nếu lớp con viết cùng tên hàm thì đó là một hàm hoàn toàn độc lập). Ngoài ra, phương thức `final` và `static` cũng không thể Override."
    },
    {
      id: 307,
      topic: "Ch.3: Inheritance & Polymorphism",
      question: "[FE PRO192] What happens when you compile and run:\n\nclass Animal {}\nclass Dog extends Animal {}\npublic class Test {\n    public static void main(String[] args) {\n        Animal a = new Animal();\n        Dog d = (Dog) a;\n    }\n}",
      options: [
        "Compiles and runs without error",
        "Compile-time Error",
        "Compiles fine, throws ClassCastException at runtime",
        "Compiles fine, d becomes null"
      ],
      answer: 2,
      explanation: "Ép kiểu xuống (Downcasting) `(Dog) a` hợp lệ về mặt cú pháp lúc biên dịch vì `Dog` là con của `Animal`, nhưng lúc chạy đối tượng thực tế là `new Animal()` chứ không phải `Dog` ⇒ Ném **`ClassCastException`**!"
    },
    {
      id: 308,
      topic: "Ch.3: Inheritance & Polymorphism",
      question: "[FE PRO192] What are the implicit modifiers of every variable declared inside a Java `interface`?",
      options: [
        "private static final",
        "public static final",
        "protected final",
        "public abstract"
      ],
      answer: 1,
      explanation: "Mọi biến khai báo trong `interface` đều mặc định là **`public static final`** (hằng số công khai), kể cả khi bạn chỉ viết `int X = 10;`."
    },
    {
      id: 309,
      topic: "Ch.3: Inheritance & Polymorphism",
      question: "[FE PRO192] Which statement about an `abstract` class in Java is TRUE?",
      options: [
        "An abstract class cannot have a constructor",
        "An abstract class must contain at least one abstract method",
        "An abstract class can have constructors and concrete (non-abstract) methods, but cannot be instantiated directly with `new`",
        "An abstract class can be declared `final`"
      ],
      answer: 2,
      explanation: "`abstract class` CÓ THỂ có constructor (để lớp con gọi qua `super()`), có thể không chứa abstract method nào (chỉ chứa method thường), nhưng KHÔNG thể tạo đối tượng trực tiếp bằng `new AbstractClass()` và KHÔNG thể kết hợp với `final`."
    },
    {
      id: 310,
      topic: "Ch.3: Inheritance & Polymorphism",
      question: "[FE PRO192] What happens when you compile these two overloaded methods in the same class?\n\nint calc(int a) { return a; }\ndouble calc(int a) { return a * 1.0; }",
      options: [
        "Valid method overloading",
        "Valid method overriding",
        "Compile-time Error: duplicate method calc(int)",
        "Runtime AmbiguityException"
      ],
      answer: 2,
      explanation: "Nạp chồng (Overloading) BẮT BUỘC phải **khác danh sách tham số** (số lượng, kiểu hoặc thứ tự tham số). Chỉ khác kiểu trả về (`int` vs `double`) mà giống hệt tham số sẽ gây LỖI BIÊN DỊCH!"
    },
    {
      id: 311,
      topic: "Ch.3: Inheritance & Polymorphism",
      question: "[FE PRO192] What is the output of overloading resolution?\n\nclass Test {\n    static void m(int x) { System.out.print(\"int\"); }\n    static void m(long x) { System.out.print(\"long\"); }\n    static void m(Integer x) { System.out.print(\"Integer\"); }\n    public static void main(String[] args) {\n        short s = 5;\n        m(s);\n    }\n}",
      options: [
        "int",
        "long",
        "Integer",
        "Compile Error"
      ],
      answer: 0,
      explanation: "Thứ tự ưu tiên khi Java chọn hàm Overload:\n1. Khớp chính xác kiểu\n2. Mở rộng kiểu nguyên thủy gần nhất (Widening): `short` → `int` (ưu tiên hơn `long` và ưu tiên hơn Autoboxing `Short`/`Integer`!)\n3. Autoboxing\n4. Varargs.\n⇒ Chọn `m(int)` → in `int`!"
    },
    {
      id: 312,
      topic: "Ch.3: Inheritance & Polymorphism",
      question: "[FE PRO192] What happens when a class implements an interface?\n\ninterface Flyable { void fly(); }\nclass Bird implements Flyable {\n    void fly() { System.out.println(\"Fly\"); }\n}",
      options: [
        "Compiles and prints Fly",
        "Compile-time Error: cannot reduce visibility of inherited method from Flyable",
        "Runtime Error",
        "Compiles only if Bird is abstract"
      ],
      answer: 1,
      explanation: "BẪY SIÊU KINH ĐIỂN! Trong `interface`, `void fly();` ngầm định là **`public abstract void fly();`**. Ở lớp `Bird`, viết `void fly()` không có `public` tức là `default` — hẹp hơn `public` ⇒ LỖI BIÊN DỊCH! Bắt buộc phải viết `public void fly()`!"
    },
    {
      id: 313,
      topic: "Ch.3: Inheritance & Polymorphism",
      question: "[FE PRO192] What is the result of `null instanceof Object` in Java?",
      options: [
        "true",
        "false",
        "NullPointerException",
        "Compile Error"
      ],
      answer: 1,
      explanation: "Toán tử `instanceof` an toàn với `null`: `null instanceof AnyType` LUÔN trả về **`false`** (không bao giờ ném `NullPointerException`!)."
    },
    {
      id: 314,
      topic: "Ch.3: Inheritance & Polymorphism",
      question: "[FE PRO192] In Java 8+, which kinds of methods CAN have a method body (implementation) inside an `interface`?",
      options: [
        "Only abstract methods",
        "`default` methods and `static` methods",
        "Only `final` methods",
        "No method in an interface can ever have a body"
      ],
      answer: 1,
      explanation: "Từ Java 8 trở đi, `interface` cho phép có **`default` method** (có thân hàm, lớp con có thể override) và **`static` method** (có thân hàm, gọi qua `InterfaceName.method()`). (Java 9 còn thêm `private` helper method)."
    },
    {
      id: 315,
      topic: "Ch.3: Inheritance & Polymorphism",
      question: "[FE PRO192] If a class implements two interfaces `I1` and `I2` that both define the exact same `default void show()` method, what happens?",
      options: [
        "Java automatically calls I1's version",
        "Java automatically calls I2's version",
        "Compile-time Error unless the class explicitly overrides `show()`",
        "Runtime AmbiguityException"
      ],
      answer: 2,
      explanation: "Để giải quyết vấn đề Kim cương (Diamond Problem) của `default` method, trình biên dịch bắt buộc lớp cài đặt PHẢI tự override `public void show()` (và có thể gọi cụ thể `I1.super.show()` nếu muốn)."
    },
    {
      id: 316,
      topic: "Ch.3: Inheritance & Polymorphism",
      question: "[FE PRO192] Which class is the root of the entire class hierarchy in Java?",
      options: [
        "java.lang.Class",
        "java.lang.System",
        "java.lang.Object",
        "java.lang.Root"
      ],
      answer: 2,
      explanation: "Mọi class trong Java đều trực tiếp hoặc gián tiếp kế thừa `java.lang.Object` (chứa các hàm kinh điển: `toString()`, `equals()`, `hashCode()`, `getClass()`, `clone()`, `wait()`, `notify()`)."
    },
    {
      id: 317,
      topic: "Ch.3: Inheritance & Polymorphism",
      question: "[FE PRO192] What does `super.toString()` return if the parent class did NOT override `toString()`?",
      options: [
        "All private field values separated by commas",
        "ClassName@hexHashCode (from java.lang.Object)",
        "An empty string \"\"",
        "null"
      ],
      answer: 1,
      explanation: "Hàm `toString()` mặc định của `java.lang.Object` trả về `getClass().getName() + \"@\" + Integer.toHexString(hashCode())` (ví dụ `Car@15db9742`). Đó là lý do trong PE Q2 ta luôn phải `@Override toString()`!"
    },
    {
      id: 318,
      topic: "Ch.3: Inheritance & Polymorphism",
      question: "[FE PRO192] Which relationship best describes Inheritance (`extends`) vs Composition (having a field of another class)?",
      options: [
        "Inheritance is HAS-A; Composition is IS-A",
        "Inheritance is IS-A; Composition is HAS-A",
        "Both represent IS-A",
        "Both represent USES-A only"
      ],
      answer: 1,
      explanation: "• Kế thừa (Inheritance — `Dog extends Animal`): quan hệ **IS-A** (Chó LÀ Động vật).\n• Kết hợp (Composition — `Car` có thuộc tính `Engine engine`): quan hệ **HAS-A** (Xe CÓ Động cơ)."
    },

    // ==================== CHƯƠNG 4: EXCEPTION HANDLING (12 CÂU) ====================
    {
      id: 401,
      topic: "Ch.4: Exception Handling",
      question: "[FE PRO192] What is the output of this `try-catch-finally` block?\n\nstatic int test() {\n    int x = 1;\n    try {\n        return x;\n    } finally {\n        x = 2;\n    }\n}\n// System.out.println(test());",
      options: [
        "1",
        "2",
        "0",
        "Compile Error"
      ],
      answer: 0,
      explanation: "Cẩn thận bẫy này!\n1. Trong `try`, `return x;` đánh giá và lưu tạm giá trị trả về là `1`.\n2. Sau đó `finally` chạy `x = 2;` (NHƯNG KHÔNG có lệnh `return` trong `finally`).\n3. Hàm trả về giá trị đã lưu tạm trước đó ⇒ **`1`**! (Chỉ khi `finally` có `return 2;` thì mới trả về `2`)."
    },
    {
      id: 402,
      topic: "Ch.4: Exception Handling",
      question: "[FE PRO192] What happens when you compile this code?\n\ntry {\n    int a = 5 / 0;\n} catch (Exception e) {\n    System.out.print(\"E\");\n} catch (ArithmeticException e) {\n    System.out.print(\"A\");\n}",
      options: [
        "Prints A",
        "Prints E",
        "Prints EA",
        "Compile-time Error: exception ArithmeticException has already been caught"
      ],
      answer: 3,
      explanation: "Vì `ArithmeticException` là lớp CON của `Exception`, khối `catch (Exception e)` đặt phía trên đã tóm hết mọi `ArithmeticException` ⇒ khối `catch (ArithmeticException e)` phía dưới không bao giờ tới được → LỖI BIÊN DỊCH! Phải đặt lớp CON trước, lớp CHA sau."
    },
    {
      id: 403,
      topic: "Ch.4: Exception Handling",
      question: "[FE PRO192] What is the output of:\n\nSystem.out.println(5.0 / 0.0);",
      options: [
        "Throws ArithmeticException",
        "Infinity",
        "NaN",
        "0.0"
      ],
      answer: 1,
      explanation: "Bẫy FE cực hay lừa: Chia số nguyên cho 0 (`5 / 0`) mới ném `ArithmeticException`. Còn chia số thực (`double`/`float`) theo chuẩn IEEE 754: `5.0 / 0.0` ra **`Infinity`**, `-5.0 / 0.0` ra `-Infinity`, và `0.0 / 0.0` ra `NaN` (KHÔNG ném Exception)!"
    },
    {
      id: 404,
      topic: "Ch.4: Exception Handling",
      question: "[FE PRO192] In which situation will the `finally` block NOT be executed?",
      options: [
        "When an exception is thrown and NOT caught",
        "When a `return` statement executes inside the `try` block",
        "When `System.exit(0)` is executed inside the `try` block",
        "When a `break` statement executes inside a loop containing `try-finally`"
      ],
      answer: 2,
      explanation: "Khối `finally` luôn chạy trong mọi trường hợp (`return`, `break`, `continue`, exception không được bắt), NGOẠI TRỪ khi gọi **`System.exit(0)`** tắt ngay máy ảo JVM (hoặc mất điện/crash JVM)."
    },
    {
      id: 405,
      topic: "Ch.4: Exception Handling",
      question: "[FE PRO192] Which of the following is an UNCHECKED exception (subclass of `RuntimeException`)?",
      options: [
        "FileNotFoundException",
        "SQLException",
        "NumberFormatException",
        "ClassNotFoundException"
      ],
      answer: 2,
      explanation: "`NumberFormatException` kế thừa `IllegalArgumentException` → `RuntimeException` (Unchecked, VD: `Integer.parseInt(\"abc\")`). Ba lựa chọn còn lại đều là Checked Exception."
    },
    {
      id: 406,
      topic: "Ch.4: Exception Handling",
      question: "[FE PRO192] What is the difference between `throw` and `throws` in Java?",
      options: [
        "`throw` is used in method signature; `throws` is used inside method body",
        "`throw` explicitly throws a single exception instance inside a method; `throws` declares exceptions in a method signature",
        "They are completely interchangeable keywords",
        "`throw` is for Checked exceptions only; `throws` is for Unchecked only"
      ],
      answer: 1,
      explanation: "• `throw` (số ít — trong thân hàm): ném 1 đối tượng ngoại lệ cụ thể (`throw new IllegalArgumentException();`).\n• `throws` (số nhiều — ở chữ ký hàm): khai báo hàm có thể phát sinh một hoặc nhiều loại ngoại lệ (`void f() throws IOException, SQLException`)."
    },
    {
      id: 407,
      topic: "Ch.4: Exception Handling",
      question: "[FE PRO192] What is the output of this code?\n\ntry {\n    System.out.print(\"1\");\n    int x = 10 / 0;\n    System.out.print(\"2\");\n} catch (ArithmeticException e) {\n    System.out.print(\"3\");\n} finally {\n    System.out.print(\"4\");\n}\nSystem.out.print(\"5\");",
      options: [
        "12345",
        "1345",
        "134",
        "145"
      ],
      answer: 1,
      explanation: "Chạy `1` → `10/0` ném `ArithmeticException` (bỏ qua `2`) → vào `catch` in `3` → vào `finally` in `4` → vì lỗi đã được bắt nên chương trình chạy tiếp lệnh sau khối try in `5` ⇒ `1345`."
    },
    {
      id: 408,
      topic: "Ch.4: Exception Handling",
      question: "[FE PRO192] Which statement about Overriding a method that declares `throws` is TRUE?",
      options: [
        "The overriding method in the subclass can throw any new broader Checked Exception",
        "The overriding method can throw the same Checked Exception, a narrower subclass of it, or NO Checked Exception at all",
        "The overriding method cannot throw any RuntimeException",
        "The overriding method must throw at least one exception"
      ],
      answer: 1,
      explanation: "Quy tắc Override với Exception: Lớp con KHÔNG được ném thêm Checked Exception mới hoặc rộng hơn lớp cha (chỉ được giữ nguyên, thu hẹp xuống lớp con của exception đó, hoặc bỏ luôn không `throws`). Riêng Unchecked (`RuntimeException`) thì lớp con ném thoải mái!"
    },
    {
      id: 409,
      topic: "Ch.4: Exception Handling",
      question: "[FE PRO192] What is the superclass of both `Exception` and `Error` in Java?",
      options: [
        "java.lang.RuntimeException",
        "java.lang.Throwable",
        "java.lang.ExceptionBase",
        "java.lang.SystemError"
      ],
      answer: 1,
      explanation: "`java.lang.Throwable` là lớp cha trực tiếp của cả `Error` và `Exception`. Chỉ những đối tượng kế thừa `Throwable` mới dùng được với `throw` và `catch`."
    },
    {
      id: 410,
      topic: "Ch.4: Exception Handling",
      question: "[FE PRO192] Which interface must a resource implement to be used in a Java `try-with-resources` statement (e.g., `try (MyRes r = new MyRes()) { ... }`)?",
      options: [
        "Serializable",
        "Comparable",
        "AutoCloseable (or Closeable)",
        "Cloneable"
      ],
      answer: 2,
      explanation: "Cú pháp `try-with-resources` (Java 7+) tự động gọi `.close()` khi kết thúc khối `try`, yêu cầu tài nguyên phải implement `java.lang.AutoCloseable` (hoặc lớp con `java.io.Closeable`)."
    },
    {
      id: 411,
      topic: "Ch.4: Exception Handling",
      question: "[FE PRO192] Is a `try` block followed ONLY by a `finally` block (with NO `catch` block) valid in Java?",
      options: [
        "No, a catch block is strictly mandatory",
        "Yes, `try-finally` without `catch` compiles and runs validly",
        "Only for Unchecked exceptions",
        "Only inside static methods"
      ],
      answer: 1,
      explanation: "Một khối `try` hợp lệ khi có ít nhất 1 `catch` HOẶC 1 `finally` (hoặc cả hai). `try { ... } finally { ... }` hoàn toàn hợp lệ và hay dùng để đảm bảo dọn dẹp tài nguyên."
    },
    {
      id: 412,
      topic: "Ch.4: Exception Handling",
      question: "[FE PRO192] What exception is thrown when you execute `String s = null; System.out.println(s.length());`?",
      options: [
        "IllegalArgumentException",
        "StringIndexOutOfBoundsException",
        "NullPointerException",
        "EmptyStringException"
      ],
      answer: 2,
      explanation: "Gọi bất kỳ method hoặc truy cập field nào trên một biến tham chiếu đang mang giá trị `null` sẽ ném ra **`NullPointerException`** (Unchecked Exception)."
    },

    // ==================== CHƯƠNG 5: STRINGS, ARRAYS & COLLECTIONS (20 CÂU) ====================
    {
      id: 501,
      topic: "Ch.5: Strings & Collections",
      question: "[FE PRO192] What is the output of the following String code?\n\nString s = \"Java\";\ns.concat(\" SE\");\nSystem.out.println(s);",
      options: [
        "Java SE",
        "Java",
        "SE",
        "Compile Error"
      ],
      answer: 1,
      explanation: "`String` là bất biến (Immutable)! Lệnh `s.concat(\" SE\");` tạo ra chuỗi mới `\"Java SE\"` nhưng KHÔNG gán lại cho `s` nên chuỗi mới bị bỏ đi ⇒ `s` vẫn là `\"Java\"`!"
    },
    {
      id: 502,
      topic: "Ch.5: Strings & Collections",
      question: "[FE PRO192] What is the output of this String Pool comparison?\n\nString s1 = \"FPT\";\nString s2 = \"FPT\";\nString s3 = new String(\"FPT\");\nSystem.out.println((s1 == s2) + \" \" + (s1 == s3) + \" \" + s1.equals(s3));",
      options: [
        "true true true",
        "true false true",
        "false false true",
        "true false false"
      ],
      answer: 1,
      explanation: "• `s1` và `s2` là chuỗi literal nên cùng trỏ tới 1 đối tượng trong String Constant Pool ⇒ `s1 == s2` là `true`.\n• `s3 = new String(\"FPT\")` tạo đối tượng mới riêng trên Heap ⇒ `s1 == s3` là `false`.\n• `s1.equals(s3)` so sánh nội dung ký tự ⇒ `true`.\n⇒ In ra `true false true`."
    },
    {
      id: 503,
      topic: "Ch.5: Strings & Collections",
      question: "[FE PRO192] What is the output of:\n\nString s = \"PRO192\";\nSystem.out.println(s.substring(1, 4));",
      options: [
        "PRO",
        "RO1",
        "RO19",
        "O19"
      ],
      answer: 1,
      explanation: "`substring(beginIndex, endIndex)` lấy từ `beginIndex` (bao gồm) đến `endIndex - 1` (KHÔNG bao gồm `endIndex`).\nChuỗi `\"PRO192\"`: index 0='P', 1='R', 2='O', 3='1', 4='9', 5='2' ⇒ `substring(1, 4)` lấy index 1, 2, 3 = **`RO1`**!"
    },
    {
      id: 504,
      topic: "Ch.5: Strings & Collections",
      question: "[FE PRO192] What is the output of:\n\nStringBuilder sb = new StringBuilder(\"ABC\");\nsb.append(\"DE\").reverse().deleteCharAt(0);\nSystem.out.println(sb);",
      options: [
        "DCBA",
        "EDCB",
        "BCDE",
        "ABCD"
      ],
      answer: 0,
      explanation: "`StringBuilder` là Mutable (thay đổi trực tiếp trên chính nó):\n1. `\"ABC\".append(\"DE\")` → `\"ABCDE\"`\n2. `.reverse()` → `\"EDCBA\"`\n3. `.deleteCharAt(0)` xóa ký tự `'E'` ở vị trí 0 → **`\"DCBA\"`**!"
    },
    {
      id: 505,
      topic: "Ch.5: Strings & Collections",
      question: "[FE PRO192] Which statement correctly compares `String`, `StringBuilder`, and `StringBuffer`?",
      options: [
        "StringBuilder is thread-safe; StringBuffer is not thread-safe",
        "String is mutable; StringBuilder is immutable",
        "String is immutable; StringBuilder is mutable & faster (not thread-safe); StringBuffer is mutable & thread-safe (synchronized)",
        "All three classes are thread-safe and immutable"
      ],
      answer: 2,
      explanation: "• `String`: Bất biến (immutable).\n• `StringBuilder`: Thay đổi được, KHÔNG synchronized → NHANH NHẤT trong đơn luồng.\n• `StringBuffer`: Thay đổi được, có `synchronized` → An toàn đa luồng (thread-safe)."
    },
    {
      id: 506,
      topic: "Ch.5: Strings & Collections",
      question: "[FE PRO192] What is the output of `HashSet` size?\n\nSet<String> set = new HashSet<>();\nset.add(\"A\");\nset.add(\"B\");\nset.add(\"A\");\nset.add(null);\nset.add(null);\nSystem.out.println(set.size());",
      options: [
        "5",
        "4",
        "3",
        "Throws NullPointerException"
      ],
      answer: 2,
      explanation: "`HashSet` không cho phép trùng lặp và cho phép tối đa 1 giá trị `null`. Các phần tử duy nhất trong set là `\"A\"`, `\"B\"`, `null` ⇒ `size() = 3`."
    },
    {
      id: 507,
      topic: "Ch.5: Strings & Collections",
      question: "[FE PRO192] What happens when you run this `TreeSet` code?\n\nSet<Integer> ts = new TreeSet<>();\nts.add(10);\nts.add(null);\nSystem.out.println(ts);",
      options: [
        "Prints [null, 10]",
        "Prints [10, null]",
        "Throws NullPointerException at runtime",
        "Compile-time Error"
      ],
      answer: 2,
      explanation: "`TreeSet` phải so sánh các phần tử bằng `compareTo()` để giữ thứ tự sắp xếp, nên khi thêm `null` sẽ ném ngay **`NullPointerException`**!"
    },
    {
      id: 508,
      topic: "Ch.5: Strings & Collections",
      question: "[FE PRO192] Which interface is NOT a sub-interface of `java.util.Collection`?",
      options: [
        "List",
        "Set",
        "Queue",
        "Map"
      ],
      answer: 3,
      explanation: "Câu hỏi cực kinh điển ở FE PRO192: **`Map`** lưu theo cặp `Key-Value` nên tách thành nhánh riêng, **KHÔNG kế thừa** interface `Collection` (dù vẫn nằm trong Java Collections Framework)."
    },
    {
      id: 509,
      topic: "Ch.5: Strings & Collections",
      question: "[FE PRO192] What is the output of this `HashMap` code?\n\nMap<String, Integer> map = new HashMap<>();\nmap.put(\"A\", 1);\nmap.put(\"B\", 2);\nmap.put(\"A\", 9);\nSystem.out.println(map.size() + \" \" + map.get(\"A\"));",
      options: [
        "3 1",
        "2 1",
        "2 9",
        "3 9"
      ],
      answer: 2,
      explanation: "Key trong `Map` là duy nhất. Khi gọi `map.put(\"A\", 9)`, key `\"A\"` đã tồn tại nên giá trị mới `9` sẽ **ghi đè** giá trị cũ `1` (không tăng size) ⇒ `size = 2`, `get(\"A\") = 9`."
    },
    {
      id: 510,
      topic: "Ch.5: Strings & Collections",
      question: "[FE PRO192] What is the main difference between `HashMap` and `Hashtable` in Java?",
      options: [
        "HashMap is synchronized and disallows null; Hashtable is non-synchronized and allows null",
        "HashMap is non-synchronized and allows 1 null key + multiple null values; Hashtable is synchronized and disallows any null key or value",
        "Hashtable maintains sorted key order automatically",
        "HashMap cannot store String keys"
      ],
      answer: 1,
      explanation: "`HashMap` không synchronized (nhanh hơn), cho phép 1 key `null` và nhiều value `null`. `Hashtable` là lớp cũ, synchronized (thread-safe), nhưng CẤM hoàn toàn cả key `null` lẫn value `null` (ném `NullPointerException`)."
    },
    {
      id: 511,
      topic: "Ch.5: Strings & Collections",
      question: "[FE PRO192] What is the output of this `ArrayList` trap?\n\nList<Integer> list = new ArrayList<>();\nlist.add(10);\nlist.add(20);\nlist.add(1);\nlist.remove(1);\nSystem.out.println(list);",
      options: [
        "[10, 20]",
        "[10, 1]",
        "[20, 1]",
        "IndexOutOfBoundsException"
      ],
      answer: 1,
      explanation: "SIÊU BẪY `ArrayList<Integer>`: Hàm `remove` bị nạp chồng thành `remove(int index)` và `remove(Object o)`. Khi truyền số `1` (kiểu `int`), Java ưu tiên gọi **`remove(int index)`** → xóa phần tử ở **vị trí 1** (là `20`) chứ KHÔNG phải xóa giá trị `1`! Kết quả: `[10, 1]`. (Muốn xóa giá trị `1` phải viết `list.remove(Integer.valueOf(1))`)."
    },
    {
      id: 512,
      topic: "Ch.5: Strings & Collections",
      question: "[FE PRO192] When should you prefer `ArrayList` over `LinkedList`?",
      options: [
        "When you frequently access elements randomly by index using `get(i)`",
        "When you frequently insert and delete elements at the beginning of a huge list",
        "When you need elements to be automatically sorted",
        "When you need to forbid duplicate elements"
      ],
      answer: 0,
      explanation: "`ArrayList` dùng mảng động bên dưới nên truy xuất ngẫu nhiên `get(i)` đạt $O(1)$ (siêu nhanh), còn `LinkedList` phải duyệt từng node mất $O(n)$ (nhưng `LinkedList` lại thắng ở thao tác thêm/xóa ở đầu/cuối danh sách $O(1)$)."
    },
    {
      id: 513,
      topic: "Ch.5: Strings & Collections",
      question: "[FE PRO192] What happens if you modify an `ArrayList` using `list.remove(...)` directly inside a for-each loop (`for (String s : list)`)?",
      options: [
        "It safely removes all matching elements",
        "It throws ConcurrentModificationException at runtime",
        "Compile-time Error",
        "It skips only the first element"
      ],
      answer: 1,
      explanation: "Iterator của `ArrayList` là **fail-fast**: vừa duyệt bằng `for-each` vừa xóa trực tiếp trên `list` sẽ ném **`ConcurrentModificationException`**. Để xóa an toàn khi duyệt, hãy dùng `Iterator.remove()`, `list.removeIf(...)`, hoặc duyệt vòng lặp `for` có chỉ số ngược từ cuối về đầu!"
    },
    {
      id: 514,
      topic: "Ch.5: Strings & Collections",
      question: "[FE PRO192] According to the Java `equals()` and `hashCode()` contract, which statement is ALWAYS TRUE?",
      options: [
        "If `a.hashCode() == b.hashCode()`, then `a.equals(b)` MUST be true",
        "If `a.equals(b)` is true, then `a.hashCode() == b.hashCode()` MUST be true",
        "If `a.equals(b)` is false, then `a.hashCode()` MUST be different from `b.hashCode()`",
        "hashCode() is only used by ArrayList"
      ],
      answer: 1,
      explanation: "Hợp đồng chuẩn của Java:\n• `a.equals(b) == true` ⇒ **BẮT BUỘC** `a.hashCode() == b.hashCode()`.\n• Ngược lại, cùng `hashCode` KHÔNG bắt buộc `equals` (trường hợp đụng độ băm — hash collision)."
    },
    {
      id: 515,
      topic: "Ch.5: Strings & Collections",
      question: "[FE PRO192] What does `\"apple\".compareTo(\"banana\")` return?",
      options: [
        "0",
        "A negative integer (< 0)",
        "A positive integer (> 0)",
        "true"
      ],
      answer: 1,
      explanation: "`compareTo` so sánh theo thứ tự từ điển (Unicode): `'a'` (97) đứng trước `'b'` (98) ⇒ `97 - 98 = -1` (một số nguyên âm `< 0`)."
    },
    {
      id: 516,
      topic: "Ch.5: Strings & Collections",
      question: "[FE PRO192] What is the output of:\n\nString s = \"  a   b  c \";\nString[] arr = s.trim().split(\"\\\\s+\");\nSystem.out.println(arr.length);",
      options: [
        "3",
        "6",
        "7",
        "4"
      ],
      answer: 0,
      explanation: "`trim()` bỏ hết khoảng trắng đầu/cuối thành `\"a   b  c\"`. Sau đó `split(\"\\\\s+\")` tách theo 1 hoặc nhiều khoảng trắng liên tiếp ⇒ mảng `[\"a\", \"b\", \"c\"]` có độ dài `3`. (Bí kíp số 1 cho PE Q4!)."
    },
    {
      id: 517,
      topic: "Ch.5: Strings & Collections",
      question: "[FE PRO192] Which Collection preserves the exact INSERTION ORDER while still disallowing duplicate elements?",
      options: [
        "HashSet",
        "TreeSet",
        "LinkedHashSet",
        "PriorityQueue"
      ],
      answer: 2,
      explanation: "• `HashSet`: Không trùng, KHÔNG đảm bảo thứ tự.\n• `LinkedHashSet`: Không trùng, **GIỮ ĐÚNG thứ tự thêm vào**.\n• `TreeSet`: Không trùng, sắp xếp tăng dần."
    },
    {
      id: 518,
      topic: "Ch.5: Strings & Collections",
      question: "[FE PRO192] What is the output of `Collections.sort(t, (a, b) -> b.getPrice() - a.getPrice());`?",
      options: [
        "Sorts list t by price in ASCENDING order",
        "Sorts list t by price in DESCENDING order",
        "Reverses list t without checking price",
        "Compile Error"
      ],
      answer: 1,
      explanation: "Trong `Comparator.compare(a, b)`:\n• `a - b` ⇒ Sắp xếp **tăng dần** (Ascending).\n• `b - a` ⇒ Sắp xếp **giảm dần** (Descending)."
    },
    {
      id: 519,
      topic: "Ch.5: Strings & Collections",
      question: "[FE PRO192] In Java Generics, why does `List<Object> list = new ArrayList<String>();` fail to compile?",
      options: [
        "String does not extend Object",
        "Java Generics are INVARIANT (List<String> is NOT a subtype of List<Object>)",
        "ArrayList does not implement List",
        "Generic types cannot hold Strings"
      ],
      answer: 1,
      explanation: "Generics trong Java có tính bất biến (Invariant): dù `String` là con của `Object`, `List<String>` KHÔNG phải là con của `List<Object>` (vì nếu cho phép thì có thể chèn `Integer` vào `List<String>` gây hỏng an toàn kiểu!). Muốn nhận mọi kiểu con phải dùng wildcard `List<? extends Object>` hoặc `List<?>`."
    },
    {
      id: 520,
      topic: "Ch.5: Strings & Collections",
      question: "[FE PRO192] What does `list.subList(1, 4)` return from `[10, 20, 30, 40, 50]`?",
      options: [
        "[20, 30, 40, 50]",
        "[10, 20, 30, 40]",
        "[20, 30, 40]",
        "[20, 30]"
      ],
      answer: 2,
      explanation: "`subList(fromIndex, toIndex)` lấy từ `fromIndex` (inclusive) đến `toIndex - 1` (exclusive): index 1 (`20`), 2 (`30`), 3 (`40`) ⇒ `[20, 30, 40]`. Lưu ý: `subList` là một view trực tiếp trên list gốc nên khi gọi `Collections.sort(list.subList(1, 4))`, list gốc tự động cập nhật đúng đoạn đó (siêu tiện cho PE Q3!)."
    },

    // ==================== CHƯƠNG 6: JAVA I/O STREAMS & SERIALIZATION (10 CÂU) ====================
    {
      id: 601,
      topic: "Ch.6: Java I/O & Serialization",
      question: "[FE PRO192] What is the main difference between Byte Streams (`InputStream`/`OutputStream`) and Character Streams (`Reader`/`Writer`)?",
      options: [
        "Byte Streams process 16-bit Unicode text; Character Streams process 8-bit raw bytes",
        "Byte Streams process 8-bit binary data; Character Streams process 16-bit Unicode characters",
        "Byte Streams can only read from keyboard; Character Streams only read from files",
        "Character Streams are faster for image and video files"
      ],
      answer: 1,
      explanation: "• Byte Streams (`InputStream`/`OutputStream`): xử lý từng **8-bit byte** (phù hợp file nhị phân: ảnh, âm thanh, video, nén).\n• Character Streams (`Reader`/`Writer`): xử lý từng **16-bit ký tự Unicode** (phù hợp file văn bản text)."
    },
    {
      id: 602,
      topic: "Ch.6: Java I/O & Serialization",
      question: "[FE PRO192] Which class provides the `readLine()` method to efficiently read text line by line from a file?",
      options: [
        "FileInputStream",
        "FileReader",
        "BufferedReader",
        "PrintWriter"
      ],
      answer: 2,
      explanation: "`BufferedReader` cung cấp bộ đệm tăng tốc và phương thức `readLine()` đọc từng dòng văn bản (trả về `null` khi đến cuối tệp — EOF)."
    },
    {
      id: 603,
      topic: "Ch.6: Java I/O & Serialization",
      question: "[FE PRO192] What does `BufferedReader.readLine()` return when the end of the file (EOF) is reached?",
      options: [
        "-1",
        "An empty string \"\"",
        "null",
        "Throws EOFException"
      ],
      answer: 2,
      explanation: "• `InputStream.read()` / `Reader.read()` trả về **`-1`** khi hết file.\n• `BufferedReader.readLine()` trả về **`null`** khi hết file!"
    },
    {
      id: 604,
      topic: "Ch.6: Java I/O & Serialization",
      question: "[FE PRO192] What does executing `File f = new File(\"data.txt\");` do on the hard disk?",
      options: [
        "Immediately creates an empty file named data.txt on disk",
        "Deletes data.txt if it already exists",
        "Only creates a File object representing the path in memory; it does NOT create a physical file on disk",
        "Opens data.txt for writing"
      ],
      answer: 2,
      explanation: "Lệnh `new File(\"data.txt\")` chỉ tạo 1 đối tượng `File` trong RAM đại diện cho đường dẫn đó, CHƯA tạo tệp thật trên ổ cứng (muốn tạo tệp phải gọi `f.createNewFile()` hoặc mở `FileWriter`/`FileOutputStream`)."
    },
    {
      id: 605,
      topic: "Ch.6: Java I/O & Serialization",
      question: "[FE PRO192] Which class bridges a Byte Stream (`InputStream`) to a Character Stream (`Reader`)?",
      options: [
        "BufferedInputStream",
        "InputStreamReader",
        "DataInputStream",
        "ObjectInputStream"
      ],
      answer: 1,
      explanation: "`InputStreamReader` là lớp cầu nối chuyển từ `InputStream` (byte) sang `Reader` (character), hỗ trợ chỉ định bảng mã (như UTF-8). Tương ứng chiều ghi là `OutputStreamWriter`."
    },
    {
      id: 606,
      topic: "Ch.6: Java I/O & Serialization",
      question: "[FE PRO192] What happens if you try to serialize an object of a class that does NOT implement `java.io.Serializable` using `ObjectOutputStream.writeObject()`?",
      options: [
        "Java serializes it automatically anyway",
        "Compile-time Error",
        "Throws NotSerializableException at runtime",
        "Writes null to the file"
      ],
      answer: 2,
      explanation: "`writeObject(Object obj)` nhận tham số kiểu `Object` nên vẫn biên dịch được, nhưng lúc chạy JVM kiểm tra nếu đối tượng không implement `Serializable` sẽ ném **`java.io.NotSerializableException`**!"
    },
    {
      id: 607,
      topic: "Ch.6: Java I/O & Serialization",
      question: "[FE PRO192] A class `User implements Serializable` has `String name = \"Long\"; transient int pin = 1234;`. After serializing and deserializing this object, what are `name` and `pin`?",
      options: [
        "name = \"Long\", pin = 1234",
        "name = \"Long\", pin = 0",
        "name = null, pin = 0",
        "name = null, pin = 1234"
      ],
      answer: 1,
      explanation: "Biến `name` bình thường được lưu và khôi phục là `\"Long\"`. Biến `pin` đánh dấu `transient` bị bỏ qua lúc serialize nên khi deserialize nhận giá trị mặc định của `int` là **`0`**!"
    },
    {
      id: 608,
      topic: "Ch.6: Java I/O & Serialization",
      question: "[FE PRO192] What is a 'Marker Interface' in Java (such as `Serializable` or `Cloneable`)?",
      options: [
        "An interface that contains only static variables",
        "An empty interface with NO methods or constants, used to tag/mark a class with metadata for the JVM",
        "An interface that can only be implemented by abstract classes",
        "An interface with exactly one abstract method"
      ],
      answer: 1,
      explanation: "• **Marker Interface** (`Serializable`, `Cloneable`): Interface RỖNG (0 method) dùng để đánh dấu khả năng đặc biệt cho JVM nhận biết.\n• Lưu ý phân biệt với **Functional Interface** (đúng 1 abstract method — dùng cho Lambda như `Comparator`, `Runnable`)."
    },
    {
      id: 609,
      topic: "Ch.6: Java I/O & Serialization",
      question: "[FE PRO192] How do you open a file using `FileWriter` in APPEND mode (adding text to the end instead of overwriting existing content)?",
      options: [
        "new FileWriter(\"log.txt\")",
        "new FileWriter(\"log.txt\", true)",
        "new FileWriter(\"log.txt\", false)",
        "new FileWriter(\"log.txt\", \"a\")"
      ],
      answer: 1,
      explanation: "Constructor `new FileWriter(String fileName, boolean append)` (tương tự `FileOutputStream`): truyền `true` để ghi nối tiếp vào cuối tệp (append); mặc định không truyền hoặc truyền `false` sẽ xóa sạch và ghi đè từ đầu!"
    },
    {
      id: 610,
      topic: "Ch.6: Java I/O & Serialization",
      question: "[FE PRO192] Which class allows reading and writing Java primitive data types (`readInt()`, `writeDouble()`, `readUTF()`) in a machine-independent binary format?",
      options: [
        "BufferedReader / BufferedWriter",
        "DataInputStream / DataOutputStream",
        "FileReader / FileWriter",
        "StringReader / StringWriter"
      ],
      answer: 1,
      explanation: "`DataInputStream` và `DataOutputStream` chuyên dùng để đọc/ghi trực tiếp các kiểu nguyên thủy (`int`, `double`, `boolean`, `UTF`) dưới dạng nhị phân độc lập nền tảng."
    },

    // ==================== BỘ 10 CÂU CODE OUTPUT & BẪY KINH ĐIỂN FE PRO192 (TỔNG 100 CÂU) ====================
    {
      id: 701,
      topic: "🔥 Bẫy Code Output FE PRO192",
      question: "[FE PRO192 Trap] What is the output?\n\nclass Base {\n    Base() { print(); }\n    void print() { System.out.print(\"Base \"); }\n}\nclass Sub extends Base {\n    int x = 5;\n    void print() { System.out.print(x + \" \"); }\n    public static void main(String[] args) {\n        Sub s = new Sub();\n        s.print();\n    }\n}",
      options: [
        "5 5",
        "Base 5",
        "0 5",
        "Compile Error"
      ],
      answer: 2,
      explanation: "SIÊU BẪY KINH ĐIỂN NHẤT JAVA!\n1. `new Sub()` gọi `Base()` trước khi khởi tạo trường `int x = 5;` của `Sub` (lúc này `x` mang giá trị mặc định `0`!).\n2. `Base()` gọi `print()` → do Dynamic Binding, nó gọi `Sub.print()` và in `x` = **`0`**!\n3. Sau khi `Base()` xong, `Sub` mới gán `x = 5`.\n4. Gọi `s.print()` in **`5`**.\n⇒ Kết quả: **`0 5`**!"
    },
    {
      id: 702,
      topic: "🔥 Bẫy Code Output FE PRO192",
      question: "[FE PRO192 Trap] What is the output?\n\nString s1 = \"abc\";\nString s2 = \"a\" + \"bc\";\nString s3 = \"a\";\nString s4 = s3 + \"bc\";\nSystem.out.println((s1 == s2) + \" \" + (s1 == s4));",
      options: [
        "true true",
        "true false",
        "false true",
        "false false"
      ],
      answer: 1,
      explanation: "• `\"a\" + \"bc\"` là hai hằng số biên dịch (compile-time constant) nên trình biên dịch gộp sẵn thành `\"abc\"` trong String Pool ⇒ `s1 == s2` là **`true`**.\n• `s3 + \"bc\"` có chứa biến thường `s3` nên ghép lúc runtime bằng `StringBuilder` tạo object mới trên Heap ⇒ `s1 == s4` là **`false`**!"
    },
    {
      id: 703,
      topic: "🔥 Bẫy Code Output FE PRO192",
      question: "[FE PRO192 Trap] What is the output?\n\nint[] a = {1, 2, 3};\nint[] b = {1, 2, 3};\nSystem.out.println((a == b) + \" \" + a.equals(b) + \" \" + java.util.Arrays.equals(a, b));",
      options: [
        "false true true",
        "false false true",
        "true true true",
        "false false false"
      ],
      answer: 1,
      explanation: "Bẫy mảng trong Java: Mảng KHÔNG override phương thức `equals()` của `Object`, nên `a.equals(b)` hoạt động y hệt `a == b` (so sánh địa chỉ ⇒ `false`). Muốn so sánh nội dung hai mảng bắt buộc phải dùng **`Arrays.equals(a, b)`** (⇒ `true`)!"
    },
    {
      id: 704,
      topic: "🔥 Bẫy Code Output FE PRO192",
      question: "[FE PRO192 Trap] What is the output?\n\npublic class Test {\n    static void f(Object o) { System.out.print(\"Obj\"); }\n    static void f(String s) { System.out.print(\"Str\"); }\n    public static void main(String[] args) {\n        f(null);\n    }\n}",
      options: [
        "Obj",
        "Str",
        "Compile Error: ambiguous",
        "NullPointerException"
      ],
      answer: 1,
      explanation: "Khi gọi hàm overload với `null`, Java chọn kiểu **cụ thể nhất (most specific subtype)**. Vì `String` là lớp con của `Object` nên chọn `f(String)` ⇒ In `Str`! (Chỉ báo lỗi ambiguous khi hai kiểu không có quan hệ cha-con, VD: `f(String)` và `f(Integer)`)."
    },
    {
      id: 705,
      topic: "🔥 Bẫy Code Output FE PRO192",
      question: "[FE PRO192 Trap] What is the output?\n\nStringBuilder sb1 = new StringBuilder(\"Hi\");\nStringBuilder sb2 = new StringBuilder(\"Hi\");\nSystem.out.println(sb1.equals(sb2));",
      options: [
        "true",
        "false",
        "Compile Error",
        "NullPointerException"
      ],
      answer: 1,
      explanation: "Cực kỳ dễ mắc lừa: `StringBuilder` và `StringBuffer` **KHÔNG override** phương thức `equals()`! Vì vậy `sb1.equals(sb2)` so sánh địa chỉ tham chiếu (giống `==`) ⇒ **`false`**! Muốn so sánh nội dung phải chuyển sang String: `sb1.toString().equals(sb2.toString())`."
    },
    {
      id: 706,
      topic: "🔥 Bẫy Code Output FE PRO192",
      question: "[FE PRO192 Trap] What is the output?\n\nint x = 0;\nfor (int i = 0; i < 5; i++) {\n    x = x++;\n}\nSystem.out.println(x);",
      options: [
        "5",
        "4",
        "0",
        "1"
      ],
      answer: 2,
      explanation: "Bẫy hậu tố `x = x++`:\n1. Lưu giá trị cũ của `x` (`0`) vào biến tạm.\n2. Tăng `x` lên `1`.\n3. Gán giá trị tạm (`0`) ngược lại vào `x` ⇒ `x` lại về `0` sau mỗi vòng lặp! Kết quả cuối cùng vẫn là **`0`**!"
    },
    {
      id: 707,
      topic: "🔥 Bẫy Code Output FE PRO192",
      question: "[FE PRO192 Trap] What happens when you compile and run:\n\nclass A {\n    static void test() { System.out.println(\"OK\"); }\n    public static void main(String[] args) {\n        A a = null;\n        a.test();\n    }\n}",
      options: [
        "Throws NullPointerException",
        "Compile Error",
        "Prints OK",
        "Prints null"
      ],
      answer: 2,
      explanation: "Bẫy `static` với biến `null`: Vì `test()` là phương thức `static`, trình biên dịch dịch `a.test()` thành `A.test()` ngay lúc biên dịch mà KHÔNG cần dereference đối tượng `a` lúc chạy ⇒ Không bị `NullPointerException`, in ra **`OK`**!"
    },
    {
      id: 708,
      topic: "🔥 Bẫy Code Output FE PRO192",
      question: "[FE PRO192 Trap] What is the output?\n\nclass P { P() { System.out.print(\"1\"); } }\nclass C extends P {\n    static { System.out.print(\"2\"); }\n    { System.out.print(\"3\"); }\n    C() { System.out.print(\"4\"); }\n    public static void main(String[] args) { new C(); }\n}",
      options: [
        "1234",
        "2134",
        "2314",
        "1324"
      ],
      answer: 1,
      explanation: "Thứ tự khởi tạo chuẩn của JVM:\n1. Static block khi nạp class (`C`): in **`2`**\n2. Constructor lớp Cha (`P`): in **`1`**\n3. Instance initializer block lớp Con (`C`): in **`3`**\n4. Thân constructor lớp Con (`C`): in **`4`**\n⇒ Kết quả chính xác: **`2134`**!"
    },
    {
      id: 709,
      topic: "🔥 Bẫy Code Output FE PRO192",
      question: "[FE PRO192 Trap] What is the output?\n\nString s = \"a.b.c\";\nString[] p = s.split(\".\");\nSystem.out.println(p.length);",
      options: [
        "3",
        "1",
        "0",
        "5"
      ],
      answer: 2,
      explanation: "SIÊU BẪY PE Q4 & FE: `split()` nhận **Regular Expression (Regex)**! Trong Regex, dấu chấm `.` nghĩa là 'khớp MỌI ký tự' → tách sạch mọi ký tự thành các chuỗi rỗng ở cuối rồi bị loại bỏ hết ⇒ `p.length = 0`! Muốn tách theo dấu chấm thật PHẢI viết **`s.split(\"\\\\.\")`**!"
    },
    {
      id: 710,
      topic: "🔥 Bẫy Code Output FE PRO192",
      question: "[FE PRO192 Trap] What is the output?\n\nInteger a = null;\nint b = a;\nSystem.out.println(b);",
      options: [
        "0",
        "null",
        "Compile Error",
        "Throws NullPointerException at runtime"
      ],
      answer: 3,
      explanation: "Auto-unboxing: Lệnh `int b = a;` được trình biên dịch dịch ngầm thành `int b = a.intValue();`. Vì `a` đang là `null` nên lúc chạy sẽ văng ngay **`NullPointerException`**!"
    },

    // ==================== BỘ 20 CÂU BẪY MỚI 2026 (FORM SU26 / SP26) ====================
    {
      id: 801,
      topic: "🎯 Bẫy Mới 2026 (Form SU26/SP26)",
      question: "[FE 2026 Pattern] What is the output of this floating-point division + narrowing cast?\n\nbyte b = (byte)(1.0 / 0.0);\nSystem.out.println(b);",
      options: [
        "Throws ArithmeticException",
        "127",
        "-1",
        "0"
      ],
      answer: 2,
      explanation: "Bẫy ép kiểu số thực sang `byte` cực hiểm (SP26):\n1. `1.0 / 0.0` (kiểu `double`) KHÔNG ném lỗi mà trả về `+Infinity`.\n2. Theo chuẩn JLS, ép `double` sang `byte` đi qua bước trung gian sang `int`: `(int)(+Infinity)` bão hòa thành `Integer.MAX_VALUE` = `0x7FFFFFFF`.\n3. Cắt lấy 8 bit thấp nhất của `0x7FFFFFFF` thu được `0xFF` (bù 2 có dấu) = **`-1`**!"
    },
    {
      id: 802,
      topic: "🎯 Bẫy Mới 2026 (Form SU26/SP26)",
      question: "[FE 2026 Pattern] What is the output of this enhanced `for-each` loop?\n\nint[] nums = {1, 2, 3};\nfor (int n : nums) {\n    n += 10;\n}\nSystem.out.println(nums[0] + \" \" + nums[2]);",
      options: [
        "11 13",
        "1 3",
        "11 3",
        "Compile Error"
      ],
      answer: 1,
      explanation: "Trong vòng lặp `for-each`, biến `n` chỉ là **bản sao cục bộ (copy)** của từng phần tử nguyên thủy trong mảng `nums`. Phép `n += 10;` chỉ thay đổi biến tạm `n`, hoàn toàn KHÔNG sửa mảng gốc `nums` ⇒ In ra **`1 3`**!"
    },
    {
      id: 803,
      topic: "🎯 Bẫy Mới 2026 (Form SU26/SP26)",
      question: "[FE 2026 Pattern] What happens when you compile the following array initialization?\n\nfloat[] prices = {1.5, 2.5, 3.5};\nSystem.out.println(prices[0]);",
      options: [
        "Prints 1.5",
        "Prints 1.5f",
        "Compile-time Error: incompatible types (possible lossy conversion from double to float)",
        "Runtime ArrayStoreException"
      ],
      answer: 2,
      explanation: "Số thập phân `1.5`, `2.5`, `3.5` mặc định trong Java mang kiểu **`double`** (64-bit). Đưa trực tiếp vào mảng `float[]` (32-bit) mà thiếu hậu tố `f` (`1.5f, 2.5f, 3.5f`) sẽ gây **Compile Error**!"
    },
    {
      id: 804,
      topic: "🎯 Bẫy Mới 2026 (Form SU26/SP26)",
      question: "[FE 2026 Pattern] What is the output of:\n\nArrayList<String> list = new ArrayList<>();\nSystem.out.println(list.size());",
      options: [
        "10",
        "0",
        "1",
        "null"
      ],
      answer: 1,
      explanation: "Đừng nhầm giữa **`size()`** và **default initial capacity**! Một `new ArrayList<>()` mới tạo chưa có phần tử nào nên `list.size()` luôn bằng **`0`** (còn `10` chỉ là sức chứa mảng nội bộ mặc định khi bắt đầu thêm phần tử đầu tiên)."
    },
    {
      id: 805,
      topic: "🎯 Bẫy Mới 2026 (Form SU26/SP26)",
      question: "[FE 2026 Pattern] What is the output of this `LinkedHashMap` operation?\n\nMap<String, Integer> map = new LinkedHashMap<>();\nmap.put(\"A\", 1);\nmap.put(\"B\", 2);\nmap.put(\"C\", 3);\nmap.remove(\"A\");\nmap.put(\"A\", 9);\nSystem.out.println(map.keySet());",
      options: [
        "[A, B, C]",
        "[B, C, A]",
        "[C, B, A]",
        "[A, C, B]"
      ],
      answer: 1,
      explanation: "`LinkedHashMap` giữ đúng thứ tự chèn vào:\n• Nếu chỉ gọi `put(\"A\", 9)` khi `\"A\"` đang có sẵn: thứ tự giữ nguyên `[A, B, C]`.\n• Nhưng ở đây ta gọi **`remove(\"A\")`** trước rồi mới `put(\"A\", 9)` lại như phần tử mới ⇒ `\"A\"` bị đẩy xuống cuối thành **`[B, C, A]`**!"
    },
    {
      id: 806,
      topic: "🎯 Bẫy Mới 2026 (Form SU26/SP26)",
      question: "[FE 2026 Pattern] What is the output when printing `TreeMap.values()`?\n\nTreeMap<Integer, String> tm = new TreeMap<>();\ntm.put(30, \"First\");\ntm.put(10, \"Second\");\ntm.put(20, \"Third\");\nSystem.out.println(tm.values());",
      options: [
        "[First, Second, Third]",
        "[Second, Third, First]",
        "[First, Third, Second]",
        "Random order"
      ],
      answer: 1,
      explanation: "`TreeMap` luôn tự động sắp xếp các mục theo **KEY tăng dần** (`10 → 20 → 30`), KHÔNG sắp xếp theo Value!\n• Key `10` → `\"Second\"`\n• Key `20` → `\"Third\"`\n• Key `30` → `\"First\"`\n⇒ `tm.values()` in ra **`[Second, Third, First]`**!"
    },
    {
      id: 807,
      topic: "🎯 Bẫy Mới 2026 (Form SU26/SP26)",
      question: "[FE 2026 Pattern] What is the output of `TreeMap.headMap(3)` with a lambda?\n\nTreeMap<Integer, String> tm = new TreeMap<>();\ntm.put(1, \"A\"); tm.put(2, \"B\"); tm.put(3, \"C\"); tm.put(4, \"D\");\ntm.headMap(3).forEach((k, v) -> System.out.print(v));",
      options: [
        "ABC",
        "AB",
        "CD",
        "BCD"
      ],
      answer: 1,
      explanation: "`headMap(toKey)` trả về phần con chứa các Key **NHỎ HƠN HẲN `toKey`** (exclusive — không bao gồm `3`)!\n⇒ Chỉ gồm key `1` (`\"A\"`) và key `2` (`\"B\"`) ⇒ In ra **`AB`**. (Ngược lại `tailMap(3)` mặc định là inclusive: gồm `3` và `4`)."
    },
    {
      id: 808,
      topic: "🎯 Bẫy Mới 2026 (Form SU26/SP26)",
      question: "[FE 2026 Pattern] What is the output of adding a `char` and an `int` into a raw/Object `HashSet`?\n\nSet<Object> set = new HashSet<>();\nset.add('1');\nset.add(1);\nset.add(\"1\");\nSystem.out.println(set.size());",
      options: [
        "1",
        "2",
        "3",
        "Compile Error"
      ],
      answer: 2,
      explanation: "Autoboxing biến 3 phần tử thành 3 kiểu đối tượng HOÀN TOÀN KHÁC NHAU:\n• `'1'` → `Character` (mã 49)\n• `1` → `Integer` (giá trị 1)\n• `\"1\"` → `String`\nVì khác kiểu nên `.equals()` giữa chúng đều là `false` ⇒ cả 3 đều được lưu vào Set ⇒ `size() = 3`!"
    },
    {
      id: 809,
      topic: "🎯 Bẫy Mới 2026 (Form SU26/SP26)",
      question: "[FE 2026 Pattern] What happens when you add a custom object to a `TreeSet` without implementing `Comparable` or providing a `Comparator`?\n\nclass Item { int id; Item(int id) { this.id = id; } }\n// TreeSet<Item> s = new TreeSet<>();\n// s.add(new Item(1));",
      options: [
        "Compiles and sorts by memory address",
        "Compile-time Error",
        "Compiles fine, throws ClassCastException at runtime",
        "Compiles fine, silently ignores the element"
      ],
      answer: 2,
      explanation: "`TreeSet` chỉ kiểm tra kiểu `Comparable` lúc chạy khi chèn phần tử vào cây đỏ-đen. Vì `Item` không implement `Comparable` (và cũng không truyền `Comparator`), code biên dịch qua nhưng chạy tới `s.add(...)` sẽ văng ngay **`ClassCastException`**!"
    },
    {
      id: 810,
      topic: "🎯 Bẫy Mới 2026 (Form SU26/SP26)",
      question: "[FE 2026 Pattern] What happens when you call `add()` on a list created by `Arrays.asList(...)`?\n\nList<String> list = Arrays.asList(\"A\", \"B\");\nlist.set(0, \"X\");\nlist.add(\"C\");",
      options: [
        "list becomes [X, B, C]",
        "Compile-time Error on list.add(\"C\")",
        "Throws UnsupportedOperationException at runtime on list.add(\"C\")",
        "list.set(0, \"X\") throws UnsupportedOperationException"
      ],
      answer: 2,
      explanation: "`Arrays.asList(...)` trả về một `List` có **kích thước cố định (fixed-size)** bọc trực tiếp lên mảng gốc:\n• `set(0, \"X\")`: ✅ Hợp lệ (thay đổi phần tử tại chỗ).\n• `add(...)` hoặc `remove(...)`: ❌ Thay đổi kích thước ⇒ ném **`UnsupportedOperationException`** lúc chạy! (Muốn thêm/xóa phải bọc `new ArrayList<>(Arrays.asList(...))`)."
    },
    {
      id: 811,
      topic: "🎯 Bẫy Mới 2026 (Form SU26/SP26)",
      question: "[FE 2026 Pattern] Which utility method in `java.util.Collections` randomly permutes (reorders) the elements of a `List`?",
      options: [
        "Collections.random(list)",
        "Collections.shuffle(list)",
        "Collections.mix(list)",
        "Collections.reverse(list)"
      ],
      answer: 1,
      explanation: "• `Collections.shuffle(list)`: Xáo trộn ngẫu nhiên thứ tự phần tử trong `List`.\n• `Collections.reverse(list)`: Đảo ngược thứ tự.\n• `Collections.sort(list)`: Sắp xếp tăng dần."
    },
    {
      id: 812,
      topic: "🎯 Bẫy Mới 2026 (Form SU26/SP26)",
      question: "[FE 2026 Pattern] What happens when you compile this Java `interface`?\n\ninterface MyTool {\n    default static final void run() {\n        System.out.println(\"Run\");\n    }\n}",
      options: [
        "Compiles and runs fine in Java 8+",
        "Compile-time Error: illegal combination of modifiers (`default`, `static`, `final`)",
        "Compiles only if a class implements MyTool",
        "Runtime IllegalAccessError"
      ],
      answer: 1,
      explanation: "Tổ hợp modifier bất hợp lệ trong `interface`:\n• `default` (phương thức instance có thể bị override) mâu thuẫn trực tiếp với `static` (thuộc về interface) và `final` (cấm override — `final` vốn không bao giờ được dùng cho method trong interface!) ⇒ **Compile Error**!"
    },
    {
      id: 813,
      topic: "🎯 Bẫy Mới 2026 (Form SU26/SP26)",
      question: "[FE 2026 Pattern] What happens when you compile the following code?\n\ninterface Printer {\n    void print();\n    void scan();\n}\nclass MiniPrinter implements Printer {\n    public void print() { System.out.println(\"Print\"); }\n}",
      options: [
        "Compiles fine; scan() defaults to doing nothing",
        "Compile-time Error: MiniPrinter is not abstract and does not override abstract method scan()",
        "Compiles fine, throws AbstractMethodError only if scan() is called",
        "Compiles fine if scan() is private"
      ],
      answer: 1,
      explanation: "Một lớp cụ thể (concrete class — không khai báo `abstract`) khi `implements` một interface BẮT BUỘC phải cài đặt (override `public`) **TẤT CẢ** các phương thức `abstract` của interface đó. Thiếu `scan()` ⇒ **Compile Error**!"
    },
    {
      id: 814,
      topic: "🎯 Bẫy Mới 2026 (Form SU26/SP26)",
      question: "[FE 2026 Pattern] Given `abstract class Shape { abstract void draw(); }`, which line compiles SUCCESSFULLY?",
      options: [
        "Shape s = new Shape();",
        "Shape s = new Shape() { void draw() { System.out.println(\"OK\"); } };",
        "abstract Shape s = new Shape();",
        "final class Circle extends Shape {}"
      ],
      answer: 1,
      explanation: "• `new Shape();` → ❌ Lỗi biên dịch (không thể khởi tạo trực tiếp `abstract class`).\n• `new Shape() { void draw() { ... } };` → ✅ **Anonymous Inner Class** (tạo một lớp con vô danh cài đặt đầy đủ `draw()` ngay tại chỗ) nên hoàn toàn HỢP LỆ!"
    },
    {
      id: 815,
      topic: "🎯 Bẫy Mới 2026 (Form SU26/SP26)",
      question: "[FE 2026 Pattern] What is the output when a subclass shadows a superclass field with `private`?\n\nclass Parent {\n    int a = 10;\n    int getA() { return a; }\n}\nclass Child extends Parent {\n    private int a = 99;\n    int test() { return super.getA(); }\n    public static void main(String[] args) {\n        System.out.println(new Child().test());\n    }\n}",
      options: [
        "99",
        "10",
        "0",
        "Compile Error"
      ],
      answer: 1,
      explanation: "Biến `private int a = 99` ở `Child` chỉ che khuất (shadow) chứ KHÔNG ghi đè biến `int a = 10` của `Parent`. Khi `super.getA()` chạy bên trong `Parent`, nó đọc trường `a` của chính `Parent` ⇒ trả về **`10`**!"
    },
    {
      id: 816,
      topic: "🎯 Bẫy Mới 2026 (Form SU26/SP26)",
      question: "[FE 2026 Pattern] What happens when you compile and run this method?\n\npublic static void main(String[] args) {\n    String s;\n    System.out.println(s.length());\n}",
      options: [
        "Throws NullPointerException at runtime",
        "Prints 0",
        "Compile-time Error: variable s might not have been initialized",
        "Prints null"
      ],
      answer: 2,
      explanation: "Cực kỳ dễ chọn nhầm `NullPointerException`! `s` là **biến cục bộ (local variable)** trong `main` chưa được gán giá trị (kể cả `null`). Java KHÔNG tự gán `null` cho biến cục bộ ⇒ báo **Compile-time Error** ngay lúc biên dịch! (Chỉ khi viết `String s = null;` thì biên dịch mới qua và lúc chạy mới ném NPE)."
    },
    {
      id: 817,
      topic: "🎯 Bẫy Mới 2026 (Form SU26/SP26)",
      question: "[FE 2026 Pattern] What happens when you run this array loop?\n\nint[] list = {10, 20, 30};\nSystem.out.println(list[list.length]);",
      options: [
        "Prints 30",
        "Prints 0",
        "Throws ArrayIndexOutOfBoundsException",
        "Compile-time Error"
      ],
      answer: 2,
      explanation: "Mảng độ dài `3` chỉ có chỉ số hợp lệ là `0, 1, 2` (phần tử cuối là `list[list.length - 1]`). Truy cập `list[3]` (`list[list.length]`) biên dịch bình thường nhưng lúc chạy ném ngay **`ArrayIndexOutOfBoundsException`**!"
    },
    {
      id: 818,
      topic: "🎯 Bẫy Mới 2026 (Form SU26/SP26)",
      question: "[FE 2026 Pattern] Which `java.io` class allows jumping directly to any byte offset in a file using `seek(long pos)` for BOTH reading and writing?",
      options: [
        "BufferedReader",
        "FileInputStream",
        "RandomAccessFile",
        "PrintWriter"
      ],
      answer: 2,
      explanation: "`RandomAccessFile` (mở với mode `\"r\"` hoặc `\"rw\"`) hỗ trợ con trỏ tệp `seek(pos)` nhảy tới bất kỳ vị trí byte nào trong tệp để vừa đọc vừa ghi ngẫu nhiên — đặc biệt hay hỏi trong đề `SP26_RE`!"
    },
    {
      id: 819,
      topic: "🎯 Bẫy Mới 2026 (Form SU26/SP26)",
      question: "[FE 2026 Pattern] In `java.io.File`, what does `file.isFile()` return if `file` points to an existing DIRECTORY (folder)?",
      options: [
        "true",
        "false",
        "Throws IOException",
        "null"
      ],
      answer: 1,
      explanation: "Các hàm kiểm tra metadata của `java.io.File`:\n• `isFile()`: chỉ `true` nếu tồn tại và là **tệp thông thường** (với thư mục trả về **`false`**).\n• `isDirectory()`: `true` nếu là thư mục.\n• `isHidden()`: kiểm tra tệp/thư mục ẩn."
    },
    {
      id: 820,
      topic: "🎯 Bẫy Mới 2026 (Form SU26/SP26)",
      question: "[FE 2026 Pattern] Which OOP relationship represents a weak \"HAS-A\" association where the contained object can still exist independently if the container is destroyed (e.g., `Department` and `Professor`)?",
      options: [
        "Inheritance (IS-A)",
        "Aggregation (Weak HAS-A)",
        "Composition (Strong HAS-A)",
        "Encapsulation"
      ],
      answer: 1,
      explanation: "Câu chốt Q50 kinh điển xuất hiện xuyên suốt các đề 2025–2026:\n• **Aggregation (Kết tập — Weak HAS-A):** Đối tượng thành phần vẫn tồn tại độc lập khi đối tượng chứa bị hủy (VD: Khoa bị giải thể, Giảng viên vẫn tồn tại).\n• **Composition (Thành phần — Strong HAS-A):** Đối tượng con sống/chết gắn chặt với đối tượng cha (VD: Ngôi nhà bị phá → các Căn phòng cũng mất theo)."
    }
  ]
};
