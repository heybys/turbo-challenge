import React from 'react';
import { Outlet } from 'react-router-dom';
import { Counter, Header } from '@repo/ui';

const MainPage = () => {
  return (
    <div>
      <Header size={'MD'}>This is my MainPage</Header>
      <Counter initValue={3} />
      <p>MainPage 입니다.</p>
      node env - {process.env.NODE_ENV}
      <br />
      env - {process.env.ENV}
      <br />
      test - {process.env.TEST}
      <Outlet />
    </div>
  );
};

export default MainPage;
