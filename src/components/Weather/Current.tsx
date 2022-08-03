import * as React from 'react';
import { IComponent, ICurrentConditions, IUnitValue } from '../../global/interfaces/interfaces';
import { inject, observer } from "mobx-react";
import * as moment from 'moment';
import styles from './../styles/current.module.styl';
import UnitValue from './UnitValue';
import UnitSelector from './UnitSelector';

export interface IState {
  currentConditions?: ICurrentConditions[],
  error: boolean
}

@inject('dataStore', 'settingStore') @observer
export default class Current extends React.Component<IComponent, IState> {

  public state = {
    error: false,
    currentConditions: null
  }

  public componentDidMount() {
    const { dataStore: { getCurrentConditions } } = this.props;
    getCurrentConditions()
      .then((data) => this.setState({ currentConditions: data }))
      .catch(() => this.setState({ error: true }))
  }

  public render(): JSX.Element {
    const { error } = this.state;
    const { settingStore: { display: { DateFormat, TimeFormat } }} = this.props;

    const weather = this.state?.currentConditions?.[0];
    const items = [];

    if (error) {
      items.push('An error has occured')
    } else if (!weather) { 
      return <h1>Loading</h1>; 
    } else {
      const unitValues = new Map<string, JSX.Element>([
        ['Temperature', <UnitSelector value={weather?.Temperature} />],
        ['Real Feel Temperature', <UnitSelector value={weather?.RealFeelTemperature} />],
        ['Real Feel Temperature Shade', <UnitSelector value={weather?.RealFeelTemperatureShade} />],
        ['Wind Chill Temperature', <UnitSelector value={weather?.WindChillTemperature} />],
        ['Wet Bulb Temperature', <UnitSelector value={weather?.WetBulbTemperature} />],
        ['Dew Point', <UnitSelector value={weather?.DewPoint} />],
        ['Visibility', <UnitSelector value={weather?.Visibility} />],
        ['Ceiling', <UnitSelector value={weather?.Ceiling} />],
        ['Pressure', <UnitSelector value={weather?.Pressure} />],
        ['Precipitation In the Last Hour', <UnitSelector value={weather?.Precip1hr} />],
        ['Wind Direction', <>{weather?.Wind?.Direction?.English}</>],
        ['Wind Speed', <UnitSelector value={weather?.Wind?.Speed} />],
      ])

      const { HasPrecipitation, localObservationDateTime } = weather;

      items.push(<UnitValue value={<>{moment(localObservationDateTime).format(`${DateFormat} ${TimeFormat}`)}</>} />)
      items.push(<UnitValue value={<>{HasPrecipitation ? `It's raining` : `It's not raining`}</>} />)

      unitValues.forEach((value, key) => items.push(<UnitValue value={value} label={key} />))
    }

    return (
      <div className={styles.Wrapper}>
        {error ? 'an error has occured' : null}
        <div className={styles.UnitValues}>
          {items}
        </div>
      </div>
    );
  }
}



