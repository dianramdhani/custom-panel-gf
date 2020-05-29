import './w3.css';

import React from 'react';
import {
    PanelProps,
    PanelData,
    DataFrame,
    getValueFormat
} from '@grafana/data';

export const ThreePhaseMonitor: React.FC<PanelProps> = (props) => {
    const data: PanelData = props.data,
        currR = data.series.find(_ => _.name === 'currR'),
        currS = data.series.find(_ => _.name === 'currS'),
        currT = data.series.find(_ => _.name === 'currT'),
        voltR = data.series.find(_ => _.name === 'voltR'),
        voltS = data.series.find(_ => _.name === 'voltS'),
        voltT = data.series.find(_ => _.name === 'voltT');

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
                <div className="w3-row w3-section">
                    <div className="w3-third w3-center">
                        <h5>Phase R</h5>
                        <div className="w3-section">
                            <h1>{getLastValue(voltR)?.text}<span className="w3-xlarge">{getLastValue(voltR)?.suffix}</span></h1>
                            <h1>{getLastValue(currR)?.text}<span className="w3-xlarge">{getLastValue(currR)?.suffix}</span></h1>
                        </div>
                    </div>
                    <div className="w3-third w3-center">
                        <h5>Phase S</h5>
                        <div className="w3-section">
                            <h1>{getLastValue(voltS)?.text}<span className="w3-xlarge">{getLastValue(voltS)?.suffix}</span></h1>
                            <h1>{getLastValue(currS)?.text}<span className="w3-xlarge">{getLastValue(currS)?.suffix}</span></h1>
                        </div>
                    </div>
                    <div className="w3-third w3-center">
                        <h5>Phase T</h5>
                        <div className="w3-section">
                            <h1>{getLastValue(voltT)?.text}<span className="w3-xlarge">{getLastValue(voltT)?.suffix}</span></h1>
                            <h1>{getLastValue(currT)?.text}<span className="w3-xlarge">{getLastValue(currT)?.suffix}</span></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};