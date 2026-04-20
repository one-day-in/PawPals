import { http } from '@/shared/api/http';
import type { OwnerProfileData, OwnerResponse } from '@/entities/owner/model/types';

export const fetchOwnerProfile = async (): Promise<OwnerProfileData> => {
  const { data } = await http.get<OwnerResponse>('/db');
  return data.ownerProfile;
};
