(function () {
  const STORAGE_KEY = "pro192_study_state_v1";

  const defaultState = {
    theme: "dark",
    fontScale: 1.05,
    completedChapters: [],
    masteredFlashcards: [],
    wrongQuestionIds: [],
    quizBestScore: 0,
    quizAttempts: 0
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
    clearTimeout(window.__proToastTimer);
    window.__proToastTimer = setTimeout(() => {
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
    return [...(window.PRO192_DATA.quizQuestions || [])];
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

  function getAllFlashcards() {
    const letters = ["A", "B", "C", "D", "E", "F"];
    const coreCards = (window.PRO192_DATA.flashcards || []).map((c) => {
      const hasOpts = Array.isArray(c.options) && c.options.length > 0 && typeof c.correctIndex === "number";
      const correctText = hasOpts
        ? `${letters[c.correctIndex] || c.correctIndex + 1}. ${c.options[c.correctIndex]}`
        : "";
      return {
        ...c,
        category: `Trọng tâm: ${c.category}`,
        correctIndexes: hasOpts ? [c.correctIndex] : [],
        correctText,
        isQuestion: hasOpts
      };
    });

    const questionCards = getAllQuestions().map((q) => {
      const correctArr = getCorrectArray(q);
      const correctText = correctArr
        .map((i) => `${letters[i] || i + 1}. ${q.options[i]}`)
        .join("\n");
      return {
        id: `q_${q.id}`,
        category: q.topic,
        term: q.question,
        imgFile: q.imgFile || null,
        options: q.options,
        correctIndexes: correctArr,
        correctText,
        answer: q.explanation,
        isQuestion: true
      };
    });

    return [...coreCards, ...questionCards];
  }

  // ==================== IMAGE LIGHTBOX ====================
  window.openProLightbox = function (src) {
    const overlay = document.getElementById("pro-lightbox-overlay");
    const img = document.getElementById("pro-lightbox-img");
    if (!overlay || !img || !src) return;
    img.src = src;
    overlay.style.display = "flex";
  };

  window.closeProLightbox = function () {
    const overlay = document.getElementById("pro-lightbox-overlay");
    if (overlay) overlay.style.display = "none";
  };

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") window.closeProLightbox();
  });

  // ==================== THEME, FONT SCALE & TABS ====================
  function applyTheme() {
    const btn = document.getElementById("theme-toggle-btn");
    if (state.theme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
      if (btn) btn.textContent = "🌙 Dark";
    } else {
      document.documentElement.removeAttribute("data-theme");
      if (btn) btn.textContent = "☀️ Light";
    }
  }

  function applyFontScale() {
    const scale = state.fontScale || 1.05;
    document.documentElement.style.setProperty("--font-scale", String(scale));
    document.querySelectorAll(".font-btn").forEach((btn) => {
      btn.classList.toggle("active", Math.abs(parseFloat(btn.dataset.scale) - scale) < 0.02);
    });
  }

  window.setFontScale = function (scale) {
    state.fontScale = scale;
    applyFontScale();
    saveState();
    showToast(`Đã đổi cỡ chữ (${Math.round(scale * 100)}%)`);
  };

  window.switchTab = function (tabId) {
    document.querySelectorAll(".nav-tab").forEach((t) => {
      t.classList.toggle("active", t.dataset.tab === tabId);
    });
    document.querySelectorAll(".tab-panel").forEach((p) => {
      p.classList.toggle("active", p.id === `tab-${tabId}`);
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  function initTabs() {
    document.querySelectorAll(".nav-tab").forEach((btn) => {
      btn.addEventListener("click", () => switchTab(btn.dataset.tab));
    });
    const themeBtn = document.getElementById("theme-toggle-btn");
    if (themeBtn) {
      themeBtn.addEventListener("click", () => {
        state.theme = state.theme === "dark" ? "light" : "dark";
        applyTheme();
        saveState();
      });
    }
  }

  // ==================== DASHBOARD & GLOBAL SEARCH ====================
  function renderFeAnalysis() {
    const container = document.getElementById("fe-analysis-container");
    if (!container || !window.PRO192_DATA.feAnalysis) return;
    const fe = window.PRO192_DATA.feAnalysis;

    container.innerHTML = `
      <div class="card-header" style="margin-bottom:0.8rem;">
        <div>
          <h2 class="card-title">📊 Phân Tích Trọng Tâm Đề Thi PE &amp; FE PRO192 (FPT University)</h2>
          <p style="font-size:0.93rem;color:var(--text-secondary);margin-top:0.25rem;line-height:1.55;">
            ${escapeHtml(fe.difficultySummary)}
          </p>
        </div>
        <span class="badge badge-success">Java SE • PE + FE</span>
      </div>
      <div class="grid-2" style="gap:0.9rem;">
        ${fe.distribution
          .map(
            (d) => `
          <div class="theory-box" style="margin:0;">
            <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;margin-bottom:0.55rem;">
              <strong style="color:var(--accent);font-size:0.98rem;">${escapeHtml(d.topic)}</strong>
              <span class="badge">${escapeHtml(d.weight)}</span>
            </div>
            <ul style="margin:0;padding-left:1.15rem;">
              ${d.keyPoints.map((kp) => `<li style="margin-bottom:0.3rem;font-size:0.91rem;">${escapeHtml(kp)}</li>`).join("")}
            </ul>
          </div>`
          )
          .join("")}
      </div>
    `;
  }

  function updateDashboardStats() {
    const totalChapters = window.PRO192_DATA.chapters.length;
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
      document.getElementById("stat-fc-sub").textContent = `Đã thuộc ${fcPct}% thẻ trắc nghiệm`;

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

      (window.PRO192_DATA.peTemplates || []).forEach((tpl) => {
        if (
          tpl.title.toLowerCase().includes(q) ||
          tpl.summary.toLowerCase().includes(q) ||
          tpl.code.toLowerCase().includes(q)
        ) {
          matches.push({
            type: tpl.badge,
            title: tpl.title,
            desc: tpl.summary,
            tab: "cheatsheet"
          });
        }
      });

      window.PRO192_DATA.chapters.forEach((ch) => {
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
        resultsBox.innerHTML = `<div style="padding:0.9rem;color:var(--text-secondary);">Không tìm thấy kết quả cho "<strong>${escapeHtml(q)}</strong>".</div>`;
      } else {
        resultsBox.innerHTML = matches
          .slice(0, 12)
          .map(
            (m) => `
          <div style="padding:0.75rem 1rem;border-bottom:1px solid var(--border);cursor:pointer;" onclick="switchTab('${m.tab}')">
            <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.25rem;">
              <span class="badge">${escapeHtml(m.type)}</span>
              <strong style="font-size:0.93rem;">${escapeHtml(m.title.slice(0, 120))}${m.title.length > 120 ? "..." : ""}</strong>
            </div>
            <div style="font-size:0.86rem;color:var(--text-secondary);white-space:pre-line;line-height:1.5;">${escapeHtml(m.desc.slice(0, 260))}${m.desc.length > 260 ? "..." : ""}</div>
          </div>`
          )
          .join("");
      }
      resultsBox.style.display = "block";
    });
  }

  // ==================== PE CODE TEMPLATES ====================
  function renderPeTemplates() {
    const container = document.getElementById("pe-templates-container");
    if (!container || !window.PRO192_DATA.peTemplates) return;

    container.innerHTML = window.PRO192_DATA.peTemplates
      .map(
        (tpl, idx) => `
      <div class="card" style="margin-bottom:1rem;background:var(--bg-input);">
        <div class="card-header" style="margin-bottom:0.55rem;">
          <div>
            <span class="badge badge-warning" style="margin-bottom:0.35rem;display:inline-block;">${escapeHtml(tpl.badge)}</span>
            <h3 class="card-title" style="font-size:1.05rem;">${escapeHtml(tpl.title)}</h3>
            <p style="font-size:0.9rem;color:var(--text-secondary);margin-top:0.2rem;">${escapeHtml(tpl.summary)}</p>
          </div>
          <button class="btn btn-sm" onclick="copyProTemplate(${idx})">📋 Copy Code</button>
        </div>

        <div class="theory-box" style="margin-bottom:0.75rem;">
          <strong>💡 Mẹo ăn trọn điểm câu này:</strong>
          <ul style="margin:0.3rem 0 0 1.2rem;">
            ${tpl.tips.map((tip) => `<li style="margin-bottom:0.2rem;font-size:0.9rem;">${escapeHtml(tip)}</li>`).join("")}
          </ul>
        </div>

        <pre class="mono" style="margin:0;padding:1rem;border-radius:10px;background:var(--bg-card);border:1px solid var(--border);overflow-x:auto;font-size:0.86rem;line-height:1.6;color:var(--text-primary);"><code>${escapeHtml(tpl.code)}</code></pre>
      </div>`
      )
      .join("");
  }

  window.copyProTemplate = function (idx) {
    const tpl = (window.PRO192_DATA.peTemplates || [])[idx];
    if (!tpl) return;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(tpl.code).then(
        () => showToast(`📋 Đã copy mẫu code ${tpl.badge.split("•")[0].trim()}!`),
        () => showToast("Không thể tự động copy, bạn hãy bôi đen code và bấm Ctrl+C nhé!")
      );
    } else {
      showToast("Bạn hãy bôi đen đoạn code và bấm Ctrl+C!");
    }
  };

  // ==================== INTERACTIVE LESSONS & CHAPTER SUMMARIES ====================
  let currentLessonIdx = 0;

  function renderLessonsModule() {
    const lessons = window.PRO192_LESSONS || [];
    const pillsEl = document.getElementById("lesson-selector-pills");
    const contentEl = document.getElementById("lesson-content-box");
    const modeLessonsBtn = document.getElementById("pro-mode-lessons-btn");
    const modeSummaryBtn = document.getElementById("pro-mode-summary-btn");
    const lessonsView = document.getElementById("pro-lessons-view");
    const summaryView = document.getElementById("pro-summary-view");

    if (modeLessonsBtn && modeSummaryBtn) {
      modeLessonsBtn.addEventListener("click", () => {
        lessonsView.style.display = "block";
        summaryView.style.display = "none";
        modeLessonsBtn.className = "btn btn-sm";
        modeSummaryBtn.className = "btn btn-secondary btn-sm";
      });
      modeSummaryBtn.addEventListener("click", () => {
        lessonsView.style.display = "none";
        summaryView.style.display = "block";
        modeSummaryBtn.className = "btn btn-sm";
        modeLessonsBtn.className = "btn btn-secondary btn-sm";
      });
    }

    function drawLesson(idx) {
      currentLessonIdx = idx;
      const L = lessons[idx];
      if (!L) return;

      pillsEl.innerHTML = lessons
        .map(
          (item, i) => `
        <button class="btn ${i === idx ? "" : "btn-secondary"} btn-sm" onclick="selectProLesson(${i})">
          ${escapeHtml(item.num)}: ${escapeHtml(item.chapter.replace(/^Chương \d+:\s*/, ""))}
        </button>`
        )
        .join("");

      const letters = ["A", "B", "C", "D"];
      contentEl.innerHTML = `
        <div class="card">
          <div class="card-header" style="margin-bottom:0.85rem;">
            <div>
              <div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-bottom:0.35rem;">
                <span class="badge">${escapeHtml(L.chapter)}</span>
                <span class="badge badge-success">⏱️ ${escapeHtml(L.duration)}</span>
                <span class="badge badge-warning">${escapeHtml(L.level)}</span>
              </div>
              <h2 class="card-title" style="font-size:1.25rem;">${escapeHtml(L.num)}: ${escapeHtml(L.title)}</h2>
            </div>
          </div>

          <div class="theory-box" style="border-left:4px solid var(--accent);margin-bottom:1rem;">
            <strong>💡 Ví dụ đời thường giúp nhớ ngay bản chất:</strong>
            <div style="margin-top:0.35rem;line-height:1.65;">${escapeHtml(L.analogy)}</div>
          </div>

          ${L.sections
            .map(
              (sec) => `
            <div class="theory-box" style="margin-bottom:0.9rem;">
              <h3 style="color:var(--accent);font-size:1.03rem;margin-bottom:0.45rem;">${escapeHtml(sec.heading)}</h3>
              <div style="white-space:pre-line;line-height:1.72;">${escapeHtml(sec.text)}</div>
            </div>`
            )
            .join("")}

          <div class="theory-box" style="border-left:4px solid var(--warning);margin-bottom:1.1rem;">
            <strong style="color:var(--warning);">⚠️ Bẫy cực hay gặp trong đề FE / PE chương này:</strong>
            <ul style="margin:0.45rem 0 0 1.2rem;">
              ${L.feTraps.map((t) => `<li style="margin-bottom:0.35rem;line-height:1.6;">${escapeHtml(t)}</li>`).join("")}
            </ul>
          </div>

          <div class="card" style="background:var(--bg-input);margin-bottom:0;">
            <h3 class="card-title" style="font-size:1.05rem;margin-bottom:0.75rem;">✅ Mini-Quiz Kiểm Tra Hiểu Bài Ngay (${L.miniQuiz.length} câu)</h3>
            ${L.miniQuiz
              .map(
                (mq, qIdx) => `
              <div style="padding:0.85rem;border:1px solid var(--border);border-radius:10px;margin-bottom:0.75rem;background:var(--bg-card);">
                <div style="font-weight:700;margin-bottom:0.55rem;">Câu ${qIdx + 1}: ${escapeHtml(mq.q)}</div>
                <div style="display:grid;gap:0.45rem;">
                  ${mq.opts
                    .map(
                      (o, oIdx) => `
                    <button class="btn btn-secondary btn-sm" style="justify-content:flex-start;text-align:left;white-space:normal;"
                      id="mq-btn-${idx}-${qIdx}-${oIdx}"
                      onclick="checkProMiniQuiz(${idx}, ${qIdx}, ${oIdx})">
                      <strong>${letters[oIdx]}.</strong>&nbsp;${escapeHtml(o)}
                    </button>`
                    )
                    .join("")}
                </div>
                <div id="mq-fb-${idx}-${qIdx}" style="display:none;margin-top:0.6rem;padding:0.65rem 0.8rem;border-radius:8px;font-size:0.9rem;line-height:1.6;"></div>
              </div>`
              )
              .join("")}
          </div>

          <div style="display:flex;justify-content:space-between;margin-top:1rem;">
            <button class="btn btn-secondary" ${idx === 0 ? "disabled" : ""} onclick="selectProLesson(${idx - 1})">&larr; Bài trước</button>
            <button class="btn" ${idx === lessons.length - 1 ? "disabled" : ""} onclick="selectProLesson(${idx + 1})">Bài tiếp theo &rarr;</button>
          </div>
        </div>
      `;
    }

    window.selectProLesson = function (i) {
      if (i < 0 || i >= lessons.length) return;
      drawLesson(i);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.checkProMiniQuiz = function (lIdx, qIdx, chosen) {
      const mq = lessons[lIdx].miniQuiz[qIdx];
      const fb = document.getElementById(`mq-fb-${lIdx}-${qIdx}`);
      const letters = ["A", "B", "C", "D"];
      mq.opts.forEach((_, i) => {
        const b = document.getElementById(`mq-btn-${lIdx}-${qIdx}-${i}`);
        if (!b) return;
        b.className = "btn btn-secondary btn-sm";
        if (i === mq.ans) b.className = "btn btn-success btn-sm";
        else if (i === chosen && chosen !== mq.ans) b.className = "btn btn-danger btn-sm";
      });
      const isRight = chosen === mq.ans;
      fb.style.display = "block";
      fb.style.background = isRight ? "rgba(16,185,129,0.12)" : "rgba(239,68,68,0.12)";
      fb.style.border = `1px solid ${isRight ? "rgba(16,185,129,0.4)" : "rgba(239,68,68,0.4)"}`;
      fb.innerHTML = `<strong>${isRight ? "✅ Chuẩn xác! Bạn đã nắm chắc phần này!" : `❌ Chưa đúng! Đáp án đúng là ${letters[mq.ans]}.`}</strong><br/>${escapeHtml(mq.exp)}`;
    };

    if (lessons.length > 0) drawLesson(0);
  }

  function renderChapters() {
    const container = document.getElementById("chapters-container");
    if (!container) return;
    container.innerHTML = window.PRO192_DATA.chapters
      .map((ch) => {
        const done = state.completedChapters.includes(ch.id);
        return `
        <div class="card" style="margin-bottom:1.15rem;">
          <div class="card-header">
            <div>
              <div style="display:flex;gap:0.5rem;align-items:center;flex-wrap:wrap;margin-bottom:0.25rem;">
                <span class="badge">${escapeHtml(ch.badge)}</span>
                ${done ? `<span class="badge badge-success">✓ Đã hoàn thành</span>` : ""}
              </div>
              <h3 class="card-title">${escapeHtml(ch.title)}</h3>
              <p style="font-size:0.89rem;color:var(--text-secondary);margin-top:0.2rem;">${escapeHtml(ch.summary)}</p>
            </div>
            <button class="btn ${done ? "btn-success" : "btn-secondary"} btn-sm" onclick="toggleProChapter('${ch.id}')">
              ${done ? "✓ Đã học xong" : "Đánh dấu Đã học"}
            </button>
          </div>
          ${ch.blocks
            .map(
              (b) => `
            <div class="theory-box" style="margin-bottom:0.75rem;">
              <strong style="color:var(--accent);">${escapeHtml(b.heading)}</strong>
              <ul style="margin:0.45rem 0 0 1.15rem;">
                ${b.items.map((it) => `<li style="white-space:pre-line;margin-bottom:0.4rem;line-height:1.65;">${escapeHtml(it)}</li>`).join("")}
              </ul>
            </div>`
            )
            .join("")}
          <div class="theory-box" style="border-left:4px solid var(--success);margin-bottom:0;">
            <strong>🎯 Mẹo đi thi:</strong> ${escapeHtml(ch.examNote)}
          </div>
        </div>`;
      })
      .join("");
  }

  window.toggleProChapter = function (id) {
    if (state.completedChapters.includes(id)) {
      state.completedChapters = state.completedChapters.filter((x) => x !== id);
    } else {
      state.completedChapters.push(id);
    }
    saveState();
    renderChapters();
  };

  // ==================== 6 INTERACTIVE JAVA LAB TOOLS ====================
  function initJavaLabTools() {
    // 1. Access Modifier & Override Rule Checker
    const modBtn = document.getElementById("lab-mod-btn");
    if (modBtn) {
      const runMod = () => {
        const mod = document.getElementById("lab-mod-select").value;
        const scope = document.getElementById("lab-scope-select").value;
        const matrix = {
          public: { same_class: true, same_pkg: true, sub_diff_pkg: true, world: true },
          protected: { same_class: true, same_pkg: true, sub_diff_pkg: true, world: false },
          default: { same_class: true, same_pkg: true, sub_diff_pkg: false, world: false },
          private: { same_class: true, same_pkg: false, sub_diff_pkg: false, world: false }
        };
        const overrideAllowed = {
          public: "CHỈ được khai báo <code>public</code> ở lớp con (không thể thu hẹp!).",
          protected: "Được khai báo <code>protected</code> hoặc <code>public</code> ở lớp con.",
          default: "Được khai báo <code>default</code>, <code>protected</code> hoặc <code>public</code> (nếu lớp con cùng package).",
          private: "❌ <strong>KHÔNG thể Override!</strong> Phương thức <code>private</code> không được kế thừa xuống lớp con."
        };
        const allowed = matrix[mod][scope];
        let extraNote = "";
        if (mod === "protected" && scope === "sub_diff_pkg") {
          extraNote =
            "<br/><span style='color:var(--warning);'><strong>⚠️ Siêu bẫy FE:</strong> Ở package khác, lớp con <code>Child</code> CHỈ được truy cập qua <code>this.x</code> hoặc tham chiếu <code>Child c</code> — truy cập qua tham chiếu <code>Parent p = new Parent(); p.x;</code> sẽ báo <strong>Compile Error</strong>!</span>";
        }
        document.getElementById("lab-mod-output").innerHTML = `
          <div style="font-size:1.02rem;font-weight:800;color:${allowed ? "var(--success)" : "var(--danger)"};margin-bottom:0.45rem;">
            ${allowed ? "✅ ĐƯỢC PHÉP TRUY CẬP (Compile OK)" : "❌ BỊ TỪ CHỐI (Compile-Time Error)"}
          </div>
          <div style="line-height:1.65;">
            • <strong>Quy tắc Override cho <code>${mod}</code>:</strong> ${overrideAllowed[mod]}
            ${extraNote}
          </div>
        `;
      };
      modBtn.addEventListener("click", runMod);
      runMod();
    }

    // 2. Java String & Regex Tester (PE Q4)
    const strBtn = document.getElementById("lab-str-btn");
    if (strBtn) {
      const isPrimeDigit = (ch) => ["2", "3", "5", "7"].includes(ch);
      const runStr = () => {
        const raw = document.getElementById("lab-str-input").value;
        const op = document.getElementById("lab-str-op").value;
        const trimmed = raw.trim();
        const words = trimmed ? trimmed.split(/\s+/) : [];
        let resultHtml = "";
        let javaCode = "";

        if (op === "words") {
          resultHtml = `Số từ = <strong>${words.length}</strong><br/>Mảng từ: <code>[${words.map((w) => `"${escapeHtml(w)}"`).join(", ")}]</code>`;
          javaCode = `String[] words = str.trim().split("\\\\s+");\nint count = words.length;`;
        } else if (op === "palindrome") {
          const pals = words.filter((w) => w.length > 1 && w === w.split("").reverse().join(""));
          resultHtml = `Tìm thấy <strong>${pals.length}</strong> từ Palindrome (độ dài > 1): <code>[${pals.map((w) => `"${escapeHtml(w)}"`).join(", ")}]</code>`;
          javaCode = `boolean isPal = w.length() > 1 && w.equals(new StringBuilder(w).reverse().toString());`;
        } else if (op === "prime_digit") {
          const matched = words.filter((w) => [...w].some(isPrimeDigit));
          resultHtml = `Có <strong>${matched.length}</strong> từ chứa chữ số nguyên tố (2, 3, 5, 7): <code>[${matched.map((w) => `"${escapeHtml(w)}"`).join(", ")}]</code>`;
          javaCode = `for (char c : w.toCharArray()) {\n    if (c == '2' || c == '3' || c == '5' || c == '7') { count++; break; }\n}`;
        } else if (op === "rev_longest") {
          if (words.length === 0) {
            resultHtml = "Chuỗi rỗng!";
          } else {
            let maxIdx = 0;
            for (let i = 1; i < words.length; i++) {
              if (words[i].length > words[maxIdx].length) maxIdx = i;
            }
            const orig = words[maxIdx];
            const copy = [...words];
            copy[maxIdx] = orig.split("").reverse().join("");
            resultHtml = `Từ dài nhất đầu tiên: <code>"${escapeHtml(orig)}"</code> (index ${maxIdx})<br/>Chuỗi sau khi đảo: <strong><code>"${escapeHtml(copy.join(" "))}"</code></strong>`;
          }
          javaCode = `words[maxIdx] = new StringBuilder(words[maxIdx]).reverse().toString();\nreturn String.join(" ", words);`;
        } else if (op === "substring") {
          const parts = document.getElementById("lab-str-range").value.split(",").map((x) => parseInt(x.trim(), 10));
          const sIdx = Number.isFinite(parts[0]) ? parts[0] : 0;
          const eIdx = Number.isFinite(parts[1]) ? parts[1] : trimmed.length;
          if (sIdx < 0 || eIdx > trimmed.length || sIdx > eIdx) {
            resultHtml = `<span style="color:var(--danger);font-weight:700;">❌ StringIndexOutOfBoundsException!</span> (Độ dài chuỗi sau trim = ${trimmed.length}, yêu cầu 0 ≤ start ≤ end ≤ ${trimmed.length})`;
          } else {
            const sub = trimmed.slice(sIdx, eIdx);
            resultHtml = `<code>str.trim().substring(${sIdx}, ${eIdx})</code> = <strong><code>"${escapeHtml(sub)}"</code></strong> (gồm ${sub.length} ký tự, từ index ${sIdx} đến ${eIdx - 1})`;
          }
          javaCode = `String sub = str.trim().substring(${sIdx}, ${eIdx}); // Lấy [start, end - 1]`;
        }

        document.getElementById("lab-str-output").innerHTML = `
          <div style="line-height:1.65;margin-bottom:0.55rem;">${resultHtml}</div>
          <pre class="mono" style="margin:0;padding:0.65rem;border-radius:8px;background:var(--bg-card);border:1px solid var(--border);overflow-x:auto;font-size:0.83rem;">${escapeHtml(javaCode)}</pre>
        `;
      };
      strBtn.addEventListener("click", runStr);
      runStr();
    }

    // 3. Comparator & Sublist Sort Visualizer (PE Q3)
    const sortBtn = document.getElementById("lab-sort-btn");
    if (sortBtn) {
      const runSort = () => {
        const raw = document.getElementById("lab-sort-input").value;
        const mode = document.getElementById("lab-sort-mode").value;
        const rangeRaw = document.getElementById("lab-sort-range").value.trim().toLowerCase();

        const items = raw
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean)
          .map((pair) => {
            const [name, pStr] = pair.split(":");
            return { name: (name || "").trim(), price: parseInt((pStr || "0").trim(), 10) || 0 };
          });

        if (items.length === 0) {
          document.getElementById("lab-sort-output").innerHTML = "Hãy nhập danh sách dạng <code>Ford:50, Audi:30</code>!";
          return;
        }

        let start = 0;
        let endIncl = items.length - 1;
        let isSub = false;
        if (rangeRaw !== "all" && rangeRaw.includes(",")) {
          const [l, r] = rangeRaw.split(",").map((x) => parseInt(x.trim(), 10));
          if (Number.isFinite(l) && Number.isFinite(r) && l >= 0 && r >= l && r < items.length) {
            start = l;
            endIncl = r;
            isSub = !(start === 0 && endIncl === items.length - 1);
          }
        }

        const cmp = (a, b) => {
          if (mode === "name_asc_price_desc") {
            const c = a.name.localeCompare(b.name);
            return c !== 0 ? c : b.price - a.price;
          }
          if (mode === "price_asc_name_asc") {
            return a.price !== b.price ? a.price - b.price : a.name.localeCompare(b.name);
          }
          return b.price - a.price;
        };

        const result = items.map((x) => ({ ...x }));
        const slice = result.slice(start, endIncl + 1).sort(cmp);
        for (let i = start; i <= endIncl; i++) result[i] = slice[i - start];

        const cmpBody =
          mode === "name_asc_price_desc"
            ? `int c = o1.getName().compareTo(o2.getName());\n    return (c != 0) ? c : Integer.compare(o2.getPrice(), o1.getPrice());`
            : mode === "price_asc_name_asc"
            ? `int c = Integer.compare(o1.getPrice(), o2.getPrice());\n    return (c != 0) ? c : o1.getName().compareTo(o2.getName());`
            : `return Integer.compare(o2.getPrice(), o1.getPrice());`;

        const targetExpr = isSub ? `t.subList(${start}, ${endIncl + 1})` : `t`;
        const javaCode = `Collections.sort(${targetExpr}, (o1, o2) -> {\n    ${cmpBody}\n});`;

        document.getElementById("lab-sort-output").innerHTML = `
          <div style="margin-bottom:0.45rem;font-size:0.9rem;">
            <strong>Trước khi sort:</strong> <code>${items.map((x, i) => `[${i}]${escapeHtml(x.name)}:${x.price}`).join("  ")}</code><br/>
            <strong>Sau khi sort (${isSub ? `đoạn index ${start}..${endIncl}` : "toàn bộ"}):</strong>
            <div style="margin-top:0.3rem;">
              ${result
                .map((x, i) => {
                  const inSub = i >= start && i <= endIncl;
                  return `<span class="badge ${inSub ? "badge-success" : ""}" style="margin:0.15rem 0.2rem 0.15rem 0;">[${i}] ${escapeHtml(x.name)}:${x.price}</span>`;
                })
                .join("")}
            </div>
          </div>
          <pre class="mono" style="margin:0.5rem 0 0;padding:0.65rem;border-radius:8px;background:var(--bg-card);border:1px solid var(--border);overflow-x:auto;font-size:0.82rem;">${escapeHtml(javaCode)}</pre>
        `;
      };
      sortBtn.addEventListener("click", runSort);
      runSort();
    }

    // 4. Operator & Type Casting Trap Tracer
    const opBtn = document.getElementById("lab-op-btn");
    if (opBtn) {
      const presets = {
        inc: {
          code: "int x = 5;\nint y = x++ + ++x;\nSystem.out.println(x + \" \" + y);",
          steps: [
            "Khởi tạo: x = 5.",
            "Bước 1 — x++ (hậu tố): trả về 5, sau đó tăng x lên 6.",
            "Bước 2 — ++x (tiền tố): tăng x từ 6 lên 7, sau đó trả về 7.",
            "Bước 3 — Cộng: y = 5 + 7 = 12; x cuối cùng = 7."
          ],
          out: "7 12"
        },
        concat: {
          code: "System.out.println(1 + 2 + \"3\" + 4 + 5);\nSystem.out.println(\"3\" + 1 + 2);",
          steps: [
            "Java luôn tính toán tử `+` từ TRÁI sang PHẢI.",
            "Dòng 1: (1 + 2) = 3 → 3 + \"3\" = \"33\" → \"33\" + 4 = \"334\" → \"3345\".",
            "Dòng 2: gặp chuỗi \"3\" ngay từ đầu nên \"3\" + 1 = \"31\" → \"312\"."
          ],
          out: "3345  và  312"
        },
        byte_promo: {
          code: "byte b = 127;\nb++;          // OK! Tự ép kiểu ngầm (byte)(b + 1)\n// b = b + 1; // COMPILE ERROR vì b + 1 là int!",
          steps: [
            "b++ và b += 1 tự động ép kiểu ngầm nên biên dịch HỢP LỆ.",
            "Miền giá trị của byte là [-128..127] (8-bit bù 2).",
            "127 + 1 bị tràn số vòng (overflow) quay về -128."
          ],
          out: "b++ in ra -128 | b = b + 1 bị Compile Error"
        },
        short_circuit: {
          code: "int a = 1, b = 2;\nif (a > 5 && ++b > 2) {} // b vẫn = 2\nif (a > 5 &  ++b > 2) {} // b tăng lên 3!",
          steps: [
            "Với `&&`: vế trái `a > 5` đã là `false` ⇒ DỪNG SỚM, không chạy `++b`.",
            "Với `&`: toán tử đơn KHÔNG đoản mạch ⇒ VẪN chạy `++b`, khiến `b` tăng thêm 1."
          ],
          out: "Dùng && → b = 2 | Dùng & → b = 3"
        },
        int_cache: {
          code: "Integer a = 127, b = 127;\nInteger c = 128, d = 128;\nSystem.out.println((a == b) + \" \" + (c == d));",
          steps: [
            "Java Integer Cache lưu sẵn các đối tượng Integer trong khoảng [-128..127].",
            "a và b cùng trỏ vào 1 object `127` trong cache ⇒ a == b là true.",
            "128 nằm ngoài cache ⇒ tạo 2 object mới trên Heap ⇒ c == d là false (phải dùng c.equals(d)!)."
          ],
          out: "true false"
        },
        finally_ret: {
          code: "int f1() { int x = 1; try { return x; } finally { x = 2; } }\nint f2() { try { return 1; } finally { return 2; } }",
          steps: [
            "f1(): `return x` lưu tạm giá trị `1`, sau đó `finally` đổi `x = 2` nhưng không return ⇒ vẫn trả về `1`!",
            "f2(): `finally` có lệnh `return 2` nên GHI ĐÈ giá trị trả về trước đó ⇒ trả về `2`!"
          ],
          out: "f1() = 1  |  f2() = 2"
        }
      };
      const runOp = () => {
        const p = presets[document.getElementById("lab-op-preset").value];
        document.getElementById("lab-op-output").innerHTML = `
          <pre class="mono" style="margin:0 0 0.6rem;padding:0.65rem;border-radius:8px;background:var(--bg-card);border:1px solid var(--border);overflow-x:auto;font-size:0.83rem;">${escapeHtml(p.code)}</pre>
          <ol style="margin:0 0 0.55rem 1.2rem;line-height:1.6;font-size:0.9rem;">
            ${p.steps.map((s) => `<li>${escapeHtml(s)}</li>`).join("")}
          </ol>
          <div style="font-weight:800;color:var(--success);">✅ Output / Kết quả: <code>${escapeHtml(p.out)}</code></div>
        `;
      };
      opBtn.addEventListener("click", runOp);
      runOp();
    }

    // 5. Polymorphism & Dynamic Binding Tracer
    const polyBtn = document.getElementById("lab-poly-btn");
    if (polyBtn) {
      const polyCases = {
        method_vs_field: {
          code: "Parent p = new Child();\nSystem.out.print(p.x); // Field\np.show();              // Instance Method",
          compile: "Kiểu khai báo (Reference Type) = Parent → Kiểm tra `x` và `show()` có tồn tại trong Parent không.",
          runtime: "Đối tượng thật (Object Type) = Child → Field `p.x` gắn TĨNH theo Parent; Method `p.show()` gắn ĐỘNG theo Child!",
          out: "p.x lấy của Parent, p.show() chạy của Child!"
        },
        static_hiding: {
          code: "class A { static void hi() { print(\"A\"); } }\nclass B extends A { static void hi() { print(\"B\"); } }\nA obj = new B(); obj.hi();",
          compile: "Trình biên dịch thấy `hi()` là static nên đổi thẳng `obj.hi()` thành `A.hi()`!",
          runtime: "Static method KHÔNG tham gia đa hình (đây gọi là Method Hiding, không phải Overriding).",
          out: "In ra: A"
        },
        ctor_poly: {
          code: "class Base { Base() { print(); } void print() {} }\nclass Sub extends Base {\n    int x = 5;\n    void print() { System.out.print(x); }\n}\nnew Sub();",
          compile: "Hợp lệ 100%, không báo lỗi biên dịch.",
          runtime: "Constructor `Base()` chạy TRƯỚC khi `Sub` kịp gán `x = 5` (nên `x` đang là 0!). Dynamic Binding gọi `Sub.print()` ngay trong `Base()` → in ra `0`!",
          out: "In ra: 0 (KHÔNG phải 5!)"
        },
        downcast: {
          code: "Animal a = new Animal();\nDog d = (Dog) a; // Downcasting",
          compile: "Biên dịch QUA vì `Dog` là lớp con của `Animal`.",
          runtime: "JVM kiểm tra đối tượng thật là `Animal`, KHÔNG phải `Dog` ⇒ văng ngay `ClassCastException`! Luôn kiểm tra `if (a instanceof Dog)` trước khi ép.",
          out: "Runtime: ClassCastException"
        },
        init_order: {
          code: "class P { static{print(1);} {print(3);} P(){print(4);} }\nclass C extends P { static{print(2);} {print(5);} C(){print(6);} }\nnew C();",
          compile: "JVM nạp class Cha trước, rồi nạp class Con, sau đó mới khởi tạo đối tượng Cha → Con.",
          runtime: "Static Cha (1) → Static Con (2) → Instance Cha (3) → Ctor Cha (4) → Instance Con (5) → Ctor Con (6).",
          out: "In ra: 123456"
        }
      };
      const runPoly = () => {
        const c = polyCases[document.getElementById("lab-poly-preset").value];
        document.getElementById("lab-poly-output").innerHTML = `
          <pre class="mono" style="margin:0 0 0.6rem;padding:0.65rem;border-radius:8px;background:var(--bg-card);border:1px solid var(--border);overflow-x:auto;font-size:0.83rem;">${escapeHtml(c.code)}</pre>
          <div style="font-size:0.9rem;line-height:1.65;">
            <div><strong>🔨 Lúc Biên dịch (Compile-time):</strong> ${escapeHtml(c.compile)}</div>
            <div><strong>🏃 Lúc Chạy (Runtime):</strong> ${escapeHtml(c.runtime)}</div>
            <div style="margin-top:0.4rem;font-weight:800;color:var(--success);">✅ Kết quả: ${escapeHtml(c.out)}</div>
          </div>
        `;
      };
      polyBtn.addEventListener("click", runPoly);
      runPoly();
    }

    // 6. Collections & Exception Explorer
    const colBtn = document.getElementById("lab-col-btn");
    if (colBtn) {
      const db = {
        ArrayList: { kind: "List (Collection)", dup: "Cho trùng lặp", order: "Giữ thứ tự thêm (Index 0..n-1)", nul: "Cho nhiều null", note: "Truy xuất get(i) cực nhanh O(1), chèn/xóa giữa O(n). Bẫy: `list.remove(1)` trên `List<Integer>` xóa theo INDEX 1!" },
        LinkedList: { kind: "List & Deque (Collection)", dup: "Cho trùng lặp", order: "Giữ thứ tự thêm", nul: "Cho nhiều null", note: "Danh sách liên kết đôi: thêm/xóa đầu & cuối O(1), truy xuất get(i) chậm O(n)." },
        HashSet: { kind: "Set (Collection)", dup: "KHÔNG trùng lặp", order: "KHÔNG giữ thứ tự", nul: "Tối đa 1 phần tử null", note: "Dùng bảng băm (HashMap bên dưới), add/contains/remove trung bình O(1). Phụ thuộc `hashCode()` và `equals()`!" },
        LinkedHashSet: { kind: "Set (Collection)", dup: "KHÔNG trùng lặp", order: "GIỮ ĐÚNG thứ tự thêm vào", nul: "Tối đa 1 phần tử null", note: "Kết hợp HashSet + LinkedList để vừa loại trùng vừa giữ nguyên thứ tự gốc." },
        TreeSet: { kind: "SortedSet / NavigableSet", dup: "KHÔNG trùng lặp", order: "TỰ SẮP XẾP tăng dần", nul: "❌ CẤM null (NullPointerException!)", note: "Dùng cây đỏ-đen Red-Black Tree O(log n). Phần tử phải implement `Comparable` hoặc truyền `Comparator`." },
        HashMap: { kind: "Map (KHÔNG kế thừa Collection!)", dup: "Key duy nhất / Value trùng được", order: "KHÔNG giữ thứ tự", nul: "1 Key null, nhiều Value null", note: "Không synchronized (nhanh). Nếu `put` trùng Key sẽ GHI ĐÈ Value cũ." },
        TreeMap: { kind: "SortedMap (KHÔNG kế thừa Collection!)", dup: "Key duy nhất / Value trùng được", order: "Sắp xếp tăng dần theo Key", nul: "Key: ❌ CẤM null / Value: ✅", note: "Dùng Red-Black Tree theo Key O(log n)." },
        Hashtable: { kind: "Map (Legacy — Thread-safe)", dup: "Key duy nhất", order: "KHÔNG giữ thứ tự", nul: "❌ CẤM cả Key null lẫn Value null!", note: "Có `synchronized` (an toàn đa luồng nhưng chậm hơn HashMap)." },
        NullPointerException: { kind: "Unchecked (RuntimeException)", dup: "—", order: "—", nul: "Lỗi gọi method/field trên biến null", note: "Hay gặp khi Auto-unboxing `Integer a = null; int b = a;` hoặc thêm `null` vào `TreeSet`!" },
        ArithmeticException: { kind: "Unchecked (RuntimeException)", dup: "—", order: "—", nul: "Chia số NGUYÊN cho 0 (`5 / 0`)", note: "Bẫy FE: Chia số thực `5.0 / 0.0` KHÔNG ném lỗi này mà trả về `Infinity`!" },
        ClassCastException: { kind: "Unchecked (RuntimeException)", dup: "—", order: "—", nul: "Ép kiểu xuống (Downcasting) sai kiểu thực", note: "Luôn kiểm tra bằng `if (obj instanceof TargetClass)` trước khi ép kiểu." },
        ConcurrentModificationException: { kind: "Unchecked (RuntimeException)", dup: "—", order: "—", nul: "Sửa/xóa Collection khi đang duyệt `for-each`", note: "Khắc phục: dùng `Iterator.remove()`, `list.removeIf(...)`, hoặc duyệt vòng `for` chỉ số ngược!" },
        IOException: { kind: "Checked Exception (Bắt buộc xử lý!)", dup: "—", order: "—", nul: "Lỗi đọc/ghi tệp, mạng, luồng I/O", note: "Cha của `FileNotFoundException`. Bắt buộc phải bọc `try-catch` hoặc khai báo `throws IOException`." },
        NotSerializableException: { kind: "Checked (con của IOException)", dup: "—", order: "—", nul: "Ghi Object không implement `Serializable`", note: "Ném ra lúc chạy khi gọi `ObjectOutputStream.writeObject(obj)` mà class quên `implements Serializable`." }
      };
      const runCol = () => {
        const key = document.getElementById("lab-col-select").value;
        const d = db[key];
        document.getElementById("lab-col-output").innerHTML = `
          <div style="font-size:1rem;font-weight:800;color:var(--accent);margin-bottom:0.4rem;"><code>${escapeHtml(key)}</code> — ${escapeHtml(d.kind)}</div>
          <ul style="margin:0 0 0 1.2rem;line-height:1.65;font-size:0.9rem;">
            ${d.dup !== "—" ? `<li><strong>Trùng lặp:</strong> ${escapeHtml(d.dup)}</li>` : ""}
            ${d.order !== "—" ? `<li><strong>Thứ tự:</strong> ${escapeHtml(d.order)}</li>` : ""}
            <li><strong>Đặc điểm / Null:</strong> ${escapeHtml(d.nul)}</li>
            <li><strong>💡 Lưu ý &amp; Bẫy thi:</strong> ${escapeHtml(d.note)}</li>
          </ul>
        `;
      };
      colBtn.addEventListener("click", runCol);
      runCol();
    }
  }

  // ==================== FLASHCARDS ENGINE (100% MCQ) ====================
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
      const allCards = getAllFlashcards();
      const cats = Array.from(new Set(allCards.map((c) => c.category)));
      catSelect.innerHTML =
        `<option value="ALL">📚 Tất cả Flashcards PRO192 (${allCards.length} thẻ)</option>` +
        cats
          .map((c) => {
            const count = allCards.filter((item) => item.category === c).length;
            return `<option value="${escapeHtml(c)}">${escapeHtml(c)} (${count} thẻ)</option>`;
          })
          .join("");
    }

    function filterCards() {
      const cat = catSelect.value;
      const status = filterSelect.value;
      const keyword = (searchInput ? searchInput.value : "").trim().toLowerCase();

      fcList = getAllFlashcards().filter((c) => {
        const matchCat = cat === "ALL" || c.category === cat;
        const isMastered = state.masteredFlashcards.includes(c.id);
        const matchStatus =
          status === "ALL" ||
          (status === "UNMASTERED" && !isMastered) ||
          (status === "MASTERED" && isMastered);
        const matchKeyword =
          !keyword ||
          c.term.toLowerCase().includes(keyword) ||
          c.answer.toLowerCase().includes(keyword) ||
          (c.options && c.options.some((o) => o.toLowerCase().includes(keyword)));
        return matchCat && matchStatus && matchKeyword;
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
      const frontImgWrap = document.getElementById("fc-front-img-wrap");
      const frontOpts = document.getElementById("fc-front-options");
      const backCorrectBox = document.getElementById("fc-back-correct-box");
      const backAns = document.getElementById("fc-back-ans");
      const masterBtn = document.getElementById("fc-master-btn");

      if (fcList.length === 0) {
        counterEl.textContent = "0 / 0";
        frontCat.textContent = "Trống";
        frontTerm.textContent = "Không có thẻ nào khớp bộ lọc!";
        if (frontImgWrap) { frontImgWrap.style.display = "none"; frontImgWrap.innerHTML = ""; }
        if (frontOpts) frontOpts.style.display = "none";
        if (backCorrectBox) backCorrectBox.style.display = "none";
        backAns.textContent = "Hãy đổi bộ lọc hoặc từ khóa tìm kiếm.";
        masterBtn.disabled = true;
        return;
      }

      masterBtn.disabled = false;
      const item = fcList[fcIndex];
      const isMastered = state.masteredFlashcards.includes(item.id);
      counterEl.textContent = `Thẻ ${fcIndex + 1} / ${fcList.length}`;
      frontCat.textContent = item.category + (isMastered ? " • ✓ Đã thuộc" : "");
      frontTerm.textContent = item.term;

      if (frontImgWrap) {
        if (item.imgFile) {
          frontImgWrap.style.display = "block";
          frontImgWrap.innerHTML = `<img src="${escapeHtml(item.imgFile)}" alt="Ảnh đề thi" style="max-width:100%;max-height:260px;border-radius:8px;border:1px solid var(--border);cursor:zoom-in;background:#fff;padding:4px;" onclick="event.stopPropagation(); openProLightbox('${escapeHtml(item.imgFile)}')" title="Bấm để phóng to ảnh" />`;
        } else {
          frontImgWrap.style.display = "none";
          frontImgWrap.innerHTML = "";
        }
      }

      if (frontOpts) {
        if (item.options && item.options.length > 0) {
          frontOpts.style.display = "flex";
          frontOpts.innerHTML = item.options
            .map(
              (opt, idx) =>
                `<div class="fc-opt-item"><span class="fc-opt-letter">${letters[idx]}.</span><span>${escapeHtml(opt)}</span></div>`
            )
            .join("");
        } else {
          frontOpts.style.display = "none";
        }
      }

      if (backCorrectBox) {
        if (item.correctText) {
          backCorrectBox.style.display = "block";
          backCorrectBox.innerHTML = `<div style="font-size:0.84rem;color:var(--success);text-transform:uppercase;letter-spacing:0.04em;margin-bottom:0.25rem;">✅ Đáp án đúng:</div><div style="white-space:pre-line;font-weight:800;">${escapeHtml(item.correctText)}</div>`;
        } else {
          backCorrectBox.style.display = "none";
        }
      }

      backAns.innerHTML = `<div style="font-size:0.85rem;font-weight:800;color:var(--accent);text-transform:uppercase;letter-spacing:0.04em;margin-bottom:0.3rem;">📖 Giải thích chi tiết:</div><div style="white-space:pre-line;line-height:1.65;">${escapeHtml(item.answer)}</div>`;
      masterBtn.textContent = isMastered ? "✓ Đã thuộc (Bỏ đánh dấu)" : "⭐ Đánh dấu Đã thuộc";
      masterBtn.className = isMastered ? "btn btn-success" : "btn btn-secondary";
    }

    function renderGridCards() {
      if (!gridContainer) return;
      if (fcList.length === 0) {
        gridContainer.innerHTML = `<div class="theory-box">Không có thẻ nào khớp bộ lọc.</div>`;
        return;
      }
      gridContainer.innerHTML = fcList
        .map((item, idx) => {
          const isMastered = state.masteredFlashcards.includes(item.id);
          const optsHtml =
            item.options && item.options.length
              ? `<div class="fc-options-preview" style="margin-top:0.4rem;">
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
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.45rem;">
                  <span class="badge">${escapeHtml(item.category)}</span>
                  <span style="font-size:0.82rem;color:var(--text-muted);font-weight:700;">#${idx + 1}</span>
                </div>
                <div style="font-weight:800;font-size:1.02rem;line-height:1.5;white-space:pre-line;margin-bottom:0.5rem;">${escapeHtml(item.term)}</div>
                ${item.imgFile ? `<div style="margin:0.45rem 0;"><img src="${escapeHtml(item.imgFile)}" alt="Ảnh đề thi" loading="lazy" style="max-width:100%;max-height:240px;border-radius:8px;border:1px solid var(--border);cursor:zoom-in;background:#fff;padding:4px;" onclick="openProLightbox('${escapeHtml(item.imgFile)}')" title="Bấm để phóng to" /></div>` : ""}
                ${optsHtml}
                <div class="fc-mini-ans">
                  ${item.correctText ? `<div style="font-weight:800;color:var(--success);margin-bottom:0.35rem;white-space:pre-line;">✅ Đáp án đúng: ${escapeHtml(item.correctText)}</div>` : ""}
                  <div style="font-size:0.93rem;color:var(--text-primary);white-space:pre-line;line-height:1.6;"><strong>📖 Giải thích:</strong> ${escapeHtml(item.answer)}</div>
                </div>
              </div>
              <div style="display:flex;justify-content:space-between;align-items:center;padding-top:0.55rem;border-top:1px solid var(--border);">
                <button class="btn btn-secondary btn-sm" onclick="toggleProMiniCard(${idx})">👁️ Lật xem đáp án &amp; giải thích</button>
                <button class="btn ${isMastered ? "btn-success" : "btn-secondary"} btn-sm" onclick="toggleProMasterById('${escapeHtml(String(item.id))}')">
                  ${isMastered ? "✓ Đã thuộc" : "⭐ Thuộc"}
                </button>
              </div>
            </div>`;
        })
        .join("");
    }

    window.toggleProMiniCard = function (idx) {
      const el = document.getElementById(`fc-mini-${idx}`);
      if (el) el.classList.toggle("revealed");
    };

    window.toggleProMasterById = function (rawId) {
      const target = getAllFlashcards().find((c) => String(c.id) === String(rawId));
      if (!target) return;
      if (state.masteredFlashcards.includes(target.id)) {
        state.masteredFlashcards = state.masteredFlashcards.filter((x) => x !== target.id);
      } else {
        state.masteredFlashcards.push(target.id);
      }
      saveState();
      renderCurrentCard();
      if (fcViewMode === "grid") renderGridCards();
    };

    singleBtn.addEventListener("click", () => {
      fcViewMode = "single";
      singleView.style.display = "block";
      gridView.style.display = "none";
      singleBtn.className = "btn btn-sm";
      gridBtn.className = "btn btn-secondary btn-sm";
    });
    gridBtn.addEventListener("click", () => {
      fcViewMode = "grid";
      singleView.style.display = "none";
      gridView.style.display = "block";
      gridBtn.className = "btn btn-sm";
      singleBtn.className = "btn btn-secondary btn-sm";
      renderGridCards();
    });
    revealAllBtn.addEventListener("click", () => {
      fcRevealAll = !fcRevealAll;
      revealAllBtn.textContent = fcRevealAll ? "🙈 Ẩn tất cả đáp án" : "👁️ Hiện tất cả đáp án";
      renderGridCards();
    });

    cardEl.addEventListener("click", () => cardEl.classList.toggle("flipped"));
    document.getElementById("fc-flip-btn").addEventListener("click", () => cardEl.classList.toggle("flipped"));
    document.getElementById("fc-prev-btn").addEventListener("click", () => {
      if (fcList.length === 0) return;
      fcIndex = (fcIndex - 1 + fcList.length) % fcList.length;
      renderCurrentCard();
    });
    document.getElementById("fc-next-btn").addEventListener("click", () => {
      if (fcList.length === 0) return;
      fcIndex = (fcIndex + 1) % fcList.length;
      renderCurrentCard();
    });
    document.getElementById("fc-shuffle-btn").addEventListener("click", () => {
      for (let i = fcList.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [fcList[i], fcList[j]] = [fcList[j], fcList[i]];
      }
      fcIndex = 0;
      renderCurrentCard();
      if (fcViewMode === "grid") renderGridCards();
      showToast("🔀 Đã xáo trộn bộ Flashcards!");
    });
    document.getElementById("fc-master-btn").addEventListener("click", () => {
      if (!fcList[fcIndex]) return;
      window.toggleProMasterById(fcList[fcIndex].id);
    });

    catSelect.addEventListener("change", filterCards);
    filterSelect.addEventListener("change", filterCards);
    if (searchInput) searchInput.addEventListener("input", filterCards);

    document.addEventListener("keydown", (e) => {
      const fcTabActive = document.getElementById("tab-flashcards").classList.contains("active");
      if (!fcTabActive || fcViewMode !== "single") return;
      if (document.activeElement && ["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) return;
      if (e.code === "Space") {
        e.preventDefault();
        cardEl.classList.toggle("flipped");
      } else if (e.code === "ArrowRight") {
        e.preventDefault();
        document.getElementById("fc-next-btn").click();
      } else if (e.code === "ArrowLeft") {
        e.preventDefault();
        document.getElementById("fc-prev-btn").click();
      }
    });

    populateCategories();
    filterCards();
  }

  // ==================== EOS FE EXAM SIMULATOR ====================
  let quizSession = {
    questions: [],
    currentIndex: 0,
    answers: {},
    flagged: new Set(),
    mode: "exam",
    submitted: false,
    timerId: null,
    timeLeftSec: 3600,
    totalDurationSec: 3600
  };

  function initQuizEngine() {
    const topicSelect = document.getElementById("quiz-topic-select");
    const modeSelect = document.getElementById("quiz-mode-select");
    const countSelect = document.getElementById("quiz-count-select");
    const startBtn = document.getElementById("quiz-start-btn");
    const prevBtn = document.getElementById("quiz-prev-btn");
    const nextBtn = document.getElementById("quiz-next-btn");
    const flagBtn = document.getElementById("quiz-flag-btn");
    const peekBtn = document.getElementById("quiz-peek-ans-btn");
    const submitBtn = document.getElementById("quiz-submit-btn");
    const timerBox = document.getElementById("quiz-timer-box");
    const letters = ["A", "B", "C", "D", "E", "F"];

    function populateQuizTopics() {
      const allQs = getAllQuestions();
      const topics = Array.from(new Set(allQs.map((q) => q.topic)));
      topicSelect.innerHTML =
        `<option value="ALL">🏛️ Đề Trộn Tổng Hợp PRO192 (${allQs.length} câu)</option>` +
        `<option value="WRONG">🔥 Ôn lại các câu đã làm sai (${state.wrongQuestionIds.length} câu)</option>` +
        topics
          .map((t) => {
            const count = allQs.filter((q) => q.topic === t).length;
            return `<option value="${escapeHtml(t)}">${escapeHtml(t)} (${count} câu)</option>`;
          })
          .join("");
    }

    function stopTimer() {
      if (quizSession.timerId) {
        clearInterval(quizSession.timerId);
        quizSession.timerId = null;
      }
    }

    function formatTime(sec) {
      const m = Math.floor(sec / 60);
      const s = sec % 60;
      return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
    }

    function startQuiz(customMinutes) {
      stopTimer();
      const allQs = getAllQuestions();
      const topic = topicSelect.value;
      const mode = modeSelect.value;
      const maxCount = parseInt(countSelect.value, 10) || 50;

      let pool = [];
      if (topic === "ALL") pool = [...allQs];
      else if (topic === "WRONG") pool = allQs.filter((q) => state.wrongQuestionIds.includes(q.id));
      else pool = allQs.filter((q) => q.topic === topic);

      if (pool.length === 0) {
        showToast(topic === "WRONG" ? "Bạn chưa có câu sai nào!" : "Không có câu hỏi cho chủ đề này.");
        pool = [...allQs];
      }

      const keepOrder = topic.startsWith("🏆 Đề FE") || topic.startsWith("🖼️ Đề FE");
      if (!keepOrder) {
        for (let i = pool.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [pool[i], pool[j]] = [pool[j], pool[i]];
        }
      }

      const selected = pool.slice(0, Math.min(maxCount, pool.length));
      const minutes = customMinutes || (selected.length >= 45 ? 60 : Math.max(15, Math.round(selected.length * 1.2)));

      quizSession = {
        questions: selected,
        currentIndex: 0,
        answers: {},
        flagged: new Set(),
        mode,
        submitted: false,
        timerId: null,
        timeLeftSec: minutes * 60,
        totalDurationSec: minutes * 60
      };

      document.getElementById("quiz-result-banner").style.display = "none";
      document.getElementById("quiz-full-review-sheet").style.display = "none";
      submitBtn.style.display = "inline-flex";

      if (mode === "exam") {
        timerBox.style.display = "inline-flex";
        timerBox.textContent = `⏱️ ${formatTime(quizSession.timeLeftSec)}`;
        quizSession.timerId = setInterval(() => {
          quizSession.timeLeftSec--;
          timerBox.textContent = `⏱️ ${formatTime(Math.max(0, quizSession.timeLeftSec))}`;
          if (quizSession.timeLeftSec <= 0) {
            stopTimer();
            submitQuiz();
            showToast("⏰ Hết giờ! Hệ thống đã tự động nộp bài.");
          }
        }, 1000);
      } else {
        timerBox.style.display = "none";
      }

      renderQuestion();
      renderPalette();
    }

    function isAnswered(val) {
      if (val === undefined || val === null) return false;
      if (Array.isArray(val)) return val.length > 0;
      return true;
    }

    function renderQuestion(forcePeek) {
      const q = quizSession.questions[quizSession.currentIndex];
      if (!q) return;

      const metaEl = document.getElementById("quiz-q-meta");
      const qTextEl = document.getElementById("quiz-q-text");
      const qImgWrap = document.getElementById("quiz-q-img-wrap");
      const optsEl = document.getElementById("quiz-options-list");
      const expEl = document.getElementById("quiz-explanation-box");
      const correctArr = getCorrectArray(q);
      const isMulti = correctArr.length > 1;
      const chosen = quizSession.answers[q.id];
      const chosenArr = Array.isArray(chosen) ? chosen : chosen !== undefined ? [chosen] : [];
      const practiceReady = isMulti ? chosenArr.length >= correctArr.length : chosenArr.length > 0;
      const showFeedback = quizSession.submitted || forcePeek || (quizSession.mode === "practice" && practiceReady);

      metaEl.innerHTML = `
        <span class="badge">Câu ${quizSession.currentIndex + 1} / ${quizSession.questions.length}</span>
        <span class="badge">${escapeHtml(q.topic)}</span>
        ${isMulti ? `<span class="badge badge-warning">☑️ Chọn ${correctArr.length} đáp án</span>` : ""}
        ${quizSession.flagged.has(q.id) ? `<span class="badge badge-warning">🏳️ Đã gắn cờ</span>` : ""}
      `;
      qTextEl.textContent = q.question;

      if (qImgWrap) {
        if (q.imgFile) {
          qImgWrap.style.display = "block";
          qImgWrap.innerHTML = `
            <div style="margin:0.75rem 0 1rem;text-align:center;">
              <img src="${escapeHtml(q.imgFile)}" alt="Hình câu hỏi đề thi"
                style="max-width:100%;max-height:540px;border-radius:10px;border:1px solid var(--border);cursor:zoom-in;background:#fff;padding:6px;box-shadow:0 4px 16px rgba(0,0,0,0.18);"
                onclick="openProLightbox('${escapeHtml(q.imgFile)}')"
                title="Bấm vào ảnh để phóng to toàn màn hình" />
              <div style="font-size:0.8rem;color:var(--text-muted);margin-top:0.35rem;">🔍 Bấm vào ảnh để phóng to toàn màn hình</div>
            </div>`;
        } else {
          qImgWrap.style.display = "none";
          qImgWrap.innerHTML = "";
        }
      }

      optsEl.innerHTML = q.options
        .map((opt, idx) => {
          const isSelected = chosenArr.includes(idx);
          const isRight = correctArr.includes(idx);
          let cls = "option-btn";
          if (showFeedback) {
            if (isRight) cls += " correct";
            else if (isSelected && !isRight) cls += " wrong";
          } else if (isSelected) {
            cls += " selected";
          }
          return `
            <button type="button" class="${cls}" onclick="selectProOption(${idx})">
              <span class="option-letter">${letters[idx]}</span>
              <span style="flex:1;line-height:1.5;text-align:left;">${escapeHtml(opt)}</span>
            </button>`;
        })
        .join("");

      if (showFeedback) {
        const isCorrect = isAnswerCorrect(q, chosen);
        const rightLetters = correctArr.map((i) => `${letters[i]}. ${q.options[i]}`).join(" | ");
        expEl.style.display = "block";
        expEl.innerHTML = `
          <div style="font-weight:800;margin-bottom:0.4rem;color:${!isAnswered(chosen) ? "var(--accent)" : isCorrect ? "var(--success)" : "var(--danger)"};">
            ${!isAnswered(chosen) ? `💡 Đáp án đúng: ${escapeHtml(rightLetters)}` : isCorrect ? `✅ Chính xác! (${escapeHtml(rightLetters)})` : `❌ Chưa đúng! Đáp án đúng là: ${escapeHtml(rightLetters)}`}
          </div>
          <div style="white-space:pre-line;line-height:1.65;">${escapeHtml(q.explanation)}</div>
        `;
      } else {
        expEl.style.display = "none";
      }

      flagBtn.textContent = quizSession.flagged.has(q.id) ? "🚩 Bỏ gắn cờ" : "🏳️ Gắn cờ xem lại";
      prevBtn.disabled = quizSession.currentIndex === 0;
      nextBtn.disabled = quizSession.currentIndex === quizSession.questions.length - 1;
    }

    function renderPalette() {
      const grid = document.getElementById("quiz-palette-grid");
      const summary = document.getElementById("quiz-progress-summary");
      const answeredCount = quizSession.questions.filter((q) => isAnswered(quizSession.answers[q.id])).length;
      summary.textContent = `Đã làm: ${answeredCount} / ${quizSession.questions.length} câu`;

      grid.innerHTML = quizSession.questions
        .map((q, idx) => {
          const chosen = quizSession.answers[q.id];
          let cls = "q-dot";
          if (idx === quizSession.currentIndex) cls += " current";
          if (quizSession.submitted) {
            cls += isAnswerCorrect(q, chosen) ? " correct" : " wrong";
          } else if (isAnswered(chosen)) {
            cls += " answered";
          }
          if (quizSession.flagged.has(q.id)) cls += " flagged";
          return `<button class="${cls}" onclick="jumpProQuestion(${idx})">${idx + 1}</button>`;
        })
        .join("");
    }

    window.selectProOption = function (optIdx) {
      if (quizSession.submitted) return;
      const q = quizSession.questions[quizSession.currentIndex];
      const correctArr = getCorrectArray(q);
      const isMulti = correctArr.length > 1;

      if (isMulti) {
        const cur = Array.isArray(quizSession.answers[q.id]) ? [...quizSession.answers[q.id]] : [];
        const pos = cur.indexOf(optIdx);
        if (pos !== -1) cur.splice(pos, 1);
        else cur.push(optIdx);
        quizSession.answers[q.id] = cur.sort((a, b) => a - b);
      } else {
        quizSession.answers[q.id] = optIdx;
      }

      const chosenNow = quizSession.answers[q.id];
      const readyToCheck = isMulti ? Array.isArray(chosenNow) && chosenNow.length >= correctArr.length : true;
      if (quizSession.mode === "practice" && readyToCheck) {
        if (isAnswerCorrect(q, chosenNow)) {
          state.wrongQuestionIds = state.wrongQuestionIds.filter((id) => id !== q.id);
        } else if (!state.wrongQuestionIds.includes(q.id)) {
          state.wrongQuestionIds.push(q.id);
        }
        saveState();
      }

      renderQuestion();
      renderPalette();
    };

    window.jumpProQuestion = function (idx) {
      quizSession.currentIndex = idx;
      renderQuestion();
      renderPalette();
    };

    function submitQuiz() {
      stopTimer();
      quizSession.submitted = true;
      let correct = 0;
      quizSession.questions.forEach((q) => {
        const chosen = quizSession.answers[q.id];
        if (isAnswerCorrect(q, chosen)) {
          correct++;
          state.wrongQuestionIds = state.wrongQuestionIds.filter((id) => id !== q.id);
        } else if (!state.wrongQuestionIds.includes(q.id)) {
          state.wrongQuestionIds.push(q.id);
        }
      });

      const total = quizSession.questions.length;
      const pct = total ? Math.round((correct / total) * 100) : 0;
      const score10 = total ? ((correct / total) * 10).toFixed(2) : "0.00";
      const usedSec = quizSession.totalDurationSec - Math.max(0, quizSession.timeLeftSec);
      const passed = parseFloat(score10) >= 4.0;

      state.quizAttempts++;
      if (pct > state.quizBestScore) state.quizBestScore = pct;
      saveState();
      populateQuizTopics();

      const banner = document.getElementById("quiz-result-banner");
      banner.style.display = "block";
      banner.innerHTML = `
        <div class="card" style="margin-bottom:1.25rem;border:2px solid ${passed ? "var(--success)" : "var(--danger)"};">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;">
            <div>
              <div style="font-size:1.35rem;font-weight:800;color:${passed ? "var(--success)" : "var(--danger)"};">
                ${passed ? "🎉 PASS FE PRO192!" : "⚠️ CHƯA ĐẠT (Cần ≥ 4.0/10)"} — Điểm: ${score10} / 10.0 (${correct}/${total} câu đúng • ${pct}%)
              </div>
              <div style="font-size:0.9rem;color:var(--text-secondary);margin-top:0.25rem;">
                Thời gian làm bài: ${formatTime(usedSec)} • Các câu sai đã tự động lưu vào mục "Ôn lại các câu đã làm sai".
              </div>
            </div>
            <button class="btn btn-sm" onclick="document.getElementById('quiz-full-review-sheet').scrollIntoView({behavior:'smooth'})">📋 Xem bảng giải chi tiết &darr;</button>
          </div>
        </div>
      `;

      const reviewEl = document.getElementById("quiz-full-review-sheet");
      reviewEl.style.display = "block";
      reviewEl.innerHTML = `
        <div class="card">
          <h3 class="card-title" style="margin-bottom:0.85rem;">📋 Toàn Bộ Đáp Án &amp; Lời Giải Chi Tiết (${total} Câu)</h3>
          ${quizSession.questions
            .map((q, idx) => {
              const chosen = quizSession.answers[q.id];
              const ok = isAnswerCorrect(q, chosen);
              const rightText = getCorrectArray(q).map((i) => `${letters[i]}. ${q.options[i]}`).join(" | ");
              const chosenArr = Array.isArray(chosen) ? chosen : chosen !== undefined ? [chosen] : [];
              const chosenText = chosenArr.length === 0 ? "Bỏ trống" : chosenArr.map((i) => `${letters[i]}. ${q.options[i]}`).join(" | ");
              return `
                <div style="padding:0.9rem;border:1px solid var(--border);border-left:4px solid ${ok ? "var(--success)" : "var(--danger)"};border-radius:10px;margin-bottom:0.75rem;background:var(--bg-input);">
                  <div style="font-weight:800;margin-bottom:0.35rem;white-space:pre-line;">Câu ${idx + 1}: ${escapeHtml(q.question)}</div>
                  ${q.imgFile ? `<div style="margin:0.45rem 0;"><img src="${escapeHtml(q.imgFile)}" alt="Ảnh đề thi" loading="lazy" style="max-width:100%;max-height:320px;border-radius:8px;border:1px solid var(--border);cursor:zoom-in;background:#fff;padding:4px;" onclick="openProLightbox('${escapeHtml(q.imgFile)}')" /></div>` : ""}
                  <div style="font-size:0.9rem;margin-bottom:0.3rem;">
                    <strong>Bạn chọn:</strong> <span style="color:${ok ? "var(--success)" : "var(--danger)"};font-weight:700;">${escapeHtml(chosenText)}</span>
                    &nbsp;|&nbsp;
                    <strong>Đáp án đúng:</strong> <span style="color:var(--success);font-weight:700;">${escapeHtml(rightText)}</span>
                  </div>
                  <div style="font-size:0.9rem;color:var(--text-secondary);white-space:pre-line;line-height:1.6;"><strong>💡 Giải thích:</strong> ${escapeHtml(q.explanation)}</div>
                </div>`;
            })
            .join("")}
        </div>
      `;

      submitBtn.style.display = "none";
      renderQuestion();
      renderPalette();
    }

    window.launchProExam = function (topicVal, modeVal, minutes, countVal) {
      switchTab("quiz");
      populateQuizTopics();
      topicSelect.value = Array.from(topicSelect.options).some((o) => o.value === topicVal) ? topicVal : "ALL";
      modeSelect.value = modeVal || "exam";
      if (countVal) countSelect.value = String(countVal);
      startQuiz(minutes);
    };

    startBtn.addEventListener("click", () => startQuiz());
    prevBtn.addEventListener("click", () => {
      if (quizSession.currentIndex > 0) {
        quizSession.currentIndex--;
        renderQuestion();
        renderPalette();
      }
    });
    nextBtn.addEventListener("click", () => {
      if (quizSession.currentIndex < quizSession.questions.length - 1) {
        quizSession.currentIndex++;
        renderQuestion();
        renderPalette();
      }
    });
    flagBtn.addEventListener("click", () => {
      const q = quizSession.questions[quizSession.currentIndex];
      if (!q) return;
      if (quizSession.flagged.has(q.id)) quizSession.flagged.delete(q.id);
      else quizSession.flagged.add(q.id);
      renderQuestion();
      renderPalette();
    });
    peekBtn.addEventListener("click", () => renderQuestion(true));
    submitBtn.addEventListener("click", () => {
      if (!quizSession.submitted) submitQuiz();
    });

    populateQuizTopics();
    startQuiz(60);
  }

  // ==================== BOOTSTRAP ====================
  document.addEventListener("DOMContentLoaded", () => {
    applyTheme();
    applyFontScale();
    initTabs();
    renderFeAnalysis();
    initGlobalSearch();
    renderPeTemplates();
    renderLessonsModule();
    renderChapters();
    initJavaLabTools();
    initFlashcardsTab();
    initQuizEngine();
    updateDashboardStats();
  });
})();
