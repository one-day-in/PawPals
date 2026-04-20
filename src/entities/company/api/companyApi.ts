import { http } from '@/shared/api/http';
import type { CompanyProfileData, CompanyResponse } from '@/entities/company/model/types';

export const fetchCompanyProfile = async (): Promise<CompanyProfileData> => {
  const { data } = await http.get<CompanyResponse>('/db');
  return data.companyProfile;
};
