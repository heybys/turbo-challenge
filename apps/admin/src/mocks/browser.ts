import { setupWorker } from 'msw/browser';
import httpHandlers from '@mocks/httpHandlers';

export const worker = setupWorker(...httpHandlers);
