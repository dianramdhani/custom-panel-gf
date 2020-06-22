import { PanelPlugin } from '@grafana/data';
import { GensetOptions } from './types';
import { GensetMonitor } from './GensetMonitor';

const isDummy = (currentConfig: GensetOptions) => currentConfig.dataMode === 'dummy';

export const plugin = new PanelPlugin<GensetOptions>(GensetMonitor)
  .setPanelOptions(builder =>
    builder
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
        path: 'dummyFuelCapacity',
        defaultValue: 10,
        name: 'Fuel Capacity',
        showIf: isDummy,
      })
      .addNumberInput({
        path: 'dummyRunningTime',
        defaultValue: 2,
        name: 'Running Time',
        showIf: isDummy,
      })
      .addNumberInput({
        path: 'dummyVoltage',
        defaultValue: 12,
        name: 'Voltage',
        showIf: isDummy,
      })
      .addNumberInput({
        path: 'dummyCurrent',
        defaultValue: 1.2,
        name: 'Current',
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
