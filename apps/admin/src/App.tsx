import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from '@pages/MainPage.tsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
