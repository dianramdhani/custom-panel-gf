import './w3.css';

import React, { PureComponent } from 'react';
import {
    PanelProps,
    Field,
    getValueFormat
} from '@grafana/data';
import { Gauge } from '@grafana/ui';
import { config } from '@grafana/runtime';

export class FuelMonitor extends PureComponent<PanelProps> {
    render() {
        const numeric = 20,
            text = `${getValueFormat(this.props.fieldConfig.defaults.unit)(numeric).text}${getValueFormat(this.props.fieldConfig.defaults.unit)(numeric).suffix}`,
            title = this.props.fieldConfig.defaults.displayName;

        const field: Partial<Field> = {
            config: {
                min: this.props.fieldConfig.defaults.min || 0,
                max: this.props.fieldConfig.defaults.max || 100,
                thresholds: this.props.fieldConfig.defaults.thresholds,
            },
        };

        return (
            <div className="w3-display-container" style={{ width: '100%', height: '100%' }}>
                <div className="w3-display-middle" style={{ width: '100%' }}>
                    <div className="w3-row">
                        <div className="w3-half">
                            <Gauge
                                value={{ numeric, text, title }}
                                width={150}
                                height={150}
                                field={field.config}
                                theme={config.theme}
                            />
                        </div>
                        <div className="w3-half w3-center" style={{ marginTop: 20 }}>
                            <h5>Estimated Supply</h5>
                            <div className="w3-section">
                                <h1>11<span className="w3-xlarge">h</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}