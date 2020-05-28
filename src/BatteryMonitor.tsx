import './w3.css';

import React from 'react';
import {
  PanelProps,
  VizOrientation,
  Field,
  FieldType,
  ThresholdsMode,
  getDisplayProcessor,
  DataFrame,
  getValueFormat
} from '@grafana/data';
import {
  BarGauge,
  BarGaugeDisplayMode,
  HorizontalGroup
} from '@grafana/ui';

export const BatteryMonitor: React.FC<PanelProps> = (props) => {
  const
    data = props.data,
    dataA = data.series.find(_ => _.refId === 'A'),
    dataB = data.series.find(_ => _.refId === 'B'),
    dataC = data.series.find(_ => _.refId === 'C'),
    dataD = data.series.find(_ => _.refId === 'D');

  const getLastValue = (data: DataFrame | undefined) => {
    if (data) {
      const
        unit = data.fields[1].config.unit,
        value = data.fields[1].values.get(0);
      return getValueFormat(unit)(value)
    } else {
      return;
    }
  }

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
            <span className="w3-xxxlarge">{getLastValue(dataA)?.text || 'No Data'}</span><span className="w3-xxlarge">{getLastValue(dataA)?.suffix}</span>
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
            <span className="w3-xlarge">{getLastValue(dataB)?.text || 'No Data'}</span><span className="w3-large">{getLastValue(dataB)?.suffix}</span>
          </div>
          <div className="w3-third w3-center">
            <span className="w3-xlarge">{getLastValue(dataC)?.text || 'No Data'}</span><span className="w3-large">{getLastValue(dataC)?.suffix}</span>
          </div>
          <div className="w3-third w3-center">
            <span className="w3-xlarge">{getLastValue(dataD)?.text || 'No Data'}</span><span className="w3-large">{getLastValue(dataD)?.suffix}</span>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};