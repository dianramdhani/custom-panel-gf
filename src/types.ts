type DataMode = 'real' | 'dummy';
export type Style = 'layout1' | 'layout2' | 'layout3' | 'layout4';

export interface BatteryOptions {
  style: Style;
  showCurrent: boolean;
  spacingVertical: number;
  spacingHorizontal: number;
  dataMode: DataMode;
  dummyCapacity: number;
  dummyVoltage: number;
  dummyResistance: number;
  dummyTemperature: number;
  dummyCurrent: number;
}
