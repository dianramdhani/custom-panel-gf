type DataMode = 'real' | 'dummy';

export interface GensetOptions {
  spacingVertical: number;
  spacingHorizontal: number;
  dataMode: DataMode;
  dummyFuelCapacity: number;
  dummyRunningTime: number;
  dummyVoltage: number;
  dummyCurrent: number;
  dummyFrequency: number;
}
