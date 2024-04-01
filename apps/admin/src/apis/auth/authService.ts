import { LoginUser } from '@apis/auth/auth.ts';
import httpClient from '@apis/utils/httpClient.ts';
import { AxiosBasicCredentials } from 'axios';

export const login = async (
  credentials: AxiosBasicCredentials,
): Promise<LoginUser> => {
  return await httpClient.post('/api/login', undefined, { auth: credentials });
};
