import '../styles/w3.css';
import '../styles/style.scss';

import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import { css } from 'emotion';

import { ThreePhaseOptions, DataStyle } from 'types';
import { Data, getColor, lastValueToData } from 'helper';

interface Props extends PanelProps<ThreePhaseOptions> {}

export class ThreePhaseMonitor extends PureComponent<Props> {
  readonly state: { zoom: number };
  currentR: Data;
  voltageR: Data;
  currentS: Data;
  voltageS: Data;
  currentT: Data;
  voltageT: Data;
  frequency: Data;
  totalActiveEnergy: Data;

  constructor(props: Props) {
    super(props);

    this.state = {
      zoom: 1,
    };

    this.currentR = this.voltageR = this.currentS = this.voltageS = this.currentT = this.voltageT = this.frequency = this.totalActiveEnergy = {
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
          dummyCurrentR,
          dummyCurrentS,
          dummyCurrentT,
          dummyFrequency,
          dummyTotalActiveEnergy,
          dummyVoltageR,
          dummyVoltageS,
          dummyVoltageT,
        } = this.props.options;
        const setValue = (number: number, unit: string): Data => ({
          number,
          unit,
          color: getColor(number, this.props.fieldConfig.defaults.thresholds?.steps),
        });
        this.currentR = setValue(dummyCurrentR, ' A');
        this.currentS = setValue(dummyCurrentS, ' A');
        this.currentT = setValue(dummyCurrentT, ' A');
        this.frequency = setValue(dummyFrequency, ' Hz');
        this.totalActiveEnergy = setValue(dummyTotalActiveEnergy, ' kWh');
        this.voltageR = setValue(dummyVoltageR, ' V');
        this.voltageS = setValue(dummyVoltageS, ' V');
        this.voltageT = setValue(dummyVoltageT, ' V');
        break;

      case 'real':
        const data = this.props.data,
          currR = data.series.find(_ => _.name === 'currR'),
          currS = data.series.find(_ => _.name === 'currS'),
          currT = data.series.find(_ => _.name === 'currT'),
          voltR = data.series.find(_ => _.name === 'voltR'),
          voltS = data.series.find(_ => _.name === 'voltS'),
          voltT = data.series.find(_ => _.name === 'voltT'),
          frequency = data.series.find(_ => _.name === 'frequency'),
          totActEnergy = data.series.find(_ => _.name === 'totActEnergy');

        this.currentR = lastValueToData(currR);
        this.currentS = lastValueToData(currS);
        this.currentT = lastValueToData(currT);
        this.voltageR = lastValueToData(voltR);
        this.voltageS = lastValueToData(voltS);
        this.voltageT = lastValueToData(voltT);
        this.frequency = lastValueToData(frequency);
        this.totalActiveEnergy = lastValueToData(totActEnergy);
        break;
    }

    return this.layoutSelector(style);
  }

  private layoutSelector(style: DataStyle): JSX.Element {
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
      `,
      hrElement = (
        <hr
          className={css`
            width: 550px;
            background-color: rgb(204, 204, 204);
            margin: 0 auto;
          `}
        />
      );

    let element: JSX.Element = <h1 className="w3-center w3-text-blue-gray">No Data</h1>;
    switch (style) {
      case 'layout1':
        element = (
          <>
            <div className={`${container} tr-big-value`}>
              <h1 style={{ color: this.totalActiveEnergy.color }}>
                {this.totalActiveEnergy.number}
                <span>{this.totalActiveEnergy.unit}</span>
              </h1>
            </div>
            {hrElement}
            <div className={`${container} tr-big-value tr-middle-value`}>
              <div className={`${setSpacingHorizontal} w3-center`}>
                <h5>R</h5>
                <h1 style={{ color: this.currentR.color }}>
                  {this.currentR.number}
                  <span>{this.currentR.unit}</span>
                </h1>
                <h3 style={{ color: this.voltageR.color }}>
                  {this.voltageR.number}
                  <span>{this.voltageR.unit}</span>
                </h3>
              </div>
              <div className={`${setSpacingHorizontal} w3-center w3-border-right w3-border-left`}>
                <h5>S</h5>
                <h1 style={{ color: this.currentS.color }}>
                  {this.currentS.number}
                  <span>{this.currentS.unit}</span>
                </h1>
                <h3 style={{ color: this.voltageS.color }}>
                  {this.voltageS.number}
                  <span>{this.voltageS.unit}</span>
                </h3>
              </div>
              <div className={`${setSpacingHorizontal} w3-center`}>
                <h5>T</h5>
                <h1 style={{ color: this.currentT.color }}>
                  {this.currentT.number}
                  <span>{this.currentT.unit}</span>
                </h1>
                <h3 style={{ color: this.voltageT.color }}>
                  {this.voltageT.number}
                  <span>{this.voltageT.unit}</span>
                </h3>
              </div>
            </div>
            {hrElement}
            <div className={`${container} tr-middle-value`}>
              <h3 style={{ color: this.frequency.color }}>
                {this.frequency.number}
                <span>{this.frequency.unit}</span>
              </h3>
            </div>
          </>
        );
        break;

      case 'layout2':
        element = (
          <>
            <div className={`${container} tr-big-value tr-middle-value`}>
              <h1 className={setSpacingHorizontal} style={{ color: this.totalActiveEnergy.color }}>
                {this.totalActiveEnergy.number}
                <span>{this.totalActiveEnergy.unit}</span>
              </h1>
              <h3 className={setSpacingHorizontal} style={{ color: this.frequency.color }}>
                {this.frequency.number}
                <span>{this.frequency.unit}</span>
              </h3>
            </div>
            {hrElement}
            <div className={`${container} tr-big-value tr-middle-value`}>
              <div className={`${setSpacingHorizontal} w3-center`}>
                <h5>R</h5>
                <h1 style={{ color: this.currentR.color }}>
                  {this.currentR.number}
                  <span>{this.currentR.unit}</span>
                </h1>
                <h3 style={{ color: this.voltageR.color }}>
                  {this.voltageR.number}
                  <span>{this.voltageR.unit}</span>
                </h3>
              </div>
              <div className={`${setSpacingHorizontal} w3-center w3-border-right w3-border-left`}>
                <h5>S</h5>
                <h1 style={{ color: this.currentS.color }}>
                  {this.currentS.number}
                  <span>{this.currentS.unit}</span>
                </h1>
                <h3 style={{ color: this.voltageS.color }}>
                  {this.voltageS.number}
                  <span>{this.voltageS.unit}</span>
                </h3>
              </div>
              <div className={`${setSpacingHorizontal} w3-center`}>
                <h5>T</h5>
                <h1 style={{ color: this.currentT.color }}>
                  {this.currentT.number}
                  <span>{this.currentT.unit}</span>
                </h1>
                <h3 style={{ color: this.voltageT.color }}>
                  {this.voltageT.number}
                  <span>{this.voltageT.unit}</span>
                </h3>
              </div>
            </div>
          </>
        );
        break;

      case 'layout3':
        element = (
          <>
            <div className={`${container} tr-big-value tr-middle-value`}>
              <div className={`${setSpacingHorizontal} w3-center`}>
                <h5>R</h5>
                <h1 style={{ color: this.currentR.color }}>
                  {this.currentR.number}
                  <span>{this.currentR.unit}</span>
                </h1>
                <h3 style={{ color: this.voltageR.color }}>
                  {this.voltageR.number}
                  <span>{this.voltageR.unit}</span>
                </h3>
              </div>
              <div className={`${setSpacingHorizontal} w3-center w3-border-right w3-border-left`}>
                <h5>S</h5>
                <h1 style={{ color: this.currentS.color }}>
                  {this.currentS.number}
                  <span>{this.currentS.unit}</span>
                </h1>
                <h3 style={{ color: this.voltageS.color }}>
                  {this.voltageS.number}
                  <span>{this.voltageS.unit}</span>
                </h3>
              </div>
              <div className={`${setSpacingHorizontal} w3-center`}>
                <h5>T</h5>
                <h1 style={{ color: this.currentT.color }}>
                  {this.currentT.number}
                  <span>{this.currentT.unit}</span>
                </h1>
                <h3 style={{ color: this.voltageT.color }}>
                  {this.voltageT.number}
                  <span>{this.voltageT.unit}</span>
                </h3>
              </div>
            </div>
            {hrElement}
            <div className={`${container} tr-big-value tr-middle-value`}>
              <h1 className={setSpacingHorizontal} style={{ color: this.totalActiveEnergy.color }}>
                {this.totalActiveEnergy.number}
                <span>{this.totalActiveEnergy.unit}</span>
              </h1>
              <h3 className={setSpacingHorizontal} style={{ color: this.frequency.color }}>
                {this.frequency.number}
                <span>{this.frequency.unit}</span>
              </h3>
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
