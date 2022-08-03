import * as React from 'react';
import { IComponent } from '../../global/interfaces/interfaces';
import styles from './../styles/unitValue.module.styl';

export interface IProps extends IComponent {
  label?: string,
  value?: JSX.Element,
}

export default class UnitValue extends React.Component<IProps, any> {

  public render(): JSX.Element {
    const { value, label } = this.props;

    if (!value) {
      return null;
    }

    return (
      <div className={styles.UnitValueItem}>
        <div className={styles.Label}>{label}</div>
        <div>{value}</div>
      </div>
    );
  }
}



