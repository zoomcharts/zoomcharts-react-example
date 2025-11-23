import { PieChart as Chart } from '@dvsl/react-zoomcharts';
import '@dvsl/react-zoomcharts/zc.css';

function PieChart() {
  return (
    <Chart settings={{
        data: [
          {
            preloaded: {
              subvalues: [
                { id: "Alpha", name: "Alpha", value: 40 },
                { id: "Beta", name: "Beta", value: 25 },
                { id: "Gamma", name: "Gamma", value: 35 },
              ]
            }
          }
        ]
      }} />
  );
}

export default PieChart;