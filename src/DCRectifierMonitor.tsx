import '../styles/w3.css';
import '../styles/style.scss';

import React from 'react';
import {
    PanelProps,
    DataFrame,
    getValueFormat,
} from '@grafana/data';
// import { Icon } from '@grafana/ui';

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
    };

    return (
        <div className="w3-display-container tr-full">
            <div className="w3-display-middle tr-wd-100">
                <div className="w3-center tr-big-value">
                    <h1>{getLastValue(current)?.text}<span>{getLastValue(current)?.suffix}</span></h1>
                </div>
                <div className="w3-row tr-middle-value">
                    <div className="w3-third w3-center">
                        <h3>220<span> VAC</span></h3>
                    </div>
                    <div className="w3-third w3-center">
                        <h3>52<span> VDC</span></h3>
                    </div>
                    <div className="w3-third w3-center">
                        <h3>30<span> °C</span></h3>
                    </div>
                </div>
            </div>
        </div>
    );
};