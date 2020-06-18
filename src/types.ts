type AlertType = 'critical' | 'major' | 'minor';

export interface AlertOptions {
  alertType: AlertType;
}

export interface Alert {
  description: string;
  time: string;
  count: number;
}
