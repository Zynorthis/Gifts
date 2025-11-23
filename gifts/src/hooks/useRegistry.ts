import { useEffect, useState } from 'react';
import { Gift } from '../models';

export const useRegistry = () => {
  const giftRegistryPath = './giftRegistry.json';
  const [gifts, setGifts] = useState<Gift[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(giftRegistryPath);
      if (!response.ok) {
        throw new Error(
          `Failed to fetch gift registry data:\n${response.statusText}`,
        );
      }
      const result: Gift[] = await response.json();
      setGifts(result);
    } catch (error) {
      console.error(error);
      setError(
        error instanceof Error ? error.message : 'An unknown error occurred',
      );
    } finally {
      setIsLoading(false);
    }
  };

  return { gifts, isLoading, error };
};
