import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors, radius, shadows } from '../theme/theme';
import { MODE_GROUPS, Mode } from '../navigation/modes';
import { Button } from './Primitives';

export function TopBar({ mode, setMode, streak, resetStreak, timerLabel, timerRunning, toggleTimer, resetTimer }: {
  mode: Mode; setMode: (mode: Mode) => void; streak: number; resetStreak: () => void; timerLabel: string; timerRunning: boolean; toggleTimer: () => void; resetTimer: () => void;
}) {
  return (
    <View style={styles.topBar}>
      <View style={styles.headerRow}>
        <View style={styles.brandRow}>
          <View style={styles.logo}><Text style={styles.logoText}>LS</Text></View>
          <View>
            <Text style={styles.brand}>STEM Study Lab</Text>
            <Text style={styles.subtitle}>Language roots · STEM formulas · exam prep</Text>
          </View>
        </View>
        <View style={styles.headerActions}>
          <Text style={styles.streak}>streak: {streak}</Text>
          <Button label="↺" onPress={resetStreak} />
          <Pressable onPress={toggleTimer} onLongPress={resetTimer} style={[styles.timer, !timerRunning && styles.paused]}>
            <Text style={styles.timerText}>{timerLabel}</Text>
          </Pressable>
        </View>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.navScroll}>
        {MODE_GROUPS.map((group, index) => (
          <View key={group.label} style={styles.group}>
            <Text style={styles.groupLabel}>{group.label}</Text>
            {group.items.map(item => (
              <Pressable key={item.mode} onPress={() => setMode(item.mode)} style={({ pressed }) => [styles.modeButton, mode === item.mode && styles.modeButtonActive, pressed && styles.pressed]}>
                <Text style={[styles.modeText, mode === item.mode && styles.modeTextActive]}>{item.label}</Text>
              </Pressable>
            ))}
            {index < MODE_GROUPS.length - 1 && <View style={styles.divider} />}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export function MobileTabs({ mode, setMode }: { mode: Mode; setMode: (mode: Mode) => void }) {
  const tabs: { mode: Mode; label: string; icon: string }[] = [
    { mode: 'explore', label: 'Roots', icon: '🔤' },
    { mode: 'vocab', label: 'Words', icon: '📖' },
    { mode: 'morph', label: 'Parts', icon: '🧩' },
    { mode: 'quiz', label: 'Practice', icon: '✏️' },
    { mode: 'stem', label: 'Formula', icon: '⚗️' },
    { mode: 'strategy', label: 'More', icon: '⋯' },
  ];
  return (
    <View style={styles.mobileTabs}>
      {tabs.map(tab => (
        <Pressable key={tab.mode} onPress={() => setMode(tab.mode)} style={({ pressed }) => [styles.tabButton, (mode === tab.mode || (tab.mode === 'quiz' && ['ap','clep','accuplacer'].includes(mode))) && styles.tabButtonActive, pressed && styles.pressed]}>
          <Text style={[styles.tabIcon, (mode === tab.mode || (tab.mode === 'quiz' && ['ap','clep','accuplacer'].includes(mode))) && styles.tabActive]}>{tab.icon}</Text>
          <Text numberOfLines={1} style={[styles.tabLabel, (mode === tab.mode || (tab.mode === 'quiz' && ['ap','clep','accuplacer'].includes(mode))) && styles.tabActive]}>{tab.label}</Text>
        </Pressable>
      ))}
    </View>
  );
}

export function ProgressBar({ progress }: { progress: number }) {
  return <View style={styles.progress}><View style={[styles.progressFill, { width: `${Math.max(2, Math.min(100, progress))}%` }]} /></View>;
}

const styles = StyleSheet.create({
  topBar: { paddingHorizontal: 14, paddingTop: 10, paddingBottom: 8, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: colors.bd, backgroundColor: colors.c1 },
  headerRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginBottom: 10, flexWrap: 'wrap' },
  brandRow: { flexDirection: 'row', alignItems: 'center', gap: 10, flexShrink: 1 },
  logo: { width: 38, height: 38, borderRadius: 14, backgroundColor: colors.info, alignItems: 'center', justifyContent: 'center', borderWidth: StyleSheet.hairlineWidth, borderColor: colors.bdStrong },
  logoText: { color: colors.tinfo, fontSize: 13, fontWeight: '900' },
  brand: { color: colors.tx, fontSize: 16, fontWeight: '900', letterSpacing: -0.2 },
  subtitle: { color: colors.ts, fontSize: 10.5, marginTop: 1 },
  headerActions: { flexDirection: 'row', alignItems: 'center', gap: 6, flexWrap: 'wrap' },
  streak: { color: colors.twarn, backgroundColor: colors.warn, borderRadius: radius.pill, paddingHorizontal: 10, paddingVertical: 5, fontSize: 11, overflow: 'hidden', fontWeight: '800' },
  navScroll: { alignItems: 'center', gap: 4, paddingRight: 12, paddingVertical: 1 },
  group: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  groupLabel: { color: colors.tt, fontSize: 9, fontWeight: '900', textTransform: 'uppercase', letterSpacing: 0.8, marginRight: 2 },
  divider: { width: 1, height: 22, backgroundColor: colors.bd, marginHorizontal: 6 },
  modeButton: { backgroundColor: colors.c2, borderColor: colors.bd, borderWidth: StyleSheet.hairlineWidth, borderRadius: radius.pill, paddingHorizontal: 12, paddingVertical: 7 },
  modeButtonActive: { backgroundColor: colors.tinfo, borderColor: colors.tinfo, ...shadows.soft },
  modeText: { color: colors.ts, fontSize: 11.5, fontWeight: '800' },
  modeTextActive: { color: colors.white },
  timer: { backgroundColor: colors.info, borderRadius: radius.pill, minWidth: 68, paddingHorizontal: 12, paddingVertical: 8, alignItems: 'center', borderWidth: StyleSheet.hairlineWidth, borderColor: colors.bdStrong },
  paused: { opacity: 0.55 },
  timerText: { color: colors.tinfo, fontSize: 12, fontWeight: '900' },
  pressed: { opacity: 0.78 },
  progress: { height: 4, backgroundColor: colors.bd, borderRadius: 4, marginHorizontal: 14, marginTop: 8, overflow: 'hidden' },
  progressFill: { height: 4, backgroundColor: colors.tinfo, borderRadius: 4 },
  mobileTabs: { position: 'absolute', left: 0, right: 0, bottom: 0, height: 72, backgroundColor: 'rgba(39,37,32,0.98)', borderTopColor: colors.bd, borderTopWidth: StyleSheet.hairlineWidth, flexDirection: 'row', paddingHorizontal: 4, ...shadows.card },
  tabButton: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 2, gap: 3, borderRadius: 14, marginVertical: 7 },
  tabButtonActive: { backgroundColor: 'rgba(122,171,207,.10)' },
  tabIcon: { fontSize: 18, color: colors.ts },
  tabLabel: { fontSize: 9.5, color: colors.ts, fontWeight: '800', maxWidth: 62, textAlign: 'center' },
  tabActive: { color: colors.tinfo },
});
