import React from 'react';
import useCurrentTime from '@hooks/useCurrentTime.ts';
import styled from 'styled-components';

const StyledMainPage = styled.div`
  ${() => ({
    // backgroundColor: theme.colors.gray100,
  })}
`;

const MainPage = () => {
  const currentTime = useCurrentTime();

  return (
    <StyledMainPage>
      <h3>This is MainPage.</h3>
      <p>{currentTime}</p>
    </StyledMainPage>
  );
};

export default MainPage;
