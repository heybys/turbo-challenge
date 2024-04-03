import React from 'react';
import styles from './mainPage.module.css';
import useCurrentTime from '@hooks/useCurrentTime.ts';
import FroalaEditor from '@components/FroalaEditor.tsx';
import RealGrid from '@components/RealGrid.tsx';
import HighCharts from '@components/HighCharts.tsx';

const MainPage = () => {
  const currentTime = useCurrentTime();

  return (
    <div className={styles.page}>
      <h3>This is MainPage.</h3>
      <p>{currentTime}</p>
      <hr />
      <HighCharts />
      <FroalaEditor />
      <RealGrid />
    </div>
  );
};

export default MainPage;
