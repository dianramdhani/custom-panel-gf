import '../styles/w3.css';

import React, { PureComponent } from 'react';
import { PanelProps, Field, getValueFormat } from '@grafana/data';
import { Gauge } from '@grafana/ui';
import { config } from '@grafana/runtime';

export class GensetMonitor extends PureComponent<PanelProps> {
  render() {
    const numeric = 20,
      text = `${getValueFormat(this.props.fieldConfig.defaults.unit)(numeric).text}${
        getValueFormat(this.props.fieldConfig.defaults.unit)(numeric).suffix
      }`,
      title = '';

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
            <div className="w3-half w3-center">
              <h5>Running Time</h5>
              <div className="tr-big-value">
                <h1>
                  2<span>h</span> 4<span>m</span>
                </h1>
              </div>
              <h5>Last for</h5>
              <div className="tr-big-value">
                <h1>
                  11<span>h</span>
                </h1>
              </div>
            </div>
          </div>
          <div className="w3-row tr-middle-value">
            <div className="w3-third w3-center">
              <h3>
                220<span> V</span>
              </h3>
            </div>
            <div className="w3-third w3-center">
              <h3>
                16<span> A</span>
              </h3>
            </div>
            <div className="w3-third w3-center">
              <h3>
                60<span> Hz</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
