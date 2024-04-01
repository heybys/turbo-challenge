import React from 'react';
import { Counter, Header } from '@repo/ui';
import { Link } from 'react-router-dom';
import styles from './mainPage.module.css';

const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <div className={'nav'}>
        <Link className={'link'} to={'/movies'}>
          MOVIES
        </Link>
        <Link className={'link'} to={'/products'}>
          PRODUCTS
        </Link>
        {/*<Link className={styles.link} to={'/games'}>*/}
        {/*  GAMES*/}
        {/*</Link>*/}
      </div>
      <hr />
      <Header size={'MD'}>This is my MainPage</Header>
      <Counter initValue={3} />
      <p>MainPage 입니다.</p>
      <div>node env - {process.env.NODE_ENV}</div>
      <div>env - {process.env.ENV}</div>
      <div>test - {process.env.TEST}</div>
    </div>
  );
};

export default MainPage;
