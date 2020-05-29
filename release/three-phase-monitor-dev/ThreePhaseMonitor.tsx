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

    console.log(data, 'ini contoh datanya');
    return (
        <div className="w3-display-container" style={{ width: '100%', height: '100%' }}>
            <div className="w3-display-middle" style={{ width: '100%' }}>
                <div className="w3-row w3-section">
                    <div className="w3-third w3-center">
                        <h1>R</h1>
                        <h3>{getLastValue(voltR)?.text}<span className="w3-large">{getLastValue(voltR)?.suffix}</span> / {getLastValue(currR)?.text}<span className="w3-large">{getLastValue(currR)?.suffix}</span></h3>
                    </div>
                    <div className="w3-third w3-center">
                        <h1>S</h1>
                        <h3>{getLastValue(voltS)?.text}<span className="w3-large">{getLastValue(voltS)?.suffix}</span> / {getLastValue(currS)?.text}<span className="w3-large">{getLastValue(currS)?.suffix}</span></h3>
                    </div>
                    <div className="w3-third w3-center">
                        <h1>T</h1>
                        <h3>{getLastValue(voltT)?.text}<span className="w3-large">{getLastValue(voltT)?.suffix}</span> / {getLastValue(currT)?.text}<span className="w3-large">{getLastValue(currT)?.suffix}</span></h3>
                    </div>
                </div>
                {/* <div className="w3-center w3-section">
                    <h1>Total Power</h1>
                    <h3>23<span className="w3-large"> kWh</span></h3>
                </div> */}
            </div>
        </div>
    );
};