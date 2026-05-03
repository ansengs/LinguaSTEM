import { StyleSheet } from 'react-native';

export const colors = {
  c1: '#272520',
  c2: '#2f2d27',
  c3: '#38352e',
  tx: '#ccc8be',
  ts: '#8a8780',
  tt: '#5e5c57',
  bd: 'rgba(200,190,170,0.12)',
  info: '#1e2e3d',
  tinfo: '#7aabcf',
  warn: '#332a18',
  twarn: '#c9a060',
  succ: '#1c2e18',
  tsucc: '#7ab060',
  danger: '#2e1e1e',
  tdanger: '#c07070',
  white: '#ffffff',
  black: '#000000',
};

export const spacing = { xs: 3, sm: 6, md: 10, lg: 14, xl: 20 };
export const radius = { sm: 7, md: 10, lg: 14, pill: 20 };

export const sharedStyles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.c1 },
  content: { paddingHorizontal: 10, paddingBottom: 90 },
  card: {
    backgroundColor: colors.c1,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.bd,
    borderRadius: radius.md,
    padding: 14,
    marginBottom: 8,
  },
  cardSoft: {
    backgroundColor: colors.c2,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.bd,
    borderRadius: radius.md,
    padding: 12,
    marginBottom: 8,
  },
  row: { flexDirection: 'row', alignItems: 'center', gap: 6, flexWrap: 'wrap' },
  title: { color: colors.tx, fontSize: 18, fontWeight: '700' },
  smallTitle: { color: colors.tx, fontSize: 13, fontWeight: '700' },
  sectionTitle: {
    color: colors.tt,
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.7,
    marginBottom: 6,
    marginTop: 8,
  },
  text: { color: colors.tx, fontSize: 12, lineHeight: 18 },
  muted: { color: colors.ts, fontSize: 11, lineHeight: 16 },
  tag: {
    fontSize: 10,
    color: colors.ts,
    backgroundColor: colors.c2,
    borderColor: colors.bd,
    borderWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: radius.pill,
    overflow: 'hidden',
  },
});
