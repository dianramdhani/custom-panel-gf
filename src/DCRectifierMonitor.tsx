import '../styles/w3.css';
import '../styles/style.scss';

import React from 'react';
import {
    PanelProps,
    DataFrame,
    getValueFormat,
} from '@grafana/data';
import { Icon } from '@grafana/ui';

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
    const minMaxRender = (data: DataFrame | undefined) => {
        const minMax = (data: DataFrame) => {
            const _data = data.fields[1].values.toArray();
            return {
                min: Math.min.apply(Math, _data.map(_ => _ === null ? Infinity : _)),
                max: Math.max.apply(Math, _data.map(_ => _ === null ? -Infinity : _))
            }
        }

        return data ?
            <>
                <small className="tr-min-val"><Icon name="arrow-down" size="sm" />{minMax(data).min}{getLastValue(data)?.suffix}</small>
                <small className="tr-max-val"><Icon name="arrow-up" size="sm" />{minMax(data).max}{getLastValue(data)?.suffix}</small>
            </> :
            null;
    };

    return (
        <div className="w3-display-container" style={{ width: '100%', height: '100%' }}>
            <div className="w3-display-middle" style={{ width: '100%' }}>
                <div className="w3-center">
                    <h5>Total Active Energy</h5>
                    <div className="tr-big-value">
                        <h1>{getLastValue(activeenergy)?.text}<span>{getLastValue(activeenergy)?.suffix}</span></h1>
                    </div>
                </div>
                <div className="w3-row">
                    <div className="w3-half w3-center">
                        <h5>Current Ampere</h5>
                        <div className="tr-big-value">
                            <h1>{getLastValue(current)?.text}<span>{getLastValue(current)?.suffix}</span></h1>
                            {minMaxRender(current)}
                        </div>
                    </div>
                    <div className="w3-half w3-center">
                        <h5>Current Voltage</h5>
                        <div className="tr-big-value">
                            <h1>{getLastValue(volt)?.text}<span>{getLastValue(volt)?.suffix}</span></h1>
                            {minMaxRender(volt)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};