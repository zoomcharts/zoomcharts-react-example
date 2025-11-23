import { GeoChart as Chart } from '@dvsl/react-zoomcharts';
import '@dvsl/react-zoomcharts/leaflet.css';

function GeoChart() {
  return (
    <Chart settings={{
      navigation: {
        initialLat: 35,
        initialLng: -100,
      },
      data: [{
        preloaded: {
          nodes: [
            { id: "Squaw Valley", coordinates: [-119.181449, 36.707146], loaded: true },
            { id: "Atlanta", coordinates: [-84.388846, 33.752504], loaded: true },
            { id: "New York", coordinates: [-73.996705, 40.74838], loaded: true },
            { id: "Lake Placid", coordinates: [-81.364918, 27.294474], loaded: true }
          ],
          west: -180,
          south: 180,
          east: -85.0511287798,
          north: 85.0511287798
        },
        
      }],
      layers: [
        {
          name: "Points",
          type: "items",
        }
      ]
    }} />
  );
}

export default GeoChart;