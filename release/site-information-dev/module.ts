import { PanelPlugin } from '@grafana/data';
import { SiteInformationOptions } from './types';
import { SiteInformation } from './SiteInformation';

const isDummy = (currentConfig: SiteInformationOptions) => currentConfig.dataMode === 'dummy';

export const plugin = new PanelPlugin<SiteInformationOptions>(SiteInformation)
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
      .addTextInput({
        path: 'dummySite',
        defaultValue: 'Sukabumi',
        name: 'Site',
        showIf: isDummy,
      })
      .addTextInput({
        path: 'dummyRegion',
        defaultValue: 'JABAR',
        name: 'Region',
        showIf: isDummy,
      })
      .addSelect({
        path: 'dummyStatus',
        defaultValue: 'NORMAL',
        name: 'Status',
        showIf: isDummy,
        settings: {
          options: [
            {
              value: 'NORMAL',
              label: 'NORMAL',
            },
            {
              value: 'CRITICAL',
              label: 'CRITICAL',
            },
            {
              value: 'MAJOR',
              label: 'MAJOR',
            },
            {
              value: 'MINOR',
              label: 'MINOR',
            },
          ],
        },
      })
      .addTextInput({
        path: 'dummyLastConnected',
        defaultValue: '2020-06-22T02:57:14Z',
        name: 'Last Connected',
        showIf: isDummy,
      })
      .addNumberInput({
        path: 'dummyLatitude',
        defaultValue: -7,
        name: 'Latitude',
        showIf: isDummy,
      })
      .addNumberInput({
        path: 'dummyLongitude',
        defaultValue: 107,
        name: 'Longitude',
        showIf: isDummy,
      })
  )
  .useFieldConfig();
