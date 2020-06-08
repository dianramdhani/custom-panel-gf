import '../styles/w3.css';
import '../styles/style.scss';
import '../styles/material-icon.scss';

import React, { useState } from 'react';
import { PanelProps, PanelData } from '@grafana/data';

export const SiteInformation: React.FC<PanelProps> = props => {
  const data: PanelData = props.data,
    dataGetter = (dataName: string) => data.series[0].fields.find(_ => _.name === dataName)?.values.get(0),
    latitude = dataGetter('latitude'),
    longitude = dataGetter('longitude'),
    name = dataGetter('name'),
    region = dataGetter('region'),
    lastConnected = new Intl.DateTimeFormat('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    }).format(new Date(dataGetter('last_connected')));

  const [state, setState] = useState<OpenWeatherData>();
  if (typeof state === 'undefined') {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,daily&units=metric&appid=1f7fd020655b6b19810fbe05adc5b784`
    )
      .then(_ => _.json())
      .then((res: OpenWeatherData) => setState(res));
  }

  const [cssHasLoaded, setStateCss] = useState<boolean>(false);
  setTimeout(() => setStateCss(true), 1000);

  return (
    <div className="w3-display-container tr-full">
      <div className="w3-display-middle tr-wd-100">
        <div className="w3-row">
          <div className="w3-half">
            <table style={{ margin: 'auto' }}>
              <tr>
                <td style={{ width: 50, verticalAlign: 'top' }}>
                  {cssHasLoaded ? <i className="material-icons md-36 w3-text-pink">location_on</i> : null}
                </td>
                <td>
                  <div className="w3-margin-bottom">
                    <h2 style={{ margin: 0 }}>{String(name).replace('Site', '')}</h2>
                    <span className="w3-text-blue-gray">{region}</span>
                  </div>
                  <div style={{ display: 'flex', verticalAlign: 'middle' }}>
                    {cssHasLoaded ? <i className="material-icons w3-text-light-green">fiber_manual_record</i> : null}
                    Last Update: {lastConnected}
                  </div>
                </td>
              </tr>
            </table>
          </div>
          {state ? (
            <div className="w3-half">
              <table style={{ margin: 'auto' }}>
                <tr>
                  <td style={{ width: 130, verticalAlign: 'top' }}>
                    <div className="w3-margin-right w3-center">
                      <img
                        style={{ position: 'relative', marginTop: -20 }}
                        src={state ? `http://openweathermap.org/img/wn/${state.current.weather[0].icon}@2x.png` : ''}
                      />
                      <h4 style={{ margin: -20 }}>{state?.current.weather[0].main}</h4>
                    </div>
                  </td>
                  <td className="tr-big-value">
                    <h1>
                      {state?.current.temp}
                      <span> °C</span>
                    </h1>
                    <div className="w3-section">
                      <div className="w3-text-blue-gray w3-large" style={{ display: 'flex', verticalAlign: 'middle' }}>
                        <i className="material-icons w3-margin-right">grain</i>
                        <div>
                          {state?.current.humidity}
                          <span className="w3-medium"> %</span>
                        </div>
                      </div>
                      <div className="w3-text-blue-gray w3-large" style={{ display: 'flex', verticalAlign: 'middle' }}>
                        <i className="material-icons w3-margin-right">toys</i>
                        <div>
                          {state?.current.wind_speed} <span className="w3-medium">m/s</span>
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
};

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
