import { useEffect, useRef } from 'react';
import { GridView, LocalDataProvider } from 'realgrid';
import { columns, fields, rows } from './realgridData.ts';
// import 'realgrid/dist/realgrid-style.css';

export const RealGrid = () => {
  const realGridElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = realGridElement.current;
    const provider = new LocalDataProvider(true);
    const grid = new GridView(container!);

    grid.setDataSource(provider);
    provider.setFields(fields);
    grid.setColumns(columns);
    provider.setRows(rows);

    return () => {
      provider.clearRows();
      grid.destroy();
      provider.destroy();
    };
  }, []);

  return (
    <div style={{ padding: 10 }}>
      <h4>RealGrid sample</h4>
      <div
        ref={realGridElement}
        style={{ height: '200px', width: '800px' }}
      ></div>
    </div>
  );
};

export default RealGrid;
