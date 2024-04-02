import { useEffect, useRef } from 'react';
import { GridView, LocalDataProvider } from 'realgrid';
import { columns, fields, rows } from './realgridData';
// import 'realgrid/dist/realgrid-style.css';

const RealGrid = () => {
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
    <div ref={realGridElement} style={{ height: '500px', width: '80%' }}></div>
  );
};

export default RealGrid;
