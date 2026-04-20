import { http } from '@/shared/api/http';
import type { WalkerProfile, WalkerResponse } from '@/entities/walker/model/types';

export const fetchWalkerProfile = async (): Promise<WalkerProfile> => {
  const { data } = await http.get<WalkerResponse>('/db');
  return data.walkerProfile;
};
