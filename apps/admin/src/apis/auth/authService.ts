import { LoginUser } from '@apis/auth/auth.ts';
import httpClient from '@apis/utils/httpClient.ts';
import { AxiosBasicCredentials, AxiosResponse } from 'axios';
import { todos } from '@/__tests__/mocks/data.ts';

class AuthService {
  login = async (credentials: AxiosBasicCredentials): Promise<LoginUser> => {
    return await httpClient.post('/login', undefined, { auth: credentials });
  };

  test = async (): Promise<AxiosResponse<typeof todos>> => {
    return await httpClient.get('/test');
  };
}

const authService = new AuthService();
export default authService;
