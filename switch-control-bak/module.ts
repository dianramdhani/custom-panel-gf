import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SwitchControl } from './SwitchControl';

export const plugin = new PanelPlugin<SimpleOptions>(SwitchControl).useFieldConfig();
