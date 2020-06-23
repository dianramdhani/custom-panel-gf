import '../styles/w3.css';
import '../styles/style.scss';
import '../styles/material-icon.scss';

import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';

import { SiteInformationOptions } from './types';

interface Props extends PanelProps<SiteInformationOptions> {}

export class SiteInformation extends PureComponent<Props> {
  readonly state: { zoom: number; cssHasLoaded: boolean; openWeatherData: OpenWeatherData | null };
  site: string;
  region: string;
  status: string;
  lastConnected: string;
  latitude: number;
  longitude: number;

  constructor(props: Props) {
    super(props);

    this.state = {
      zoom: 1,
      cssHasLoaded: false,
      openWeatherData: null,
    };

    this.site = this.region = this.status = this.lastConnected = '';
    this.latitude = this.longitude = 0;
  }

  render() {
    const { cssHasLoaded, openWeatherData } = this.state,
      { dataMode } = this.props.options,
      statusColor: any = {
        NORMAL: 'w3-text-light-green',
        CRITICAL: 'w3-text-pink',
        MAJOR: 'w3-text-orange',
        MINOR: 'w3-text-yellow',
      },
      dateFormater = (date: string) =>
        new Intl.DateTimeFormat('en-GB', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
        }).format(new Date(date));

    switch (dataMode) {
      case 'dummy':
        const {
          dummyLastConnected,
          dummyLatitude,
          dummyLongitude,
          dummyRegion,
          dummySite,
          dummyStatus,
        } = this.props.options;

        this.lastConnected = dummyLastConnected;
        this.latitude = dummyLatitude;
        this.longitude = dummyLongitude;
        this.region = dummyRegion;
        this.site = dummySite;
        this.status = dummyStatus;
        break;

      case 'real':
        const data = this.props.data,
          dataGetter = (dataName: string) => data.series[0].fields.find(_ => _.name === dataName)?.values.get(0);
        this.lastConnected = dataGetter('last_connected') as string;
        this.latitude = dataGetter('latitude') as number;
        this.longitude = dataGetter('longitude') as number;
        this.region = dataGetter('region') as string;
        this.site = dataGetter('name') as string;
        this.status = dataGetter('status') as string;
        break;
    }

    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${this.latitude}&lon=${this.longitude}&exclude=minutely,hourly,daily&units=metric&appid=1f7fd020655b6b19810fbe05adc5b784`
    )
      .then(_ => _.json())
      .then((res: OpenWeatherData) => this.setState({ openWeatherData: res }));

    const weather = openWeatherData ? (
      <div className="w3-half w3-section tr-weather">
        <table>
          <tr>
            <td style={{ width: 130, verticalAlign: 'top' }}>
              <div className="w3-margin-right w3-center">
                <img
                  style={{ position: 'relative', marginTop: -20 }}
                  src={
                    openWeatherData
                      ? `http://openweathermap.org/img/wn/${openWeatherData.current.weather[0].icon}@2x.png`
                      : ''
                  }
                />
                <h4 style={{ margin: -20 }}>{openWeatherData?.current.weather[0].main}</h4>
              </div>
            </td>
            <td className="tr-big-value">
              <h1>
                {openWeatherData?.current.temp}
                <span>&nbsp;°C</span>
              </h1>
              <div className="w3-section">
                <div className="w3-text-blue-gray w3-large" style={{ display: 'flex', verticalAlign: 'middle' }}>
                  <i className="material-icons w3-margin-right">grain</i>
                  <div>
                    {openWeatherData?.current.humidity}
                    <span className="w3-medium">&nbsp;%</span>
                  </div>
                </div>
                <div className="w3-text-blue-gray w3-large" style={{ display: 'flex', verticalAlign: 'middle' }}>
                  <i className="material-icons w3-margin-right">toys</i>
                  <div>
                    {openWeatherData?.current.wind_speed}
                    <span className="w3-medium">&nbsp;m/s</span>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
    ) : null;

    return (
      <div className="w3-display-container tr-full" ref={this.setZoom.bind(this)}>
        <div className="w3-display-middle tr-wd-100" style={{ zoom: this.state.zoom }}>
          <div className="w3-row">
            <div className="w3-half w3-section">
              <table style={{ margin: 'auto' }}>
                <tr>
                  <td style={{ width: 50, verticalAlign: 'top' }}>
                    {cssHasLoaded ? <i className="material-icons md-36 w3-text-pink">location_on</i> : null}
                  </td>
                  <td>
                    <div className="w3-margin-bottom">
                      <h2 style={{ margin: 0 }}>{this.site}</h2>
                      <span className="w3-text-blue-gray">{this.region}</span>
                    </div>
                    <div style={{ display: 'flex', verticalAlign: 'middle' }}>
                      {cssHasLoaded ? (
                        <i className={`material-icons ${statusColor[this.status]}`}>fiber_manual_record</i>
                      ) : null}
                      Last Update: {dateFormater(this.lastConnected)}
                    </div>
                  </td>
                </tr>
              </table>
            </div>
            {weather}
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    setTimeout(() => this.setState({ cssHasLoaded: true }), 1000);
  }

  private setZoom(element: HTMLDivElement) {
    const maxWidthPanel = 600,
      minZoom = 0.5;

    if (element) {
      const { clientWidth } = element;
      if (clientWidth < maxWidthPanel) {
        let zoom = clientWidth / maxWidthPanel;
        zoom = zoom < minZoom ? minZoom : zoom;
        this.setState({ zoom });
      } else {
        this.setState({ zoom: 1 });
      }
    }
  }
}

interface OpenWeatherData {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    wind_speed: number;
    wind_deg: number;
    weather: [
      {
        id: number;
        main: string;
        description: string;
        icon: string;
      }
    ];
  };
}
