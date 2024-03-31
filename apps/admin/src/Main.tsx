import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import MockServiceWorkerProvider from '@mocks/MockServiceWorkerProvider.tsx';
import reportWebVitals from '../reportWebVitals.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MockServiceWorkerProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MockServiceWorkerProvider>,
);

reportWebVitals();
