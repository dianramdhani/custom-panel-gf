import '../styles/w3.css';
import '../styles/style.scss';

import React, { PureComponent } from 'react';
import { PanelProps, Field } from '@grafana/data';
import { config } from '@grafana/runtime';
import { Gauge } from '@grafana/ui';
import { css } from 'emotion';

import { GensetOptions } from 'types';
import { Data, getColor, lastValueToData } from './helper';

interface Props extends PanelProps<GensetOptions> {}

export class GensetMonitor extends PureComponent<Props> {
  readonly state: { zoom: number };
  fuelCapacity: Data;
  runningTime: Data;
  voltage: Data;
  current: Data;
  frequency: Data;

  constructor(props: Props) {
    super(props);

    this.state = {
      zoom: 1,
    };

    this.fuelCapacity = this.runningTime = this.voltage = this.current = this.frequency = {
      number: 0,
      unit: '',
      color: 'green',
    };
  }

  render() {
    const { zoom } = this.state,
      { dataMode } = this.props.options,
      spacingVertical = this.props.options.spacingVertical || 0,
      spacingHorizontal = this.props.options.spacingHorizontal || 0,
      container = css`
        display: flex;
        justify-content: center;
        align-items: center;
      `,
      setSpacingHorizontal = css`
        margin: 0 ${spacingHorizontal}px !important;
      `;

    let field: Partial<Field> = {
      config: {
        min: this.props.fieldConfig.defaults.min || 0,
        max: this.props.fieldConfig.defaults.max || 100,
        thresholds: this.props.fieldConfig.defaults.thresholds,
      },
    };

    switch (dataMode) {
      case 'dummy':
        const { dummyCurrent, dummyFrequency, dummyFuelCapacity, dummyRunningTime, dummyVoltage } = this.props.options;
        const setValue = (number: number, unit: string): Data => ({
          number,
          unit,
          color: getColor(number, this.props.fieldConfig.defaults.thresholds?.steps),
        });
        this.current = setValue(dummyCurrent, ' A');
        this.frequency = setValue(dummyFrequency, ' Hz');
        this.fuelCapacity = setValue(dummyFuelCapacity, ' L');
        this.runningTime = setValue(dummyRunningTime, ' hour');
        this.voltage = setValue(dummyVoltage, ' V');
        break;
      case 'real':
        const data = this.props.data,
          litre = data.series.find(_ => _.name === 'litre'),
          second = data.series.find(_ => _.name === 'second'),
          voltage = data.series.find(_ => _.name === 'voltage'),
          frequency = data.series.find(_ => _.name === 'frequency'),
          current = data.series.find(_ => _.name === 'current');

        this.fuelCapacity = lastValueToData(litre);
        this.runningTime = lastValueToData(second);
        this.voltage = lastValueToData(voltage);
        this.frequency = lastValueToData(frequency);
        this.current = lastValueToData(current);
        break;
    }

    const gauge = this.fuelCapacity.number ? (
      <div className={setSpacingHorizontal} style={{ display: 'inline', width: 150, height: 150 }}>
        <Gauge
          value={{
            numeric: this.fuelCapacity.number,
            text: `${this.fuelCapacity.number}${this.fuelCapacity.unit}`,
            title: '',
          }}
          width={150}
          height={150}
          field={field.config}
          theme={config.theme}
        />
      </div>
    ) : (
      <div className={`${setSpacingHorizontal}`}>
        <h1 style={{ color: this.fuelCapacity.color }}>No Data</h1>
      </div>
    );

    return (
      <div className="w3-display-container tr-full" ref={this.setZoom.bind(this)}>
        <div className="w3-display-middle tr-wd-100" style={{ zoom }}>
          <div className={container}>
            {gauge}
            <div
              className={`${css`
                text-align: right !important;
                @media (min-width: 480px) {
                  text-align: center !important;
                }
              `} ${setSpacingHorizontal}`}
            >
              <h5>Running Time</h5>
              <div className="tr-big-value">
                <h1 style={{ color: this.runningTime.color }}>
                  {this.runningTime.number}
                  <span>{this.runningTime.unit}</span>
                </h1>
              </div>
            </div>
          </div>

          <div className={`${container} tr-middle-value`} style={{ paddingTop: spacingVertical }}>
            <h3 className={setSpacingHorizontal} style={{ color: this.voltage.color }}>
              {this.voltage.number}
              <span>{this.voltage.unit}</span>
            </h3>
            <h3 className={setSpacingHorizontal} style={{ color: this.current.color }}>
              {this.current.number}
              <span>{this.current.unit}</span>
            </h3>
            <h3 className={setSpacingHorizontal} style={{ color: this.frequency.color }}>
              {this.frequency.number}
              <span>{this.frequency.unit}</span>
            </h3>
          </div>
        </div>
      </div>
    );
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
}
