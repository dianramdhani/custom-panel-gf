import { PanelPlugin } from '@grafana/data';
import { AlertOptions } from './types';
import { ListAlarm } from './ListAlarm';

export const plugin = new PanelPlugin<AlertOptions>(ListAlarm)
  .setPanelOptions(builder =>
    builder.addRadio({
      path: 'alertType',
      defaultValue: 'critical',
      name: 'Alert Type',
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
  )
  .useFieldConfig();
