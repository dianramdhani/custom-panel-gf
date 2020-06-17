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
        this.contentHeight = el ? el.clientHeight - 35 : 0;
        this.contentWidth = el ? el.clientWidth - 100 : 0;
      };

    const test = (
      <li className="w3-bar" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <div className="w3-bar-item" style={{ width: 70, padding: 0 }}>
          {cssHasLoaded ? (
            <i
              className="material-icons w3-text-pink"
              style={{ position: 'relative', top: 3, left: '50%', transform: 'translate(-50%, 0)' }}
            >
              warning
            </i>
          ) : null}
        </div>
        <div className="w3-bar-item" style={{ padding: 0 }}>
          <div style={{ width: this.contentWidth, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            <span className="w3-badge w3-tiny w3-pink">10</span> Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Quibusdam numquam voluptate, quam velit enim fuga, ipsam ea corporis quasi quae autem voluptates quas
            labore aut aperiam id accusamus esse doloremque?
          </div>
          <small>Web Designer</small>
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
            {test}
          </ul>
        </div>
      </div>
    );
  }
}
