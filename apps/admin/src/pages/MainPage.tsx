import React from 'react';
import useCurrentTime from '@hooks/useCurrentTime.ts';
import { FullCalendar, HighCharts, FroalaEditor, RealGrid } from '@repo/ui';
import styled from 'styled-components';

const StyledMainPage = styled.div``;

const MainPage = () => {
  const currentTime = useCurrentTime();

  return (
    <StyledMainPage>
      <h3>This is MainPage.</h3>
      <p>{currentTime}</p>
      <hr />
      <FullCalendar />
      <HighCharts />
      <FroalaEditor />
      <RealGrid />
    </StyledMainPage>
  );
};

export default MainPage;
