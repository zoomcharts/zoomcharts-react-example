import { Chart, type ChartType } from '@dvsl/react-zoomcharts';
import '@dvsl/react-zoomcharts/zc.css';

function ZoomCharts(props: { type: ChartType }) {
  return (
      <Chart type={props.type} settings={{
        data: [
          {
            preloaded: {
              values: [
                ["2017-01-09 00:00:00", 100],
                ["2017-01-20", 200],
                [1485561600000, 300],
                ["2017-02-05 15:20:00", 400],
                ["2017-02-15 22:59:59", 500]
              ],
              from: "2017-01-09 00:00:00",
              to: "2017-02-15 22:59:59",
              unit: "d"
            }
          }
        ]
      }}/>
  );
}

export default ZoomCharts;