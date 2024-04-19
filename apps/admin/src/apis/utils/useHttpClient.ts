import axios, { AxiosError } from 'axios';
import { useOktaAuth } from '@okta/okta-react';

const hostname = process.env.REACT_APP_SERVER_HOST ?? 'http://localhost';
const port = process.env.REACT_APP_SERVER_PORT ?? '8080';

const httpClient = axios.create({
  baseURL: `${hostname}:${port}`,
  withCredentials: true,
  headers: {
    'Content-Type': `application/json;charset=UTF-8`,
    Accept: 'application/json',
  },
});

const useHttpClient = () => {
  const { oktaAuth } = useOktaAuth();

  httpClient.interceptors.request.use(
    (request) => {
      oktaAuth.getIdToken() &&
        request.headers.setAuthorization('Bearer ' + oktaAuth.getIdToken());
      return request;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    },
  );

  httpClient.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    },
  );

  return {
    httpClient,
  };
};

export default useHttpClient;
