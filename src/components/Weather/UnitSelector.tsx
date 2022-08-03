import * as React from 'react';
import { IComponent, IUnitValue } from '../../global/interfaces/interfaces';
import { inject, observer } from "mobx-react";
import styles from './../styles/unitValue.module.styl';

export interface IProps extends IComponent {
  value: IUnitValue,
}

@inject('settingStore') @observer
export default class UnitSelector extends React.Component<IProps, any> {

  public render(): JSX.Element {
    const { value } = this.props;
    const { settingStore: { display: { MeasurementUnits} }} = this.props;

    const measurement = value[MeasurementUnits];

    if (!measurement) {
      return null;
    }

    let displayunit;
    switch (measurement.UnitType) {
      case 17:
        displayunit = `°${measurement?.Unit}`
        break;
      default:
        displayunit = measurement?.Unit
        break;
    }
    
    return (
      <div className={styles.Value}>
        <div className={styles.DisplayValue}>{measurement?.Value}</div>
        <div className={styles.DisplayUnit}>{displayunit}</div>
      </div>
    );
  }
}



