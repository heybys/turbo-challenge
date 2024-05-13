import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from '@router/router.tsx';
import GlobalStyle from '@styles/globalStyle.ts';
import MockServiceWorkerProvider from '@/__tests__/MockServiceWorkerProvider.tsx';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@repo/ui';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import queryClient from '@apis/utils/queryClient.ts';
import i18n from './locales/i18n.ts';
import { I18nextProvider } from 'react-i18next';

const isLocal = process.env.ENV === 'local';

const App = () => {
  return (
    <MockServiceWorkerProvider enable={isLocal}>
      <QueryClientProvider client={queryClient}>
        {isLocal && <ReactQueryDevtools />}
        <I18nextProvider i18n={i18n}>
          <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <RouterProvider router={router} />
          </ThemeProvider>
        </I18nextProvider>
      </QueryClientProvider>
    </MockServiceWorkerProvider>
  );
};

export default App;
