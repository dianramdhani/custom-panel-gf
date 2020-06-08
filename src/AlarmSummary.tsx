import '../styles/w3.css';
import '../styles/style.scss';

import React from 'react';
import { PanelProps } from '@grafana/data';

export const AlarmSummary: React.FC<PanelProps> = props => {
  return (
    <div className="w3-display-container" style={{ width: '100%', height: '100%' }}>
      <div className="w3-display-middle" style={{ width: '100%' }}>
        <div className="w3-row-padding">
          <div className="w3-third w3-margin-bottom">
            <div className="w3-card tr-critical-2">
              <h5>Critical</h5>
              <div className="tr-big-value">
                <h1>3</h1>
              </div>
            </div>
          </div>
          <div className="w3-third w3-margin-bottom">
            <div className="w3-card tr-major-2">
              <h5>Major</h5>
              <div className="tr-big-value">
                <h1>5</h1>
              </div>
            </div>
          </div>
          <div className="w3-third w3-margin-bottom">
            <div className="w3-card tr-minor-2">
              <h5>Minor</h5>
              <div className="tr-big-value">
                <h1>2</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
