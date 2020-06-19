import { PanelPlugin } from '@grafana/data';
import { BatteryOptions } from './types';
import { BatteryMonitor } from './BatteryMonitor';

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
        path: 'dummyCapacity',
        defaultValue: 50,
        name: 'Dummy Battery Capacity',
      })
  )
  .useFieldConfig();
