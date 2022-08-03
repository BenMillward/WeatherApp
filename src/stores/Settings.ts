import { observable } from 'mobx'

export interface IDisaplySettings {
  MeasurementUnits: UnitsOfMeasurement,
  TimeFormat: TimeFormat,
  DateFormat: DateFormat
}

export enum UnitsOfMeasurement {
  METRIC = 'Metric',
  IMPERIAL = 'Imperial'
}

export enum DateFormat {
  DD_MM_YYYY = 'DD MM YYYY',
  DD_MMM_YYYY = 'DD MMMM YYYY',
  MM_DD_YYYY = 'MM DD YYYY',
  MMM_DD_YYYY = 'MMM DD YYYY',
  YYYY_MM_DD = 'YYYY MM DD',
  YYYY_MMM_DD = 'YYYY MMM DD',
}

export enum TimeFormat {
  TWELVE_HOUR = 'hh:mm:ss',
  TWENTY_FOUR_HOUR = 'HH:mm:ss'
}

class Setting {
  @observable public display: IDisaplySettings = {
    MeasurementUnits: UnitsOfMeasurement.METRIC,
    TimeFormat: TimeFormat.TWENTY_FOUR_HOUR,
    DateFormat: DateFormat.DD_MMM_YYYY
  }
}

const store = new Setting();

export { Setting, store as SettingStore}
