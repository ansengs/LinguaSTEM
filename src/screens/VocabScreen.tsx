import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Card, SectionTitle } from '../components/Primitives';
import { colors, sharedStyles } from '../theme/theme';
import { LetterData } from '../utils/data';

export function VocabScreen({ item }: { item: LetterData }) {
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const vocab = useMemo(() => item.vocab || [], [item]);
  return (
    <ScrollView contentContainerStyle={sharedStyles.content}>
      <Card>
        <SectionTitle>{item.l} word bank</SectionTitle>
        <Text style={sharedStyles.muted}>Tap a card to reveal its meaning, root, and memory hook.</Text>
      </Card>
      <View style={styles.grid}>{vocab.map((v: any) => {
        const open = !!revealed[v.w];
        return <Pressable key={v.w} onPress={() => setRevealed(r => ({ ...r, [v.w]: !r[v.w] }))} style={[styles.item, open && styles.itemOpen]}>
          <Text style={styles.word}>{v.w}</Text>
          <Text style={styles.ipa}>{v.ipa}</Text>
          {open ? <><Text style={styles.meaning}>{v.def}</Text><Text style={sharedStyles.muted}>{v.root}</Text></> : <Text style={styles.hint}>tap to reveal</Text>}
        </Pressable>;
      })}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 6, paddingHorizontal: 10, paddingBottom: 90 },
  item: { width: '48%', backgroundColor: colors.c2, borderColor: colors.bd, borderWidth: StyleSheet.hairlineWidth, borderRadius: 7, padding: 10 },
  itemOpen: { borderColor: colors.tsucc },
  word: { color: colors.tx, fontSize: 13, fontWeight: '700' },
  ipa: { color: colors.ts, fontFamily: 'Menlo', fontSize: 11, marginTop: 1 },
  meaning: { color: colors.tsucc, fontSize: 11, lineHeight: 16, marginVertical: 4 },
  hint: { color: colors.tt, fontSize: 10, marginTop: 3 },
});
