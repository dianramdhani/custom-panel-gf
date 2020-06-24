import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import { SitesMapOptions } from 'types';

interface Props extends PanelProps<SitesMapOptions> {}

export class SitesMap extends PureComponent<Props> {
  render() {
    return <div>hallo</div>;
  }
}
