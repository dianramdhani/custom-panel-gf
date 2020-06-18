import { PanelPlugin } from '@grafana/data';
import { AlertOptions } from './types';
import { ListAlarm } from './ListAlarm';

export const plugin = new PanelPlugin<AlertOptions>(ListAlarm)
  .setPanelOptions(builder =>
    builder
      .addRadio({
        path: 'alertType',
        defaultValue: 'critical',
        name: 'Alert',
        settings: {
          options: [
            {
              value: 'critical',
              label: 'Critical',
            },
            {
              value: 'major',
              label: 'Major',
            },
            {
              value: 'minor',
              label: 'Minor',
            },
          ],
        },
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
  )
  .useFieldConfig();
