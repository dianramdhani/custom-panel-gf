import '../styles/w3.css';
import '../styles/style.scss';
import '../styles/material-icon.scss';

import React, { PureComponent } from 'react';
import { PanelProps, PanelData } from '@grafana/data';

export class SiteInformation extends PureComponent<PanelProps> {
  state: any;
  panelWidth: number | undefined;
  scaleFont = 1;

  data: PanelData = this.props.data;
  latitude = this.dataGetter('latitude');
  longitude = this.dataGetter('longitude');
  name = this.dataGetter('name');
  region = this.dataGetter('region');
  lastConnected = new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  }).format(new Date(this.dataGetter('last_connected')));

  constructor(props: any) {
    super(props);
    this.state = {
      openWeatherData: null,
      cssHasLoaded: false,
    };
  }

  componentDidMount() {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${this.latitude}&lon=${this.longitude}&exclude=minutely,hourly,daily&units=metric&appid=1f7fd020655b6b19810fbe05adc5b784`
    )
      .then(_ => _.json())
      .then((res: OpenWeatherData) => this.setState({ openWeatherData: res }));

    setTimeout(() => this.setState({ cssHasLoaded: true }), 1000);
  }

  componentDidUpdate() {
    if (this.panelWidth) {
      const maxWidth = 600;
      if (this.panelWidth < maxWidth) {
        this.scaleFont = this.panelWidth / (maxWidth + 100);
      } else {
        this.scaleFont = 1;
      }
    }
  }

  render() {
    const { cssHasLoaded, openWeatherData } = this.state;

    return (
      <div className="w3-display-container tr-full" ref={el => (this.panelWidth = el?.clientWidth)}>
        <div className="w3-display-middle tr-wd-100">
          <div className="w3-row">
            <div className="w3-half w3-section">
              <table style={{ margin: 'auto' }}>
                <tr>
                  <td style={{ width: 50, verticalAlign: 'top' }}>
                    {cssHasLoaded ? <i className="material-icons md-36 w3-text-pink">location_on</i> : null}
                  </td>
                  <td>
                    <div className="w3-margin-bottom">
                      <h2 style={{ margin: 0, zoom: this.scaleFont }}>{String(this.name).replace('Site', '')}</h2>
                      <span className="w3-text-blue-gray">{this.region}</span>
                    </div>
                    <div style={{ display: 'flex', verticalAlign: 'middle' }}>
                      {cssHasLoaded ? <i className="material-icons w3-text-light-green">fiber_manual_record</i> : null}
                      Last Update: {this.lastConnected}
                    </div>
                  </td>
                </tr>
              </table>
            </div>
            {openWeatherData ? (
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
                      <h1 style={{ zoom: this.scaleFont }}>
                        {openWeatherData?.current.temp}
                        <span>&nbsp;°C</span>
                      </h1>
                      <div className="w3-section">
                        <div
                          className="w3-text-blue-gray w3-large"
                          style={{ display: 'flex', verticalAlign: 'middle' }}
                        >
                          <i className="material-icons w3-margin-right">grain</i>
                          <div>
                            {openWeatherData?.current.humidity}
                            <span className="w3-medium">&nbsp;%</span>
                          </div>
                        </div>
                        <div
                          className="w3-text-blue-gray w3-large"
                          style={{ display: 'flex', verticalAlign: 'middle' }}
                        >
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
            ) : null}
          </div>
        </div>
      </div>
    );
  }

  private dataGetter(dataName: string) {
    return this.data.series[0].fields.find(_ => _.name === dataName)?.values.get(0);
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
