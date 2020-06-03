import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { FuelMonitor } from './FuelMonitor';

export const plugin = new PanelPlugin<SimpleOptions>(FuelMonitor)
  .useFieldConfig();