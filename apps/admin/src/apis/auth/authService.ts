import { LoginUser } from '@apis/auth/auth.ts';
import httpClient from '@apis/utils/httpClient.ts';
import { AxiosBasicCredentials } from 'axios';

class AuthService {
  login = async (credentials: AxiosBasicCredentials): Promise<LoginUser> => {
    return await httpClient.post('/login', undefined, { auth: credentials });
  };

  test = async () => {
    return await httpClient.get('/test');
  };
}

const authService = new AuthService();
export default authService;
