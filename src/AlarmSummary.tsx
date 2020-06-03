import '../styles/w3.css';
import '../styles/style.scss';

import React from 'react';
import {
    PanelProps,
} from '@grafana/data';

export const AlarmSummary: React.FC<PanelProps> = (props) => {
    return (
        <div className="w3-display-container" style={{ width: '100%', height: '100%' }}>
            <div className="w3-display-middle" style={{ width: '100%' }}>
                <div className="w3-row w3-section">
                    <div className="w3-third w3-center tr-critical">
                        <h5>Critical</h5>
                        <div className="tr-big-value">
                            <h1>3</h1>
                        </div>
                    </div>
                    <div className="w3-third w3-center tr-major">
                        <h5>Major</h5>
                        <div className="tr-big-value">
                            <h1>5</h1>
                        </div>
                    </div>
                    <div className="w3-third w3-center tr-minor">
                        <h5>Minor</h5>
                        <div className="tr-big-value">
                            <h1>2</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};