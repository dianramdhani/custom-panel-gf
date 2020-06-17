import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { ListAlarm } from './ListAlarm';

export const plugin = new PanelPlugin<SimpleOptions>(ListAlarm).useFieldConfig();
