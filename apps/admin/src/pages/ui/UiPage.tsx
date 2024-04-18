import React from 'react';
import { FroalaEditor, FullCalendar, HighCharts, RealGrid } from '@repo/ui';
import styled from 'styled-components';
import { DataFieldInput, DataValues, ConfigObject } from 'realgrid';

const StyledSamplePage = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;
`;

const UiPage = () => {
  const fields: DataFieldInput[] = [{}];
  const columns: (string | ConfigObject)[] = [{}];
  const rows: DataValues[] = [{}];

  return (
    <StyledSamplePage>
      <FullCalendar />
      <HighCharts />
      <FroalaEditor />
      <RealGrid fields={fields} columns={columns} rows={rows} />
    </StyledSamplePage>
  );
};

export default UiPage;
