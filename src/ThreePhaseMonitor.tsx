import '../styles/w3.css';
import '../styles/style.scss';

import React, { PureComponent } from 'react';
import { PanelProps, DataFrame, getValueFormat } from '@grafana/data';

export class ThreePhaseMonitor extends PureComponent<PanelProps> {
  panelWidth: number | undefined;
  scaleFont = 1;

  componentDidUpdate() {
    if (this.panelWidth) {
      const maxWidth = 600;
      if (this.panelWidth < maxWidth) {
        this.scaleFont = this.panelWidth / maxWidth;
        this.scaleFont = this.scaleFont < 0.7 ? 0.7 : this.scaleFont;
      } else {
        this.scaleFont = 1;
      }
    }
  }

  render() {
    const data = this.props.data,
      currR = data.series.find(_ => _.name === 'currR'),
      currS = data.series.find(_ => _.name === 'currS'),
      currT = data.series.find(_ => _.name === 'currT'),
      voltR = data.series.find(_ => _.name === 'voltR'),
      voltS = data.series.find(_ => _.name === 'voltS'),
      voltT = data.series.find(_ => _.name === 'voltT'),
      frequency = data.series.find(_ => _.name === 'frequency'),
      totActEnergy = data.series.find(_ => _.name === 'totActEnergy');

    return (
      <div className="w3-display-container tr-full" ref={el => (this.panelWidth = el?.clientWidth)}>
        <div className="w3-display-middle tr-wd-100" style={{ zoom: this.scaleFont }}>
          <div className="w3-center tr-big-value">
            <h1 style={{ color: this.getColor(totActEnergy) }}>
              {this.getLastValue(totActEnergy)?.text}
              <span>{this.getLastValue(totActEnergy)?.suffix}</span>
            </h1>
          </div>
          <div className="w3-row tr-big-value tr-middle-value">
            <div className="w3-col w3-center" style={{ width: '33.3%' }}>
              <h5>R</h5>
              <h1 style={{ color: this.getColor(currR) }}>
                {this.getLastValue(currR)?.text}
                <span>{this.getLastValue(currR)?.suffix}</span>
              </h1>
              <h3 style={{ color: this.getColor(voltR) }}>
                {this.getLastValue(voltR)?.text}
                <span>{this.getLastValue(voltR)?.suffix}</span>
              </h3>
            </div>
            <div className="w3-col w3-center" style={{ width: '33.3%' }}>
              <h5>S</h5>
              <h1 style={{ color: this.getColor(currS) }}>
                {this.getLastValue(currS)?.text}
                <span>{this.getLastValue(currS)?.suffix}</span>
              </h1>
              <h3 style={{ color: this.getColor(voltS) }}>
                {this.getLastValue(voltS)?.text}
                <span>{this.getLastValue(voltS)?.suffix}</span>
              </h3>
            </div>
            <div className="w3-col w3-center" style={{ width: '33.3%' }}>
              <h5>T</h5>
              <h1 style={{ color: this.getColor(currT) }}>
                {this.getLastValue(currT)?.text}
                <span>{this.getLastValue(currT)?.suffix}</span>
              </h1>
              <h3 style={{ color: this.getColor(voltT) }}>
                {this.getLastValue(voltT)?.text}
                <span>{this.getLastValue(voltT)?.suffix}</span>
              </h3>
            </div>
          </div>
          <div className="w3-center tr-middle-value">
            <h3 style={{ color: this.getColor(frequency) }}>
              {this.getLastValue(frequency)?.text}
              <span>{this.getLastValue(frequency)?.suffix}</span>
            </h3>
          </div>
        </div>
      </div>
    );
  }

  private getLastValue(data: DataFrame | undefined) {
    if (data) {
      const unit = data.fields[1].config.unit,
        value = data.fields[1].values.get(0);
      return getValueFormat(unit)(value);
    } else {
      return;
    }
  }

  private getColor(data: DataFrame | undefined) {
    if (data) {
      const value = data.fields[1].values.get(0),
        steps = data.fields[1].config.thresholds?.steps || [];

      if (steps.length) {
        const colorPalette: { [index: string]: any } = {
          green: '#73BF69',
          'dark-green': '#37872D',
          'semi-dark-green': '#56A64B',
          'light-green': '#96D98D',
          'super-light-green': '#C8F2C2',

          yellow: '#FADE2A',
          'dark-yellow': '#E0B400',
          'semi-dark-yellow': '#F2CC0C',
          'light-yellow': '#FFEE52',
          'super-light-yellow': '#FFF899',

          red: '#F2495C',
          'dark-red': '#C4162A',
          'semi-dark-red': '#E02F44',
          'light-red': '#FF7383',
          'super-light-red': '#FFA6B0',

          blue: '#5794F2',
          'dark-blue': '#1F60C4',
          'semi-dark-blue': '#3274D9',
          'light-blue': '#8AB8FF',
          'super-light-blue': '#C0D8FF',

          orange: '#FF9830',
          'dark-orange': '#FA6400',
          'semi-dark-orange': '#FF780A',
          'light-orange': '#FFB357',
          'super-light-orange': '#FFCB7D',

          purple: '#B877D9',
          'dark-purple': '#8F3BB8',
          'semi-dark-purple': '#A352CC',
          'light-purple': '#CA95E5',
          'super-light-purple': '#DEB6F2',
        };

        let indexStep = steps.findIndex(step => step.value > value) - 1;
        indexStep = indexStep === -2 ? steps.length - 1 : indexStep;

        const color = colorPalette[steps[indexStep].color] || steps[indexStep].color;

        return color;
      } else {
        return;
      }
    } else {
      return;
    }
  }
}
