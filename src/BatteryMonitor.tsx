import '../styles/w3.css';
import '../styles/style.scss';

import React, { PureComponent } from 'react';
import {
  PanelProps,
  // DataFrame,
  // getValueFormat,
  // Field,
  // FieldType,
  // getDisplayProcessor,
  // VizOrientation,
} from '@grafana/data';
// import { BarGauge, BarGaugeDisplayMode, HorizontalGroup } from '@grafana/ui';
// import { config } from '@grafana/runtime';
import { BatteryOptions } from './types';
import { css } from 'emotion';

export class BatteryMonitor extends PureComponent<PanelProps<BatteryOptions>> {
  render() {
    // reference: https://benohead.com/blog/2014/10/04/html5-displaying-battery-level/
    const batteryClass = css`
        background-color: #fff;
        border: 2px solid #000;
        border-radius: 5px;
        height: 32px;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        padding: 2px;
        width: 70px;

        &:after {
          background-color: #fff;
          border: 2px solid #000;
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
      levelClass = css`
        background-color: #666;
        border-radius: 2.5px;
        height: 100%;
      `;

    return (
      <div>
        <div className={batteryClass} style={{ zoom: 3 }}>
          <div className={levelClass} style={{ width: '80%' }}></div>
        </div>
      </div>
    );
  }

  // panelWidth: number | undefined;
  // scaleFont = 1;

  // componentDidUpdate() {
  //   if (this.panelWidth) {
  //     const maxWidth = 600;
  //     if (this.panelWidth < maxWidth) {
  //       this.scaleFont = this.panelWidth / maxWidth;
  //       this.scaleFont = this.scaleFont < 0.7 ? 0.7 : this.scaleFont;
  //     } else {
  //       this.scaleFont = 1;
  //     }
  //   }
  // }

  // render() {
  //   const data = this.props.data,
  //     cell1 = data.series.find(_ => _.name === 'cell1'),
  //     temp1 = data.series.find(_ => _.name === 'temp1'),
  //     rest1 = data.series.find(_ => _.name === 'rest1'),
  //     soc1 = data.series.find(_ => _.name === 'soc1');

  //   const field: Partial<Field> = {
  //     type: FieldType.number,
  //     config: soc1?.fields[1].config,
  //   };
  //   field.display = getDisplayProcessor({ field });

  //   const { dataMode, dummyCapacity } = this.props.options;

  //   let numeric: number = 0;
  //   switch (dataMode) {
  //     case 'real':
  //       numeric = soc1?.fields[1].values.get(0);
  //       break;
  //     case 'dummy':
  //       numeric = dummyCapacity;
  //       break;
  //   }

  //   return (
  //     <div className="w3-display-container tr-full" ref={el => (this.panelWidth = el?.clientWidth)}>
  //       <div className="w3-display-middle tr-wd-100" style={{ zoom: this.scaleFont }}>
  //         <table className="w3-margin-left" style={{ width: '100%' }}>
  //           <tr>
  //             <td style={{ width: '50%' }}>
  //               <HorizontalGroup justify="center">
  //                 <BarGauge
  //                   orientation={VizOrientation.Vertical}
  //                   displayMode={BarGaugeDisplayMode.Lcd}
  //                   height={150}
  //                   width={60}
  //                   display={soc1?.fields[1].display}
  //                   theme={config.theme}
  //                   value={{
  //                     text: '',
  //                     numeric,
  //                   }}
  //                 />
  //                 <h1 style={{ color: this.getColor(soc1) }}>
  //                   {numeric}
  //                   <span className="w3-xxlarge">{this.getLastValue(soc1)?.suffix}</span>
  //                 </h1>
  //               </HorizontalGroup>
  //             </td>
  //             <td className="w3-center tr-middle-value" style={{ width: '50%' }}>
  //               <h3 className="w3-section" style={{ color: this.getColor(cell1) }}>
  //                 {this.getLastValue(cell1)?.text}
  //                 <span>{this.getLastValue(cell1)?.suffix}</span>
  //               </h3>
  //               <h3 className="w3-section" style={{ color: this.getColor(rest1) }}>
  //                 {this.getLastValue(rest1)?.text}
  //                 <span>{this.getLastValue(rest1)?.suffix}</span>
  //               </h3>
  //               <h3 className="w3-section" style={{ color: this.getColor(temp1) }}>
  //                 {this.getLastValue(temp1)?.text}
  //                 <span>{this.getLastValue(temp1)?.suffix}</span>
  //               </h3>
  //             </td>
  //           </tr>
  //         </table>
  //       </div>
  //     </div>
  //   );
  // }

  // private getLastValue(data: DataFrame | undefined) {
  //   if (data) {
  //     const unit = data.fields[1].config.unit,
  //       value = data.fields[1].values.get(0);
  //     return getValueFormat(unit)(value);
  //   } else {
  //     return;
  //   }
  // }

  // private getColor(data: DataFrame | undefined) {
  //   if (data) {
  //     const value = data.fields[1].values.get(0),
  //       steps = data.fields[1].config.thresholds?.steps || [];

  //     if (steps.length) {
  //       const colorPalette: { [index: string]: any } = {
  //         green: '#73BF69',
  //         'dark-green': '#37872D',
  //         'semi-dark-green': '#56A64B',
  //         'light-green': '#96D98D',
  //         'super-light-green': '#C8F2C2',

  //         yellow: '#FADE2A',
  //         'dark-yellow': '#E0B400',
  //         'semi-dark-yellow': '#F2CC0C',
  //         'light-yellow': '#FFEE52',
  //         'super-light-yellow': '#FFF899',

  //         red: '#F2495C',
  //         'dark-red': '#C4162A',
  //         'semi-dark-red': '#E02F44',
  //         'light-red': '#FF7383',
  //         'super-light-red': '#FFA6B0',

  //         blue: '#5794F2',
  //         'dark-blue': '#1F60C4',
  //         'semi-dark-blue': '#3274D9',
  //         'light-blue': '#8AB8FF',
  //         'super-light-blue': '#C0D8FF',

  //         orange: '#FF9830',
  //         'dark-orange': '#FA6400',
  //         'semi-dark-orange': '#FF780A',
  //         'light-orange': '#FFB357',
  //         'super-light-orange': '#FFCB7D',

  //         purple: '#B877D9',
  //         'dark-purple': '#8F3BB8',
  //         'semi-dark-purple': '#A352CC',
  //         'light-purple': '#CA95E5',
  //         'super-light-purple': '#DEB6F2',
  //       };

  //       let indexStep = steps.findIndex(step => step.value > value) - 1;
  //       indexStep = indexStep === -2 ? steps.length - 1 : indexStep;

  //       const color = colorPalette[steps[indexStep].color] || steps[indexStep].color;

  //       return color;
  //     } else {
  //       return;
  //     }
  //   } else {
  //     return;
  //   }
  // }
}
