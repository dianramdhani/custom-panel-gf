import { PanelPlugin } from '@grafana/data';
import { ThreePhaseOptions } from './types';
import { ThreePhaseMonitor } from './ThreePhaseMonitor';

const isDummy = (currentConfig: ThreePhaseOptions) => currentConfig.dataMode === 'dummy';

export const plugin = new PanelPlugin<ThreePhaseOptions>(ThreePhaseMonitor)
  .setPanelOptions(builder =>
    builder
      .addSelect({
        path: 'style',
        defaultValue: 'layout1',
        name: 'Style',
        settings: {
          options: [
            {
              label: 'Layout 1',
              value: 'layout1',
            },
            {
              label: 'Layout 2',
              value: 'layout2',
            },
            {
              label: 'Layout 3',
              value: 'layout3',
            },
          ],
        },
      })
      .addNumberInput({
        path: 'spacingVertical',
        defaultValue: 16,
        name: 'Spacing Vertical',
      })
      .addNumberInput({
        path: 'spacingHorizontal',
        defaultValue: 16,
        name: 'Spacing Horizontal',
      })
      .addRadio({
        path: 'dataMode',
        defaultValue: 'dummy',
        name: 'Data',
        settings: {
          options: [
            {
              value: 'dummy',
              label: 'Dummy',
            },
            {
              value: 'real',
              label: 'Real',
            },
          ],
        },
      })
      .addNumberInput({
        path: 'dummyTotalActiveEnergy',
        defaultValue: 2400,
        name: 'Total Active Energy',
        showIf: isDummy,
      })
      .addNumberInput({
        path: 'dummyCurrentR',
        defaultValue: 6.1,
        name: 'Current R',
        showIf: isDummy,
      })
      .addNumberInput({
        path: 'dummyVoltageR',
        defaultValue: 220,
        name: 'Voltage R',
        showIf: isDummy,
      })
      .addNumberInput({
        path: 'dummyCurrentS',
        defaultValue: 6.2,
        name: 'Current S',
        showIf: isDummy,
      })
      .addNumberInput({
        path: 'dummyVoltageS',
        defaultValue: 221,
        name: 'Voltage S',
        showIf: isDummy,
      })
      .addNumberInput({
        path: 'dummyCurrentT',
        defaultValue: 6.3,
        name: 'Current T',
        showIf: isDummy,
      })
      .addNumberInput({
        path: 'dummyVoltageT',
        defaultValue: 218,
        name: 'Voltage T',
        showIf: isDummy,
      })
      .addNumberInput({
        path: 'dummyFrequency',
        defaultValue: 60,
        name: 'Frequency',
        showIf: isDummy,
      })
  )
  .useFieldConfig();
