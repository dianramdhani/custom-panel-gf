type DataMode = 'real' | 'dummy';
export type Style = 'layout1' | 'layout2';

export interface BatteryOptions {
  style: Style;
  dataMode: DataMode;
  dummyCapacity: number;
  dummyVoltage: number;
  dummyResistance: number;
  dummyTemperature: number;
  spacingVertical: number;
  spacingHorizontal: number;
}
