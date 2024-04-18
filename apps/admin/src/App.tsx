import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from '@router/router.tsx';
import GlobalStyle from '@styles/globalStyle.ts';
import MockServiceWorkerProvider from '@/__tests__/MockServiceWorkerProvider.tsx';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@repo/ui';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();
const enableMSW = process.env.ENV === 'local';

const App = () => {
  return (
    <MockServiceWorkerProvider enable={enableMSW}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <RouterProvider router={router} />
        </ThemeProvider>
      </QueryClientProvider>
    </MockServiceWorkerProvider>
  );
};

export default App;
