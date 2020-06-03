import './w3.css';

import React, { PureComponent } from 'react';
import {
    PanelProps,
} from '@grafana/data';

export class GensetMonitor extends PureComponent<PanelProps> {
    render() {
        return (
            <div className="w3-display-container" style={{ width: '100%', height: '100%' }}>
                <div className="w3-display-middle" style={{ width: '100%' }}>
                    <div className="w3-center">
                        <h5>Running Time</h5>
                        <div className="w3-section">
                            <h1>4h 2m</h1>
                        </div>
                    </div>
                    <div className="w3-row">
                        <div className="w3-third w3-center">
                            <h5>Frequency</h5>
                            <div className="w3-section">
                                <h1>60<span className="w3-xlarge"> Hz</span></h1>
                            </div>
                        </div>
                        <div className="w3-third w3-center">
                            <h5>Voltage</h5>
                            <div className="w3-section">
                                <h1>220<span className="w3-xlarge"> V</span></h1>
                            </div>
                        </div>
                        <div className="w3-third w3-center">
                            <h5>Current</h5>
                            <div className="w3-section">
                                <h1>5<span className="w3-xlarge"> A</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}