import { FacetChart as Chart } from '@dvsl/react-zoomcharts';
import '@dvsl/react-zoomcharts/zc.css';

function FacetChart() {
  return (
    <Chart settings={{
      data: [
        {
          preloaded: {
            subvalues: [
              { id: "Alpha", name: "Alpha", value: 15 },
              { id: "Beta", name: "Beta", value: 25 },
              { id: "Gamma", name: "Gamma", value: 35 },
            ]
          }
        }
      ]
    }} />
  );
}

export default FacetChart;