import '../styles/w3.css';
import '../styles/style.scss';

import React from 'react';
import {
    PanelProps,
    PanelData,
    DataFrame,
    getValueFormat
} from '@grafana/data';
import { Icon } from '@grafana/ui';

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
    }

    return (
        <div className="w3-display-container" style={{ width: '100%', height: '100%' }}>
            <div className="w3-display-middle" style={{ width: '100%' }}>
                <div className="w3-row w3-section">
                    <div className="w3-third w3-center">
                        <h5>Phase R</h5>
                        <div className="tr-big-value">
                            <div className="w3-margin-bottom">
                                <h1>{getLastValue(voltR)?.text}<span>{getLastValue(voltR)?.suffix}</span></h1>
                                {minMaxRender(voltR)}
                            </div>
                            <div className="w3-margin-bottom">
                                <h1>{getLastValue(currR)?.text}<span>{getLastValue(currR)?.suffix}</span></h1>
                                {minMaxRender(currR)}
                            </div>
                        </div>
                    </div>
                    <div className="w3-third w3-center">
                        <h5>Phase S</h5>
                        <div className="tr-big-value">
                            <div className="w3-margin-bottom">
                                <h1>{getLastValue(voltS)?.text}<span>{getLastValue(voltS)?.suffix}</span></h1>
                                {minMaxRender(voltS)}
                            </div>
                            <div className="w3-margin-bottom">
                                <h1>{getLastValue(currS)?.text}<span>{getLastValue(currS)?.suffix}</span></h1>
                                {minMaxRender(currS)}
                            </div>
                        </div>
                    </div>
                    <div className="w3-third w3-center">
                        <h5>Phase T</h5>
                        <div className="tr-big-value">
                            <div className="w3-margin-bottom">
                                <h1>{getLastValue(voltT)?.text}<span>{getLastValue(voltT)?.suffix}</span></h1>
                                {minMaxRender(voltT)}
                            </div>
                            <div className="w3-margin-bottom">
                                <h1>{getLastValue(currT)?.text}<span>{getLastValue(currT)?.suffix}</span></h1>
                                {minMaxRender(currT)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};