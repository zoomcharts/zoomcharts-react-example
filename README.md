## Set up the Development Environment

You need to set up your development before you can do anything.
Install `Node.js®` and `npm` if they are not already on your machine.

## Create new project folder

Create new project folder and go to project directory
```
mkdir my-zoomchartsApp && cd my-zoomchartsApp
```

## Create a Vite + React project

Create a new Vite project with React and TypeScript template
```
npm create vite@latest . -- --template react-ts
```

Install dependencies
```
npm install
```

## Install @dvsl/react-zoomcharts

Install the `@dvsl/react-zoomcharts` package
```
npm install --save @dvsl/react-zoomcharts
```

## Set up ZoomCharts component

### src/ZoomCharts.tsx

Create a ZoomCharts component:
```tsx
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
```

## Available Chart Components

The `@dvsl/react-zoomcharts` package exports the following chart components:
- `TimeChart` - For time-based data visualization
- `PieChart` - For multi-level pie and donut charts
- `NetChart` - For network graph visualization
- `FacetChart` - For multi-level column and line charts
- `GeoChart` - For geospatial data visualization
- `Chart` - Generic chart component that accepts a `type` prop

### Example: PieChart Configuration

```tsx
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
```

### Example: NetChart Configuration

```tsx
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
```

### Example: FacetChart Configuration

```tsx
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
```

### Example: GeoChart Configuration

```tsx
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
```

## Using Chart Components

### src/main.tsx

Import your chart component and render it in the root element:

```tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import ZoomCharts from './ZoomCharts.tsx';

// Zoomcharts license and license key
window.ZoomChartsLicense = "";
window.ZoomChartsLicenseKey = "";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div style={{ width: '100%', height: '100%' }}>
      <ZoomCharts type={"TimeChart"} />
    </div>
  </StrictMode>,
)

```

## Launch the server

```
npm run dev
```