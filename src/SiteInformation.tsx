import './w3.css';

import React, { useState } from 'react';
import {
    PanelProps,
    PanelData
} from '@grafana/data';
import { HorizontalGroup } from '@grafana/ui';

export const SiteInformation: React.FC<PanelProps> = (props) => {
    const data: PanelData = props.data,
        latitude = data.series[0].fields.find(_ => _.name === 'latitude')?.values.get(0),
        longitude = data.series[0].fields.find(_ => _.name === 'longitude')?.values.get(0);

    const [state, setState] = useState<OpenWeatherData>();
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,daily&units=metric&appid=1f7fd020655b6b19810fbe05adc5b784`)
        .then(_ => _.json())
        .then((res: OpenWeatherData) => setState(res));

    return (
        <HorizontalGroup>
            <div className="w3-margin-right w3-center">
                <img style={{ position: "relative", marginTop: -80 }} src={state ? `http://openweathermap.org/img/wn/${state.current.weather[0].icon}@2x.png` : ''} />
                <h4 style={{ margin: 0 }}>{state?.current.weather[0].main}</h4>
                <small>{state?.current.weather[0].description}</small>
            </div>
            <div>
                <h6 style={{ marginBottom: 0 }}>Temperature</h6>
                <div className="w3-margin-left w3-large">{state?.current.temp}<span className="w3-medium"> °C</span></div>
                <h6 style={{ marginBottom: 0 }}>Humidity</h6>
                <div className="w3-margin-left w3-large">{state?.current.humidity}<span className="w3-medium"> %</span></div>
                <h6 style={{ marginBottom: 0 }}>Wind</h6>
                <div className="w3-margin-left w3-large">{state?.current.wind_speed} <span className="w3-medium">m/s</span> | {state?.current.wind_deg}<span className="w3-medium"> deg</span></div>
            </div>
        </HorizontalGroup>
    );
};

interface OpenWeatherData {
    lat: number
    lon: number
    timezone: string
    timezone_offset: number
    current: {
        dt: number,
        sunrise: number,
        sunset: number,
        temp: number,
        feels_like: number,
        pressure: number,
        humidity: number,
        dew_point: number,
        uvi: number,
        clouds: number,
        wind_speed: number,
        wind_deg: number,
        weather: [
            {
                id: number,
                main: string,
                description: string,
                icon: string
            }
        ]
    }
}