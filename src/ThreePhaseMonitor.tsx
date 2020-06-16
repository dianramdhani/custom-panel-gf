import '../styles/w3.css';
import '../styles/style.scss';

import React, { PureComponent } from 'react';
import { PanelProps, DataFrame, getValueFormat } from '@grafana/data';

export class ThreePhaseMonitor extends PureComponent<PanelProps> {
  panelWidth: number | undefined;
  scaleFont = 1;

  data = this.props.data;
  currR = this.data.series.find(_ => _.name === 'currR');
  currS = this.data.series.find(_ => _.name === 'currS');
  currT = this.data.series.find(_ => _.name === 'currT');
  voltR = this.data.series.find(_ => _.name === 'voltR');
  voltS = this.data.series.find(_ => _.name === 'voltS');
  voltT = this.data.series.find(_ => _.name === 'voltT');

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
    return (
      <div className="w3-display-container tr-full" ref={el => (this.panelWidth = el?.clientWidth)}>
        <div className="w3-display-middle tr-wd-100" style={{ zoom: this.scaleFont }}>
          <div className="w3-center tr-big-value">
            <h1>
              25.421 <span> kWh</span>
            </h1>
          </div>
          <div className="w3-row tr-big-value tr-middle-value">
            <div className="w3-col w3-center" style={{ width: '33.3%' }}>
              <h5>R</h5>
              <h1 style={{ color: this.getColor(this.currR) }}>
                {this.getLastValue(this.currR)?.text}
                <span>{this.getLastValue(this.currR)?.suffix}</span>
              </h1>
              <h3 style={{ color: this.getColor(this.voltR) }}>
                {this.getLastValue(this.voltR)?.text}
                <span>{this.getLastValue(this.voltR)?.suffix}</span>
              </h3>
            </div>
            <div className="w3-col w3-center" style={{ width: '33.3%' }}>
              <h5>S</h5>
              <h1 style={{ color: this.getColor(this.currS) }}>
                {this.getLastValue(this.currS)?.text}
                <span>{this.getLastValue(this.currS)?.suffix}</span>
              </h1>
              <h3 style={{ color: this.getColor(this.voltS) }}>
                {this.getLastValue(this.voltS)?.text}
                <span>{this.getLastValue(this.voltS)?.suffix}</span>
              </h3>
            </div>
            <div className="w3-col w3-center" style={{ width: '33.3%' }}>
              <h5>T</h5>
              <h1 style={{ color: this.getColor(this.currT) }}>
                {this.getLastValue(this.currT)?.text}
                <span>{this.getLastValue(this.currT)?.suffix}</span>
              </h1>
              <h3 style={{ color: this.getColor(this.voltT) }}>
                {this.getLastValue(this.voltT)?.text}
                <span>{this.getLastValue(this.voltT)?.suffix}</span>
              </h3>
            </div>
          </div>
          <div className="w3-center tr-middle-value">
            <h3>
              60 <span> Hz</span>
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
