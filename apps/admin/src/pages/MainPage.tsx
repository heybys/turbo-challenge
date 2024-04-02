import React from 'react';
import styles from './mainPage.module.css';
import useCurrentTime from '@hooks/useCurrentTime.ts';

const MainPage = () => {
  const currentTime = useCurrentTime();

  return <div className={styles.page}>This is MainPage. {currentTime}</div>;
};

export default MainPage;
