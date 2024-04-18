import axios, { AxiosError } from 'axios';

const printConsoleLog = false;
// const apiVersion = 'v1';

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

httpClient.interceptors.request.use(
  (request) => {
    if (printConsoleLog) console.log('[request]', request);
    return request;
  },
  (error: AxiosError) => {
    if (printConsoleLog) console.log('[request]', error);
    return Promise.reject(error);
  },
);

httpClient.interceptors.response.use(
  (response) => {
    if (printConsoleLog) console.log('[response]', response);
    return response;
  },
  (error: AxiosError) => {
    if (printConsoleLog) console.log('[response]', error);
    return Promise.reject(error);
  },
);

export default httpClient;
