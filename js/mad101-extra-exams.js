(function () {
  if (!window.MAD101_DATA || !Array.isArray(window.MAD101_DATA.quizQuestions)) return;

  const BASE = "https://vuminhtuan-cdm.github.io/mad101-fe/";
  const letterToIdx = { A: 0, B: 1, C: 2, D: 3, E: 4, F: 5 };

  // Detailed explanations for notable / tricky questions from FA25 & SP26 B5/RE
  const knownNotes = {
    "SP26_B5_1": "Mã Huffman: Tính độ dài mã bit trung bình L̄ = ∑ (tần suất pᵢ × độ dài mã lᵢ) sau khi gộp dần 2 nút có trọng số nhỏ nhất.",
    "SP26_B5_15": "Hàm f(x) = ⌊x/2⌋ trên N → N: f(0) = f(1) = 0 nên KHÔNG đơn ánh (not one-to-one), nhưng mọi k ∈ N đều có f(2k) = k nên TOÀN ÁNH (onto).",
    "SP26_B5_30": "Đồ thị lưỡng phân đầy đủ Kₘ,ₙ có số cạnh m·n = 15. Các cặp (m, n) nguyên dương là (1, 15) ⇒ 16 đỉnh, và (3, 5) ⇒ 8 đỉnh.",
    "SP26_B5_45": "Biến đổi f(n+1) = 2f(n) - f(n-1) ⇔ f(n+1) - f(n) = f(n) - f(n-1) = d (Cấp số cộng!) ⇒ f(n) = f(0) + n·d.",
    "SP26_RE_25": "Tổng n số nguyên dương chẵn đầu tiên: 2 + 4 + 6 + ... + 2n = 2·(1 + 2 + ... + n) = 2 · n(n+1)/2 = n(n + 1).",
    "FA25_RE_1": "(p → q) ∨ r chỉ SAI (False) khi cả hai vế đều sai: r = F và (p → q) = F (tức p = T, q = F).",
    "FA25_RE_10": "Chú ý phân biệt ∈ và ⊆: Tập {x} chỉ chứa duy nhất phần tử x, không chứa tập {x}, nên {x} ∈ {x} là SAI!",
    "FA25_RE_20": "Mẹo tính nhanh: 131 = 37×3 + 20 ⇒ a = 20. Vì 131 không chia hết cho 37 nên b = -131 mod 37 = 37 - 20 = 17 ⇒ a - b = 3.",
    "FA25_RE_30": "Chọn 2 vị trí cho chữ số '0': C(4, 2) = 6 cách; 2 vị trí còn lại mỗi vị trí có 9 cách (1..9) ⇒ 6 × 9² = 486 chuỗi.",
    "FA25_RE_40": "Với m > n > 2, Kₘ,ₙ KHÔNG BAO GIỜ có chu trình Hamilton vì số đỉnh 2 phía phải bằng nhau (m = n) mới đi vòng khép kín xen kẽ 2 phía được!",
    "FA25_FE_9": "Lưu ý: a ∈ {a} (Đúng), ∅ ⊆ {∅} (Đúng vì ∅ là tập con mọi tập), ∅ × {a} = ∅ (Đúng vì tích Descartes với tập rỗng luôn rỗng).",
    "FA25_FE_10": "|A × B| = |A|·|B| = |A|(|A| + 1) = 90 = 9 × 10 ⇒ |A| = 9.",
    "FA25_FE_20": "-112 = 19 × (-6) + 2 (số dư r luôn 0 ≤ r < 19) ⇒ (-112 div 19) = -6 và (-112 mod 19) = 2.",
    "FA25_FE_30": "Bẫy 'LESS THAN 100' (chỉ tính 1..99, KHÔNG tính 100!): ⌊99/3⌋ + ⌊99/4⌋ - ⌊99/12⌋ = 33 + 24 - 8 = 49.",
    "FA25_FE_40": "Đồ thị có hướng có dãy (in, out): (3,2), (2,2), (2,2), (1,2) ⇒ có 1 đỉnh out - in = 1 và 1 đỉnh in - out = 1 ⇒ CÓ đường đi Euler có hướng nhưng KHÔNG có chu trình Euler."
  };

  const extraExamSpecs = [
    {
      idStart: 5001,
      shortCode: "SP26_B5",
      topic: "Đề FE SP26 B5 (50 câu - Ảnh)",
      prefix: "images/sp26_b5_fe_re_q",
      ext: ".webp",
      answers: [
        "D","D","A","A","B","B","E","A","A","C",
        "E","C","B","A","E","C","A","C","D","C",
        "B","C","D","A","C","C","A","B","D","A",
        "E","B","B","B","D","C","B","B","B","A",
        "E","D","B","E","B","D","E","C","B","A"
      ]
    },
    {
      idStart: 5101,
      shortCode: "SP26_RE",
      topic: "Đề FE SP26 RE (50 câu - Ảnh)",
      prefix: "images/sp26_re_q",
      ext: ".jpg",
      answers: [
        "B","B","D","C","B","C","C","C","B","D",
        "A","A","D","D","D","A","B","A","D","C",
        "A","B","B","E","A","C","A","A","D","A",
        "D","A","D","D","A","A","D","A","A","D",
        "A","A","D","B","D","A","B","C","D","A"
      ]
    },
    {
      idStart: 5201,
      shortCode: "FA25_RE",
      topic: "Đề FE FA25 RE (50 câu - Ảnh)",
      prefix: "images/fa25_re_q",
      ext: ".webp",
      answers: [
        "C","A","A","C","C","A","A","A","D","C",
        "D","A","B","B","A","B","B","C","D","A",
        "B","A","D","A","D","A","A","D","D","A",
        "B","A","D","A","B","A","C","C","D","A",
        "C","A","B","A","C","A","B","A","D","A"
      ]
    },
    {
      idStart: 5301,
      shortCode: "FA25_FE",
      topic: "Đề FE FA25 FE (50 câu - Ảnh)",
      prefix: "images/fa25_fe_q",
      ext: ".webp",
      answers: [
        "A","B","A","B","D","C","C","A","B","A",
        "E","D","B","C","B","A","E","A","B","B",
        "C","B","C","C","C","D","D","D","C","A",
        "B","B","D","E","D","C","B","C","A","C",
        "C","A","D","A","D","C","A","A","D","C"
      ]
    }
  ];

  extraExamSpecs.forEach((spec) => {
    spec.answers.forEach((ansLetter, idx) => {
      const qNum = idx + 1;
      const padded = String(qNum).padStart(2, "0");
      const noteKey = `${spec.shortCode}_${qNum}`;
      const extraNote = knownNotes[noteKey]
        ? `\n\n💡 Giải thích nhanh: ${knownNotes[noteKey]}`
        : `\n\n💡 Mẹo ôn tập: Nếu chưa rõ bước giải của câu này, hãy mở tab '🎓 Bài Giảng Dễ Hiểu' hoặc dùng 10 máy tính tự động trong tab '🧮 Máy tính Toán rời rạc' để kiểm chứng kết quả!`;

      window.MAD101_DATA.quizQuestions.push({
        id: spec.idStart + idx,
        topic: spec.topic,
        imgFile: `${BASE}${spec.prefix}${padded}${spec.ext}`,
        hasDiagram: true,
        isImageExam: true,
        question: `[${spec.shortCode} - Câu ${qNum} / 50] Quan sát đề thi trong ảnh bên dưới và chọn đáp án đúng (Bấm vào ảnh để phóng to toàn màn hình):`,
        options: [
          "Phương án A (xem trong ảnh)",
          "Phương án B (xem trong ảnh)",
          "Phương án C (xem trong ảnh)",
          "Phương án D (xem trong ảnh)",
          "Phương án E (xem trong ảnh)"
        ],
        answer: letterToIdx[ansLetter],
        explanation: `Đáp án chính thức của hệ thống EOS cho [${spec.shortCode} - Câu ${qNum}] là: ${ansLetter}.${extraNote}`
      });
    });
  });
})();
