import '../styles/w3.css';
import '../styles/style.scss';

import React from 'react';
import { PanelProps } from '@grafana/data';

export const AlarmSummary: React.FC<PanelProps> = props => {
  return (
    <div className="w3-display-container" style={{ width: '100%', height: '100%' }}>
      <div className="w3-display-middle" style={{ width: '100%' }}>
        <div className="w3-row-padding">
          <div className="w3-col" style={{ width: '33.3%' }}>
            <div className="w3-card w3-container tr-critical-3">
              <h5>Critical</h5>
              <h1>3</h1>
            </div>
          </div>
          <div className="w3-col" style={{ width: '33.3%' }}>
            <div className="w3-card w3-container tr-major-3">
              <h5>Major</h5>
              <h1>5</h1>
            </div>
          </div>
          <div className="w3-col" style={{ width: '33.3%' }}>
            <div className="w3-card w3-container tr-minor-3">
              <h5>Minor</h5>
              <h1>2</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
