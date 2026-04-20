import { useEffect, useState } from 'react';

import { fetchOwnerProfile } from '@/entities/owner/api/ownerApi';
import { ownerProfileMock } from '@/entities/owner/model/ownerMock';
import type { OwnerProfileData } from '@/entities/owner/model/types';

interface UseOwnerProfileState {
  data: OwnerProfileData;
  isLoading: boolean;
}

export const useOwnerProfile = (): UseOwnerProfileState => {
  const [data, setData] = useState<OwnerProfileData>(ownerProfileMock);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadOwner = async () => {
      try {
        const owner = await fetchOwnerProfile();
        if (!isMounted) {
          return;
        }
        setData(owner);
      } catch {
        if (!isMounted) {
          return;
        }
        setData(ownerProfileMock);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    void loadOwner();

    return () => {
      isMounted = false;
    };
  }, []);

  return { data, isLoading };
};
