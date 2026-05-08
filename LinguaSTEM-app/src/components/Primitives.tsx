import React from 'react';
import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { colors, radius, shadows, sharedStyles } from '../theme/theme';

export function Card({ children, style }: { children: React.ReactNode; style?: StyleProp<ViewStyle> }) {
  return <View style={[sharedStyles.card, style]}>{children}</View>;
}

export function SoftCard({ children, style }: { children: React.ReactNode; style?: StyleProp<ViewStyle> }) {
  return <View style={[sharedStyles.cardSoft, style]}>{children}</View>;
}

export function Chip({ label, active, onPress }: { label: string; active?: boolean; onPress?: () => void }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.chip, active && styles.chipActive, pressed && styles.pressed]}>
      <Text style={[styles.chipText, active && styles.chipTextActive]}>{label}</Text>
    </Pressable>
  );
}

export function Button({ label, primary, onPress }: { label: string; primary?: boolean; onPress?: () => void }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.button, primary && styles.buttonPrimary, pressed && styles.pressed]}>
      <Text style={[styles.buttonText, primary && styles.buttonPrimaryText]}>{label}</Text>
    </Pressable>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return <Text style={sharedStyles.sectionTitle}>{children}</Text>;
}

export function Tag({ children }: { children: React.ReactNode }) {
  return <Text style={sharedStyles.tag}>{children}</Text>;
}

const styles = StyleSheet.create({
  chip: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.bd,
    backgroundColor: colors.c2,
    borderRadius: radius.pill,
    paddingHorizontal: 12,
    paddingVertical: 7,
    marginRight: 4,
    marginBottom: 6,
  },
  chipActive: { backgroundColor: colors.tinfo, borderColor: colors.tinfo, ...shadows.soft },
  chipText: { color: colors.ts, fontSize: 11.5, fontWeight: '700', textAlign: 'center' },
  chipTextActive: { color: colors.white },
  button: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.bd,
    backgroundColor: colors.c2,
    borderRadius: radius.md,
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPrimary: { backgroundColor: colors.tinfo, borderColor: colors.tinfo, ...shadows.soft },
  buttonText: { color: colors.tx, fontSize: 12.5, fontWeight: '800', textAlign: 'center' },
  buttonPrimaryText: { color: colors.white },
  pressed: { opacity: 0.78, transform: [{ scale: 0.99 }] },
});
