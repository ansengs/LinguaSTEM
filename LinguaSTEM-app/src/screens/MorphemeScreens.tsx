import React, { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Card, Chip, SectionTitle, SoftCard, Tag } from '../components/Primitives';
import { colors, sharedStyles } from '../theme/theme';
import { allMorphEntries, entriesForLetter, filterMorphs, LetterData, typeCount } from '../utils/data';

const cats = ['all', 'common', 'research', 'legal', 'college', 'livelihood'];
const origins = ['all', 'Latin', 'Greek', 'French', 'Germanic'];
const kinds = ['all', 'prefix', 'root', 'suffix'];

function Filters({ query, setQuery, cat, setCat, origin, setOrigin, kind, setKind }: any) {
  return <Card>
    <TextInput placeholder="Search morphemes..." placeholderTextColor={colors.tt} value={query} onChangeText={setQuery} style={styles.search} />
    <SectionTitle>Category</SectionTitle><View style={sharedStyles.row}>{cats.map(x => <Chip key={x} label={x} active={cat === x} onPress={() => setCat(x)} />)}</View>
    <SectionTitle>Origin</SectionTitle><View style={sharedStyles.row}>{origins.map(x => <Chip key={x} label={x} active={origin === x} onPress={() => setOrigin(x)} />)}</View>
    <SectionTitle>Type</SectionTitle><View style={sharedStyles.row}>{kinds.map(x => <Chip key={x} label={x} active={kind === x} onPress={() => setKind(x)} />)}</View>
  </Card>;
}

function MorphemeCard({ entry }: any) {
  return <View style={styles.morphCard}>
    <Text style={styles.morph}>{entry.m}</Text>
    <Text style={styles.meta}>{entry.type} · {entry.origin}</Text>
    <Text style={styles.meaning}>{entry.meaning}</Text>
    <Text style={sharedStyles.muted}>{entry.examples}</Text>
    <View style={[sharedStyles.row, { marginTop: 6 }]}>{(entry.cats || []).map((c: string) => <Tag key={c}>{c}</Tag>)}</View>
  </View>;
}

export function MorphScreen({ item }: { item: LetterData }) {
  const [query, setQuery] = useState('');
  const [cat, setCat] = useState('all');
  const [origin, setOrigin] = useState('all');
  const [kind, setKind] = useState('all');
  const base = useMemo(() => entriesForLetter(item.l), [item.l]);
  const list = useMemo(() => filterMorphs(base, query, cat, origin, kind), [base, query, cat, origin, kind]);
  return <ScrollView contentContainerStyle={sharedStyles.content}>
    <SoftCard><Text style={sharedStyles.title}>{item.l} Word Parts</Text><Text style={sharedStyles.muted}>{base.length} entries · {typeCount(base, 'prefix')} prefixes · {typeCount(base, 'root')} roots · {typeCount(base, 'suffix')} suffixes</Text></SoftCard>
    <Filters {...{ query, setQuery, cat, setCat, origin, setOrigin, kind, setKind }} />
    <Text style={sharedStyles.muted}>Showing {list.length} of {base.length} entries for {item.l}.</Text>
    <View style={styles.grid}>{list.map(entry => <MorphemeCard key={entry.id} entry={entry} />)}</View>
  </ScrollView>;
}

export function CountsScreen() {
  const [query, setQuery] = useState('');
  const [cat, setCat] = useState('all');
  const [origin, setOrigin] = useState('all');
  const [kind, setKind] = useState('all');
  const all = useMemo(() => allMorphEntries(), []);
  const list = useMemo(() => filterMorphs(all, query, cat, origin, kind), [all, query, cat, origin, kind]);
  const totals = { total: all.length, prefix: typeCount(all, 'prefix'), root: typeCount(all, 'root'), suffix: typeCount(all, 'suffix') };
  return <ScrollView contentContainerStyle={sharedStyles.content}>
    <Card><Text style={sharedStyles.title}>Morpheme Index</Text><Text style={sharedStyles.muted}>Full prefix, root, suffix, origin, and category browser.</Text>
      <View style={styles.countGrid}>{Object.entries(totals).map(([k, v]) => <View key={k} style={styles.countCard}><Text style={styles.big}>{v}</Text><Text style={styles.small}>{k}</Text></View>)}</View>
    </Card>
    <Filters {...{ query, setQuery, cat, setCat, origin, setOrigin, kind, setKind }} />
    <Text style={sharedStyles.muted}>Showing {list.length} matching entries.</Text>
    <View style={styles.grid}>{list.slice(0, 250).map(entry => <MorphemeCard key={entry.id} entry={entry} />)}</View>
    {list.length > 250 && <Text style={sharedStyles.muted}>Showing first 250 results. Narrow the search to continue.</Text>}
  </ScrollView>;
}

const styles = StyleSheet.create({
  search: { width: '100%', backgroundColor: colors.c2, color: colors.tx, borderColor: colors.bd, borderWidth: StyleSheet.hairlineWidth, borderRadius: 7, paddingHorizontal: 10, paddingVertical: 8, fontSize: 13, marginBottom: 6 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 6, marginTop: 6 },
  morphCard: { width: '48%', backgroundColor: colors.c2, borderColor: colors.bd, borderWidth: StyleSheet.hairlineWidth, borderRadius: 7, padding: 10 },
  morph: { color: colors.tx, fontSize: 13, fontWeight: '700' },
  meta: { color: colors.ts, fontSize: 11, marginVertical: 2 },
  meaning: { color: colors.tsucc, fontSize: 11, lineHeight: 16, marginBottom: 3 },
  countGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 6, marginTop: 8 },
  countCard: { flex: 1, minWidth: 100, backgroundColor: colors.c2, borderWidth: StyleSheet.hairlineWidth, borderColor: colors.bd, borderRadius: 8, padding: 10, alignItems: 'center' },
  big: { color: colors.tinfo, fontSize: 24, fontWeight: '800' },
  small: { color: colors.ts, fontSize: 10, textTransform: 'uppercase', letterSpacing: 0.5 },
});
