import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Card, Button, Chip, SectionTitle } from '../components/Primitives';
import { Mode } from '../navigation/modes';
import { colors, sharedStyles } from '../theme/theme';
import { generateQuestion, QuizQuestion } from '../utils/quiz';

const labels: Partial<Record<Mode, string>> = { quiz: 'Practice Quiz', ap: 'AP Practice', clep: 'CLEP Practice', accuplacer: 'ACCUPLACER' };

export function QuizScreen({ mode, streak, setStreak }: { mode: 'quiz' | 'ap' | 'clep' | 'accuplacer'; streak: number; setStreak: (n: number) => void }) {
  const [question, setQuestion] = useState<QuizQuestion>(() => generateQuestion(mode));
  const [chosen, setChosen] = useState<number | null>(null);
  const [attempted, setAttempted] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [full, setFull] = useState(false);
  const scoreEstimate = useMemo(() => mode === 'accuplacer' ? 200 + Math.min(100, Math.round(((correct / Math.max(1, attempted)) * 72) + Math.min(28, attempted))) : null, [mode, correct, attempted]);

  const answer = (idx: number) => {
    if (chosen !== null) return;
    setChosen(idx);
    setAttempted(a => a + 1);
    const ok = question.opts[idx] === question.correct;
    if (ok) { setCorrect(c => c + 1); setStreak(streak + 1); } else setStreak(0);
  };
  const next = () => { setQuestion(generateQuestion(mode)); setChosen(null); };
  const reset = () => { setQuestion(generateQuestion(mode)); setChosen(null); setAttempted(0); setCorrect(0); };

  return <ScrollView contentContainerStyle={sharedStyles.content}>
    <Card><Text style={sharedStyles.title}>{labels[mode]}</Text><Text style={sharedStyles.muted}>Mixed native practice with immediate explanations and streak tracking.</Text>
      <View style={[sharedStyles.row, { marginTop: 8 }]}><Chip label={full ? 'Full test on' : 'Adaptive'} active /><Chip label={`${correct}/${attempted} correct`} /><Chip label={scoreEstimate ? `Estimate ${scoreEstimate}` : 'Practice mode'} /></View>
      {mode === 'accuplacer' && scoreEstimate ? <Text style={scoreEstimate >= 271 ? styles.pass : styles.warn}>{scoreEstimate >= 271 ? '271–300 band: advanced readiness focus' : 'Keep practicing toward the 271–300 band'}</Text> : null}
    </Card>
    <Card>
      <SectionTitle>{question.focus}</SectionTitle>
      <Text style={styles.prompt}>{question.prompt}</Text>
      {question.opts.map((opt, idx) => {
        const isChosen = chosen === idx;
        const isCorrect = opt === question.correct;
        const answered = chosen !== null;
        return <Pressable key={`${opt}-${idx}`} onPress={() => answer(idx)} style={[styles.option, answered && isCorrect && styles.correct, answered && isChosen && !isCorrect && styles.wrong]}>
          <Text style={styles.optionText}>{opt}</Text>
        </Pressable>;
      })}
      {chosen !== null ? <View style={question.opts[chosen] === question.correct ? styles.feedbackGood : styles.feedbackBad}>
        <Text style={styles.feedbackTitle}>{question.opts[chosen] === question.correct ? 'Correct' : `Not quite. Correct answer: ${question.correct}`}</Text>
        <Text style={styles.feedbackText}>{question.hint}</Text>
      </View> : null}
      <View style={[sharedStyles.row, { justifyContent: 'space-between', marginTop: 10 }]}><Button label="Reset" onPress={reset} /><Button label="Toggle full test" onPress={() => setFull(v => !v)} /><Button label="Next →" primary onPress={next} /></View>
    </Card>
  </ScrollView>;
}

const styles = StyleSheet.create({
  prompt: { color: colors.tx, fontSize: 15, fontWeight: '700', lineHeight: 22, textAlign: 'center', backgroundColor: colors.c2, borderRadius: 7, padding: 12, marginBottom: 10 },
  option: { backgroundColor: colors.c2, borderColor: colors.bd, borderWidth: StyleSheet.hairlineWidth, borderRadius: 7, padding: 11, marginBottom: 6 },
  optionText: { color: colors.tx, fontSize: 12, fontWeight: '600' },
  correct: { backgroundColor: colors.succ, borderColor: colors.tsucc },
  wrong: { backgroundColor: colors.danger, borderColor: colors.tdanger },
  feedbackGood: { backgroundColor: 'rgba(122,176,96,.12)', borderColor: 'rgba(122,176,96,.35)', borderWidth: StyleSheet.hairlineWidth, borderRadius: 8, padding: 10, marginTop: 8 },
  feedbackBad: { backgroundColor: 'rgba(192,112,112,.10)', borderColor: 'rgba(192,112,112,.35)', borderWidth: StyleSheet.hairlineWidth, borderRadius: 8, padding: 10, marginTop: 8 },
  feedbackTitle: { color: colors.tx, fontSize: 12, fontWeight: '800', marginBottom: 4 },
  feedbackText: { color: colors.ts, fontSize: 11.5, lineHeight: 17 },
  pass: { color: colors.tsucc, backgroundColor: colors.succ, padding: 8, borderRadius: 7, marginTop: 8, fontSize: 11.5, fontWeight: '700' },
  warn: { color: colors.twarn, backgroundColor: colors.warn, padding: 8, borderRadius: 7, marginTop: 8, fontSize: 11.5, fontWeight: '700' },
});
