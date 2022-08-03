import React from 'react';
import { Link } from 'react-router-dom';
import styles from './../styles/menu.module.styl';

export default class Menu extends React.Component<any, any> {

  public render(): JSX.Element {

    return (
      <div className={styles.Menu}>
        <Link to={'/current'}><div></div>Current Weather</Link>
        <Link to={'/radar'}>Weather Radar</Link>
      </div>
    );
  }
}



