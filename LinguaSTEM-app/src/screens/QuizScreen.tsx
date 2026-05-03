import React, { useEffect, useMemo, useState } from 'react';
import { Linking, Pressable, ScrollView, StyleSheet, Text, TextInput, View, useWindowDimensions } from 'react-native';
import { Card, Button, Chip, SectionTitle } from '../components/Primitives';
import { colors, radius, shadows, sharedStyles } from '../theme/theme';
import { ACCU_IXL_PLANS, ACCU_SAMPLE_PDFS, QB, QXQuestion, STUDY_GUIDES } from '../data/qxData';

type Track = 'quiz' | 'ap' | 'clep' | 'accuplacer';
type Mode = Track;
type SheetRow = {
  id: string;
  focus: string;
  prompt: string;
  chosen: string;
  correct: string;
  ok: boolean;
  why: string;
  how: string;
  topic: string;
};

const TRACKS: { id: Track; label: string }[] = [
  { id: 'quiz', label: '📝 General Quiz' },
  { id: 'ap', label: '📗 AP Exams' },
  { id: 'clep', label: '📘 CLEP Exams' },
  { id: 'accuplacer', label: '📕 ACCUPLACER' },
];
const QUIZ_CATS = [
  { id: 'arithmetic', label: 'Arithmetic' }, { id: 'geometry', label: 'Geometry' }, { id: 'statistics', label: 'Statistics' }, { id: 'reading', label: 'Reading' }, { id: 'writing', label: 'Writing' },
];
const AP_CATS = [
  { id: 'ap_calc_ab', label: 'Calculus AB' }, { id: 'ap_calc_bc', label: 'Calculus BC' }, { id: 'ap_precalc', label: 'Precalculus' }, { id: 'ap_stats', label: 'Statistics' },
  { id: 'ap_physics_1', label: 'Physics 1' }, { id: 'ap_physics_2', label: 'Physics 2' }, { id: 'ap_physics_c_mech', label: 'Physics C: Mech' }, { id: 'ap_physics_c_em', label: 'Physics C: E&M' },
  { id: 'ap_chem', label: 'Chemistry' }, { id: 'ap_bio', label: 'Biology' }, { id: 'ap_envsci', label: 'Env. Science' }, { id: 'ap_csa', label: 'Computer Science A' },
];
const CLEP_CATS = [
  { id: 'clep_college_algebra', label: 'College Algebra' }, { id: 'clep_college_math', label: 'College Mathematics' }, { id: 'clep_precalc', label: 'Precalculus' }, { id: 'clep_calc', label: 'Calculus' },
  { id: 'clep_chem', label: 'Chemistry' }, { id: 'clep_bio', label: 'Biology' }, { id: 'clep_natsci', label: 'Natural Sciences' }, { id: 'clep_financial_accounting', label: 'Financial Accounting' },
  { id: 'clep_info_systems', label: 'Information Systems' }, { id: 'clep_mgmt', label: 'Principles of Mgmt' }, { id: 'clep_business_law', label: 'Business Law' },
  { id: 'clep_lit', label: 'Analyzing Literature' }, { id: 'clep_composition', label: 'College Composition' },
];
const ACCU_CATS = [
  { id: 'mixed', label: 'Mixed' }, { id: 'accu_reading', label: 'Reading' }, { id: 'accu_writing', label: 'Writing' }, { id: 'accu_arithmetic', label: 'Arithmetic' },
  { id: 'accu_qras', label: 'Quantitative Reasoning' }, { id: 'accu_aaf', label: 'Advanced Algebra' }, { id: 'essay', label: 'WritePlacer Essay' },
];

const shuffle = <T,>(arr: T[]) => {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};
const pick = <T,>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];

function shuffledQuestion(q: QXQuestion): QXQuestion {
  const pairs = q.options.map((t, i) => ({ t, i }));
  const shuffled = shuffle(pairs);
  return { ...q, options: shuffled.map(p => p.t), answer: shuffled.findIndex(p => p.i === q.answer) };
}

export function QuizScreen({ mode, streak, setStreak }: { mode: Mode; streak: number; setStreak: (n: number) => void }) {
  const [track, setTrack] = useState<Track>(mode);
  const [quizCat, setQuizCat] = useState('arithmetic');
  const [apExam, setApExam] = useState('ap_calc_ab');
  const [clepExam, setClepExam] = useState('clep_college_algebra');
  const [accuSection, setAccuSection] = useState('mixed');
  const [current, setCurrent] = useState<QXQuestion | null>(null);
  const [chosen, setChosen] = useState<number | null>(null);
  const [sheet, setSheet] = useState<SheetRow[]>([]);
  const [seen, setSeen] = useState<Record<string, boolean>>({});
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [accuScaled, setAccuScaled] = useState(250);
  const [accuDifficulty, setAccuDifficulty] = useState(1);
  const [accuStreak, setAccuStreak] = useState(0);
  const [accuMissed, setAccuMissed] = useState<Record<string, number>>({});
  const [accuStrong, setAccuStrong] = useState<Record<string, number>>({});
  const [essay, setEssay] = useState('');
  const { width } = useWindowDimensions();
  const wide = width >= 760;

  useEffect(() => setTrack(mode), [mode]);

  const pool = useMemo(() => {
    if (track === 'quiz') return QB[quizCat] || QB.arithmetic;
    if (track === 'ap') return QB[apExam] || [];
    if (track === 'clep') return QB[clepExam] || [];
    if (accuSection === 'essay') return [];
    if (accuSection === 'mixed') return [...QB.accu_reading, ...QB.accu_writing, ...QB.accu_arithmetic, ...QB.accu_qras, ...QB.accu_aaf];
    return QB[accuSection] || [];
  }, [track, quizCat, apExam, clepExam, accuSection]);

  const selectNext = () => {
    if (track === 'accuplacer' && accuSection === 'essay') { setCurrent(null); setChosen(null); return; }
    if (!pool.length) { setCurrent(null); setChosen(null); return; }
    let candidates = pool.filter(q => !seen[q._id || q.prompt]);
    if (!candidates.length) {
      setSeen({});
      candidates = pool;
    }
    if (track === 'accuplacer') {
      const same = candidates.filter(q => q.level === accuDifficulty);
      const near = candidates.filter(q => Math.abs((q.level || 2) - accuDifficulty) <= 1);
      candidates = same.length ? same : near.length ? near : candidates;
    }
    setCurrent(shuffledQuestion(pick(candidates)));
    setChosen(null);
  };

  useEffect(() => {
    selectNext();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [track, quizCat, apExam, clepExam, accuSection]);

  const reset = () => {
    setSheet([]); setScore(0); setTotal(0); setSeen({}); setChosen(null);
    setAccuScaled(250); setAccuDifficulty(1); setAccuStreak(0); setAccuMissed({}); setAccuStrong({});
    setTimeout(selectNext, 0);
  };

  const answer = (idx: number) => {
    if (!current || chosen !== null) return;
    setChosen(idx);
    const ok = idx === current.answer;
    setTotal(t => t + 1);
    if (ok) { setScore(s => s + 1); setStreak(streak + 1); } else { setStreak(0); }
    const id = current._id || current.prompt;
    setSeen(prev => ({ ...prev, [id]: true }));
    setSheet(prev => [{
      id, focus: current.focus, prompt: current.prompt, chosen: current.options[idx], correct: current.options[current.answer], ok,
      why: current.why, how: current.how, topic: current.topic,
    }, ...prev].slice(0, 60));
    if (track === 'accuplacer') {
      if (ok) {
        setAccuScaled(v => Math.min(300, v + 3 + accuDifficulty));
        const nextStreak = accuStreak + 1;
        if (nextStreak >= 2 && accuDifficulty < 5) { setAccuDifficulty(d => d + 1); setAccuStreak(0); } else setAccuStreak(nextStreak);
        setAccuStrong(prev => ({ ...prev, [current.topic]: (prev[current.topic] || 0) + 1 }));
      } else {
        setAccuScaled(v => Math.max(200, v - 2));
        setAccuDifficulty(d => Math.max(1, d - 1)); setAccuStreak(0);
        setAccuMissed(prev => ({ ...prev, [current.topic]: (prev[current.topic] || 0) + 1 }));
      }
    }
  };

  const correctPct = total ? Math.round((score / total) * 100) : 0;
  const guide = track === 'quiz' ? null : STUDY_GUIDES[track];
  const unseen = pool.filter(q => !seen[q._id || q.prompt]).length;

  const attemptedLabel = `${score}/${total}`;

  return <ScrollView contentContainerStyle={styles.screenContent}>
    <Card style={styles.heroCard}>
      <View style={styles.heroIconWrap}><Text style={styles.heroIcon}>✏️</Text></View>
      <Text style={styles.heroTitle}>Unified Quiz / Exam Lab</Text>
      <Text style={styles.heroSub}>Full Practice setup from the HTML app: AP, CLEP, ACCUPLACER, adaptive scoring, explanations, topic tracking, and a live answer sheet.</Text>
      <View style={styles.trackTabs}>{TRACKS.map(t => <Chip key={t.id} label={t.label} active={track === t.id} onPress={() => setTrack(t.id)} />)}</View>
      {guide ? <Pressable onPress={() => Linking.openURL(guide.url)} style={({ pressed }) => [styles.guide, pressed && styles.pressed]}><Text style={styles.guideIcon}>{guide.icon}</Text><View style={{ flex: 1 }}><Text style={styles.guideTitle}>{guide.title}</Text><Text style={styles.guideDesc}>{guide.desc}</Text></View><Text style={styles.guideArrow}>↗</Text></Pressable> : null}
    </Card>

    <View style={[styles.dashboardGrid, wide && styles.dashboardGridWide]}>
      <Card style={[styles.selectorCard, wide && styles.leftPanel]}>
        <Selector track={track} quizCat={quizCat} setQuizCat={setQuizCat} apExam={apExam} setApExam={setApExam} clepExam={clepExam} setClepExam={setClepExam} accuSection={accuSection} setAccuSection={setAccuSection} />
      </Card>

      <Card style={[styles.scoreCard, wide && styles.rightPanel]}>
        <Text style={styles.panelTitle}>Study Session</Text>
        <View style={styles.statGrid}>
          <View style={styles.statBox}><Text style={styles.statValue}>{pool.length}</Text><Text style={styles.statLabel}>Pool</Text></View>
          <View style={styles.statBox}><Text style={styles.statValue}>{unseen}</Text><Text style={styles.statLabel}>Unseen</Text></View>
          <View style={styles.statBox}><Text style={styles.statValue}>{attemptedLabel}</Text><Text style={styles.statLabel}>Score</Text></View>
          <View style={styles.statBox}><Text style={styles.statValue}>{correctPct}%</Text><Text style={styles.statLabel}>Accuracy</Text></View>
        </View>
        <View style={styles.meter}><View style={[styles.meterFill, { width: `${correctPct}%` }]} /></View>
        {track === 'accuplacer' ? <View style={accuScaled >= 271 ? styles.passBand : styles.warnBand}><Text style={accuScaled >= 271 ? styles.passBandText : styles.warnBandText}>{accuScaled >= 271 ? '✓ 271+ target met' : 'Target: 271+'} · Scaled {accuScaled} · Level {accuDifficulty}</Text></View> : null}
      </Card>
    </View>

    {track === 'accuplacer' && <AccuResources />}

    {track === 'accuplacer' && accuSection === 'essay' ? <EssayCard essay={essay} setEssay={setEssay} /> : <QuestionCard current={current} chosen={chosen} answer={answer} next={selectNext} reset={reset} wide={wide} />}

    <Report sheet={sheet} missed={accuMissed} strong={accuStrong} track={track} wide={wide} />
  </ScrollView>;
}
function Selector(props: any) {
  const { track } = props;
  const list = track === 'quiz' ? QUIZ_CATS : track === 'ap' ? AP_CATS : track === 'clep' ? CLEP_CATS : ACCU_CATS;
  const active = track === 'quiz' ? props.quizCat : track === 'ap' ? props.apExam : track === 'clep' ? props.clepExam : props.accuSection;
  const setter = track === 'quiz' ? props.setQuizCat : track === 'ap' ? props.setApExam : track === 'clep' ? props.setClepExam : props.setAccuSection;
  const label = track === 'quiz' ? 'Category' : track === 'ap' ? 'AP Exam' : track === 'clep' ? 'CLEP Exam' : 'Section';
  return <><SectionTitle>{label}</SectionTitle><View style={styles.chips}>{list.map((c: any) => <Chip key={c.id} label={c.label} active={active === c.id} onPress={() => setter(c.id)} />)}</View></>;
}

function QuestionCard({ current, chosen, answer, next, reset, wide }: { current: QXQuestion | null; chosen: number | null; answer: (idx: number) => void; next: () => void; reset: () => void; wide: boolean }) {
  if (!current) return <Card style={styles.questionCard}><Text style={styles.empty}>No questions found for this section.</Text></Card>;
  const answered = chosen !== null;
  const ok = answered && chosen === current.answer;
  return <Card style={styles.questionCard}>
    <View style={styles.questionTopline}>
      <Text style={styles.focus}>{current.focus}</Text>
      <Text style={styles.level}>Difficulty {'●'.repeat(current.level || 1)}{'○'.repeat(Math.max(0, 5 - (current.level || 1)))}</Text>
    </View>
    {current.passage ? <Text style={styles.passage}>{current.passage}</Text> : null}
    <View style={styles.promptBox}>
      <Text style={styles.prompt}>{current.prompt}</Text>
    </View>
    <View style={[styles.optionsGrid, wide && styles.optionsGridWide]}>
      {current.options.map((opt, idx) => {
        const isCorrect = answered && idx === current.answer;
        const isWrong = answered && chosen === idx && idx !== current.answer;
        return <Pressable key={`${idx}-${opt}`} onPress={() => answer(idx)} style={({ pressed }) => [styles.option, wide && styles.optionWide, isCorrect && styles.correct, isWrong && styles.wrong, pressed && !answered && styles.pressed]}>
          <View style={[styles.letterBubble, isCorrect && styles.letterBubbleGood, isWrong && styles.letterBubbleBad]}><Text style={styles.letterText}>{String.fromCharCode(65 + idx)}</Text></View>
          <Text style={styles.optionText}>{opt}</Text>
        </Pressable>;
      })}
    </View>
    {answered ? <View style={ok ? styles.feedbackGood : styles.feedbackBad}>
      <Text style={styles.feedbackTitle}>{ok ? 'Correct — nice work.' : `Not quite. Correct answer: ${current.options[current.answer]}`}</Text>
      <Text style={styles.feedbackText}>{current.why}</Text>
      <Text style={styles.feedbackHow}>{current.how}</Text>
    </View> : null}
    <View style={styles.actionRow}><Button label="Reset session" onPress={reset} /><Button label="Next question →" primary onPress={next} /></View>
  </Card>;
}

function EssayCard({ essay, setEssay }: { essay: string; setEssay: (v: string) => void }) {
  const words = essay.trim() ? essay.trim().split(/\s+/).length : 0;
  return <Card>
    <SectionTitle>WritePlacer Essay Practice</SectionTitle>
    <Text style={styles.prompt}>Write a 300–600 word essay taking a clear position on a debatable issue. Use a thesis, organized body paragraphs, specific evidence, and a conclusion.</Text>
    <TextInput multiline value={essay} onChangeText={setEssay} placeholder="Type your essay here…" placeholderTextColor={colors.tt} style={styles.essayInput} />
    <Text style={styles.meta}>Words: {words} · Target: 300–600</Text>
    <View style={styles.feedbackGood}><Text style={styles.feedbackTitle}>Rubric reminder</Text><Text style={styles.feedbackText}>Score for focus, organization, development/support, sentence control, and conventions. Aim for a clear thesis, specific examples, transitions, and error-controlled paragraphs.</Text></View>
  </Card>;
}

function AccuResources() {
  return <Card style={styles.resourcePanel}>
    <Text style={styles.panelTitle}>ACCUPLACER Resources</Text>
    <Text style={styles.resourceTitle}>📄 Official College Board Sample Questions</Text>
    <View style={styles.resourceGrid}>
      {ACCU_SAMPLE_PDFS.map(p => <Pressable key={p.label} onPress={() => Linking.openURL(p.url)} style={({ pressed }) => [styles.resCard, pressed && styles.pressed]}><Text style={styles.resIcon}>{p.icon}</Text><View style={{ flex: 1 }}><Text style={styles.resTitle}>{p.label}</Text><Text style={styles.resDesc}>{p.desc}</Text></View><Text style={styles.guideArrow}>↗</Text></Pressable>)}
    </View>
    <Text style={[styles.resourceTitle, { marginTop: 10 }]}>🎯 IXL Skill Plans — 271–300 Score Band Topics</Text>
    <View style={styles.resourceGrid}>
      {ACCU_IXL_PLANS.map(p => <View key={p.label} style={styles.ixlCard}><Pressable onPress={() => Linking.openURL(p.url)}><Text style={styles.ixlTitle}>{p.icon} {p.label} ↗</Text></Pressable><View style={styles.chips}>{p.topics.map(t => <Text key={t} style={styles.topicPill}>{t}</Text>)}</View></View>)}
    </View>
  </Card>;
}

function Report({ sheet, missed, strong, track, wide }: { sheet: SheetRow[]; missed: Record<string, number>; strong: Record<string, number>; track: Track; wide: boolean }) {
  return <Card style={styles.reportCard}>
    <Text style={styles.sheetTitle}>Answer Sheet</Text>
    {track === 'accuplacer' ? <View style={styles.topicBox}><Text style={sharedStyles.muted}>Weak topics: {Object.keys(missed).length ? Object.entries(missed).map(([k, v]) => `${k} (${v})`).join(' · ') : 'none yet'}</Text><Text style={sharedStyles.muted}>Strong topics: {Object.keys(strong).length ? Object.entries(strong).map(([k, v]) => `${k} (${v})`).join(' · ') : 'none yet'}</Text></View> : null}
    {!sheet.length ? <Text style={styles.empty}>Answer questions to build a learn-as-you-go review sheet.</Text> : sheet.map((r, i) => <View key={`${r.id}-${i}`} style={[styles.sheetRow, r.ok ? styles.sheetOk : styles.sheetBad]}>
      <Text style={styles.sheetNum}>{sheet.length - i}</Text><View style={{ flex: 1 }}><Text style={styles.sheetQ}>{r.focus}</Text><Text style={styles.sheetText}>{r.prompt}</Text><Text style={styles.sheetMini}>Your answer: {r.chosen} · Correct: {r.correct}</Text><Text style={styles.sheetMini}>Why: {r.why}</Text><Text style={styles.sheetMini}>How: {r.how}</Text></View>
    </View>)}
  </Card>;
}

const styles = StyleSheet.create({
  screenContent: { paddingHorizontal: 16, paddingTop: 14, paddingBottom: 110, width: '100%', maxWidth: 960, alignSelf: 'center' },
  heroCard: {
    alignItems: 'center',
    paddingVertical: 22,
    paddingHorizontal: 18,
    backgroundColor: colors.info,
    borderColor: 'rgba(122,171,207,.32)',
    ...shadows.card,
  },
  heroIconWrap: { width: 54, height: 54, borderRadius: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(122,171,207,.15)', borderWidth: StyleSheet.hairlineWidth, borderColor: colors.bdStrong, marginBottom: 10 },
  heroIcon: { fontSize: 25 },
  heroTitle: { color: colors.tx, fontSize: 24, lineHeight: 30, fontWeight: '900', textAlign: 'center', letterSpacing: -0.5 },
  heroSub: { color: colors.ts, fontSize: 12.5, lineHeight: 19, textAlign: 'center', maxWidth: 640, marginTop: 6 },
  trackTabs: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 4, marginTop: 14 },
  dashboardGrid: { gap: 12 },
  dashboardGridWide: { flexDirection: 'row', alignItems: 'stretch' },
  selectorCard: { alignItems: 'center' },
  leftPanel: { flex: 1.25 },
  scoreCard: { alignItems: 'center' },
  rightPanel: { flex: 0.75 },
  panelTitle: { color: colors.tx, fontSize: 15, fontWeight: '900', textAlign: 'center', marginBottom: 10 },
  chips: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 4, marginTop: 8 },
  guide: { width: '100%', maxWidth: 650, flexDirection: 'row', alignItems: 'center', gap: 10, backgroundColor: 'rgba(122,171,207,.10)', borderColor: 'rgba(122,171,207,.32)', borderWidth: StyleSheet.hairlineWidth, borderRadius: 14, padding: 12, marginTop: 12 },
  guideIcon: { fontSize: 20 }, guideTitle: { color: colors.tinfo, fontSize: 12.5, fontWeight: '900' }, guideDesc: { color: colors.ts, fontSize: 11, lineHeight: 16 }, guideArrow: { color: colors.tinfo, fontSize: 15, fontWeight: '900' },
  statGrid: { width: '100%', flexDirection: 'row', flexWrap: 'wrap', gap: 8, justifyContent: 'center' },
  statBox: { minWidth: 88, flexGrow: 1, backgroundColor: colors.c2, borderWidth: StyleSheet.hairlineWidth, borderColor: colors.bd, borderRadius: 14, paddingVertical: 10, paddingHorizontal: 10, alignItems: 'center' },
  statValue: { color: colors.tinfo, fontSize: 19, lineHeight: 22, fontWeight: '900', textAlign: 'center' },
  statLabel: { color: colors.ts, fontSize: 10, fontWeight: '800', textTransform: 'uppercase', letterSpacing: .4, marginTop: 3, textAlign: 'center' },
  meter: { height: 7, width: '100%', backgroundColor: 'rgba(255,255,255,.06)', borderRadius: 7, overflow: 'hidden', marginTop: 12 },
  meterFill: { height: '100%', backgroundColor: colors.tinfo, borderRadius: 7 },
  passBand: { backgroundColor: 'rgba(122,176,96,.14)', borderColor: 'rgba(122,176,96,.35)', borderWidth: StyleSheet.hairlineWidth, borderRadius: 10, padding: 9, marginTop: 10, width: '100%' },
  passBandText: { color: colors.tsucc, textAlign: 'center', fontWeight: '900', fontSize: 12 },
  warnBand: { backgroundColor: 'rgba(201,160,96,.12)', borderColor: 'rgba(201,160,96,.35)', borderWidth: StyleSheet.hairlineWidth, borderRadius: 10, padding: 9, marginTop: 10, width: '100%' },
  warnBandText: { color: colors.twarn, textAlign: 'center', fontWeight: '900', fontSize: 12 },
  pressed: { opacity: 0.78, transform: [{ scale: 0.995 }] },
  questionCard: { padding: 18, maxWidth: 820, width: '100%', alignSelf: 'center', ...shadows.card },
  questionTopline: { flexDirection: 'row', justifyContent: 'space-between', gap: 10, marginBottom: 10, flexWrap: 'wrap', alignItems: 'center' },
  focus: { color: colors.tinfo, fontSize: 11, fontWeight: '900', textTransform: 'uppercase', letterSpacing: .8, flex: 1, textAlign: 'left' },
  level: { color: colors.twarn, fontSize: 10.5, fontWeight: '800' },
  passage: { color: colors.txSoft, backgroundColor: colors.c2, borderLeftColor: colors.tinfo, borderLeftWidth: 3, borderRadius: 12, padding: 13, fontSize: 13, lineHeight: 20, marginBottom: 12 },
  promptBox: { backgroundColor: colors.c2, borderWidth: StyleSheet.hairlineWidth, borderColor: colors.bd, borderRadius: 14, padding: 16, marginBottom: 14 },
  prompt: { color: colors.tx, fontSize: 17, fontWeight: '800', lineHeight: 25, textAlign: 'center' },
  optionsGrid: { gap: 9 },
  optionsGridWide: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' },
  option: { flexDirection: 'row', alignItems: 'center', gap: 10, backgroundColor: colors.c2, borderColor: colors.bd, borderWidth: StyleSheet.hairlineWidth, borderRadius: 14, padding: 13, minHeight: 56 },
  optionWide: { width: '48%', minWidth: 290 },
  optionText: { color: colors.txSoft, fontSize: 13.2, fontWeight: '700', lineHeight: 19, flex: 1 },
  letterBubble: { width: 28, height: 28, borderRadius: 14, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(122,171,207,.12)', borderWidth: StyleSheet.hairlineWidth, borderColor: colors.bdStrong },
  letterBubbleGood: { backgroundColor: colors.succ, borderColor: colors.tsucc },
  letterBubbleBad: { backgroundColor: colors.danger, borderColor: colors.tdanger },
  letterText: { color: colors.tinfo, fontWeight: '900', fontSize: 12 },
  correct: { backgroundColor: colors.succ, borderColor: colors.tsucc },
  wrong: { backgroundColor: colors.danger, borderColor: colors.tdanger },
  feedbackGood: { backgroundColor: 'rgba(122,176,96,.12)', borderColor: 'rgba(122,176,96,.35)', borderWidth: StyleSheet.hairlineWidth, borderRadius: 14, padding: 13, marginTop: 12 },
  feedbackBad: { backgroundColor: 'rgba(192,112,112,.10)', borderColor: 'rgba(192,112,112,.35)', borderWidth: StyleSheet.hairlineWidth, borderRadius: 14, padding: 13, marginTop: 12 },
  feedbackTitle: { color: colors.tx, fontSize: 13, fontWeight: '900', marginBottom: 5, textAlign: 'center' },
  feedbackText: { color: colors.txSoft, fontSize: 12.2, lineHeight: 18, textAlign: 'center' },
  feedbackHow: { color: colors.ts, fontSize: 11.5, lineHeight: 18, marginTop: 7, textAlign: 'center' },
  actionRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10, marginTop: 14, flexWrap: 'wrap' },
  essayInput: { minHeight: 260, color: colors.tx, backgroundColor: colors.c2, borderColor: colors.bd, borderWidth: StyleSheet.hairlineWidth, borderRadius: 14, padding: 14, textAlignVertical: 'top', fontSize: 13, lineHeight: 20, marginTop: 10 },
  resourcePanel: { backgroundColor: 'rgba(30,45,61,.55)', borderColor: 'rgba(122,171,207,.22)', alignItems: 'center' },
  resourceGrid: { width: '100%', flexDirection: 'row', flexWrap: 'wrap', gap: 8, justifyContent: 'center' },
  resourceTitle: { color: colors.tinfo, fontSize: 10.5, fontWeight: '900', textTransform: 'uppercase', letterSpacing: .7, marginBottom: 7, textAlign: 'center' },
  resCard: { flexDirection: 'row', alignItems: 'center', gap: 9, backgroundColor: 'rgba(122,171,207,.08)', borderColor: 'rgba(122,171,207,.25)', borderWidth: StyleSheet.hairlineWidth, borderRadius: 12, padding: 10, minWidth: 240, flexGrow: 1, flexBasis: 280 },
  resIcon: { fontSize: 18 },
  resTitle: { color: colors.tinfo, fontSize: 11.5, fontWeight: '900' },
  resDesc: { color: colors.ts, fontSize: 10.5, lineHeight: 15 },
  ixlCard: { backgroundColor: 'rgba(122,176,96,.07)', borderColor: 'rgba(122,176,96,.25)', borderWidth: StyleSheet.hairlineWidth, borderRadius: 12, padding: 10, minWidth: 260, flexGrow: 1, flexBasis: 300 },
  ixlTitle: { color: colors.tsucc, fontSize: 12, fontWeight: '900', textAlign: 'center' },
  topicPill: { color: colors.tsucc, backgroundColor: 'rgba(122,176,96,.12)', borderColor: 'rgba(122,176,96,.28)', borderWidth: StyleSheet.hairlineWidth, borderRadius: 20, paddingHorizontal: 8, paddingVertical: 3, fontSize: 10, overflow: 'hidden' },
  reportCard: { maxWidth: 920, width: '100%', alignSelf: 'center' },
  sheetTitle: { color: colors.tx, fontSize: 16, fontWeight: '900', marginBottom: 8, textAlign: 'center' },
  empty: { color: colors.ts, fontSize: 12, textAlign: 'center', padding: 16 },
  topicBox: { backgroundColor: colors.c2, borderRadius: 12, padding: 10, marginBottom: 8, gap: 5 },
  sheetRow: { flexDirection: 'row', gap: 10, borderBottomColor: 'rgba(255,255,255,.04)', borderBottomWidth: StyleSheet.hairlineWidth, paddingVertical: 11, paddingHorizontal: 8, borderRadius: 8 },
  sheetOk: { borderLeftColor: colors.tsucc, borderLeftWidth: 3 },
  sheetBad: { borderLeftColor: colors.tdanger, borderLeftWidth: 3 },
  sheetNum: { color: colors.tt, fontSize: 10.5, width: 28, textAlign: 'center', fontWeight: '900' },
  sheetQ: { color: colors.tx, fontSize: 12, fontWeight: '900' },
  sheetText: { color: colors.ts, fontSize: 11.2, lineHeight: 17, marginTop: 2 },
  sheetMini: { color: colors.ts, fontSize: 10.7, lineHeight: 16, marginTop: 4 },
});