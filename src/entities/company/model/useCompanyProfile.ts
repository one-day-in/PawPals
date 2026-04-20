import { useEffect, useState } from 'react';

import { fetchCompanyProfile } from '@/entities/company/api/companyApi';
import { companyProfileMock } from '@/entities/company/model/companyMock';
import type { CompanyProfileData } from '@/entities/company/model/types';

interface UseCompanyProfileState {
  data: CompanyProfileData;
  isLoading: boolean;
}

export const useCompanyProfile = (): UseCompanyProfileState => {
  const [data, setData] = useState<CompanyProfileData>(companyProfileMock);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadCompany = async () => {
      try {
        const profile = await fetchCompanyProfile();
        if (!isMounted) {
          return;
        }
        setData(profile);
      } catch {
        if (!isMounted) {
          return;
        }
        setData(companyProfileMock);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    void loadCompany();

    return () => {
      isMounted = false;
    };
  }, []);

  return { data, isLoading };
};
