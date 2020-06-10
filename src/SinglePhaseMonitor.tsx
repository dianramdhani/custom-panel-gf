import '../styles/w3.css';
import '../styles/style.scss';

import React from 'react';
import { PanelProps } from '@grafana/data';

export const SinglePhaseMonitor: React.FC<PanelProps> = props => {
  return (
    <div className="w3-display-container tr-full">
      <div className="w3-display-middle tr-wd-100">
        <h1 className="w3-center tr-big-value">
          20.223 <span> kWh</span>
        </h1>
        <h1 className="w3-center tr-big-value">
          4.8 <span> A</span>
        </h1>
        <div className="w3-row w3-container tr-middle-value">
          <div className="w3-col w3-center" style={{ width: '33.3%' }}>
            <h3>
              60 <span> Hz</span>
            </h3>
          </div>
          <div className="w3-col w3-center" style={{ width: '33.3%' }}>
            <h3>
              220 <span> V</span>
            </h3>
          </div>
          <div className="w3-col w3-center" style={{ width: '33.3%' }}>
            <h3>
              0.01 <span> W</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
