import './w3.css';

import React, { useState } from 'react';
import {
    PanelProps,
    PanelData
} from '@grafana/data';
import { Badge } from '@grafana/ui';

export const SiteInformation: React.FC<PanelProps> = (props) => {
    const data: PanelData = props.data,
        dataGetter = (dataName: string) => data.series[0].fields.find(_ => _.name === dataName)?.values.get(0),
        latitude = dataGetter('latitude'),
        longitude = dataGetter('longitude'),
        name = dataGetter('name'),
        region = dataGetter('region'),
        lastConnected = new Intl.DateTimeFormat("en-GB", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: 'numeric',
            minute: 'numeric',
        }).format(new Date(dataGetter('last_connected')));

    const [state, setState] = useState<OpenWeatherData>();
    if (typeof state === 'undefined') {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,daily&units=metric&appid=1f7fd020655b6b19810fbe05adc5b784`)
            .then(_ => _.json())
            .then((res: OpenWeatherData) => setState(res));
    }

    return (
        <div className="w3-display-container" style={{ width: '100%', height: '100%' }}>
            <div className="w3-display-middle" style={{ width: '100%' }}>
                <div className="w3-row">
                    <div className="w3-half w3-container w3-center">
                        <div className="w3-section">
                            <h3 style={{ margin: 0 }}>{name}</h3>
                            <span>{region}</span>
                        </div>
                        <Badge text={`Last Update: ${lastConnected}`} icon="clock-nine" color="blue"></Badge>
                    </div>
                    {state ? <div className="w3-half">
                        <div className="w3-row">
                            <div className="w3-col w3-margin-right w3-center" style={{ width: 150 }}>
                                <img style={{ position: "relative", marginTop: -20 }} src={state ? `http://openweathermap.org/img/wn/${state.current.weather[0].icon}@2x.png` : ''} />
                                <h4 style={{ margin: 0 }}>{state?.current.weather[0].main}</h4>
                                <small>{state?.current.weather[0].description}</small>
                            </div>
                            <div className="w3-rest">
                                <h6 style={{ marginBottom: 0 }}>Temperature</h6>
                                <div className="w3-margin-left w3-large">{state?.current.temp}<span className="w3-medium"> °C</span></div>
                                <h6 style={{ marginBottom: 0 }}>Humidity</h6>
                                <div className="w3-margin-left w3-large">{state?.current.humidity}<span className="w3-medium"> %</span></div>
                                <h6 style={{ marginBottom: 0 }}>Wind</h6>
                                <div className="w3-margin-left w3-large">{state?.current.wind_speed} <span className="w3-medium">m/s</span> | {state?.current.wind_deg}<span className="w3-medium"> deg</span></div>
                            </div>
                        </div>
                    </div> : null}
                </div>
            </div>
        </div>
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