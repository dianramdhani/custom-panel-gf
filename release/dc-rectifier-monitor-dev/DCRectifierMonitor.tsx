import './w3.css';

import React from 'react';
import {
    PanelProps,
    DataFrame,
    getValueFormat,
} from '@grafana/data';

export const DCRectifierMonitor: React.FC<PanelProps> = (props) => {
    const data = props.data,
        activeenergy = data.series.find(_ => _.name === 'activeenergy'),
        current = data.series.find(_ => _.name === 'current'),
        volt = data.series.find(_ => _.name === 'volt');

    const getLastValue = (data: DataFrame | undefined) => {
        if (data) {
            const
                unit = data.fields[1].config.unit,
                value = data.fields[1].values.get(0);
            return getValueFormat(unit)(value)
        } else {
            return;
        }
    }

    return (
        <div className="w3-display-container" style={{ width: '100%', height: '100%' }}>
            <div className="w3-display-middle" style={{ width: '100%' }}>
                <div className="w3-center">
                    <h5>Total Active Energy</h5>
                    <div className="w3-section">
                        <h1>{getLastValue(activeenergy)?.text}<span className="w3-xlarge">{getLastValue(activeenergy)?.suffix}</span></h1>
                    </div>
                </div>
                <div className="w3-row">
                    <div className="w3-half w3-center">
                        <h5>Current Ampere</h5>
                        <div className="w3-section">
                            <h1>{getLastValue(current)?.text}<span className="w3-xlarge">{getLastValue(current)?.suffix}</span></h1>
                        </div>
                    </div>
                    <div className="w3-half w3-center">
                        <h5>Current Voltage</h5>
                        <div className="w3-section">
                            <h1>{getLastValue(volt)?.text}<span className="w3-xlarge">{getLastValue(volt)?.suffix}</span></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};