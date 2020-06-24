import { PanelPlugin } from '@grafana/data';
import { SitesMapOptions } from './types';
import { SitesMap } from './SitesMap';

// const isDummy = (currentConfig: SitesMapOptions) => currentConfig.dataMode === 'dummy';

export const plugin = new PanelPlugin<SitesMapOptions>(SitesMap)
  .setPanelOptions(builder =>
    builder.addRadio({
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
