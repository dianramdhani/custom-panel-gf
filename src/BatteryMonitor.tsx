import './w3.css';

import React from 'react';
import { PanelProps, VizOrientation, Field, FieldType, ThresholdsMode, getDisplayProcessor } from '@grafana/data';
import { BarGauge, BarGaugeDisplayMode, HorizontalGroup } from '@grafana/ui';

export const BatteryMonitor: React.FC<PanelProps> = ({ options, data, width, height }) => {
  const
    dataA = data.series.find(_ => _.refId === 'A'),
    dataB = data.series.find(_ => _.refId === 'B'),
    dataC = data.series.find(_ => _.refId === 'C'),
    dataD = data.series.find(_ => _.refId === 'D');
  console.log(dataA, 'test data', dataD?.fields[1].values.get(0));

  const field: Partial<Field> = {
    type: FieldType.number,
    config: {
      min: 0,
      max: 100,
      thresholds: {
        mode: ThresholdsMode.Absolute,
        steps: [
          { value: -Infinity, color: 'red' },
          { value: 50, color: 'green' },
        ],
      },
    },
  };
  field.display = getDisplayProcessor({ field });

  return (
    <div className="w3-display-container" style={{ width: '100%', height: '100%' }}>
      <div className="w3-display-middle" style={{ width: '100%' }}>
        <HorizontalGroup justify="center">
          <div className="w3-margin-right">
            <span className="w3-xxxlarge">{dataA?.fields[1].values.get(0) || 'No Data'}</span><span className="w3-xxlarge">{dataA?.fields[1].values.get(0) ? '%' : ''}</span>
          </div>
          <BarGauge
            orientation={VizOrientation.Horizontal}
            displayMode={BarGaugeDisplayMode.Lcd}
            height={50}
            width={200}
            theme={{} as any}
            value={{
              text: '',
              title: '',
              numeric: dataA?.fields[1].values.get(0)
            }}
            field={field.config!}
            display={field.display!}
          ></BarGauge>
        </HorizontalGroup>
        <div className="w3-section w3-row">
          <div className="w3-third w3-center">
            <span className="w3-xlarge">{dataB?.fields[1].values.get(0) || 'No Data'}</span><span className="w3-large">{dataB?.fields[1].values.get(0) ? '%' : ''}</span>
          </div>
          <div className="w3-third w3-center">
            <span className="w3-xlarge">{dataC?.fields[1].values.get(0) || 'No Data'}</span><span className="w3-large">{dataC?.fields[1].values.get(0) ? '%' : ''}</span>
          </div>
          <div className="w3-third w3-center">
            <span className="w3-xlarge">{dataD?.fields[1].values.get(0) || 'No Data'}</span><span className="w3-large">{dataD?.fields[1].values.get(0) ? '%' : ''}</span>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};