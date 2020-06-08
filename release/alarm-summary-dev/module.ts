import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { AlarmSummary } from './AlarmSummary';

export const plugin = new PanelPlugin<SimpleOptions>(AlarmSummary)
  .useFieldConfig();