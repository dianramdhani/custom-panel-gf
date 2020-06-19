import { PanelPlugin } from '@grafana/data';
import { BatteryOptions } from './types';
import { BatteryMonitor } from './BatteryMonitor';

const isDummy = (currentConfig: BatteryOptions) => currentConfig.dataMode === 'dummy';

export const plugin = new PanelPlugin<BatteryOptions>(BatteryMonitor)
  .setPanelOptions(builder =>
    builder
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
        path: 'spacing',
        defaultValue: 16,
        name: 'Spacing',
      })
      .addNumberInput({
        path: 'dummyCapacity',
        defaultValue: 50,
        name: 'Capacity',
        showIf: isDummy,
      })
      .addNumberInput({
        path: 'dummyVoltage',
        defaultValue: 12,
        name: 'Voltage',
        showIf: isDummy,
      })
      .addNumberInput({
        path: 'dummyResistance',
        defaultValue: 5,
        name: 'Resistance',
        showIf: isDummy,
      })
      .addNumberInput({
        path: 'dummyTemperature',
        defaultValue: 30,
        name: 'Temperature',
        showIf: isDummy,
      })
  )
  .useFieldConfig();
