import { StyleSheet } from 'react-native';

export const colors = {
  c0: '#1f1d19',
  c1: '#272520',
  c2: '#2f2d27',
  c3: '#38352e',
  c4: '#433f36',
  tx: '#f0ede5',
  txSoft: '#ccc8be',
  ts: '#9d998f',
  tt: '#6d6960',
  bd: 'rgba(220,210,190,0.13)',
  bdStrong: 'rgba(122,171,207,0.35)',
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

export const spacing = { xs: 4, sm: 8, md: 12, lg: 16, xl: 24, xxl: 32 };
export const radius = { sm: 9, md: 12, lg: 18, xl: 24, pill: 999 };

export const shadows = {
  card: {
    shadowColor: '#000',
    shadowOpacity: 0.28,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
    elevation: 7,
  },
  soft: {
    shadowColor: '#000',
    shadowOpacity: 0.16,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 3,
  },
};

export const sharedStyles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.c0 },
  content: {
    paddingHorizontal: 14,
    paddingTop: 12,
    paddingBottom: 110,
    width: '100%',
    maxWidth: 960,
    alignSelf: 'center',
  },
  card: {
    backgroundColor: colors.c1,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.bd,
    borderRadius: radius.lg,
    padding: 16,
    marginBottom: 12,
    ...shadows.soft,
  },
  cardSoft: {
    backgroundColor: colors.c2,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.bd,
    borderRadius: radius.md,
    padding: 14,
    marginBottom: 10,
  },
  row: { flexDirection: 'row', alignItems: 'center', gap: 8, flexWrap: 'wrap' },
  center: { alignItems: 'center', justifyContent: 'center' },
  title: { color: colors.tx, fontSize: 22, lineHeight: 28, fontWeight: '800', textAlign: 'center', letterSpacing: -0.4 },
  smallTitle: { color: colors.tx, fontSize: 14, fontWeight: '800' },
  sectionTitle: {
    color: colors.tt,
    fontSize: 11,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 8,
    marginTop: 8,
    textAlign: 'center',
  },
  text: { color: colors.txSoft, fontSize: 13, lineHeight: 20 },
  muted: { color: colors.ts, fontSize: 12, lineHeight: 18, textAlign: 'center' },
  tag: {
    fontSize: 10.5,
    color: colors.ts,
    backgroundColor: colors.c2,
    borderColor: colors.bd,
    borderWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: radius.pill,
    overflow: 'hidden',
  },
});
