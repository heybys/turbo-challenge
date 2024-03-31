import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from '@/routers/router.tsx';

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
