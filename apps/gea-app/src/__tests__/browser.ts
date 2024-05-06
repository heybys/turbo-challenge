import { setupWorker } from 'msw/browser';
import httpHandlers from '@/__tests__/mocks/httpHandlers.ts';

export const worker = setupWorker(...httpHandlers);
