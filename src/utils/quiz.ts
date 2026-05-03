import { allMorphEntries, letters } from './data';

export type QuizQuestion = { prompt: string; correct: string; opts: string[]; hint?: string; focus?: string; passage?: string; essay?: boolean };

const rnd = (n: number) => Math.floor(Math.random() * n);
const pick = <T,>(arr: T[]) => arr[rnd(arr.length)];
const shuffle = <T,>(arr: T[]) => [...arr].sort(() => Math.random() - 0.5);
const distractors = (correct: string, pool: string[], n = 3) => {
  const out: string[] = [];
  for (const item of shuffle(pool)) {
    if (item !== correct && !out.includes(item)) out.push(item);
    if (out.length >= n) break;
  }
  while (out.length < n) out.push('—');
  return out;
};
const make = (prompt: string, correct: string, wrong: string[], hint: string, focus: string, extra: Partial<QuizQuestion> = {}): QuizQuestion => ({ prompt, correct, opts: shuffle([correct, ...wrong].slice(0, 4)), hint, focus, ...extra });

export function generateQuestion(mode: 'quiz' | 'ap' | 'clep' | 'accuplacer'): QuizQuestion {
  const pools = {
    alphabet: () => {
      const d = pick(letters as any[]);
      const correct = String(pick<string>(d.meanings || [d.symbol]));
      const meaningPool = (letters as any[]).flatMap((x: any) => x.meanings || []).map(String);
      return make(`What idea is connected with ${d.l} / ${d.name}?`, correct, distractors(correct, meaningPool), d.note || d.symbol, 'Letter roots');
    },
    morph: () => {
      const entry = pick(allMorphEntries());
      return make(`What does ${entry.m} mean?`, entry.meaning, distractors(entry.meaning, allMorphEntries().map(e => e.meaning)), `${entry.type} · ${entry.origin} · examples: ${entry.examples}`, 'Morphemes');
    },
    arithmetic: () => {
      const a = 2 + rnd(18), b = 2 + rnd(18);
      return make(`${a} × ${b} = ?`, String(a * b), [String(a + b), String(a * b + a), String(a * b - b)], 'Multiply or use repeated addition.', 'Arithmetic');
    },
    algebra: () => {
      const x = 1 + rnd(12), a = 2 + rnd(8), b = rnd(12);
      return make(`Solve for x: ${a}x + ${b} = ${a * x + b}`, String(x), [String(x + 1), String(x - 1), String(a * x)], 'Subtract the constant, then divide by the coefficient.', 'Algebra');
    },
    geometry: () => {
      const w = 3 + rnd(10), h = 3 + rnd(10);
      return make(`Area of a rectangle with width ${w} and height ${h}?`, String(w * h), [String(2 * (w + h)), String(w + h), String(w * h + 2)], 'Area = width × height.', 'Geometry');
    },
    calculus: () => {
      const n = 2 + rnd(6);
      return make(`Derivative of x^${n}?`, `${n}x^${n - 1}`, [`x^${n - 1}`, `${n - 1}x^${n}`, `${n + 1}x^${n}`], 'Power rule: bring exponent down and subtract 1 from the exponent.', 'Calculus');
    },
    chemistry: () => make('Which number is Avogadro’s number approximately?', '6.02 × 10^23', ['9.81', '3.00 × 10^8', '1.60 × 10^-19'], 'A mole contains about 6.02 × 10^23 particles.', 'Chemistry'),
    reading: () => make('Choose the best main idea: A paragraph explains that sleep strengthens memory and improves focus.', 'Sleep supports learning and attention.', ['Sleep is optional for students.', 'Focus only depends on caffeine.', 'Memory cannot be improved.'], 'Main idea = broad claim supported by details.', 'Reading'),
    writing: () => make('Best revision: “The experiment was difficult, it taught us a lot.”', 'The experiment was difficult, but it taught us a lot.', ['The experiment was difficult it taught us a lot.', 'The experiment difficult, taught a lot.', 'Difficult experiment taught.'], 'Use a conjunction to fix the comma splice.', 'Writing'),
  };

  if (mode === 'ap') return pick([pools.calculus, pools.chemistry, pools.geometry, pools.algebra])();
  if (mode === 'clep') return pick([pools.algebra, pools.arithmetic, pools.geometry, pools.reading])();
  if (mode === 'accuplacer') return pick([pools.arithmetic, pools.algebra, pools.reading, pools.writing])();
  return pick(Object.values(pools))();
}
