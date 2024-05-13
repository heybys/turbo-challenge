import React from 'react';
import useCurrentTime from '@hooks/useCurrentTime.ts';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';

const StyledMainPage = styled.div`
  ${({ theme }) => ({
    backgroundColor: theme.color.white,
  })}
  padding: 100px;
`;

const StyledBox = styled.div`
  width: 300px;
  height: 300px;

  border-radius: 16px;
  background-color: white;
  padding: 30px;

  ${() => ({
    // boxShadow: theme.shadow.level4,
  })}
`;

const convert = (params: string[], t: TFunction<'translation', undefined>) => {
  const obj: { [key: string]: string } = {};
  params.forEach((item, index) => {
    obj[index] = t('errors.params.' + item);
  });
  return obj;
};

const MainPage = () => {
  const currentTime = useCurrentTime();
  const { t } = useTranslation();
  const messageKey = 'msg.required.param.empty';
  const messageKeyParams = ['label.companyCode'];

  return (
    <StyledMainPage>
      <h3>This is MainPage.</h3>
      <p>{currentTime}</p>
      <p>{t('common.welcome')}</p>
      <p>{t('errors.messages.' + messageKey, convert(messageKeyParams, t))}</p>
      <StyledBox>d</StyledBox>
    </StyledMainPage>
  );
};

export default MainPage;
