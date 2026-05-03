import React, { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { STRATEGY_CARDS } from '../data/strategyCards';
import { Card, Chip, SectionTitle, SoftCard } from '../components/Primitives';
import { colors, sharedStyles } from '../theme/theme';

const cats = ['All', 'Reading', 'Writing', 'Pronunciation', 'Foreign Language Listening', 'Memory'];

export function StrategyScreen() {
  const [cat, setCat] = useState('All');
  const cards = useMemo(() => cat === 'All' ? STRATEGY_CARDS : STRATEGY_CARDS.filter((s: any) => s.cat === cat), [cat]);
  return <ScrollView contentContainerStyle={sharedStyles.content}>
    <Card><Text style={sharedStyles.title}>Study Science</Text><Text style={sharedStyles.muted}>Research-backed strategies for reading, writing, pronunciation, listening, and memory.</Text>
      <View style={[sharedStyles.row, { marginTop: 8 }]}>{cats.map(c => <Chip key={c} label={c} active={cat === c} onPress={() => setCat(c)} />)}</View>
    </Card>
    {cards.map((s: any) => <SoftCard key={s.title}>
      <Text style={styles.strategyTitle}>{s.title}</Text>
      <Text style={sharedStyles.muted}>{s.sub || s.cat}</Text>
      {s.formula ? <Text style={styles.formula}>{s.formula}</Text> : null}
      <SectionTitle>Method</SectionTitle>
      {(s.steps || []).map((step: string, i: number) => <Text key={`${s.title}-${i}`} style={sharedStyles.text}>{i + 1}. {step}</Text>)}
      {s.topics ? <><SectionTitle>Topics</SectionTitle>{s.topics.map((t: any) => <Text key={t.t || t.title} style={sharedStyles.text}>• <Text style={sharedStyles.smallTitle}>{t.t || t.title}</Text> — {t.d || t.desc}</Text>)}</> : null}
    </SoftCard>)}
  </ScrollView>;
}

const styles = StyleSheet.create({
  strategyTitle: { color: colors.tx, fontSize: 18, fontWeight: '800', marginBottom: 4 },
  formula: { color: colors.tx, fontSize: 11, lineHeight: 17, backgroundColor: colors.c2, borderWidth: StyleSheet.hairlineWidth, borderColor: colors.bd, borderRadius: 7, padding: 10, marginTop: 8, fontFamily: 'Menlo' },
});
