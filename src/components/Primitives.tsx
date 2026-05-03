import React from 'react';
import { Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { colors, radius, sharedStyles } from '../theme/theme';

export function Card({ children, style }: { children: React.ReactNode; style?: ViewStyle }) {
  return <View style={[sharedStyles.card, style]}>{children}</View>;
}

export function SoftCard({ children, style }: { children: React.ReactNode; style?: ViewStyle }) {
  return <View style={[sharedStyles.cardSoft, style]}>{children}</View>;
}

export function Chip({ label, active, onPress }: { label: string; active?: boolean; onPress?: () => void }) {
  return (
    <Pressable onPress={onPress} style={[styles.chip, active && styles.chipActive]}>
      <Text style={[styles.chipText, active && styles.chipTextActive]}>{label}</Text>
    </Pressable>
  );
}

export function Button({ label, primary, onPress }: { label: string; primary?: boolean; onPress?: () => void }) {
  return (
    <Pressable onPress={onPress} style={[styles.button, primary && styles.buttonPrimary]}>
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
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 4,
    marginBottom: 5,
  },
  chipActive: { backgroundColor: colors.tinfo, borderColor: colors.tinfo },
  chipText: { color: colors.ts, fontSize: 11, fontWeight: '500' },
  chipTextActive: { color: colors.white },
  button: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.bd,
    backgroundColor: colors.c2,
    borderRadius: radius.sm,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  buttonPrimary: { backgroundColor: colors.tinfo, borderColor: colors.tinfo },
  buttonText: { color: colors.tx, fontSize: 12, fontWeight: '600' },
  buttonPrimaryText: { color: colors.white },
});
