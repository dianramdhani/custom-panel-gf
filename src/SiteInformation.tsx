import './w3.css';

import React from 'react';
import {
    PanelProps,
    PanelData,
} from '@grafana/data';

export const SiteInformation: React.FC<PanelProps> = (props) => {
    const data: PanelData = props.data;
    console.log(data, 'ini contoh datanya');
    return (
        <div>testing</div>
    );
};