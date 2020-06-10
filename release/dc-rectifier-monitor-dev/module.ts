import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { DCRectifierMonitor } from './DCRectifierMonitor';

export const plugin = new PanelPlugin<SimpleOptions>(DCRectifierMonitor).useFieldConfig();
