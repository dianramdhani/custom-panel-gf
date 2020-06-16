import '../styles/w3.css';
import '../styles/style.scss';

import React, { PureComponent } from 'react';
import { PanelProps, Field, getValueFormat, DataFrame } from '@grafana/data';
import { Gauge } from '@grafana/ui';
import { config } from '@grafana/runtime';

export class GensetMonitor extends PureComponent<PanelProps> {
  panelWidth: number | undefined;
  scaleFont = 1;

  data = this.props.data;
  litre = this.data.series.find(_ => _.name === 'litre');
  second = this.data.series.find(_ => _.name === 'second');
  voltage = this.data.series.find(_ => _.name === 'voltage');
  frequency = this.data.series.find(_ => _.name === 'frequency');
  current = this.data.series.find(_ => _.name === 'current');

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
    const numeric = this.litre?.fields[1].values.get(0),
      text = `${this.getLastValue(this.litre)?.text}${this.getLastValue(this.litre)?.suffix}`,
      title = '';

    const field: Partial<Field> = {
      config: {
        min: this.litre?.fields[1].config.min || 0,
        max: this.litre?.fields[1].config.max || 100,
        thresholds: this.litre?.fields[1].config.thresholds,
      },
    };

    return (
      <div className="w3-display-container tr-full" ref={el => (this.panelWidth = el?.clientWidth)}>
        <div className="w3-display-middle tr-wd-100" style={{ zoom: this.scaleFont }}>
          <div className="w3-row">
            <div className="w3-col" style={{ width: '50%' }}>
              <Gauge
                value={{ numeric, text, title }}
                width={150}
                height={150}
                field={field.config}
                theme={config.theme}
              />
            </div>
            <div className="w3-col w3-container tr-genset-time" style={{ width: '50%' }}>
              <h5>Running Time</h5>
              <div className="tr-big-value">
                <h1 style={{ color: this.getColor(this.second) }}>
                  {this.getLastValue(this.second)?.text}
                  <span className="w3-xxlarge">{this.getLastValue(this.second)?.suffix}</span>
                </h1>
              </div>
            </div>
          </div>
          <div className="w3-row tr-middle-value">
            <div className="w3-col w3-center" style={{ width: '33.3%' }}>
              <h3 style={{ color: this.getColor(this.voltage) }}>
                {this.getLastValue(this.voltage)?.text}
                <span>{this.getLastValue(this.voltage)?.suffix}</span>
              </h3>
            </div>
            <div className="w3-col w3-center" style={{ width: '33.3%' }}>
              <h3 style={{ color: this.getColor(this.current) }}>
                {this.getLastValue(this.current)?.text}
                <span>{this.getLastValue(this.current)?.suffix}</span>
              </h3>
            </div>
            <div className="w3-col w3-center" style={{ width: '33.3%' }}>
              <h3 style={{ color: this.getColor(this.frequency) }}>
                {this.getLastValue(this.frequency)?.text}
                <span>{this.getLastValue(this.frequency)?.suffix}</span>
              </h3>
            </div>
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
