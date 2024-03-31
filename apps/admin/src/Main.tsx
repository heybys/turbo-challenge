import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import MockServiceWorkerProvider from '@mocks/MockServiceWorkerProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MockServiceWorkerProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MockServiceWorkerProvider>,
);
