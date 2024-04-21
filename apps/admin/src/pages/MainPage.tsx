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
      {/*<Trans i18nKey="userMessagesUnread" count={3}>*/}
      {/*  Hello <strong title={t('nameTitle')}>{{name}}</strong>, you have {{count}} unread message.*/}
      {/*</Trans>*/}
    </StyledMainPage>
  );
};

export default MainPage;
