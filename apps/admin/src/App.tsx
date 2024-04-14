import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from '@router/router.tsx';
import GlobalStyle from '@styles/globalStyle.ts';
import MockServiceWorkerProvider from '@mocks/MockServiceWorkerProvider.tsx';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@repo/ui';

const enableMSW = process.env.ENV === 'local';

const App = () => {
  return (
    <MockServiceWorkerProvider enable={enableMSW}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </MockServiceWorkerProvider>
  );
};

export default App;
