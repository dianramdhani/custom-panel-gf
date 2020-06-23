type DataMode = 'real' | 'dummy';

export interface DCRectifierOptions {
  spacingVertical: number;
  spacingHorizontal: number;
  bigValuePercentage: number;
  dataMode: DataMode;
  dummyCurrent: number;
  dummyVoltageAC: number;
  dummyVoltageDC: number;
  smallValueColor: string;
}
