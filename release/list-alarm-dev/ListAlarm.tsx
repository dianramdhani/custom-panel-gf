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

  readonly minimumZoom = 0.5;

  constructor(props: any) {
    super(props);
    this.state = {
      cssHasLoaded: false,
      collapsedAlerts: [],
      zoom: 1,
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ cssHasLoaded: true }), 1000);
  }

  render() {
    // ZOOM
    let { zoom } = this.state,
      setZoom = (clientWidth: number) => {
        const maxWidth = 600,
          minZoom = 0.5;
        if (clientWidth < maxWidth) {
          zoom = clientWidth / maxWidth;
          zoom = zoom < minZoom ? minZoom : zoom;
        } else {
          zoom = 1;
        }
        this.setState({ zoom });
      };

    // WIDTH HEIGHT CONTAINER
    const { cssHasLoaded } = this.state,
      ref = (el: HTMLDivElement) => {
        if (el) {
          this.contentHeight = el.clientHeight - 40;
          this.contentWidth = el.clientWidth - 130;
          setZoom(el.clientWidth);
          if (zoom < 1) {
            const factorHeight = 1 / zoom,
              factorWidth = 1 / (1 + zoom);
            this.contentHeight = this.contentHeight * factorHeight + 10 * factorHeight;
            this.contentWidth = this.contentWidth * factorWidth + 500 * factorWidth;
          }
        }
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

    // DATA MODE
    const { dataMode } = this.props.options;
    let alerts: Alert[] = [];
    switch (dataMode) {
      case 'dummy':
        alerts = [
          {
            description:
              'Real-time event processing is currently overloaded and may stop processing your events. Please contact support.',
            time: '18 June 2020 11:01',
            count: 3,
          },
          { description: 'Threshold exceeded', time: '18 June 2020 09:21', count: 0 },
          {
            description:
              'Liveness probe failed: http request canceled while waiting connection. (Client.Timeout exceeded while awaiting headers)',
            time: '18 June 2020 03:21',
            count: 2,
          },
          {
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus porro quae atque corporis, accusamus sequi quod voluptates repellat asperiores quam, perspiciatis non nobis soluta veritatis aperiam, cumque quaerat. Minima, distinctio?',
            time: '01 January 2020 00:00',
            count: 0,
          },
          {
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus porro quae atque corporis, accusamus sequi quod voluptates repellat asperiores quam, perspiciatis non nobis soluta veritatis aperiam, cumque quaerat. Minima, distinctio?',
            time: '01 January 2020 00:00',
            count: 0,
          },
          {
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus porro quae atque corporis, accusamus sequi quod voluptates repellat asperiores quam, perspiciatis non nobis soluta veritatis aperiam, cumque quaerat. Minima, distinctio?',
            time: '01 January 2020 00:00',
            count: 0,
          },
          {
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus porro quae atque corporis, accusamus sequi quod voluptates repellat asperiores quam, perspiciatis non nobis soluta veritatis aperiam, cumque quaerat. Minima, distinctio?',
            time: '01 January 2020 00:00',
            count: 0,
          },
          {
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus porro quae atque corporis, accusamus sequi quod voluptates repellat asperiores quam, perspiciatis non nobis soluta veritatis aperiam, cumque quaerat. Minima, distinctio?',
            time: '01 January 2020 00:00',
            count: 0,
          },
          {
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus porro quae atque corporis, accusamus sequi quod voluptates repellat asperiores quam, perspiciatis non nobis soluta veritatis aperiam, cumque quaerat. Minima, distinctio?',
            time: '01 January 2020 00:00',
            count: 0,
          },
          {
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus porro quae atque corporis, accusamus sequi quod voluptates repellat asperiores quam, perspiciatis non nobis soluta veritatis aperiam, cumque quaerat. Minima, distinctio?',
            time: '01 January 2020 00:00',
            count: 0,
          },
        ];
        break;
      case 'real':
        break;
    }

    // ALERT COMPONENT
    const { collapsedAlerts } = this.state;
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
      <div className="tr-full" ref={ref.bind(this)}>
        <div style={{ zoom }}>
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

          {alerts.length ? (
            <div style={{ width: '100%', height: this.contentHeight, overflowY: 'scroll' }}>
              <ul className="w3-ul">{componentAlerts}</ul>
            </div>
          ) : (
            <h3 className="w3-center">No Data</h3>
          )}
        </div>
      </div>
    );
  }
}
