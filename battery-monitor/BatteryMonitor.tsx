import './w3.css';

import React from 'react';
import { PanelProps, VizOrientation, Field, FieldType, ThresholdsMode, getDisplayProcessor } from '@grafana/data';
import { BarGauge, BarGaugeDisplayMode, HorizontalGroup } from '@grafana/ui';

export const BatteryMonitor: React.FC<PanelProps> = (overrides) => {
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
          <BarGauge
            orientation={VizOrientation.Horizontal}
            displayMode={BarGaugeDisplayMode.Lcd}
            height={50}
            width={200}
            theme={{} as any}
            value={{
              text: '',
              title: '',
              numeric: 20
            }}
            field={field.config!}
            display={field.display!}
          ></BarGauge>
          <div>
            <span className="w3-xxxlarge">99</span><span className="w3-xxlarge">%</span>
          </div>
        </HorizontalGroup>
        <div className="w3-section w3-row">
          <div className="w3-third w3-center">
            <span className="w3-xlarge">99</span><span className="w3-large">%</span>
          </div>
          <div className="w3-third w3-center">
            <span className="w3-xlarge">99</span><span className="w3-large">%</span>
          </div>
          <div className="w3-third w3-center">
            <span className="w3-xlarge">99</span><span className="w3-large">%</span>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};