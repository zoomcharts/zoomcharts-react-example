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
