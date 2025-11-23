import { NetChart as Chart } from '@dvsl/react-zoomcharts';
import '@dvsl/react-zoomcharts/zc.css';

function NetChart() {
  return (
    <Chart settings={{
      data: [
        {
          preloaded: {
            nodes: [
              { id: "node1", loaded: true },
              { id: "node2", loaded: true },
            ],
            links: [
              { from: "node1", to: "node2" }
            ]
          }
        }
      ]
    }} />
  );
}

export default NetChart;