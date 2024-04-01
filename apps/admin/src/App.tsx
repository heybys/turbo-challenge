import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from '@/routers/router.tsx';
import GlobalStyle from '@/styles/globalStyle.ts';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
