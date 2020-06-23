import '../styles/w3.css';
import '../styles/style.scss';

import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import { css } from 'emotion';

import { BatteryOptions, Style } from './types';
import { Data, lastValueToData, getColor } from './helper';

interface Props extends PanelProps<BatteryOptions> {}

export class BatteryMonitor extends PureComponent<Props> {
  readonly state: { zoom: number };
  capacity: Data;
  voltage: Data;
  resistance: Data;
  temperature: Data;
  current: Data;

  constructor(props: Props) {
    super(props);

    this.state = {
      zoom: 1,
    };

    this.capacity = this.voltage = this.resistance = this.temperature = this.current = {
      number: 0,
      unit: '',
      color: 'green',
    };
  }

  render() {
    const { dataMode, style } = this.props.options;

    switch (dataMode) {
      case 'dummy':
        const {
          dummyCapacity,
          dummyTemperature,
          dummyResistance,
          dummyVoltage,
          dummyCurrent,
          smallValueColor,
        } = this.props.options;
        const setValue = (number: number, unit: string): Data => ({
          number,
          unit,
          color: smallValueColor,
        });
        this.capacity = {
          number: dummyCapacity,
          unit: ' %',
          color: getColor(dummyCapacity, this.props.fieldConfig.defaults.thresholds?.steps),
        };
        this.resistance = setValue(dummyResistance, ' Ω');
        this.voltage = setValue(dummyVoltage, ' V');
        this.temperature = setValue(dummyTemperature, ' °C');
        this.current = setValue(dummyCurrent, ' A');
        break;
      case 'real':
        const data = this.props.data,
          cell1 = data.series.find(_ => _.name === 'cell1'),
          temp1 = data.series.find(_ => _.name === 'temp1'),
          rest1 = data.series.find(_ => _.name === 'rest1'),
          soc1 = data.series.find(_ => _.name === 'soc1');

        this.voltage = lastValueToData(cell1);
        this.temperature = lastValueToData(temp1);
        this.resistance = lastValueToData(rest1);
        this.capacity = lastValueToData(soc1);
        break;
    }

    return this.layoutSelector(style);
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

  private layoutSelector(style: Style): JSX.Element {
    // reference: https://benohead.com/blog/2014/10/04/html5-displaying-battery-level/
    const { zoom } = this.state,
      spacingVertical = this.props.options.spacingVertical || 0,
      spacingHorizontal = this.props.options.spacingHorizontal || 0,
      { showCurrent, bigValuePercentage } = this.props.options,
      color = this.capacity.color,
      container = css`
        display: flex;
        justify-content: center;
        align-items: center;
      `;

    let battery: string,
      level: string,
      smallValue: string,
      getSmallValueElement: Function,
      element: JSX.Element = <h1 className="w3-center w3-text-blue-gray">No Data</h1>;

    switch (style) {
      case 'layout1':
        battery = css`
          border: 2px solid ${color};
          border-radius: 5px;
          display: inline-block;
          height: 32px;
          position: relative;
          padding: 2px;
          margin-right: 10px;
          width: 70px;
          zoom: 2;

          &::after {
            border-radius: 0 4px 4px 0;
            border: 2px solid ${color};
            background-color: ${color};
            content: '';
            display: block;
            height: 14px;
            position: absolute;
            right: -7px;
            top: 7px;
            width: 6px;
          }
        `;
        level = css`
          background-color: ${color};
          border-radius: 2.5px;
          height: 100%;
        `;
        smallValue = css`
          margin: 0 ${spacingHorizontal}px !important;
        `;
        getSmallValueElement = (data: Data) => (
          <h3 className={smallValue} style={{ color: data.color }}>
            {data.number}
            <span>{data.unit}</span>
          </h3>
        );
        element = (
          <>
            <div className={`${container} tr-big-value`} style={{ zoom: `${bigValuePercentage}%` }}>
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
            <div className={`${container} tr-middle-value`} style={{ paddingTop: spacingVertical }}>
              {getSmallValueElement(this.voltage)}
              {showCurrent ? getSmallValueElement(this.current) : undefined}
              {getSmallValueElement(this.resistance)}
              {getSmallValueElement(this.temperature)}
            </div>
          </>
        );
        break;

      case 'layout2':
        battery = css`
          border: 2px solid ${color};
          border-radius: 5px;
          display: inline-block;
          height: 60px;
          position: relative;
          padding: 2px;
          margin-right: 10px;
          transform: rotate(180deg);
          width: 32px;
          zoom: 2;

          &::after {
            border-radius: 0 0 4px 4px;
            border: 2px solid ${color};
            background-color: ${color};
            content: '';
            display: block;
            height: 6px;
            left: 7px;
            position: absolute;
            bottom: -7px;
            width: 14px;
          }
        `;
        level = css`
          background-color: ${color};
          border-radius: 2.5px;
          width: 100%;
        `;
        smallValue = css`
          margin: 0 ${spacingHorizontal}px !important;
        `;
        getSmallValueElement = (data: Data) => (
          <h3 className={smallValue} style={{ color: data.color }}>
            {data.number}
            <span>{data.unit}</span>
          </h3>
        );
        element = (
          <>
            <div className={`${container} tr-big-value`} style={{ zoom: `${bigValuePercentage}%` }}>
              <div className={battery}>
                {this.capacity.number !== null ? (
                  <div
                    className={level}
                    style={{
                      height: `${this.capacity.number > 100 ? 100 : this.capacity.number}%`,
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
            <div className={`${container} tr-middle-value`} style={{ paddingTop: spacingVertical }}>
              {getSmallValueElement(this.voltage)}
              {showCurrent ? getSmallValueElement(this.current) : undefined}
              {getSmallValueElement(this.resistance)}
              {getSmallValueElement(this.temperature)}
            </div>
          </>
        );
        break;

      case 'layout3':
        battery = css`
          border: 2px solid ${color};
          border-radius: 5px;
          display: inline-block;
          height: 60px;
          margin-bottom: 2px;
          position: relative;
          padding: 2px;
          transform: rotate(180deg);
          width: 32px;
          zoom: 2;

          &::after {
            border-radius: 0 0 4px 4px;
            border: 2px solid ${color};
            background-color: ${color};
            content: '';
            display: block;
            height: 6px;
            left: 6px;
            position: absolute;
            bottom: -7px;
            width: 15px;
          }
        `;
        level = css`
          background-color: ${color};
          border-radius: 2.5px;
          width: 100%;
        `;
        smallValue = css`
          margin: 0 ${spacingHorizontal}px !important;
        `;
        getSmallValueElement = (data: Data) => (
          <h3 className={smallValue} style={{ color: data.color }}>
            {data.number}
            <span>{data.unit}</span>
          </h3>
        );
        element = (
          <>
            <div
              className={`${container} tr-big-value`}
              style={{ flexDirection: 'column', zoom: `${bigValuePercentage}%` }}
            >
              <div className={battery}>
                {this.capacity.number !== null ? (
                  <div
                    className={level}
                    style={{
                      height: `${this.capacity.number > 100 ? 100 : this.capacity.number}%`,
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
            <div className={`${container} tr-middle-value`} style={{ paddingTop: spacingVertical }}>
              {getSmallValueElement(this.voltage)}
              {showCurrent ? getSmallValueElement(this.current) : undefined}
              {getSmallValueElement(this.resistance)}
              {getSmallValueElement(this.temperature)}
            </div>
          </>
        );
        break;

      case 'layout4':
        battery = css`
          border: 2px solid ${color};
          border-radius: 5px;
          display: inline-block;
          height: 60px;
          margin-bottom: 2px;
          margin-top: 8px;
          position: relative;
          padding: 2px;
          transform: rotate(180deg);
          width: 32px;
          zoom: 2;

          &::after {
            border-radius: 0 0 4px 4px;
            border: 2px solid ${color};
            background-color: ${color};
            content: '';
            display: block;
            height: 6px;
            left: 6px;
            position: absolute;
            bottom: -7px;
            width: 15px;
          }
        `;
        level = css`
          background-color: ${color};
          border-radius: 2.5px;
          width: 100%;
        `;
        smallValue = css`
          margin: ${spacingVertical}px 0 !important;
        `;
        getSmallValueElement = (data: Data) => (
          <h3 className={smallValue} style={{ color: data.color }}>
            {data.number}
            <span>{data.unit}</span>
          </h3>
        );
        element = (
          <>
            <div className={container}>
              <div
                className={`${container} tr-big-value`}
                style={{ flexDirection: 'column', zoom: `${bigValuePercentage}%` }}
              >
                <div className={battery}>
                  {this.capacity.number !== null ? (
                    <div
                      className={level}
                      style={{
                        height: `${this.capacity.number > 100 ? 100 : this.capacity.number}%`,
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

              <div
                className={`${container} tr-middle-value`}
                style={{ flexDirection: 'column', marginLeft: spacingHorizontal }}
              >
                {getSmallValueElement(this.voltage)}
                {showCurrent ? getSmallValueElement(this.current) : undefined}
                {getSmallValueElement(this.resistance)}
                {getSmallValueElement(this.temperature)}
              </div>
            </div>
          </>
        );
        break;
    }

    return (
      <div className="w3-display-container tr-full" ref={this.setZoom.bind(this)}>
        <div className="w3-display-middle tr-wd-100" style={{ zoom }}>
          {element}
        </div>
      </div>
    );
  }
}
