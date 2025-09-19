import { useEffect, useState } from 'react';

export type UseQueryOptions<T> = {
  queryFn: () => Promise<T>;
};

export const useQuery = <T>({ queryFn }: UseQueryOptions<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await queryFn();
        setData(result);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [queryFn]);

  return { data, loading, error };
};
