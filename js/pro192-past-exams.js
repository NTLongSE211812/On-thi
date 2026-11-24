(function () {
  if (!window.PRO192_DATA || !Array.isArray(window.PRO192_DATA.quizQuestions)) return;
  const pastExamQuestions = [
  {
    "id": 5001,
    "topic": "🏆 Đề FE PRO192 - SU26 (50 câu - Full Giải)",
    "question": "[SU26 FE - Câu 1/50] Which method is used to convert an array to a List in Java?",
    "options": [
      "Arrays.asList()",
      "Arrays.toList()",
      "Arrays.convertToList()",
      "Arrays.arrayToList()"
    ],
    "answer": 0,
    "explanation": "Phương thức tĩnh `Arrays.asList(...)` trong lớp `java.util.Arrays` dùng để chuyển đổi một mảng thành một `List` (kích thước cố định). Ba tên hàm còn lại không tồn tại trong Java."
  },
  {
    "id": 5002,
    "topic": "🏆 Đề FE PRO192 - SU26 (50 câu - Full Giải)",
    "question": "[SU26 FE - Câu 2/50] Which of the following is/are advantages of packages?",
    "options": [
      "Packages avoid name clashes",
      "Classes, even though they are visible outside their package, can have fields visible to packages only",
      "We can have hidden classes that are used by the packages, but not visible outside.",
      "All of the mentioned"
    ],
    "answer": 3,
    "explanation": "Cả 3 lợi ích của `package` đều đúng: (A) tránh xung đột tên lớp, (B) cho phép các trường/phương thức `default` chỉ nhìn thấy trong nội bộ package, và (C) ẩn các lớp non-public khỏi bên ngoài package ⇒ Chọn `All of the mentioned`."
  },
  {
    "id": 5003,
    "topic": "🏆 Đề FE PRO192 - SU26 (50 câu - Full Giải)",
    "question": "[SU26 FE - Câu 3/50] A Java source code will be compiled to the file in which of the following extensions?",
    "options": [
      ".class",
      ".java",
      ".exe",
      ".bat"
    ],
    "answer": 0,
    "explanation": "Trình biên dịch `javac` biên dịch tệp mã nguồn `.java` thành tệp Bytecode có phần mở rộng **`.class`** để máy ảo JVM thực thi."
  },
  {
    "id": 5004,
    "topic": "🏆 Đề FE PRO192 - SU26 (50 câu - Full Giải)",
    "question": "[SU26 FE - Câu 4/50] Which of the following statements is used to add the content to an existing text file?",
    "options": [
      "Set the append parameter to true in the constructor of the FileWriter object",
      "Set the append parameter to true in the constructor of the File object",
      "Set append parameter of true in the constructor of OutputStream object",
      "All of the others"
    ],
    "answer": 0,
    "explanation": "Để ghi nối tiếp (append) vào cuối tệp văn bản có sẵn mà không xóa nội dung cũ, ta truyền tham số `append = true` vào constructor của `FileWriter`: `new FileWriter(\"file.txt\", true)`."
  },
  {
    "id": 5005,
    "topic": "🏆 Đề FE PRO192 - SU26 (50 câu - Full Giải)",
    "question": "[SU26 FE - Câu 5/50] Which of the following is NOT a basic component of a computer?",
    "options": [
      "CPU",
      "Memory",
      "Monitor",
      "Refrigerator"
    ],
    "answer": 3,
    "explanation": "Các thành phần cơ bản của máy tính gồm CPU, bộ nhớ (Memory), màn hình (Monitor/I/O). `Refrigerator` (tủ lạnh) hiển nhiên không phải thành phần máy tính."
  },
  {
    "id": 5006,
    "topic": "🏆 Đề FE PRO192 - SU26 (50 câu - Full Giải)",
    "question": "[SU26 FE - Câu 6/50] What is the output of the following Java program?\n\nclass A {\n    public static void show() {\n        System.out.println(\"A::show\");\n    }\n}\nclass B extends A {\n    public static void show() {\n        System.out.println(\"B::show\");\n    }\n}\nclass Main {\n    public static void main(String[] args) {\n        A b = new B();\n        b.show();\n    }\n}",
    "options": [
      "A::show",
      "B::show",
      "AB::show",
      "Runtime error"
    ],
    "answer": 0,
    "explanation": "Bẫy **Static Method Hiding**: Phương thức `static` KHÔNG bị Override mà được liên kết tĩnh lúc biên dịch (Compile-time Binding) theo kiểu khai báo của biến `b` là `A` ⇒ Gọi `A.show()` và in ra **`A::show`**!"
  },
  {
    "id": 5007,
    "topic": "🏆 Đề FE PRO192 - SU26 (50 câu - Full Giải)",
    "question": "[SU26 FE - Câu 7/50] What is the output of the code snippet?\n\npublic class Test {\n    public static void main(String[] args) {\n        int[] a = new int[5];\n        System.out.println(a[1]);\n    }\n}",
    "options": [
      "0",
      "1",
      "null",
      "[I@15db9742]"
    ],
    "answer": 0,
    "explanation": "Mảng `new int[5]` được Java tự động khởi tạo giá trị mặc định cho kiểu `int` là **`0`** ở mọi vị trí (từ `a[0]` đến `a[4]`) ⇒ `a[1]` in ra `0`."
  },
  {
    "id": 5008,
    "topic": "🏆 Đề FE PRO192 - SU26 (50 câu - Full Giải)",
    "question": "[SU26 FE - Câu 8/50] Which of the following statements about reference types in Java is TRUE?",
    "options": [
      "Reference types hold actual data values, not addresses",
      "The default value for a reference variable is 0",
      "Arrays are considered primitive types.",
      "A reference variable stores the address of an object in memory."
    ],
    "answer": 3,
    "explanation": "Biến kiểu tham chiếu (reference type — như Object, String, Array) lưu **địa chỉ vùng nhớ** của đối tượng trên Heap. (A sai vì không chứa trực tiếp dữ liệu, B sai vì mặc định là `null`, C sai vì Array là reference type)."
  },
  {
    "id": 5009,
    "topic": "🏆 Đề FE PRO192 - SU26 (50 câu - Full Giải)",
    "question": "[SU26 FE - Câu 9/50] Choose multiple correct answers.",
    "options": [
      "Inheritance allows a class to inherit the properties and methods of another class",
      "The keyword extends is used to indicate inheritance in Java. It is used in the declaration of a subclass to specify the superclass that it is inheriting from.",
      "A subclass can access the private members of the superclass",
      "Java supports both multiple inheritance of classes and interfaces"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Chọn nhiều đáp án đúng (`A, B`):\n• A đúng: Kế thừa cho phép lớp con thừa hưởng thuộc tính và phương thức của lớp cha.\n• B đúng: Từ khóa `extends` khai báo lớp con kế thừa từ lớp cha.\n• C sai: Lớp con KHÔNG truy cập trực tiếp được thành viên `private` của lớp cha.\n• D sai: Java KHÔNG hỗ trợ đa kế thừa giữa các Class (chỉ hỗ trợ qua Interface)."
  },
  {
    "id": 5010,
    "topic": "🏆 Đề FE PRO192 - SU26 (50 câu - Full Giải)",
    "question": "[SU26 FE - Câu 10/50] Given the following code, what will be the output?\n\nclass Animal {\n    void sound() {\n        System.out.println(\"Animal sound\");\n    }\n}\nclass Dog extends Animal {\n    void sound() {\n        System.out.println(\"Dog barks\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        Animal a = new Dog();\n        a.sound();\n    }\n}",
    "options": [
      "Compilation Error",
      "Animal sound",
      "Runtime Error",
      "Dog barks"
    ],
    "answer": 3,
    "explanation": "Tính **Đa hình (Dynamic Binding)**: Biến `a` khai báo kiểu `Animal` nhưng trỏ tới đối tượng thực tế `new Dog()`. Khi gọi instance method `a.sound()`, JVM chạy phiên bản đã Override của `Dog` ⇒ In ra **`Dog barks`**."
  },
  {
    "id": 5011,
    "topic": "🏆 Đề FE PRO192 - SU26 (50 câu - Full Giải)",
    "question": "[SU26 FE - Câu 11/50] Which of the following classes is used for shuffling an ArrayList in Java?",
    "options": [
      "Collections",
      "CollectionList",
      "Arrays",
      "Array.Util"
    ],
    "answer": 0,
    "explanation": "Lớp tiện ích `java.util.Collections` cung cấp phương thức `Collections.shuffle(list)` để xáo trộn ngẫu nhiên thứ tự phần tử của một `ArrayList`/`List`."
  },
  {
    "id": 5012,
    "topic": "🏆 Đề FE PRO192 - SU26 (50 câu - Full Giải)",
    "question": "[SU26 FE - Câu 12/50] What will be the output of the following code?\n\npublic class Test10 {\n    public static void main(String[] args) {\n        Integer x = new Integer(5);\n        Integer y = new Integer(10);\n        System.out.println((String)(x + y));\n    }\n}",
    "options": [
      "15",
      "510",
      "Runtime error",
      "Compiler Error"
    ],
    "answer": 3,
    "explanation": "Phép cộng `x + y` tự động unboxing ra kiểu `int` (`15`). Trong Java KHÔNG thể ép kiểu trực tiếp `(String) 15` từ `int` sang `String` ⇒ **Compiler Error**! (Muốn chuyển sang String phải dùng `String.valueOf(x + y)`)."
  },
  {
    "id": 5013,
    "topic": "🏆 Đề FE PRO192 - SU26 (50 câu - Full Giải)",
    "question": "[SU26 FE - Câu 13/50] What must be implemented when storing custom objects in a TreeSet to ensure proper ordering?",
    "options": [
      "The compareTo() method from the Comparable interface.",
      "The equals() and hashCode() methods must be overridden to maintain consistent ordering behavior.",
      "A custom sorting algorithm that handles the specific data types and their natural ordering requirements.",
      "The toString() method must return values that can be compared lexicographically for automatic sorting."
    ],
    "answer": 0,
    "explanation": "`TreeSet` lưu phần tử theo cây đỏ-đen tự sắp xếp, nên đối tượng tùy chỉnh (custom object) cần cài đặt phương thức **`compareTo()` của interface `Comparable`** (hoặc truyền `Comparator` khi khởi tạo `TreeSet`)."
  },
  {
    "id": 5014,
    "topic": "🏆 Đề FE PRO192 - SU26 (50 câu - Full Giải)",
    "question": "[SU26 FE - Câu 14/50] Can a subclass override a method that is declared as final in its superclass?",
    "options": [
      "Yes, under certain circumstances and a warning will be issued by the compiler.",
      "Yes, but a warning will be issued by the compiler.",
      "No, a final method cannot be overridden by any subclass.",
      "Only if the subclass is in a different package."
    ],
    "answer": 2,
    "explanation": "KHÔNG! Một phương thức khai báo `final` ở lớp cha **tuyệt đối không thể bị Override** ở bất kỳ lớp con nào — cố tình Override sẽ gây lỗi biên dịch."
  },
  {
    "id": 5015,
    "topic": "🏆 Đề FE PRO192 - SU26 (50 câu - Full Giải)",
    "question": "[SU26 FE - Câu 15/50] How do you check if a File object refers to a file (NOT a directory) in Java?",
    "options": [
      "isFile()",
      "checkFile()",
      "isNotDirectory()",
      "notIsDirectory()"
    ],
    "answer": 0,
    "explanation": "Phương thức **`isFile()`** của lớp `java.io.File` trả về `true` nếu đối tượng trỏ tới một tệp thông thường (không phải thư mục)."
  },
  {
    "id": 5016,
    "topic": "🏆 Đề FE PRO192 - SU26 (50 câu - Full Giải)",
    "question": "[SU26 FE - Câu 16/50] To use the ObjectOutputStream object for writing an object to a destination file, which interface should the target class implement?",
    "options": [
      "Serializable",
      "Interpretable",
      "Writable",
      "Comparable"
    ],
    "answer": 0,
    "explanation": "Để ghi một đối tượng ra tệp bằng `ObjectOutputStream.writeObject()`, lớp của đối tượng đó BẮT BUỘC phải `implements` Marker Interface **`java.io.Serializable`** (nếu không sẽ ném `NotSerializableException`)."
  },
  {
    "id": 5017,
    "topic": "🏆 Đề FE PRO192 - SU26 (50 câu - Full Giải)",
    "question": "[SU26 FE - Câu 17/50] What will be the output of the following Java code?\nimport java.util.*;\n\npublic class Test {\n    public static void main(String[] args) {\n        LinkedList<Integer> lst = new LinkedList<>();\n        lst.add(10);\n        lst.addFirst(5);\n        lst.addLast(15);\n        System.out.println(lst);\n    }\n}",
    "options": [
      "[5, 10, 15]",
      "[10, 5, 15]",
      "[5, 15, 10]",
      "[10, 15, 5]"
    ],
    "answer": 0,
    "explanation": "Truy vết `LinkedList`:\n1. `add(10)` → `[10]`\n2. `addFirst(5)` → `[5, 10]`\n3. `addLast(15)` → **`[5, 10, 15]`**."
  },
  {
    "id": 5018,
    "topic": "🏆 Đề FE PRO192 - SU26 (50 câu - Full Giải)",
    "question": "[SU26 FE - Câu 18/50] Which of the following statements about the Java language is true?",
    "options": [
      "Java language is case-sensitive.",
      "Java is not a fully object-oriented language.",
      "Using a colon to end the command.",
      "The Java code only runs on the Windows platform."
    ],
    "answer": 0,
    "explanation": "Java là ngôn ngữ **phân biệt chữ hoa – chữ thường (case-sensitive)** (ví dụ `myVar` và `MyVar` khác nhau). C sai vì Java kết thúc lệnh bằng dấu `;` (semicolon), D sai vì Java chạy đa nền tảng nhờ JVM."
  },
  {
    "id": 5019,
    "topic": "🏆 Đề FE PRO192 - SU26 (50 câu - Full Giải)",
    "question": "[SU26 FE - Câu 19/50] Given this Employee class:\n\npublic class Employee {\n    private String id;\n    private String name;\n    private double salary;\npublic void setSalary(double s) {\n        this.salary = s;\n    }\n    public double getSalary() {\n        return salary;\n    }\n    public String getId() {\n        return id;\n    }}\n\nand this main method:\n\npublic static void main(String[] args) {\n    Employee e = new Employee();\n    e.setSalary(1000);\n    try {\n        if (e.getSalary() > 500 && e.getId().equals(\"NV001\")) {\n            System.out.println(\"This is a manager\");\n        }\n}\ncatch (Exception ex) {\n        System.out.println(\"Some error occurred!\");\n    }\n}\n\nWhat will be printed on the screen after running the main method?",
    "options": [
      "This is a manager",
      "Some error occurred!",
      "The code doesn't compile.",
      "Nothing will be printed (Blank output)"
    ],
    "answer": 1,
    "explanation": "Bẫy `NullPointerException` trong `try-catch`: Đối tượng `e` chưa được gán `id` nên `e.getId()` trả về **`null`**. Vì `e.getSalary() > 500` (`1000 > 500`) là `true`, Java chạy tiếp vế phải `e.getId().equals(\"NV001\")` ⇒ gọi `.equals()` trên `null` ném `NullPointerException` → nhảy vào khối `catch (Exception ex)` và in **`Some error occurred!`**!"
  },
  {
    "id": 5020,
    "topic": "🏆 Đề FE PRO192 - SU26 (50 câu - Full Giải)",
    "question": "[SU26 FE - Câu 20/50] What is the output of the following Java program?\n\nclass A {\n    public int x = 1;\n    public void setX(int a) {\n        x = a;\n    }\n}\nclass B extends A {\n    public int getB() {\n        setX(2);\n        return x;\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        A a = new A();\n        B b = new B();\n        System.out.println(a.x + \" \" + b.getB());\n    }\n}",
    "options": [
      "1 2",
      "2 1",
      "1 1",
      "2 2"
    ],
    "answer": 0,
    "explanation": "Hai đối tượng độc lập `a` (kiểu `A`) và `b` (kiểu `B`) có biến instance `x` riêng:\n• `a.x` giữ nguyên là `1`.\n• `b.getB()` gọi `setX(2)` chỉ đổi `x` của riêng `b` thành `2` và trả về `2`.\n⇒ In ra **`1 2`**."
  },
  {
    "id": 5021,
    "topic": "🏆 Đề FE PRO192 - SU26 (50 câu - Full Giải)",
    "question": "[SU26 FE - Câu 21/50] What is the output of the following Java program?\n\ninterface IA {\n    void show();\n}\ninterface IB {\n    void show();\n}\nclass MyClass implements IA, IB {\n    @Override\n    public void show() {\n        System.out.println(\"@MyClass\");\n    }\n}\npublic class Main {\n    public static void main(String args[]) {\n        IA objA = new MyClass();\n        objA.show();\n    }\n}",
    "options": [
      "@MyClass",
      "Runtime error in the statement objA.show();",
      "Compile error in the statement IA objA = new MyClass();",
      "None of the others"
    ],
    "answer": 0,
    "explanation": "Một class hoàn toàn được phép `implements` nhiều interface (`IA`, `IB`) có cùng chữ ký phương thức trừu tượng `void show()`, chỉ cần cài đặt duy nhất 1 phương thức `public void show()` ⇒ Chạy bình thường và in **`@MyClass`**."
  },
  {
    "id": 5022,
    "topic": "🏆 Đề FE PRO192 - SU26 (50 câu - Full Giải)",
    "question": "[SU26 FE - Câu 22/50] What is the output of the following code snippet?\n\nString fName = \"test.txt\";\nFileInputStream fs = new FileInputStream(fName);\nbyte[] lst = new byte[100];\nfs.read(lst, 0, 4);\nSystem.out.format(\"%c%n\", lst[1]);\n\nAssume test.txt has the content as follows: 01234567890",
    "options": [
      "1",
      "0",
      "2",
      "3"
    ],
    "answer": 0,
    "explanation": "`FileInputStream.read(lst, 0, 4)` đọc 4 byte đầu tiên của `\"01234567890\"` vào mảng `lst`: `lst[0] = '0'`, **`lst[1] = '1'`**, `lst[2] = '2'`, `lst[3] = '3'`. Lệnh `format(\"%c%n\", lst[1])` in ra ký tự **`1`**."
  },
  {
    "id": 5023,
    "topic": "🏆 Đề FE PRO192 - SU26 (50 câu - Full Giải)",
    "question": "[SU26 FE - Câu 23/50] What happens if you add a duplicate element to a TreeSet?",
    "options": [
      "It is added, and the set will contain two identical elements.",
      "It replaces the existing element.",
      "It is ignored, and the set remains unchanged.",
      "A runtime exception is thrown."
    ],
    "answer": 2,
    "explanation": "`TreeSet` (thuộc họ `Set`) không chứa phần tử trùng lặp: khi thêm phần tử đã tồn tại, `add()` trả về `false`, phần tử trùng bị **bỏ qua** và tập hợp giữ nguyên không đổi."
  },
  {
    "id": 5024,
    "topic": "🏆 Đề FE PRO192 - SU26 (50 câu - Full Giải)",
    "question": "[SU26 FE - Câu 24/50] What is the output of the following Java code?\n\npublic class StringTest {\n    public static void main(String[] args) {\n        String s1 = \"hello\";\n        String s2 = new String(\"hello\");\n        System.out.println(s1 == s2);\n    }\n}",
    "options": [
      "true",
      "false",
      "Compile-time error",
      "null"
    ],
    "answer": 1,
    "explanation": "`s1 = \"hello\"` nằm trong String Constant Pool, còn `s2 = new String(\"hello\")` tạo một đối tượng mới riêng biệt trên Heap ⇒ So sánh địa chỉ `s1 == s2` trả về **`false`** (muốn so nội dung dùng `s1.equals(s2)`)."
  },
  {
    "id": 5025,
    "topic": "🏆 Đề FE PRO192 - SU26 (50 câu - Full Giải)",
    "question": "[SU26 FE - Câu 25/50] What is the primary purpose of the this keyword in Java?",
    "options": [
      "It refers to the current object instance.",
      "It refers to the superclass.",
      "It accesses static fields.",
      "It acts as a return keyword."
    ],
    "answer": 0,
    "explanation": "Từ khóa `this` dùng để **tham chiếu tới chính đối tượng (instance) hiện tại** đang gọi phương thức hoặc constructor (giúp phân biệt biến thuộc tính với tham số trùng tên, hoặc gọi constructor khác qua `this(...)`)."
  },
  {
    "id": 5026,
    "topic": "🏆 Đề FE PRO192 - SU26 (50 câu - Full Giải)",
    "question": "[SU26 FE - Câu 26/50] What is the output of the following code snippet?\n\npublic class Test {\n    int x = 5;\n    int y = 2;\npublic static void main(String[] args) {\n        Test obj;\n        obj.x = 10;\n        obj.y = 20;\n        System.out.println(obj.x + obj.y);\n    }}",
    "options": [
      "Compile error",
      "30",
      "90",
      "15"
    ],
    "answer": 0,
    "explanation": "Biến `Test obj;` là **biến cục bộ (local variable)** trong `main` chưa được khởi tạo (`new Test()`). Truy cập `obj.x` ngay lập tức gây **Compile error** (`variable obj might not have been initialized`)!"
  },
  {
    "id": 5027,
    "topic": "🏆 Đề FE PRO192 - SU26 (50 câu - Full Giải)",
    "question": "[SU26 FE - Câu 27/50] What is the primary purpose of using a superclass and subclass relationship in Java?",
    "options": [
      "To restrict access to certain methods or fields",
      "To create multiple instances of a class",
      "To implement multiple inheritance.",
      "To achieve code reusability and facilitate polymorphism.",
      "To enforce encapsulation.",
      "To establish a one-to-one mapping between classes."
    ],
    "answer": 3,
    "explanation": "Mục đích cốt lõi của quan hệ kế thừa lớp cha – lớp con (superclass – subclass) là **tái sử dụng mã nguồn (code reusability)** và hỗ trợ **tính đa hình (polymorphism)**."
  },
  {
    "id": 5028,
    "topic": "🏆 Đề FE PRO192 - SU26 (50 câu - Full Giải)",
    "question": "[SU26 FE - Câu 28/50] Which of the following statements related to the protected access modifier is true?",
    "options": [
      "It allows the outside package access via inheritance",
      "It does not allow within-package access",
      "The protected members must be initialized before use",
      "All of the others"
    ],
    "answer": 0,
    "explanation": "Modifier `protected` cho phép truy cập trong cùng package **và từ lớp con nằm ở package khác thông qua kế thừa** (A đúng; B sai vì vẫn truy cập được trong cùng package)."
  },
  {
    "id": 5029,
    "topic": "🏆 Đề FE PRO192 - SU26 (50 câu - Full Giải)",
    "question": "[SU26 FE - Câu 29/50] In order to compile a program named Hello.java, what do you type at the command line?",
    "options": [
      "java Hello",
      "java Hello.java",
      "javac Hello",
      "javac Hello.java"
    ],
    "answer": 3,
    "explanation": "Lệnh biên dịch mã nguồn Java ở dòng lệnh là **`javac Hello.java`** (tạo ra `Hello.class`), sau đó mới chạy bằng `java Hello`."
  },
  {
    "id": 5030,
    "topic": "🏆 Đề FE PRO192 - SU26 (50 câu - Full Giải)",
    "question": "[SU26 FE - Câu 30/50] What is the purpose of a Java Virtual Machine (JVM)?",
    "options": [
      "It is used to interpret and execute Java bytecode",
      "It is used to write the bytecode into the .class file",
      "It is used to verify and improve performance the of Java programs",
      "All of the others"
    ],
    "answer": 0,
    "explanation": "JVM (Java Virtual Machine) có nhiệm vụ **thông dịch và thực thi mã Java bytecode** (`.class`) giúp chương trình Java chạy được trên mọi hệ điều hành."
  },
  {
    "id": 5031,
    "topic": "🏆 Đề FE PRO192 - SU26 (50 câu - Full Giải)",
    "question": "[SU26 FE - Câu 31/50] Which of the following related to the comment in Java is false?",
    "options": [
      "/ comment",
      "// comment",
      "/* comment */",
      "/** comment */"
    ],
    "answer": 0,
    "explanation": "Java chỉ có 3 cú pháp chú thích hợp lệ: `//` (1 dòng), `/* ... */` (nhiều dòng), và `/** ... */` (Javadoc). Một dấu gạch chéo đơn `/ comment` là **SAI**."
  },
  {
    "id": 5032,
    "topic": "🏆 Đề FE PRO192 - SU26 (50 câu - Full Giải)",
    "question": "[SU26 FE - Câu 32/50] Given this declaration, what is the value of car immediately after declaration?\nCar car;",
    "options": [
      "Undefined",
      "A new Car object",
      "0",
      "null"
    ],
    "answer": 3,
    "explanation": "Khi khai báo một trường/biến đối tượng `Car car;` (ở mức class field), giá trị mặc định của kiểu tham chiếu là **`null`** (không tự tạo `new Car()`)."
  },
  {
    "id": 5033,
    "topic": "🏆 Đề FE PRO192 - SU26 (50 câu - Full Giải)",
    "question": "[SU26 FE - Câu 33/50] Which of the following packages contains the Scanner class used to input data via keyboard?",
    "options": [
      "java.util",
      "java.net",
      "java.io",
      "java.awt"
    ],
    "answer": 0,
    "explanation": "Lớp `Scanner` dùng để đọc dữ liệu nhập từ bàn phím nằm trong gói **`java.util`** (`import java.util.Scanner;`)."
  },
  {
    "id": 5034,
    "topic": "🏆 Đề FE PRO192 - SU26 (50 câu - Full Giải)",
    "question": "[SU26 FE - Câu 34/50] Consider an abstract class Shape with an abstract method calculateArea(). If a concrete subclass Circle extends Shape and provides an implementation for calculateArea(), what happens when an object of the Circle class is created and calculateArea() is called?",
    "options": [
      "The abstract method in the superclass is executed.",
      "The concrete method in the subclass is executed.",
      "The program will not compile.",
      "An exception is thrown at runtime.",
      "Both the abstract method in the superclass and the concrete method in the subclass are executed.",
      "The result depends on whether the calculateArea() method is declared as static."
    ],
    "answer": 1,
    "explanation": "Khi tạo đối tượng từ lớp con cụ thể `Circle` đã cài đặt `calculateArea()` và gọi phương thức đó, **phương thức cụ thể (concrete method) của lớp con `Circle` sẽ được thực thi**."
  },
  {
    "id": 5035,
    "topic": "🏆 Đề FE PRO192 - SU26 (50 câu - Full Giải)",
    "question": "[SU26 FE - Câu 35/50] Given this Wage interface:\nGiven this Employee class:\nand this main method:\nWhat will be printed on the screen after running the main method?\n\npublic interface Wage {\ndefault void notice() {\nSystem.out.println(\"Executing ...\");\n}\nvoid increase();\n}\npublic class Employee implements Wage {\nprivate String id;\nprivate String name;\nprivate int salary;\npublic Employee(String id, String name) {\nthis.id = id;\nthis.name = name;\nthis.salary = 1000;\n}\n@Override\npublic void notice() {\nSystem.out.println(\"Employee salary computed!\");\n}\n@Override\npublic void increase() {\nthis.salary += 200;\n}\npublic int getSalary() {\nreturn salary;\n}\n}\npublic static void main(String[] args) {\nEmployee e = new Employee(\"EMP101\", \"John Doe\");\ntry {\ne.increase();\nSystem.out.println(\"Salary: \" + e.getSalary());\n}\ncatch (Exception ex) {\nSystem.out.println(\"Cannot increase/decrease salary.\");\n}\nfinally {\ne.notice();\n}\n}",
    "options": [
      "Salary: 1200 Employee salary computed!",
      "Salary: 1200 Cannot increase/decrease salary.",
      "Cannot increase/decrease salary.",
      "Salary: 1200 Cannot increase/decrease salary. Employee salary computed!",
      "The code doesn't compile."
    ],
    "answer": 0,
    "explanation": "Truy vết từng bước:\n1. `new Employee(...)` gán `salary = 1000`.\n2. Trong `try`: `e.increase()` cộng `200` thành `1200` → in `Salary: 1200` (không có lỗi nên bỏ qua `catch`).\n3. Khối `finally` luôn chạy: `e.notice()` gọi bản đã `@Override` trong `Employee` → in `Employee salary computed!`.\n⇒ Kết quả: **`Salary: 1200 Employee salary computed!`**."
  },
  {
    "id": 5036,
    "topic": "🏆 Đề FE PRO192 - SU26 (50 câu - Full Giải)",
    "question": "[SU26 FE - Câu 36/50] Given the following code snippet:\n\nint[] arr = new int[100];\n\nWhich of the following statements is correct?",
    "options": [
      "The maximum number of elements of the arr is 100",
      "The maximum index of the arr is 100",
      "arr[100] = 100",
      "Each element in the arr will be 1 by default"
    ],
    "answer": 0,
    "explanation": "Mảng `new int[100]` chứa tối đa **100 phần tử** với chỉ số hợp lệ từ `0` đến `99` (giá trị mặc định là `0`). Do đó B (`max index = 100`), C (`arr[100]` vượt biên) và D (mặc định là `1`) đều sai."
  },
  {
    "id": 5037,
    "topic": "🏆 Đề FE PRO192 - SU26 (50 câu - Full Giải)",
    "question": "[SU26 FE - Câu 37/50] Choose multiple correct answers.",
    "options": [
      "The default value of an uninitialized int variable in Java is 0",
      "Constants can be changed during the execution of a program",
      "Variables and constants are both used to store values in Java",
      "Variables can be changed during the execution of a program"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": "Chọn nhiều đáp án đúng (`A, C, D`):\n• A đúng (đối với biến `int` cấp class/mảng, giá trị mặc định là `0`).\n• B sai (hằng số `final` KHÔNG thể thay đổi giá trị khi chạy).\n• C & D đúng (cả biến và hằng đều lưu trữ giá trị; biến có thể thay đổi trong quá trình thực thi)."
  },
  {
    "id": 5038,
    "topic": "🏆 Đề FE PRO192 - SU26 (50 câu - Full Giải)",
    "question": "[SU26 FE - Câu 38/50] Given this Employee class and main method, what will be printed on the screen?\n\npublic class Employee {\n    private String id;\n    private String name;\n    public Employee(String id, String name) {\n        this.id = id;\n        this.name = name;\n    }\n    public String getName() { return name; }\n}\n\npublic static void main(String[] args) {\n    Map<String, Employee> emp = new HashMap<>();\n    emp.put(\"A\", new Employee(\"A\", \"John Doe\"));\n    emp.put(\"B\", new Employee(\"B\", \"Mark David\"));\n    emp.put(\"A\", new Employee(\"A\", \"Rose Mary\"));\n    System.out.println(emp.get(\"A\").getName());\n}",
    "options": [
      "John Doe",
      "Rose Mary",
      "John DoeRose Mary",
      "A runtime exception is thrown"
    ],
    "answer": 1,
    "explanation": "Trong `HashMap`, Key là duy nhất. Lệnh `emp.put(\"A\", new Employee(\"A\", \"Rose Mary\"))` có cùng key `\"A\"` nên **ghi đè** lên giá trị cũ `\"John Doe\"` ⇒ `emp.get(\"A\").getName()` in ra **`Rose Mary`**!"
  },
  {
    "id": 5039,
    "topic": "🏆 Đề FE PRO192 - SU26 (50 câu - Full Giải)",
    "question": "[SU26 FE - Câu 39/50] What is the output of the following code snippet?\n\npublic class Person {\n    protected String id = \"New Id\";\n    public static void main(String[] args) {\n        Person p = new Person();\n        p.id = \"FPTU\";\n        System.out.println(p.id);\n    }\n}",
    "options": [
      "FPTU",
      "null",
      "New Id",
      "Runtime error"
    ],
    "answer": 0,
    "explanation": "Hàm `main` nằm ngay bên trong lớp `Person`, nên hoàn toàn truy cập và thay đổi được biến `protected String id` của chính nó (`p.id = \"FPTU\"`) ⇒ In ra **`FPTU`**."
  },
  {
    "id": 5040,
    "topic": "🏆 Đề FE PRO192 - SU26 (50 câu - Full Giải)",
    "question": "[SU26 FE - Câu 40/50] Which of the following interfaces is the root interface of the Java Collections Framework?",
    "options": [
      "Collection",
      "Map",
      "List",
      "Set"
    ],
    "answer": 0,
    "explanation": "Giao diện gốc (root interface) của hệ thống phân cấp Collection trong Java Collections Framework là **`Collection`** (lưu ý `Map` là nhánh riêng không kế thừa `Collection`)."
  },
  {
    "id": 5041,
    "topic": "🏆 Đề FE PRO192 - SU26 (50 câu - Full Giải)",
    "question": "[SU26 FE - Câu 41/50] What is the correct way to call an instance method fly() on an object bird?",
    "options": [
      "bird->fly();",
      "bird.fly();",
      "fly.bird();",
      "bird:fly();"
    ],
    "answer": 1,
    "explanation": "Trong Java, ta dùng **toán tử dấu chấm `.`** để gọi phương thức trên một đối tượng: **`bird.fly();`** (toán tử `->` là của C/C++)."
  },
  {
    "id": 5042,
    "topic": "🏆 Đề FE PRO192 - SU26 (50 câu - Full Giải)",
    "question": "[SU26 FE - Câu 42/50] What keyword is used in Java to declare a constant value that cannot be changed?",
    "options": [
      "constant",
      "const",
      "final",
      "static"
    ],
    "answer": 2,
    "explanation": "Java dùng từ khóa **`final`** để khai báo hằng số không thể thay đổi giá trị (chú ý `const` là từ khóa dự phòng nhưng không dùng trong Java!)."
  },
  {
    "id": 5043,
    "topic": "🏆 Đề FE PRO192 - SU26 (50 câu - Full Giải)",
    "question": "[SU26 FE - Câu 43/50] Which of the following methods of File class is used to check a file already exists?",
    "options": [
      "exists()",
      "isExists()",
      "checkFile()",
      "fileExists()"
    ],
    "answer": 0,
    "explanation": "Phương thức **`exists()`** của lớp `java.io.File` dùng để kiểm tra xem tệp hoặc thư mục đã tồn tại trên ổ đĩa hay chưa."
  },
  {
    "id": 5044,
    "topic": "🏆 Đề FE PRO192 - SU26 (50 câu - Full Giải)",
    "question": "[SU26 FE - Câu 44/50] Which is a valid keyword in Java?",
    "options": [
      "interface",
      "include",
      "Float",
      "Integer"
    ],
    "answer": 0,
    "explanation": "**`interface`** là từ khóa hợp lệ của Java. (`include` là của C/C++; `Float` và `Integer` viết hoa chữ cái đầu là tên Wrapper Class chứ không phải keyword!)."
  },
  {
    "id": 5045,
    "topic": "🏆 Đề FE PRO192 - SU26 (50 câu - Full Giải)",
    "question": "[SU26 FE - Câu 45/50] Which method is used to check if an element is present in an ArrayList?",
    "options": [
      "contains()",
      "exists()",
      "includes()",
      "has()"
    ],
    "answer": 0,
    "explanation": "Phương thức **`contains(Object o)`** dùng để kiểm tra xem một phần tử có tồn tại trong `ArrayList` (hoặc bất kỳ `Collection` nào) hay không."
  },
  {
    "id": 5046,
    "topic": "🏆 Đề FE PRO192 - SU26 (50 câu - Full Giải)",
    "question": "[SU26 FE - Câu 46/50] Which of the following classes is used to iterate through lines in a text file when reading line by line?",
    "options": [
      "BufferedReader",
      "FileReader",
      "FileInputStream",
      "InputStreamReader"
    ],
    "answer": 0,
    "explanation": "`BufferedReader` cung cấp phương thức **`readLine()`** chuyên dùng để đọc và duyệt qua từng dòng văn bản của tệp text."
  },
  {
    "id": 5047,
    "topic": "🏆 Đề FE PRO192 - SU26 (50 câu - Full Giải)",
    "question": "[SU26 FE - Câu 47/50] What is the output of the following code snippet?\n\nint sum = 0;\nfor (int i = 0; i <= 10; i += 2) {\n    sum += (i % 2 == 0 ? 1 : -1);\n}\nSystem.out.println(sum);",
    "options": [
      "6",
      "2",
      "The program will raise an exception.",
      "3"
    ],
    "answer": 0,
    "explanation": "Vòng lặp `for (int i = 0; i <= 10; i += 2)` chạy với 6 giá trị chẵn: `i = 0, 2, 4, 6, 8, 10`.\nVới mọi `i` chẵn, `i % 2 == 0` luôn `true` nên mỗi lượt cộng thêm `1` ⇒ `sum = 6 × 1 = 6`!"
  },
  {
    "id": 5048,
    "topic": "🏆 Đề FE PRO192 - SU26 (50 câu - Full Giải)",
    "question": "[SU26 FE - Câu 48/50] Consider the code. What will the output be?\n\ninterface A {\n    void methodA();\n}\ninterface B {\n    void methodB();\n}\nclass C implements A, B {\n    public void methodA() {\n        System.out.print(\"A\");\n    }\n    public static void main(String[] args) {\n        C obj = new C();\n        obj.methodA();\n        obj.methodB();\n    }\n}",
    "options": [
      "Compilation error",
      "Prints A then throws a runtime exception.",
      "Prints AB",
      "Prints A only"
    ],
    "answer": 0,
    "explanation": "Lớp `C` không phải `abstract`, nhưng `implements A, B` mà chỉ cài đặt `methodA()`, **quên cài đặt `methodB()`** của interface `B` ⇒ Báo **`Compilation error`** ngay lúc biên dịch!"
  },
  {
    "id": 5049,
    "topic": "🏆 Đề FE PRO192 - SU26 (50 câu - Full Giải)",
    "question": "[SU26 FE - Câu 49/50] What happens when you try to assign an array to another array in Java?",
    "options": [
      "Both arrays reference to the same memory location.",
      "A new copy of the array is created.",
      "It results in a compilation error.",
      "Java does not allow array assignment"
    ],
    "answer": 0,
    "explanation": "Mảng trong Java là kiểu tham chiếu (Object). Khi gán `b = a;`, **cả hai biến mảng cùng trỏ về cùng một vùng nhớ trên Heap** (không tạo bản sao mới — sửa qua `b` sẽ làm thay đổi `a`!)."
  },
  {
    "id": 5050,
    "topic": "🏆 Đề FE PRO192 - SU26 (50 câu - Full Giải)",
    "question": "[SU26 FE - Câu 50/50] What will be printed by the following code?\n\nclass Dog {\nString name;\nDog(String n) {\nname = n;\n}\nvoid bark() {\nSystem.out.println(name + \" says Woof!\");\n}\n}\npublic class Main {\npublic static void main(String[] args) {\nDog d = new Dog(\"Buddy\");\nd.bark();\n}\n}",
    "options": [
      "Buddy Woof!",
      "Buddy says Woof!",
      "Woof!",
      "Compile error"
    ],
    "answer": 1,
    "explanation": "Constructor `Dog(\"Buddy\")` gán `name = \"Buddy\"`. Sau đó `d.bark()` nối chuỗi và in ra chính xác **`Buddy says Woof!`**."
  },
  {
    "id": 5101,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 RE (50 câu - Full Giải)",
    "question": "[SP26_B5_RE - Câu 1/50] You are developing a gaming leaderboard system where each player has a unique score. Discuss how you would utilize a Java collection to maintain the leaderboard, ensuring efficient access to the highest scores while minimizing duplicate entries.",
    "options": [
      "Use a PriorityQueue<Player> with a custom comparator for sorting players based on scores.",
      "Implement a custom LinkedList class with a doubly-linked list for efficient score updates.",
      "Utilize a TreeMap<Integer, Set<Player>> to map scores to sets of players.",
      "Choose a LinkedHashSet<Player> to maintain player order while ensuring uniqueness.",
      "Design a custom balanced search tree for efficient score-based player retrieval.",
      "Utilize a HashMap<Integer, Player> to directly map scores to players."
    ],
    "answer": 2,
    "explanation": "Đáp án đúng là C vì TreeMap<Integer, Set<Player>> tự động sắp xếp các điểm số (key) theo thứ tự để truy xuất điểm cao nhất hiệu quả (như lastKey() hoặc descendingMap()), đồng thời Set<Player> giúp tránh trùng lặp người chơi. PriorityQueue (A) không tự ngăn trùng lặp và khó cập nhật điểm, LinkedHashSet (D) hay HashMap (F) không duy trì thứ tự sắp xếp theo điểm."
  },
  {
    "id": 5102,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 RE (50 câu - Full Giải)",
    "question": "[SP26_B5_RE - Câu 2/50] Which is a valid keyword in Java?",
    "options": [
      "interface",
      "include",
      "Float",
      "Integer"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì interface là từ khóa (keyword) hợp lệ dùng để khai báo giao diện trong Java. include (B) là chỉ thị tiền xử lý trong C/C++, còn Float (C) và Integer (D) là tên các lớp wrapper trong gói java.lang chứ không phải từ khóa."
  },
  {
    "id": 5103,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 RE (50 câu - Full Giải)",
    "question": "[SP26_B5_RE - Câu 3/50] In binary numbers, how many digits does a byte hold?",
    "options": [
      "16",
      "8",
      "4",
      "2"
    ],
    "answer": 1,
    "explanation": "Đáp án đúng là B vì theo chuẩn tin học, 1 byte tương đương với 8 bit, tức là chứa 8 chữ số nhị phân (0 hoặc 1). Các giá trị 16 (A), 4 (C) và 2 (D) không đúng với định nghĩa chuẩn của một byte."
  },
  {
    "id": 5104,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 RE (50 câu - Full Giải)",
    "question": "[SP26_B5_RE - Câu 4/50] What is the meaning of platform-independent?",
    "options": [
      "write once, run anywhere",
      "not easy to execute on any system after compilation.",
      "the execution of the program is restricted by the type of OS environment provided.",
      "All of the others"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì tính độc lập nền tảng (platform-independent) trong Java có nghĩa là \"viết một lần, chạy mọi nơi\" (write once, run anywhere): mã nguồn biên dịch thành bytecode có thể chạy trên bất kỳ hệ điều hành nào có JVM. B và C mô tả sự phụ thuộc nền tảng nên sai."
  },
  {
    "id": 5105,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 RE (50 câu - Full Giải)",
    "question": "[SP26_B5_RE - Câu 5/50] To run a Java program, which the software must be installed?",
    "options": [
      "Java Runtime Environment (JRE)",
      "Eclipse",
      "Java Development Kit (JDK)",
      "Netbeans"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì để chỉ chạy (execute) một chương trình Java đã biên dịch, máy tính bắt buộc phải cài JRE (chứa JVM và các thư viện chạy). JDK (C) dùng cho lập trình và biên dịch mã nguồn, còn Eclipse (B) và Netbeans (D) chỉ là IDE hỗ trợ phát triển."
  },
  {
    "id": 5106,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 RE (50 câu - Full Giải)",
    "question": "[SP26_B5_RE - Câu 6/50] Which of the following types of errors occur during the execution of a program but are due to incorrect program design?",
    "options": [
      "Compiler errors",
      "Syntax errors",
      "Run-time errors",
      "Logic errors"
    ],
    "answer": 3,
    "explanation": "Đáp án đúng là D vì lỗi logic (Logic errors) xảy ra khi chương trình biên dịch và chạy bình thường nhưng cho ra kết quả sai do thiết kế thuật toán hoặc logic không đúng. Compiler errors (A) và Syntax errors (B) được phát hiện lúc biên dịch, còn Run-time errors (C) là lỗi gây dừng bất thường khi chạy."
  },
  {
    "id": 5107,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 RE (50 câu - Full Giải)",
    "question": "[SP26_B5_RE - Câu 7/50] Which of the following is NOT a Java feature?",
    "options": [
      "Use of pointers.",
      "Ease of learning.",
      "It is a secure language.",
      "Independent Platform."
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì Java loại bỏ việc sử dụng con trỏ (pointers) trực tiếp như C/C++ để tăng tính an toàn và đơn giản hóa quản lý bộ nhớ. Các đặc điểm còn lại như dễ học (B), bảo mật (C) và độc lập nền tảng (D) đều là tính năng của Java."
  },
  {
    "id": 5108,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 RE (50 câu - Full Giải)",
    "question": "[SP26_B5_RE - Câu 8/50] A Java source code will be compiled to the file in which of the following extensions?",
    "options": [
      ".class",
      ".java",
      ".exe",
      ".bat"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì trình biên dịch javac sẽ biên dịch tệp mã nguồn .java thành tệp bytecode có phần mở rộng .class để JVM thực thi. .java (B) là tệp mã nguồn, còn .exe (C) và .bat (D) là tệp thực thi/batch của Windows."
  },
  {
    "id": 5109,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 RE (50 câu - Full Giải)",
    "question": "[SP26_B5_RE - Câu 9/50] What is the output?\n\n⚠️ (Lưu ý: Ảnh đề gốc SP26_B5_RE bị thiếu đoạn code Java minh họa — dạng bài gọi toLowerCase() / xử lý chuỗi \"Ab Cd Ab Ef Gh\" in ra chuỗi chữ thường.)",
    "options": [
      "Ab Cd AB CD AB EF Gh Ab Cd",
      "ab cd AB EF ab ef Gh ab ef Gh",
      "Ab Cd AB CD AB EF Gh Ab Cd",
      "ab cd ab ef gh"
    ],
    "answer": 3,
    "explanation": "Đáp án của đề gốc là D (\"ab cd ab ef gh\").\n• Lưu ý: Chính ảnh đề gốc của đề SP26_B5_RE (Câu 8 trong ảnh) bị thiếu mất đoạn code Java (và gõ lặp A giống hệt C). Đây là dạng câu kiểm tra các phương thức biến đổi chuỗi như toLowerCase() / toUpperCase() / replace() trên String."
  },
  {
    "id": 5110,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 RE (50 câu - Full Giải)",
    "question": "[SP26_B5_RE - Câu 10/50] Which set correctly lists all the integer primitive data types in Java?",
    "options": [
      "byte, short, float, int",
      "short, long, byte, int",
      "int, short, double, byte",
      "long, int, boolean, byte"
    ],
    "answer": 1,
    "explanation": "Đáp án đúng là B vì 4 kiểu dữ liệu nguyên thủy số nguyên (integer) trong Java gồm byte, short, int và long. Phương án A sai vì chứa float (số thực), C sai vì chứa double (số thực), và D sai vì chứa boolean (kiểu luận lý)."
  },
  {
    "id": 5111,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 RE (50 câu - Full Giải)",
    "question": "[SP26_B5_RE - Câu 11/50] What is the output of the following Java code?\n\npublic class StringTest {\n    public static void main(String[] args) {\n        String s1 = \"hello\";\n        String s2 = new String(\"hello\");\n        System.out.println(s1 == s2);\n    }\n}",
    "options": [
      "true",
      "false",
      "Compile-time error",
      "null"
    ],
    "answer": 1,
    "explanation": "Đáp án đúng là B vì s1 trỏ tới đối tượng trong String Pool còn new String(\"hello\") tạo một đối tượng mới cho s2 trên Heap. Toán tử == so sánh địa chỉ tham chiếu của hai đối tượng khác nhau nên s1 == s2 trả về false (A sai vì == không so sánh nội dung như equals())."
  },
  {
    "id": 5112,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 RE (50 câu - Full Giải)",
    "question": "[SP26_B5_RE - Câu 12/50] What is the output of the code snippet?\n\npublic class Test {\n    public static void main(String[] args) {\n        int result;\n        System.out.println(result = true ? 100 : 5);\n    }\n}",
    "options": [
      "100",
      "5",
      "0",
      "Runtime error."
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì biểu thức điều kiện ba ngôi true ? 100 : 5 có điều kiện là true nên trả về 100, sau đó gán 100 cho biến result và in ra giá trị 100. Phương án B (5) chỉ xảy ra khi điều kiện là false, còn code biên dịch và chạy hợp lệ nên D sai."
  },
  {
    "id": 5113,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 RE (50 câu - Full Giải)",
    "question": "[SP26_B5_RE - Câu 13/50] What is the output of the code snippet?\n\npublic class Test {\n    public static void main(String[] args) {\n        int[] a = new int[5];\n        for (int i : a) {\n            i = 1;\n        }\n        System.out.println(a[1]);\n    }\n}",
    "options": [
      "0",
      "1",
      "null",
      "[I@15db9742]"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì mảng int[] a = new int[5] khởi tạo mặc định các phần tử bằng 0, và vòng lặp for-each (int i : a) chỉ sao chép giá trị vào biến cục bộ i. Do đó lệnh i = 1 không làm thay đổi phần tử trong mảng a và a[1] vẫn là 0 (nên B là sai)."
  },
  {
    "id": 5114,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 RE (50 câu - Full Giải)",
    "question": "[SP26_B5_RE - Câu 14/50] Which string method is used to split a string using a regular expression?",
    "options": [
      "separate()",
      "tokenize()",
      "split()",
      "parse()"
    ],
    "answer": 2,
    "explanation": "Đáp án đúng là C vì lớp String trong Java cung cấp phương thức split(String regex) để tách chuỗi thành mảng String dựa trên biểu thức chính quy. Các phương thức separate() (A), tokenize() (B) và parse() (D) không phải phương thức của lớp String."
  },
  {
    "id": 5115,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 RE (50 câu - Full Giải)",
    "question": "[SP26_B5_RE - Câu 15/50] What is a checked exception in Java?",
    "options": [
      "Checked exceptions are the ones that are checked during compilation time",
      "Checked exceptions are the ones that are checked during the execution time",
      "Checked exceptions are syntax errors",
      "Checked exceptions are runtime errors"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì checked exception là các ngoại lệ được trình biên dịch kiểm tra ngay tại thời điểm biên dịch (compile time), bắt buộc lập trình viên phải xử lý bằng try-catch hoặc khai báo throws. Phương án B và D mô tả unchecked/runtime exception, còn C (syntax errors) không phải ngoại lệ."
  },
  {
    "id": 5116,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 RE (50 câu - Full Giải)",
    "question": "[SP26_B5_RE - Câu 16/50] What is the purpose of Java's wrapper classes?",
    "options": [
      "To define GUI elements.",
      "To encapsulate primitive types in objects.",
      "To create multiple inheritance.",
      "To enhance string performance."
    ],
    "answer": 1,
    "explanation": "Đáp án đúng là B vì các lớp wrapper (như Integer, Double, Boolean) dùng để đóng gói kiểu dữ liệu nguyên thủy (primitive types) thành đối tượng, phục vụ cho Collections hoặc Generics. Các phương án A, C, D không phải mục đích của lớp wrapper."
  },
  {
    "id": 5117,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 RE (50 câu - Full Giải)",
    "question": "[SP26_B5_RE - Câu 17/50] What is the difference between a class and an object?",
    "options": [
      "A class is a blueprint to make an object",
      "An object is a blueprint to make a class",
      "A class is only like an object",
      "None of the others"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì trong lập trình hướng đối tượng, class đóng vai trò là bản thiết kế (blueprint/khuôn mẫu) định nghĩa thuộc tính và hành vi, từ đó tạo ra các đối tượng (object) cụ thể. Phương án B đảo ngược sai khái niệm này."
  },
  {
    "id": 5118,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 RE (50 câu - Full Giải)",
    "question": "[SP26_B5_RE - Câu 18/50] What are components of a class in Java OOP? Choose multiple correct answers.",
    "options": [
      "Constructors are responsible for object creation",
      "Attributes, Fields, Properties of a class represents by variables",
      "Behaviours, Modification code represent by methods or functions",
      "main() method for execution of the class"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Các đáp án đúng là A, B, C vì một lớp (class) trong Java OOP bao gồm constructor để khởi tạo/tạo đối tượng (A), các thuộc tính/trường biểu diễn bằng biến (B), và các hành vi biểu diễn bằng phương thức (C). Phương thức main() (D) chỉ là điểm khởi đầu để chạy chương trình chứ không phải thành phần bắt buộc của mọi class."
  },
  {
    "id": 5119,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 RE (50 câu - Full Giải)",
    "question": "[SP26_B5_RE - Câu 19/50] Which of the following describes an mutator(setter) method?",
    "options": [
      "A method that deletes object data.",
      "A method that modifies object data without directly accessing it",
      "A method that retrieves object data without changing it.",
      "A method that returns nothing."
    ],
    "answer": 1,
    "explanation": "Đáp án đúng là B vì phương thức mutator (setter) dùng để thay đổi giá trị dữ liệu (thuộc tính private) của đối tượng một cách gián tiếp thông qua tính đóng gói. Phương án C mô tả accessor (getter), còn A và D không mô tả đúng bản chất của setter."
  },
  {
    "id": 5120,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 RE (50 câu - Full Giải)",
    "question": "[SP26_B5_RE - Câu 20/50] What is the output of the following Java code?\n(Code minh họa theo mô tả đề gốc SP26_B5_RE):\n\nclass Employee {\n    private double salary;\n    public Employee(double s) { salary = s; }\n    public void raiseSalary(double byPercent) {\n        salary += salary * byPercent / 100;\n    }\n    public double getSalary() { return salary; }\n}\npublic class ReferenceTest {\n    public static void main(String[] args) {\n        Employee e = new Employee(50000);\n        e.raiseSalary(20);\n        System.out.println((int) e.getSalary());\n    }\n}",
    "options": [
      "50000",
      "52000",
      "60000",
      "Compile-time error"
    ],
    "answer": 2,
    "explanation": "Đáp án đúng là C (60000). Khi gọi e.raiseSalary(20) trên đối tượng Employee có lương ban đầu 50000, phương thức cập nhật trực tiếp thuộc tính salary của đối tượng trên Heap tăng thêm 20%: 50000 + 50000 × 20% = 60000."
  },
  {
    "id": 5121,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 RE (50 câu - Full Giải)",
    "question": "[SP26_B5_RE - Câu 21/50] Which of the following is the MOST RESTRICTIVE access level for a class member in Java?",
    "options": [
      "protected",
      "default (package-private)",
      "public",
      "private"
    ],
    "answer": 3,
    "explanation": "Đáp án đúng là D vì private chỉ cho phép truy cập thành viên ở bên trong chính lớp khai báo nó, là mức giới hạn chặt chẽ nhất trong Java. Thứ tự nới lỏng dần là private < default (package-private) < protected < public."
  },
  {
    "id": 5122,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 RE (50 câu - Full Giải)",
    "question": "[SP26_B5_RE - Câu 22/50] What is a subclass in Java inheritance?",
    "options": [
      "The class that inherits from another class",
      "The class that is inherited from multiple classes",
      "The final class in the inheritance chain",
      "The class that has abstract methods"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì lớp con (subclass) là lớp kế thừa các thuộc tính và phương thức từ một lớp khác (superclass) thông qua từ khóa extends. B sai vì Java không hỗ trợ đa kế thừa lớp, C và D nói về final/abstract class chứ không phải định nghĩa subclass."
  },
  {
    "id": 5123,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 RE (50 câu - Full Giải)",
    "question": "[SP26_B5_RE - Câu 23/50] Which of the following is NOT one of the four fundamental object-oriented programming concepts?",
    "options": [
      "Abstraction",
      "Inheritance",
      "Composition",
      "Polymorphism"
    ],
    "answer": 2,
    "explanation": "Đáp án đúng là C vì 4 nguyên lý cơ bản của lập trình hướng đối tượng (OOP) là Encapsulation (Đóng gói), Abstraction (Trừu tượng - A), Inheritance (Kế thừa - B) và Polymorphism (Đa hình - D). Composition (hợp thành) là một quan hệ thiết kế \"has-a\" chứ không thuộc 4 nguyên lý nền tảng này."
  },
  {
    "id": 5124,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 RE (50 câu - Full Giải)",
    "question": "[SP26_B5_RE - Câu 24/50] Consider the provided code involving interfaces Animal, Pet and class Dog, and the test class. What is the output?\n(Code minh họa đầy đủ của biến thể đáp án D):\n\ninterface Animal {\n    void makeSound();\n    void move();\n}\ninterface Pet {\n    void play();\n}\nclass Dog implements Animal, Pet {\n    public void makeSound() { System.out.print(\"Woof! \"); }\n    public void move() { System.out.print(\"Running \"); }\n    public void play() { System.out.print(\"Playing fetch\"); }\n}\npublic class Test {\n    public static void main(String[] args) {\n        Dog d = new Dog();\n        d.makeSound(); d.move(); d.play();\n    }\n}",
    "options": [
      "Compilation error occurs",
      "Woof! Running Playing fetch",
      "Running Playing fetch",
      "Woof! Running Playing fetch"
    ],
    "answer": 3,
    "explanation": "Đáp án đúng là D (\"Woof! Running Playing fetch\").\n• Khi class Dog cài đặt ĐẦY ĐỦ cả 3 phương thức makeSound(), move(), play() từ 2 interface Animal và Pet rồi gọi lần lượt cả 3 → chương trình chạy bình thường và in ra \"Woof! Running Playing fetch\".\n• Lưu ý phân biệt với biến thể ở đề SP26_RE Câu 24: nếu Dog quên cài đặt move() thì sẽ chọn A (Compilation error occurs). Ngoài ra, trong ảnh gốc SP26_B5_RE bị lỗi gõ lặp B giống hệt D."
  },
  {
    "id": 5125,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 RE (50 câu - Full Giải)",
    "question": "[SP26_B5_RE - Câu 25/50] What is the main advantage of using interfaces in Java regarding inheritance?",
    "options": [
      "Enable multiple inheritance capability.",
      "Provides faster execution speed compared to abstract classes.",
      "Automatically generate constructor methods for implementing classes.",
      "Allow direct instantiation of interface objects without implementing classes."
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì trong Java một lớp chỉ có thể kế thừa (extends) tối đa một lớp cha, nhưng có thể triển khai (implements) nhiều interface cùng lúc, giúp đạt được khả năng đa kế thừa về kiểu. B, C và D đều sai vì interface không có constructor và không thể khởi tạo trực tiếp bằng toán tử new thông thường."
  },
  {
    "id": 5126,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 RE (50 câu - Full Giải)",
    "question": "[SP26_B5_RE - Câu 26/50] Choose multiple correct answers.",
    "options": [
      "The purpose of a getter method in Java is to get the value of a variable",
      "The purpose of a setter method in Java is to set the value of a variable",
      "return keyword used to define getter and setter method in Java",
      "Access modifiers often used for getter or setter method is public"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "Đáp án đúng là A, B, D: phương thức getter dùng để lấy giá trị biến, setter dùng để gán giá trị biến và cả hai thường được khai báo với access modifier là `public` để bên ngoài truy cập. Phương án C sai vì từ khóa `return` chỉ dùng trong thân hàm getter để trả về giá trị, không dùng để định nghĩa getter hay setter."
  },
  {
    "id": 5127,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 RE (50 câu - Full Giải)",
    "question": "[SP26_B5_RE - Câu 27/50] What is a way to group related classes in Java and it is called a namespace?",
    "options": [
      "package",
      "file",
      "software",
      "folder"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A (`package`): trong Java, `package` được dùng để nhóm các lớp (classes) và giao diện liên quan lại với nhau, đồng thời đóng vai trò như một không gian tên (namespace) giúp tránh xung đột tên. `file`, `software` hay `folder` không phải là khái niệm namespace trong ngôn ngữ Java."
  },
  {
    "id": 5128,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 RE (50 câu - Full Giải)",
    "question": "[SP26_B5_RE - Câu 28/50] Consider a superclass \"Shape\" with a method \"draw()\" and a subclass \"Circle\" that overrides the \"draw()\" method. If an object of the \"Circle\" class is declared using the superclass type and the \"draw()\" method is invoked, what will happen?",
    "options": [
      "The \"draw()\" method of the subclass will be executed.",
      "The \"draw()\" method of the superclass will be executed.",
      "A compilation error will occur.",
      "The \"draw()\" method will execute based on the type of the reference variable.",
      "Both the \"draw()\" methods of the superclass and subclass will be executed.",
      "The result depends on whether the \"draw()\" method is static or instance."
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A: nhờ cơ chế đa hình động (dynamic method dispatch / runtime polymorphism) trong Java, khi gọi phương thức đã được ghi đè (`override`), JVM sẽ thực thi phiên bản `draw()` của đối tượng thực tế lúc chạy (`Circle`), bất kể biến tham chiếu mang kiểu lớp cha `Shape`. Các phương án B, D (dựa theo kiểu biến tham chiếu) hay C, E đều sai với hành vi ghi đè phương thức instance."
  },
  {
    "id": 5129,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 RE (50 câu - Full Giải)",
    "question": "[SP26_B5_RE - Câu 29/50] What is the output following the code snippet?\n(Code minh họa theo mô tả đề gốc — DemoClass có 2 hàm add giống hệt danh sách tham số):\n\nclass DemoClass {\n    void add(int a, int b) {\n        System.out.println(\"1. Addition of two numbers: \" + (a + b));\n    }\n    int add(int a, int b) {\n        System.out.println(\"2. Addition of two numbers: \" + (a + b));\n        return a + b;\n    }\n}",
    "options": [
      "Compile error",
      "2. Addition of two numbers: 50",
      "1. Addition of two numbers: 50",
      "20, 30"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A (Compile error). Trong Java, nạp chồng phương thức (Method Overloading) BẮT BUỘC phải khác danh sách tham số (số lượng, kiểu hoặc thứ tự). Hai phương thức add(int a, int b) có cùng chữ ký sẽ gây lỗi biên dịch duplicate method, bất kể kiểu trả về giống hay khác nhau."
  },
  {
    "id": 5130,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 RE (50 câu - Full Giải)",
    "question": "[SP26_B5_RE - Câu 30/50] In Java, can an abstract class have instance variables?",
    "options": [
      "Yes, abstract classes can have both instance and static variables.",
      "No, abstract classes cannot have instance variables.",
      "Yes, but only if the instance variables are declared as \"static\"",
      "Yes, but only if the abstract class has no methods."
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A: lớp trừu tượng (`abstract class`) trong Java vẫn có thể khai báo cả biến đối tượng (`instance variables`) và biến tĩnh (`static variables`) bình thường như một lớp thông thường. Các phương án B, C, D sai vì nhầm lẫn quy tắc của `abstract class` với `interface` (chỉ có hằng số `public static final`)."
  },
  {
    "id": 5131,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 RE (50 câu - Full Giải)",
    "question": "[SP26_B5_RE - Câu 31/50] What is the output of the following Java program?\n(Code minh họa theo mô tả đề gốc — Abstract class A chỉ có constructor có tham số, nhưng Main gọi new A() {}):\n\nabstract class A {\n    private int a, b;\n    A(int a, int b) { this.a = a; this.b = b; }\n    int sum() { return a + b; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        A m = new A() {};\n        System.out.println(m.sum());\n    }\n}",
    "options": [
      "37",
      "12",
      "25",
      "Compiler error at statement A m = new A() {};"
    ],
    "answer": 3,
    "explanation": "Đáp án đúng là D (Compiler error at statement A m = new A() {};). Vì lớp trừu tượng A đã tự định nghĩa constructor có tham số A(int a, int b) nên trình biên dịch KHÔNG tự sinh constructor không tham số A(). Do đó câu lệnh tạo lớp ẩn danh new A() {} gọi ngầm A() bị lỗi biên dịch!"
  },
  {
    "id": 5132,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 RE (50 câu - Full Giải)",
    "question": "[SP26_B5_RE - Câu 32/50] Choose multiple correct answers.",
    "options": [
      "Inheritance allows a class to inherit the properties and methods of another class",
      "The keyword \"extends\" is used to indicate inheritance in Java. It is used in the declaration of a subclass to specify the superclass that it is inheriting from.",
      "A subclass can access the private members of the superclass",
      "Java supports both multiple inheritance of classes and interfaces"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Đáp án đúng chuẩn Java là A và B:\n• A đúng: Kế thừa cho phép lớp con thừa hưởng thuộc tính và phương thức từ lớp cha.\n• B đúng: Từ khóa `extends` dùng để khai báo kế thừa giữa lớp con và lớp cha.\n• C sai: Lớp con KHÔNG thể truy cập trực tiếp thành viên `private` của lớp cha.\n• D sai: Java KHÔNG hỗ trợ đa kế thừa đối với `class` (chỉ hỗ trợ với `interface`).\n(Đã sửa từ đáp án sai D của web nguồn về đúng chuẩn Java A, B — khớp với SU26 Câu 9 & SP26_RE Câu 31.)"
  },
  {
    "id": 5133,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 RE (50 câu - Full Giải)",
    "question": "[SP26_B5_RE - Câu 33/50] Can a subclass override a method that is declared as final in its superclass?",
    "options": [
      "Yes, under certain circumstances and a warning will be issued by the compiler.",
      "Yes, but a warning will be issued by the compiler.",
      "No, a final method cannot be overridden by any subclass.",
      "Only if the subclass is in a different package."
    ],
    "answer": 2,
    "explanation": "Đáp án đúng là C: trong Java, từ khóa `final` gắn trên phương thức dùng để khóa không cho bất kỳ lớp con nào ghi đè (`override`) phương thức đó. Nếu lớp con cố tình ghi đè sẽ gây lỗi biên dịch chứ không chỉ cảnh báo (loại A, B) và không phụ thuộc vào package (loại D)."
  },
  {
    "id": 5134,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 RE (50 câu - Full Giải)",
    "question": "[SP26_B5_RE - Câu 34/50] What is the output following code snippet:\n\nint sum=0;\nfor(int i=0;i<=10;i++){\n    sum+= (i%2==0?i:-i);\n}\nSystem.out.println(sum);",
    "options": [
      "5",
      "2",
      "The program will raise an exception.",
      "3"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A (`5`): vòng lặp chạy `i` từ `0` đến `10`, nếu `i` chẵn (`i % 2 == 0`) thì cộng `i`, ngược lại cộng `-i`. Biểu thức tính `sum` là `0 - 1 + 2 - 3 + 4 - 5 + 6 - 7 + 8 - 9 + 10 = 5`. Chương trình hợp lệ và không phát sinh ngoại lệ (loại C)."
  },
  {
    "id": 5135,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 RE (50 câu - Full Giải)",
    "question": "[SP26_B5_RE - Câu 35/50] In a banking application, you need to represent customer accounts using object arrays. Which OOP concept allows you to create a blueprint for the Account class?",
    "options": [
      "Inheritance",
      "Abstraction",
      "Encapsulation",
      "Polymorphism",
      "Composition",
      "Interface"
    ],
    "answer": 1,
    "explanation": "Đáp án đúng là B (`Abstraction`): tính trừu tượng giúp mô hình hóa các thuộc tính và hành vi cốt lõi của tài khoản thành một bản thiết kế (blueprint) cho lớp `Account`, bỏ qua các chi tiết không cần thiết. `Inheritance` (kế thừa), `Encapsulation` (đóng gói che giấu dữ liệu) hay `Polymorphism` (đa hình) phục vụ mục đích khác."
  },
  {
    "id": 5136,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 RE (50 câu - Full Giải)",
    "question": "[SP26_B5_RE - Câu 36/50] Which of the following statements is used to get the size of a one-dimensional array in Java? Assume that array is given by this statement:\n\nint[] arr = new int[100];",
    "options": [
      "arr.length",
      "arr.length()",
      "arr.size",
      "arr.size()"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A (`arr.length`): mảng một chiều trong Java cung cấp thuộc tính `length` (không có dấu ngoặc đơn) để lấy số lượng phần tử. `length()` là phương thức của lớp `String`, còn `size()` là phương thức của các Collection như `ArrayList`."
  },
  {
    "id": 5137,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 RE (50 câu - Full Giải)",
    "question": "[SP26_B5_RE - Câu 37/50] Choose the correct statement related to the encapsulation concept in Java.",
    "options": [
      "Data hiding",
      "Method hiding",
      "Hiding constructor",
      "Class hiding"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A (`Data hiding`): tính đóng gói (Encapsulation) trong Java gắn liền với nguyên lý che giấu dữ liệu bằng cách khai báo thuộc tính là `private` và cung cấp các phương thức `public` (getter/setter) để kiểm soát truy cập. Các khái niệm còn lại không phải trọng tâm của encapsulation."
  },
  {
    "id": 5138,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 RE (50 câu - Full Giải)",
    "question": "[SP26_B5_RE - Câu 38/50] Which of the following classes is used for shuffling an ArrayList in Java?",
    "options": [
      "Collections",
      "CollectionList",
      "Arrays",
      "Array.Util"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A (`Collections`): lớp tiện ích `java.util.Collections` cung cấp phương thức tĩnh `Collections.shuffle(list)` để xáo trộn ngẫu nhiên các phần tử trong `ArrayList`. `Arrays` dùng để thao tác với mảng thường, còn `CollectionList` và `Array.Util` không tồn tại trong Java."
  },
  {
    "id": 5139,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 RE (50 câu - Full Giải)",
    "question": "[SP26_B5_RE - Câu 39/50] All abstract data structures: List, Set, Map is implemented in which of the following types?",
    "options": [
      "Interface",
      "Abstract class",
      "Concrete class",
      "Derived class"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A (`Interface`): trong Java Collections Framework (`java.util`), `List`, `Set` và `Map` đều được khai báo là các `interface` để định nghĩa hành vi chung, sau đó được cài đặt bởi các lớp cụ thể như `ArrayList`, `HashSet`, `HashMap`. Chúng không phải là `Abstract class` hay `Concrete class`."
  },
  {
    "id": 5140,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 RE (50 câu - Full Giải)",
    "question": "[SP26_B5_RE - Câu 40/50] Which operation is fastest in LinkedList compared to ArrayList?",
    "options": [
      "Accessing an element by index",
      "Iterating through the list",
      "Inserting or removing elements at the beginning",
      "Sorting the list"
    ],
    "answer": 2,
    "explanation": "Đáp án đúng là C: `LinkedList` có cấu trúc danh sách liên kết nên việc thêm hoặc xóa phần tử ở đầu danh sách chỉ mất O(1) (chỉ đổi con trỏ), nhanh hơn nhiều so với `ArrayList` mất O(n) do phải dịch chuyển các phần tử phía sau. Ngược lại, `ArrayList` vượt trội khi truy cập phần tử theo chỉ số (A)."
  },
  {
    "id": 5141,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 RE (50 câu - Full Giải)",
    "question": "[SP26_B5_RE - Câu 41/50] What is the output of the following code snippet?\n\nSet<Integer> set = new HashSet();\nset.add('1');\nset.add(2);\nset.add(3);\nset.add(1);\nSystem.out.println(set.size());",
    "options": [
      "3",
      "4",
      "1",
      "0"
    ],
    "answer": 0,
    "explanation": "Đáp án lưu trữ là A (`3`): đề bài coi các phần tử được thêm vào là `1, 2, 3, 1`, vì `HashSet` không lưu phần tử trùng lặp nên tập hợp chỉ còn `{1, 2, 3}` với `size()` bằng `3`. Tuy nhiên theo đúng cú pháp Java, `set` có kiểu `Set<Integer>` nên lệnh `set.add('1')` (truyền ký tự `char`) thực tế sẽ gây lỗi biên dịch vì `char` không thể autobox sang `Integer`."
  },
  {
    "id": 5142,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 RE (50 câu - Full Giải)",
    "question": "[SP26_B5_RE - Câu 42/50] Choose correct answer about anonymous class?",
    "options": [
      "A class that is defined without a name and can be instantiated only once",
      "The purpose of using an anonymous class is to provide a way to implement an interface or extend a class without explicitly defining a named class.",
      "An anonymous class is created using the “new” keyword followed by the name of the interface or class being implemented or extended.",
      "Anonymous classes are like local classes except that they do not have a name.",
      "All of the others"
    ],
    "answer": 4,
    "explanation": "Đáp án đúng là E (`All of the others`): cả bốn phát biểu A, B, C, D đều mô tả đúng bản chất của anonymous class trong Java — là lớp cục bộ không tên, được khai báo và khởi tạo một lần tại chỗ bằng từ khóa `new` theo sau tên lớp cha hoặc interface cần mở rộng/cài đặt."
  },
  {
    "id": 5143,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 RE (50 câu - Full Giải)",
    "question": "[SP26_B5_RE - Câu 43/50] What is the size of an ArrayList if capacity is NOT specified during initialization?",
    "options": [
      "0",
      "1",
      "16",
      "10"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A (`0`): khi khởi tạo `new ArrayList<>()`, danh sách chưa chứa phần tử nào nên phương thức `size()` trả về `0`. Giá trị `10` (phương án D) là dung lượng (`capacity`) mặc định ban đầu của mảng nội bộ khi thêm phần tử đầu tiên, không phải kích thước (`size`) hiện tại."
  },
  {
    "id": 5144,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 RE (50 câu - Full Giải)",
    "question": "[SP26_B5_RE - Câu 44/50] Which of the following classes is used to iterate through lines in a text file when reading line by line?",
    "options": [
      "BufferedReader",
      "FileReader",
      "FileInputStream",
      "InputStreamReader"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A (`BufferedReader`): lớp `BufferedReader` cung cấp phương thức `readLine()` cho phép đọc tệp văn bản theo từng dòng rất thuận tiện. `FileReader` và `InputStreamReader` chỉ đọc theo ký tự, còn `FileInputStream` đọc dữ liệu nhị phân theo byte."
  },
  {
    "id": 5145,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 RE (50 câu - Full Giải)",
    "question": "[SP26_B5_RE - Câu 45/50] In the object stream, which of the following members of an object won't be serialized?",
    "options": [
      "transient variables",
      "final variables",
      "inherited variables",
      "All of the others"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A (`transient variables`): các biến khai báo với từ khóa `transient` (cũng như biến `static`) sẽ bị bỏ qua khi tuần tự hóa (serialize) đối tượng qua `ObjectOutputStream`. Các biến `final` hoặc biến kế thừa (khi lớp implements `Serializable`) vẫn được serialize bình thường."
  },
  {
    "id": 5146,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 RE (50 câu - Full Giải)",
    "question": "[SP26_B5_RE - Câu 46/50] What is the output of the following code snippet?\n\nString fName = \"test.txt\";\nFileInputStream fs = new FileInputStream(fName);\nbyte[] lst = new byte[100];\nfs.read(lst, 0, 4);\nSystem.out.format(\"%c%n\", lst[1]);\n\nAssume test.txt has the content as follows: 01234567890",
    "options": [
      "1",
      "0",
      "2",
      "3"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A (1). Lệnh fs.read(lst, 0, 4) đọc 4 byte đầu tiên của \"01234567890\" vào mảng lst: lst[0] = '0', lst[1] = '1', lst[2] = '2', lst[3] = '3'. Do đó lệnh System.out.format(\"%c%n\", lst[1]) in ra ký tự thứ hai là '1'."
  },
  {
    "id": 5147,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 RE (50 câu - Full Giải)",
    "question": "[SP26_B5_RE - Câu 47/50] Which of the following methods of File class is used to check a file is hidden?",
    "options": [
      "isHidden()",
      "isDisplay()",
      "isWrite()",
      "isRead()"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A (`isHidden()`): lớp `java.io.File` cung cấp phương thức `isHidden()` trả về `true` nếu tệp hoặc thư mục đang ở trạng thái ẩn. Các tên phương thức ở B, C, D (`isDisplay()`, `isWrite()`, `isRead()`) đều không tồn tại trong lớp `File`."
  },
  {
    "id": 5148,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 RE (50 câu - Full Giải)",
    "question": "[SP26_B5_RE - Câu 48/50] How do you check if a File object refers to a file (NOT a directory) in Java?",
    "options": [
      "isFile()",
      "checkFile()",
      "isNotDirectory()",
      "notIsDirectory()"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A (`isFile()`): trong lớp `java.io.File`, phương thức `isFile()` trả về `true` nếu đối tượng trỏ tới một tệp tin thông thường chứ không phải thư mục (ngược với `isDirectory()`). Các phương thức B, C, D không tồn tại trong API của `File`."
  },
  {
    "id": 5149,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 RE (50 câu - Full Giải)",
    "question": "[SP26_B5_RE - Câu 49/50] Which of the following statements is used to add the content to an existing text file?",
    "options": [
      "Set the append parameter to true in the constructor of the FileWriter object",
      "Set the append parameter to true in the constructor of the File object",
      "Set append parameter of true in the constructor of OutputStream object",
      "All of the others"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A: để ghi nối thêm nội dung vào cuối tệp văn bản có sẵn mà không ghi đè, ta truyền `true` cho tham số `append` trong constructor của `FileWriter` (ví dụ `new FileWriter(file, true)`). Lớp `File` và `OutputStream` không có constructor nhận tham số `append` như B và C mô tả."
  },
  {
    "id": 5150,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 RE (50 câu - Full Giải)",
    "question": "[SP26_B5_RE - Câu 50/50] What type of relationship does aggregation describe in object-oriented design?",
    "options": [
      "\"is a kind of\" relationship, indicating inheritance",
      "\"inherits from\" relationship in class hierarchies",
      "\"uses\" relationship, where one class calls another",
      "\"has a\" relationship, showing ownership or containment."
    ],
    "answer": 3,
    "explanation": "Đáp án đúng là D: quan hệ kết tập (Aggregation) trong thiết kế hướng đối tượng mô tả mối quan hệ \"has-a\" (chứa đựng hoặc sở hữu yếu giữa đối tượng tổng thể và thành phần). Các phương án A, B mô tả quan hệ kế thừa (\"is-a\"), còn C mô tả quan hệ phụ thuộc (Dependency / \"uses\")."
  },
  {
    "id": 5201,
    "topic": "🏆 Đề FE PRO192 - SP26 RE (50 câu - Full Giải)",
    "question": "[SP26_RE - Câu 1/50] To run a Java program, which the software must be installed?",
    "options": [
      "Java Runtime Environment (JRE)",
      "Eclipse",
      "Java Development Kit (JDK)",
      "Netbeans"
    ],
    "answer": 0,
    "explanation": "Để chạy một chương trình Java đã biên dịch, máy tính chỉ cần cài đặt Java Runtime Environment (JRE) vì JRE chứa JVM và các thư viện lõi để thực thi bytecode. JDK dùng cho việc phát triển (bao gồm trình biên dịch javac và JRE), còn Eclipse và Netbeans chỉ là các IDE hỗ trợ lập trình chứ không bắt buộc để chạy chương trình."
  },
  {
    "id": 5202,
    "topic": "🏆 Đề FE PRO192 - SP26 RE (50 câu - Full Giải)",
    "question": "[SP26_RE - Câu 2/50] In binary numbers, how many digits does a byte hold?",
    "options": [
      "16",
      "8",
      "4",
      "2"
    ],
    "answer": 1,
    "explanation": "Trong hệ nhị phân, 1 byte tương đương với 8 bit, tức là chứa được 8 chữ số nhị phân (0 hoặc 1). Các giá trị 16, 4 và 2 là không chính xác theo quy ước chuẩn (4 bit là 1 nibble, 16 bit là 2 byte)."
  },
  {
    "id": 5203,
    "topic": "🏆 Đề FE PRO192 - SP26 RE (50 câu - Full Giải)",
    "question": "[SP26_RE - Câu 3/50] Which of the following best describes object-oriented programming?",
    "options": [
      "Writing sequential code only",
      "Using classes to encapsulate data and behavior",
      "Writing machine-specific code",
      "Programming without algorithms"
    ],
    "answer": 1,
    "explanation": "Lập trình hướng đối tượng (OOP) tập trung vào việc sử dụng các lớp (classes) để đóng gói dữ liệu (thuộc tính) và hành vi (phương thức) thành các đối tượng. Các lựa chọn còn lại mô tả lập trình tuần tự, mã phụ thuộc phần cứng hoặc phi thuật toán, không đúng với bản chất của OOP."
  },
  {
    "id": 5204,
    "topic": "🏆 Đề FE PRO192 - SP26 RE (50 câu - Full Giải)",
    "question": "[SP26_RE - Câu 4/50] What is the role of the Java Development Kit (JDK) in java programming? Choose multiple correct answers.",
    "options": [
      "A cross-platformed software development environment that offers a collection of tools and libraries necessary for developing Java-based software applications.",
      "A core package used in Java programming, along with the JVM (Java Virtual Machine) and the JRE (Java Runtime Environment) to develop and deploy applications",
      "A software for building applications that combines common developer tools into a single graphical user interface (GUI).",
      "A text editor that can assist in writing software code with features such as syntax highlighting with visual cues"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "JDK là môi trường phát triển phần mềm đa nền tảng cung cấp tập hợp công cụ và thư viện cần thiết để lập trình Java (A), đồng thời là gói cốt lõi đi kèm JVM và JRE để phát triển và triển khai ứng dụng (B). Phương án C mô tả IDE (như Eclipse, NetBeans), còn D mô tả trình soạn thảo văn bản/mã nguồn (text editor)."
  },
  {
    "id": 5205,
    "topic": "🏆 Đề FE PRO192 - SP26 RE (50 câu - Full Giải)",
    "question": "[SP26_RE - Câu 5/50] Which is a valid keyword in Java?",
    "options": [
      "interface",
      "include",
      "Float",
      "Integer"
    ],
    "answer": 0,
    "explanation": "interface là từ khóa hợp lệ trong Java dùng để khai báo giao diện. include là chỉ thị tiền xử lý của C/C++, còn Float và Integer (viết hoa chữ cái đầu) là tên các lớp bao (wrapper classes) chứ không phải từ khóa (từ khóa nguyên thủy là float và int)."
  },
  {
    "id": 5206,
    "topic": "🏆 Đề FE PRO192 - SP26 RE (50 câu - Full Giải)",
    "question": "[SP26_RE - Câu 6/50] A Java source code will be compiled to the file in which of the following extensions?",
    "options": [
      ".class",
      ".java",
      ".exe",
      ".bat"
    ],
    "answer": 0,
    "explanation": "Mã nguồn Java (lưu trong tệp .java) sau khi biên dịch bằng trình biên dịch javac sẽ tạo ra tệp bytecode có phần mở rộng là .class để JVM thực thi. Các đuôi .exe và .bat là tệp thực thi hoặc tệp lệnh của hệ điều hành Windows, không phải kết quả biên dịch chuẩn của Java."
  },
  {
    "id": 5207,
    "topic": "🏆 Đề FE PRO192 - SP26 RE (50 câu - Full Giải)",
    "question": "[SP26_RE - Câu 7/50] Which of the following is NOT a Java feature?",
    "options": [
      "Use of pointers.",
      "Ease of learning.",
      "It is a secure language.",
      "Independent Platform."
    ],
    "answer": 0,
    "explanation": "Java không cho phép lập trình viên sử dụng con trỏ (pointers) trực tiếp để truy cập bộ nhớ như C/C++ nhằm đảm bảo tính an toàn và bảo mật. Các đặc điểm còn lại như dễ học, bảo mật và độc lập nền tảng (Platform Independent) đều là những tính năng nổi bật của Java."
  },
  {
    "id": 5208,
    "topic": "🏆 Đề FE PRO192 - SP26 RE (50 câu - Full Giải)",
    "question": "[SP26_RE - Câu 8/50] When naming a variable in Java with multiple words, which convention should you follow?",
    "options": [
      "Separate words with spaces",
      "Use all uppercase letters",
      "Capitalize each word in the compound after the first",
      "Start each word with a lowercase letter"
    ],
    "answer": 2,
    "explanation": "Quy ước đặt tên biến chuẩn trong Java là camelCase: viết thường từ đầu tiên và viết hoa chữ cái đầu của mỗi từ tiếp theo trong từ ghép (ví dụ: studentName). Tên biến không được chứa khoảng trắng (A), viết hoa toàn bộ chỉ dùng cho hằng số (B), và viết thường mọi từ sẽ làm giảm tính dễ đọc (D)."
  },
  {
    "id": 5209,
    "topic": "🏆 Đề FE PRO192 - SP26 RE (50 câu - Full Giải)",
    "question": "[SP26_RE - Câu 9/50] What is the primary difference between using == and .equals() for object comparison in Java?",
    "options": [
      ".equals() checks if two references point to the same object, == determines whether two object references are identical.",
      "== compares values, .equals() compares memory locations.",
      "== checks if two references point to the same object, .equals() determines whether two object references are identical.",
      ".equals() is used only with wrapper classes."
    ],
    "answer": 2,
    "explanation": "Toán tử == kiểm tra xem hai biến tham chiếu có trỏ tới cùng một đối tượng trong bộ nhớ hay không (so sánh tham chiếu), trong khi phương thức .equals() được dùng để kiểm tra sự tương đương về mặt logic/nội dung của hai đối tượng (lưu ý phương án C mô tả đúng vai trò của == và là đáp án được chọn trong đề). Phương án A và B đảo ngược chức năng của == và .equals(), còn D sai vì mọi lớp kế thừa từ Object đều có .equals()."
  },
  {
    "id": 5210,
    "topic": "🏆 Đề FE PRO192 - SP26 RE (50 câu - Full Giải)",
    "question": "[SP26_RE - Câu 10/50] Which statement about loop counting variables in a for loop is FALSE?",
    "options": [
      "They must always increment by 1.",
      "They are initialized before the first iteration.",
      "They are updated after each loop iteration.",
      "They control when the loop stops executing."
    ],
    "answer": 0,
    "explanation": "Phát biểu A là SAI vì biến đếm trong vòng lặp for không bắt buộc phải luôn tăng lên 1; ta có thể thay đổi theo bước nhảy bất kỳ (như i += 2, i--, i *= 2). Các phát biểu B, C, D đều đúng với cơ chế khởi tạo, cập nhật sau mỗi vòng lặp và kiểm tra điều kiện dừng của vòng lặp for."
  },
  {
    "id": 5211,
    "topic": "🏆 Đề FE PRO192 - SP26 RE (50 câu - Full Giải)",
    "question": "[SP26_RE - Câu 11/50] What is the output of the code snippet?\n\npublic class Test {\n    public static void main(String[] args) {\n        int result;\n        System.out.println(result = true ? 100 : 5);\n    }\n}",
    "options": [
      "100",
      "5",
      "0",
      "Runtime error."
    ],
    "answer": 0,
    "explanation": "Trong toán tử ba ngôi true ? 100 : 5, điều kiện là true nên biểu thức trả về 100. Phép gán result = 100 gán giá trị 100 cho biến result và trả về chính giá trị 100 đó cho lệnh System.out.println(), vì vậy kết quả in ra là 100 thay vì 5, 0 hay lỗi runtime."
  },
  {
    "id": 5212,
    "topic": "🏆 Đề FE PRO192 - SP26 RE (50 câu - Full Giải)",
    "question": "[SP26_RE - Câu 12/50] What is the output of the code snippet?\n\npublic class Test {\n    public static void main(String[] args) {\n        int []a = new int [5];\n        for(int i : a){\n            i = 1;\n        }\n        System.out.println(a[1]);\n    }\n}",
    "options": [
      "0",
      "1",
      "null",
      "[I@15db9742]"
    ],
    "answer": 0,
    "explanation": "Mảng a kiểu int với 5 phần tử khi khởi tạo bằng new int[5] sẽ có giá trị mặc định là 0 cho mọi phần tử. Vòng lặp for-each (for(int i : a)) chỉ sao chép giá trị phần tử vào biến cục bộ i nên lệnh i = 1 không làm thay đổi mảng gốc a. Do đó a[1] vẫn giữ giá trị 0, loại bỏ 1 (B), null (C) và chuỗi đại diện mảng (D)."
  },
  {
    "id": 5213,
    "topic": "🏆 Đề FE PRO192 - SP26 RE (50 câu - Full Giải)",
    "question": "[SP26_RE - Câu 13/50] Which string method is used to split a string using a regular expression?",
    "options": [
      "separate()",
      "tokenize()",
      "split()",
      "parse()"
    ],
    "answer": 2,
    "explanation": "Lớp String trong Java cung cấp phương thức split(String regex) để tách một chuỗi thành mảng các chuỗi con dựa trên biểu thức chính quy (regular expression). Các phương thức separate(), tokenize() và parse() không tồn tại trong lớp String của Java."
  },
  {
    "id": 5214,
    "topic": "🏆 Đề FE PRO192 - SP26 RE (50 câu - Full Giải)",
    "question": "[SP26_RE - Câu 14/50] Which of the following is one of the exception types in Java?",
    "options": [
      "RuntimeException",
      "CompileException",
      "SyntaxException",
      "LogicException"
    ],
    "answer": 0,
    "explanation": "RuntimeException (thuộc gói java.lang) là lớp ngoại lệ chuẩn có sẵn trong Java đại diện cho nhóm unchecked exception phát sinh trong thời gian chạy. Các tên CompileException, SyntaxException và LogicException không phải là các lớp ngoại lệ tiêu chuẩn của Java."
  },
  {
    "id": 5215,
    "topic": "🏆 Đề FE PRO192 - SP26 RE (50 câu - Full Giải)",
    "question": "[SP26_RE - Câu 15/50] What is the purpose of Java's wrapper classes?",
    "options": [
      "To define GUI elements.",
      "To encapsulate primitive types in objects.",
      "To create multiple inheritance.",
      "To enhance string performance."
    ],
    "answer": 1,
    "explanation": "Các lớp bao (wrapper classes như Integer, Double, Boolean) dùng để đóng gói các kiểu dữ liệu nguyên thủy (int, double, boolean) thành đối tượng để sử dụng trong Collections, Generics hoặc các API yêu cầu kiểu tham chiếu. Chúng không dùng để tạo giao diện GUI (A), đa kế thừa (C) hay tối ưu hiệu năng chuỗi (D)."
  },
  {
    "id": 5216,
    "topic": "🏆 Đề FE PRO192 - SP26 RE (50 câu - Full Giải)",
    "question": "[SP26_RE - Câu 16/50] What are components of a class in Java OOP? Choose multiple correct answers.",
    "options": [
      "Constructors are responsible for object creation",
      "Attributes, Fields, Properties of a class represents by variables",
      "Behaviours, Modification code represent by methods or functions",
      "main() method for execution of the class"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Một lớp (class) trong Java OOP được cấu thành từ các thành phần chính gồm: Constructor để tạo đối tượng (A), các thuộc tính/trường dữ liệu biểu diễn bằng biến (B), và các hành vi biểu diễn bằng phương thức (C). Phương thức main() (D) chỉ là điểm khởi đầu thực thi chương trình, không phải thành phần bắt buộc của mọi lớp."
  },
  {
    "id": 5217,
    "topic": "🏆 Đề FE PRO192 - SP26 RE (50 câu - Full Giải)",
    "question": "[SP26_RE - Câu 17/50] In Java, if a class does not explicitly define a constructor, what type of constructor is automatically provided?",
    "options": [
      "Parameterized constructor",
      "Default constructor",
      "Private constructor",
      "Static constructor",
      "Overloaded constructor",
      "Abstract constructor"
    ],
    "answer": 1,
    "explanation": "Khi một lớp không khai báo tường minh bất kỳ constructor nào, trình biên dịch Java sẽ tự động sinh một hàm tạo mặc định (Default constructor) không tham số. Trình biên dịch không tự tạo constructor có tham số (A), private (C) hay overloaded (E), còn Java không có khái niệm static constructor (D) hay abstract constructor (F)."
  },
  {
    "id": 5218,
    "topic": "🏆 Đề FE PRO192 - SP26 RE (50 câu - Full Giải)",
    "question": "[SP26_RE - Câu 18/50] Which access modifier is commonly used for setter methods in Java?",
    "options": [
      "public",
      "private",
      "protected",
      "static",
      "final",
      "abstract"
    ],
    "answer": 0,
    "explanation": "Theo nguyên lý đóng gói (encapsulation), các thuộc tính thường được khai báo private và các phương thức setter/getter thường để là public để bên ngoài có thể gán và đọc giá trị một cách an toàn. private hay protected làm hạn chế khả năng truy cập từ bên ngoài, còn static, final và abstract không phải là access modifier."
  },
  {
    "id": 5219,
    "topic": "🏆 Đề FE PRO192 - SP26 RE (50 câu - Full Giải)",
    "question": "[SP26_RE - Câu 19/50] What is the output of the following code snippet?\n\npublic class Main {\n    public int a;\n    public long b;\n    public void test(long b) {\n        System.out.println(\"long b\");\n    }\n    public void test(int a) {\n        System.out.println(\"int a\");\n    }\n    public static void main(String[] args) {\n        Main e=new Main();\n        e.test(9*1000000000);\n    }\n}",
    "options": [
      "int a",
      "long a",
      "long b",
      "Runtime error"
    ],
    "answer": 0,
    "explanation": "Trong lệnh e.test(9*1000000000), cả 9 và 1000000000 (nhỏ hơn Integer.MAX_VALUE) đều là literal kiểu int, nên phép nhân được tính bằng số học int (bị tràn số nhưng vẫn cho kết quả kiểu tĩnh là int). Trình biên dịch chọn phương thức nạp chồng khớp chính xác kiểu int là test(int a) và in ra int a, chứ không gọi test(long b) (C) hay phát sinh lỗi runtime (D)."
  },
  {
    "id": 5220,
    "topic": "🏆 Đề FE PRO192 - SP26 RE (50 câu - Full Giải)",
    "question": "[SP26_RE - Câu 20/50] Which of the following is the MOST RESTRICTIVE access level for a class member in Java?",
    "options": [
      "protected",
      "default (package-private)",
      "public",
      "private"
    ],
    "answer": 3,
    "explanation": "Thứ tự các mức truy cập từ mở rộng nhất đến chặt chẽ nhất trong Java là: public > protected > default (package-private) > private. Thành viên khai báo private chỉ có thể truy cập bên trong chính lớp đó, nên đây là mức giới hạn truy cập cao nhất."
  },
  {
    "id": 5221,
    "topic": "🏆 Đề FE PRO192 - SP26 RE (50 câu - Full Giải)",
    "question": "[SP26_RE - Câu 21/50] Which keyword is used to declare inheritance between two classes in Java?",
    "options": [
      "extends",
      "imports",
      "super",
      "implement"
    ],
    "answer": 0,
    "explanation": "Từ khóa extends được dùng để khai báo kế thừa giữa hai lớp trong Java (ví dụ: class Sub extends Super). Từ khóa super chỉ dùng để tham chiếu đến lớp cha, implement (đúng là implements) dùng cho interface, còn imports (đúng là import) dùng để nhập lớp/gói."
  },
  {
    "id": 5222,
    "topic": "🏆 Đề FE PRO192 - SP26 RE (50 câu - Full Giải)",
    "question": "[SP26_RE - Câu 22/50] Which field access modifier allows direct access by a subclass?",
    "options": [
      "private",
      "default",
      "protected",
      "static"
    ],
    "answer": 2,
    "explanation": "Access modifier protected cho phép các lớp trong cùng package và tất cả các lớp con (subclass, kể cả khác package) truy cập trực tiếp vào trường dữ liệu của lớp cha. private chặn truy cập từ lớp con, default chỉ cho phép nếu lớp con ở cùng package, còn static không phải là access modifier."
  },
  {
    "id": 5223,
    "topic": "🏆 Đề FE PRO192 - SP26 RE (50 câu - Full Giải)",
    "question": "[SP26_RE - Câu 23/50] What is the main advantage of using interfaces in Java regarding inheritance?",
    "options": [
      "Enable multiple inheritance capability.",
      "Provides faster execution speed compared to abstract classes",
      "Automatically generate constructor methods for implementing classes.",
      "Allow direct instantiation of interface objects without implementing classes."
    ],
    "answer": 0,
    "explanation": "Trong Java, một lớp chỉ có thể kế thừa từ một lớp cha duy nhất nhưng có thể thực thi nhiều interface cùng lúc, qua đó hỗ trợ khả năng đa kế thừa về kiểu và hành vi. Interface không giúp chạy nhanh hơn abstract class (B), không tự tạo constructor (C) và không thể khởi tạo trực tiếp đối tượng bằng new Interface() (D)."
  },
  {
    "id": 5224,
    "topic": "🏆 Đề FE PRO192 - SP26 RE (50 câu - Full Giải)",
    "question": "[SP26_RE - Câu 24/50] Consider the code:\n\ninterface Animal {\n    void makeSound();\n    void move();\n}\n\ninterface Pet {\n    void play();\n}\n\nclass Dog implements Animal, Pet {\n    @Override\n    public void makeSound() {\n        System.out.println(\"Woof!\");\n    }\n\n    @Override\n    public void play() {\n        System.out.println(\"Playing fetch\");\n    }\n}\n\npublic class Test {\n    public static void main(String[] args) {\n        Dog dog = new Dog();\n        Animal animal = dog;\n        Pet pet = dog;\n\n        animal.makeSound();\n        pet.play();\n    }\n}",
    "options": [
      "Compilation error occurs",
      "Woof!\nPlaying fetch",
      "Running\nPlaying fetch",
      "Woof!\nRunning\nPlaying fetch"
    ],
    "answer": 0,
    "explanation": "Interface Animal định nghĩa hai phương thức trừu tượng là makeSound() và move(). Lớp Dog thực thi Animal và Pet nhưng lại không cài đặt phương thức move() dù Dog không phải là lớp abstract, nên chương trình bị lỗi biên dịch (Compilation error). Do đó các kết quả thực thi ở B, C, D đều không thể xảy ra."
  },
  {
    "id": 5225,
    "topic": "🏆 Đề FE PRO192 - SP26 RE (50 câu - Full Giải)",
    "question": "[SP26_RE - Câu 25/50] Choose multiple correct answers.",
    "options": [
      "The purpose of a getter method in Java is to get the value of a variable",
      "The purpose of a setter method in Java is to set the value of a variable",
      "return keyword used to define getter and setter method in Java",
      "Access modifiers often used for getter or setter method is public"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "Trong Java, phương thức getter dùng để lấy giá trị của biến/thuộc tính (A), setter dùng để gán giá trị mới cho biến (B), và cả hai thường có access modifier là public để cho phép truy cập từ bên ngoài lớp (D). Phương án C sai vì từ khóa return dùng để trả về giá trị trong thân hàm (setter thường dùng void), không phải từ khóa dùng để định nghĩa getter và setter."
  },
  {
    "id": 5226,
    "topic": "🏆 Đề FE PRO192 - SP26 RE (50 câu - Full Giải)",
    "question": "[SP26_RE - Câu 26/50] What is a way to group related classes in Java and it is called a namespace?",
    "options": [
      "package",
      "file",
      "software",
      "folder"
    ],
    "answer": 0,
    "explanation": "Trong Java, `package` dùng để nhóm các class và interface có liên quan lại với nhau, đồng thời đóng vai trò như một namespace để tránh xung đột tên. Các lựa chọn `file`, `software` và `folder` không phải là cơ chế namespace trong Java (`folder` chỉ là thư mục lưu trữ trên hệ điều hành)."
  },
  {
    "id": 5227,
    "topic": "🏆 Đề FE PRO192 - SP26 RE (50 câu - Full Giải)",
    "question": "[SP26_RE - Câu 27/50] What is the output of the following Java program?\n\nclass A {\n    public A() {\n        System.out.print(\"A,\");\n    }\n}\nclass B extends A {\n    public B() {\n        System.out.print(\"B,\");\n    }\n}\nclass C extends B {\n    public C() {\n        System.out.println(\"C\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        C c = new C();\n    }\n}",
    "options": [
      "A,B,C",
      "B,C,A",
      "B,A,C",
      "A,C,B"
    ],
    "answer": 0,
    "explanation": "Khi khởi tạo `new C()`, constructor của mỗi lớp con ngầm gọi `super()` ở dòng đầu tiên nên thứ tự thực thi đi từ lớp cha cao nhất xuống lớp con: `A()` -> `B()` -> `C()`. Chương trình lần lượt in `A,`, `B,` rồi `C`, tạo thành `A,B,C`. Các đáp án B, C, D sai thứ tự gọi constructor trong chuỗi kế thừa."
  },
  {
    "id": 5228,
    "topic": "🏆 Đề FE PRO192 - SP26 RE (50 câu - Full Giải)",
    "question": "[SP26_RE - Câu 28/50] What is the output following the code snippet?\n\nclass DemoClass {\n    static void m() {\n        System.out.println(\"A\");\n    }\n}\nclass DemoClassChild extends DemoClass {\n    static void m() {\n        System.out.println(\"B\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        DemoClassChild.m();\n    }\n}",
    "options": [
      "A",
      "B",
      "A B",
      "B A"
    ],
    "answer": 1,
    "explanation": "Phương thức `static void m()` trong `DemoClassChild` che khuất (method hiding) phương thức `static void m()` của `DemoClass`. Khi gọi `DemoClassChild.m()`, Java thực thi trực tiếp phương thức static của lớp `DemoClassChild` và in ra `B`. Không có cơ chế gọi ngầm `m()` của lớp cha nên loại A, C và D."
  },
  {
    "id": 5229,
    "topic": "🏆 Đề FE PRO192 - SP26 RE (50 câu - Full Giải)",
    "question": "[SP26_RE - Câu 29/50] Choose the incorrect statement about the class.",
    "options": [
      "A class can be extended to more than one class.",
      "An interface can be extended with many interfaces.",
      "A class can be extended to one class and implemented in many interfaces",
      "None of the others"
    ],
    "answer": 0,
    "explanation": "Java không hỗ trợ đa kế thừa đối với class nên một class không thể `extends` nhiều hơn một class; vì vậy phát biểu A là sai (đáp án cần chọn). Các phát biểu B (một interface có thể kế thừa nhiều interface) và C (một class có thể kế thừa một class và cài đặt nhiều interface) đều đúng theo quy tắc Java."
  },
  {
    "id": 5230,
    "topic": "🏆 Đề FE PRO192 - SP26 RE (50 câu - Full Giải)",
    "question": "[SP26_RE - Câu 30/50] Consider an abstract class \"Shape\" with an abstract method \"calculateArea().\" If a concrete subclass \"Circle\" extends \"Shape\" and provides an implementation for \"calculateArea(),\" what happens when an object of the \"Circle\" class is created and the \"calculateArea()\"",
    "options": [
      "The abstract method in the superclass is executed.",
      "The concrete method in the subclass is executed.",
      "The program will not compile.",
      "An exception is thrown at runtime.",
      "Both the abstract method in the superclass and the concrete method in the subclass are executed.",
      "The result depends on whether the \"calculateArea()\" method is declared as static."
    ],
    "answer": 1,
    "explanation": "Lớp `Circle` là concrete subclass đã cài đặt đầy đủ phương thức trừu tượng `calculateArea()` của `Shape`. Khi tạo đối tượng `Circle` và gọi `calculateArea()`, Java thực thi phần thân cụ thể ở lớp con `Circle` (đáp án B). Phương thức abstract ở lớp cha không có thân hàm để chạy (loại A, E), code biên dịch/chạy bình thường (loại C, D) và abstract method không thể khai báo `static` (loại F)."
  },
  {
    "id": 5231,
    "topic": "🏆 Đề FE PRO192 - SP26 RE (50 câu - Full Giải)",
    "question": "[SP26_RE - Câu 31/50] Choose multiple correct answers.",
    "options": [
      "Inheritance allows a class to inherit the properties and methods of another class",
      "The keyword \"extends\" is used to indicate inheritance in Java. It is used in the declaration of a subclass to specify the superclass that it is inheriting from.",
      "A subclass can access the private members of the superclass",
      "Java supports both multiple inheritance of classes and interfaces"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Phát biểu A và B đúng vì kế thừa cho phép lớp con thừa hưởng thuộc tính và phương thức từ lớp cha thông qua từ khóa `extends`. Phát biểu C sai vì lớp con không thể truy cập trực tiếp thành viên `private` của lớp cha, còn D sai vì Java không hỗ trợ đa kế thừa đối với class."
  },
  {
    "id": 5232,
    "topic": "🏆 Đề FE PRO192 - SP26 RE (50 câu - Full Giải)",
    "question": "[SP26_RE - Câu 32/50] Which of the following statements best describes the correctness or incorrectness of the Moveable interface in the provided Java code?\n\npublic interface Moveable {\n    default static final double SPEED = 10.0;\n    default void run() {\n        // Logic in method run\n    }\n\n    void stop();\n}",
    "options": [
      "The default static final double SPEED declaration is incorrect.",
      "The default void run() method is invalid because interfaces cannot include method implementations.",
      "The default void run() method is invalid because it's declared with the default keyword.",
      "The void stop(); method is incorrect because it lacks the default keyword."
    ],
    "answer": 0,
    "explanation": "Trong interface Java, từ khóa `default` chỉ dùng cho phương thức có phần thân (từ Java 8), không được dùng cho trường dữ liệu như `default static final double SPEED = 10.0;` nên dòng này gây lỗi biên dịch (đáp án A). Các phương án B, C sai vì interface cho phép `default method` có phần thân, còn D sai vì `void stop();` là phương thức trừu tượng hợp lệ."
  },
  {
    "id": 5233,
    "topic": "🏆 Đề FE PRO192 - SP26 RE (50 câu - Full Giải)",
    "question": "[SP26_RE - Câu 33/50] Given the following code snippet:\n\nint[] arr = new int[100];\n\nWhich of the following statements is correct?",
    "options": [
      "The maximum number of elements of the arr is 100",
      "The maximum index of the arr is 100",
      "arr [100]=100",
      "Each element in the arr will be 1 by default"
    ],
    "answer": 0,
    "explanation": "Câu lệnh `new int[100]` cấp phát mảng có kích thước 100 phần tử, nên số phần tử tối đa của `arr` là 100 (đáp án A). Chỉ số hợp lệ chạy từ `0` đến `99` nên chỉ số lớn nhất là 99 (loại B) và `arr[100]` sẽ gây lỗi vượt quá biên mảng (loại C); ngoài ra giá trị mặc định của kiểu `int` là `0` chứ không phải `1` (loại D)."
  },
  {
    "id": 5234,
    "topic": "🏆 Đề FE PRO192 - SP26 RE (50 câu - Full Giải)",
    "question": "[SP26_RE - Câu 34/50] Choose the correct statement related to the encapsulation concept in Java.",
    "options": [
      "Data hiding",
      "Method hiding",
      "Hiding constructor",
      "Class hiding"
    ],
    "answer": 0,
    "explanation": "Tính đóng gói (encapsulation) trong Java gắn liền với khái niệm che giấu dữ liệu (`Data hiding`) bằng cách đặt thuộc tính là `private` và kiểm soát truy cập qua getter/setter. `Method hiding` liên quan đến phương thức `static` khi kế thừa, còn `Hiding constructor` và `Class hiding` không phải định nghĩa của encapsulation."
  },
  {
    "id": 5235,
    "topic": "🏆 Đề FE PRO192 - SP26 RE (50 câu - Full Giải)",
    "question": "[SP26_RE - Câu 35/50] In a banking application, you need to represent customer accounts using object arrays. Which OOP concept allows you to create a blueprint for the Account class?",
    "options": [
      "Inheritance",
      "Abstraction",
      "Encapsulation",
      "Polymorphism",
      "Composition",
      "Interface"
    ],
    "answer": 1,
    "explanation": "Tính trừu tượng (`Abstraction`) cho phép mô hình hóa đối tượng tài khoản thành bản thiết kế (`Account` class) chỉ giữ lại các thuộc tính và hành vi cốt lõi. Các khái niệm `Inheritance`, `Encapsulation`, `Polymorphism`, `Composition` và `Interface` phục vụ các mục đích khác như tái sử dụng mã, che giấu dữ liệu, đa hình, quan hệ has-a hoặc hợp đồng hành vi."
  },
  {
    "id": 5236,
    "topic": "🏆 Đề FE PRO192 - SP26 RE (50 câu - Full Giải)",
    "question": "[SP26_RE - Câu 36/50] Which of the following statements is used to get the size of a one-dimensional array in Java? Assume that array is given by this statement: int[] arr = new int[100];",
    "options": [
      "arr.length",
      "arr.length()",
      "arr.size",
      "arr.size()"
    ],
    "answer": 0,
    "explanation": "Trong Java, mảng sử dụng thuộc tính `length` (không có ngoặc đơn) để lấy số lượng phần tử, do đó `arr.length` là đúng. `length()` là phương thức của lớp `String`, còn `size()` là phương thức của các collection như `ArrayList`."
  },
  {
    "id": 5237,
    "topic": "🏆 Đề FE PRO192 - SP26 RE (50 câu - Full Giải)",
    "question": "[SP26_RE - Câu 37/50] Which of the following classes is used for shuffling an ArrayList in Java?",
    "options": [
      "Collections",
      "CollectionList",
      "Arrays",
      "Array.Util"
    ],
    "answer": 0,
    "explanation": "Lớp tiện ích `java.util.Collections` cung cấp phương thức tĩnh `Collections.shuffle()` để xáo trộn ngẫu nhiên các phần tử trong một `List`/`ArrayList`. Lớp `Arrays` dùng để thao tác với mảng (không có `shuffle`), còn `CollectionList` và `Array.Util` không tồn tại trong Java."
  },
  {
    "id": 5238,
    "topic": "🏆 Đề FE PRO192 - SP26 RE (50 câu - Full Giải)",
    "question": "[SP26_RE - Câu 38/50] All abstract data structures: List, Set, Map is implemented in which of the following types?",
    "options": [
      "Interface",
      "Abstract class",
      "Concrete class",
      "Derived class"
    ],
    "answer": 0,
    "explanation": "Trong Java Collections Framework, `List`, `Set` và `Map` đều được thiết kế dưới dạng `Interface` để định nghĩa các cấu trúc dữ liệu trừu tượng. Các `Abstract class` như `AbstractList` hay `Concrete class` như `ArrayList`, `HashSet`, `HashMap` mới là lớp cài đặt các interface này."
  },
  {
    "id": 5239,
    "topic": "🏆 Đề FE PRO192 - SP26 RE (50 câu - Full Giải)",
    "question": "[SP26_RE - Câu 39/50] Which of the following represents a valid declaration of a List collection of integers in Java?",
    "options": [
      "List<Integer> list = new ArrayList<>();",
      "ArrayList list = new ArrayList<int>();",
      "List<int> list = new ArrayList<int>();",
      "List<Int> list = new ArrayList<>();",
      "List<Integer> list = new List<Integer>();"
    ],
    "answer": 0,
    "explanation": "Java Generics chỉ chấp nhận kiểu tham chiếu (wrapper class `Integer`), không chấp nhận kiểu nguyên thủy `int` (loại B, C) và không có kiểu `Int` (loại D). Bên cạnh đó `List` là interface nên không thể khởi tạo trực tiếp bằng `new List<Integer>()` (loại E), do đó chỉ A hợp lệ."
  },
  {
    "id": 5240,
    "topic": "🏆 Đề FE PRO192 - SP26 RE (50 câu - Full Giải)",
    "question": "[SP26_RE - Câu 40/50] Which of the following Set implementations maintains insertion order in Java?",
    "options": [
      "HashSet",
      "TreeSet",
      "LinkedHashSet",
      "EnumSet"
    ],
    "answer": 2,
    "explanation": "`LinkedHashSet` kết hợp bảng băm và danh sách liên kết đôi nên bảo toàn chính xác thứ tự thêm phần tử (insertion order). Trong khi đó, `HashSet` không đảm bảo thứ tự, `TreeSet` sắp xếp theo thứ tự tăng dần/`Comparator`, còn `EnumSet` sắp xếp theo thứ tự khai báo trong `enum`."
  },
  {
    "id": 5241,
    "topic": "🏆 Đề FE PRO192 - SP26 RE (50 câu - Full Giải)",
    "question": "[SP26_RE - Câu 41/50] What must be implemented when storing custom objects in a TreeSet to ensure proper ordering?",
    "options": [
      "The compareTo() method from the Comparable interface.",
      "The equals() and hashCode() methods must be overridden to maintain consistent ordering behavior.",
      "A custom sorting algorithm that handles the specific data types and their natural ordering requirements.",
      "The toString() method must return values that can be compared lexicographically for automatic sorting."
    ],
    "answer": 0,
    "explanation": "`TreeSet` duy trì thứ tự sắp xếp dựa trên phương thức `compareTo()` của interface `Comparable` (hoặc một `Comparator` được truyền vào). Nếu không cài đặt `Comparable.compareTo()` (và không truyền `Comparator`), việc thêm đối tượng tùy chỉnh sẽ gây `ClassCastException`; `equals()`/`hashCode()` dùng cho cấu trúc băm như `HashSet`, còn `toString()` không quyết định thứ tự sắp xếp."
  },
  {
    "id": 5242,
    "topic": "🏆 Đề FE PRO192 - SP26 RE (50 câu - Full Giải)",
    "question": "[SP26_RE - Câu 42/50] What will the following Java code print?\n\nimport java.util.*;\n\npublic class Test {\n    public static void main(String[] args) {\n        TreeMap<Integer, String> map = new TreeMap<>();\n        map.put(3, \"C\");\n        map.put(1, \"A\");\n        map.put(2, \"B\");\n        map.put(5, \"E\");\n        map.headMap(3).forEach((k, v) -> System.out.print(v));\n    }\n}",
    "options": [
      "C",
      "AB",
      "ABC",
      "E"
    ],
    "answer": 1,
    "explanation": "`TreeMap` sắp xếp các khóa tăng dần thành `{1=\"A\", 2=\"B\", 3=\"C\", 5=\"E\"}`. Phương thức `map.headMap(3)` trả về phần map gồm các phần tử có khóa nhỏ hơn hẳn `3` (không bao gồm `3`), tức khóa `1` và `2`, nên vòng lặp `forEach` in ra `AB` (loại `ABC` vì `headMap(toKey)` mặc định không lấy `toKey`)."
  },
  {
    "id": 5243,
    "topic": "🏆 Đề FE PRO192 - SP26 RE (50 câu - Full Giải)",
    "question": "[SP26_RE - Câu 43/50] Choose correct answer about anonymous class?",
    "options": [
      "A class that is defined without a name and can be instantiated only once",
      "The purpose of using an anonymous class is to provide a way to implement an interface or extend a class without explicitly defining a named class.",
      "An anonymous class is created using the \"new\" keyword followed by the name of the interface or class being implemented or extended.",
      "Anonymous classes are like local classes except that they do not have a name.",
      "All of the others"
    ],
    "answer": 4,
    "explanation": "Cả bốn phát biểu A, B, C, D đều mô tả đúng về anonymous class trong Java: là lớp không tên được định nghĩa và khởi tạo một lần tại chỗ bằng từ khóa `new` theo sau là tên interface/superclass để triển khai hoặc mở rộng nhanh, hoạt động giống local class nhưng vô danh. Do đó đáp án đúng là `All of the others` (E)."
  },
  {
    "id": 5244,
    "topic": "🏆 Đề FE PRO192 - SP26 RE (50 câu - Full Giải)",
    "question": "[SP26_RE - Câu 44/50] How does the try-catch-finally statement work?",
    "options": [
      "The code inside the try block is executed, and if an exception occurs, it is caught and handled by the catch block. The code inside the finally block is executed regardless of whether an exception occurred or not.",
      "The code inside the try block is executed, and if an exception occurs, it is caught and handled by the finally block. The code inside the catch block is executed regardless of whether an exception occurred or not.",
      "The code inside the try block is executed, and if an exception occurs, it is caught and handled by the catch block. The code inside the finally block is executed only if an exception occurred.",
      "The code inside the try block is executed, and if an exception occurs, it is caught and handled by the catch block. The code inside the finally block is executed only if an exception occurred and was not caught by the catch block."
    ],
    "answer": 0,
    "explanation": "Trong `try-catch-finally`, khối `try` chạy trước; nếu có ngoại lệ xảy ra, khối `catch` tương ứng sẽ bắt và xử lý; còn khối `finally` luôn được thực thi bất kể có ngoại lệ hay không (đáp án A). Phương án B sai vai trò giữa `catch` và `finally`, trong khi C và D sai vì `finally` vẫn chạy ngay cả khi không có ngoại lệ."
  },
  {
    "id": 5245,
    "topic": "🏆 Đề FE PRO192 - SP26 RE (50 câu - Full Giải)",
    "question": "[SP26_RE - Câu 45/50] Which of the following methods of File class is used to check a file is hidden?",
    "options": [
      "isHidden()",
      "isDisplay()",
      "isWrite()",
      "isRead()"
    ],
    "answer": 0,
    "explanation": "Phương thức `isHidden()` của lớp `java.io.File` trả về giá trị `boolean` cho biết tệp hoặc thư mục có phải file ẩn theo quy chuẩn hệ điều hành hay không. Các phương thức `isDisplay()`, `isWrite()`, `isRead()` không tồn tại trong lớp `File` (quyền ghi/đọc dùng `canWrite()` và `canRead()`)."
  },
  {
    "id": 5246,
    "topic": "🏆 Đề FE PRO192 - SP26 RE (50 câu - Full Giải)",
    "question": "[SP26_RE - Câu 46/50] Which of the following objects is a parameter of the constructor of the DataInputStream class?",
    "options": [
      "An object of the FileInputStream class",
      "An object of the File class",
      "An object of the BufferedReader class",
      "An object of the RandomAccessFile class"
    ],
    "answer": 0,
    "explanation": "Constructor của `DataInputStream` có dạng `DataInputStream(InputStream in)`, yêu cầu đối số là một `InputStream`. Trong các lựa chọn, chỉ `FileInputStream` kế thừa `InputStream` (đáp án A); các lớp `File`, `BufferedReader` và `RandomAccessFile` không phải `InputStream`."
  },
  {
    "id": 5247,
    "topic": "🏆 Đề FE PRO192 - SP26 RE (50 câu - Full Giải)",
    "question": "[SP26_RE - Câu 47/50] Which of the following methods of File class is used to check a file already exists?",
    "options": [
      "exists()",
      "isExists ()",
      "checkFile()",
      "fileExists()"
    ],
    "answer": 0,
    "explanation": "Lớp `java.io.File` cung cấp phương thức `exists()` để kiểm tra xem tệp hoặc thư mục tại đường dẫn tương ứng đã tồn tại hay chưa. Các tên phương thức `isExists ()`, `checkFile()` và `fileExists()` không tồn tại trong lớp `File`."
  },
  {
    "id": 5248,
    "topic": "🏆 Đề FE PRO192 - SP26 RE (50 câu - Full Giải)",
    "question": "[SP26_RE - Câu 48/50] How do you check if a File object refers to a file (NOT a directory) in Java?",
    "options": [
      "isFile()",
      "checkFile()",
      "isNotDirectory()",
      "notIsDirectory()"
    ],
    "answer": 0,
    "explanation": "Phương thức `isFile()` của lớp `java.io.File` trả về `true` nếu đối tượng `File` trỏ đến một tệp thông thường (không phải thư mục) và tệp đó tồn tại. Các phương thức `checkFile()`, `isNotDirectory()` và `notIsDirectory()` không tồn tại trong lớp `File`."
  },
  {
    "id": 5249,
    "topic": "🏆 Đề FE PRO192 - SP26 RE (50 câu - Full Giải)",
    "question": "[SP26_RE - Câu 49/50] What is the output of the following code snippet?\n\nString fName = \"output.txt\";\nbyte[] array = {65, 66, 67};\nbyte[] arr = new byte[3];\ntry {\n    RandomAccessFile f = new RandomAccessFile(fName, \"rw\");\n    f.write(array);\n    f.seek(0);\n    f.read(arr);\n    String str1 = new String(arr);\n    System.out.println(str1);\n} catch (Exception e) {\n    System.out.println(e);\n}",
    "options": [
      "ABC",
      "ACB",
      "BAC",
      "BCA"
    ],
    "answer": 0,
    "explanation": "Mảng byte `array = {65, 66, 67}` tương ứng với các mã ASCII của `'A'`, `'B'`, `'C'`. Chương trình ghi 3 byte này vào file `output.txt`, gọi `f.seek(0)` để đưa con trỏ về đầu file rồi đọc lại toàn bộ vào `arr`, sau đó chuyển thành chuỗi và in ra `ABC` (loại các hoán vị ACB, BAC, BCA)."
  },
  {
    "id": 5250,
    "topic": "🏆 Đề FE PRO192 - SP26 RE (50 câu - Full Giải)",
    "question": "[SP26_RE - Câu 50/50] What type of relationship does aggregation describe in object-oriented design?",
    "options": [
      "\"is a kind of\" relationship, indicating inheritance.",
      "\"inherits from\" relationship in class hierarchies",
      "\"uses\" relationship, where one class calls another",
      "\"has a\" relationship, showing ownership or containment."
    ],
    "answer": 3,
    "explanation": "Trong thiết kế hướng đối tượng, Aggregation biểu diễn mối quan hệ `\"has a\"` (sở hữu hoặc chứa đựng lỏng lẻo giữa một đối tượng tổng thể và các thành phần). Các mô tả `\"is a kind of\"` hay `\"inherits from\"` thuộc về quan hệ kế thừa (Inheritance), còn `\"uses\"` thuộc về quan hệ phụ thuộc (Dependency)."
  },
  {
    "id": 5301,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 FE (50 câu - Full Giải)",
    "question": "[SP26_B5_FE - Câu 1/50] Which statement (exactly one) is true about the following program?\n\npublic class Main {\n    public static void main(String[] args) {\n        double d1 = 1.0;\n        double d2 = 0.0;\n        byte b = 1;\n        d1 = d1 / d2;\n        b = (byte) d1;\n        System.out.print(b);\n    }\n}",
    "options": [
      "It results in the throwing of an ArithmeticException.",
      "It results in the throwing of a DivideByZeroException.",
      "It displays the value 1.5.",
      "It displays the value -1."
    ],
    "answer": 3,
    "explanation": "Đáp án đúng là D. Trong Java, phép chia số thực cho 0.0 (`1.0 / 0.0`) không ném ra ngoại lệ mà trả về `Double.POSITIVE_INFINITY`. Khi ép kiểu `(byte) d1`, Java chuyển `POSITIVE_INFINITY` sang `int` thành `Integer.MAX_VALUE` (`0x7FFFFFFF`), sau đó lấy 8 bit thấp (`0xFF`) tạo thành giá trị `byte` có dấu là `-1`. Phương án A và B sai vì phép chia số thực không ném `ArithmeticException` (và Java không có `DivideByZeroException`), còn C sai về giá trị tính toán."
  },
  {
    "id": 5302,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 FE (50 câu - Full Giải)",
    "question": "[SP26_B5_FE - Câu 2/50] What is the primary function of the JVM(Java Virtual Machine)?",
    "options": [
      "To execute Java bytecode",
      "To manage Java libraries",
      "To compile Java source code into bytecode",
      "To provide an integrated development environment"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A. Chức năng chính của JVM (Java Virtual Machine) là tải, kiểm tra và thực thi mã Java bytecode (tệp `.class`) trên nền tảng hệ điều hành tương ứng. Phương án C là nhiệm vụ của trình biên dịch `javac`, còn B và D lần lượt đề cập đến quản lý thư viện và IDE (như IntelliJ, Eclipse)."
  },
  {
    "id": 5303,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 FE (50 câu - Full Giải)",
    "question": "[SP26_B5_FE - Câu 3/50] Which of the following are components of the Java platform?",
    "options": [
      "JVM(Java Virtual Machine), the java application programming interface (API)",
      "JVM(Java Virtual Machine), Java Run-time Environment",
      "JVM(Java Virtual Machine), java compiler",
      "Java compiler, java"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A. Theo định nghĩa chuẩn của Java, nền tảng Java (Java platform) gồm hai thành phần cốt lõi là Máy ảo Java (JVM) và Giao diện lập trình ứng dụng Java (Java API). Các phương án B, C, D sai vì gộp nhầm JRE (vốn chứa JVM và thư viện) hoặc trình biên dịch `javac` (thuộc JDK để phát triển) vào thành phần nền tảng thực thi."
  },
  {
    "id": 5304,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 FE (50 câu - Full Giải)",
    "question": "[SP26_B5_FE - Câu 4/50] Which of the following correctly matches Java features with their corresponding descriptions?\nDescription\n(A) Provides security control\n(B) Supports the development of applications across multiple platforms, operating systems, and graphic user interfaces\n(C) All constants, variables, or functions must exist within classes or objects\n(D) Java provides support for performing many tasks simultaneously\n(E) All of its implementation details hidden within the object.\n\nFeature List\n(1) Platform-independent\n(2) Object-oriented\n(3) Encapsulation\n(4) Secure\n(5) Multithreading",
    "options": [
      "(A) → (4), (B) → (3), (C) → (2), (D) → (5), (E) → (1)",
      "(A) → (3), (B) → (1), (C) → (2), (D) → (4), (E) → (5)",
      "(A) → (4), (B) → (1), (C) → (2), (D) → (5), (E) → (3)",
      "(A) → (5), (B) → (2), (C) → (1), (D) → (3), (E) → (4)"
    ],
    "answer": 2,
    "explanation": "Đáp án đúng là C. Ta ghép lần lượt: (A) kiểm soát bảo mật tương ứng với (4) Secure; (B) chạy trên nhiều nền tảng/hệ điều hành là (1) Platform-independent; (C) mọi biến/hàm nằm trong lớp hoặc đối tượng là (2) Object-oriented; (D) thực hiện nhiều tác vụ đồng thời là (5) Multithreading; (E) ẩn chi tiết cài đặt bên trong đối tượng là (3) Encapsulation. Các phương án A, B, D đều ghép sai ít nhất các cặp (B), (E) hoặc toàn bộ."
  },
  {
    "id": 5305,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 FE (50 câu - Full Giải)",
    "question": "[SP26_B5_FE - Câu 5/50] Which of the following statements about the Java language is true?",
    "options": [
      "Java language is case-sensitive.",
      "Java is not a fully object-oriented language.",
      "Using a colon to end the command.",
      "The Java code only runs on the Windows platform."
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A. Java là ngôn ngữ phân biệt chữ hoa và chữ thường (case-sensitive), ví dụ `main` và `Main` là hai định danh khác nhau. Phương án C sai vì Java dùng dấu chấm phẩy `;` để kết thúc câu lệnh (không phải dấu hai chấm `:`), D sai vì Java độc lập nền tảng. Lưu ý nhỏ: về mặt lý thuyết khắt khe, B cũng thường được nhắc tới vì Java có kiểu nguyên thủy, nhưng trong ngữ cảnh môn học PRO192 thì A là phát biểu đúng chuẩn được chọn."
  },
  {
    "id": 5306,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 FE (50 câu - Full Giải)",
    "question": "[SP26_B5_FE - Câu 6/50] Match each object-oriented programming concept with its appropriate description.\nConcept\n(A) Abstraction\n(B) Encapsulation\n(C) Hierarchy\n(D) Polymorphism\n\nDescription\n(1) Focuses on essential qualities while hiding complexity\n(2) Hides internal implementation, enabling changes without affecting external code.\n(3) Organizes objects/classes into parent-child relationships\n(4) Allows objects to behave differently based on context\n\nWhich of the following options correctly matches the concepts with their descriptions?",
    "options": [
      "(A) → (1), (B) → (2), (C) → (3), (D) → (4)",
      "(A) → (2), (B) → (4), (C) → (1), (D) → (3)",
      "(A) → (3), (B) → (1), (C) → (4), (D) → (2)",
      "(A) → (4), (B) → (3), (C) → (2), (D) → (1)"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A. Tính trừu tượng (Abstraction - A) tập trung vào đặc tính cốt lõi và ẩn sự phức tạp (1); tính đóng gói (Encapsulation - B) ẩn cài đặt bên trong để tránh ảnh hưởng code bên ngoài (2); phân cấp kế thừa (Hierarchy - C) tổ chức lớp theo quan hệ cha-con (3); tính đa hình (Polymorphism - D) cho phép đối tượng hành xử khác nhau tùy ngữ cảnh (4). Các phương án B, C, D đều ghép lệch thứ tự các khái niệm này."
  },
  {
    "id": 5307,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 FE (50 câu - Full Giải)",
    "question": "[SP26_B5_FE - Câu 7/50] What is the role of the Garbage Collection?",
    "options": [
      "It frees heap memory by destroying unreachable objects.",
      "It deletes all the Java files available on the memory.",
      "It loads a Java program into memory.",
      "It checks the output of any Java program and deletes anything that does not make sense at all."
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A. Garbage Collection (GC) trong Java có nhiệm vụ tự động giải phóng vùng nhớ Heap bằng cách thu hồi/hủy các đối tượng không còn tham chiếu nào trỏ tới (unreachable objects). Phương án C mô tả vai trò của ClassLoader, còn B và D là các phát biểu sai hoàn toàn về cơ chế bộ nhớ Java."
  },
  {
    "id": 5308,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 FE (50 câu - Full Giải)",
    "question": "[SP26_B5_FE - Câu 8/50] What is the file extension of Java source code?",
    "options": [
      ".java",
      ".class",
      ".jar",
      ".rar"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A. Tệp mã nguồn Java luôn có phần mở rộng là `.java`. Phương án B (`.class`) là tệp bytecode sau khi biên dịch, C (`.jar`) là tệp lưu trữ đóng gói ứng dụng/thư viện Java, còn D (`.rar`) là định dạng nén tệp thông thường."
  },
  {
    "id": 5309,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 FE (50 câu - Full Giải)",
    "question": "[SP26_B5_FE - Câu 9/50] Which of the following commands correctly compiles and runs a Java program named Welcome.java from the command line?",
    "options": [
      "javac Welcome.class and java Welcome.java",
      "java Welcome and javac Welcome.java",
      "javac Welcome.java and java Welcome",
      "java Welcome.class"
    ],
    "answer": 2,
    "explanation": "Đáp án đúng là C. Để chạy từ dòng lệnh, trước tiên ta dùng trình biên dịch `javac Welcome.java` để tạo ra tệp bytecode `Welcome.class`, sau đó dùng `java Welcome` (không kèm `.class`) để JVM thực thi lớp `Welcome`. Phương án A sai đuôi tệp ở cả hai lệnh, B sai thứ tự chạy trước khi biên dịch, và D thừa đuôi `.class` khi chạy lệnh `java`."
  },
  {
    "id": 5310,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 FE (50 câu - Full Giải)",
    "question": "[SP26_B5_FE - Câu 10/50] Which of the following is a primitive data type in Java?",
    "options": [
      "String",
      "Float",
      "byte",
      "ArrayList",
      "Integer",
      "Character"
    ],
    "answer": 2,
    "explanation": "Đáp án đúng là C. Java có 8 kiểu dữ liệu nguyên thủy (primitive types) viết thường gồm: `byte`, `short`, `int`, `long`, `float`, `double`, `boolean`, `char`. Các phương án A (`String`), D (`ArrayList`) là các lớp tham chiếu, còn B (`Float`), E (`Integer`), F (`Character`) là các lớp bao (Wrapper classes) chứ không phải kiểu nguyên thủy."
  },
  {
    "id": 5311,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 FE (50 câu - Full Giải)",
    "question": "[SP26_B5_FE - Câu 11/50] What keyword is used in Java to declare a constant value that cannot be changed?",
    "options": [
      "constant",
      "const",
      "final",
      "static"
    ],
    "answer": 2,
    "explanation": "Đáp án đúng là C. Từ khóa `final` dùng để khai báo hằng số hoặc biến chỉ được gán giá trị một lần và không thể thay đổi sau đó. Phương án A (`constant`) không phải từ khóa trong Java, B (`const`) là từ khóa dự trữ nhưng không được sử dụng trong Java, còn D (`static`) dùng để khai báo thành viên thuộc về lớp."
  },
  {
    "id": 5312,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 FE (50 câu - Full Giải)",
    "question": "[SP26_B5_FE - Câu 12/50] Shortcut operators like += in Java combine which two actions?",
    "options": [
      "Assignment and arithmetic operation",
      "Declaration and initialization",
      "Type casting and assignment",
      "Promotion and assignment"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A. Toán tử gán kết hợp (như `+=`, `-=`, `*=`) thực hiện đồng thời phép toán số học và phép gán giá trị (ví dụ `x += 2` thực hiện cộng rồi gán lại cho `x`). Các phương án B, C, D không mô tả đúng bản chất kết hợp phép tính số học và phép gán của `+=`."
  },
  {
    "id": 5313,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 FE (50 câu - Full Giải)",
    "question": "[SP26_B5_FE - Câu 13/50] What is the output of the code snippet?\n\npublic class Test {\n    public static void main(String[] args) {\n        int x = -1;\n        String y = x+3;\n        System.out.format(\"%d %s\",x,y);\n    }\n}",
    "options": [
      "Compile error",
      "-1 -13",
      "-1 4",
      "-1 2"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A. Trong dòng `String y = x+3;`, cả `x` (`-1`) và `3` đều là kiểu `int` nên biểu thức `x + 3` cho kết quả kiểu `int` (`2`). Java không tự động chuyển một giá trị `int` sang `String` khi gán trực tiếp, dẫn đến lỗi biên dịch (`incompatible types: int cannot be converted to String`). Do đó chương trình không chạy để in ra các kết quả B, C hay D."
  },
  {
    "id": 5314,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 FE (50 câu - Full Giải)",
    "question": "[SP26_B5_FE - Câu 14/50] Which of the following packages contains the Scanner class used to input data via keyboard?",
    "options": [
      "java.util",
      "java.net",
      "java.io",
      "java.awt"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A. Lớp `Scanner` nằm trong gói `java.util` (`java.util.Scanner`). Gói `java.io` (C) chứa các luồng nhập xuất như `BufferedReader`/`FileInputStream`, `java.net` (B) dùng cho lập trình mạng, và `java.awt` (D) dùng cho giao diện đồ họa."
  },
  {
    "id": 5315,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 FE (50 câu - Full Giải)",
    "question": "[SP26_B5_FE - Câu 15/50] What happens if you try to use a method on a null object reference?",
    "options": [
      "The object gets initialized automatically.",
      "Java skips the method.",
      "A NullPointerException is thrown",
      "The method executes without issue"
    ],
    "answer": 2,
    "explanation": "Đáp án đúng là C. Khi gọi một phương thức instance thông qua một biến tham chiếu đang mang giá trị `null`, JVM sẽ ném ra ngoại lệ `NullPointerException` lúc chạy (runtime). Các phương án A, B, D đều sai vì Java không tự khởi tạo đối tượng hay bỏ qua lời gọi phương thức."
  },
  {
    "id": 5316,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 FE (50 câu - Full Giải)",
    "question": "[SP26_B5_FE - Câu 16/50] Which of the following access modifiers in Java provides the strongest form of encapsulation?",
    "options": [
      "public",
      "protected",
      "private",
      "default (no modifier)"
    ],
    "answer": 2,
    "explanation": "Đáp án đúng là C. Access modifier `private` giới hạn quyền truy cập chặt chẽ nhất—chỉ cho phép truy cập bên trong chính lớp khai báo nó, qua đó bảo vệ dữ liệu và đảm bảo tính đóng gói (encapsulation) mạnh nhất. `default`, `protected`, và `public` lần lượt mở rộng phạm vi truy cập ra package, lớp con và toàn bộ chương trình."
  },
  {
    "id": 5317,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 FE (50 câu - Full Giải)",
    "question": "[SP26_B5_FE - Câu 17/50] What is the purpose of the \"this\" keyword in Java?",
    "options": [
      "It refers to the current class",
      "It refers to the current object",
      "It refers to the superclass",
      "It refers to the subclass",
      "It initializes a variable",
      "It denotes a static method"
    ],
    "answer": 1,
    "explanation": "Đáp án đúng là B. Từ khóa `this` là biến tham chiếu trỏ tới đối tượng hiện tại (current object) đang thực thi phương thức hoặc constructor. Phương án C mô tả từ khóa `super`, còn A, D, E, F đều không đúng chức năng của `this` (lưu ý `this` không dùng được trong ngữ cảnh `static`)."
  },
  {
    "id": 5318,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 FE (50 câu - Full Giải)",
    "question": "[SP26_B5_FE - Câu 18/50] What is the correct way to declare a constructor?",
    "options": [
      "void Employee() {}",
      "Employee(String name) {}",
      "constructor Employee(String name) {}",
      "static Employee(String name) {}"
    ],
    "answer": 1,
    "explanation": "Đáp án đúng là B. Constructor trong Java phải trùng tên với lớp và không có kiểu trả về (kể cả `void`), đồng thời không được gắn từ khóa `static`. Phương án A có `void` nên trở thành một phương thức bình thường, C dùng từ khóa `constructor` không tồn tại trong Java, và D sai vì constructor không thể là `static`."
  },
  {
    "id": 5319,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 FE (50 câu - Full Giải)",
    "question": "[SP26_B5_FE - Câu 19/50] Which of the following describes an accessor (getter) method?",
    "options": [
      "A method that deletes object data.",
      "A method that modifies object data.",
      "A method that retrieves object data without changing it.",
      "A method that returns nothing."
    ],
    "answer": 2,
    "explanation": "Đáp án đúng là C. Phương thức accessor (getter) có nhiệm vụ đọc/truy xuất giá trị thuộc tính của đối tượng mà không làm thay đổi dữ liệu đó. Phương án B mô tả mutator (setter), còn A và D không đúng với vai trò của getter."
  },
  {
    "id": 5320,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 FE (50 câu - Full Giải)",
    "question": "[SP26_B5_FE - Câu 20/50] What is the output of the following code snippet?\n\npublic class Person {\n    protected String id;\n    public void calPerson(Person p){\n        p.id = \"HCM\";\n        System.out.print(p.id);\n    }\n    public static void main(String[] args) {\n        Person p = new Person();\n        p.id = \"FPT\";\n        p.calPerson(p);\n    }\n}",
    "options": [
      "HCM",
      "FPT",
      "FPTHCM",
      "HCMFPT"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A. Trong `main`, đối tượng `Person p` được khởi tạo và gán `p.id = \"FPT\"`. Khi gọi `p.calPerson(p)`, tham chiếu tới đối tượng `p` được truyền vào phương thức, tại đây `p.id` bị gán đè thành `\"HCM\"` rồi mới gọi `System.out.print(p.id)`, nên màn hình chỉ in ra `HCM`. Các phương án B, C, D sai vì trước lệnh `print` không hề có lệnh in `\"FPT\"`."
  },
  {
    "id": 5321,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 FE (50 câu - Full Giải)",
    "question": "[SP26_B5_FE - Câu 21/50] Which of the following statements related to the protected access modifier is true?",
    "options": [
      "It allows the outside package access",
      "It does not allow within-package access",
      "The protected members must be initialized before use",
      "All of the others"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A. Thành viên `protected` cho phép truy cập từ các lớp trong cùng package và cả từ các lớp con (subclass) ở ngoài package, tức là có cho phép truy cập từ ngoài package (qua kế thừa). Phương án B sai vì `protected` vẫn cho phép truy cập trong cùng package, C sai vì biến thành viên tự nhận giá trị mặc định, kéo theo D sai."
  },
  {
    "id": 5322,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 FE (50 câu - Full Giải)",
    "question": "[SP26_B5_FE - Câu 22/50] Which of the following methods belongs to the Object class?",
    "options": [
      "equals",
      "compareTo",
      "concat",
      "compare"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A. Phương thức `equals(Object obj)` được định nghĩa sẵn trong lớp gốc `java.lang.Object`. Phương án B (`compareTo`) thuộc interface `Comparable`, C (`concat`) thuộc lớp `String`, và D (`compare`) thuộc interface `Comparator` (hoặc các lớp Wrapper)."
  },
  {
    "id": 5323,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 FE (50 câu - Full Giải)",
    "question": "[SP26_B5_FE - Câu 23/50] What type of relationship does aggregation describe in object-oriented design?",
    "options": [
      "“is a kind of” relationship, indicating inheritance.",
      "“inherits from” relationship in class hierarchies",
      "“uses” relationship, where one class calls another",
      "“has a” relationship, showing ownership or containment."
    ],
    "answer": 3,
    "explanation": "Đáp án đúng là D. Aggregation (kết tập) biểu diễn mối quan hệ \"has-a\" (một đối tượng chứa hoặc sở hữu đối tượng khác, ví dụ Department có các Teacher). Phương án A và B mô tả quan hệ kế thừa (\"is-a\"), còn C mô tả quan hệ phụ thuộc/sử dụng (dependency)."
  },
  {
    "id": 5324,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 FE (50 câu - Full Giải)",
    "question": "[SP26_B5_FE - Câu 24/50] Choose multiple correct answers.",
    "options": [
      "private access modifier should be used for a variable or method to only be accessed within the same class",
      "public access modifier should be used for a variable or method that should be accessible from any class, regardless of the package",
      "protected access modifier should be used for a variable or method that should only be accessed within the same class and subclasses, in the same package",
      "default (no modifier) access modifier only allows access in the same class"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Đáp án đúng là A và B. `private` chỉ cho phép truy cập trong cùng lớp (A đúng), còn `public` cho phép truy cập từ mọi lớp ở bất kỳ package nào (B đúng). Phương án C sai vì `protected` còn cho phép lớp con ở khác package truy cập (không chỉ trong cùng package), và D sai vì `default` cho phép truy cập trong toàn bộ cùng package chứ không chỉ trong cùng lớp."
  },
  {
    "id": 5325,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 FE (50 câu - Full Giải)",
    "question": "[SP26_B5_FE - Câu 25/50] What is the primary purpose of using a superclass and subclass relationship in Java?",
    "options": [
      "To restrict access to certain methods or fields.",
      "To create multiple instances of a class.",
      "To implement multiple inheritance.",
      "To achieve code reusability and facilitate polymorphism.",
      "To enforce encapsulation.",
      "To establish a one-to-one mapping between classes."
    ],
    "answer": 3,
    "explanation": "Đáp án đúng là D. Quan hệ kế thừa giữa lớp cha (superclass) và lớp con (subclass) trong Java nhằm mục đích tái sử dụng mã nguồn (kế thừa thuộc tính, phương thức) và hỗ trợ tính đa hình (ghi đè phương thức, liên kết động). Các phương án A và E mô tả tính đóng gói, còn C sai vì Java không hỗ trợ đa kế thừa lớp."
  },
  {
    "id": 5326,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 FE (50 câu - Full Giải)",
    "question": "[SP26_B5_FE - Câu 26/50] Which of the following is/are advantages of packages?",
    "options": [
      "Packages avoid name clashes",
      "Classes, even though they are visible outside their package, can have fields visible to packages only",
      "We can have hidden classes that are used by the packages, but not visible outside.",
      "All of the mentioned"
    ],
    "answer": 3,
    "explanation": "Đáp án đúng là D vì cả ba phát biểu A, B, C đều là ưu điểm của package trong Java: tránh xung đột tên lớp (name clashes), hỗ trợ phạm vi truy cập mặc định (package-private) cho field dù lớp là public, và cho phép ẩn các lớp non-public khỏi bên ngoài package."
  },
  {
    "id": 5327,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 FE (50 câu - Full Giải)",
    "question": "[SP26_B5_FE - Câu 27/50] Which of the following is the correct order of exception handling in Java?",
    "options": [
      "try → throw → catch → finally",
      "try → catch → throw → finally",
      "try → catch → finally → throw",
      "throw → try → catch → finally"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì luồng xử lý ngoại lệ chuẩn trong Java bắt đầu bằng khối try thực thi mã, nếu có lỗi thì ngoại lệ được ném ra (throw), sau đó khối catch bắt và xử lý ngoại lệ, cuối cùng khối finally luôn được thực thi. Các phương án B, C, D sắp xếp sai thứ tự thực thi của throw hoặc try."
  },
  {
    "id": 5328,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 FE (50 câu - Full Giải)",
    "question": "[SP26_B5_FE - Câu 28/50] What is the output following the code snippet?\n\nclass Food {\n    public String getFood() {\n        return \"Pizza\";\n    }\n    public String getInfo() {\n        return this.getFood();\n    }\n}\nclass Order extends Food {\n    public String getFood() {\n        return \"Taco\";\n    }\n}\npublic class Main {\n    public static void main(String args[]) {\n        Food s1 = new Order();\n        System.out.println(s1.getInfo());\n    }\n}",
    "options": [
      "Taco",
      "Pizza",
      "Taco Pizza",
      "Pizza Taco"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì biến s1 tham chiếu đến đối tượng thực tế kiểu Order (đa hình). Khi gọi s1.getInfo(), phương thức getInfo() của Food chạy nhưng this.getFood() được liên kết động (dynamic dispatch) tới phương thức getFood() đã ghi đè ở lớp Order, trả về \"Taco\" chứ không phải \"Pizza\"."
  },
  {
    "id": 5329,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 FE (50 câu - Full Giải)",
    "question": "[SP26_B5_FE - Câu 29/50] Why are Java's wrapper classes like Integer and Double considered immutable?",
    "options": [
      "Their values can be changed using setters.",
      "They inherit immutability from the Object class.",
      "They do not provide methods to modify internal values after creation.",
      "They are synchronized for thread safety."
    ],
    "answer": 2,
    "explanation": "Đáp án đúng là C vì các lớp wrapper như Integer và Double lưu giá trị nguyên thủy bên trong trường private final và không cung cấp phương thức setter nào để thay đổi giá trị đó sau khi khởi tạo. Phương án A sai vì không có setter, B sai vì Object không quy định tính bất biến, D sai vì đồng bộ hóa không phải nguyên nhân tạo nên tính bất biến."
  },
  {
    "id": 5330,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 FE (50 câu - Full Giải)",
    "question": "[SP26_B5_FE - Câu 30/50] Choose the correct statement about abstract class in Java:",
    "options": [
      "An abstract class must have many abstract methods.",
      "An abstract class must define all abstract methods.",
      "An abstract class can also be marked as final.",
      "An abstract class must have abstract methods."
    ],
    "answer": 1,
    "explanation": "Đáp án lưu là B, tuy nhiên về mặt ngữ nghĩa Java thì cả 4 câu đều chưa chính xác hoàn toàn: lớp abstract không bắt buộc phải cài đặt (define) các phương thức trừu tượng (việc đó dành cho lớp con concrete), cũng không bắt buộc phải có phương thức abstract nào (nên A, D sai), và không thể đồng thời đánh dấu final (nên C sai). Đáp án B được chọn theo key có thể do người ra đề dùng từ \"define\" theo nghĩa \"khai báo\" hoặc nhầm lẫn với lớp con kế thừa lớp abstract."
  },
  {
    "id": 5331,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 FE (50 câu - Full Giải)",
    "question": "[SP26_B5_FE - Câu 31/50] Choose the correct statement about the anonymous class.",
    "options": [
      "An anonymous class can be used to implement an interface",
      "Anonymous class used to extend methods",
      "Anonymous class is used to define a set of constants",
      "All of the others"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì anonymous class (lớp vô danh) trong Java thường được dùng để triển khai trực tiếp một interface hoặc kế thừa một lớp tại chỗ khởi tạo. Phương án B sai vì lớp vô danh kế thừa lớp hoặc triển khai interface chứ không \"extend methods\", còn C là công dụng của enum hoặc các hằng static final."
  },
  {
    "id": 5332,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 FE (50 câu - Full Giải)",
    "question": "[SP26_B5_FE - Câu 32/50] What is the output following the code snippet?\n\nclass StaticTest {\n    static void staticMethod() {\n        System.out.println(\"Static Method\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        StaticTest first = null;\n        first.staticMethod();\n    }\n}",
    "options": [
      "Static Method",
      "Throws a NullPointerException",
      "null",
      "None of the others"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì staticMethod() là phương thức static nên được trình biên dịch phân giải dựa trên kiểu khai báo của biến (StaticTest) chứ không cần đối tượng thực tế lúc chạy. Do đó, dù first mang giá trị null, lệnh first.staticMethod() vẫn gọi StaticTest.staticMethod() và in ra \"Static Method\" mà không ném NullPointerException (B sai)."
  },
  {
    "id": 5333,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 FE (50 câu - Full Giải)",
    "question": "[SP26_B5_FE - Câu 33/50] Given the following code snippet:\n\nfloat[] arr = new float[100]; //Line 1\narr[0]=3.4;                   //Line 2\n\nChoose the correct statement.",
    "options": [
      "3.4 is a double type by default so we need to explicitly cast it to float",
      "3.4 is a float type by default so we don't need to explicitly cast it to float",
      "There is no problem with these code lines",
      "Line 1 will throw the indexOutOfBound exception"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì trong Java mọi hằng số thực như 3.4 mặc định có kiểu double, nên phép gán arr[0]=3.4 vào mảng float sẽ gây lỗi biên dịch nếu không ép kiểu tường minh thành (float) 3.4 hoặc thêm hậu tố f (3.4f). Các phương án B, C sai vì hiểu nhầm kiểu mặc định, còn D sai vì Line 1 chỉ cấp phát mảng kích thước 100."
  },
  {
    "id": 5334,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 FE (50 câu - Full Giải)",
    "question": "[SP26_B5_FE - Câu 34/50] Which method is used to convert an array to a List in Java?",
    "options": [
      "Arrays.asList()",
      "Arrays.toList()",
      "Arrays.convertToList()",
      "Arrays.arrayToList()"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì lớp java.util.Arrays cung cấp phương thức tĩnh Arrays.asList() để chuyển đổi một mảng thành List có kích thước cố định. Các phương thức toList(), convertToList() và arrayToList() không tồn tại trong lớp Arrays."
  },
  {
    "id": 5335,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 FE (50 câu - Full Giải)",
    "question": "[SP26_B5_FE - Câu 35/50] Which of the following statements is used to determine the maximum capacity of an ArrayList named al?",
    "options": [
      "al.size()",
      "al.length()",
      "al.size",
      "al.length"
    ],
    "answer": 0,
    "explanation": "Đáp án lưu là A (al.size()), đây là phương thức duy nhất hợp lệ trên ArrayList trong 4 lựa chọn vì length(), thuộc tính size và length không tồn tại ở ArrayList. Lưu ý thêm theo chuẩn Java: al.size() trả về số lượng phần tử hiện tại trong danh sách chứ không phải dung lượng bộ đệm nội bộ (capacity, vốn không có phương thức public để lấy)."
  },
  {
    "id": 5336,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 FE (50 câu - Full Giải)",
    "question": "[SP26_B5_FE - Câu 36/50] Which method is used to compare two arrays for equality in Java?",
    "options": [
      "Arrays.equals()",
      "Arrays.equal()",
      "Arrays.compare()",
      "Arrays.comparison()"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì Arrays.equals() kiểm tra hai mảng có cùng độ dài và các phần tử tương ứng bằng nhau hay không (trả về boolean). Phương án C (Arrays.compare()) dùng để so sánh thứ tự từ điển (trả về int), còn B và D không tồn tại."
  },
  {
    "id": 5337,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 FE (50 câu - Full Giải)",
    "question": "[SP26_B5_FE - Câu 37/50] You are tasked with implementing a system that tracks the frequency of words in a large text document. Explain how you would use a Java collection to efficiently achieve this, emphasizing the principles of abstraction and encapsulation.",
    "options": [
      "Utilize a HashMap<String, Integer> for efficient word frequency tracking.",
      "Implement a LinkedList<String> to store words and their occurrences.",
      "Use a PriorityQueue<String> to prioritize words based on frequency.",
      "Employ a HashSet<String> for unique word storage.",
      "Implement a custom WordFrequencyTracker class using a binary search tree.",
      "Utilize a TreeMap<String, Integer> for a sorted mapping of words and frequencies."
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì HashMap<String, Integer> cho phép ánh xạ từng từ với số lần xuất hiện cùng thời gian truy xuất và cập nhật trung bình O(1), rất hiệu quả cho văn bản lớn. Các lựa chọn như LinkedList (tìm kiếm O(n)), HashSet (không lưu được tần suất) hay TreeMap (O(log n), tốn chi phí sắp xếp không cần thiết) đều kém tối ưu hơn cho bài toán đếm tần suất."
  },
  {
    "id": 5338,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 FE (50 câu - Full Giải)",
    "question": "[SP26_B5_FE - Câu 38/50] Which method is used to find the maximum element in a collection of the Collections class?",
    "options": [
      "max()",
      "findMax()",
      "getMax()",
      "maxElement()"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì lớp tiện ích java.util.Collections cung cấp phương thức tĩnh Collections.max() để tìm phần tử lớn nhất trong một Collection. Các tên hàm findMax(), getMax() và maxElement() không có trong lớp Collections."
  },
  {
    "id": 5339,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 FE (50 câu - Full Giải)",
    "question": "[SP26_B5_FE - Câu 39/50] Which of the following statements related to removing an element in an ArrayList is true?",
    "options": [
      "The remove method will return the deleted value for the user.",
      "The remove operation will raise an exception if the element does not exist in the ArrayList",
      "The remove method will return true if this list contained the specified element",
      "All of the others"
    ],
    "answer": 2,
    "explanation": "Đáp án đúng chuẩn Java là C (`The remove method will return true if this list contained the specified element`):\n• Với `ArrayList.remove(Object o)` (xóa theo phần tử): trả về `true` nếu tìm thấy và xóa thành công, trả về `false` nếu không tồn tại — KHÔNG ném ngoại lệ nên B sai (và kéo theo D \"All of the others\" sai!).\n• Lưu ý thêm: A đúng với phiên bản nạp chồng `remove(int index)` (trả về phần tử vừa xóa tại vị trí index).\n(Đã sửa từ đáp án sai D của web nguồn về C.)"
  },
  {
    "id": 5340,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 FE (50 câu - Full Giải)",
    "question": "[SP26_B5_FE - Câu 40/50] What will be the output of the following Java code?\n\nimport java.util.*;\n\npublic class Test {\n    public static void main(String[] args) {\n        List<String> list = new ArrayList<>();\n        list.add(\"A\");\n        list.add(\"B\");\n        list.add(\"A\");\n        Set<String> set = new HashSet<>(list);\n        System.out.println(set);\n    }\n}",
    "options": [
      "[A, B, A]",
      "[A, B]",
      "[B, A, A]",
      "Compilation error"
    ],
    "answer": 1,
    "explanation": "Đáp án đúng là B vì list ban đầu chứa [\"A\", \"B\", \"A\"], khi truyền vào new HashSet<>(list) thì HashSet tự động loại bỏ phần tử trùng lặp \"A\". Kết quả in ra là [A, B] thay vì giữ bản sao như A hoặc C."
  },
  {
    "id": 5341,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 FE (50 câu - Full Giải)",
    "question": "[SP26_B5_FE - Câu 41/50] How do you convert an ArrayList to an array?",
    "options": [
      "toArray()",
      "copyToArray()",
      "convertArray()",
      "makeArray()"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì giao diện Collection và lớp ArrayList trong Java cung cấp phương thức toArray() (hoặc toArray(T[] a)) để chuyển danh sách thành mảng. Các phương thức copyToArray(), convertArray() và makeArray() không tồn tại."
  },
  {
    "id": 5342,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 FE (50 câu - Full Giải)",
    "question": "[SP26_B5_FE - Câu 42/50] What is the output of the following code snippet?\n\nTreeMap<String, Integer> t = new TreeMap();\nt.put(\"c\", 1);\nt.put(\"b\", 2);\nt.put(\"a\", 3);\nSystem.out.println(t.values());",
    "options": [
      "[3,2,1]",
      "[\"c\",\"b\",\"a\"]",
      "[\"a\",\"b\",\"c\"]",
      "[1,2,3]"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng chuẩn Java là A (`[3,2,1]`):\n• `TreeMap` luôn tự động sắp xếp các mục theo **KEY tăng dần** (`\"a\" → 3`, `\"b\" → 2`, `\"c\" → 1`), KHÔNG sắp xếp theo Value!\n• Do đó `t.values()` duyệt giá trị theo thứ tự của Key và in ra **`[3, 2, 1]`**.\n(Đã sửa từ đáp án sai D `[1,2,3]` của web nguồn về đúng chuẩn Java A `[3,2,1]`.)"
  },
  {
    "id": 5343,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 FE (50 câu - Full Giải)",
    "question": "[SP26_B5_FE - Câu 43/50] In the RandomAccessFile class, which mode supports metadata changes ( file attributes) of the file immediately?",
    "options": [
      "\"rws\"",
      "\"rw\"",
      "\"rwd\"",
      "\"r\""
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì chế độ \"rws\" trong RandomAccessFile yêu cầu mọi thay đổi cả về nội dung lẫn siêu dữ liệu (metadata) của tệp phải được ghi đồng bộ ngay lập tức xuống thiết bị lưu trữ. Chế độ \"rwd\" chỉ đồng bộ nội dung, \"rw\" không đảm bảo ghi đồng bộ ngay, còn \"r\" chỉ cho phép đọc."
  },
  {
    "id": 5344,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 FE (50 câu - Full Giải)",
    "question": "[SP26_B5_FE - Câu 44/50] Which of the following classes is used for reading byte-oriented data (streams of raw bytes) such as image data, audio, and video?",
    "options": [
      "FileInputStream class",
      "BufferedReader class",
      "PrintWriter class",
      "DataOutputStream class"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì FileInputStream là luồng nhập hướng byte (byte stream) chuyên dùng để đọc dữ liệu nhị phân thô như ảnh, âm thanh, video. BufferedReader và PrintWriter là luồng ký tự (character stream), còn DataOutputStream dùng để ghi dữ liệu chứ không phải đọc."
  },
  {
    "id": 5345,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 FE (50 câu - Full Giải)",
    "question": "[SP26_B5_FE - Câu 45/50] You are developing a card game, and you need to shuffle a deck of cards thoroughly before each game. Explain how you would use Java collections to achieve an unbiased shuffle, and discuss the importance of randomness in shuffling.",
    "options": [
      "Use Collections.shuffle() for a simple and unbiased shuffle.",
      "Implement a custom Fisher-Yates shuffle algorithm for control.",
      "Choose Random.nextInt() to generate random indices for shuffling.",
      "Utilize Arrays.sort() with a random comparator for a randomized effect.",
      "Implement a custom algorithm that swaps each card with a randomly chosen card.",
      "Use Collections.reverse() for a reverse shuffling effect."
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì Collections.shuffle() là phương thức chuẩn của Java Collections Framework sử dụng thuật toán Fisher-Yates để xáo trộn danh sách một cách công bằng (unbiased) với độ phức tạp O(n). Các phương án như dùng comparator ngẫu nhiên trong Arrays.sort() (vi phạm tính chất bắc cầu của sort), hoán đổi ngẫu nhiên thiếu kiểm soát (dễ lệch phân phối) hay Collections.reverse() (chỉ đảo ngược) đều không phù hợp."
  },
  {
    "id": 5346,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 FE (50 câu - Full Giải)",
    "question": "[SP26_B5_FE - Câu 46/50] To use the ObjectOutputStream object for writing an object to a destination file, which interface should the target class implement?",
    "options": [
      "Serializable",
      "Interpretable",
      "Writable",
      "Comparable"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì trong Java, lớp của đối tượng cần tuần tự hóa (serialize) bằng ObjectOutputStream bắt buộc phải triển khai marker interface java.io.Serializable, nếu không sẽ ném NotSerializableException. Các interface khác như Comparable dùng để so sánh thứ tự, còn Interpretable và Writable không dùng cho Java Serialization."
  },
  {
    "id": 5347,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 FE (50 câu - Full Giải)",
    "question": "[SP26_B5_FE - Câu 47/50] For the low-level binary stream class FileInputStream, which of the following methods is used to retrieve a byte from a source stream?",
    "options": [
      "read()",
      "readByte()",
      "fetch()",
      "fetchLine()"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì FileInputStream cung cấp phương thức read() để đọc một byte dữ liệu tiếp theo từ luồng nhập (trả về int từ 0 đến 255, hoặc -1 nếu hết luồng). Phương thức readByte() thuộc DataInputStream/RandomAccessFile, còn fetch() và fetchLine() không tồn tại."
  },
  {
    "id": 5348,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 FE (50 câu - Full Giải)",
    "question": "[SP26_B5_FE - Câu 48/50] You are developing a contact management system, and you need to quickly find a contact by their phone number. Explain how you would use Java collections to efficiently search for a contact based on a specific criterion.",
    "options": [
      "Use a HashMap with phone numbers as keys for O(1) lookup.",
      "Implement a linear search through the list of contacts.",
      "Utilize Collections.binarySearch() with a sorted list.",
      "Choose a HashSet for efficient phone number-based searching.",
      "Implement a custom trie data structure for optimized searching.",
      "Use Collections.max() with a custom comparator for finding the maximum value."
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì dùng HashMap với số điện thoại làm key và đối tượng Contact làm value cho tốc độ tra cứu trung bình O(1). Tìm kiếm tuyến tính mất O(n), binarySearch mất O(log n) và đòi hỏi danh sách đã sắp xếp, còn HashSet không ánh xạ được từ số điện thoại sang thông tin liên hệ."
  },
  {
    "id": 5349,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 FE (50 câu - Full Giải)",
    "question": "[SP26_B5_FE - Câu 49/50] What operator is used to access the member(field or method) of the object?",
    "options": [
      ".",
      "{}",
      "[]",
      ":"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì toán tử dấu chấm (.) được dùng trong Java để truy cập các thành viên (biến/thuộc tính hoặc phương thức) của một đối tượng hay lớp. Các ký hiệu {}, [] và : dùng cho khối lệnh, mảng và nhãn/enhanced for/ternary."
  },
  {
    "id": 5350,
    "topic": "🏆 Đề FE PRO192 - SP26 B5 FE (50 câu - Full Giải)",
    "question": "[SP26_B5_FE - Câu 50/50] Which of the following is NOT one of the four fundamental object-oriented programming concepts?",
    "options": [
      "Abstraction",
      "Inheritance",
      "Composition",
      "Polymorphism"
    ],
    "answer": 2,
    "explanation": "Đáp án đúng là C vì bốn tính chất nền tảng của lập trình hướng đối tượng (OOP) là Abstraction (trừu tượng), Encapsulation (đóng gói), Inheritance (kế thừa) và Polymorphism (đa hình). Composition (kết hợp) là một kỹ thuật/quan hệ thiết kế (has-a) chứ không nằm trong 4 trụ cột cơ bản của OOP."
  },
  {
    "id": 5401,
    "topic": "🏆 Đề FE PRO192 - SP26 FE (50 câu - Full Giải)",
    "question": "[SP26_FE - Câu 1/50] Which of the following statements is used to compile the program.java file?",
    "options": [
      "javac program.java",
      "java -java program.java",
      "javac -c program.java",
      "java -j program.java"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì `javac` là trình biên dịch của Java dùng để biên dịch tệp mã nguồn `.java` thành bytecode `.class`. Các lựa chọn B và D dùng lệnh `java` (vốn dùng để chạy chương trình) với các cờ không hợp lệ, còn C dùng sai cờ `-c` cho `javac`."
  },
  {
    "id": 5402,
    "topic": "🏆 Đề FE PRO192 - SP26 FE (50 câu - Full Giải)",
    "question": "[SP26_FE - Câu 2/50] What is the purpose of a Java Virtual Machine(JVM)?",
    "options": [
      "It is used to interpret and execute Java bytecode",
      "It is used to write the bytecode into the .class file",
      "It is used to verify and improve performance the of Java programs",
      "All of the others"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì nhiệm vụ cốt lõi của JVM (Java Virtual Machine) là thông dịch/biên dịch JIT và thực thi Java bytecode trên hệ điều hành đích. Lựa chọn B sai vì việc tạo và ghi bytecode vào tệp `.class` là nhiệm vụ của trình biên dịch `javac`, nên D cũng sai."
  },
  {
    "id": 5403,
    "topic": "🏆 Đề FE PRO192 - SP26 FE (50 câu - Full Giải)",
    "question": "[SP26_FE - Câu 3/50] Which of the following concepts does not belong to object-oriented programming features?",
    "options": [
      "Cross-platform",
      "Inheritance",
      "Polymorphism",
      "Encapsulation"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì \"Cross-platform\" (đa nền tảng) là đặc tính thực thi của ngôn ngữ/nền tảng Java nhờ JVM, không phải khái niệm của lập trình hướng đối tượng (OOP). Ba lựa chọn còn lại (Kế thừa, Đa hình, Đóng gói) đều là các tính chất nền tảng của OOP."
  },
  {
    "id": 5404,
    "topic": "🏆 Đề FE PRO192 - SP26 FE (50 câu - Full Giải)",
    "question": "[SP26_FE - Câu 4/50] Which of the following is NOT a basic component of a computer?",
    "options": [
      "CPU",
      "Memory",
      "Monitor",
      "Refrigerator"
    ],
    "answer": 3,
    "explanation": "Đáp án đúng là D vì Refrigerator (tủ lạnh) không phải là thành phần của máy tính. Các lựa chọn A (bộ xử lý), B (bộ nhớ) và C (màn hình) đều là các thành phần phần cứng cơ bản của hệ thống máy tính."
  },
  {
    "id": 5405,
    "topic": "🏆 Đề FE PRO192 - SP26 FE (50 câu - Full Giải)",
    "question": "[SP26_FE - Câu 5/50] In order to compile a program named Hello.java, what do you type at the command line?",
    "options": [
      "java Hello",
      "java Hello.java",
      "javac Hello",
      "javac Hello.java"
    ],
    "answer": 3,
    "explanation": "Đáp án đúng là D vì để biên dịch tệp mã nguồn Java từ dòng lệnh cần gọi trình biên dịch `javac` kèm đầy đủ tên tệp và phần mở rộng `.java`. Lệnh `java Hello` dùng để chạy chương trình đã biên dịch, `javac Hello` thiếu đuôi `.java`, còn `java Hello.java` là chạy trực tiếp file nguồn (Java 11+) chứ không phải lệnh biên dịch truyền thống tạo `.class`."
  },
  {
    "id": 5406,
    "topic": "🏆 Đề FE PRO192 - SP26 FE (50 câu - Full Giải)",
    "question": "[SP26_FE - Câu 6/50] Which of the following related to the comment in Java is false?",
    "options": [
      "/* comment",
      "/* comment */",
      "/** comment */",
      "//comment"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng chuẩn Java là A (`/* comment`):\n• Chú thích nhiều dòng bắt đầu bằng `/*` BẮT BUỘC phải có ký hiệu đóng `*/` — viết thiếu như A sẽ gây lỗi biên dịch nên A là phát biểu SAI (false).\n• B (`/* comment */`), C (`/** comment */` — Javadoc) và D (`//comment`) đều là 3 cú pháp chú thích hoàn toàn hợp lệ trong Java.\n(Đã sửa từ đáp án sai B của web nguồn về đúng chuẩn Java A.)"
  },
  {
    "id": 5407,
    "topic": "🏆 Đề FE PRO192 - SP26 FE (50 câu - Full Giải)",
    "question": "[SP26_FE - Câu 7/50] Choose the correct statement about the \"instanceof \" operator.",
    "options": [
      "It can be used to test if an object is of a specified type.",
      "The instanceof is also known as a string comparison operator.",
      "The instanceof operator is used to check the validity of object variables",
      "All of the others"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì toán tử `instanceof` trong Java dùng để kiểm tra một đối tượng có phải là thể hiện của một lớp, lớp con hoặc interface chỉ định hay không (trả về `true`/`false`). Lựa chọn B và C mô tả sai hoàn toàn chức năng của `instanceof`, dẫn đến D sai."
  },
  {
    "id": 5408,
    "topic": "🏆 Đề FE PRO192 - SP26 FE (50 câu - Full Giải)",
    "question": "[SP26_FE - Câu 8/50] Choose multiple correct answers.",
    "options": [
      "The default value of an uninitialized int variable in Java is 0",
      "Constants can be changed during the execution of a program",
      "Variables and constants are both used to store values in Java",
      "Variables can be changed during the execution of a program"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": "Các đáp án đúng là A, C và D: trong Java, biến `int` (thuộc lớp/mảng) có giá trị mặc định là `0`, cả biến và hằng số đều dùng để lưu trữ giá trị, và giá trị của biến có thể thay đổi trong lúc chạy. Lựa chọn B sai vì hằng số (`final`) không thể thay đổi giá trị sau khi đã gán."
  },
  {
    "id": 5409,
    "topic": "🏆 Đề FE PRO192 - SP26 FE (50 câu - Full Giải)",
    "question": "[SP26_FE - Câu 9/50] Which of the following is the entry point of the Java program?",
    "options": [
      "main method",
      "class method",
      "instance method",
      "static method"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì JVM luôn bắt đầu thực thi một ứng dụng Java tiêu chuẩn từ phương thức `public static void main(String[] args)`. Các lựa chọn B, C, D chỉ là các loại phương thức nói chung chứ không phải điểm vào mặc định của chương trình."
  },
  {
    "id": 5410,
    "topic": "🏆 Đề FE PRO192 - SP26 FE (50 câu - Full Giải)",
    "question": "[SP26_FE - Câu 10/50] In Java, what is the result of applying the prefix increment operator (++var)?",
    "options": [
      "Increment the variable after using its value",
      "Use the variable's old value, then increment",
      "Increment the variable first, then use the new value",
      "Multiply the variable by 2"
    ],
    "answer": 2,
    "explanation": "Đáp án đúng là C vì toán tử tăng tiền tố `++var` sẽ tăng giá trị của biến lên 1 trước rồi mới trả về giá trị mới đó cho biểu thức. Lựa chọn A và B mô tả toán tử hậu tố `var++`, còn D là sai về mặt phép toán."
  },
  {
    "id": 5411,
    "topic": "🏆 Đề FE PRO192 - SP26 FE (50 câu - Full Giải)",
    "question": "[SP26_FE - Câu 11/50] What will be the output of the following code?\n\npublic class Test10 {\n    public static void main(String[] args) {\n        Integer x = new Integer(5);\n        Integer y = new Integer(10);\n        System.out.println((String)(x+y));\n    }\n}",
    "options": [
      "15",
      "510",
      "Runtime error",
      "Compiler Error"
    ],
    "answer": 3,
    "explanation": "Đáp án đúng là D vì biểu thức `x + y` tự động unbox `x` và `y` thành `int` và cho kết quả kiểu `int` là `15`. Java không cho phép ép kiểu trực tiếp `(String)` từ kiểu nguyên thủy `int`, nên trình biên dịch báo lỗi `incompatible types: int cannot be converted to String`."
  },
  {
    "id": 5412,
    "topic": "🏆 Đề FE PRO192 - SP26 FE (50 câu - Full Giải)",
    "question": "[SP26_FE - Câu 12/50] What is the key difference between memory allocation for local method data and objects in Java?",
    "options": [
      "Local method data is allocated on the stack and discarded when the method exits, while objects are allocated on the heap with a longer lifetime.",
      "Objects are stored on the stack for faster access, while local variables are stored on the heap for persistence.",
      "Both local data and objects use the same memory allocation strategy on the heap.",
      "Local method data requires manual memory management and explicit deallocation by the programmer, while objects are automatically managed through garbage collection mechanisms."
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì dữ liệu cục bộ của phương thức (biến cục bộ, tham số) được cấp phát trên Stack theo từng stack frame và tự giải phóng khi thoát phương thức, còn đối tượng được cấp phát trên Heap và tồn tại lâu hơn dưới sự quản lý của Garbage Collector. B đảo ngược Stack/Heap, C đồng nhất sai cách cấp phát, còn D sai vì Java không yêu cầu giải phóng bộ nhớ Stack thủ công."
  },
  {
    "id": 5413,
    "topic": "🏆 Đề FE PRO192 - SP26 FE (50 câu - Full Giải)",
    "question": "[SP26_FE - Câu 13/50] The nextLine() method belongs to which of the following classes?",
    "options": [
      "Scanner",
      "Integer",
      "String",
      "System"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì `nextLine()` là phương thức của lớp `java.util.Scanner` dùng để đọc toàn bộ một dòng chuỗi từ luồng nhập (như `System.in`). Các lớp `Integer`, `String` và `System` không có phương thức `nextLine()`."
  },
  {
    "id": 5414,
    "topic": "🏆 Đề FE PRO192 - SP26 FE (50 câu - Full Giải)",
    "question": "[SP26_FE - Câu 14/50] Given this main method:\n\npublic static void main(String[] args) {\n    int x = 500;\n    int y = 50;\n\n    try {\n        int z = x / y;\n        x = 0;\n        z /= x;\n        System.out.println(\"z = \" + z);\n    } catch (ArithmeticException ex) {\n        System.out.println(\"Calculation failed.\");\n    } catch (Exception ex) {\n        System.out.println(\"An error occurred.\");\n    } finally {\n        System.out.println(\"Finished.\");\n    }\n}\n\nWhat will be printed on the screen after running the main method?",
    "options": [
      "Calculation failed.\nFinished.",
      "Calculation failed.\nAn error occurred.\nFinished.",
      "z = 0",
      "An error occurred."
    ],
    "answer": 0,
    "explanation": "Đáp án đúng chuẩn Java là A (`Calculation failed.` xuống dòng `Finished.`):\n1. `z = 500 / 50 = 10` → sau đó `x = 0`.\n2. Lệnh `z /= x` chia số nguyên cho `0` nên ném ngay `ArithmeticException` (bỏ qua dòng `System.out.println(\"z = \" + z);`).\n3. Khối `catch (ArithmeticException ex)` bắt lỗi và in **`Calculation failed.`** (không vào `catch (Exception ex)` phía dưới).\n4. Khối `finally` luôn chạy và in **`Finished.`**.\n(Đã sửa từ đáp án sai C `z = 0` của web nguồn về đúng chuẩn Java A.)"
  },
  {
    "id": 5415,
    "topic": "🏆 Đề FE PRO192 - SP26 FE (50 câu - Full Giải)",
    "question": "[SP26_FE - Câu 15/50] Which of the following statements about object instantiation is TRUE?",
    "options": [
      "A class is instantiated when a method is called.",
      "An object is instantiated using the new keyword.",
      "Only static variables can be instantiated.",
      "Objects cannot be created from prewritten classes."
    ],
    "answer": 1,
    "explanation": "Đáp án đúng là B vì trong Java, một đối tượng được khởi tạo từ lớp thông qua từ khóa `new` (gọi constructor). Các lựa chọn A, C và D đều sai vì gọi phương thức không khởi tạo lớp, biến `static` thuộc về lớp chứ không khởi tạo như đối tượng, và hoàn toàn có thể tạo đối tượng từ các lớp có sẵn như `Scanner`, `String`."
  },
  {
    "id": 5416,
    "topic": "🏆 Đề FE PRO192 - SP26 FE (50 câu - Full Giải)",
    "question": "[SP26_FE - Câu 16/50] Choose the correct statement related to the constructors.",
    "options": [
      "Constructor is a block of codes similar to the method. It is called when an instance of the class is created",
      "Constructor is a special type of method that is used to initialize default members of the object only",
      "Constructor is an abstract method with an empty body",
      "Constructor is a method that does not allow parameters"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì constructor là khối mã có cấu trúc tương tự phương thức (nhưng không có kiểu trả về và trùng tên lớp) được tự động gọi khi tạo một thể hiện mới của lớp. Lựa chọn B sai vì constructor có thể khởi tạo mọi giá trị tùy chỉnh, C sai vì constructor không thể là `abstract`, và D sai vì constructor có thể nhận tham số."
  },
  {
    "id": 5417,
    "topic": "🏆 Đề FE PRO192 - SP26 FE (50 câu - Full Giải)",
    "question": "[SP26_FE - Câu 17/50] Which of the following statements related to the constructors is false?",
    "options": [
      "The constructor can be overridden.",
      "The constructor can be overloaded.",
      "The \"this\" keyword and \"super\" keyword can be used in the constructor.",
      "All of the others"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì phát biểu này sai: constructor không thể bị ghi đè (overridden) bởi lớp con do lớp con không kế thừa constructor của lớp cha. Ngược lại, B và C đều đúng vì constructor có thể được nạp chồng (overloaded) và có thể dùng `this(...)` hoặc `super(...)` bên trong."
  },
  {
    "id": 5418,
    "topic": "🏆 Đề FE PRO192 - SP26 FE (50 câu - Full Giải)",
    "question": "[SP26_FE - Câu 18/50] What is the output of the following code snippet?\n\npublic class Person {\n    protected String id = \"New Id\";\n    public static void main(String[] args) {\n        Person p = new Person();\n        p.id = \"FPTU\";\n        System.out.println(p.id);\n    }\n}",
    "options": [
      "FPTU",
      "null",
      "New Id",
      "Runtime error"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì khi `new Person()` chạy, `p.id` ban đầu mang giá trị `\"New Id\"`, ngay sau đó lệnh `p.id = \"FPTU\"` hợp lệ (truy cập trường `protected` ngay trong chính lớp `Person`) đã ghi đè giá trị mới, nên `System.out.println(p.id)` in ra `FPTU`."
  },
  {
    "id": 5419,
    "topic": "🏆 Đề FE PRO192 - SP26 FE (50 câu - Full Giải)",
    "question": "[SP26_FE - Câu 19/50] What is the output of the following code snippet?\n\npublic class Main {\n    static void m1(Integer i) {\n        System.out.println(1);\n    }\n    static void m1(Double d) {\n        System.out.println(2);\n    }\n    static void m1(Object o) {\n        System.out.println(3);\n    }\n    public static void main(String[] args) {\n        m1(12.5);\n    }\n}",
    "options": [
      "2",
      "3",
      "1",
      "12.5"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì hằng số `12.5` mặc định có kiểu `double`, khi truyền vào `m1(12.5)` trình biên dịch sẽ autoboxing `double` thành `Double` để khớp chính xác nhất với `m1(Double d)` thay vì ép lên `Object`, do đó chương trình in ra `2`."
  },
  {
    "id": 5420,
    "topic": "🏆 Đề FE PRO192 - SP26 FE (50 câu - Full Giải)",
    "question": "[SP26_FE - Câu 20/50] Consider the code:\n\npublic class Example {\n    static int count = 0;\n\n    public static int increment() {\n        return ++count;\n    }\n\n    public static void main(String[] args) {\n        int[] arr = {increment(), increment(), increment()};\n\n        for (int i = 0; i < arr.length; i++) {\n            if (arr[i] % 2 == 0) {\n                arr[i] = arr[i] * increment();\n            } else {\n                arr[i] = arr[i] + increment();\n            }\n        }\n\n        System.out.print(\"Result: \");\n        for (int value : arr) {\n            System.out.print(value + \" \");\n        }\n    }\n}\n\nWhat is the output?",
    "options": [
      "Result: 5 10 9",
      "Result: 1 2 3",
      "Result: 4 8 12",
      "Result: 5 8 9"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A: khởi tạo mảng gọi `increment()` 3 lần cho `arr = {1, 2, 3}` và `count = 3`. Trong vòng lặp: với `i = 0` (`1` lẻ) -> `1 + 4 = 5`; với `i = 1` (`2` chẵn) -> `2 * 5 = 10`; với `i = 2` (`3` lẻ) -> `3 + 6 = 9`, nên kết quả in ra là `Result: 5 10 9`."
  },
  {
    "id": 5421,
    "topic": "🏆 Đề FE PRO192 - SP26 FE (50 câu - Full Giải)",
    "question": "[SP26_FE - Câu 21/50] Which of the following is TRUE about abstract classes in Java?",
    "options": [
      "An abstract class must have only abstract methods.",
      "Abstract classes can be instantiated directly.",
      "All methods in an abstract class are automatically public.",
      "Abstract classes may contain both abstract and concrete methods."
    ],
    "answer": 3,
    "explanation": "Đáp án đúng là D vì một lớp trừu tượng (`abstract class`) trong Java có thể chứa cả phương thức trừu tượng lẫn phương thức cụ thể (có thân hàm). A sai vì không bắt buộc toàn bộ là abstract method, B sai vì không thể khởi tạo trực tiếp bằng `new`, và C sai vì các phương thức không tự động có phạm vi `public`."
  },
  {
    "id": 5422,
    "topic": "🏆 Đề FE PRO192 - SP26 FE (50 câu - Full Giải)",
    "question": "[SP26_FE - Câu 22/50] Which of the following is an example of encapsulation in Java?",
    "options": [
      "Creating a private field and providing public getter and setter methods",
      "Creating a public field and directly accessing it from other classes",
      "Creating a protected field and accessing it from subclasses only",
      "Creating a default (no modifier) field and accessing it from the same package"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì tính đóng gói (encapsulation) được thực hiện bằng cách ẩn các thuộc tính dữ liệu với từ khóa `private` và chỉ cho phép đọc/ghi gián tiếp qua các phương thức `public` getter và setter. Các lựa chọn B, C, D đều để lộ trực tiếp trường dữ liệu cho các lớp khác truy cập."
  },
  {
    "id": 5423,
    "topic": "🏆 Đề FE PRO192 - SP26 FE (50 câu - Full Giải)",
    "question": "[SP26_FE - Câu 23/50] Which of the following statements is true about superclass and subclass relationships in Java?",
    "options": [
      "A subclass can access private members of its superclass.",
      "A superclass can extend multiple subclasses simultaneously.",
      "A subclass constructor must always call the superclass constructor explicitly.",
      "A superclass reference can be used to directly access subclass-specific methods.",
      "A subclass can override a private method in its superclass.",
      "A subclass can have more than one superclass."
    ],
    "answer": 1,
    "explanation": "Đáp án lưu trữ là B nhằm nói đến kế thừa phân cấp (một lớp cha có thể có nhiều lớp con kế thừa cùng lúc), dù cách diễn đạt tiếng Anh trong đề bị viết ngược (`superclass can extend multiple subclasses` thay vì `multiple subclasses can extend a superclass`). Theo chuẩn Java chặt chẽ thì cả 6 phát biểu đều có lỗi: A sai vì không truy cập trực tiếp `private`, C sai vì Java tự chèn `super()` ngầm định khi lớp cha có constructor không tham số, D sai vì cần ép kiểu xuống lớp con, E sai vì phương thức `private` không thể override, và F sai vì Java không hỗ trợ đa kế thừa lớp."
  },
  {
    "id": 5424,
    "topic": "🏆 Đề FE PRO192 - SP26 FE (50 câu - Full Giải)",
    "question": "[SP26_FE - Câu 24/50] What is the main purpose of using anonymous classes in Java?",
    "options": [
      "To declare and instantiate a class at the same time for one-time use.",
      "To create classes that can be inherited by multiple subclasses.",
      "To create classes that can access private variables from any package.",
      "To improve the performance of static method calls."
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì anonymous class (lớp vô danh) cho phép vừa khai báo vừa khởi tạo một lớp tại chỗ cho mục đích sử dụng một lần (thường dùng khi triển khai nhanh interface hoặc lớp trừu tượng). B, C, D đều sai vì lớp vô danh không có tên để kế thừa lại, không phá vỡ phạm vi `private` và không liên quan đến tối ưu lời gọi `static`."
  },
  {
    "id": 5425,
    "topic": "🏆 Đề FE PRO192 - SP26 FE (50 câu - Full Giải)",
    "question": "[SP26_FE - Câu 25/50] Which of the following statements about reference types in Java is TRUE?",
    "options": [
      "Reference types hold actual data values, not addresses.",
      "The default value for a reference variable is 0.",
      "Arrays are considered primitive types.",
      "A reference variable stores the address of an object in memory."
    ],
    "answer": 3,
    "explanation": "Đáp án đúng là D vì biến kiểu tham chiếu lưu tham chiếu (địa chỉ bộ nhớ) trỏ tới đối tượng nằm trên vùng nhớ Heap. Lựa chọn A mô tả sai (đó là kiểu nguyên thủy), B sai vì giá trị mặc định của biến tham chiếu là `null`, và C sai vì mảng trong Java là kiểu tham chiếu."
  },
  {
    "id": 5426,
    "topic": "🏆 Đề FE PRO192 - SP26 FE (50 câu - Full Giải)",
    "question": "[SP26_FE - Câu 26/50] What is the \"instanceof\" operator used for?",
    "options": [
      "To check whether an object is an instance of a particular class or not",
      "To create a new instance of a class",
      "To compare two objects for equality",
      "To check if an object is null"
    ],
    "answer": 0,
    "explanation": "Đáp án A đúng vì toán tử `instanceof` trong Java dùng để kiểm tra xem một đối tượng có phải là thể hiện (instance) của một lớp, lớp con hoặc interface cụ thể hay không (trả về `true`/`false`). B sai vì từ khóa `new` mới dùng để tạo đối tượng; C sai vì so sánh bằng dùng `==` hoặc `equals()`; D sai vì kiểm tra `null` dùng `== null`."
  },
  {
    "id": 5427,
    "topic": "🏆 Đề FE PRO192 - SP26 FE (50 câu - Full Giải)",
    "question": "[SP26_FE - Câu 27/50] Which of the following statements about polymorphism is FALSE?",
    "options": [
      "Polymorphism requires inheritance.",
      "The method call is resolved at runtime for overridden methods.",
      "An object's type determines which method gets called, not the reference's type.",
      "Polymorphism works only with interfaces."
    ],
    "answer": 3,
    "explanation": "Đáp án D là phát biểu SAI vì tính đa hình (polymorphism) trong Java không chỉ hoạt động với interface mà còn hoạt động với kế thừa lớp (`extends`) thông qua ghi đè phương thức (overriding), cũng như đa hình lúc biên dịch (overloading). Các đáp án A, B, C đều đúng với cơ chế đa hình động (dynamic dispatch) trong Java."
  },
  {
    "id": 5428,
    "topic": "🏆 Đề FE PRO192 - SP26 FE (50 câu - Full Giải)",
    "question": "[SP26_FE - Câu 28/50] Choose the correct statement about overloading in Java.",
    "options": [
      "Overloading is based on having multiple methods with the same name but different by the number of input parameters or type of input parameters, or a mixture of both.",
      "Overloading is based on having multiple methods with the same name.",
      "Overloading is based on having multiple methods with the same name, parameter types, and number of parameters.",
      "Overloading is based on having multiple methods with the same name but different return types."
    ],
    "answer": 0,
    "explanation": "Đáp án A đúng vì nạp chồng phương thức (overloading) yêu cầu các phương thức trong cùng lớp có cùng tên nhưng khác nhau về số lượng tham số, kiểu dữ liệu tham số (hoặc thứ tự kiểu tham số). C sai vì nếu giống hệt danh sách tham số sẽ gây lỗi trùng lặp; D sai vì chỉ khác kiểu trả về không hợp lệ để overload; B chưa đủ điều kiện về tham số."
  },
  {
    "id": 5429,
    "topic": "🏆 Đề FE PRO192 - SP26 FE (50 câu - Full Giải)",
    "question": "[SP26_FE - Câu 29/50] What is the output of the following Java program?\n\ninterface IA {\n    void show();\n}\ninterface IB {\n    void show();\n}\nclass MyClass implements IA, IB {\n    @Override\n    public void show() {\n        System.out.println(\"@MyClass\");\n    }\n}\npublic class Main {\n    public static void main(String args[]) {\n        IA objA = new MyClass();\n        objA.show();\n    }\n}",
    "options": [
      "@MyClass",
      "Runtime error in the statement: objA.show();",
      "Compile error in the statement: IA objA = new MyClass();",
      "None of the others"
    ],
    "answer": 0,
    "explanation": "Đáp án A đúng. `MyClass` thực thi cả hai interface `IA` và `IB` đều có phương thức `void show()` cùng chữ ký, nên việc cài đặt một phương thức `public void show()` trong `MyClass` là hoàn toàn hợp lệ. Lệnh `IA objA = new MyClass();` thực hiện ép kiểu lên (upcasting), và `objA.show()` gọi phương thức của đối tượng thực tế `MyClass`, in ra `@MyClass`. B và C sai vì không có lỗi biên dịch hay runtime."
  },
  {
    "id": 5430,
    "topic": "🏆 Đề FE PRO192 - SP26 FE (50 câu - Full Giải)",
    "question": "[SP26_FE - Câu 30/50] Which of the following statements about abstract classes in Java is correct?",
    "options": [
      "An abstract class can be instantiated using the \"new\" keyword.",
      "Abstract classes can only have abstract methods.",
      "Abstract classes can have both abstract and concrete (non-abstract) methods.",
      "Abstract classes cannot have constructors.",
      "Abstract classes can be marked as final.",
      "Abstract classes can extend multiple other classes."
    ],
    "answer": 2,
    "explanation": "Đáp án đúng chuẩn Java là C (`Abstract classes can have both abstract and concrete (non-abstract) methods.`):\n• Một `abstract class` trong Java có thể chứa cả phương thức trừu tượng lẫn phương thức thường (có thân hàm), VÀ **VẪN CÓ THỂ có constructor** (để lớp con gọi qua `super(...)` — nên D sai!).\n• A sai (không thể `new` trực tiếp `abstract class`), B sai (không chỉ chứa abstract method), E sai (`abstract` không đi cùng `final`), F sai (Java không đa kế thừa lớp).\n(Đã sửa từ đáp án sai D của web nguồn về đúng chuẩn Java C.)"
  },
  {
    "id": 5431,
    "topic": "🏆 Đề FE PRO192 - SP26 FE (50 câu - Full Giải)",
    "question": "[SP26_FE - Câu 31/50] What happens when the following code is executed?\n\nInteger wi = 234;\nint times9 = wi * 9;",
    "options": [
      "Compile error due to mixing object and primitive types.",
      "Implicit unboxing of wi to compute the multiplication.",
      "Boxing fails at runtime.",
      "Reference comparison is performed instead of value."
    ],
    "answer": 1,
    "explanation": "Đáp án B đúng. Giá trị `234` ban đầu được autoboxing thành đối tượng `Integer wi`; sau đó trong phép nhân `wi * 9`, Java tự động thực hiện unboxing ngầm định (`wi.intValue()`) để chuyển `wi` về kiểu nguyên thủy `int` rồi mới nhân với `9`. A và C sai vì Java hỗ trợ tự động boxing/unboxing; D sai vì đây là phép nhân số học, không phải so sánh tham chiếu."
  },
  {
    "id": 5432,
    "topic": "🏆 Đề FE PRO192 - SP26 FE (50 câu - Full Giải)",
    "question": "[SP26_FE - Câu 32/50] What is the output of the following Java program?\n\nclass A {\n    int i = 100;\n    public void printValue() {\n        System.out.print(\"A\");\n    }\n}\nclass B extends A {\n    int i = 120;\n    public void printValue() {\n        System.out.print(\"B\");\n    }\n}\npublic class Main {\n    public static void main(String args[]) {\n        A a = new B();\n        a.printValue();\n        System.out.print(a.i);\n    }\n}",
    "options": [
      "B100",
      "B120",
      "A100",
      "A120"
    ],
    "answer": 0,
    "explanation": "Đáp án A đúng. Biến `a` có kiểu tham chiếu là `A` và trỏ tới đối tượng thực tế kiểu `B`: lời gọi phương thức `a.printValue()` áp dụng đa hình động (dynamic binding) nên gọi hàm của lớp `B` và in ra `B`. Ngược lại, thuộc tính (field) không có tính đa hình mà phụ thuộc vào kiểu tham chiếu tại thời điểm biên dịch, nên `a.i` lấy giá trị `100` của lớp `A`. Kết quả in ra là `B100` (B, C, D sai)."
  },
  {
    "id": 5433,
    "topic": "🏆 Đề FE PRO192 - SP26 FE (50 câu - Full Giải)",
    "question": "[SP26_FE - Câu 33/50] What is the default value of boolean elements in an array if NOT initialized?",
    "options": [
      "false",
      "0",
      "null",
      "true"
    ],
    "answer": 0,
    "explanation": "Đáp án A đúng vì khi khởi tạo một mảng `boolean[]` trong Java mà chưa gán giá trị, các phần tử mặc định mang giá trị `false`. B (`0`) là giá trị mặc định của các kiểu số nguyên thủy, C (`null`) dành cho kiểu tham chiếu, và D (`true`) không phải giá trị mặc định."
  },
  {
    "id": 5434,
    "topic": "🏆 Đề FE PRO192 - SP26 FE (50 câu - Full Giải)",
    "question": "[SP26_FE - Câu 34/50] What is the most significant implication when multiple array elements reference the same object instance?",
    "options": [
      "Modifying the object through one array element affects all references to that object.",
      "The Java Virtual Machine automatically creates separate copies of the object for each array element reference.",
      "Each array element maintains its independent version of the object's state and method implementations.",
      "The garbage collector cannot deallocate the object until all array elements are explicitly set to different references."
    ],
    "answer": 0,
    "explanation": "Đáp án A đúng vì mảng đối tượng trong Java lưu các tham chiếu; khi nhiều phần tử mảng cùng trỏ đến một đối tượng trên heap, việc thay đổi trạng thái đối tượng thông qua một phần tử sẽ ảnh hưởng tới tất cả các tham chiếu khác trỏ vào đối tượng đó. B và C sai vì JVM không tự động nhân bản đối tượng độc lập; D sai vì bộ thu gom rác chỉ cần không còn tham chiếu sống nào (ví dụ gán `null` hoặc mảng ra khỏi phạm vi)."
  },
  {
    "id": 5435,
    "topic": "🏆 Đề FE PRO192 - SP26 FE (50 câu - Full Giải)",
    "question": "[SP26_FE - Câu 35/50] What is the output of the following code snippet:\n\nint i = 0;\nint[] list = {1, 2, 3, 4, 5};\ndo {\n    list[i] += ++i;\n} while (i < 4);\nSystem.out.println(list[0] + list[list.length]);",
    "options": [
      "The program will raise an exception.",
      "5",
      "1",
      "6"
    ],
    "answer": 0,
    "explanation": "Đáp án A đúng. Mảng `list` có độ dài `list.length = 5` với chỉ số hợp lệ từ `0` đến `4`. Sau khi vòng lặp `do-while` kết thúc (khi `i` đạt `4`), lệnh `System.out.println(list[0] + list[list.length]);` truy cập `list[5]`, vượt quá giới hạn mảng nên ném ra ngoại lệ `ArrayIndexOutOfBoundsException` tại runtime. Do đó các đáp án B, C, D đều sai."
  },
  {
    "id": 5436,
    "topic": "🏆 Đề FE PRO192 - SP26 FE (50 câu - Full Giải)",
    "question": "[SP26_FE - Câu 36/50] What happens when you try to assign an array to another array in Java?",
    "options": [
      "Both arrays reference to the same memory location.",
      "A new copy of the array is created.",
      "It results in a compilation error.",
      "Java does not allow array assignment."
    ],
    "answer": 0,
    "explanation": "Đáp án A đúng vì mảng trong Java là một đối tượng; khi gán biến mảng này cho biến mảng khác (ví dụ `b = a;`), Java sao chép địa chỉ tham chiếu nên cả hai cùng trỏ đến một vùng nhớ mảng duy nhất. B sai vì không có bản sao mới nào được tạo (phải dùng `clone()` hoặc `Arrays.copyOf()`); C và D sai vì phép gán hai biến mảng cùng kiểu hoàn toàn hợp lệ."
  },
  {
    "id": 5437,
    "topic": "🏆 Đề FE PRO192 - SP26 FE (50 câu - Full Giải)",
    "question": "[SP26_FE - Câu 37/50] Which OOP concept allows a class to inherit attributes and behaviors from another class?",
    "options": [
      "Abstraction",
      "Encapsulation",
      "Inheritance",
      "Polymorphism",
      "Composition",
      "Method overloading"
    ],
    "answer": 2,
    "explanation": "Đáp án C đúng vì tính kế thừa (Inheritance) cho phép một lớp con kế thừa các thuộc tính và phương thức từ một lớp cha thông qua từ khóa `extends`. A (trừu tượng), B (đóng gói), D (đa hình), E (hợp thành) và F (nạp chồng phương thức) là các khái niệm khác không mô tả trực tiếp cơ chế kế thừa giữa các lớp."
  },
  {
    "id": 5438,
    "topic": "🏆 Đề FE PRO192 - SP26 FE (50 câu - Full Giải)",
    "question": "[SP26_FE - Câu 38/50] Which of the following interfaces is the root interface of the Java Collections Framework",
    "options": [
      "Collection",
      "Map",
      "List",
      "Set"
    ],
    "answer": 0,
    "explanation": "Đáp án A đúng vì `Collection` (kế thừa `Iterable`) là interface gốc của hệ thống phân cấp Collection trong Java Collections Framework, làm cha của `List` (C), `Set` (D) và `Queue`. `Map` (B) là một nhánh riêng dùng để lưu cặp khóa-giá trị và không kế thừa từ `Collection`."
  },
  {
    "id": 5439,
    "topic": "🏆 Đề FE PRO192 - SP26 FE (50 câu - Full Giải)",
    "question": "[SP26_FE - Câu 39/50] Which of the following statements about ArrayList vs LinkedList is true?",
    "options": [
      "ArrayList is faster for insertions in the middle than LinkedList.",
      "LinkedList uses less memory than ArrayList.",
      "ArrayList provides faster random access than LinkedList.",
      "LinkedList cannot store duplicate elements."
    ],
    "answer": 2,
    "explanation": "Đáp án C đúng vì `ArrayList` dùng mảng động bên dưới nên hỗ trợ truy cập ngẫu nhiên theo chỉ số với độ phức tạp $O(1)$, nhanh hơn `LinkedList` vốn phải duyệt tuần tự $O(n)$. A sai vì `ArrayList` phải dịch chuyển phần tử khi chèn ở giữa; B sai vì `LinkedList` tốn thêm bộ nhớ cho con trỏ node; D sai vì cả hai đều triển khai `List` nên cho phép phần tử trùng lặp."
  },
  {
    "id": 5440,
    "topic": "🏆 Đề FE PRO192 - SP26 FE (50 câu - Full Giải)",
    "question": "[SP26_FE - Câu 40/50] What is the output of the following code snippet?\n\nSet<Integer> set1 = new HashSet<>();\nset1.add(1); set1.add(2); set1.add(3); set1.add(1);\nSet<Integer> set2 = new HashSet<>();\nset2.add(1); set2.add(4);\nset1.removeAll(set2);\nSystem.out.println(set1);",
    "options": [
      "[2, 3]",
      "[3,1]",
      "[1,2]",
      "[4,1]"
    ],
    "answer": 0,
    "explanation": "Đáp án A đúng. `HashSet` không lưu phần tử trùng lặp nên `set1` ban đầu chứa `{1, 2, 3}` và `set2` chứa `{1, 4}`. Lệnh `set1.removeAll(set2)` xóa khỏi `set1` tất cả các phần tử có mặt trong `set2` (tức là số `1`), khiến `set1` chỉ còn `{2, 3}` và in ra `[2, 3]`. Các đáp án B, C, D vẫn chứa `1` hoặc `4` nên sai."
  },
  {
    "id": 5441,
    "topic": "🏆 Đề FE PRO192 - SP26 FE (50 câu - Full Giải)",
    "question": "[SP26_FE - Câu 41/50] What happens if you add a duplicate element to a TreeSet?",
    "options": [
      "It is added, and the set will contain two identical elements.",
      "It replaces the existing element.",
      "It is ignored, and the set remains unchanged.",
      "A runtime exception is thrown."
    ],
    "answer": 2,
    "explanation": "Đáp án C đúng vì `TreeSet` thực thi interface `Set`, không cho phép chứa phần tử trùng lặp; khi gọi `add()` với phần tử đã tồn tại, giá trị mới bị bỏ qua (hàm trả về `false`) và tập hợp giữ nguyên. A và B sai vì không thêm bản sao hay ghi đè phần tử cũ; D sai vì không ném ngoại lệ."
  },
  {
    "id": 5442,
    "topic": "🏆 Đề FE PRO192 - SP26 FE (50 câu - Full Giải)",
    "question": "[SP26_FE - Câu 42/50] Given this Employee class:\n\npublic class Employee {\n    private String id;\n    private String name;\n    public Employee(String id, String name) {\n        this.id = id;\n        this.name = name;\n    }\n    /* Getter and Setter */\n}\n\nand this main method:\n\npublic static void main(String[] args) {\n    Map<String, Employee> emp = new HashMap<>();\n    emp.put(\"A\", new Employee(\"A\", \"John Doe\"));\n    emp.put(\"B\", new Employee(\"B\", \"Mark David\"));\n    emp.put(\"A\", new Employee(\"A\", \"Rose Mary\"));\n\n    System.out.println(emp.get(\"A\").getName());\n}\n\nWhat will be printed on the screen after running the main method?",
    "options": [
      "John Doe",
      "Rose Mary",
      "John DoeRose Mary",
      "A runtime exception is thrown."
    ],
    "answer": 1,
    "explanation": "Đáp án B đúng. Trong `HashMap`, mỗi key là duy nhất; lần gọi `emp.put(\"A\", new Employee(\"A\", \"Rose Mary\"))` sẽ ghi đè giá trị cũ (`John Doe`) ứng với key `\"A\"`. Khi gọi `emp.get(\"A\").getName()`, chương trình trả về và in ra `Rose Mary`. A, C, D sai vì giá trị cũ đã bị thay thế và không có ngoại lệ nào xảy ra."
  },
  {
    "id": 5443,
    "topic": "🏆 Đề FE PRO192 - SP26 FE (50 câu - Full Giải)",
    "question": "[SP26_FE - Câu 43/50] What will be the output of the following Java code?\n\nimport java.util.*;\n\npublic class Test {\n    public static void main(String[] args) {\n        Map<String, Integer> map = new LinkedHashMap<>();\n        map.put(\"A\", 1);\n        map.put(\"B\", 2);\n        map.put(\"C\", 3);\n        map.remove(\"B\");\n        map.put(\"B\", 4);\n        System.out.println(map.keySet());\n    }\n}",
    "options": [
      "[A, B, C]",
      "[A, C, B]",
      "[B, A, C]",
      "[A, B]"
    ],
    "answer": 1,
    "explanation": "Đáp án B đúng. `LinkedHashMap` duy trì thứ tự chèn các phần tử: sau 3 lệnh `put` đầu tiên, thứ tự key là `[A, B, C]`. Lệnh `map.remove(\"B\")` xóa `B` khỏi map (còn `[A, C]`), sau đó `map.put(\"B\", 4)` chèn `B` như một phần tử mới vào cuối map nên `map.keySet()` in ra `[A, C, B]`. A, C, D sai thứ tự hoặc thiếu phần tử."
  },
  {
    "id": 5444,
    "topic": "🏆 Đề FE PRO192 - SP26 FE (50 câu - Full Giải)",
    "question": "[SP26_FE - Câu 44/50] Which of the following statements about the low-level stream and the high-level stream is true?",
    "options": [
      "The low-level stream's data unit is a byte, high-level stream's data unit is a primitive type.",
      "The low-level stream's data unit is character UTF-8, high-level stream's data unit is character UNICODE.",
      "The low-level stream's data unit is a character type, high-level stream's data unit is an object type.",
      "The low-level stream's data unit is primitive, high-level stream's data unit is character."
    ],
    "answer": 0,
    "explanation": "Đáp án A đúng theo giáo trình Java I/O (PRO192): luồng mức thấp (low-level stream như `FileInputStream`/`FileOutputStream`) xử lý dữ liệu theo đơn vị byte thô, còn luồng mức cao (high-level stream như `DataInputStream`/`DataOutputStream` bọc bên ngoài) xử lý theo các kiểu dữ liệu nguyên thủy (`int`, `double`, `boolean`,...). Các đáp án B, C, D gán sai đơn vị dữ liệu của hai loại luồng."
  },
  {
    "id": 5445,
    "topic": "🏆 Đề FE PRO192 - SP26 FE (50 câu - Full Giải)",
    "question": "[SP26_FE - Câu 45/50] What is the purpose of the FileOutputStream class in Java?",
    "options": [
      "To write raw bytes to a file",
      "To write primitive data types to a file",
      "To create an object stream for a file",
      "All of the others"
    ],
    "answer": 0,
    "explanation": "Đáp án A đúng vì `FileOutputStream` là lớp byte stream dùng để ghi dữ liệu dạng byte thô (raw bytes) ra file. B sai vì ghi kiểu dữ liệu nguyên thủy là nhiệm vụ của `DataOutputStream`; C sai vì tạo luồng đối tượng là nhiệm vụ của `ObjectOutputStream`; nên D cũng sai."
  },
  {
    "id": 5446,
    "topic": "🏆 Đề FE PRO192 - SP26 FE (50 câu - Full Giải)",
    "question": "[SP26_FE - Câu 46/50] Which of the following exceptions is thrown when an attempt is made to open a file that CANNOT be found by the FileInputStream class?",
    "options": [
      "FileNotFoundException",
      "IOException",
      "FileAccessException",
      "NotFoundIOException"
    ],
    "answer": 0,
    "explanation": "Đáp án A đúng vì constructor của `FileInputStream` khai báo ném trực tiếp ngoại lệ `FileNotFoundException` (là lớp con của `IOException`) khi file cần mở không tồn tại hoặc không thể mở để đọc. B là lớp cha tổng quát hơn chứ không phải ngoại lệ cụ thể nhất được ném ra; C và D là các tên lớp ngoại lệ không tồn tại trong thư viện chuẩn Java."
  },
  {
    "id": 5447,
    "topic": "🏆 Đề FE PRO192 - SP26 FE (50 câu - Full Giải)",
    "question": "[SP26_FE - Câu 47/50] Which of the following methods of the FileOutputStream class is used to write bytes to a target stream?",
    "options": [
      "write()",
      "print()",
      "writeLine()",
      "println()"
    ],
    "answer": 0,
    "explanation": "Đáp án A đúng vì `FileOutputStream` cung cấp các phương thức `write()` (nhận `int` hoặc mảng `byte[]`) để ghi byte vào luồng đích. B (`print()`) và D (`println()`) thuộc về `PrintStream`/`PrintWriter`, còn `writeLine()` (C) không tồn tại trong `FileOutputStream`."
  },
  {
    "id": 5448,
    "topic": "🏆 Đề FE PRO192 - SP26 FE (50 câu - Full Giải)",
    "question": "[SP26_FE - Câu 48/50] Which of the following classes is the superclass of the PrintWriter and FileWriter classes?",
    "options": [
      "Writer class",
      "Input class",
      "File class",
      "Object class"
    ],
    "answer": 0,
    "explanation": "Đáp án A đúng vì `java.io.Writer` là lớp cha trừu tượng chuyên biệt của các luồng ghi ký tự, trong đó có `PrintWriter` (trực tiếp) và `FileWriter` (gián tiếp qua `OutputStreamWriter`). Dù `Object` (D) là lớp gốc của mọi lớp trong Java, `Writer` là đáp án chính xác trong ngữ cảnh phân cấp lớp I/O; B và C không phải lớp cha của chúng."
  },
  {
    "id": 5449,
    "topic": "🏆 Đề FE PRO192 - SP26 FE (50 câu - Full Giải)",
    "question": "[SP26_FE - Câu 49/50] What is the output of the following code snippet?\n\nFile f = new File(\"test.txt\");\ntry {\n    FileReader fr = new FileReader(f);\n    BufferedReader bf = new BufferedReader(fr);\n    int k = 2;\n    String line = \"\";\n    for (int i = 0; i < k; i++) {\n        line = bf.readLine();\n    }\n    System.out.println(line);\n} catch (IOException e) {\n    System.out.println(e);\n}\n\nAssumes that test.txt has the content as follows:\nHello\nXin chao\nHallo\nAnyong Haseyo",
    "options": [
      "Xin chao",
      "Hello",
      "Hallo",
      "Anyong Haseyo"
    ],
    "answer": 0,
    "explanation": "Đáp án A đúng. Vòng lặp `for` với `k = 2` chạy 2 lần (`i = 0` và `i = 1`): ở `i = 0`, `bf.readLine()` đọc dòng thứ nhất là `\"Hello\"`; ở `i = 1`, `bf.readLine()` đọc tiếp dòng thứ hai là `\"Xin chao\"` và gán đè vào `line`. Sau vòng lặp, `System.out.println(line)` in ra `Xin chao` (B, C, D sai)."
  },
  {
    "id": 5450,
    "topic": "🏆 Đề FE PRO192 - SP26 FE (50 câu - Full Giải)",
    "question": "[SP26_FE - Câu 50/50] What type of relationship does aggregation describe in object-oriented design?",
    "options": [
      "\"is a kind of\" relationship, indicating inheritance.",
      "\"inherits from\" relationship in class hierarchies",
      "\"uses\" relationship, where one class calls another",
      "\"has a\" relationship, showing ownership or containment."
    ],
    "answer": 3,
    "explanation": "Đáp án D đúng vì quan hệ kết tập (aggregation) trong thiết kế hướng đối tượng biểu diễn mối quan hệ \"has-a\" (một đối tượng chứa hoặc sở hữu đối tượng khác mà vẫn cho phép tồn tại độc lập). A và B mô tả quan hệ kế thừa (\"is-a\"), còn C mô tả quan hệ phụ thuộc (dependency / \"uses-a\")."
  },
  {
    "id": 5501,
    "topic": "🏆 Đề FE PRO192 - FA25 RE (55 câu - Full Giải)",
    "question": "[FA25_RE - Câu 1/55] What is the difference between a class and an object?",
    "options": [
      "A class is a blueprint to make an object",
      "An object is a blueprint to make a class",
      "A class is only like an object",
      "None of the others"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì trong lập trình hướng đối tượng (OOP), class là bản thiết kế (blueprint/template) định nghĩa thuộc tính và phương thức, còn object là thể hiện cụ thể (instance) được tạo ra từ class đó. B sai vì đảo ngược khái niệm, còn C sai vì class và object là hai khái niệm khác nhau."
  },
  {
    "id": 5502,
    "topic": "🏆 Đề FE PRO192 - FA25 RE (55 câu - Full Giải)",
    "question": "[FA25_RE - Câu 2/55] Which is a valid keyword in Java?",
    "options": [
      "interface",
      "include",
      "Float",
      "Integer"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì `interface` là từ khóa (keyword) hợp lệ dùng để khai báo giao diện trong Java. B sai vì `include` là chỉ thị tiền xử lý trong C/C++; C (`Float`) và D (`Integer`) là tên các lớp bao (wrapper classes) trong gói `java.lang`, không phải từ khóa."
  },
  {
    "id": 5503,
    "topic": "🏆 Đề FE PRO192 - FA25 RE (55 câu - Full Giải)",
    "question": "[FA25_RE - Câu 3/55] Which of the following statements is used to compile the program.java file?",
    "options": [
      "javac program.java",
      "java -java program.java",
      "javac -c program.java",
      "java -j program.java"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì `javac` là trình biên dịch Java (Java compiler) dùng để biên dịch mã nguồn `.java` thành bytecode `.class` bằng cú pháp `javac program.java`. Lệnh `java` dùng để chạy chương trình đã biên dịch, không dùng cờ `-java` hay `-j`, và `javac` không có cờ `-c` như C."
  },
  {
    "id": 5504,
    "topic": "🏆 Đề FE PRO192 - FA25 RE (55 câu - Full Giải)",
    "question": "[FA25_RE - Câu 4/55] Which of the following are components of the Java platform?",
    "options": [
      "JVM(Java Virtual Machine), the java application programming interface (API)",
      "JVM(Java Virtual Machine), Java Run-time Environment",
      "JVM(Java Virtual Machine), java compiler",
      "Java compiler, java"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì theo tài liệu chuẩn của Java, Java platform gồm hai thành phần chính là Máy ảo Java (JVM) và Giao diện lập trình ứng dụng Java (Java API). B, C và D nhầm lẫn khi đưa JRE hoặc trình biên dịch `javac` vào làm cặp thành phần của nền tảng Java."
  },
  {
    "id": 5505,
    "topic": "🏆 Đề FE PRO192 - FA25 RE (55 câu - Full Giải)",
    "question": "[FA25_RE - Câu 5/55] Which of the following concepts does not belong to object-oriented programming features?",
    "options": [
      "Cross-platform",
      "Inheritance",
      "Polymorphism",
      "Encapsulation"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì Cross-platform (đa nền tảng) là đặc tính của ngôn ngữ/nền tảng Java nhờ JVM, không phải tính chất cốt lõi của lập trình hướng đối tượng (OOP). B (Kế thừa), C (Đa hình) và D (Đóng gói) đều là các tính chất đặc trưng của OOP."
  },
  {
    "id": 5506,
    "topic": "🏆 Đề FE PRO192 - FA25 RE (55 câu - Full Giải)",
    "question": "[FA25_RE - Câu 6/55] What is the purpose of a Java Virtual Machine(JVM)?",
    "options": [
      "It is used to interpret and execute Java bytecode",
      "It is used to write the bytecode into the .class file",
      "It is used to verify and improve performance the of Java programs",
      "All of the others"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì mục đích chính của JVM (Java Virtual Machine) là thông dịch và thực thi mã bytecode Java (trong file `.class`) trên hệ điều hành đích. B sai vì việc tạo và ghi bytecode vào file `.class` là nhiệm vụ của trình biên dịch `javac`, nên D cũng sai."
  },
  {
    "id": 5507,
    "topic": "🏆 Đề FE PRO192 - FA25 RE (55 câu - Full Giải)",
    "question": "[FA25_RE - Câu 7/55] Which is a valid keyword in Java?",
    "options": [
      "interface",
      "include",
      "Float",
      "Integer"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì `interface` là từ khóa (keyword) hợp lệ trong Java dùng để khai báo interface. B (`include`) là từ khóa của C/C++, còn C (`Float`) và D (`Integer`) là tên các lớp wrapper thuộc `java.lang`, không phải từ khóa."
  },
  {
    "id": 5508,
    "topic": "🏆 Đề FE PRO192 - FA25 RE (55 câu - Full Giải)",
    "question": "[FA25_RE - Câu 8/55] Which of the following statements is used to compile the program.java file?",
    "options": [
      "javac program.java",
      "java -java program.java",
      "javac -c program.java",
      "java -j program.java"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì lệnh `javac program.java` gọi trình biên dịch Java để biên dịch tệp nguồn `program.java` sang bytecode `.class`. Các tùy chọn B, C, D đều dùng sai lệnh hoặc sai cờ không tồn tại."
  },
  {
    "id": 5509,
    "topic": "🏆 Đề FE PRO192 - FA25 RE (55 câu - Full Giải)",
    "question": "[FA25_RE - Câu 9/55] Which of the following are components of the Java platform?",
    "options": [
      "JVM(Java Virtual Machine), the java application programming interface (API)",
      "JVM(Java Virtual Machine), Java Run-time Environment",
      "JVM(Java Virtual Machine), java compiler",
      "Java compiler, java"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì Java platform được cấu thành từ hai thành phần là JVM (Java Virtual Machine) và Java API (Application Programming Interface). Các phương án B, C, D ghép sai với JRE hoặc trình biên dịch `javac`."
  },
  {
    "id": 5510,
    "topic": "🏆 Đề FE PRO192 - FA25 RE (55 câu - Full Giải)",
    "question": "[FA25_RE - Câu 10/55] Which of the following concepts does not belong to object-oriented programming features?",
    "options": [
      "Cross-platform",
      "Inheritance",
      "Polymorphism",
      "Encapsulation"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì Cross-platform (khả năng chạy đa nền tảng) là đặc điểm của Java, không thuộc 4 tính chất của OOP (Encapsulation, Inheritance, Polymorphism, Abstraction). Các phương án B, C, D đều là tính chất của OOP."
  },
  {
    "id": 5511,
    "topic": "🏆 Đề FE PRO192 - FA25 RE (55 câu - Full Giải)",
    "question": "[FA25_RE - Câu 11/55] What is the purpose of a Java Virtual Machine(JVM)?",
    "options": [
      "It is used to interpret and execute Java bytecode",
      "It is used to write the bytecode into the .class file",
      "It is used to verify and improve performance the of Java programs",
      "All of the others"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì JVM có nhiệm vụ thông dịch và thực thi Java bytecode trên máy đích. B sai vì trình biên dịch `javac` mới là thành phần sinh ra bytecode và ghi vào file `.class`, dẫn đến D cũng sai."
  },
  {
    "id": 5512,
    "topic": "🏆 Đề FE PRO192 - FA25 RE (55 câu - Full Giải)",
    "question": "[FA25_RE - Câu 12/55] Choose the correct statement about the “instanceof “ operator.",
    "options": [
      "It can be used to test if an object is of a specified type.",
      "The instanceof is also known as a string comparison operator.",
      "The instanceof operator is used to check the validity of object variables",
      "All of the others"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì toán tử `instanceof` trong Java dùng để kiểm tra xem một đối tượng có phải là thể hiện của một kiểu (class, subclass hoặc interface) chỉ định hay không. B sai vì nó không dùng để so sánh chuỗi, và C sai vì nó không kiểm tra tính hợp lệ của biến."
  },
  {
    "id": 5513,
    "topic": "🏆 Đề FE PRO192 - FA25 RE (55 câu - Full Giải)",
    "question": "[FA25_RE - Câu 13/55] Which of the following is NOT a Java feature?",
    "options": [
      "Use of pointers.",
      "Ease of learning.",
      "It is a secure language.",
      "Independent Platform."
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì Java không hỗ trợ lập trình viên thao tác trực tiếp với con trỏ (pointers) như C/C++ nhằm đảm bảo an toàn bộ nhớ. Các đặc điểm B (dễ học), C (bảo mật) và D (độc lập nền tảng) đều là những tính năng đặc trưng của Java."
  },
  {
    "id": 5514,
    "topic": "🏆 Đề FE PRO192 - FA25 RE (55 câu - Full Giải)",
    "question": "[FA25_RE - Câu 14/55] Which of the following is the entry point of the Java program?",
    "options": [
      "main method",
      "class method",
      "instance method",
      "static method"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì JVM luôn bắt đầu thực thi một ứng dụng Java từ phương thức `main` (`public static void main(String[] args)`). B, C, D chỉ là các loại phương thức nói chung (phương thức lớp, phương thức thể hiện, phương thức tĩnh), không phải điểm khởi đầu mặc định của chương trình."
  },
  {
    "id": 5515,
    "topic": "🏆 Đề FE PRO192 - FA25 RE (55 câu - Full Giải)",
    "question": "[FA25_RE - Câu 15/55] What is the default value of the data type double in Java?",
    "options": [
      "0.0",
      "0",
      "Null",
      "1.0",
      "-1.0",
      "NaN"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì trong Java, giá trị mặc định của biến kiểu nguyên thủy `double` (khi là biến instance hoặc static) là `0.0` (hoặc `0.0d`). B (`0`) là mặc định của kiểu nguyên (`int`), còn C (`null`) là mặc định của kiểu tham chiếu."
  },
  {
    "id": 5516,
    "topic": "🏆 Đề FE PRO192 - FA25 RE (55 câu - Full Giải)",
    "question": "[FA25_RE - Câu 16/55] What is the output of the following code snippet?\n\npublic static void main(String[] args) {\n    int[][] arr = { {1,2,3}, {4,5,6,6}, {6,7,8}};\n    int[] copy = {9,10,11,12};\n    arr[2] = copy;\n    System.out.println(arr[2][2]);\n}",
    "options": [
      "11",
      "8",
      "6",
      "9"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A (`11`). Ban đầu `arr[2]` trỏ tới mảng `{6, 7, 8}`, nhưng lệnh `arr[2] = copy;` gán lại `arr[2]` trỏ tới mảng `{9, 10, 11, 12}`. Do đó phần tử `arr[2][2]` chính là `copy[2]` có giá trị `11`; các đáp án B (`8`), C (`6`), D (`9`) đều sai chỉ số hoặc dùng mảng cũ."
  },
  {
    "id": 5517,
    "topic": "🏆 Đề FE PRO192 - FA25 RE (55 câu - Full Giải)",
    "question": "[FA25_RE - Câu 17/55] What will be the output of the following code?\n\npublic class Test10 {\n    public static void main(String[] args) {\n        Integer x = new Integer(5);\n        Integer y = new Integer(10);\n        System.out.println((String)(x+y));\n    }\n}",
    "options": [
      "15",
      "510",
      "Runtime error",
      "Compiler Error"
    ],
    "answer": 3,
    "explanation": "Đáp án đúng là D (`Compiler Error`). Khi thực hiện `x + y`, Java tự động unbox hai đối tượng `Integer` thành `int` và cho kết quả `15` có kiểu `int`. Việc ép kiểu trực tiếp `(String)(x + y)` từ `int` sang `String` không hợp lệ trong Java nên gây lỗi biên dịch (`incompatible types`), loại trừ A, B và C."
  },
  {
    "id": 5518,
    "topic": "🏆 Đề FE PRO192 - FA25 RE (55 câu - Full Giải)",
    "question": "[FA25_RE - Câu 18/55] The nextLine() method belongs to which of the following classes?",
    "options": [
      "Scanner",
      "Integer",
      "String",
      "System"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì phương thức `nextLine()` thuộc lớp `java.util.Scanner`, dùng để đọc một dòng văn bản từ luồng đầu vào. Các lớp `Integer`, `String` và `System` không có phương thức `nextLine()`."
  },
  {
    "id": 5519,
    "topic": "🏆 Đề FE PRO192 - FA25 RE (55 câu - Full Giải)",
    "question": "[FA25_RE - Câu 19/55] What is a checked exception in Java?",
    "options": [
      "Checked exceptions are the ones that are checked during compilation time",
      "Checked exceptions are the ones that are checked during the execution time",
      "Checked exceptions are syntax errors",
      "Checked exceptions are runtime errors"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì checked exception là các ngoại lệ được trình biên dịch kiểm tra ngay tại thời điểm biên dịch (compile time), buộc lập trình viên phải xử lý bằng `try-catch` hoặc khai báo `throws`. B và D mô tả unchecked/runtime exception, còn C sai vì lỗi cú pháp không phải exception."
  },
  {
    "id": 5520,
    "topic": "🏆 Đề FE PRO192 - FA25 RE (55 câu - Full Giải)",
    "question": "[FA25_RE - Câu 20/55] What is the way to instantiate a Scanner object to read data from a file \"data.txt\" with UTF-8 character encoding?",
    "options": [
      "Scanner in = new Scanner(Path.of(\"data.txt\"), StandardCharsets.UTF_8);",
      "Scanner in = new Scanner(data.txt, StandardCharsets.UTF_8);",
      "Scanner in = new Scanner(new FileInput(\"data.txt\"));",
      "Scanner in = new Scanner(new Stream(\"data.txt\"), StandardCharsets.UTF_8);"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì lớp `Scanner` có constructor `Scanner(Path source, Charset charset)` nhận `Path.of(\"data.txt\")` và `StandardCharsets.UTF_8` để đọc file theo bảng mã UTF-8. B sai cú pháp vì `data.txt` không nằm trong dấu ngoặc kép; C và D dùng các lớp không tồn tại trong Java chuẩn (`FileInput`, `Stream`)."
  },
  {
    "id": 5521,
    "topic": "🏆 Đề FE PRO192 - FA25 RE (55 câu - Full Giải)",
    "question": "[FA25_RE - Câu 21/55] Which of the following access modifiers in Java provides the strongest form of encapsulation?",
    "options": [
      "public",
      "protected",
      "private",
      "default (no modifier)"
    ],
    "answer": 2,
    "explanation": "Đáp án đúng là C vì `private` có phạm vi truy cập hẹp nhất, chỉ cho phép truy cập bên trong chính class khai báo, giúp che giấu dữ liệu và đóng gói chặt chẽ nhất. Các mức A (`public`), B (`protected`) và D (`default`) đều cho phép các lớp khác truy cập ở mức độ rộng hơn."
  },
  {
    "id": 5522,
    "topic": "🏆 Đề FE PRO192 - FA25 RE (55 câu - Full Giải)",
    "question": "[FA25_RE - Câu 22/55] What is the purpose of the \"this\" keyword in Java?",
    "options": [
      "It refers to the current class",
      "It refers to the current object",
      "It refers to the superclass",
      "It refers to the subclass",
      "It initializes a variable",
      "It denotes a static method"
    ],
    "answer": 1,
    "explanation": "Đáp án đúng là B vì từ khóa `this` trong Java là biến tham chiếu trỏ tới đối tượng hiện tại (current object) mà phương thức hoặc constructor đang được gọi trên đó. A sai vì `this` tham chiếu tới instance hiện tại chứ không phải bản thân class, và C sai vì tham chiếu lớp cha là `super`."
  },
  {
    "id": 5523,
    "topic": "🏆 Đề FE PRO192 - FA25 RE (55 câu - Full Giải)",
    "question": "[FA25_RE - Câu 23/55] What operator is used to access the member(field or method) of the object?",
    "options": [
      ".",
      "{}",
      "[]",
      ":"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì toán tử dấu chấm (`.`) được dùng để truy cập các thành viên (thuộc tính hoặc phương thức) của một đối tượng hoặc lớp trong Java. B (`{}`) dùng để tạo khối lệnh, C (`[]`) dùng cho mảng, và D (`:`) dùng trong vòng lặp for-each hoặc toán tử ba ngôi."
  },
  {
    "id": 5524,
    "topic": "🏆 Đề FE PRO192 - FA25 RE (55 câu - Full Giải)",
    "question": "[FA25_RE - Câu 24/55] What is the output of the following code snippet?\n\npublic class Person {\n    protected String id = \"New Id\";\n    public static void main(String[] args) {\n        Person p = new Person();\n        p.id = \"FPTU\";\n        System.out.println(p.id);\n    }\n}",
    "options": [
      "FPTU",
      "null",
      "New Id",
      "Runtime error"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A (`FPTU`). Khi tạo `new Person()`, thuộc tính `id` ban đầu có giá trị `\"New Id\"`, nhưng sau đó lệnh `p.id = \"FPTU\";` đã gán lại giá trị mới (hợp lệ vì `main` nằm trong cùng lớp `Person`). Do đó `System.out.println(p.id)` in ra `FPTU`, loại trừ B, C và D."
  },
  {
    "id": 5525,
    "topic": "🏆 Đề FE PRO192 - FA25 RE (55 câu - Full Giải)",
    "question": "[FA25_RE - Câu 25/55] What is the output of the following code snippet?\n\npublic class Person {\n    protected String id;\n    public void calPerson(Person p){\n        p.id = \"HCM\";\n        System.out.print(p.id);\n    }\n    public static void main(String[] args) {\n        Person p = new Person();\n        p.id = \"FPT\";\n        p.calPerson(p);\n    }\n}",
    "options": [
      "HCM",
      "FPT",
      "FPTHCM",
      "HCMFPT"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A (`HCM`). Trong `main`, `p.id` được gán `\"FPT\"` (không có lệnh in), sau đó gọi `p.calPerson(p)` làm thay đổi `p.id` của đối tượng thành `\"HCM\"` rồi in ra `p.id`. Vì chỉ có một lệnh in duy nhất trong `calPerson`, kết quả là `HCM`, không phải `FPT` hay ghép chuỗi như B, C, D."
  },
  {
    "id": 5526,
    "topic": "🏆 Đề FE PRO192 - FA25 RE (55 câu - Full Giải)",
    "question": "[FA25_RE - Câu 26/55] What is the output of the following code snippet?\n\nclass Test{\n    void method(int x){\n        System.out.print(x*x);\n    }\n    void method(int...a){\n        System.out.print(a.length);\n    }\n    public static void main(String[] args){\n        Test t = new Test();\n        t.method();\n        t.method(2);\n        t.method(3, 4);\n    }\n}",
    "options": [
      "042",
      "034",
      "234",
      "242"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A (`042`). Lệnh `t.method()` gọi `method(int...a)` với 0 đối số nên in `a.length` là `0`; lệnh `t.method(2)` ưu tiên khớp chính xác `method(int x)` thay vì varargs nên in `2*2 = 4`; lệnh `t.method(3, 4)` gọi `method(int...a)` với 2 đối số nên in `2`. Kết quả ghép lại là `042`, loại trừ B, C, D."
  },
  {
    "id": 5527,
    "topic": "🏆 Đề FE PRO192 - FA25 RE (55 câu - Full Giải)",
    "question": "[FA25_RE - Câu 27/55] What is the output of the following Java program?\n\nclass A {\n    static void displayMessage() {\n        System.out.println(\"A Display\");\n    }\n}\nclass B extends A {\n    static void displayMessage() {\n        System.out.println(\"B Display\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        A objA = new B();\n        objA.displayMessage();\n    }\n}",
    "options": [
      "A Display",
      "B Display",
      "A Display B Display",
      "Compile error"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A (`A Display`). Vì `displayMessage()` là phương thức `static`, trong Java áp dụng cơ chế ẩn phương thức (method hiding) chứ không có đa hình (overriding), nên việc gọi `objA.displayMessage()` được phân giải tại thời điểm biên dịch theo kiểu tham chiếu `A` của `objA`. Do đó `A.displayMessage()` được thực thi, không phải `B Display` (B)."
  },
  {
    "id": 5528,
    "topic": "🏆 Đề FE PRO192 - FA25 RE (55 câu - Full Giải)",
    "question": "[FA25_RE - Câu 28/55] Choose the correct statement about the “this” keyword.",
    "options": [
      "It can be used to refer to the current object in a method or constructor",
      "It can be used to refer to the object of the superclass",
      "It can be used to invoke methods of the superclass",
      "All of the others"
    ],
    "answer": 0,
    "explanation": "Đáp án đúng là A vì từ khóa `this` dùng để tham chiếu đến đối tượng hiện tại bên trong một phương thức hoặc constructor. B và C sai vì việc tham chiếu và gọi phương thức của lớp cha (superclass) là chức năng của từ khóa `super`."
  },
  {
    "id": 5529,
    "topic": "🏆 Đề FE PRO192 - FA25 RE (55 câu - Full Giải)",
    "question": "[FA25_RE - Câu 29/55] What is a subclass in Java inheritance?",
    "options": [
      "The class that inherits from another class",
      "The class that is inherited from multiple classes",
      "The final class in the inheritance chain",
      "The class that has abstract methods"
    ],
    "answer": 0,
    "explanation": "Đáp án A đúng vì trong kế thừa Java, subclass (lớp con) là lớp kế thừa thuộc tính và phương thức từ một lớp khác (superclass) bằng từ khóa extends. B sai vì Java không hỗ trợ đa kế thừa lớp; C và D không phải định nghĩa của subclass (lớp final không thể được kế thừa tiếp, còn abstract class là lớp trừu tượng)."
  },
  {
    "id": 5530,
    "topic": "🏆 Đề FE PRO192 - FA25 RE (55 câu - Full Giải)",
    "question": "[FA25_RE - Câu 30/55] Choose multiple correct answers.",
    "options": [
      "private access modifier should be used for a variable or method to only be accessed within the same class",
      "public access modifier should be used for a variable or method that should be accessible from any class, regardless of the package",
      "protected access modifier should be used for a variable or method that should only be accessed within the same class and subclasses,  in the same package",
      "default (no modifier) access modifier only allows access in the same class"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Đáp án A và B đúng: private chỉ cho phép truy cập trong cùng một lớp, còn public cho phép truy cập từ mọi lớp bất kể package nào. C sai vì protected còn cho phép các lớp con (subclasses) ở khác package truy cập; D sai vì mức default cho phép truy cập trong cùng package chứ không chỉ trong cùng lớp."
  },
  {
    "id": 5531,
    "topic": "🏆 Đề FE PRO192 - FA25 RE (55 câu - Full Giải)",
    "question": "[FA25_RE - Câu 31/55] Which of the following statements is true about superclass and subclass relationships in Java?",
    "options": [
      "A subclass can access private members of its superclass.",
      "A superclass can extend multiple subclasses simultaneously.",
      "A subclass constructor must always call the superclass constructor explicitly.",
      "A superclass reference can be used to directly access subclass-specific methods.",
      "A subclass can override a private method in its superclass.",
      "A subclass can have more than one superclass."
    ],
    "answer": 2,
    "explanation": "Đáp án lưu là C, nhưng theo quy tắc chuẩn của Java thì C chưa hoàn toàn chính xác: constructor của lớp con chỉ bắt buộc gọi tường minh super(...) khi lớp cha không có constructor không tham số, còn ngược lại trình biên dịch sẽ tự động chèn super() ngầm. Các phương án khác đều sai: thành viên private không được lớp con truy cập trực tiếp hay ghi đè (A, E sai), Java chỉ hỗ trợ đơn kế thừa lớp (B, F sai) và tham chiếu lớp cha không thể gọi trực tiếp phương thức riêng của lớp con nếu chưa ép kiểu (D sai)."
  },
  {
    "id": 5532,
    "topic": "🏆 Đề FE PRO192 - FA25 RE (55 câu - Full Giải)",
    "question": "[FA25_RE - Câu 32/55] What is the \"instanceof\" operator used for?",
    "options": [
      "To check whether an object is an instance of a particular class or not",
      "To create a new instance of a class",
      "To compare two objects for equality",
      "To check if an object is null"
    ],
    "answer": 0,
    "explanation": "Đáp án A đúng vì toán tử instanceof trong Java dùng để kiểm tra một đối tượng có phải là thể hiện của một lớp (hoặc lớp con/interface) cụ thể hay không, trả về boolean. B dùng từ khóa new, C dùng equals() hoặc ==, còn D dùng == null."
  },
  {
    "id": 5533,
    "topic": "🏆 Đề FE PRO192 - FA25 RE (55 câu - Full Giải)",
    "question": "[FA25_RE - Câu 33/55] What is the result of overriding the toString() method in a subclass?",
    "options": [
      "The subclass objects will provide a custom string representation.",
      "The subclass objects will use the default string representation provided by the Object class.",
      "The toString() method cannot be overridden.",
      "The toString() method must be called explicitly to get a string representation."
    ],
    "answer": 0,
    "explanation": "Đáp án A đúng vì khi ghi đè (override) phương thức toString() của lớp Object trong lớp con, đối tượng lớp con sẽ trả về chuỗi biểu diễn tùy chỉnh thay vì chuỗi mặc định dạng TênLớp@MãHash (B sai). C sai vì toString() là phương thức non-final nên hoàn toàn có thể ghi đè; D sai vì System.out.println(obj) hay phép nối chuỗi tự động gọi ngầm toString()."
  },
  {
    "id": 5534,
    "topic": "🏆 Đề FE PRO192 - FA25 RE (55 câu - Full Giải)",
    "question": "[FA25_RE - Câu 34/55] What will be the output of the following Java code?\n\nclass A {\n    int a = 5;\n    public int getA() {\n        return a;\n    }\n}\nclass B extends A {\n    private int a = 6;\n    public void rollBackA() {\n        a++;\n        a = super.getA();\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        A objA = new A();\n        B objB = new B();\n        objB.rollBackA();\n        System.out.format(\"%d , %d%n\", objA.getA(), objB.getA());\n    }\n}",
    "options": [
      "5 , 5",
      "6 , 6",
      "5 , 6",
      "6 , 5"
    ],
    "answer": 0,
    "explanation": "Đáp án A đúng. objA.getA() trả về biến a = 5 của lớp A. Lớp B khai báo biến private int a = 6 che khuất (hide) biến a của A nhưng không ghi đè getA(); khi gọi objB.rollBackA(), biến B.a được cập nhật còn A.a vẫn là 5, nên objB.getA() (kế thừa từ A) vẫn trả về A.a = 5, in ra \"5 , 5\"."
  },
  {
    "id": 5535,
    "topic": "🏆 Đề FE PRO192 - FA25 RE (55 câu - Full Giải)",
    "question": "[FA25_RE - Câu 35/55] What is the output of the following Java program?\n\nclass A {\n    public A() {\n        System.out.print(\"A,\");\n    }\n}\nclass B extends A {\n    public B() {\n        System.out.print(\"B,\");\n    }\n}\nclass C extends B {\n    public C() {\n        System.out.println(\"C\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        C c = new C();\n    }\n}",
    "options": [
      "A,B,C",
      "B,C,A",
      "B,A,C",
      "A,C,B"
    ],
    "answer": 0,
    "explanation": "Đáp án A đúng. Khi khởi tạo new C(), cơ chế constructor chaining tự động gọi ngầm super() từ lớp con lên lớp cha: constructor C() gọi B(), B() gọi A(). Do đó thân của A() chạy trước in \"A,\", tiếp theo B() in \"B,\", và cuối cùng C() in \"C\", tạo thành \"A,B,C\"."
  },
  {
    "id": 5536,
    "topic": "🏆 Đề FE PRO192 - FA25 RE (55 câu - Full Giải)",
    "question": "[FA25_RE - Câu 36/55] Choose multiple correct answers.",
    "options": [
      "The purpose of an interface in Java is to provide a blueprint for a class",
      "Can create instance variables of an interface",
      "An interface has constructors and private methods.",
      "The keyword used to implement an interface in Java is implement"
    ],
    "answer": [
      0,
      3
    ],
    "explanation": "Đáp án lưu là A và D: A đúng vì interface cung cấp bản thiết kế/hợp đồng (blueprint) các hành vi cho lớp cài đặt; D là đáp án được chọn trong đề dù trong cú pháp Java thực tế từ khóa chuẩn là \"implements\" (có chữ s ở cuối). B sai vì trường trong interface mặc định là public static final (hằng số), không có instance variable; C sai vì interface không có constructor."
  },
  {
    "id": 5537,
    "topic": "🏆 Đề FE PRO192 - FA25 RE (55 câu - Full Giải)",
    "question": "[FA25_RE - Câu 37/55] What is the output of the following Java program?\n\nabstract class A {\n    private String my_name = null;\n    public String myName() {\n        my_name = \"test\";\n        return my_name;\n    }\n    abstract void display();\n}\npublic class Main extends A {\n    void display() {\n        String n = myName();\n        System.out.println(n);\n    }\n    public static void main(String args[]) {\n        A obj = new Main();\n        obj.display();\n    }\n}",
    "options": [
      "test",
      "Runtime error",
      "null",
      "None of the others"
    ],
    "answer": 0,
    "explanation": "Đáp án A đúng. Biến obj kiểu A tham chiếu đến đối tượng new Main() hợp lệ nhờ tính đa hình. Khi gọi obj.display(), phương thức display() của Main chạy, gọi myName() kế thừa từ A để gán my_name = \"test\" rồi trả về \"test\", sau đó in ra \"test\"."
  },
  {
    "id": 5538,
    "topic": "🏆 Đề FE PRO192 - FA25 RE (55 câu - Full Giải)",
    "question": "[FA25_RE - Câu 38/55] Choose multiple correct answers.",
    "options": [
      "Inheritance allows a class to inherit the properties and methods of another class",
      "The keyword \"extends\" is used to indicate inheritance in Java. It is used in the declaration of a subclass to specify the superclass that it is inheriting from.",
      "A subclass can inherit the private members of the superclass",
      "Java supports both multiple inheritance of classes and interfaces"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Đáp án A và B đúng vì kế thừa cho phép lớp con thừa hưởng thuộc tính/phương thức từ lớp cha và dùng từ khóa extends để khai báo lớp cha được kế thừa. C sai vì thành viên private không được kế thừa cho lớp con truy cập trực tiếp; D sai vì Java không hỗ trợ đa kế thừa lớp (class), chỉ hỗ trợ đa kế thừa interface."
  },
  {
    "id": 5539,
    "topic": "🏆 Đề FE PRO192 - FA25 RE (55 câu - Full Giải)",
    "question": "[FA25_RE - Câu 39/55] What is the output of the following Java program?\n\nclass A {\n    int i = 100;\n    public void printValue() {\n        System.out.print(\"A\");\n    }\n}\nclass B extends A {\n    int i = 120;\n    public void printValue() {\n        System.out.print(\"B\");\n    }\n}\npublic class Main {\n    public static void main(String args[]) {\n        A a = new B();\n        a.printValue();\n        System.out.print(a.i);\n    }\n}",
    "options": [
      "B100",
      "B120",
      "A100",
      "A120"
    ],
    "answer": 0,
    "explanation": "Đáp án A đúng. Với khai báo A a = new B(), lời gọi phương thức a.printValue() áp dụng đa hình động nên gọi phiên bản ghi đè ở lớp B và in ra \"B\". Ngược lại, thuộc tính không có đa hình (field hiding) nên a.i được phân giải theo kiểu tham chiếu A và trả về 100, kết quả là \"B100\"."
  },
  {
    "id": 5540,
    "topic": "🏆 Đề FE PRO192 - FA25 RE (55 câu - Full Giải)",
    "question": "[FA25_RE - Câu 40/55] Which method is used to compare two arrays for equality in Java?",
    "options": [
      "Arrays.equals()",
      "Arrays.equal()",
      "Arrays.compare()",
      "Arrays.comparison()"
    ],
    "answer": 0,
    "explanation": "Đáp án A đúng vì java.util.Arrays.equals() là phương thức tĩnh dùng để kiểm tra hai mảng có cùng độ dài và từng cặp phần tử tương ứng bằng nhau hay không. C (Arrays.compare()) dùng để so sánh thứ tự từ điển trả về số nguyên, còn B và D không tồn tại."
  },
  {
    "id": 5541,
    "topic": "🏆 Đề FE PRO192 - FA25 RE (55 câu - Full Giải)",
    "question": "[FA25_RE - Câu 41/55] What happens when you try to assign an array to another array in Java?",
    "options": [
      "Both arrays reference to the same memory location.",
      "A new copy of the array is created.",
      "It results in a compilation error.",
      "Java does not allow array assignment."
    ],
    "answer": 0,
    "explanation": "Đáp án A đúng vì mảng trong Java là kiểu tham chiếu (object), nên phép gán b = a chỉ sao chép địa chỉ tham chiếu khiến cả hai biến cùng trỏ tới một vùng nhớ mảng. Phép gán này hoàn toàn hợp lệ (C, D sai) và không tạo bản sao dữ liệu mới (B sai)."
  },
  {
    "id": 5542,
    "topic": "🏆 Đề FE PRO192 - FA25 RE (55 câu - Full Giải)",
    "question": "[FA25_RE - Câu 42/55] Which method is used to convert an array to a List in Java?",
    "options": [
      "Arrays.asList()",
      "Arrays.toList()",
      "Arrays.convertToList()",
      "Arrays.arrayToList()"
    ],
    "answer": 0,
    "explanation": "Đáp án A đúng vì Arrays.asList() là phương thức chuẩn của lớp java.util.Arrays dùng để chuyển một mảng thành một đối tượng List có kích thước cố định. Các tên phương thức ở B, C, D không tồn tại trong lớp Arrays."
  },
  {
    "id": 5543,
    "topic": "🏆 Đề FE PRO192 - FA25 RE (55 câu - Full Giải)",
    "question": "[FA25_RE - Câu 43/55] What is the output of the following code snippet:\n\nint i = 0;\nint[] list = {1, 2, 3, 4, 5};\ndo {\n    list[i] += ++i;\n} while (i < 4);\nSystem.out.println(list[0] + list[list.length]);",
    "options": [
      "The program will raise an exception.",
      "5",
      "1",
      "6"
    ],
    "answer": 0,
    "explanation": "Đáp án A đúng. Mảng list có 5 phần tử với chỉ số hợp lệ từ 0 đến 4 (list.length = 5). Sau vòng lặp do-while, câu lệnh in cố gắng truy cập phần tử list[list.length] tức là list[5], vượt quá giới hạn mảng nên chương trình ném ngoại lệ ArrayIndexOutOfBoundsException tại runtime."
  },
  {
    "id": 5544,
    "topic": "🏆 Đề FE PRO192 - FA25 RE (55 câu - Full Giải)",
    "question": "[FA25_RE - Câu 44/55] Which OOP concept allows a class to inherit attributes and behaviors from another class?",
    "options": [
      "Abstraction",
      "Encapsulation",
      "Inheritance",
      "Polymorphism",
      "Composition",
      "Method overloading"
    ],
    "answer": 2,
    "explanation": "Đáp án C đúng vì Inheritance (tính kế thừa) là khái niệm OOP cho phép một lớp kế thừa các thuộc tính và phương thức từ lớp khác. Abstraction là trừu tượng hóa, Encapsulation là đóng gói, Polymorphism là đa hình, Composition là kết hợp đối tượng và Method overloading là nạp chồng phương thức."
  },
  {
    "id": 5545,
    "topic": "🏆 Đề FE PRO192 - FA25 RE (55 câu - Full Giải)",
    "question": "[FA25_RE - Câu 45/55] Which method is used to find the maximum element in a collection of the Collections class?",
    "options": [
      "max()",
      "findMax()",
      "getMax()",
      "maxElement()"
    ],
    "answer": 0,
    "explanation": "Đáp án A đúng vì lớp tiện ích java.util.Collections cung cấp phương thức tĩnh Collections.max() để tìm phần tử lớn nhất trong một collection dựa trên thứ tự tự nhiên hoặc Comparator. Các phương thức ở B, C, D không tồn tại trong lớp Collections."
  },
  {
    "id": 5546,
    "topic": "🏆 Đề FE PRO192 - FA25 RE (55 câu - Full Giải)",
    "question": "[FA25_RE - Câu 46/55] Which of the following statements related to removing an element in an ArrayList is true?",
    "options": [
      "The remove method will return the deleted value for the user.",
      "The remove operation will raise an exception if the element does not exist in the ArrayList",
      "The remove method will return the integer value after removing.",
      "All of the others"
    ],
    "answer": 0,
    "explanation": "Đáp án A đúng vì phương thức remove(int index) của ArrayList sẽ xóa phần tử tại vị trí chỉ định và trả về chính giá trị đã bị xóa (trong khi remove(Object) trả về boolean). B sai vì remove(Object) chỉ trả về false nếu phần tử không tồn tại chứ không ném ngoại lệ; C sai vì kiểu trả về là kiểu phần tử E hoặc boolean chứ không phải int."
  },
  {
    "id": 5547,
    "topic": "🏆 Đề FE PRO192 - FA25 RE (55 câu - Full Giải)",
    "question": "[FA25_RE - Câu 47/55] What is the output of the following code snippet?\n\nSet<Integer> set = new HashSet();\nset.add(1); set.add(2); set.add(3); set.add(1);\nSystem.out.println(set.size());",
    "options": [
      "3",
      "4",
      "1",
      "0"
    ],
    "answer": 0,
    "explanation": "Đáp án A đúng. HashSet cài đặt giao diện Set nên không cho phép lưu trữ các phần tử trùng lặp. Khi thêm lần lượt 1, 2, 3 rồi add(1) lần nữa, giá trị 1 đã tồn tại nên bị bỏ qua, do đó tập hợp chỉ chứa {1, 2, 3} và set.size() trả về 3."
  },
  {
    "id": 5548,
    "topic": "🏆 Đề FE PRO192 - FA25 RE (55 câu - Full Giải)",
    "question": "[FA25_RE - Câu 48/55] Which method is used to check if an element is present in an ArrayList?",
    "options": [
      "contains()",
      "exists()",
      "includes()",
      "has()"
    ],
    "answer": 0,
    "explanation": "Đáp án A đúng vì ArrayList.contains(Object o) kiểm tra xem phần tử có tồn tại trong danh sách hay không và trả về true/false. Các phương thức exists(), includes(), has() không có trong API của ArrayList."
  },
  {
    "id": 5549,
    "topic": "🏆 Đề FE PRO192 - FA25 RE (55 câu - Full Giải)",
    "question": "[FA25_RE - Câu 49/55] What is the output of the following code snippet?\n\nMap<Character, Integer> map = new HashMap();\nString data = \"heLLo\";\nfor (Character c : data.toCharArray()) {\n    if (map.containsKey(c)) {\n        map.put(c, map.get(c) + 1);\n    } else {\n        map.put(c, 0);\n    }\n}\nSystem.out.println(map.get('L'));",
    "options": [
      "1",
      "2",
      "0",
      "3"
    ],
    "answer": 0,
    "explanation": "Đáp án A đúng. Chuỗi \"heLLo\" có hai ký tự 'L': ở lần gặp 'L' thứ nhất, map chưa có khóa 'L' nên nhánh else thực thi map.put('L', 0). Ở lần gặp 'L' thứ hai, map.containsKey('L') là true nên nhánh if thực thi map.put('L', 0 + 1) thành 1, kết quả map.get('L') in ra 1."
  },
  {
    "id": 5550,
    "topic": "🏆 Đề FE PRO192 - FA25 RE (55 câu - Full Giải)",
    "question": "[FA25_RE - Câu 50/55] In the object stream, which of the following members of an object won't be serialized?",
    "options": [
      "transient variables",
      "final variables",
      "inherited variables",
      "All of the others"
    ],
    "answer": 0,
    "explanation": "Đáp án A đúng vì từ khóa transient dùng để đánh dấu biến thành viên sẽ bị bỏ qua khi tuần tự hóa đối tượng (serialization) qua ObjectOutputStream. Biến final (B) và biến kế thừa (C, nếu đối tượng thuộc lớp Serializable) vẫn được tuần tự hóa bình thường."
  },
  {
    "id": 5551,
    "topic": "🏆 Đề FE PRO192 - FA25 RE (55 câu - Full Giải)",
    "question": "[FA25_RE - Câu 51/55] Which of the following methods of the FileOutputStream class is used to write bytes to a target stream?",
    "options": [
      "write()",
      "print()",
      "writeLine()",
      "println()"
    ],
    "answer": 0,
    "explanation": "Đáp án A đúng vì FileOutputStream là luồng xuất byte cung cấp các phương thức write() để ghi một byte hoặc mảng byte ra đích. print() và println() thuộc PrintStream/PrintWriter, còn writeLine() không phải phương thức của FileOutputStream."
  },
  {
    "id": 5552,
    "topic": "🏆 Đề FE PRO192 - FA25 RE (55 câu - Full Giải)",
    "question": "[FA25_RE - Câu 52/55] How does the try-catch-finally statement work?",
    "options": [
      "The code inside the try block is executed, and if an exception occurs, it is caught and handled by the catch block. The code inside the finally block is executed regardless of whether an exception occurred or not.",
      "The code inside the try block is executed, and if an exception occurs, it is caught and handled by the finally block. The code inside the catch block is executed regardless of whether an exception occurred or not.",
      "The code inside the try block is executed, and if an exception occurs, it is caught and handled by the catch block. The code inside the finally block is executed only if an exception occurred.",
      "The code inside the try block is executed, and if an exception occurs, it is caught and handled by the catch block. The code inside the finally block is executed only if an exception occurred and was not caught by the catch block."
    ],
    "answer": 0,
    "explanation": "Đáp án A đúng vì khối try thực thi đoạn mã có thể phát sinh lỗi, khối catch bắt và xử lý nếu ngoại lệ xảy ra, còn khối finally luôn được thực thi dù có ngoại lệ hay không. B sai do đảo ngược vai trò catch và finally; C, D sai vì finally không chỉ chạy khi có ngoại lệ."
  },
  {
    "id": 5553,
    "topic": "🏆 Đề FE PRO192 - FA25 RE (55 câu - Full Giải)",
    "question": "[FA25_RE - Câu 53/55] Which of the following classes is the superclass of the PrintWriter and FileWriter classes?",
    "options": [
      "Writer class",
      "Input class",
      "File class",
      "Object class"
    ],
    "answer": 0,
    "explanation": "Đáp án A đúng vì java.io.Writer là lớp trừu tượng cha trong phân cấp luồng ký tự mà cả PrintWriter (kế thừa trực tiếp) và FileWriter (kế thừa qua OutputStreamWriter) đều mở rộng. Input không tồn tại trong java.io, File không phải lớp cha của luồng ghi, còn Object chỉ là lớp gốc chung của mọi lớp Java."
  },
  {
    "id": 5554,
    "topic": "🏆 Đề FE PRO192 - FA25 RE (55 câu - Full Giải)",
    "question": "[FA25_RE - Câu 54/55] Which of the following methods of File class is used to check a file already exists?",
    "options": [
      "exists()",
      "isExists ()",
      "checkFile()",
      "fileExists()"
    ],
    "answer": 0,
    "explanation": "Đáp án A đúng vì lớp java.io.File cung cấp phương thức exists() trả về true nếu tệp hoặc thư mục tại đường dẫn tương ứng đã tồn tại. Các phương thức ở B, C, D không có trong lớp File."
  },
  {
    "id": 5555,
    "topic": "🏆 Đề FE PRO192 - FA25 RE (55 câu - Full Giải)",
    "question": "[FA25_RE - Câu 55/55] You are developing a contact management system, and you need to quickly find a contact by their phone number. Explain how you would use Java collections to efficiently search for a contact based on a specific criterion.",
    "options": [
      "Use a HashMap with phone numbers as keys for O(1) lookup.",
      "Implement a linear search through the list of contacts.",
      "Utilize Collections.binarySearch() with a sorted list.",
      "Choose a HashSet for efficient phone number-based searching.",
      "Implement a custom trie data structure for optimized searching.",
      "Use Collections.max() with a custom comparator for finding the maximum value."
    ],
    "answer": 0,
    "explanation": "Đáp án A đúng vì HashMap sử dụng số điện thoại làm khóa (key) ánh xạ tới đối tượng liên hệ (value), cho phép tra cứu nhanh với độ phức tạp trung bình O(1). Cách này hiệu quả hơn tìm kiếm tuyến tính O(n) ở B hay tìm kiếm nhị phân O(log n) ở C; còn HashSet (D) chỉ lưu tập giá trị chứ không ánh xạ khóa sang đối tượng liên hệ, E không phải Java Collection chuẩn và F dùng để tìm giá trị lớn nhất."
  }
];
  window.PRO192_DATA.quizQuestions.push(...pastExamQuestions);
})();
