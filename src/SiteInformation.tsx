import './w3.css';

import React, { useState } from 'react';
import {
    PanelProps,
    PanelData,
} from '@grafana/data';

export const SiteInformation: React.FC<PanelProps> = (props) => {
    const data: PanelData = props.data,
        latitude = data.series[0].fields.find(_ => _.name === 'latitude')?.values.get(0),
        longitude = data.series[0].fields.find(_ => _.name === 'longitude')?.values.get(0);

    const [state, setState] = useState<OpenWeatherData>();
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,daily&appid=1f7fd020655b6b19810fbe05adc5b784`)
        .then(_ => _.json())
        .then((res: OpenWeatherData) => setState(res));

    console.log(latitude, longitude);
    return (
        <div>
            {state?.lat}
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