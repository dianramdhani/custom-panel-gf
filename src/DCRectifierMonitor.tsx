import '../styles/w3.css';
import '../styles/style.scss';

import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';

import { DCRectifierOptions } from 'types';
import { Data, getColor, lastValueToData } from 'helper';
import { css } from 'emotion';

interface Props extends PanelProps<DCRectifierOptions> {}

export class DCRectifierMonitor extends PureComponent<Props> {
  readonly state: { zoom: number };
  current: Data;
  voltageAC: Data;
  voltageDC: Data;

  constructor(props: Props) {
    super(props);

    this.state = {
      zoom: 1,
    };

    this.current = this.voltageAC = this.voltageDC = {
      number: 0,
      unit: '',
      color: 'green',
    };
  }

  render() {
    const { dataMode } = this.props.options;
    switch (dataMode) {
      case 'dummy':
        const { dummyCurrent, dummyVoltageAC, dummyVoltageDC, smallValueColor } = this.props.options,
          setValue = (number: number, unit: string): Data => ({
            number,
            unit,
            color: smallValueColor,
          });
        this.current = {
          number: dummyCurrent,
          unit: ' A',
          color: getColor(dummyCurrent, this.props.fieldConfig.defaults.thresholds?.steps),
        };
        this.voltageAC = setValue(dummyVoltageAC, ' VAC');
        this.voltageDC = setValue(dummyVoltageDC, ' VDC');
        break;

      case 'real':
        const data = this.props.data,
          current = data.series.find(_ => _.name === 'current'),
          volt = data.series.find(_ => _.name === 'volt');
        this.current = lastValueToData(current);
        this.voltageDC = lastValueToData(volt);
        break;
    }

    const { zoom } = this.state,
      spacingVertical = this.props.options.spacingVertical || 0,
      spacingHorizontal = this.props.options.spacingHorizontal || 0,
      container = css`
        display: flex;
        justify-content: center;
        align-items: center;
        padding: ${spacingVertical}px 0 !important;
      `,
      setSpacingHorizontal = css`
        display: block-inline;
        padding: 0 ${spacingHorizontal}px !important;
      `;
    return (
      <div className="w3-display-container tr-full" ref={this.setZoom.bind(this)}>
        <div className="w3-display-middle tr-wd-100" style={{ zoom }}>
          <div className={`${container} tr-big-value`}>
            <h1 style={{ color: this.current.color }}>
              {this.current.number}
              <span>{this.current.unit}</span>
            </h1>
          </div>
          <div className={`${container} tr-middle-value`}>
            <h3 className={setSpacingHorizontal} style={{ color: this.voltageAC.color }}>
              {this.voltageAC.number}
              <span>{this.voltageAC.unit}</span>
            </h3>
            <h3 className={setSpacingHorizontal} style={{ color: this.voltageDC.color }}>
              {this.voltageDC.number}
              <span>{this.voltageDC.unit}</span>
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
