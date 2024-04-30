import React from 'react';
import useCurrentTime from '@hooks/useCurrentTime.ts';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import useFetchAccounts from '@apis/account/useFetchAccounts.ts';

const StyledMainPage = styled.div`
  ${() => ({
    // backgroundColor: theme.colors.gray100,
  })}
`;

const MainPage = () => {
  const currentTime = useCurrentTime();
  const { t } = useTranslation();
  const { data } = useFetchAccounts();

  return (
    <StyledMainPage>
      <h3>This is MainPage.</h3>
      <p>{currentTime}</p>
      <p>{JSON.stringify(data, null, '\t')}</p>
      <p>{t('welcome')}</p>
      <div>
        <img
          src={'http://localhost:8080/images/samoyed.jpeg'}
          alt="samoyed"
          width={300}
        />
      </div>
    </StyledMainPage>
  );
};

export default MainPage;
