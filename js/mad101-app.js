(function () {
  const STORAGE_KEY = "mad101_study_state_v1";

  const defaultState = {
    theme: "dark",
    fontScale: 1.05,
    completedChapters: [],
    masteredFlashcards: [],
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
      // ignore
    }
    updateDashboardStats();
  }

  function showToast(msg) {
    const toast = document.getElementById("app-toast");
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(window.__madToastTimer);
    window.__madToastTimer = setTimeout(() => {
      toast.classList.remove("show");
    }, 2400);
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function getAllQuestions() {
    return [...window.MAD101_DATA.quizQuestions, ...(state.customQuestions || [])];
  }

  function isMultiQuestion(q) {
    return Array.isArray(q.answer);
  }

  function getCorrectArray(q) {
    return Array.isArray(q.answer) ? q.answer : [q.answer];
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
      ...window.MAD101_DATA.flashcards.map((c) => ({
        ...c,
        category: `Công thức: ${c.category}`,
        isQuestion: false
      })),
      ...(state.customFlashcards || [])
    ];

    return [...questionCards, ...coreCards];
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

  window.launchRealExam = function (topicName, mode = "exam", durationMinutes = 60, countOverride = 999) {
    switchTab("quiz");
    const topicSelect = document.getElementById("quiz-topic-select");
    const modeSelect = document.getElementById("quiz-mode-select");
    const countSelect = document.getElementById("quiz-count-select");
    if (topicSelect) topicSelect.value = topicName;
    if (modeSelect) modeSelect.value = mode;
    if (countSelect) countSelect.value = String(countOverride);
    window.__customExamMinutes = durationMinutes;
    const startBtn = document.getElementById("quiz-start-btn");
    if (startBtn) startBtn.click();
    showToast(
      mode === "exam"
        ? `⏱️ Đã bắt đầu Thi Như Thật: ${topicName} (${durationMinutes} phút)!`
        : `💡 Đã mở chế độ Luyện & Xem lời giải ngay: ${topicName}!`
    );
  };

  window.startExamByTopic = function (topicName) {
    window.launchRealExam(topicName, "exam", 60, 999);
  };

  // ==================== DASHBOARD & FE ANALYSIS ====================
  function renderFeAnalysis() {
    const container = document.getElementById("fe-analysis-container");
    if (!container || !window.MAD101_DATA.feAnalysis) return;
    const info = window.MAD101_DATA.feAnalysis;

    container.innerHTML = `
      <div class="card-header">
        <div>
          <h2 class="card-title">🎯 Phân tích 3 Đề thi thật FE MAD101 (SU26_815892, SU26_B5_334451, SP26) &amp; Sách Bài Tập FPT</h2>
          <p style="font-size:0.98rem;color:var(--text-secondary);margin-top:0.35rem;">${escapeHtml(info.difficultySummary)}</p>
        </div>
        <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
          <button class="btn btn-primary btn-sm" onclick="launchRealExam('Đề FE SU26_815892 (50 câu)', 'exam', 60)">⏱️ Thi Đề SU26_815892 (50 câu)</button>
          <button class="btn btn-primary btn-sm" onclick="launchRealExam('Đề FE SU26_B5_334451 (50 câu)', 'exam', 60)">⏱️ Thi Đề SU26_B5_334451 (50 câu)</button>
          <button class="btn btn-primary btn-sm" onclick="launchRealExam('Đề FE SP26 (49 câu)', 'exam', 60)">⏱️ Thi Đề SP26 (49 câu)</button>
          <button class="btn btn-success btn-sm" onclick="switchTab('cheatsheet')">🎯 Sổ tay Công thức &amp; Mẹo FE</button>
          <button class="btn btn-sm" onclick="switchTab('tools')">🧮 Máy tính Toán rời rạc</button>
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
    const totalChapters = window.MAD101_DATA.chapters.length;
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
      document.getElementById("stat-fc-sub").textContent = `Đã thuộc ${fcPct}% thẻ & câu hỏi`;

      document.getElementById("stat-quiz-val").textContent = `${state.quizBestScore}%`;
      document.getElementById("stat-quiz-bar").style.width = `${state.quizBestScore}%`;
      document.getElementById("stat-quiz-sub").textContent = `${state.quizAttempts} lần làm • ${allQs.length} câu hỏi FE`;

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

      window.MAD101_DATA.chapters.forEach((ch) => {
        ch.blocks.forEach((b) => {
          b.items.forEach((it) => {
            if (it.toLowerCase().includes(q) || b.heading.toLowerCase().includes(q)) {
              matches.push({
                type: "Lý thuyết",
                title: `${ch.title} — ${b.heading}`,
                desc: it,
                tab: "theory"
              });
            }
          });
        });
      });

      if (matches.length === 0) {
        resultsBox.style.display = "block";
        resultsBox.innerHTML = `<div style="padding:0.9rem;color:var(--text-secondary);">Không tìm thấy kết quả cho "<strong>${escapeHtml(q)}</strong>".</div>`;
        return;
      }

      resultsBox.style.display = "block";
      resultsBox.innerHTML = matches
        .slice(0, 15)
        .map(
          (m) => `
          <div style="padding:0.85rem 1.1rem;border-bottom:1px solid var(--border);cursor:pointer;" onclick="switchTab('${m.tab}')">
            <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.25rem;">
              <span class="badge">${escapeHtml(m.type)}</span>
              <strong style="font-size:0.95rem;">${escapeHtml(m.title)}</strong>
            </div>
            <div style="font-size:0.9rem;color:var(--text-secondary);white-space:pre-line;">${escapeHtml(m.desc)}</div>
          </div>
        `
        )
        .join("");
    });
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
        el.style.display = el.textContent.toLowerCase().includes(q) ? "" : "none";
      });
    });
  }

  // ==================== CHAPTERS ACCORDION ====================
  function renderChapters() {
    const container = document.getElementById("chapters-container");
    if (!container) return;

    container.innerHTML = window.MAD101_DATA.chapters
      .map((ch, idx) => {
        const isDone = state.completedChapters.includes(ch.id);
        return `
        <div class="chapter-item ${idx === 0 ? "open" : ""}" id="ch-card-${ch.id}">
          <div class="chapter-header" onclick="toggleChapter('${ch.id}')">
            <div class="chapter-title-wrap">
              <input
                type="checkbox"
                class="chapter-check"
                ${isDone ? "checked" : ""}
                onclick="event.stopPropagation(); toggleChapterDone('${ch.id}')"
                title="Đánh dấu đã học xong chương này"
              />
              <div>
                <div style="font-weight:800;font-size:1.08rem;">${escapeHtml(ch.title)}</div>
                <div style="font-size:0.88rem;color:var(--text-secondary);">${escapeHtml(ch.summary)}</div>
              </div>
            </div>
            <div style="display:flex;align-items:center;gap:0.6rem;">
              <span class="badge ${isDone ? "badge-success" : ""}">${isDone ? "✓ Đã học" : escapeHtml(ch.badge)}</span>
              <span style="font-size:0.85rem;color:var(--text-muted);">▼</span>
            </div>
          </div>
          <div class="chapter-body">
            <div class="theory-grid">
              ${ch.blocks
                .map(
                  (b) => `
                <div class="theory-box">
                  <h4>${escapeHtml(b.heading)}</h4>
                  <ul>
                    ${b.items.map((item) => `<li style="white-space:pre-line;">${escapeHtml(item)}</li>`).join("")}
                  </ul>
                </div>
              `
                )
                .join("")}
            </div>
            <div class="exam-tip">
              <strong>💡 Mẹo đi thi FE:</strong> ${escapeHtml(ch.examNote)}
            </div>
          </div>
        </div>
      `;
      })
      .join("");
  }

  window.toggleChapter = function (chId) {
    const el = document.getElementById(`ch-card-${chId}`);
    if (el) el.classList.toggle("open");
  };

  window.toggleChapterDone = function (chId) {
    if (state.completedChapters.includes(chId)) {
      state.completedChapters = state.completedChapters.filter((id) => id !== chId);
    } else {
      state.completedChapters.push(chId);
      showToast("Đã đánh dấu hoàn thành chương học!");
    }
    saveState();
    renderChapters();
  };

  // ==================== INTERACTIVE DISCRETE MATH TOOLS ====================
  function extGcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    let old_r = a, r = b;
    let old_s = 1, s = 0;
    let old_t = 0, t = 1;
    const steps = [];
    while (r !== 0) {
      const q = Math.floor(old_r / r);
      const next_r = old_r - q * r;
      steps.push(`${old_r} = ${r} × ${q} + ${next_r}`);
      old_r = r; r = next_r;
      const next_s = old_s - q * s; old_s = s; s = next_s;
      const next_t = old_t - q * t; old_t = t; t = next_t;
    }
    return { gcd: old_r, s: old_s, t: old_t, steps };
  }

  function modPow(base, exp, mod) {
    if (mod === 1) return 0;
    let result = 1n;
    let b = ((BigInt(base) % BigInt(mod)) + BigInt(mod)) % BigInt(mod);
    let e = BigInt(exp);
    const m = BigInt(mod);
    while (e > 0n) {
      if (e % 2n === 1n) result = (result * b) % m;
      e = e / 2n;
      b = (b * b) % m;
    }
    return Number(result);
  }

  function factorialBig(n) {
    if (n < 0) return 0n;
    let res = 1n;
    for (let i = 2n; i <= BigInt(n); i++) res *= i;
    return res;
  }

  function combBig(n, r) {
    if (r < 0 || r > n) return 0n;
    return factorialBig(n) / (factorialBig(r) * factorialBig(n - r));
  }

  function permBig(n, r) {
    if (r < 0 || r > n) return 0n;
    return factorialBig(n) / factorialBig(n - r);
  }

  function initToolsTab() {
    // 1. Number Theory & Modulo / RSA Calculator
    const modBtn = document.getElementById("calc-mod-btn");
    if (modBtn) {
      const runModCalc = () => {
        const a = parseInt(document.getElementById("mod-a-input").value, 10);
        const m = parseInt(document.getElementById("mod-m-input").value, 10);
        const exp = parseInt(document.getElementById("mod-exp-input").value, 10);
        const out = document.getElementById("mod-calc-output");
        if (isNaN(a) || isNaN(m) || m <= 0) {
          out.innerHTML = `<div class="exam-tip">Vui lòng nhập số nguyên a và số chia m > 0!</div>`;
          return;
        }
        const q = Math.floor(a / m);
        const r = a - m * q;
        const eg = extGcd(Math.abs(a), m);
        const lcmVal = a === 0 ? 0 : Math.abs(a * m) / eg.gcd;

        let invText = "Không tồn tại (vì gcd(a, m) ≠ 1)";
        if (eg.gcd === 1) {
          // Find inverse of (a mod m) modulo m
          const aPos = ((a % m) + m) % m;
          const egPos = extGcd(aPos, m);
          const inv = ((egPos.s % m) + m) % m;
          invText = `<strong>${inv}</strong> (vì ${a} × ${inv} ≡ 1 mod ${m})`;
        }

        const powVal = !isNaN(exp) && exp >= 0 ? modPow(a, exp, m) : "N/A";

        out.innerHTML = `
          <div class="grid-2" style="margin-bottom:0.75rem;">
            <div class="theory-box">
              <h4>1. Phép chia nguyên (a = m·q + r với 0 ≤ r &lt; m)</h4>
              <ul>
                <li>Biểu thức chuẩn: <code>${a} = ${m} × (${q}) + ${r}</code></li>
                <li>Thương <strong>q = ${a} div ${m} = <code>${q}</code></strong></li>
                <li>Số dư <strong>r = ${a} mod ${m} = <code>${r}</code></strong></li>
                <li>Lũy thừa Modulo: <strong><code>(${a})^${isNaN(exp) ? 1 : exp} mod ${m} = ${powVal}</code></strong></li>
              </ul>
            </div>
            <div class="theory-box">
              <h4>2. GCD, LCM &amp; Nghịch đảo Modulo</h4>
              <ul>
                <li>Ước chung lớn nhất: <strong><code>gcd(${a}, ${m}) = ${eg.gcd}</code></strong></li>
                <li>Bội chung nhỏ nhất: <strong><code>lcm(|${a}|, ${m}) = ${lcmVal}</code></strong></li>
                <li>Nghịch đảo nhân của ${a} mod ${m}: ${invText}</li>
                <li>Các bước thuật toán Euclid:<br/><span class="mono" style="font-size:0.88rem;color:var(--accent);">${eg.steps.join("  →  ")}</span></li>
              </ul>
            </div>
          </div>
        `;
      };
      modBtn.addEventListener("click", runModCalc);
      runModCalc();
    }

    // 2. RSA Helper
    const rsaBtn = document.getElementById("calc-rsa-btn");
    if (rsaBtn) {
      const runRsa = () => {
        const p = parseInt(document.getElementById("rsa-p").value, 10);
        const q = parseInt(document.getElementById("rsa-q").value, 10);
        const e = parseInt(document.getElementById("rsa-e").value, 10);
        const msg = parseInt(document.getElementById("rsa-m").value, 10) || 0;
        const out = document.getElementById("rsa-output");
        if (isNaN(p) || isNaN(q) || isNaN(e) || p <= 1 || q <= 1) {
          out.innerHTML = `<div class="exam-tip">Vui lòng nhập p, q, e hợp lệ!</div>`;
          return;
        }
        const n = p * q;
        const phi = (p - 1) * (q - 1);
        const eg = extGcd(e, phi);
        if (eg.gcd !== 1) {
          out.innerHTML = `<div class="exam-tip">⚠️ gcd(e=${e}, φ(n)=${phi}) = ${eg.gcd} ≠ 1. Hãy chọn số mũ e nguyên tố cùng nhau với φ(n) = ${phi}!</div>`;
          return;
        }
        const d = ((eg.s % phi) + phi) % phi;
        const cipher = modPow(msg, e, n);
        const decrypted = modPow(cipher, d, n);

        out.innerHTML = `
          <div class="theory-box">
            <ul>
              <li>Mô-đun công khai: <strong><code>n = p × q = ${p} × ${q} = ${n}</code></strong></li>
              <li>Hàm Euler: <strong><code>φ(n) = (p - 1)(q - 1) = ${p - 1} × ${q - 1} = ${phi}</code></strong></li>
              <li>Khóa bí mật <strong><code>d = ${d}</code></strong> (vì <code>${e} × ${d} = ${e * d} ≡ 1 (mod ${phi})</code>)</li>
              <li>Mã hóa thông điệp M = ${msg}: <strong><code>C = ${msg}^${e} mod ${n} = ${cipher}</code></strong></li>
              <li>Giải mã bản mã C = ${cipher}: <strong><code>M = ${cipher}^${d} mod ${n} = ${decrypted}</code></strong></li>
            </ul>
          </div>
        `;
      };
      rsaBtn.addEventListener("click", runRsa);
      runRsa();
    }

    // 3. Combinatorics, Pigeonhole & Word Permutations
    const combBtn = document.getElementById("calc-comb-btn");
    if (combBtn) {
      const runComb = () => {
        const n = parseInt(document.getElementById("comb-n").value, 10);
        const r = parseInt(document.getElementById("comb-r").value, 10);
        const word = (document.getElementById("comb-word").value || "SUCCESS").trim().toUpperCase();
        const out = document.getElementById("comb-output");

        if (isNaN(n) || isNaN(r) || n < 0 || r < 0) return;

        const cVal = combBig(n, r);
        const pVal = permBig(n, r);
        const starsBars = n >= 1 ? combBig(n + r - 1, r) : 0n;
        const pigeonMin = n >= 1 ? Math.ceil(r / n) : 0;
        const pigeonTotalForR = n * (r - 1) + 1;

        // Word frequency
        const freq = {};
        for (const ch of word) {
          if (/[A-Z0-9]/.test(ch)) freq[ch] = (freq[ch] || 0) + 1;
        }
        const totalChars = Object.values(freq).reduce((s, v) => s + v, 0);
        let denom = 1n;
        const denomParts = [];
        Object.entries(freq).forEach(([k, v]) => {
          denom *= factorialBig(v);
          if (v > 1) denomParts.push(`${v}! (${k})`);
        });
        const wordPerms = factorialBig(totalChars) / denom;

        out.innerHTML = `
          <div class="theory-box">
            <ul>
              <li>Tổ hợp không lặp <strong><code>C(${n}, ${r}) = ${cVal.toString()}</code></strong> | Chỉnh hợp <strong><code>P(${n}, ${r}) = ${pVal.toString()}</code></strong></li>
              <li>Chia kẹo Euler / Tổ hợp lặp (số nghiệm nguyên ≥ 0 của x₁ + ... + x_${n} = ${r}):<br/>
                👉 <strong><code>C(${n} + ${r} - 1, ${r}) = C(${n + r - 1}, ${r}) = ${starsBars.toString()}</code></strong>
              </li>
              <li>Chuồng bồ câu (với k = ${n} chuồng):<br/>
                • Nếu xếp ${r} vật vào ${n} chuồng ⇒ có ít nhất 1 chuồng chứa <strong><code>⌈${r}/${n}⌉ = ${pigeonMin}</code></strong> vật.<br/>
                • Để chắc chắn có 1 chuồng chứa ít nhất ${r} vật ⇒ cần tối thiểu <strong><code>${n}×(${r}-1) + 1 = ${pigeonTotalForR}</code></strong> vật.
              </li>
              <li>Hoán vị chuỗi <strong>"${escapeHtml(word)}"</strong> (${totalChars} ký tự):<br/>
                👉 <strong><code>${totalChars}! / [${denomParts.join(" × ") || "1!"}] = ${wordPerms.toString()}</code></strong> chuỗi khác nhau.
              </li>
            </ul>
          </div>
        `;
      };
      combBtn.addEventListener("click", runComb);
      runComb();
    }

    // 4. Full m-ary Tree & Prefix/Postfix Calculator
    const treeBtn = document.getElementById("calc-tree-btn");
    if (treeBtn) {
      const runTree = () => {
        const m = parseInt(document.getElementById("tree-m").value, 10) || 2;
        const i = parseInt(document.getElementById("tree-i").value, 10) || 12;
        const expr = (document.getElementById("tree-expr").value || "+ - * 2 3 5 / ^ 2 3 4").trim();
        const out = document.getElementById("tree-output");

        const n = m * i + 1;
        const l = (m - 1) * i + 1;
        const edges = n - 1;

        // Evaluate Prefix or Postfix
        const tokens = expr.split(/\s+/).filter(Boolean);
        const isOp = (t) => ["+", "-", "*", "/", "^"].includes(t);
        const applyOp = (op, a, b) => {
          if (op === "+") return a + b;
          if (op === "-") return a - b;
          if (op === "*") return a * b;
          if (op === "/") return b !== 0 ? a / b : NaN;
          if (op === "^") return Math.pow(a, b);
          return NaN;
        };

        let evalResult = "Không hợp lệ";
        let evalMode = "";
        if (tokens.length > 0) {
          if (isOp(tokens[0])) {
            evalMode = "Tiền tố (Prefix)";
            const st = [];
            for (let k = tokens.length - 1; k >= 0; k--) {
              const tk = tokens[k];
              if (isOp(tk)) {
                const a = st.pop();
                const b = st.pop();
                st.push(applyOp(tk, a, b));
              } else {
                st.push(parseFloat(tk));
              }
            }
            if (st.length === 1 && !isNaN(st[0])) evalResult = st[0];
          } else {
            evalMode = "Hậu tố (Postfix)";
            const st = [];
            for (let k = 0; k < tokens.length; k++) {
              const tk = tokens[k];
              if (isOp(tk)) {
                const b = st.pop();
                const a = st.pop();
                st.push(applyOp(tk, a, b));
              } else {
                st.push(parseFloat(tk));
              }
            }
            if (st.length === 1 && !isNaN(st[0])) evalResult = st[0];
          }
        }

        out.innerHTML = `
          <div class="theory-box">
            <ul>
              <li><strong>Cây ${m}-phân đầy đủ (Full ${m}-ary tree) có i = ${i} đỉnh trong:</strong><br/>
                • Tổng số đỉnh: <strong><code>n = m·i + 1 = ${m}×${i} + 1 = ${n}</code></strong> đỉnh<br/>
                • Số đỉnh lá (leaves): <strong><code>l = (m - 1)·i + 1 = ${m - 1}×${i} + 1 = ${l}</code></strong> lá<br/>
                • Tổng số cạnh của cây: <strong><code>e = n - 1 = ${edges}</code></strong> cạnh
              </li>
              <li style="margin-top:0.45rem;"><strong>Tính biểu thức ${evalMode}:</strong> <code>${escapeHtml(expr)}</code><br/>
                👉 Giá trị kết quả = <strong style="color:var(--success);font-size:1.15rem;"><code>${evalResult}</code></strong>
              </li>
            </ul>
          </div>
        `;
      };
      treeBtn.addEventListener("click", runTree);
      runTree();
    }

    // 5. Recurrence Relation & Master Theorem Solver
    const recBtn = document.getElementById("calc-rec-btn");
    if (recBtn) {
      const runRec = () => {
        const c1 = parseFloat(document.getElementById("rec-c1").value) || 0;
        const c2 = parseFloat(document.getElementById("rec-c2").value) || 0;
        const a0 = parseFloat(document.getElementById("rec-a0").value) || 0;
        const a1 = parseFloat(document.getElementById("rec-a1").value) || 0;

        const ma = parseFloat(document.getElementById("mst-a").value) || 1;
        const mb = parseFloat(document.getElementById("mst-b").value) || 2;
        const md = parseFloat(document.getElementById("mst-d").value) || 0;
        const out = document.getElementById("rec-output");

        // Characteristic equation: r^2 - c1*r - c2 = 0
        const delta = c1 * c1 + 4 * c2;
        let recFormula = "";
        if (Math.abs(delta) < 1e-9) {
          const r0 = c1 / 2;
          const alpha = a0;
          const beta = r0 !== 0 ? (a1 - alpha * r0) / r0 : 0;
          recFormula = `Nghiệm kép <strong><code>r₀ = ${r0}</code></strong> &rArr; <strong><code>a_n = (${alpha.toFixed(2)} + ${beta.toFixed(2)}·n)·(${r0})^n</code></strong>`;
        } else if (delta > 0) {
          const r1 = (c1 + Math.sqrt(delta)) / 2;
          const r2 = (c1 - Math.sqrt(delta)) / 2;
          // alpha + beta = a0; alpha*r1 + beta*r2 = a1
          const alpha = (a1 - a0 * r2) / (r1 - r2);
          const beta = a0 - alpha;
          const fmt = (x) => (Number.isInteger(Math.round(x * 1000) / 1000) ? Math.round(x) : x.toFixed(2));
          recFormula = `2 nghiệm phân biệt: <strong><code>r₁ = ${fmt(r1)}, r₂ = ${fmt(r2)}</code></strong><br/>👉 Công thức tổng quát: <strong><code>a_n = (${fmt(alpha)})·(${fmt(r1)})^n + (${fmt(beta)})·(${fmt(r2)})^n</code></strong>`;
        } else {
          recFormula = `Δ = ${delta} &lt; 0 (Nghiệm phức liên hợp)`;
        }

        // First 6 terms: a0..a5
        const seq = [a0, a1];
        for (let k = 2; k <= 6; k++) {
          seq.push(c1 * seq[k - 1] + c2 * seq[k - 2]);
        }

        // Master Theorem
        const bd = Math.pow(mb, md);
        let masterRes = "";
        if (Math.abs(ma - bd) < 1e-9) {
          masterRes = `Vì <code>a = b^d = ${bd}</code> &rArr; <strong><code>Θ(n^${md} log n)</code></strong> ${md === 0 ? "= <strong><code>Θ(log n)</code></strong>" : md === 1 ? "= <strong><code>Θ(n log n)</code></strong>" : ""}`;
        } else if (ma < bd) {
          masterRes = `Vì <code>a = ${ma} &lt; b^d = ${bd}</code> &rArr; <strong><code>Θ(n^${md})</code></strong>`;
        } else {
          const logVal = Math.log(ma) / Math.log(mb);
          const logStr = Number.isInteger(Math.round(logVal * 1000) / 1000) ? Math.round(logVal) : `log_${mb}(${ma}) ≈ ${logVal.toFixed(2)}`;
          masterRes = `Vì <code>a = ${ma} &gt; b^d = ${bd}</code> &rArr; <strong><code>Θ(n^(${logStr}))</code></strong>`;
        }

        out.innerHTML = `
          <div class="theory-box">
            <ul>
              <li>Phương trình đặc trưng: <strong><code>r² - (${c1})r - (${c2}) = 0</code></strong> (Δ = ${delta})</li>
              <li>${recFormula}</li>
              <li>7 số hạng đầu (a₀ &rarr; a₆): <strong class="mono" style="color:var(--accent);">${seq.join(", ")}</strong></li>
              <li style="margin-top:0.4rem;"><strong>Định lý Master cho T(n) = ${ma}·T(n/${mb}) + c·n^${md}:</strong><br/>👉 ${masterRes}</li>
            </ul>
          </div>
        `;
      };
      recBtn.addEventListener("click", runRec);
      runRec();
    }

    // 6. Special Graphs & Planar Euler Calculator
    const grBtn = document.getElementById("calc-gr-btn");
    if (grBtn) {
      const runGr = () => {
        const n = parseInt(document.getElementById("gr-n").value, 10) || 4;
        const m = parseInt(document.getElementById("gr-m").value, 10) || 3;
        const v = parseInt(document.getElementById("gr-v").value, 10) || 12;
        const deg = parseInt(document.getElementById("gr-deg").value, 10) || 3;
        const out = document.getElementById("gr-output");

        const knEdges = (n * (n - 1)) / 2;
        const knEuler = n >= 3 && (n - 1) % 2 === 0 ? "Có Chu trình Euler (bậc chẵn)" : n === 2 ? "Có Đường đi Euler" : "Không có Chu trình Euler (bậc lẻ)";
        const qnVerts = Math.pow(2, n);
        const qnEdges = n * Math.pow(2, n - 1);
        const kmnEdges = m * n;

        const sumDeg = v * deg;
        const planarEdges = sumDeg / 2;
        const planarRegions = Number.isInteger(planarEdges) ? planarEdges - v + 2 : "Không hợp lệ (v×deg phải chẵn)";

        out.innerHTML = `
          <div class="theory-box">
            <ul>
              <li><strong>K_${n} (Đầy đủ):</strong> ${n} đỉnh, <strong><code>${knEdges} cạnh</code></strong>, bậc ${n - 1}, sắc số χ = ${n} • <em>${knEuler}</em></li>
              <li><strong>C_${n} (Vòng) &amp; W_${n} (Bánh xe):</strong> C_${n} có ${n} đỉnh, ${n} cạnh (χ = ${n % 2 === 0 ? 2 : 3}) | W_${n} có ${n + 1} đỉnh, <strong><code>${2 * n} cạnh</code></strong> (χ = ${n % 2 === 0 ? 3 : 4})</li>
              <li><strong>Q_${n} (${n}-Cube):</strong> <strong><code>2^${n} = ${qnVerts} đỉnh</code></strong>, <strong><code>${n}·2^${n - 1} = ${qnEdges} cạnh</code></strong>, bậc ${n}, χ = 2</li>
              <li><strong>K_(${m},${n}) (Phân đôi đầy đủ):</strong> ${m + n} đỉnh, <strong><code>${m}×${n} = ${kmnEdges} cạnh</code></strong>, χ = 2</li>
              <li style="margin-top:0.35rem;"><strong>Đồ thị phẳng đều (${v} đỉnh, mỗi đỉnh bậc ${deg}):</strong><br/>
                • Số cạnh (Định lý bắt tay): <strong><code>e = (${v} × ${deg}) / 2 = ${planarEdges} cạnh</code></strong><br/>
                • Số miền (Công thức Euler r = e - v + 2): <strong><code>r = ${planarEdges} - ${v} + 2 = ${planarRegions} miền</code></strong>
              </li>
            </ul>
          </div>
        `;
      };
      grBtn.addEventListener("click", runGr);
      runGr();
    }

    // 7. Bitwise & Base Converter
    const bitBtn = document.getElementById("calc-bit-btn");
    if (bitBtn) {
      const runBit = () => {
        const aRaw = (document.getElementById("bit-a").value || "").replace(/[^01]/g, "");
        const bRaw = (document.getElementById("bit-b").value || "").replace(/[^01]/g, "");
        const dec = parseInt(document.getElementById("base-dec").value, 10) || 0;
        const out = document.getElementById("bit-output");

        const len = Math.max(aRaw.length, bRaw.length, 1);
        const aPad = aRaw.padStart(len, "0");
        const bPad = bRaw.padStart(len, "0");

        let orStr = "", andStr = "", xorStr = "";
        for (let i = 0; i < len; i++) {
          const ba = aPad[i] === "1" ? 1 : 0;
          const bb = bPad[i] === "1" ? 1 : 0;
          orStr += ba | bb;
          andStr += ba & bb;
          xorStr += ba ^ bb;
        }
        const group4 = (s) => s.replace(/(.{4})/g, "$1 ").trim();

        out.innerHTML = `
          <div class="theory-box">
            <ul>
              <li><strong>Bitwise OR (∨):</strong> <code style="color:var(--accent);font-weight:700;">${group4(orStr)}</code></li>
              <li><strong>Bitwise AND (∧):</strong> <code style="color:var(--success);font-weight:700;">${group4(andStr)}</code></li>
              <li><strong>Bitwise XOR (⊕):</strong> <code style="color:var(--warning);font-weight:700;">${group4(xorStr)}</code></li>
              <li style="margin-top:0.35rem;"><strong>Đổi cơ số của (${dec})₁₀:</strong><br/>
                • Nhị phân (Base 2): <strong><code>(${dec.toString(2)})₂</code></strong><br/>
                • Bát phân (Base 8): <strong><code>(${dec.toString(8)})₈</code></strong><br/>
                • Thập lục phân (Base 16 - Hex): <strong><code>(${dec.toString(16).toUpperCase()})₁₆</code></strong>
              </li>
            </ul>
          </div>
        `;
      };
      bitBtn.addEventListener("click", runBit);
      runBit();
    }

    // 8. Function & Relation Counter
    const fnBtn = document.getElementById("calc-fn-btn");
    if (fnBtn) {
      const runFn = () => {
        const m = parseInt(document.getElementById("fn-m").value, 10) || 1;
        const n = parseInt(document.getElementById("fn-n").value, 10) || 1;
        const out = document.getElementById("fn-output");

        const totalFuncs = BigInt(n) ** BigInt(m);
        const oneToOne = m <= n ? permBig(n, m) : 0n;
        const bijections = m === n ? factorialBig(n) : 0n;

        // Onto functions from m to n using Inclusion-Exclusion: sum_{k=0..n} (-1)^k C(n,k) (n-k)^m
        let ontoCount = 0n;
        if (m >= n) {
          for (let k = 0; k <= n; k++) {
            const term = combBig(n, k) * (BigInt(n - k) ** BigInt(m));
            if (k % 2 === 0) ontoCount += term;
            else ontoCount -= term;
          }
        }

        const powerSetA = 2n ** BigInt(m);
        const relOnA = 2n ** BigInt(m * m);
        const reflOnA = 2n ** BigInt(m * m - m);

        out.innerHTML = `
          <div class="theory-box">
            <ul>
              <li>Số tập con của A (<code>|P(A)|</code>): <strong><code>2^${m} = ${powerSetA.toString()}</code></strong></li>
              <li><strong>Tổng số hàm f: A &rarr; B:</strong> <strong><code>n^m = ${n}^${m} = ${totalFuncs.toString()}</code></strong> hàm</li>
              <li><strong>Số hàm Đơn ánh (One-to-one / Injective):</strong> <strong><code>${m <= n ? `P(${n}, ${m}) = ${oneToOne.toString()}` : "0 (vì m > n)"}</code></strong></li>
              <li><strong>Số hàm Toàn ánh (Onto / Surjective):</strong> <strong><code>${m >= n ? ontoCount.toString() : "0 (vì m < n)"}</code></strong></li>
              <li><strong>Số hàm Song ánh (Bijection):</strong> <strong><code>${m === n ? `${n}! = ${bijections.toString()}` : "0 (vì m ≠ n)"}</code></strong></li>
              <li>Số quan hệ 2 ngôi trên A: <strong><code>2^(${m}²) = ${relOnA.toString()}</code></strong> (Số quan hệ phản xạ = <strong><code>2^(${m * m - m}) = ${reflOnA.toString()}</code></strong>)</li>
            </ul>
          </div>
        `;
      };
      fnBtn.addEventListener("click", runFn);
      runFn();
    }

    // 9. Pseudorandom Numbers & Alphabet Affine Cipher (Teacher Phu's PDF 4.15 & 4.16)
    const prngBtn = document.getElementById("calc-prng-btn");
    if (prngBtn) {
      const runPrng = () => {
        const pa = parseInt(document.getElementById("prng-a").value, 10) || 0;
        const pc = parseInt(document.getElementById("prng-c").value, 10) || 0;
        const pm = parseInt(document.getElementById("prng-m").value, 10) || 16;
        const px0 = parseInt(document.getElementById("prng-x0").value, 10) || 0;

        const word = (document.getElementById("cip-word").value || "STOP").toUpperCase().replace(/[^A-Z]/g, "");
        const ca = parseInt(document.getElementById("cip-a").value, 10) || 1;
        const cb = parseInt(document.getElementById("cip-b").value, 10) || 0;
        const out = document.getElementById("prng-output");

        const seq = [px0];
        const steps = [];
        for (let k = 1; k <= 5; k++) {
          const prev = seq[k - 1];
          const next = (((pa * prev + pc) % pm) + pm) % pm;
          seq.push(next);
          if (k <= 3) steps.push(`x_${k} = (${pa}×${prev} + ${pc}) mod ${pm} = ${pa * prev + pc} mod ${pm} = ${next}`);
        }

        let cipherWord = "";
        const cipSteps = [];
        for (const ch of word) {
          const x = ch.charCodeAt(0) - 65;
          const y = (((ca * x + cb) % 26) + 26) % 26;
          const outCh = String.fromCharCode(65 + y);
          cipherWord += outCh;
          cipSteps.push(`${ch}=${x} &rarr; (${ca}×${x}+${cb}) mod 26 = ${ca * x + cb} mod 26 = ${y} (${outCh})`);
        }

        out.innerHTML = `
          <div class="theory-box">
            <ul>
              <li><strong>Dãy số giả ngẫu nhiên (x₀ &rarr; x₅):</strong> <strong class="mono" style="color:var(--accent);">${seq.join(", ")}</strong><br/>
                <span class="mono" style="font-size:0.86rem;color:var(--text-secondary);">${steps.join("  |  ")}</span>
              </li>
              <li style="margin-top:0.45rem;"><strong>Mã hóa "${escapeHtml(word)}" với f(x) = (${ca}x + ${cb}) mod 26:</strong><br/>
                👉 Bản mã thu được: <strong class="mono" style="color:var(--success);font-size:1.18rem;">${escapeHtml(cipherWord)}</strong><br/>
                <span class="mono" style="font-size:0.85rem;color:var(--text-secondary);">${cipSteps.join("<br/>")}</span>
              </li>
            </ul>
          </div>
        `;
      };
      prngBtn.addEventListener("click", runPrng);
      runPrng();
    }

    // 10. Greedy Change-Making, Exact Master C1/C2 & Sort Step Tracer (Teacher Phu's PDF 3.4, 3.5, 3.6, 6.5)
    const grdBtn = document.getElementById("calc-grd-btn");
    if (grdBtn) {
      const runGrd = () => {
        const coins = (document.getElementById("grd-coins").value || "10, 5, 2, 1")
          .split(",")
          .map((s) => parseInt(s.trim(), 10))
          .filter((v) => !isNaN(v) && v > 0)
          .sort((a, b) => b - a);
        let rem = parseInt(document.getElementById("grd-amount").value, 10) || 23;
        const origAmount = rem;

        const arrInit = (document.getElementById("srt-arr").value || "5, 3, 4, 1, 2")
          .split(",")
          .map((s) => parseFloat(s.trim()))
          .filter((v) => !isNaN(v));

        const ea = parseFloat(document.getElementById("emst-a").value) || 2;
        const eb = parseFloat(document.getElementById("emst-b").value) || 2;
        const ec = parseFloat(document.getElementById("emst-c").value) || 1;
        const ef1 = parseFloat(document.getElementById("emst-f1").value) || 1;
        const out = document.getElementById("grd-output");

        // Greedy Change-Making
        let totalCoins = 0;
        const coinBreakdown = [];
        for (const c of coins) {
          const cnt = Math.floor(rem / c);
          if (cnt > 0) {
            totalCoins += cnt;
            coinBreakdown.push(`${cnt} đồng mệnh giá ${c}`);
            rem -= cnt * c;
          }
        }

        // Exact Master C1, C2: f(n) = a*f(n/b) + c
        const c1Val = ea !== 1 ? ef1 + ec / (ea - 1) : ef1;
        const c2Val = ea !== 1 ? -ec / (ea - 1) : 0;

        // Insertion Sort & Bubble Sort passes
        const insArr = [...arrInit];
        const insPasses = [];
        for (let j = 1; j < insArr.length; j++) {
          const key = insArr[j];
          let k = j - 1;
          while (k >= 0 && insArr[k] > key) {
            insArr[k + 1] = insArr[k];
            k--;
          }
          insArr[k + 1] = key;
          insPasses.push(`Vòng ${j} (chèn ${key}): [${insArr.join(", ")}]`);
        }

        const bubArr = [...arrInit];
        const bubPasses = [];
        for (let i = 0; i < bubArr.length - 1; i++) {
          for (let j = 0; j < bubArr.length - 1 - i; j++) {
            if (bubArr[j] > bubArr[j + 1]) {
              const tmp = bubArr[j];
              bubArr[j] = bubArr[j + 1];
              bubArr[j + 1] = tmp;
            }
          }
          bubPasses.push(`Bước ${i + 1}: [${bubArr.join(", ")}]`);
        }

        out.innerHTML = `
          <div class="theory-box">
            <ul>
              <li><strong>Đổi tiền Greedy cho n = ${origAmount}:</strong> Tổng tối thiểu = <strong style="color:var(--success);">${totalCoins} đồng xu</strong> (${coinBreakdown.join(" + ") || "0"})</li>
              <li><strong>Công thức Master chính xác cho f(n) = ${ea}·f(n/${eb}) + ${ec} (với f(1) = ${ef1}):</strong><br/>
                👉 <strong><code>C₁ = f(1) + c/(a-1) = ${Number.isInteger(c1Val) ? c1Val : c1Val.toFixed(2)}</code></strong>  |  <strong><code>C₂ = -c/(a-1) = ${Number.isInteger(c2Val) ? c2Val : c2Val.toFixed(2)}</code></strong><br/>
                👉 <code>f(n) = (${Number.isInteger(c1Val) ? c1Val : c1Val.toFixed(2)})·n^(log_${eb} ${ea}) + (${Number.isInteger(c2Val) ? c2Val : c2Val.toFixed(2)})</code>
              </li>
              <li style="margin-top:0.35rem;"><strong>Insertion Sort từng vòng:</strong><br/>
                <span class="mono" style="font-size:0.85rem;color:var(--accent);">${insPasses.join("  →  ")}</span>
              </li>
              <li><strong>Bubble Sort từng bước:</strong><br/>
                <span class="mono" style="font-size:0.85rem;color:var(--warning);">${bubPasses.join("  →  ")}</span>
              </li>
            </ul>
          </div>
        `;
      };
      grdBtn.addEventListener("click", runGrd);
      runGrd();
    }
  }

  // ==================== FLASHCARDS ENGINE ====================
  let fcList = [];
  let fcIndex = 0;
  let fcViewMode = "single";
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
        `<option value="ALL">📚 Tất cả Câu hỏi &amp; Công thức (${allCards.length} thẻ)</option>` +
        `<option value="ALL_QUESTIONS">🔥 Tất cả Câu hỏi FE MAD101 (${qCount} câu)</option>` +
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
      if (fcViewMode === "grid") renderGridCards();
    }

    function renderCurrentCard() {
      cardEl.classList.remove("flipped");
      const counterEl = document.getElementById("fc-counter");
      const frontCat = document.getElementById("fc-front-cat");
      const frontTerm = document.getElementById("fc-front-term");
      const frontOpts = document.getElementById("fc-front-options");
      const backCorrectBox = document.getElementById("fc-back-correct-box");
      const backAns = document.getElementById("fc-back-ans");
      const masterBtn = document.getElementById("fc-master-btn");

      if (fcList.length === 0) {
        counterEl.textContent = "0 / 0";
        frontCat.textContent = "Trống";
        frontTerm.textContent = "Không tìm thấy thẻ nào khớp với bộ lọc!";
        if (frontOpts) frontOpts.innerHTML = "";
        if (backCorrectBox) backCorrectBox.style.display = "none";
        backAns.textContent = "Hãy thử đổi bộ lọc hoặc xóa từ khóa.";
        masterBtn.disabled = true;
        return;
      }

      masterBtn.disabled = false;
      const item = fcList[fcIndex];
      const isMastered = state.masteredFlashcards.includes(item.id);
      counterEl.textContent = `Thẻ ${fcIndex + 1} / ${fcList.length}`;
      frontCat.textContent = item.category + (isMastered ? " • ✓ Đã thuộc" : "");
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
                      <div class="fc-opt-item">
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

    cardEl.addEventListener("click", () => cardEl.classList.toggle("flipped"));

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
      showToast("Đã trộn ngẫu nhiên bộ Flashcards!");
    });

    document.getElementById("fc-master-btn").addEventListener("click", () => {
      if (!fcList.length) return;
      const item = fcList[fcIndex];
      if (state.masteredFlashcards.includes(item.id)) {
        state.masteredFlashcards = state.masteredFlashcards.filter((id) => id !== item.id);
      } else {
        state.masteredFlashcards.push(item.id);
        showToast("Đã đánh dấu thuộc thẻ này!");
      }
      saveState();
      renderCurrentCard();
    });

    catSelect.addEventListener("change", filterCards);
    filterSelect.addEventListener("change", filterCards);
    if (searchInput) searchInput.addEventListener("input", filterCards);

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

    populateCategories();
    filterCards();
  }

  // ==================== QUIZ & EOS REAL EXAM SIMULATOR ENGINE ====================
  let quizSession = {
    mode: "exam",
    topicName: "",
    questions: [],
    currentIndex: 0,
    userAnswers: {},
    flagged: {},
    peekedAnswer: {},
    showOriginalImg: {},
    submitted: false,
    initialSeconds: 3600,
    timerSeconds: 3600,
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

      // Put the 3 real exams right at the top of the dropdown!
      const realExams = topics.filter((t) => t.startsWith("Đề FE "));
      const chapterTopics = topics.filter((t) => !t.startsWith("Đề FE "));

      topicSelect.innerHTML =
        `<optgroup label="🏆 3 Đề Thi Thật FE Các Mùa Trước (Nguyên Bản 50 Câu)">` +
        realExams
          .map((t) => {
            const c = allQs.filter((q) => q.topic === t).length;
            return `<option value="${escapeHtml(t)}">🏆 ${escapeHtml(t)}</option>`;
          })
          .join("") +
        `</optgroup>` +
        `<optgroup label="🎲 Tổng Hợp &amp; Ôn Câu Sai">` +
        `<option value="ALL">🎲 Tất cả Ngân hàng Câu hỏi FE MAD101 (${allQs.length} câu)</option>` +
        `<option value="WRONG">🔥 Các câu từng làm sai (${state.wrongQuestionIds.length} câu)</option>` +
        `</optgroup>` +
        `<optgroup label="📚 Luyện Theo Từng Chương">` +
        chapterTopics
          .map((t) => {
            const c = allQs.filter((q) => q.topic === t).length;
            return `<option value="${escapeHtml(t)}">${escapeHtml(t)} (${c} câu)</option>`;
          })
          .join("") +
        `</optgroup>`;

      if (prevVal && Array.from(topicSelect.options).some((o) => o.value === prevVal)) {
        topicSelect.value = prevVal;
      } else if (realExams.length > 0) {
        topicSelect.value = realExams[0];
      }
    }

    function startQuiz(customPool) {
      clearInterval(quizSession.timerInterval);
      const topic = topicSelect.value;
      const mode = modeSelect.value;
      const maxCount = parseInt(countSelect.value, 10) || 999;

      let pool = customPool || getAllQuestions();
      if (!customPool) {
        if (topic === "WRONG") {
          pool = pool.filter((q) => state.wrongQuestionIds.includes(q.id));
          if (pool.length === 0) {
            showToast("Bạn chưa có câu trả lời sai nào! Hệ thống sẽ mở Đề FE SU26_815892.");
            topicSelect.value = "Đề FE SU26_815892 (50 câu)";
            pool = getAllQuestions().filter((q) => q.topic === topicSelect.value);
          }
        } else if (topic !== "ALL") {
          pool = pool.filter((q) => q.topic === topic);
        }

        // Preserve exact Q1 -> Q50 order for the 3 official past exams; shuffle only when topic === "ALL"
        const isOfficialExam = topic.startsWith("Đề FE ");
        if (!isOfficialExam && mode === "exam") {
          pool = [...pool].sort(() => Math.random() - 0.5);
        }
        pool = pool.slice(0, maxCount);
      }

      // Standard EOS FE duration: 60 minutes (3600s) for ~50-question exam, or 72s per question
      const customMins = window.__customExamMinutes;
      window.__customExamMinutes = null;
      const durationSecs =
        customMins
          ? customMins * 60
          : pool.length >= 45
          ? 60 * 60
          : Math.max(15 * 60, pool.length * 72);

      quizSession = {
        mode,
        topicName: customPool ? "Các câu làm sai / chưa làm trong đề vừa thi" : topicSelect.value,
        questions: pool,
        currentIndex: 0,
        userAnswers: {},
        flagged: {},
        peekedAnswer: {},
        showOriginalImg: {},
        submitted: false,
        initialSeconds: durationSecs,
        timerSeconds: durationSecs,
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
            showToast("⏰ Đã hết thời gian làm bài (60 phút)! Hệ thống tự động nộp bài.");
            submitQuiz();
          }
        }, 1000);
      } else {
        timerBox.style.display = "none";
      }

      document.getElementById("quiz-result-banner").style.display = "none";
      const reviewSheet = document.getElementById("quiz-full-review-sheet");
      if (reviewSheet) {
        reviewSheet.style.display = "none";
        reviewSheet.innerHTML = "";
      }
      renderQuizQuestion();
      renderQuizPalette();
    }

    function formatTimeMMSS(totalSecs) {
      const m = Math.floor(Math.max(0, totalSecs) / 60).toString().padStart(2, "0");
      const s = (Math.max(0, totalSecs) % 60).toString().padStart(2, "0");
      return `${m}:${s}`;
    }

    function updateTimerDisplay() {
      const box = document.getElementById("quiz-timer-box");
      if (!box) return;
      box.textContent = `⏱️ ${formatTimeMMSS(quizSession.timerSeconds)}`;
      if (quizSession.timerSeconds <= 300) {
        box.style.background = "rgba(239, 68, 68, 0.2)";
        box.style.color = "var(--danger)";
      } else {
        box.style.background = "";
        box.style.color = "";
      }
    }

    function renderQuizQuestion() {
      const qList = quizSession.questions;
      const idx = quizSession.currentIndex;
      const q = qList[idx];
      if (!q) return;

      const answeredCount = Object.keys(quizSession.userAnswers).length;
      const progEl = document.getElementById("quiz-progress-summary");
      if (progEl) {
        progEl.textContent = `Đã làm: ${answeredCount} / ${qList.length} câu (${Math.round((answeredCount / Math.max(1, qList.length)) * 100)}%)`;
      }

      document.getElementById("quiz-q-meta").innerHTML = `
        <span class="badge badge-warning">${escapeHtml(q.topic)}</span>
        <span style="color:var(--text-primary);font-size:0.95rem;font-weight:800;">Câu ${idx + 1} / ${qList.length}</span>
        ${q.hasDiagram ? `<span class="badge badge-success">📐 Có hình vẽ minh họa</span>` : ""}
      `;
      document.getElementById("quiz-q-text").textContent = q.question;

      // Image / Diagram display
      const imgBox = document.getElementById("quiz-q-image-box");
      const imgEl = document.getElementById("quiz-q-image");
      const toggleImgBtn = document.getElementById("quiz-toggle-img-btn");

      if (q.imgFile) {
        const shouldShowImg = q.hasDiagram || quizSession.showOriginalImg[idx];
        if (toggleImgBtn) {
          toggleImgBtn.style.display = "inline-flex";
          toggleImgBtn.textContent = shouldShowImg
            ? "🙈 Ẩn hình gốc câu hỏi"
            : "🖼️ Xem hình gốc câu hỏi";
        }
        if (shouldShowImg && imgBox && imgEl) {
          imgBox.style.display = "block";
          imgEl.src = q.imgFile;
        } else if (imgBox) {
          imgBox.style.display = "none";
        }
      } else {
        if (toggleImgBtn) toggleImgBtn.style.display = "none";
        if (imgBox) imgBox.style.display = "none";
      }

      const flagBtn = document.getElementById("quiz-flag-btn");
      flagBtn.textContent = quizSession.flagged[idx] ? "🚩 Đã gắn cờ" : "🏳️ Gắn cờ xem lại";

      const chosen = quizSession.userAnswers[idx];
      const chosenArr = chosen === undefined ? [] : Array.isArray(chosen) ? chosen : [chosen];
      const correctArr = getCorrectArray(q);

      const showAnswerNow =
        quizSession.submitted ||
        quizSession.peekedAnswer[idx] ||
        (quizSession.mode === "practice" && isQuestionCompletedInPractice(q, chosen));

      const peekBtn = document.getElementById("quiz-peek-ans-btn");
      if (peekBtn) {
        if (quizSession.submitted) {
          peekBtn.style.display = "none";
        } else {
          peekBtn.style.display = "inline-flex";
          peekBtn.textContent = showAnswerNow ? "🙈 Ẩn lời giải câu này" : "👁️ Xem lời giải câu này";
        }
      }

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
        const hasChosen = chosen !== undefined;
        const isCorrect = isAnswerCorrect(q, chosen);
        const rightLetters = correctArr.map((i) => `${letters[i]}. ${q.options[i]}`).join(" | ");
        expContainer.style.display = "block";
        expContainer.innerHTML = `
          <div style="font-weight:800;font-size:1.02rem;margin-bottom:0.45rem;color:${
            !hasChosen ? "var(--warning)" : isCorrect ? "var(--success)" : "var(--danger)"
          };">
            ${
              !hasChosen
                ? `💡 Đáp án đúng: ${escapeHtml(rightLetters)}`
                : isCorrect
                ? `✅ Chính xác! Đáp án đúng: ${escapeHtml(rightLetters)}`
                : `❌ Chưa đúng! Đáp án đúng là: ${escapeHtml(rightLetters)}`
            }
          </div>
          <div style="color:var(--text-primary);white-space:pre-line;line-height:1.65;"><strong>📖 Lời giải chi tiết &amp; Mẹo giải nhanh:</strong>\n${escapeHtml(q.explanation)}</div>
        `;
      } else {
        expContainer.style.display = "none";
      }

      document.getElementById("quiz-prev-btn").disabled = idx === 0;
      document.getElementById("quiz-next-btn").disabled = idx === qList.length - 1;
    }

    function renderQuizPalette() {
      const grid = document.getElementById("quiz-palette-grid");
      grid.innerHTML = quizSession.questions
        .map((q, i) => {
          let cls = "q-dot";
          if (i === quizSession.currentIndex) cls += " current";
          if (quizSession.flagged[i]) cls += " flagged";

          const chosen = quizSession.userAnswers[i];
          if (chosen !== undefined) {
            if (quizSession.submitted || quizSession.mode === "practice" || quizSession.peekedAnswer[i]) {
              cls += isAnswerCorrect(q, chosen) ? " right" : " wrong";
            } else {
              cls += " answered";
            }
          } else if (quizSession.submitted) {
            cls += " wrong";
          }
          return `<button class="${cls}" onclick="jumpToQuestion(${i})">${i + 1}</button>`;
        })
        .join("");
    }

    window.selectQuizOption = function (optIdx) {
      if (quizSession.submitted) return;
      const idx = quizSession.currentIndex;
      const q = quizSession.questions[idx];
      quizSession.userAnswers[idx] = optIdx;

      if (quizSession.mode === "practice") {
        if (!isAnswerCorrect(q, optIdx)) {
          if (!state.wrongQuestionIds.includes(q.id)) state.wrongQuestionIds.push(q.id);
        } else {
          state.wrongQuestionIds = state.wrongQuestionIds.filter((id) => id !== q.id);
        }
        saveState();
      }
      renderQuizQuestion();
      renderQuizPalette();
    };

    window.jumpToQuestion = function (idx) {
      quizSession.currentIndex = idx;
      renderQuizQuestion();
      renderQuizPalette();
    };

    const toggleImgBtn = document.getElementById("quiz-toggle-img-btn");
    if (toggleImgBtn) {
      toggleImgBtn.addEventListener("click", () => {
        const idx = quizSession.currentIndex;
        const q = quizSession.questions[idx];
        if (!q) return;
        const currentlyShown = q.hasDiagram
          ? quizSession.showOriginalImg[idx] !== false
          : Boolean(quizSession.showOriginalImg[idx]);
        if (q.hasDiagram) {
          q.hasDiagram = !currentlyShown;
        } else {
          quizSession.showOriginalImg[idx] = !currentlyShown;
        }
        renderQuizQuestion();
      });
    }

    const peekBtn = document.getElementById("quiz-peek-ans-btn");
    if (peekBtn) {
      peekBtn.addEventListener("click", () => {
        const idx = quizSession.currentIndex;
        quizSession.peekedAnswer[idx] = !quizSession.peekedAnswer[idx];
        renderQuizQuestion();
        renderQuizPalette();
      });
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

    function renderFullReviewSheet(filterMode = "ALL") {
      const sheet = document.getElementById("quiz-full-review-sheet");
      if (!sheet) return;
      sheet.style.display = "block";
      const letters = ["A", "B", "C", "D", "E", "F"];

      const itemsHtml = quizSession.questions
        .map((q, idx) => {
          const chosen = quizSession.userAnswers[idx];
          const isCorrect = isAnswerCorrect(q, chosen);
          if (filterMode === "WRONG" && isCorrect) return "";
          if (filterMode === "CORRECT" && !isCorrect) return "";

          const correctArr = getCorrectArray(q);
          const chosenText =
            chosen !== undefined
              ? `${letters[chosen]}. ${q.options[chosen]}`
              : "Chưa chọn đáp án (Bỏ trống)";
          const correctText = correctArr.map((i) => `${letters[i]}. ${q.options[i]}`).join(" | ");

          return `
            <div class="theory-box" style="margin-bottom:1rem;border-left:4px solid ${
              isCorrect ? "var(--success)" : "var(--danger)"
            };">
              <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.5rem;">
                <div>
                  <span class="badge ${isCorrect ? "badge-success" : "badge-warning"}">
                    ${isCorrect ? "✓ ĐÚNG" : chosen === undefined ? "⚪ BỎ TRỐNG" : "✗ SAI"}
                  </span>
                  <strong style="margin-left:0.4rem;">Câu ${idx + 1} / ${quizSession.questions.length}</strong>
                </div>
                <button class="btn btn-secondary btn-sm" onclick="jumpToQuestion(${idx}); window.scrollTo({top:220, behavior:'smooth'});">
                  🔎 Nhảy tới câu ${idx + 1}
                </button>
              </div>

              <div style="font-weight:700;font-size:1.03rem;white-space:pre-line;margin-bottom:0.65rem;">${escapeHtml(q.question)}</div>

              ${
                q.hasDiagram && q.imgFile
                  ? `<div style="margin:0.65rem 0;background:#fff;padding:0.5rem;border-radius:8px;text-align:center;border:1px solid var(--border);">
                      <img src="${escapeHtml(q.imgFile)}" alt="Hình câu ${idx + 1}" style="max-width:100%;max-height:320px;object-fit:contain;" />
                    </div>`
                  : ""
              }

              <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:0.45rem;margin-bottom:0.65rem;">
                ${q.options
                  .map((opt, oIdx) => {
                    const isRight = correctArr.includes(oIdx);
                    const isUser = chosen === oIdx;
                    let bg = "var(--bg-input)";
                    let border = "1px solid var(--border)";
                    if (isRight) {
                      bg = "rgba(16, 185, 129, 0.14)";
                      border = "1px solid var(--success)";
                    } else if (isUser && !isRight) {
                      bg = "rgba(239, 68, 68, 0.14)";
                      border = "1px solid var(--danger)";
                    }
                    return `
                      <div style="padding:0.5rem 0.75rem;border-radius:6px;background:${bg};border:${border};font-size:0.93rem;">
                        <strong>${letters[oIdx]}.</strong> ${escapeHtml(opt)}
                        ${isRight ? ` <strong style="color:var(--success);">✓</strong>` : ""}
                        ${isUser && !isRight ? ` <strong style="color:var(--danger);">(Bạn chọn)</strong>` : ""}
                      </div>
                    `;
                  })
                  .join("")}
              </div>

              <div style="font-size:0.93rem;padding:0.65rem 0.85rem;background:var(--bg-input);border-radius:8px;white-space:pre-line;line-height:1.6;">
                <div style="margin-bottom:0.3rem;">
                  <strong>Bạn chọn:</strong> <span style="color:${isCorrect ? "var(--success)" : "var(--danger)"};font-weight:700;">${escapeHtml(chosenText)}</span>
                  &nbsp;•&nbsp;
                  <strong>Đáp án đúng:</strong> <span style="color:var(--success);font-weight:700;">${escapeHtml(correctText)}</span>
                </div>
                <div><strong>💡 Lời giải chi tiết:</strong>\n${escapeHtml(q.explanation)}</div>
              </div>
            </div>
          `;
        })
        .join("");

      sheet.innerHTML = `
        <div class="card">
          <div class="card-header" style="flex-wrap:wrap;gap:0.75rem;">
            <div>
              <h3 class="card-title">📋 Bảng Đáp Án &amp; Lời Giải Chi Tiết Toàn Bộ Đề Thi (${quizSession.questions.length} Câu)</h3>
              <p style="font-size:0.88rem;color:var(--text-secondary);margin-top:0.2rem;">Xem đầy đủ câu hỏi, hình vẽ, đáp án đúng và hướng dẫn giải từng bước.</p>
            </div>
            <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
              <button class="btn ${filterMode === "ALL" ? "" : "btn-secondary"} btn-sm" onclick="filterReviewSheet('ALL')">Tất cả (${quizSession.questions.length})</button>
              <button class="btn ${filterMode === "WRONG" ? "" : "btn-secondary"} btn-sm" onclick="filterReviewSheet('WRONG')">❌ Chỉ câu Sai / Bỏ trống</button>
              <button class="btn ${filterMode === "CORRECT" ? "" : "btn-secondary"} btn-sm" onclick="filterReviewSheet('CORRECT')">✅ Chỉ câu Đúng</button>
            </div>
          </div>
          <div>${itemsHtml || `<div class="theory-box">Không có câu hỏi nào trong mục lọc này!</div>`}</div>
        </div>
      `;
    }

    window.filterReviewSheet = function (mode) {
      renderFullReviewSheet(mode);
    };

    window.toggleFullReviewSheet = function () {
      const sheet = document.getElementById("quiz-full-review-sheet");
      if (!sheet) return;
      if (sheet.style.display === "block") {
        sheet.style.display = "none";
      } else {
        renderFullReviewSheet("ALL");
        sheet.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    window.retryMissedQuestionsInSession = function () {
      const missed = quizSession.questions.filter((q, i) => !isAnswerCorrect(q, quizSession.userAnswers[i]));
      if (missed.length === 0) {
        showToast("🎉 Bạn đã làm đúng tuyệt đối 100% tất cả các câu trong đề này!");
        return;
      }
      startQuiz(missed);
      showToast(`🔥 Đã tạo bài luyện lại gồm ${missed.length} câu vừa làm sai / bỏ trống!`);
    };

    function submitQuiz() {
      clearInterval(quizSession.timerInterval);
      quizSession.submitted = true;
      let correctCount = 0;
      let wrongCount = 0;
      let unansweredCount = 0;

      quizSession.questions.forEach((q, i) => {
        const ans = quizSession.userAnswers[i];
        if (ans === undefined) {
          unansweredCount++;
          if (!state.wrongQuestionIds.includes(q.id)) state.wrongQuestionIds.push(q.id);
        } else if (isAnswerCorrect(q, ans)) {
          correctCount++;
          state.wrongQuestionIds = state.wrongQuestionIds.filter((id) => id !== q.id);
        } else {
          wrongCount++;
          if (!state.wrongQuestionIds.includes(q.id)) state.wrongQuestionIds.push(q.id);
        }
      });

      const total = quizSession.questions.length;
      const pct = total ? Math.round((correctCount / total) * 100) : 0;
      const score10 = total ? ((correctCount / total) * 10).toFixed(2) : "0.00";
      const elapsedSecs = Math.max(1, quizSession.initialSeconds - quizSession.timerSeconds);
      const elapsedStr =
        quizSession.mode === "exam"
          ? `${Math.floor(elapsedSecs / 60)} phút ${elapsedSecs % 60} giây / ${Math.floor(quizSession.initialSeconds / 60)}:00`
          : "Chế độ Luyện tập";

      state.quizAttempts++;
      if (pct > state.quizBestScore) state.quizBestScore = pct;
      saveState();
      populateTopics();

      const isPass = parseFloat(score10) >= 4.0;
      const banner = document.getElementById("quiz-result-banner");
      banner.style.display = "block";
      banner.innerHTML = `
        <div class="card" style="border:2px solid ${
          pct >= 80 ? "var(--success)" : isPass ? "var(--accent)" : "var(--danger)"
        };margin-bottom:1.25rem;">
          <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1.1rem;">
            <div>
              <div style="display:flex;align-items:center;gap:0.6rem;flex-wrap:wrap;margin-bottom:0.35rem;">
                <span class="badge ${isPass ? "badge-success" : "badge-warning"}">
                  ${pct >= 80 ? "🌟 EXCELLENT (Đạt Điểm Giỏi)" : isPass ? "✅ PASSED (Qua Môn FE ≥ 4.0)" : "⚠️ CHƯA ĐẠT (< 4.0 - Cần ôn thêm)"}
                </span>
                <span class="mono" style="font-size:0.88rem;color:var(--text-secondary);">⏱️ Thời gian làm bài: ${elapsedStr}</span>
              </div>
              <h3 style="font-size:1.5rem;font-weight:800;margin-bottom:0.25rem;">
                🏆 Điểm Thi FE: <span style="color:${pct >= 80 ? "var(--success)" : "var(--warning)"};">${score10} / 10.0 điểm</span>
                <span style="font-size:1.08rem;color:var(--text-secondary);font-weight:600;">(${correctCount}/${total} câu đúng • ${pct}%)</span>
              </h3>
              <div style="font-size:0.94rem;color:var(--text-secondary);display:flex;gap:1.1rem;flex-wrap:wrap;margin-top:0.35rem;">
                <span>✅ <strong>Số câu Đúng:</strong> ${correctCount} câu</span>
                <span>❌ <strong>Số câu Sai:</strong> ${wrongCount} câu</span>
                <span>⚪ <strong>Chưa chọn:</strong> ${unansweredCount} câu</span>
              </div>
            </div>
            <div style="display:flex;gap:0.55rem;flex-wrap:wrap;">
              <button class="btn btn-success" onclick="toggleFullReviewSheet()">📋 Xem Toàn Bộ ${total} Câu &amp; Lời Giải Chi Tiết</button>
              ${
                wrongCount + unansweredCount > 0
                  ? `<button class="btn btn-warning" onclick="retryMissedQuestionsInSession()">🔥 Làm lại ${wrongCount + unansweredCount} câu Sai / Bỏ trống</button>`
                  : ""
              }
              <button class="btn btn-secondary" onclick="document.getElementById('quiz-start-btn').click()">🔄 Thi lại từ đầu</button>
            </div>
          </div>
        </div>
      `;

      renderQuizQuestion();
      renderQuizPalette();
      renderFullReviewSheet("ALL");
    }

    document.getElementById("quiz-submit-btn").addEventListener("click", submitQuiz);
    startBtn.addEventListener("click", () => startQuiz());

    // Keyboard navigation in Quiz tab (Left/Right arrows, 1..6 or A..F for options)
    window.addEventListener("keydown", (e) => {
      const activePanel = document.querySelector(".tab-panel.active");
      if (!activePanel || activePanel.id !== "tab-quiz") return;
      if (["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) return;

      if (e.code === "ArrowRight") {
        document.getElementById("quiz-next-btn").click();
      } else if (e.code === "ArrowLeft") {
        document.getElementById("quiz-prev-btn").click();
      } else if (!quizSession.submitted) {
        const keyMap = {
          Digit1: 0, KeyA: 0,
          Digit2: 1, KeyB: 1,
          Digit3: 2, KeyC: 2,
          Digit4: 3, KeyD: 3,
          Digit5: 4, KeyE: 4,
          Digit6: 5, KeyF: 5
        };
        if (keyMap[e.code] !== undefined) {
          const q = quizSession.questions[quizSession.currentIndex];
          if (q && keyMap[e.code] < q.options.length) {
            window.selectQuizOption(keyMap[e.code]);
          }
        }
      }
    });

    populateTopics();
    startQuiz();
  }

  // ==================== INTERACTIVE CLASSROOM (8 EASY-TO-UNDERSTAND LESSONS) ====================
  let activeLessonIdx = 0;
  let lessonMiniAnswers = {};

  window.switchTheoryMode = function (mode) {
    const classView = document.getElementById("theory-classroom-view");
    const sumView = document.getElementById("theory-summary-view");
    const btnClass = document.getElementById("theory-mode-classroom-btn");
    const btnSum = document.getElementById("theory-mode-summary-btn");
    if (!classView || !sumView) return;

    if (mode === "classroom") {
      classView.style.display = "grid";
      sumView.style.display = "none";
      if (btnClass) btnClass.className = "btn btn-sm";
      if (btnSum) btnSum.className = "btn btn-secondary btn-sm";
    } else {
      classView.style.display = "none";
      sumView.style.display = "block";
      if (btnClass) btnClass.className = "btn btn-secondary btn-sm";
      if (btnSum) btnSum.className = "btn btn-sm";
    }
  };

  function initClassroomLessons() {
    const lessons = window.MAD101_LESSONS || [];
    const sidebar = document.getElementById("lessons-sidebar");
    const stage = document.getElementById("lesson-stage");
    if (!sidebar || !stage || lessons.length === 0) return;

    function renderLessons() {
      const lesson = lessons[activeLessonIdx];
      const letters = ["A", "B", "C", "D"];

      sidebar.innerHTML = lessons
        .map((ls, i) => {
          const isCurrent = i === activeLessonIdx;
          return `
            <button
              class="btn ${isCurrent ? "" : "btn-secondary"}"
              style="width:100%;justify-content:flex-start;text-align:left;padding:0.7rem 0.85rem;line-height:1.35;white-space:normal;"
              onclick="selectClassroomLesson(${i})"
            >
              <div>
                <div style="font-weight:800;font-size:0.93rem;">${escapeHtml(ls.title)}</div>
                <div style="font-size:0.78rem;opacity:0.85;margin-top:0.15rem;">${escapeHtml(ls.badge)}</div>
              </div>
            </button>
          `;
        })
        .join("");

      const miniQuizHtml = (lesson.miniQuiz || [])
        .map((mq, qIdx) => {
          const key = `${lesson.id}_${qIdx}`;
          const picked = lessonMiniAnswers[key];
          const answered = picked !== undefined;
          const isRight = picked === mq.ans;

          return `
            <div style="padding:0.95rem 1.05rem;background:var(--bg-input);border:1px solid ${
              answered ? (isRight ? "var(--success)" : "var(--danger)") : "var(--border)"
            };border-radius:10px;margin-bottom:0.85rem;">
              <div style="font-weight:700;font-size:0.98rem;margin-bottom:0.65rem;">
                Câu kiểm tra ${qIdx + 1}: ${escapeHtml(mq.q)}
              </div>
              <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:0.5rem;">
                ${mq.opts
                  .map((opt, oIdx) => {
                    let cls = "btn btn-secondary btn-sm";
                    let extraStyle = "justify-content:flex-start;text-align:left;padding:0.55rem 0.8rem;white-space:normal;";
                    if (answered) {
                      if (oIdx === mq.ans) {
                        cls = "btn btn-success btn-sm";
                      } else if (oIdx === picked && oIdx !== mq.ans) {
                        extraStyle += "border-color:var(--danger);background:rgba(239,68,68,0.18);color:var(--danger);";
                      }
                    }
                    return `
                      <button class="${cls}" style="${extraStyle}" onclick="answerLessonMiniQuiz('${lesson.id}', ${qIdx}, ${oIdx})">
                        <strong>${letters[oIdx]}.</strong>&nbsp;${escapeHtml(opt)}
                      </button>
                    `;
                  })
                  .join("")}
              </div>
              ${
                answered
                  ? `<div style="margin-top:0.65rem;padding:0.6rem 0.8rem;border-radius:8px;background:${
                      isRight ? "rgba(16,185,129,0.12)" : "rgba(239,68,68,0.12)"
                    };font-size:0.92rem;line-height:1.55;">
                      <strong style="color:${isRight ? "var(--success)" : "var(--danger)"};">
                        ${isRight ? "✅ Chuẩn xác! Bạn đã hiểu bản chất phần này!" : `❌ Chưa đúng! Đáp án đúng là ${letters[mq.ans]}.`}
                      </strong>
                      <div style="margin-top:0.2rem;color:var(--text-primary);">💡 ${escapeHtml(mq.exp)}</div>
                    </div>`
                  : ""
              }
            </div>
          `;
        })
        .join("");

      stage.innerHTML = `
        <div class="card">
          <div class="card-header" style="border-bottom:1px solid var(--border);padding-bottom:0.9rem;margin-bottom:1rem;">
            <div>
              <div style="display:flex;align-items:center;gap:0.55rem;flex-wrap:wrap;margin-bottom:0.3rem;">
                <span class="badge badge-warning">Bài Giảng ${lesson.num} / ${lessons.length}</span>
                <span class="badge badge-success">${escapeHtml(lesson.badge)}</span>
              </div>
              <h3 class="card-title" style="font-size:1.35rem;">${escapeHtml(lesson.title)}</h3>
              <p style="font-size:0.95rem;color:var(--text-secondary);margin-top:0.25rem;">${escapeHtml(lesson.subtitle)}</p>
            </div>
          </div>

          <!-- Block 1: Real-life Analogy -->
          <div class="theory-box" style="margin-bottom:1rem;border-left:4px solid var(--accent);background:rgba(139,92,246,0.08);">
            <h4 style="color:var(--accent);font-size:1.06rem;">🧠 1. Hiểu Bản Chất Trong 60 Giây (Ví Dụ Đời Thường)</h4>
            <div style="white-space:pre-line;line-height:1.7;font-size:0.98rem;">${escapeHtml(lesson.analogy)}</div>
          </div>

          <!-- Block 2: Core Rules -->
          <div class="theory-box" style="margin-bottom:1rem;">
            <h4 style="font-size:1.06rem;">📐 2. Công Thức &amp; Quy Tắc Cốt Lõi Cần Nhớ</h4>
            <ul>
              ${lesson.coreRules
                .map((r) => `<li style="white-space:pre-line;margin-bottom:0.55rem;line-height:1.65;">${escapeHtml(r)}</li>`)
                .join("")}
            </ul>
          </div>

          <!-- Block 3: Worked Example from Real FE -->
          <div class="theory-box" style="margin-bottom:1rem;border-left:4px solid var(--success);background:rgba(16,185,129,0.07);">
            <h4 style="color:var(--success);font-size:1.06rem;">✍️ 3. Thầy Giải Mẫu Từng Bước (Câu Đề Thi Thật FPT)</h4>
            <div style="white-space:pre-line;line-height:1.7;font-size:0.96rem;">${escapeHtml(lesson.workedExample)}</div>
          </div>

          <!-- Block 4: Traps from 6 Real Exams -->
          <div class="theory-box" style="margin-bottom:1.15rem;border-left:4px solid var(--warning);background:rgba(245,158,11,0.08);">
            <h4 style="color:var(--warning);font-size:1.06rem;">⚠️ 4. Cảnh Báo Bẫy Hay Mất Điểm (Từ 6 Đề Thật FA25 – SU26)</h4>
            <ul>
              ${lesson.traps
                .map((t) => `<li style="white-space:pre-line;margin-bottom:0.45rem;line-height:1.6;">${escapeHtml(t)}</li>`)
                .join("")}
            </ul>
          </div>

          <!-- Block 5: Mini-Quiz Check -->
          <div style="margin-bottom:1.15rem;">
            <h4 style="font-size:1.06rem;font-weight:800;margin-bottom:0.65rem;">✅ 5. Kiểm Tra Nhanh Hiểu Bài Ngay Tại Chỗ</h4>
            ${miniQuizHtml}
          </div>

          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.6rem;padding-top:0.95rem;border-top:1px solid var(--border);">
            <button class="btn btn-secondary" ${activeLessonIdx === 0 ? "disabled" : ""} onclick="selectClassroomLesson(${activeLessonIdx - 1})">&larr; Bài giảng trước</button>
            <button class="btn btn-success" onclick="switchTab('quiz')">📝 Sang Phòng Thi Thử 60 Phút &rarr;</button>
            <button class="btn" ${activeLessonIdx === lessons.length - 1 ? "disabled" : ""} onclick="selectClassroomLesson(${activeLessonIdx + 1})">Bài giảng tiếp theo &rarr;</button>
          </div>
        </div>
      `;
    }

    window.selectClassroomLesson = function (idx) {
      if (idx < 0 || idx >= lessons.length) return;
      activeLessonIdx = idx;
      renderLessons();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.answerLessonMiniQuiz = function (lessonId, qIdx, optIdx) {
      lessonMiniAnswers[`${lessonId}_${qIdx}`] = optIdx;
      renderLessons();
    };

    renderLessons();
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
    initClassroomLessons();
    renderChapters();
    initToolsTab();
    initFlashcardsTab();
    initQuizTab();
  });
})();
