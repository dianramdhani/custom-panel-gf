import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { ThreePhaseMonitor } from './ThreePhaseMonitor';

export const plugin = new PanelPlugin<SimpleOptions>(ThreePhaseMonitor)
  .useFieldConfig();