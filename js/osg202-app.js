(function () {
  const STORAGE_KEY = "osg202_study_state_v1";

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
    clearTimeout(window.__osgToastTimer);
    window.__osgToastTimer = setTimeout(() => {
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
    return [...(window.OSG202_DATA.quizQuestions || [])];
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
    const coreCards = (window.OSG202_DATA.flashcards || []).map((c) => {
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
        options: q.options,
        correctIndexes: correctArr,
        correctText,
        answer: q.explanation,
        isQuestion: true
      };
    });

    return [...coreCards, ...questionCards];
  }

  // ==================== THEME, FONT SCALE & TABS ====================
  function applyTheme() {
    const btn = document.getElementById("theme-toggle-btn");
    if (state.theme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
      if (btn) btn.innerHTML = "🌙 Dark";
    } else {
      document.documentElement.removeAttribute("data-theme");
      if (btn) btn.innerHTML = "☀️ Light";
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

  window.launchOsgExam = function (topicName, mode = "exam", minutes = 60, countOverride = 999) {
    switchTab("quiz");
    const topicSelect = document.getElementById("quiz-topic-select");
    const modeSelect = document.getElementById("quiz-mode-select");
    const countSelect = document.getElementById("quiz-count-select");
    if (topicSelect) topicSelect.value = topicName;
    if (modeSelect) modeSelect.value = mode;
    if (countSelect) countSelect.value = String(countOverride);
    window.__osgCustomMinutes = minutes;
    const startBtn = document.getElementById("quiz-start-btn");
    if (startBtn) startBtn.click();
    showToast(
      mode === "exam"
        ? `⏱️ Bắt đầu Thi Thử FE OSG202 (${minutes} phút)!`
        : `💡 Đã mở chế độ Luyện & Xem lời giải ngay!`
    );
  };

  // ==================== DASHBOARD & FE ANALYSIS ====================
  function renderFeAnalysis() {
    const container = document.getElementById("fe-analysis-container");
    if (!container || !window.OSG202_DATA.feAnalysis) return;
    const info = window.OSG202_DATA.feAnalysis;

    container.innerHTML = `
      <div class="card-header">
        <div>
          <h2 class="card-title">🎯 Cấu Trúc Đề Thi FE OSG202 (Tanenbaum 4th Ed. — 6 Chương Trọng Tâm)</h2>
          <p style="font-size:0.96rem;color:var(--text-secondary);margin-top:0.35rem;">${escapeHtml(info.difficultySummary)}</p>
        </div>
        <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
          <button class="btn btn-primary btn-sm" onclick="switchTab('theory')">🎓 Học 6 Bài Giảng Dễ Hiểu</button>
          <button class="btn btn-success btn-sm" onclick="switchTab('tools')">🧮 6 Máy Tính Mô Phỏng OS</button>
          <button class="btn btn-sm" onclick="launchOsgExam('ALL', 'exam', 60, 50)">⏱️ Thi Thử FE 50 Câu (60p)</button>
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
    const totalChapters = window.OSG202_DATA.chapters.length;
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

      window.OSG202_DATA.chapters.forEach((ch) => {
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
        el.style.display = !q || el.textContent.toLowerCase().includes(q) ? "" : "none";
      });
    });
  }

  // ==================== INTERACTIVE CLASSROOM (6 LESSONS) & 6 CHAPTERS ====================
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
    const lessons = window.OSG202_LESSONS || [];
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
              onclick="selectOsgLesson(${i})"
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
                      if (oIdx === mq.ans) cls = "btn btn-success btn-sm";
                      else if (oIdx === picked && oIdx !== mq.ans) {
                        extraStyle += "border-color:var(--danger);background:rgba(239,68,68,0.18);color:var(--danger);";
                      }
                    }
                    return `
                      <button class="${cls}" style="${extraStyle}" onclick="answerOsgMiniQuiz('${lesson.id}', ${qIdx}, ${oIdx})">
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

          <div class="theory-box" style="margin-bottom:1rem;border-left:4px solid var(--accent);background:rgba(14,165,233,0.08);">
            <h4 style="color:var(--accent);font-size:1.06rem;">🧠 1. Hiểu Bản Chất Trong 60 Giây (Ví Dụ Đời Thường)</h4>
            <div style="white-space:pre-line;line-height:1.7;font-size:0.98rem;">${escapeHtml(lesson.analogy)}</div>
          </div>

          <div class="theory-box" style="margin-bottom:1rem;">
            <h4 style="font-size:1.06rem;">📐 2. Công Thức &amp; Quy Tắc Cốt Lõi Cần Nhớ</h4>
            <ul>
              ${lesson.coreRules
                .map((r) => `<li style="white-space:pre-line;margin-bottom:0.55rem;line-height:1.65;">${escapeHtml(r)}</li>`)
                .join("")}
            </ul>
          </div>

          <div class="theory-box" style="margin-bottom:1rem;border-left:4px solid var(--success);background:rgba(16,185,129,0.07);">
            <h4 style="color:var(--success);font-size:1.06rem;">✍️ 3. Thầy Giải Mẫu Từng Bước (Câu Đề Thi Thật FE)</h4>
            <div style="white-space:pre-line;line-height:1.7;font-size:0.96rem;">${escapeHtml(lesson.workedExample)}</div>
          </div>

          <div class="theory-box" style="margin-bottom:1.15rem;border-left:4px solid var(--warning);background:rgba(245,158,11,0.08);">
            <h4 style="color:var(--warning);font-size:1.06rem;">⚠️ 4. Cảnh Báo Bẫy Hay Mất Điểm Phòng Thi FE</h4>
            <ul>
              ${lesson.traps
                .map((t) => `<li style="white-space:pre-line;margin-bottom:0.45rem;line-height:1.6;">${escapeHtml(t)}</li>`)
                .join("")}
            </ul>
          </div>

          <div style="margin-bottom:1.15rem;">
            <h4 style="font-size:1.06rem;font-weight:800;margin-bottom:0.65rem;">✅ 5. Kiểm Tra Nhanh Hiểu Bài Ngay Tại Chỗ</h4>
            ${miniQuizHtml}
          </div>

          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.6rem;padding-top:0.95rem;border-top:1px solid var(--border);">
            <button class="btn btn-secondary" ${activeLessonIdx === 0 ? "disabled" : ""} onclick="selectOsgLesson(${activeLessonIdx - 1})">&larr; Bài giảng trước</button>
            <button class="btn btn-success" onclick="switchTab('tools')">🧮 Thử Máy Tính Mô Phỏng OS &rarr;</button>
            <button class="btn" ${activeLessonIdx === lessons.length - 1 ? "disabled" : ""} onclick="selectOsgLesson(${activeLessonIdx + 1})">Bài giảng tiếp theo &rarr;</button>
          </div>
        </div>
      `;
    }

    window.selectOsgLesson = function (idx) {
      if (idx < 0 || idx >= lessons.length) return;
      activeLessonIdx = idx;
      renderLessons();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.answerOsgMiniQuiz = function (lessonId, qIdx, optIdx) {
      lessonMiniAnswers[`${lessonId}_${qIdx}`] = optIdx;
      renderLessons();
    };

    renderLessons();
  }

  function renderChapters() {
    const container = document.getElementById("chapters-container");
    if (!container) return;

    container.innerHTML = window.OSG202_DATA.chapters
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

  // ==================== 6 INTERACTIVE OSG202 CALCULATORS & SIMULATORS ====================
  function initToolsTab() {
    // 1. CPU Scheduling Simulator (FCFS, SJF, SRTN, Round Robin)
    const cpuBtn = document.getElementById("calc-cpu-btn");
    if (cpuBtn) {
      const runCpu = () => {
        const raw = (document.getElementById("cpu-procs-input").value || "").trim();
        const algo = document.getElementById("cpu-algo-select").value;
        const quantum = Math.max(1, parseInt(document.getElementById("cpu-quantum-input").value, 10) || 4);
        const out = document.getElementById("cpu-output");

        const procs = raw
          .split(/\n+/)
          .map((line, i) => {
            const parts = line.trim().split(/[\s,;]+/);
            if (parts.length < 2) return null;
            const hasName = isNaN(parseFloat(parts[0]));
            const name = hasName ? parts[0] : `P${i + 1}`;
            const arrival = parseFloat(hasName ? parts[1] : parts[0]);
            const burst = parseFloat(hasName ? parts[2] : parts[1]);
            if (isNaN(arrival) || isNaN(burst) || burst <= 0) return null;
            return { name, arrival, burst, remaining: burst, finish: 0 };
          })
          .filter(Boolean);

        if (procs.length === 0) {
          out.innerHTML = `<div class="exam-tip">Nhập mỗi tiến trình 1 dòng dạng: <code>P1 0 7</code> (Tên Arrival Burst)!</div>`;
          return;
        }

        const gantt = [];
        let t = 0;

        if (algo === "FCFS") {
          const list = procs.slice().sort((a, b) => a.arrival - b.arrival);
          list.forEach((p) => {
            if (t < p.arrival) {
              gantt.push({ name: "IDLE", start: t, end: p.arrival });
              t = p.arrival;
            }
            gantt.push({ name: p.name, start: t, end: t + p.burst });
            t += p.burst;
            p.finish = t;
          });
        } else if (algo === "SJF") {
          const list = procs.map((p) => ({ ...p, done: false }));
          let doneCnt = 0;
          while (doneCnt < list.length) {
            const ready = list.filter((p) => !p.done && p.arrival <= t);
            if (ready.length === 0) {
              const nextArr = Math.min(...list.filter((p) => !p.done).map((p) => p.arrival));
              gantt.push({ name: "IDLE", start: t, end: nextArr });
              t = nextArr;
              continue;
            }
            ready.sort((a, b) => a.burst - b.burst || a.arrival - b.arrival);
            const cur = ready[0];
            gantt.push({ name: cur.name, start: t, end: t + cur.burst });
            t += cur.burst;
            cur.finish = t;
            cur.done = true;
            doneCnt++;
          }
          procs.forEach((p, idx) => (p.finish = list[idx].finish));
        } else if (algo === "SRTN") {
          const list = procs.map((p) => ({ ...p }));
          let doneCnt = 0;
          while (doneCnt < list.length && t < 10000) {
            const ready = list.filter((p) => p.remaining > 0 && p.arrival <= t);
            if (ready.length === 0) {
              const nextArr = Math.min(...list.filter((p) => p.remaining > 0).map((p) => p.arrival));
              gantt.push({ name: "IDLE", start: t, end: nextArr });
              t = nextArr;
              continue;
            }
            ready.sort((a, b) => a.remaining - b.remaining || a.arrival - b.arrival);
            const cur = ready[0];
            if (gantt.length > 0 && gantt[gantt.length - 1].name === cur.name) {
              gantt[gantt.length - 1].end = t + 1;
            } else {
              gantt.push({ name: cur.name, start: t, end: t + 1 });
            }
            cur.remaining -= 1;
            t += 1;
            if (cur.remaining === 0) {
              cur.finish = t;
              doneCnt++;
            }
          }
          procs.forEach((p, idx) => (p.finish = list[idx].finish));
        } else if (algo === "RR") {
          const list = procs.map((p, idx) => ({ ...p, idx, inQ: false }));
          const queue = [];
          let doneCnt = 0;
          const enqueueArrived = (time) => {
            list
              .filter((p) => !p.inQ && p.remaining > 0 && p.arrival <= time)
              .sort((a, b) => a.arrival - b.arrival || a.idx - b.idx)
              .forEach((p) => {
                p.inQ = true;
                queue.push(p);
              });
          };
          enqueueArrived(0);
          while (doneCnt < list.length && t < 10000) {
            if (queue.length === 0) {
              const nextArr = Math.min(...list.filter((p) => p.remaining > 0).map((p) => p.arrival));
              gantt.push({ name: "IDLE", start: t, end: nextArr });
              t = nextArr;
              enqueueArrived(t);
              continue;
            }
            const cur = queue.shift();
            const run = Math.min(quantum, cur.remaining);
            gantt.push({ name: cur.name, start: t, end: t + run });
            t += run;
            cur.remaining -= run;
            enqueueArrived(t);
            if (cur.remaining > 0) {
              queue.push(cur);
            } else {
              cur.finish = t;
              doneCnt++;
            }
          }
          procs.forEach((p, idx) => (p.finish = list[idx].finish));
        }

        let sumTat = 0,
          sumWt = 0;
        const rows = procs
          .map((p) => {
            const tat = p.finish - p.arrival;
            const wt = tat - p.burst;
            sumTat += tat;
            sumWt += wt;
            return `<tr><td><strong>${escapeHtml(p.name)}</strong></td><td>${p.arrival}</td><td>${p.burst}</td><td><strong>${p.finish}</strong></td><td>${tat}</td><td><strong>${wt}</strong></td></tr>`;
          })
          .join("");

        const avgTat = (sumTat / procs.length).toFixed(2);
        const avgWt = (sumWt / procs.length).toFixed(2);

        out.innerHTML = `
          <div class="theory-box">
            <div style="margin-bottom:0.65rem;">
              <strong>📊 Sơ đồ Gantt (${algo}${algo === "RR" ? `, q=${quantum}` : ""}):</strong>
              <div class="mono" style="margin-top:0.35rem;display:flex;flex-wrap:wrap;gap:0.3rem;">
                ${gantt
                  .map(
                    (g) =>
                      `<span class="badge ${g.name === "IDLE" ? "badge-warning" : ""}" style="padding:0.3rem 0.55rem;">${escapeHtml(g.name)} [${g.start}→${g.end}]</span>`
                  )
                  .join("")}
              </div>
            </div>
            <div class="table-wrap" style="margin-bottom:0.6rem;">
              <table>
                <thead><tr><th>Process</th><th>Arrival</th><th>Burst</th><th>Finish</th><th>TAT</th><th>Waiting</th></tr></thead>
                <tbody class="mono">${rows}</tbody>
              </table>
            </div>
            <div>👉 <strong>Average Turnaround Time (TAT):</strong> <code style="color:var(--accent);font-weight:800;">${avgTat}</code> &nbsp;|&nbsp; <strong>Average Waiting Time (WT):</strong> <code style="color:var(--success);font-weight:800;">${avgWt}</code></div>
          </div>
        `;
      };
      cpuBtn.addEventListener("click", runCpu);
      runCpu();
    }

    // 2. Paging Translator & TLB EAT Calculator
    const pgBtn = document.getElementById("calc-pg-btn");
    if (pgBtn) {
      const runPg = () => {
        const pageSize = Math.max(1, parseInt(document.getElementById("pg-size").value, 10) || 4096);
        const vAddr = parseInt(document.getElementById("pg-vaddr").value, 10) || 0;
        const frameNum = parseInt(document.getElementById("pg-frame").value, 10) || 0;
        const hitRatio = parseFloat(document.getElementById("tlb-alpha").value);
        const tTlb = parseFloat(document.getElementById("tlb-time").value) || 0;
        const tMem = parseFloat(document.getElementById("mem-time").value) || 100;
        const out = document.getElementById("pg-output");

        const pageNum = Math.floor(vAddr / pageSize);
        const offset = vAddr % pageSize;
        const pAddr = frameNum * pageSize + offset;

        const alpha = isNaN(hitRatio) ? 0.8 : hitRatio > 1 ? hitRatio / 100 : hitRatio;
        const eat = alpha * (tTlb + tMem) + (1 - alpha) * (tTlb + 2 * tMem);

        out.innerHTML = `
          <div class="theory-box">
            <ul>
              <li><strong>Dịch Địa Chỉ Ảo <code>${vAddr}</code> (Page Size = ${pageSize} bytes):</strong><br/>
                • Page Number = <code>⌊${vAddr} / ${pageSize}⌋ = <strong>${pageNum}</strong></code><br/>
                • Offset = <code>${vAddr} mod ${pageSize} = <strong>${offset}</strong></code> (Giữ nguyên!)<br/>
                • Nếu Page ${pageNum} → Frame <strong>${frameNum}</strong> ⇒ Physical Address = <code>${frameNum} × ${pageSize} + ${offset} = <strong style="color:var(--success);">${pAddr}</strong></code>
              </li>
              <li style="margin-top:0.45rem;"><strong>Thời gian truy cập hiệu dụng TLB (EAT):</strong><br/>
                • Công thức: <code>${alpha.toFixed(2)}×(${tTlb}+${tMem}) + ${(1 - alpha).toFixed(2)}×(${tTlb}+2×${tMem})</code><br/>
                👉 <strong><code>EAT = <span style="color:var(--accent);">${eat.toFixed(2)} ns</span></code></strong>
              </li>
            </ul>
          </div>
        `;
      };
      pgBtn.addEventListener("click", runPg);
      runPg();
    }

    // 3. Page Replacement Simulator (FIFO, LRU, Optimal)
    const prBtn = document.getElementById("calc-pr-btn");
    if (prBtn) {
      const runPr = () => {
        const refStr = (document.getElementById("pr-refs").value || "").trim();
        const framesCount = Math.max(1, Math.min(10, parseInt(document.getElementById("pr-frames").value, 10) || 3));
        const out = document.getElementById("pr-output");

        const refs = refStr
          .split(/[\s,;]+/)
          .filter(Boolean)
          .map((x) => x.trim());
        if (refs.length === 0) return;

        function simAlgo(type) {
          const frames = [];
          const order = []; // for FIFO / LRU
          let faults = 0;
          const steps = [];

          refs.forEach((page, i) => {
            const hit = frames.includes(page);
            if (hit) {
              if (type === "LRU") {
                const pos = order.indexOf(page);
                if (pos !== -1) order.splice(pos, 1);
                order.push(page);
              }
              steps.push({ page, frames: frames.slice(), fault: false });
            } else {
              faults++;
              if (frames.length < framesCount) {
                frames.push(page);
                order.push(page);
              } else {
                let victim = frames[0];
                if (type === "FIFO" || type === "LRU") {
                  victim = order.shift();
                  order.push(page);
                } else if (type === "OPT") {
                  let farthest = -1;
                  frames.forEach((f) => {
                    const nextUse = refs.indexOf(f, i + 1);
                    if (nextUse === -1) {
                      farthest = Infinity;
                      victim = f;
                    } else if (nextUse > farthest) {
                      farthest = nextUse;
                      victim = f;
                    }
                  });
                }
                const vIdx = frames.indexOf(victim);
                frames[vIdx] = page;
              }
              steps.push({ page, frames: frames.slice(), fault: true });
            }
          });
          return { faults, hits: refs.length - faults, steps };
        }

        const rFifo = simAlgo("FIFO");
        const rLru = simAlgo("LRU");
        const rOpt = simAlgo("OPT");

        const traceLru = rLru.steps
          .map(
            (s) =>
              `<span class="badge ${s.fault ? "badge-warning" : "badge-success"}" style="margin:2px;">${escapeHtml(s.page)}→[${s.frames.join(",")}]${s.fault ? "*" : "✓"}</span>`
          )
          .join("");

        out.innerHTML = `
          <div class="theory-box">
            <ul>
              <li><strong>FIFO:</strong> <strong style="color:var(--warning);"><code>${rFifo.faults} Page Faults</code></strong> (${rFifo.hits} Hits)</li>
              <li><strong>LRU (Least Recently Used):</strong> <strong style="color:var(--accent);"><code>${rLru.faults} Page Faults</code></strong> (${rLru.hits} Hits)</li>
              <li><strong>Optimal (Lý thuyết tối ưu):</strong> <strong style="color:var(--success);"><code>${rOpt.faults} Page Faults</code></strong> (${rOpt.hits} Hits)</li>
              <li style="margin-top:0.45rem;"><strong>Chi tiết từng bước của LRU (* = Fault, ✓ = Hit):</strong><br/>
                <div class="mono" style="margin-top:0.35rem;display:flex;flex-wrap:wrap;gap:0.2rem;">${traceLru}</div>
              </li>
            </ul>
          </div>
        `;
      };
      prBtn.addEventListener("click", runPr);
      runPr();
    }

    // 4. Banker's Algorithm Simulator
    const bnkBtn = document.getElementById("calc-banker-btn");
    if (bnkBtn) {
      const runBanker = () => {
        const allocLines = (document.getElementById("bnk-alloc").value || "").trim().split(/\n+/).filter(Boolean);
        const maxLines = (document.getElementById("bnk-max").value || "").trim().split(/\n+/).filter(Boolean);
        const avail = (document.getElementById("bnk-avail").value || "")
          .trim()
          .split(/[\s,;]+/)
          .map(Number)
          .filter((x) => !isNaN(x));
        const out = document.getElementById("banker-output");

        const alloc = allocLines.map((l) => l.trim().split(/[\s,;]+/).map(Number));
        const maxM = maxLines.map((l) => l.trim().split(/[\s,;]+/).map(Number));
        const n = Math.min(alloc.length, maxM.length);
        const m = avail.length;
        if (n === 0 || m === 0) return;

        const need = [];
        for (let i = 0; i < n; i++) {
          const row = [];
          for (let j = 0; j < m; j++) row.push((maxM[i][j] || 0) - (alloc[i][j] || 0));
          need.push(row);
        }

        const work = avail.slice();
        const finish = new Array(n).fill(false);
        const seq = [];
        const logs = [];

        for (let step = 0; step < n; step++) {
          let found = -1;
          for (let i = 0; i < n; i++) {
            if (!finish[i] && need[i].every((val, j) => val <= work[j])) {
              found = i;
              break;
            }
          }
          if (found === -1) break;
          finish[found] = true;
          seq.push(`P${found}`);
          const before = work.join(", ");
          for (let j = 0; j < m; j++) work[j] += alloc[found][j] || 0;
          logs.push(`Chọn <strong>P${found}</strong> (Need [${need[found].join(", ")}] ≤ Work [${before}]) ⇒ Thu hồi Alloc → Work mới = [${work.join(", ")}]`);
        }

        const isSafe = seq.length === n;
        const needRows = need.map((r, i) => `P${i}: [${r.join(", ")}]`).join(" &nbsp;|&nbsp; ");

        out.innerHTML = `
          <div class="theory-box">
            <ul>
              <li><strong>Ma trận Need = Max - Allocation:</strong><br/><span class="mono">${needRows}</span></li>
              <li style="margin-top:0.35rem;"><strong>Kết luận Trạng thái:</strong>
                ${
                  isSafe
                    ? `<strong style="color:var(--success);">✅ SAFE STATE! Chuỗi an toàn: <code>&lt;${seq.join(", ")}&gt;</code></strong>`
                    : `<strong style="color:var(--danger);">❌ UNSAFE STATE! Không tìm thấy chuỗi an toàn cho cả ${n} tiến trình.</strong>`
                }
              </li>
              <li style="margin-top:0.35rem;"><strong>Các bước thực hiện:</strong><br/>
                ${logs.length ? logs.map((l, k) => `${k + 1}. ${l}`).join("<br/>") : "Không có tiến trình nào có Need ≤ Available!"}
              </li>
            </ul>
          </div>
        `;
      };
      bnkBtn.addEventListener("click", runBanker);
      runBanker();
    }

    // 5. Disk Arm Scheduling Simulator
    const dskBtn = document.getElementById("calc-disk-btn");
    if (dskBtn) {
      const runDisk = () => {
        const head = parseInt(document.getElementById("dsk-head").value, 10) || 11;
        const dir = document.getElementById("dsk-dir").value;
        const reqs = (document.getElementById("dsk-reqs").value || "")
          .trim()
          .split(/[\s,;]+/)
          .map(Number)
          .filter((x) => !isNaN(x));
        const out = document.getElementById("disk-output");
        if (reqs.length === 0) return;

        const calcDist = (order) => {
          let cur = head,
            dist = 0;
          order.forEach((c) => {
            dist += Math.abs(c - cur);
            cur = c;
          });
          return dist;
        };

        // FCFS
        const fcfsOrder = reqs.slice();
        const fcfsDist = calcDist(fcfsOrder);

        // SSTF
        const left = reqs.slice();
        const sstfOrder = [];
        let cur = head;
        while (left.length > 0) {
          let bestIdx = 0,
            bestDiff = Infinity;
          left.forEach((c, idx) => {
            const d = Math.abs(c - cur);
            if (d < bestDiff) {
              bestDiff = d;
              bestIdx = idx;
            }
          });
          cur = left.splice(bestIdx, 1)[0];
          sstfOrder.push(cur);
        }
        const sstfDist = calcDist(sstfOrder);

        // Elevator / LOOK
        const up = reqs.filter((c) => c >= head).sort((a, b) => a - b);
        const down = reqs.filter((c) => c < head).sort((a, b) => b - a);
        const elevOrder = dir === "up" ? [...up, ...down] : [...down, ...up];
        const elevDist = calcDist(elevOrder);

        out.innerHTML = `
          <div class="theory-box">
            <ul>
              <li><strong>FCFS:</strong> Tổng = <strong><code>${fcfsDist} cylinders</code></strong><br/><span class="mono" style="font-size:0.85rem;">${head} → ${fcfsOrder.join(" → ")}</span></li>
              <li style="margin-top:0.35rem;"><strong>SSF / SSTF (Gần nhất trước):</strong> Tổng = <strong style="color:var(--accent);"><code>${sstfDist} cylinders</code></strong><br/><span class="mono" style="font-size:0.85rem;">${head} → ${sstfOrder.join(" → ")}</span></li>
              <li style="margin-top:0.35rem;"><strong>Elevator / LOOK (Quét chiều ${dir === "up" ? "LÊN" : "XUỐNG"}):</strong> Tổng = <strong style="color:var(--success);"><code>${elevDist} cylinders</code></strong><br/><span class="mono" style="font-size:0.85rem;">${head} → ${elevOrder.join(" → ")}</span></li>
            </ul>
          </div>
        `;
      };
      dskBtn.addEventListener("click", runDisk);
      runDisk();
    }

    // 6. Memory Allocation (First/Best/Worst Fit) & I-Node Max File Size
    const memBtn = document.getElementById("calc-mem-btn");
    if (memBtn) {
      const runMem = () => {
        const holes = (document.getElementById("mem-holes").value || "")
          .trim()
          .split(/[\s,;]+/)
          .map(Number)
          .filter((x) => !isNaN(x) && x > 0);
        const req = parseInt(document.getElementById("mem-req").value, 10) || 12;

        const blkKb = parseFloat(document.getElementById("in-blk").value) || 4;
        const ptrB = parseInt(document.getElementById("in-ptr").value, 10) || 4;
        const direct = parseInt(document.getElementById("in-dir").value, 10) || 10;
        const out = document.getElementById("mem-output");

        const ff = holes.find((h) => h >= req);
        const bf = holes.filter((h) => h >= req).sort((a, b) => a - b)[0];
        const wf = holes.filter((h) => h >= req).sort((a, b) => b - a)[0];

        const k = Math.floor((blkKb * 1024) / ptrB);
        const maxBlocksSingle = direct + k;
        const maxBlocksDouble = direct + k + k * k;
        const singleKb = maxBlocksSingle * blkKb;
        const doubleMb = (maxBlocksDouble * blkKb) / 1024;

        out.innerHTML = `
          <div class="theory-box">
            <ul>
              <li><strong>Chọn lỗ trống cho tiến trình ${req} KB (từ [${holes.join(", ")}]):</strong><br/>
                • <strong>First Fit:</strong> <code>${ff !== undefined ? `${ff} KB (dư ${ff - req} KB)` : "Không đủ chỗ"}</code><br/>
                • <strong>Best Fit:</strong> <code>${bf !== undefined ? `${bf} KB (dư ${bf - req} KB)` : "Không đủ chỗ"}</code><br/>
                • <strong>Worst Fit:</strong> <code>${wf !== undefined ? `${wf} KB (dư ${wf - req} KB)` : "Không đủ chỗ"}</code>
              </li>
              <li style="margin-top:0.45rem;"><strong>I-Node Max File Size (Block = ${blkKb} KB, Con trỏ = ${ptrB} B, Direct = ${direct}):</strong><br/>
                • Số con trỏ / 1 indirect block: <strong><code>K = ${blkKb * 1024}/${ptrB} = ${k}</code></strong><br/>
                • Direct + 1 Single Indirect: <strong><code>${maxBlocksSingle.toLocaleString()} blocks = ${singleKb.toLocaleString()} KB</code></strong><br/>
                • Direct + 1 Single + 1 Double Indirect: <strong><code>${maxBlocksDouble.toLocaleString()} blocks ≈ ${doubleMb.toFixed(2)} MB</code></strong>
              </li>
            </ul>
          </div>
        `;
      };
      memBtn.addEventListener("click", runMem);
      runMem();
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
      const allCards = getAllFlashcards();
      const cats = Array.from(new Set(allCards.map((c) => c.category)));
      catSelect.innerHTML =
        `<option value="ALL">📚 Tất cả Flashcards OSG202 (${allCards.length} thẻ)</option>` +
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
      const frontOpts = document.getElementById("fc-front-options");
      const backCorrectBox = document.getElementById("fc-back-correct-box");
      const backAns = document.getElementById("fc-back-ans");
      const masterBtn = document.getElementById("fc-master-btn");

      if (fcList.length === 0) {
        counterEl.textContent = "0 / 0";
        frontCat.textContent = "Trống";
        frontTerm.textContent = "Không có thẻ nào khớp bộ lọc!";
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
                <div style="font-weight:800;font-size:1.05rem;line-height:1.5;white-space:pre-line;margin-bottom:0.5rem;">${escapeHtml(item.term)}</div>
                ${optsHtml}
                <div class="fc-mini-ans">
                  ${item.correctText ? `<div style="font-weight:800;color:var(--success);margin-bottom:0.35rem;white-space:pre-line;">✅ Đáp án đúng: ${escapeHtml(item.correctText)}</div>` : ""}
                  <div style="font-size:0.93rem;color:var(--text-primary);white-space:pre-line;line-height:1.6;"><strong>📖 Giải thích:</strong> ${escapeHtml(item.answer)}</div>
                </div>
              </div>
              <div style="display:flex;justify-content:space-between;align-items:center;padding-top:0.55rem;border-top:1px solid var(--border);">
                <button class="btn btn-secondary btn-sm" onclick="toggleOsgMiniCard(${idx})">👁️ Lật xem đáp án &amp; giải thích</button>
                <button class="btn ${isMastered ? "btn-success" : "btn-secondary"} btn-sm" onclick="toggleOsgMasterById('${escapeHtml(String(item.id))}')">
                  ${isMastered ? "✓ Đã thuộc" : "⭐ Thuộc"}
                </button>
              </div>
            </div>
          `;
        })
        .join("");
    }

    window.toggleOsgMiniCard = function (idx) {
      const el = document.getElementById(`fc-mini-${idx}`);
      if (el) el.classList.toggle("revealed");
    };

    window.toggleOsgMasterById = function (rawId) {
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
      showToast("Đã trộn ngẫu nhiên bộ Flashcards OSG202!");
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

  // ==================== QUIZ & EOS EXAM SIMULATOR ENGINE ====================
  let quizSession = {
    mode: "exam",
    questions: [],
    currentIndex: 0,
    userAnswers: {},
    flagged: {},
    peekedAnswer: {},
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
      topicSelect.innerHTML =
        `<option value="ALL">🎲 Tất cả 6 Chương FE OSG202 (${allQs.length} câu)</option>` +
        `<option value="WRONG">🔥 Các câu từng làm sai (${state.wrongQuestionIds.length} câu)</option>` +
        topics
          .map((t) => {
            const c = allQs.filter((q) => q.topic === t).length;
            return `<option value="${escapeHtml(t)}">${escapeHtml(t)} (${c} câu)</option>`;
          })
          .join("");
      if (prevVal && Array.from(topicSelect.options).some((o) => o.value === prevVal)) {
        topicSelect.value = prevVal;
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
            showToast("Bạn chưa có câu sai nào! Hệ thống lấy toàn bộ ngân hàng câu hỏi.");
            pool = getAllQuestions();
          }
        } else if (topic !== "ALL") {
          pool = pool.filter((q) => q.topic === topic);
        }
        if (mode === "exam") pool = [...pool].sort(() => Math.random() - 0.5);
        pool = pool.slice(0, maxCount);
      }

      const customMins = window.__osgCustomMinutes;
      window.__osgCustomMinutes = null;
      const durationSecs = customMins ? customMins * 60 : pool.length >= 45 ? 3600 : Math.max(900, pool.length * 72);

      quizSession = {
        mode,
        questions: pool,
        currentIndex: 0,
        userAnswers: {},
        flagged: {},
        peekedAnswer: {},
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
            submitQuiz();
          }
        }, 1000);
      } else {
        timerBox.style.display = "none";
      }

      document.getElementById("quiz-result-banner").style.display = "none";
      const sheet = document.getElementById("quiz-full-review-sheet");
      if (sheet) {
        sheet.style.display = "none";
        sheet.innerHTML = "";
      }
      renderQuizQuestion();
      renderQuizPalette();
    }

    function updateTimerDisplay() {
      const box = document.getElementById("quiz-timer-box");
      if (!box) return;
      const m = Math.floor(Math.max(0, quizSession.timerSeconds) / 60).toString().padStart(2, "0");
      const s = (Math.max(0, quizSession.timerSeconds) % 60).toString().padStart(2, "0");
      box.textContent = `⏱️ ${m}:${s}`;
    }

    function renderQuizQuestion() {
      const qList = quizSession.questions;
      const idx = quizSession.currentIndex;
      const q = qList[idx];
      if (!q) return;

      const answeredCount = Object.keys(quizSession.userAnswers).length;
      const progEl = document.getElementById("quiz-progress-summary");
      if (progEl) progEl.textContent = `Đã làm: ${answeredCount} / ${qList.length} câu`;

      document.getElementById("quiz-q-meta").innerHTML = `
        <span class="badge badge-warning">${escapeHtml(q.topic)}</span>
        <span style="color:var(--text-primary);font-size:0.95rem;font-weight:800;">Câu ${idx + 1} / ${qList.length}</span>
      `;
      document.getElementById("quiz-q-text").textContent = q.question;

      document.getElementById("quiz-flag-btn").textContent = quizSession.flagged[idx] ? "🚩 Đã gắn cờ" : "🏳️ Gắn cờ xem lại";

      const chosen = quizSession.userAnswers[idx];
      const correctArr = getCorrectArray(q);
      const showAnswerNow =
        quizSession.submitted || quizSession.peekedAnswer[idx] || (quizSession.mode === "practice" && chosen !== undefined);

      const peekBtn = document.getElementById("quiz-peek-ans-btn");
      if (peekBtn) {
        peekBtn.style.display = quizSession.submitted ? "none" : "inline-flex";
        peekBtn.textContent = showAnswerNow ? "🙈 Ẩn lời giải" : "👁️ Xem lời giải câu này";
      }

      const letters = ["A", "B", "C", "D", "E", "F"];
      document.getElementById("quiz-options-list").innerHTML = q.options
        .map((opt, optIdx) => {
          let cls = "option-btn";
          const isSelected = chosen === optIdx;
          const isRightOpt = correctArr.includes(optIdx);
          if (isSelected) cls += " selected";
          if (showAnswerNow) {
            if (isRightOpt) cls += " correct";
            else if (isSelected && !isRightOpt) cls += " wrong";
          }
          return `
            <button class="${cls}" ${quizSession.submitted ? "disabled" : ""} onclick="selectOsgOption(${optIdx})">
              <span class="option-letter">${letters[optIdx]}</span>
              <span>${escapeHtml(opt)}</span>
            </button>
          `;
        })
        .join("");

      const expContainer = document.getElementById("quiz-explanation-box");
      if (showAnswerNow) {
        const isCorrect = isAnswerCorrect(q, chosen);
        const rightLetters = correctArr.map((i) => `${letters[i]}. ${q.options[i]}`).join(" | ");
        expContainer.style.display = "block";
        expContainer.innerHTML = `
          <div style="font-weight:800;margin-bottom:0.4rem;color:${
            chosen === undefined ? "var(--warning)" : isCorrect ? "var(--success)" : "var(--danger)"
          };">
            ${chosen === undefined ? `💡 Đáp án đúng: ${escapeHtml(rightLetters)}` : isCorrect ? `✅ Chính xác! (${escapeHtml(rightLetters)})` : `❌ Chưa đúng! Đáp án đúng là: ${escapeHtml(rightLetters)}`}
          </div>
          <div style="color:var(--text-primary);white-space:pre-line;line-height:1.65;"><strong>📖 Lời giải chi tiết:</strong>\n${escapeHtml(q.explanation)}</div>
        `;
      } else {
        expContainer.style.display = "none";
      }

      document.getElementById("quiz-prev-btn").disabled = idx === 0;
      document.getElementById("quiz-next-btn").disabled = idx === qList.length - 1;
    }

    function renderQuizPalette() {
      document.getElementById("quiz-palette-grid").innerHTML = quizSession.questions
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
          return `<button class="${cls}" onclick="jumpOsgQuestion(${i})">${i + 1}</button>`;
        })
        .join("");
    }

    window.selectOsgOption = function (optIdx) {
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

    window.jumpOsgQuestion = function (idx) {
      quizSession.currentIndex = idx;
      renderQuizQuestion();
      renderQuizPalette();
    };

    document.getElementById("quiz-peek-ans-btn").addEventListener("click", () => {
      quizSession.peekedAnswer[quizSession.currentIndex] = !quizSession.peekedAnswer[quizSession.currentIndex];
      renderQuizQuestion();
      renderQuizPalette();
    });
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
      quizSession.flagged[quizSession.currentIndex] = !quizSession.flagged[quizSession.currentIndex];
      renderQuizQuestion();
      renderQuizPalette();
    });

    function renderFullReviewSheet(filterMode = "ALL") {
      const sheet = document.getElementById("quiz-full-review-sheet");
      if (!sheet) return;
      sheet.style.display = "block";
      const letters = ["A", "B", "C", "D", "E", "F"];
      const html = quizSession.questions
        .map((q, idx) => {
          const chosen = quizSession.userAnswers[idx];
          const isCorrect = isAnswerCorrect(q, chosen);
          if (filterMode === "WRONG" && isCorrect) return "";
          if (filterMode === "CORRECT" && !isCorrect) return "";
          const rightArr = getCorrectArray(q);
          const rightText = rightArr.map((i) => `${letters[i]}. ${q.options[i]}`).join(" | ");
          const chosenText = chosen !== undefined ? `${letters[chosen]}. ${q.options[chosen]}` : "Chưa chọn";
          return `
            <div class="theory-box" style="margin-bottom:0.9rem;border-left:4px solid ${isCorrect ? "var(--success)" : "var(--danger)"};">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.4rem;">
                <span class="badge ${isCorrect ? "badge-success" : "badge-warning"}">${isCorrect ? "✓ ĐÚNG" : "✗ SAI / BỎ TRỐNG"} • Câu ${idx + 1}</span>
                <span style="font-size:0.84rem;color:var(--text-secondary);">${escapeHtml(q.topic)}</span>
              </div>
              <div style="font-weight:700;margin-bottom:0.5rem;white-space:pre-line;">${escapeHtml(q.question)}</div>
              <div style="font-size:0.92rem;margin-bottom:0.4rem;">
                <strong>Bạn chọn:</strong> <span style="color:${isCorrect ? "var(--success)" : "var(--danger)"};font-weight:700;">${escapeHtml(chosenText)}</span> &nbsp;|&nbsp;
                <strong>Đáp án đúng:</strong> <span style="color:var(--success);font-weight:700;">${escapeHtml(rightText)}</span>
              </div>
              <div style="font-size:0.92rem;color:var(--text-secondary);white-space:pre-line;line-height:1.6;">💡 ${escapeHtml(q.explanation)}</div>
            </div>
          `;
        })
        .join("");

      sheet.innerHTML = `
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">📋 Toàn Bộ Đáp Án &amp; Lời Giải Chi Tiết (${quizSession.questions.length} Câu)</h3>
            <div style="display:flex;gap:0.45rem;flex-wrap:wrap;">
              <button class="btn ${filterMode === "ALL" ? "" : "btn-secondary"} btn-sm" onclick="filterOsgReview('ALL')">Tất cả</button>
              <button class="btn ${filterMode === "WRONG" ? "" : "btn-secondary"} btn-sm" onclick="filterOsgReview('WRONG')">❌ Chỉ câu Sai</button>
              <button class="btn ${filterMode === "CORRECT" ? "" : "btn-secondary"} btn-sm" onclick="filterOsgReview('CORRECT')">✅ Chỉ câu Đúng</button>
            </div>
          </div>
          <div>${html || `<div class="theory-box">Không có câu hỏi nào trong mục lọc này!</div>`}</div>
        </div>
      `;
    }

    window.filterOsgReview = (m) => renderFullReviewSheet(m);

    function submitQuiz() {
      clearInterval(quizSession.timerInterval);
      quizSession.submitted = true;
      let correctCount = 0;
      quizSession.questions.forEach((q, i) => {
        if (isAnswerCorrect(q, quizSession.userAnswers[i])) {
          correctCount++;
          state.wrongQuestionIds = state.wrongQuestionIds.filter((id) => id !== q.id);
        } else {
          if (!state.wrongQuestionIds.includes(q.id)) state.wrongQuestionIds.push(q.id);
        }
      });

      const total = quizSession.questions.length;
      const pct = total ? Math.round((correctCount / total) * 100) : 0;
      const score10 = total ? ((correctCount / total) * 10).toFixed(2) : "0.00";
      const elapsed = Math.max(1, quizSession.initialSeconds - quizSession.timerSeconds);
      state.quizAttempts++;
      if (pct > state.quizBestScore) state.quizBestScore = pct;
      saveState();
      populateTopics();

      const isPass = parseFloat(score10) >= 4.0;
      const banner = document.getElementById("quiz-result-banner");
      banner.style.display = "block";
      banner.innerHTML = `
        <div class="card" style="border:2px solid ${isPass ? "var(--success)" : "var(--danger)"};margin-bottom:1.25rem;">
          <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;">
            <div>
              <span class="badge ${isPass ? "badge-success" : "badge-warning"}">${isPass ? "✅ PASSED (Đạt ≥ 4.0)" : "⚠️ CHƯA ĐẠT (< 4.0)"}</span>
              <span class="mono" style="margin-left:0.5rem;font-size:0.88rem;color:var(--text-secondary);">⏱️ ${Math.floor(elapsed / 60)}p ${elapsed % 60}s</span>
              <h3 style="font-size:1.45rem;font-weight:800;margin-top:0.35rem;">
                🏆 Điểm Thi FE OSG202: <span style="color:${pct >= 80 ? "var(--success)" : "var(--warning)"};">${score10} / 10.0</span> (${correctCount}/${total} câu • ${pct}%)
              </h3>
            </div>
            <button class="btn" onclick="document.getElementById('quiz-start-btn').click()">🔄 Làm đề mới</button>
          </div>
        </div>
      `;

      renderQuizQuestion();
      renderQuizPalette();
      renderFullReviewSheet("ALL");
    }

    document.getElementById("quiz-submit-btn").addEventListener("click", submitQuiz);
    startBtn.addEventListener("click", () => startQuiz());

    window.addEventListener("keydown", (e) => {
      const activePanel = document.querySelector(".tab-panel.active");
      if (!activePanel || activePanel.id !== "tab-quiz") return;
      if (["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) return;
      if (e.code === "ArrowRight") document.getElementById("quiz-next-btn").click();
      else if (e.code === "ArrowLeft") document.getElementById("quiz-prev-btn").click();
      else if (!quizSession.submitted) {
        const km = { Digit1: 0, KeyA: 0, Digit2: 1, KeyB: 1, Digit3: 2, KeyC: 2, Digit4: 3, KeyD: 3 };
        if (km[e.code] !== undefined) {
          const q = quizSession.questions[quizSession.currentIndex];
          if (q && km[e.code] < q.options.length) window.selectOsgOption(km[e.code]);
        }
      }
    });

    populateTopics();
    startQuiz();
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
