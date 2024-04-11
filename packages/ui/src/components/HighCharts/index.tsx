import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React, { useState } from 'react';

export const HighCharts = () => {
  const [series, setSeries] = useState([{ data: [1, 2, 3] }]);
  const [hoverData, setHoverData] = useState<string | null>(null);
  const plotOptions = {
    series: {
      point: {
        events: {
          mouseOver: (e: React.MouseEvent) => {
            const category = (e.target as unknown as { category: string })
              .category;
            setHoverData(category);
          },
        },
      },
    },
  };

  const updateSeries = () => {
    setSeries([{ data: [Math.random() * 5, 2, 1] }]);
  };

  return (
    <div style={{ padding: 10 }}>
      <h4>HighCharts sample</h4>
      <h6>Hovering over {hoverData} </h6>
      <button onClick={updateSeries}>Update Series</button>
      <HighchartsReact
        highcharts={Highcharts}
        options={{
          accessibility: { enabled: false },
          title: { text: 'Sample' },
          xAxis: { categories: ['A', 'B', 'C'] },
          series,
          plotOptions,
        }}
      />
    </div>
  );
};
