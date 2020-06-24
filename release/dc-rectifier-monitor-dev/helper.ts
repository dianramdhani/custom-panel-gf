import { DataFrame, getValueFormat, Threshold } from '@grafana/data';

export interface Data {
  number: number | null;
  unit: string;
  color: string;
}

export function lastValueToData(data: DataFrame | undefined): Data {
  if (data) {
    const unit = data.fields[1].config.unit,
      number = data.fields[1].values.get(0),
      valueFormat = getValueFormat(unit)(number);
    return {
      number: Number(valueFormat.text),
      unit: valueFormat.suffix || '',
      color: getColor(number, data.fields[1].config.thresholds?.steps),
    };
  } else {
    return { number: null, unit: 'No Data', color: 'gray' };
  }
}

export function getColor(number: number, steps: Threshold[] | undefined): string {
  let color = 'gray';
  if (steps) {
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

    let indexStep = steps.findIndex(step => step.value > number) - 1;
    indexStep = indexStep === -2 ? steps.length - 1 : indexStep;

    color = colorPalette[steps[indexStep].color] || steps[indexStep].color;
  }
  return color;
}
