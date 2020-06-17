import '../styles/style.scss';
import '../styles/w3.css';
import '../styles/material-icon.scss';

import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';

export class ListAlarm extends PureComponent<PanelProps> {
  state: any;
  contentHeight = 0;
  contentWidth = 0;

  constructor(props: any) {
    super(props);

    this.state = {
      cssHasLoaded: false,
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ cssHasLoaded: true }), 1000);
  }

  render() {
    const { cssHasLoaded } = this.state,
      ref = (el: HTMLDivElement) => {
        this.contentHeight = el ? el.clientHeight - 40 : 0;
        this.contentWidth = el ? el.clientWidth - 130 : 0;
      };

    const test = (
      <li style={{ paddingLeft: 0, paddingRight: 0, display: 'flex' }}>
        <div style={{ width: 70 }}>
          {cssHasLoaded ? (
            <i
              className="material-icons w3-text-pink"
              style={{ position: 'relative', top: 3, left: '50%', transform: 'translate(-50%, 0)' }}
            >
              warning
            </i>
          ) : null}
        </div>

        <div>
          <div style={{ width: this.contentWidth, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            <span className="w3-badge w3-tiny w3-pink">10</span> Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Quis, tempore voluptatum minima omnis aperiam, necessitatibus earum rem dicta enim provident qui sit.
            Rerum enim alias aut neque quasi, architecto esse.
          </div>
          <small className="w3-text-blue-gray">12 April 2020 17:00</small>
        </div>

        <div style={{ width: 30 }}>
          {cssHasLoaded ? (
            <i
              className="material-icons w3-text-blue-gray"
              style={{ position: 'relative', left: '100%', transform: 'translate(-50%, 0)' }}
            >
              keyboard_arrow_down
            </i>
          ) : null}
        </div>
      </li>
    );

    return (
      <div className="tr-full" ref={ref}>
        <div className="w3-border-bottom">
          <div className="w3-tag w3-pink">
            {cssHasLoaded ? (
              <i className="material-icons" style={{ position: 'relative', top: 3 }}>
                warning
              </i>
            ) : null}
            <span style={{ position: 'relative', top: -2, fontSize: 18 }}> Critical</span>
          </div>
        </div>

        <div style={{ width: '100%', height: this.contentHeight, overflowY: 'scroll' }}>
          <ul className="w3-ul">
            {test}
            {test}
            {test}
            {test}
            {test}
            {test}
          </ul>
        </div>
      </div>
    );
  }
}
