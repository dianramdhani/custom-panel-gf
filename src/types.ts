type DataMode = 'real' | 'dummy';

export interface BatteryOptions {
  dataMode: DataMode;
  dummyCapacity: number;
}
