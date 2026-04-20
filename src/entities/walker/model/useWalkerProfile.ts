import { useEffect, useState } from 'react';

import { fetchWalkerProfile } from '@/entities/walker/api/walkerApi';
import { walkerMock } from '@/entities/walker/model/walkerMock';
import type { WalkerProfile } from '@/entities/walker/model/types';

interface UseWalkerProfileState {
  data: WalkerProfile;
  isLoading: boolean;
  isFallback: boolean;
}

export const useWalkerProfile = (): UseWalkerProfileState => {
  const [data, setData] = useState<WalkerProfile>(walkerMock);
  const [isLoading, setIsLoading] = useState(true);
  const [isFallback, setIsFallback] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const loadWalker = async () => {
      try {
        const walker = await fetchWalkerProfile();
        if (!isMounted) {
          return;
        }
        setData(walker);
      } catch {
        if (!isMounted) {
          return;
        }
        setData(walkerMock);
        setIsFallback(true);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    void loadWalker();

    return () => {
      isMounted = false;
    };
  }, []);

  return { data, isLoading, isFallback };
};
