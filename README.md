# Alphabet Roots + STEM App

A single-file HTML study app for exploring alphabet roots, vocabulary, morphemes, STEM formulas, strategy lessons, and quiz/exam practice.

## App Preview

The app opens with a compact dashboard that includes a streak counter, study-mode buttons, a download button, a timer, progress tracking, and previous/next navigation.

```html
<div class="top-bar">
  <span>Alphabet Roots + STEM</span>
  <span class="streak" id="streak-display">streak: 0</span>
  <button class="btn download-app" onclick="downloadCurrentHTML()">Download</button>

  <div class="mode-bar" role="tablist" aria-label="Study modes">
    <button onclick="setMode('explore')">Alphabet</button>
    <button onclick="setMode('vocab')">Vocab</button>
    <button onclick="setMode('morph')">Morphemes</button>
    <button onclick="openQuizLab()">Quiz</button>
    <button onclick="openExamLab('ap')">AP</button>
    <button onclick="openExamLab('clep')">CLEP</button>
    <button onclick="setMode('stem')">STEM</button>
    <button onclick="setMode('strategy')">Strategy</button>
  </div>

  <div class="timer-box" id="timer" onclick="toggleTimer()">0:00</div>
</div>
```

## Main Study Modes

- **Alphabet** — shows Hebrew-root inspired alphabet cards with IPA pronunciation, root meanings, modern script connections, and cross-language vocabulary.
- **Vocab** — interactive vocabulary reveal cards.
- **Morphemes** — searchable morpheme bank with filters.
- **Counts** — overview of morpheme categories and totals.
- **STEM** — formula cards, diagrams, worked examples, quick methods, and solvers.
- **Strategy** — reading and writing strategy lessons.
- **Quiz / AP / CLEP** — generated practice questions for alphabet, morphemes, arithmetic, algebra, geometry, calculus, physics, chemistry, AP, CLEP, and Accuplacer-style topics.

## Mode Switching Snippet

```js
function setMode(m){
  mode = m;
  ['explore','vocab','quiz','ap','clep','morph','counts','stem','strategy'].forEach(x => {
    const b = document.getElementById('mode-' + x);
    if (b) b.classList.toggle('active', x === m);
  });
  if (m === 'quiz') generateQuiz();
  render();
}
```

## Alphabet Card Snippet

The alphabet view renders a hero card with a Latin letter, Hebrew glyph, IPA sounds, root meanings, and language examples.

```js
function renderExplore(d){
  const ch = CHARS[d.l] || [];
  document.getElementById('main-content').innerHTML = `
    <div class="card">
      <div class="letter-hero">
        <div>
          <div class="letter-glyph">${d.l}</div>
          <div class="hebrew-glyph">${d.heb}</div>
        </div>
        <div class="letter-info">
          <div class="letter-en">${d.l} — ${d.hname} (${d.heb})</div>
          <div class="symbol-tag">${d.sym}</div>
          <div class="meaning-tags">
            ${d.means.map(m => `<span class="tag">${m}</span>`).join('')}
          </div>
        </div>
      </div>
    </div>`;
}
```

## STEM Formula Card Snippet

STEM topics use polished formula cards with subject badges, real-world context, diagrams, formulas, steps, and examples.

```css
.formula-card{
  background:linear-gradient(160deg,var(--c2) 0%,var(--c1) 100%);
  border:.5px solid var(--bd);
  border-radius:14px;
  overflow:hidden;
  display:flex;
  flex-direction:column;
}

.fc-formula{
  font-family:ui-monospace,SFMono-Regular,Menlo,monospace;
  white-space:pre-line;
  background:rgba(0,0,0,.22);
  border-radius:8px;
  color:#9ecef0;
}
```

Example STEM method included in the app:

```js
{
  subject: 'Vedic Polynomial Division (Paravartya)',
  area: 'Algebra',
  formula: 'Divide P(x) by (x − c):\n1. Write c and the coefficients of P\n2. Bring down first coefficient\n3. Multiply by c → place under next coeff\n4. Add → repeat\nLast value = remainder',
  method: 'Synthetic Division: replace the divisor x−c with just the number c.'
}
```

## Quiz Generator Snippet

The app includes generated quiz flows that create multiple-choice questions and update score/streak state.

```js
function setQuizCategory(cat){
  quizCat = cat;
  quizSub = 'all';
  generateQuiz();
  renderQuiz();
}

function answerQuiz(i){
  if (quizAnswered) return;
  quizAnswered = true;
  if (i === currentQ.a) quizScore++;
  renderQuiz();
}
```

## File Structure

```text
stem-language-app(3).html
├── <style> app theme, layout, cards, quiz, STEM, strategy UI
├── DATA alphabet roots and vocabulary
├── MORPHEMES searchable morpheme entries
├── QUICK_STEM_METHODS formula and quick-method cards
├── quiz generators for multiple subjects
└── render functions for each mode
```

## Run Locally

Open the HTML file directly in a browser:

```bash
open "stem-language-app(3).html"
```

Or serve it locally:

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000/stem-language-app(3).html
```

## Notes

This is a self-contained front-end app. It does not require a build step, package manager, database, or server-side code.
