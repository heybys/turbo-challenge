import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from '@/routers/router.tsx';
import GlobalStyle from '@/styles/globalStyle.ts';
import MockServiceWorkerProvider from '@mocks/MockServiceWorkerProvider.tsx';

const enableMSW = process.env.ENV === 'local';

const App = () => {
  return (
    <>
      <MockServiceWorkerProvider enable={enableMSW}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </MockServiceWorkerProvider>
      ,
    </>
  );
};

export default App;
