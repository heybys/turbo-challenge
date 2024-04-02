import { LoginUser } from '@apis/auth/auth.ts';
import httpClient from '@apis/utils/httpClient.ts';
import { AxiosBasicCredentials } from 'axios';

export const login = async (
  credentials: AxiosBasicCredentials,
): Promise<LoginUser> => {
  return await httpClient.post('/login', undefined, { auth: credentials });
};

export const apiTest = async () => {
  return await httpClient.get('/post');
};
