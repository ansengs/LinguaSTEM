import { useCallback, useEffect, useMemo, useState } from 'react';

export function useElapsedTimer() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(id);
  }, [running]);

  const label = useMemo(() => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${String(s).padStart(2, '0')}`;
  }, [seconds]);

  return {
    seconds,
    running,
    label,
    start: () => setRunning(true),
    pause: () => setRunning(false),
    toggle: () => setRunning(v => !v),
    reset: useCallback(() => {
      setRunning(false);
      setSeconds(0);
    }, []),
  };
}
