import { DATA } from '../data/alphabetData';
import { CHARS } from '../data/chars';
import { MORPHEMES } from '../data/morphemes';

export type RawLetterData = typeof DATA[number];
export type LetterData = RawLetterData & {
  h: string;
  name: string;
  hebrew: string;
  symbol: string;
  meanings: string[];
  sound: string;
  note: string;
  chars: Array<{ script: string; chars: string; name: string; note: string }>;
};

export type Morpheme = {
  m: string;
  type: string;
  origin: string;
  meaning: string;
  examples: string;
  cats?: string[];
  letter?: string;
  index?: number;
  id?: string;
};

function normalizeLetter(item: RawLetterData): LetterData {
  return {
    ...item,
    h: item.heb,
    name: item.hname,
    hebrew: item.hname,
    symbol: item.sym,
    meanings: item.means || [],
    sound: (item.ipa_desc || []).join(' · '),
    note: `${item.sym}: ${(item.means || []).join(', ')}`,
    chars: ((CHARS as Record<string, LetterData['chars']>)[item.l] || []),
  };
}

export const letters: LetterData[] = (DATA as RawLetterData[]).map(normalizeLetter);
export const alphabet = letters.map(item => item.l);

export function entriesForLetter(letter: string): Morpheme[] {
  return ((MORPHEMES as Record<string, Morpheme[]>)[letter] || []).map((entry, index) => ({
    ...entry,
    letter,
    index,
    id: `morph-${letter}-${index}`,
  }));
}

export function allMorphEntries(): Morpheme[] {
  return Object.entries(MORPHEMES as Record<string, Morpheme[]>).flatMap(([letter, arr]) =>
    arr.map((entry, index) => ({ ...entry, letter, index, id: `morph-${letter}-${index}` })),
  );
}

export function filterMorphs(list: Morpheme[], query: string, cat = 'all', origin = 'all', kind = 'all') {
  const q = query.trim().toLowerCase();
  return list.filter(entry => {
    const catOk = cat === 'all' || (entry.cats || []).includes(cat);
    const originOk = origin === 'all' || entry.origin.toLowerCase().includes(origin.toLowerCase());
    const kindOk = kind === 'all' || entry.type.toLowerCase().includes(kind.toLowerCase());
    const hay = [entry.m, entry.type, entry.origin, entry.meaning, entry.examples, (entry.cats || []).join(' ')].join(' ').toLowerCase();
    return catOk && originOk && kindOk && (!q || hay.includes(q));
  });
}

export function typeCount(list: Morpheme[], type: string) {
  return list.filter(entry => entry.type.toLowerCase().includes(type)).length;
}
