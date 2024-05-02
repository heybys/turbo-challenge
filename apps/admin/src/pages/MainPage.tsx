import React from 'react';
import useCurrentTime from '@hooks/useCurrentTime.ts';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const StyledMainPage = styled.div`
  font-family: 'pretendard';
  ${() => ({
    // backgroundColor: theme.colors.gray100,
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
    </StyledMainPage>
  );
};

export default MainPage;
