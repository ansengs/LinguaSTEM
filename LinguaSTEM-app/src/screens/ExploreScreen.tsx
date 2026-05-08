import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Card, SectionTitle, SoftCard, Tag } from '../components/Primitives';
import { colors, sharedStyles } from '../theme/theme';
import { LetterData } from '../utils/data';

export function ExploreScreen({ item }: { item: LetterData }) {
  const vocab = item.vocab || [];
  const langs = item.langs || [];
  const roots = item.roots || [];
  const chars = item.chars || [];
  return (
    <ScrollView contentContainerStyle={sharedStyles.content}>
      <Card>
        <View style={styles.hero}>
          <View style={styles.glyphBox}>
            <Text style={styles.glyph}>{item.l}</Text>
            <Text style={styles.hebrew}>{item.h}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.subName}>{item.hebrew}</Text>
            <Text style={styles.symbol}>{item.symbol}</Text>
            <View style={sharedStyles.row}>{(item.meanings || []).map((m: string) => <Tag key={m}>{m}</Tag>)}</View>
            <Text style={styles.ipa}><Text style={styles.ipaSym}>{item.ipa}</Text> · {item.sound}</Text>
            <Text style={sharedStyles.muted}>{item.note}</Text>
          </View>
        </View>
      </Card>
      <View style={styles.split}>
        <SoftCard style={styles.splitCard}>
          <SectionTitle>Vocabulary seed</SectionTitle>
          {vocab.slice(0, 8).map((v: any) => <Text key={v.w} style={sharedStyles.text}>• <Text style={sharedStyles.smallTitle}>{v.w}</Text> {v.ipa} — {v.def}</Text>)}
        </SoftCard>
        <SoftCard style={styles.splitCard}>
          <SectionTitle>Language links</SectionTitle>
          {langs.slice(0, 8).map((l: any) => <Text key={`${l.lang}-${l.word}`} style={sharedStyles.text}>• <Text style={sharedStyles.smallTitle}>{l.lang}</Text>: {l.word} {l.ipa ? `· ${l.ipa}` : ''}</Text>)}
        </SoftCard>
      </View>
      <SoftCard>
        <SectionTitle>Root families</SectionTitle>
        {roots.map((r: any) => <Text key={`${r.fam}-${r.root}`} style={sharedStyles.text}>• <Text style={sharedStyles.smallTitle}>{r.fam}</Text> — {r.root}: {r.meaning}</Text>)}
      </SoftCard>
      <SoftCard>
        <SectionTitle>Character cousins</SectionTitle>
        <View style={styles.grid}>{chars.map((c: any) => <View key={`${c.script}-${c.chars}`} style={styles.charCard}><Text style={styles.charScript}>{c.script}</Text><Text style={styles.charGlyph}>{c.chars}</Text><Text style={styles.charName}>{c.name}</Text><Text style={sharedStyles.muted}>{c.note}</Text></View>)}</View>
      </SoftCard>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  hero: { flexDirection: 'row', alignItems: 'flex-start', gap: 14 },
  glyphBox: { minWidth: 72, alignItems: 'center' },
  glyph: { color: colors.tinfo, fontSize: 54, lineHeight: 58, fontWeight: '500' },
  hebrew: { color: colors.ts, fontSize: 34, marginTop: 2 },
  info: { flex: 1 },
  name: { color: colors.tx, fontSize: 18, fontWeight: '700', marginBottom: 2 },
  subName: { color: colors.ts, fontSize: 13, marginBottom: 5 },
  symbol: { alignSelf: 'flex-start', color: colors.twarn, backgroundColor: colors.warn, borderRadius: 20, paddingHorizontal: 9, paddingVertical: 3, fontSize: 11, marginBottom: 6, overflow: 'hidden' },
  ipa: { color: colors.tx, fontSize: 12, marginTop: 8, marginBottom: 3 },
  ipaSym: { color: colors.tinfo, fontSize: 14, fontFamily: 'Menlo' },
  split: { gap: 8 },
  splitCard: { flex: 1 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 6 },
  charCard: { width: '48%', backgroundColor: colors.c2, borderColor: colors.bd, borderWidth: StyleSheet.hairlineWidth, borderRadius: 7, padding: 9 },
  charScript: { color: colors.tt, fontSize: 10, textTransform: 'uppercase', letterSpacing: 0.5 },
  charGlyph: { color: colors.tinfo, fontSize: 20, fontWeight: '700' },
  charName: { color: colors.tx, fontSize: 11, fontWeight: '700' },
});
