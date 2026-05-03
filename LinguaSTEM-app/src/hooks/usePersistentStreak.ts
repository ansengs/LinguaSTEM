import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback, useEffect, useState } from 'react';

const KEY = 'stem-study-lab:streak';

export function usePersistentStreak() {
  const [streak, setStreakState] = useState(0);

  useEffect(() => {
    AsyncStorage.getItem(KEY).then(value => {
      if (value !== null) setStreakState(Number(value) || 0);
    });
  }, []);

  const setStreak = useCallback((next: number) => {
    const safe = Math.max(0, Math.floor(next || 0));
    setStreakState(safe);
    AsyncStorage.setItem(KEY, String(safe)).catch(() => undefined);
  }, []);

  return { streak, setStreak, resetStreak: () => setStreak(0) };
}
