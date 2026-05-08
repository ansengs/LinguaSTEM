export type Mode = 'explore' | 'vocab' | 'morph' | 'counts' | 'quiz' | 'ap' | 'clep' | 'accuplacer' | 'stem' | 'strategy';

export const MODE_GROUPS: { label: string; items: { mode: Mode; label: string; icon: string; description: string }[] }[] = [
  { label: 'Language', items: [
    { mode: 'explore', label: 'Letter Roots', icon: '🔤', description: 'Explore letter roots, symbols and phonetics' },
    { mode: 'vocab', label: 'Word Bank', icon: '📖', description: 'Vocabulary flashcards grouped by letter' },
    { mode: 'morph', label: 'Word Parts', icon: '🧩', description: 'Prefixes, roots, and suffixes' },
    { mode: 'counts', label: 'Morpheme Index', icon: '🗂️', description: 'Full morpheme browser' },
  ]},
  { label: 'Practice', items: [
    { mode: 'quiz', label: 'Practice Quiz', icon: '✏️', description: 'Mixed adaptive quiz' },
    { mode: 'ap', label: 'AP Practice', icon: '📗', description: 'Calculus, Physics, Chemistry and Stats' },
    { mode: 'clep', label: 'CLEP Practice', icon: '📘', description: 'College Algebra, Precalculus and Chemistry' },
    { mode: 'accuplacer', label: 'ACCUPLACER', icon: '📕', description: '271-score target prep' },
  ]},
  { label: 'Learn', items: [
    { mode: 'stem', label: 'Formula Lab', icon: '⚗️', description: 'STEM formula cards' },
    { mode: 'strategy', label: 'Study Science', icon: '🧠', description: 'Research-backed study strategies' },
  ]},
];

export const flatModes = MODE_GROUPS.flatMap(group => group.items);
