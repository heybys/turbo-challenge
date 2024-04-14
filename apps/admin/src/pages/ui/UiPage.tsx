import React from 'react';
import { FroalaEditor, FullCalendar, HighCharts, RealGrid } from '@repo/ui';
import styled from 'styled-components';

const StyledSamplePage = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;
`;

const UiPage = () => {
  return (
    <StyledSamplePage>
      <FullCalendar />
      <HighCharts />
      <FroalaEditor />
      <RealGrid />
    </StyledSamplePage>
  );
};

export default UiPage;
