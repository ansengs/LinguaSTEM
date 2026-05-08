import React, { useMemo, useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TopBar, MobileTabs, ProgressBar } from './src/components/AppBars';
import { Button } from './src/components/Primitives';
import { Mode } from './src/navigation/modes';
import { ExploreScreen } from './src/screens/ExploreScreen';
import { VocabScreen } from './src/screens/VocabScreen';
import { MorphScreen, CountsScreen } from './src/screens/MorphemeScreens';
import { FormulaLabScreen } from './src/screens/FormulaLabScreen';
import { StrategyScreen } from './src/screens/StrategyScreen';
import { QuizScreen } from './src/screens/QuizScreen';
import { useElapsedTimer } from './src/hooks/useElapsedTimer';
import { usePersistentStreak } from './src/hooks/usePersistentStreak';
import { colors, radius, shadows } from './src/theme/theme';
import { letters } from './src/utils/data';

export default function App() {
  const [mode, setMode] = useState<Mode>('explore');
  const [cur, setCur] = useState(0);
  const timer = useElapsedTimer();
  const { streak, setStreak, resetStreak } = usePersistentStreak();
  const item = letters[cur] as any;
  const progress = useMemo(() => ((cur + 1) / letters.length) * 100, [cur]);

  const jump = (dir: number) => {
    setCur(c => (c + dir + letters.length) % letters.length);
    timer.start();
  };

  const content = (() => {
    switch (mode) {
      case 'explore': return <ExploreScreen item={item} />;
      case 'vocab': return <VocabScreen item={item} />;
      case 'morph': return <MorphScreen item={item} />;
      case 'counts': return <CountsScreen />;
      case 'stem': return <FormulaLabScreen />;
      case 'strategy': return <StrategyScreen />;
      case 'quiz':
      case 'ap':
      case 'clep':
      case 'accuplacer': return <QuizScreen mode={mode} streak={streak} setStreak={setStreak} />;
      default: return <ExploreScreen item={item} />;
    }
  })();

  const letterMode = ['explore', 'vocab', 'morph'].includes(mode);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.root}>
        <StatusBar style="light" />
        <View style={styles.shell}>
          <TopBar mode={mode} setMode={setMode} streak={streak} resetStreak={resetStreak} timerLabel={timer.label} timerRunning={timer.running} toggleTimer={timer.toggle} resetTimer={timer.reset} />
          <ProgressBar progress={letterMode ? progress : 100} />
          <View style={styles.content}>{content}</View>
          {letterMode ? <View style={styles.bottomNav}>
            <Button label="← Prev" onPress={() => jump(-1)} />
            <Text style={styles.pos}>{item.l} — {cur + 1} of {letters.length}</Text>
            <Button label="Next →" primary onPress={() => jump(1)} />
          </View> : null}
          <MobileTabs mode={mode} setMode={setMode} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.c0 },
  shell: {
    flex: 1,
    width: '100%',
    maxWidth: 1060,
    alignSelf: 'center',
    backgroundColor: colors.c1,
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderRightWidth: StyleSheet.hairlineWidth,
    borderColor: colors.bd,
  },
  content: { flex: 1 },
  bottomNav: {
    position: 'absolute',
    left: 14,
    right: 14,
    bottom: 76,
    maxWidth: 760,
    alignSelf: 'center',
    backgroundColor: 'rgba(39,37,32,0.96)',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.bd,
    borderRadius: radius.lg,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
    ...shadows.soft,
  },
  pos: { color: colors.tt, fontSize: 11.5, flex: 1, textAlign: 'center', fontWeight: '700' },
});
