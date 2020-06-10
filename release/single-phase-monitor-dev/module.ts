import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SinglePhaseMonitor } from './SinglePhaseMonitor';

export const plugin = new PanelPlugin<SimpleOptions>(SinglePhaseMonitor).useFieldConfig();
