import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { BatteryMonitor } from './BatteryMonitor';

export const plugin = new PanelPlugin<SimpleOptions>(BatteryMonitor)
  .useFieldConfig();