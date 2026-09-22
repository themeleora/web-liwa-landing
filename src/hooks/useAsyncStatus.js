import { useCallback, useRef, useState } from 'react';

export function useAsyncStatus() {
  const [isLoading, setIsLoading] = useState(false);
  const inFlight = useRef(false);

  const run = useCallback(async (task) => {
    if (inFlight.current) return;
    inFlight.current = true;
    setIsLoading(true);
    try {
      await task();
    } finally {
      inFlight.current = false;
      setIsLoading(false);
    }
  }, []);

  return { isLoading, run };
}
