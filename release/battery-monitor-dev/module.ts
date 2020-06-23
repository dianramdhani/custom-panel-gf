import { PanelPlugin } from '@grafana/data';
import { BatteryOptions } from './types';
import { BatteryMonitor } from './BatteryMonitor';

const isDummy = (currentConfig: BatteryOptions) => currentConfig.dataMode === 'dummy';

export const plugin = new PanelPlugin<BatteryOptions>(BatteryMonitor)
  .setPanelOptions(builder =>
    builder
      .addBooleanSwitch({
        path: 'showCurrent',
        defaultValue: false,
        name: 'Show Current',
      })
      .addSelect({
        path: 'style',
        defaultValue: 'layout1',
        name: 'Style',
        settings: {
          options: [
            { label: 'Layout 1', value: 'layout1' },
            { label: 'Layout 2', value: 'layout2' },
            { label: 'Layout 3', value: 'layout3' },
            { label: 'Layout 4', value: 'layout4' },
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
        path: 'dummyCurrent',
        defaultValue: 1.2,
        name: 'Current',
        showIf: (currentConfig: BatteryOptions) => isDummy(currentConfig) && currentConfig.showCurrent,
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
      .addTextInput({
        path: 'smallValueColor',
        defaultValue: 'gray',
        name: 'Small Value Text Color',
        showIf: isDummy,
      })
  )
  .useFieldConfig();
