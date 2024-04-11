import React from 'react';
import styles from './mainPage.module.css';
import useCurrentTime from '@hooks/useCurrentTime.ts';
import { FullCalendar, HighCharts, FroalaEditor, RealGrid } from '@repo/ui';

const MainPage = () => {
  const currentTime = useCurrentTime();

  return (
    <div className={styles.page}>
      <h3>This is MainPage.</h3>
      <p>{currentTime}</p>
      <hr />
      <FullCalendar />
      <HighCharts />
      <FroalaEditor />
      <RealGrid />
    </div>
  );
};

export default MainPage;
