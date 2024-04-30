import { useEffect, useRef } from 'react';
import {
  ConfigObject,
  DataFieldInput,
  DataValues,
  default as RealGridDefault,
  FixedOptions,
  GridView,
  IndicatorValue,
  LocalDataProvider,
  SelectionMode,
  SelectionStyle,
  StateMark,
  ViewOptions,
} from 'realgrid';
import '../../../../../node_modules/realgrid/dist/realgrid-style.css';
import styled from 'styled-components';

RealGridDefault.setLicenseKey(
  'upVcPE+wPOmtLjqyBIh9RkM/nBOseBrflwxYpzGZyYm9cY8amGDkiMnVeQKUHJDjW2y71jtk+wteqHQ1mRMIXzEcGIrzZpzzNTakk0yR9UcO/hzNodVsIiqQNVtxmmYt',
);
const viewOptions: ViewOptions = {
  edit: {
    editable: true,
    deletable: true,
  },
  rowIndicator: {
    visible: true,
    displayValue: IndicatorValue.INDEX,
    headText: 'No',
  },
  display: {
    selectionMode: SelectionMode.EXTENDED,
    selectionStyle: SelectionStyle.ROWS,
  },
  stateBar: {
    visible: false,
    mark: StateMark.IMAGE,
    headText: 'State',
    width: 40,
  },
  checkBar: {
    visible: false,
    width: 30,
    exclusive: false,
    showAll: true,
  },
  footer: {
    visible: false,
  },
};
RealGridDefault.setDefault(viewOptions);

interface RealGridProps {
  add?: boolean;
  remove?: boolean;
  excel?: boolean;
  copy?: boolean;
  expand?: boolean;
  columns: (string | ConfigObject)[];
  fields: DataFieldInput[];
  rows: DataValues[];
  fixedOption?: FixedOptions;
  showStateBar?: boolean;
  showCheckBar?: boolean;
}

const RealGridContainer = styled.div`
  //border: 1px solid black;
  //padding: 10px;
`;

const ButtonArea = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding-bottom: 10px;
`;

const OperationButton = styled.button`
  width: 50px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  border: none;
  font-size: 14px;
  font-weight: bold;
  color: white;
  border-radius: 10px;

  &:hover {
    background: gray;
  }

  &:active {
    background: darkgray;
  }
`;

export const RealGrid = ({
  add,
  remove,
  excel,
  copy,
  columns,
  fields,
  rows,
  fixedOption,
  showCheckBar,
  showStateBar,
}: RealGridProps) => {
  const realGridElement = useRef<HTMLDivElement>(null);
  let dataProvider: LocalDataProvider;
  let gridView: GridView;

  const handleAddButton = () => {
    dataProvider &&
      dataProvider.addRow({
        Name: 'Kessie',
      });
    gridView.showEditor();
  };

  const handleRemoveButton = () => {
    gridView && gridView.deleteSelection(true);
  };

  const handleClick = () => {
    // console.log(jsonRows);

    const rows1 = dataProvider.getJsonRows();

    const jsonRows = gridView.getModelsOfRows();
    // console.log(rows1);
    // alert(JSON.stringify(jsonRows, null, 2));
  };

  useEffect(() => {
    const container = realGridElement.current;
    dataProvider = new LocalDataProvider(true);
    dataProvider.softDeleting = true;
    dataProvider.deleteCreated = true;

    gridView = new GridView(container!);
    gridView.hideDeletedRows = false;
    fixedOption && gridView.setFixedOptions(fixedOption);
    showCheckBar != undefined &&
      gridView.setCheckBar({ visible: showCheckBar });
    showStateBar != undefined &&
      gridView.setStateBar({ visible: showStateBar });
    // gridView.editOptions.deletable = true;

    gridView.setColumns(columns);
    dataProvider.setFields(fields);
    dataProvider.setRows(rows);
    gridView.setDataSource(dataProvider);

    return () => {
      dataProvider.clearRows();
      gridView.destroy();
      dataProvider.destroy();
    };
  }, []);

  return (
    <RealGridContainer>
      {(add || remove || excel || copy) && (
        <ButtonArea>
          {add && (
            <OperationButton onClick={handleAddButton}>추가</OperationButton>
          )}
          {remove && (
            <OperationButton onClick={handleRemoveButton}>삭제</OperationButton>
          )}
          {true && (
            <OperationButton onClick={handleClick}>엑셀</OperationButton>
          )}
          {copy && <OperationButton>복사</OperationButton>}
        </ButtonArea>
      )}
      <div
        ref={realGridElement}
        style={{ height: '400px', width: 'auto' }}
      ></div>
    </RealGridContainer>
  );
};
