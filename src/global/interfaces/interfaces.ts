import { Data } from "../../stores/Data";
import { Setting } from "../../stores/Settings";

export interface IComponent {
  dataStore?: Data;
  settingStore?: Setting;
}

export interface IValue {
  Value: number;
  Unit: string;
  UnitType: number;
}

export interface IUnitValue {
  Metric: IValue;
  Imperial: IValue;
}

export interface ICurrentConditions {
  LocalObservationDateTime: Date;
  EpochTime: number;
  WeatherText: string;
  WeatherIcon: number;
  HasPrecipitation: boolean;
  PrecipitationType?: any;
  IsDayTime: boolean;
  Temperature: IUnitValue;
  RealFeelTemperature: IUnitValue;
  RealFeelTemperatureShade: IUnitValue;
  RelativeHumidity: number;
  IndoorRelativeHumidity: number;
  DewPoint: IUnitValue;
  Wind: IUnitValue;
  WindGust: IWindGust;
  UVIndex: number;
  UVIndexText: string;
  Visibility: IUnitValue;
  ObstructionsToVisibility: string;
  CloudCover: number;
  Ceiling: IUnitValue;
  Pressure: IUnitValue;
  PressureTendency: IPressureTendency;
  Past24HourTemperatureDeparture: IUnitValue;
  ApparentTemperature: IUnitValue;
  WindChillTemperature: IUnitValue;
  WetBulbTemperature: IUnitValue;
  Precip1hr: IUnitValue;
  PrecipitationSummary: IPrecipitationSummary;
  TemperatureSummary: ITemperatureSummary;
  MobileLink: string;
  Link: string;
}

export interface IWind {
  Direction: IDirection;
  Speed: IUnitValue;
}

export interface IDirection {
  Degrees: number;
  Localized: string;
  English: string;
}

export interface IWindGust {
  Speed: IUnitValue;
}

export interface IPrecipitationSummary {
  Precipitation: IUnitValue;
  PastHour: IUnitValue;
  Past3Hours: IUnitValue;
  Past6Hours: IUnitValue;
  Past9Hours: IUnitValue;
  Past12Hours: IUnitValue;
  Past18Hours: IUnitValue;
  Past24Hours: IUnitValue;
}

export interface ITemperatureSummary {
  Past6HourRange: IUnitValue;
  Past12HourRange: IUnitValue;
  Past24HourRange: IUnitValue;
}

export interface IPressureTendency {
  LocalizedText: string;
  Code: string;
}
