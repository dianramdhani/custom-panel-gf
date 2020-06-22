type DataMode = 'real' | 'dummy';
export type DataStyle = 'layout1' | 'layout2' | 'layout3';

export interface ThreePhaseOptions {
  style: DataStyle;
  spacingVertical: number;
  spacingHorizontal: number;
  dataMode: DataMode;
  dummyTotalActiveEnergy: number;
  dummyCurrentR: number;
  dummyVoltageR: number;
  dummyCurrentS: number;
  dummyVoltageS: number;
  dummyCurrentT: number;
  dummyVoltageT: number;
  dummyFrequency: number;
}
