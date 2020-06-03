import './styles/w3.css';
import './styles/style.scss';

import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import { Icon } from '@grafana/ui';

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
                            <div className="tr-big-value">
                                <h1>60<span> Hz</span></h1>
                                <small className="tr-min-val"><Icon name="arrow-down" size="sm" />55 Hz</small>
                                <small className="tr-max-val"><Icon name="arrow-up" size="sm" />62 Hz</small>
                            </div>
                        </div>
                        <div className="w3-third w3-center">
                            <h5>Voltage</h5>
                            <div className="tr-big-value">
                                <h1>220<span> V</span></h1>
                                <small className="tr-min-val"><Icon name="arrow-down" size="sm" />215 V</small>
                                <small className="tr-max-val"><Icon name="arrow-up" size="sm" />221 V</small>
                            </div>
                        </div>
                        <div className="w3-third w3-center">
                            <h5>Current</h5>
                            <div className="tr-big-value">
                                <h1>5<span> A</span></h1>
                                <small className="tr-min-val"><Icon name="arrow-down" size="sm" />4.1 A</small>
                                <small className="tr-max-val"><Icon name="arrow-up" size="sm" />5.2 A</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}