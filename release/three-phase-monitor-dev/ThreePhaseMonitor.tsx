import '../styles/w3.css';
import '../styles/style.scss';

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
                <div className="w3-center tr-big-value">
                    <h1>25.421 <span> kWh</span></h1>
                </div>
                <div className="w3-row tr-big-value tr-middle-value">
                    <div className="w3-third w3-center">
                        <h5>R</h5>
                        <h1>{getLastValue(currR)?.text}<span>{getLastValue(currR)?.suffix}</span></h1>
                        <h3>{getLastValue(voltR)?.text}<span>{getLastValue(voltR)?.suffix}</span></h3>
                    </div>
                    <div className="w3-third w3-center">
                        <h5>S</h5>
                        <h1>{getLastValue(currS)?.text}<span>{getLastValue(currS)?.suffix}</span></h1>
                        <h3>{getLastValue(voltS)?.text}<span>{getLastValue(voltS)?.suffix}</span></h3>
                    </div>
                    <div className="w3-third w3-center">
                        <h5>T</h5>
                        <h1>{getLastValue(currT)?.text}<span>{getLastValue(currT)?.suffix}</span></h1>
                        <h3>{getLastValue(voltT)?.text}<span>{getLastValue(voltT)?.suffix}</span></h3>
                    </div>
                </div>
                <div className="w3-center tr-middle-value">
                    <h3>60 <span> Hz</span></h3>
                </div>
            </div>
        </div>
    );
};