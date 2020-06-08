import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SiteInformation } from './SiteInformation';

export const plugin = new PanelPlugin<SimpleOptions>(SiteInformation).useFieldConfig();
