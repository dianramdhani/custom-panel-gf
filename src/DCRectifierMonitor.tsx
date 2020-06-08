import '../styles/w3.css';
import '../styles/style.scss';

import React from 'react';
import { PanelProps, DataFrame, getValueFormat } from '@grafana/data';
import { ansicolor, colors, getTagColorsFromName, getTheme } from '@grafana/ui';

export const DCRectifierMonitor: React.FC<PanelProps> = props => {
  const data = props.data,
    current = data.series.find(_ => _.name === 'current');

  const getLastValue = (data: DataFrame | undefined) => {
      if (data) {
        const unit = data.fields[1].config.unit,
          value = data.fields[1].values.get(0);
        return getValueFormat(unit)(value);
      } else {
        return;
      }
    },
    getColor = (data: DataFrame | undefined) => {
      if (data) {
        const value = data.fields[1].values.get(0),
          steps = data.fields[1].config.thresholds?.steps || [];

        if (steps.length) {
          const colorPalette = {
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

          const color = steps[indexStep].color;
          console.log(
            'testing',
            color,
            new ansicolor(color),
            colors,
            color,
            getTagColorsFromName(color),
            getTheme(color)
          );
          return color;
        } else {
          return;
        }
      } else {
        return;
      }
    };

  return (
    <div className="w3-display-container tr-full">
      <div className="w3-display-middle tr-wd-100">
        <div className="w3-center tr-big-value">
          <h1 style={{ color: getColor(current) }}>
            {getLastValue(current)?.text}
            <span>{getLastValue(current)?.suffix}</span>
          </h1>
        </div>
        <div className="w3-row tr-middle-value">
          <div className="w3-third w3-center">
            <h3>
              220<span> VAC</span>
            </h3>
          </div>
          <div className="w3-third w3-center">
            <h3>
              52<span> VDC</span>
            </h3>
          </div>
          <div className="w3-third w3-center">
            <h3>
              30<span> °C</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
