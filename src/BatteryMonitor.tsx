import '../styles/w3.css';
import '../styles/style.scss';

import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import { BatteryOptions } from './types';
import { css } from 'emotion';

interface Props extends PanelProps<BatteryOptions> {}

export class BatteryMonitor extends PureComponent<Props> {
  readonly state: { zoom: number };

  constructor(props: Props) {
    super(props);

    this.state = {
      zoom: 1,
    };
  }

  render() {
    return this.templates('horizontal');
  }

  private setZoom(element: HTMLDivElement) {
    const maxWidthPanel = 600,
      minZoom = 0.5;

    if (element) {
      const { clientWidth } = element;
      if (clientWidth < maxWidthPanel) {
        let zoom = clientWidth / maxWidthPanel;
        zoom = zoom < minZoom ? minZoom : zoom;
        this.setState({ zoom });
      } else {
        this.setState({ zoom: 1 });
      }
    }
  }

  private templates(mode: 'horizontal' | 'vertical'): JSX.Element {
    const { zoom } = this.state;

    switch (mode) {
      case 'horizontal':
        // reference: https://benohead.com/blog/2014/10/04/html5-displaying-battery-level/
        const color = 'gray',
          battery = css`
            border: 2px solid ${color};
            border-radius: 5px;
            display: inline-block;
            height: 32px;
            margin-right: 10px;
            position: relative;
            padding: 2px;
            width: 70px;
            zoom: 2;

            &:after {
              background-color: ${color};
              border: 2px solid ${color};
              border-radius: 0 4px 4px 0;
              content: '';
              display: block;
              height: 14px;
              position: absolute;
              right: -7px;
              top: 7px;
              width: 7px;
            }
          `,
          level = css`
            background-color: ${color};
            border-radius: 2.5px;
            height: 100%;
          `,
          container = css`
            display: flex;
            justify-content: center;
            align-items: center;
          `,
          smallValue = css`
            margin: 0 16px !important;
          `;

        return (
          <div className="w3-display-container tr-full" ref={this.setZoom.bind(this)}>
            <div className="w3-display-middle tr-wd-100" style={{ zoom }}>
              <div className={`w3-section ${container}`}>
                <div className={battery}>
                  <div className={level} style={{ width: '80%' }}></div>
                </div>
                <span className="w3-xxlarge">20%</span>
              </div>
              <div className={`w3-section ${container} tr-middle-value`}>
                <h3 className={smallValue}>
                  12<span> V</span>
                </h3>
                <h3 className={smallValue}>
                  12<span> V</span>
                </h3>
                <h3 className={smallValue}>
                  12<span> V</span>
                </h3>
              </div>
            </div>
          </div>
        );
        break;

      default:
        return <h1>No Data</h1>;
    }
  }
}
