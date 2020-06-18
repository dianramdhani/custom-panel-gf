import '../styles/style.scss';
import '../styles/w3.css';
import '../styles/material-icon.scss';

import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import { css } from 'emotion';

import { AlertOptions, Alert } from './types';

export class ListAlarm extends PureComponent<PanelProps<AlertOptions>> {
  state: any;
  contentHeight = 0;
  contentWidth = 0;

  constructor(props: any) {
    super(props);
    this.state = {
      cssHasLoaded: false,
      collapsedAlerts: [],
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ cssHasLoaded: true }), 1000);
  }

  render() {
    // WIDTH HEIGHT CONTAINER
    const { cssHasLoaded } = this.state,
      ref = (el: HTMLDivElement) => {
        this.contentHeight = el ? el.clientHeight - 40 : 0;
        this.contentWidth = el ? el.clientWidth - 130 : 0;
      };

    // ALERT TYPE
    const { alertType } = this.props.options;
    let fontColor: string, backgroundColor: string, icon: string;
    switch (alertType) {
      case 'critical':
        fontColor = 'w3-text-pink';
        backgroundColor = 'w3-pink';
        icon = 'warning';
        break;
      case 'major':
        fontColor = 'w3-text-orange';
        backgroundColor = 'w3-orange';
        icon = 'report';
        break;
      case 'minor':
        fontColor = 'w3-text-yellow';
        backgroundColor = 'w3-yellow';
        icon = 'error_outline';
        break;
    }

    // ALERT COMPONENT
    const alerts: Alert[] = [
        {
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum assumenda nemo facere autem ut, delectus, amet rerum, doloribus est unde placeat alias nobis tenetur! Modi facere asperiores consequatur magnam exercitationem!',
          time: 'ini time 1',
          count: 0,
        },
        { description: 'ini alert 1', time: 'ini time 1', count: 2 },
      ],
      { collapsedAlerts } = this.state;
    if (collapsedAlerts.length === 0) {
      this.setState({ collapsedAlerts: alerts.map(_ => false) });
    }

    const collapse = (index: number) => {
        collapsedAlerts[index] = !collapsedAlerts[index];
        this.setState({ collapsedAlerts: [...collapsedAlerts] });
      },
      collapseOffClass = css`
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      `,
      componentAlerts = alerts.map((alert, index) => (
        <li style={{ paddingLeft: 0, paddingRight: 0, display: 'flex', userSelect: 'none' }}>
          <div style={{ width: 70 }}>
            {cssHasLoaded ? (
              <i
                className={`material-icons ${fontColor}`}
                style={{ position: 'relative', top: 3, left: '50%', transform: 'translate(-50%, 0)' }}
              >
                {icon}
              </i>
            ) : null}
          </div>

          <div>
            <div style={{ width: this.contentWidth }} className={collapsedAlerts[index] ? undefined : collapseOffClass}>
              {alert.count ? <span className={`w3-badge w3-tiny ${backgroundColor}`}>{alert.count}</span> : undefined}{' '}
              {alert.description}
            </div>
            <small className="w3-text-blue-gray">{alert.time}</small>
          </div>

          <div style={{ width: 30 }}>
            {cssHasLoaded ? (
              <i
                className="material-icons w3-text-blue-gray"
                style={{ position: 'relative', left: '100%', transform: 'translate(-50%, 0)', cursor: 'pointer' }}
                onClick={collapse.bind(this, index)}
              >
                {collapsedAlerts[index] ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
              </i>
            ) : null}
          </div>
        </li>
      ));

    return (
      <div className="tr-full" ref={ref}>
        <div className="w3-border-bottom">
          <div className={`w3-tag ${backgroundColor}`}>
            {cssHasLoaded ? (
              <i className="material-icons" style={{ position: 'relative', top: 3 }}>
                {icon}
              </i>
            ) : null}
            <span style={{ position: 'relative', top: -2, fontSize: 18, textTransform: 'uppercase', marginLeft: 8 }}>
              {alertType}
            </span>
          </div>
        </div>

        <div style={{ width: '100%', height: this.contentHeight, overflowY: 'scroll' }}>
          <ul className="w3-ul">{componentAlerts}</ul>
        </div>
      </div>
    );
  }
}
