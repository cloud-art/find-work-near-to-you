import { useCallback, useEffect, useState } from 'react';

export type UsePromiseStateOptions<T> = {
  promiseFn: () => Promise<T>;
  enabled?: boolean;
};

export const usePromiseState = <T>({ promiseFn, enabled }: UsePromiseStateOptions<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const doPromise = useCallback(async () => {
    try {
      const result = await promiseFn();
      setData(result);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, [promiseFn]);

  useEffect(() => {
    if (enabled) {
      doPromise();
    }
  }, [doPromise, enabled]);

  return { data, loading, error, retry: doPromise };
};
