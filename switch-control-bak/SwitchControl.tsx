import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';

export class SwitchControl extends PureComponent<PanelProps> {
  render() {
    return (
      <div className="alert" role="alert">
        A simple primary alert—check it out!
      </div>
    );
  }
}
