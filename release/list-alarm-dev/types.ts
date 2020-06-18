type AlertType = 'critical' | 'major' | 'minor';
type DataMode = 'real' | 'dummy';

export interface AlertOptions {
  alertType: AlertType;
  dataMode: DataMode;
}

export interface Alert {
  description: string;
  time: string;
  count: number;
}
