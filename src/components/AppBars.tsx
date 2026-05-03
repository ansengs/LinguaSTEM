import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors, radius } from '../theme/theme';
import { MODE_GROUPS, Mode } from '../navigation/modes';
import { Button } from './Primitives';

export function TopBar({ mode, setMode, streak, resetStreak, timerLabel, timerRunning, toggleTimer, resetTimer }: {
  mode: Mode; setMode: (mode: Mode) => void; streak: number; resetStreak: () => void; timerLabel: string; timerRunning: boolean; toggleTimer: () => void; resetTimer: () => void;
}) {
  return (
    <View style={styles.topBar}>
      <View style={styles.brandRow}>
        <Text style={styles.brand}>STEM Study Lab</Text>
        <Text style={styles.streak}>streak: {streak}</Text>
        <Button label="↺" onPress={resetStreak} />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.navScroll}>
        {MODE_GROUPS.map((group, index) => (
          <View key={group.label} style={styles.group}>
            <Text style={styles.groupLabel}>{group.label}</Text>
            {group.items.map(item => (
              <Pressable key={item.mode} onPress={() => setMode(item.mode)} style={[styles.modeButton, mode === item.mode && styles.modeButtonActive]}>
                <Text style={[styles.modeText, mode === item.mode && styles.modeTextActive]}>{item.label}</Text>
              </Pressable>
            ))}
            {index < MODE_GROUPS.length - 1 && <View style={styles.divider} />}
          </View>
        ))}
      </ScrollView>
      <Pressable onPress={toggleTimer} onLongPress={resetTimer} style={[styles.timer, !timerRunning && styles.paused]}>
        <Text style={styles.timerText}>{timerLabel}</Text>
      </Pressable>
    </View>
  );
}

export function MobileTabs({ mode, setMode }: { mode: Mode; setMode: (mode: Mode) => void }) {
  const tabs: { mode: Mode; label: string; icon: string }[] = [
    { mode: 'explore', label: 'Letter Roots', icon: '🔤' },
    { mode: 'vocab', label: 'Word Bank', icon: '📖' },
    { mode: 'morph', label: 'Word Parts', icon: '🧩' },
    { mode: 'quiz', label: 'Practice', icon: '✏️' },
    { mode: 'stem', label: 'Formula Lab', icon: '⚗️' },
    { mode: 'strategy', label: 'More', icon: '⋯' },
  ];
  return (
    <View style={styles.mobileTabs}>
      {tabs.map(tab => (
        <Pressable key={tab.mode} onPress={() => setMode(tab.mode)} style={styles.tabButton}>
          <Text style={[styles.tabIcon, mode === tab.mode && styles.tabActive]}>{tab.icon}</Text>
          <Text numberOfLines={1} style={[styles.tabLabel, mode === tab.mode && styles.tabActive]}>{tab.label}</Text>
        </Pressable>
      ))}
    </View>
  );
}

export function ProgressBar({ progress }: { progress: number }) {
  return <View style={styles.progress}><View style={[styles.progressFill, { width: `${Math.max(2, Math.min(100, progress))}%` }]} /></View>;
}

const styles = StyleSheet.create({
  topBar: { paddingHorizontal: 10, paddingTop: 8, paddingBottom: 6, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: colors.bd, backgroundColor: colors.c1 },
  brandRow: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 6 },
  brand: { color: colors.tx, fontSize: 13, fontWeight: '700' },
  streak: { color: colors.twarn, backgroundColor: colors.warn, borderRadius: radius.pill, paddingHorizontal: 8, paddingVertical: 2, fontSize: 11, overflow: 'hidden' },
  navScroll: { alignItems: 'center', gap: 4, paddingRight: 12 },
  group: { flexDirection: 'row', alignItems: 'center', gap: 3 },
  groupLabel: { color: colors.tt, fontSize: 9, fontWeight: '800', textTransform: 'uppercase', letterSpacing: 0.7, marginRight: 2 },
  divider: { width: 1, height: 18, backgroundColor: colors.bd, marginHorizontal: 4 },
  modeButton: { backgroundColor: colors.c2, borderColor: colors.bd, borderWidth: StyleSheet.hairlineWidth, borderRadius: radius.pill, paddingHorizontal: 10, paddingVertical: 5 },
  modeButtonActive: { backgroundColor: colors.tinfo, borderColor: colors.tinfo },
  modeText: { color: colors.ts, fontSize: 11, fontWeight: '600' },
  modeTextActive: { color: colors.white },
  timer: { position: 'absolute', right: 10, top: 8, backgroundColor: colors.info, borderRadius: radius.pill, minWidth: 58, paddingHorizontal: 10, paddingVertical: 4, alignItems: 'center' },
  paused: { opacity: 0.55 },
  timerText: { color: colors.tinfo, fontSize: 12, fontWeight: '700' },
  progress: { height: 3, backgroundColor: colors.bd, borderRadius: 3, marginHorizontal: 10, marginTop: 6, overflow: 'hidden' },
  progressFill: { height: 3, backgroundColor: colors.tinfo, borderRadius: 3 },
  mobileTabs: { position: 'absolute', left: 0, right: 0, bottom: 0, height: 66, backgroundColor: colors.c1, borderTopColor: colors.bd, borderTopWidth: StyleSheet.hairlineWidth, flexDirection: 'row' },
  tabButton: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 2, gap: 2 },
  tabIcon: { fontSize: 18, color: colors.ts },
  tabLabel: { fontSize: 9.5, color: colors.ts, fontWeight: '600', maxWidth: 62 },
  tabActive: { color: colors.tinfo },
});
