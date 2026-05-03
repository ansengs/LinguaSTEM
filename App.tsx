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
import { colors } from './src/theme/theme';
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
      <TopBar mode={mode} setMode={setMode} streak={streak} resetStreak={resetStreak} timerLabel={timer.label} timerRunning={timer.running} toggleTimer={timer.toggle} resetTimer={timer.reset} />
      <ProgressBar progress={letterMode ? progress : 100} />
      <View style={styles.content}>{content}</View>
      {letterMode ? <View style={styles.bottomNav}>
        <Button label="← Prev" onPress={() => jump(-1)} />
        <Text style={styles.pos}>{item.l} — {cur + 1} of {letters.length}</Text>
        <Button label="Next →" primary onPress={() => jump(1)} />
      </View> : null}
      <MobileTabs mode={mode} setMode={setMode} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.c1 },
  content: { flex: 1 },
  bottomNav: {
    position: 'absolute',
    left: 10,
    right: 10,
    bottom: 72,
    backgroundColor: colors.c1,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.bd,
    borderRadius: 10,
    padding: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 6,
  },
  pos: { color: colors.tt, fontSize: 11, flex: 1, textAlign: 'center' },
});
