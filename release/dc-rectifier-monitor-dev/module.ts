import { PanelPlugin } from '@grafana/data';
import { DCRectifierOptions } from './types';
import { DCRectifierMonitor } from './DCRectifierMonitor';

const isDummy = (currentConfig: DCRectifierOptions) => currentConfig.dataMode === 'dummy';

export const plugin = new PanelPlugin<DCRectifierOptions>(DCRectifierMonitor)
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
      .addNumberInput({
        path: 'bigValuePercentage',
        defaultValue: 100,
        name: 'Big Value Percentage',
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
        path: 'dummyCurrent',
        defaultValue: 3.2,
        name: 'Current',
        showIf: isDummy,
      })
      .addNumberInput({
        path: 'dummyVoltageAC',
        defaultValue: 218,
        name: 'Voltage AC',
        showIf: isDummy,
      })
      .addNumberInput({
        path: 'dummyVoltageDC',
        defaultValue: 61.2,
        name: 'Voltage DC',
        showIf: isDummy,
      })
      .addTextInput({
        path: 'smallValueColor',
        defaultValue: 'gray',
        name: 'Small Value Color',
        showIf: isDummy,
      })
  )
  .useFieldConfig();
