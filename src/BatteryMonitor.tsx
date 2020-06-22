import '../styles/w3.css';
import '../styles/style.scss';

import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import { BatteryOptions } from './types';
import { css } from 'emotion';
import { Data, lastValueToData, getColor } from './helper';

interface Props extends PanelProps<BatteryOptions> {}

export class BatteryMonitor extends PureComponent<Props> {
  readonly state: { zoom: number };
  capacity: Data;
  voltage: Data;
  resistance: Data;
  temperature: Data;

  constructor(props: Props) {
    super(props);

    this.state = {
      zoom: 1,
    };

    this.capacity = this.voltage = this.resistance = this.temperature = { number: 0, unit: '', color: 'green' };
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
    const { dataMode, spacing } = this.props.options;

    switch (dataMode) {
      case 'dummy':
        const { dummyCapacity, dummyTemperature, dummyResistance, dummyVoltage } = this.props.options;
        const setValue = (number: number, unit: string): Data => ({
          number,
          unit,
          color: getColor(number, this.props.fieldConfig.defaults.thresholds?.steps),
        });
        this.capacity = setValue(dummyCapacity, ' %');
        this.resistance = setValue(dummyResistance, ' Ω');
        this.voltage = setValue(dummyVoltage, ' V');
        this.temperature = setValue(dummyTemperature, ' °C');
        break;
      case 'real':
        const data = this.props.data,
          cell1 = data.series.find(_ => _.name === 'cell1'),
          temp1 = data.series.find(_ => _.name === 'temp1'),
          rest1 = data.series.find(_ => _.name === 'rest1'),
          soc1 = data.series.find(_ => _.name === 'soc1');

        this.voltage = cell1 ? lastValueToData(cell1) : { number: null, unit: 'No Data', color: 'gray' };
        this.temperature = temp1 ? lastValueToData(temp1) : { number: null, unit: 'No Data', color: 'gray' };
        this.resistance = rest1 ? lastValueToData(rest1) : { number: null, unit: 'No Data', color: 'gray' };
        this.capacity = soc1 ? lastValueToData(soc1) : { number: null, unit: 'No Data', color: 'gray' };
        break;
    }

    switch (mode) {
      case 'horizontal':
        // reference: https://benohead.com/blog/2014/10/04/html5-displaying-battery-level/
        const color = this.capacity.color,
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
            margin: 0 ${spacing}px !important;
          `;

        return (
          <div className="w3-display-container tr-full" ref={this.setZoom.bind(this)}>
            <div className="w3-display-middle tr-wd-100" style={{ zoom }}>
              <div className={`${container} tr-big-value`}>
                <div className={battery}>
                  {this.capacity.number !== null ? (
                    <div
                      className={level}
                      style={{
                        width: `${this.capacity.number > 100 ? 100 : this.capacity.number}%`,
                      }}
                    ></div>
                  ) : (
                    undefined
                  )}
                </div>
                <h1 style={{ color: this.capacity.color }}>
                  {this.capacity.number}
                  <span>{this.capacity.unit}</span>
                </h1>
              </div>
              <div className={`${container} tr-middle-value`} style={{ paddingTop: spacing }}>
                <h3 className={smallValue} style={{ color: this.voltage.color }}>
                  {this.voltage.number}
                  <span>{this.voltage.unit}</span>
                </h3>
                <h3 className={smallValue} style={{ color: this.resistance.color }}>
                  {this.resistance.number}
                  <span>{this.resistance.unit}</span>
                </h3>
                <h3 className={smallValue} style={{ color: this.temperature.color }}>
                  {this.temperature.number}
                  <span>{this.temperature.unit}</span>
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
