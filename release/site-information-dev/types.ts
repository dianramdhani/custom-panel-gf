type DataMode = 'real' | 'dummy';
type DataStatus = 'NORMAL' | 'CRITICAL' | 'MAJOR' | 'MINOR';

export interface SiteInformationOptions {
  dataMode: DataMode;
  dummySite: string;
  dummyRegion: string;
  dummyStatus: DataStatus;
  dummyLastConnected: string;
  dummyLatitude: number;
  dummyLongitude: number;
}
