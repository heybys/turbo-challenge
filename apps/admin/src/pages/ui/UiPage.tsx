import React from 'react';
import styled from 'styled-components';
import {
  FroalaEditor,
  FullCalendar,
  HighCharts,
  RealGrid,
  ViewOptions,
} from '@repo/ui';
import { columns, fields, rows } from './realgridData.ts';

const StyledSamplePage = styled.div`
  display: flex;
  //flex-wrap: wrap;
  flex-direction: column;
  padding: 2rem;
`;

const UiPage = () => {
  // const fields: DataFieldInput[] = [];
  // const columns: (string | ConfigObject)[] = [];
  // const rows: DataValues[] = [];

  // const viewOptions: ViewOptions = {
  // edit: {
  //   editable: true
  // },
  // rowIndicator: {
  //   visible: true
  // }
  // }

  return (
    <StyledSamplePage>
      <RealGrid
        add
        remove
        fields={fields}
        columns={columns}
        rows={rows}
        // fixedOption={{ colCount: 2, editable: true }}
        showCheckBar
        showStateBar
      />
      <hr style={{ marginTop: 150, marginBottom: 150 }} />
      <FroalaEditor />
      <FullCalendar />
      <HighCharts />
    </StyledSamplePage>
  );
};

export default UiPage;
