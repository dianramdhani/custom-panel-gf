type DataMode = 'real' | 'dummy';

export interface BatteryOptions {
  dataMode: DataMode;
  dummyCapacity: number;
  dummyVoltage: number;
  dummyResistance: number;
  dummyTemperature: number;
}
