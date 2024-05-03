import React from 'react';
import useCurrentTime from '@hooks/useCurrentTime.ts';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const StyledMainPage = styled.div`
  ${({ theme }) => ({
    backgroundColor: theme.colors.white,
  })}
  padding: 100px;
`;

const StyledBox = styled.div`
  width: 300px;
  height: 300px;

  border-radius: 16px;
  background-color: white;
  padding: 30px;

  ${({ theme }) => ({
    // boxShadow: theme.shadow.level4,
  })}
`;

const MainPage = () => {
  const currentTime = useCurrentTime();
  const { t } = useTranslation();

  return (
    <StyledMainPage>
      <h3>This is MainPage.</h3>
      <p>{currentTime}</p>
      <p>{t('welcome')}</p>
      <StyledBox>d</StyledBox>
    </StyledMainPage>
  );
};

export default MainPage;
