import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { GensetMonitor } from './GensetMonitor';

export const plugin = new PanelPlugin<SimpleOptions>(GensetMonitor)
  .useFieldConfig();