import React from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import MenuRoutes from './Menu/MenuRoutes';
import Current from './Weather/Current';
import styles from './styles/app.module.styl';
import { inject, observer } from 'mobx-react';
import moment from 'moment';
import { IComponent } from 'src/global/interfaces/interfaces';

@inject('settingStore') @observer
export default class AppRoutes extends React.Component<IComponent, any> {

  public componentDidMount() {
    setInterval(() => this.forceUpdate(), 1000);
  }

  public render(): JSX.Element {
    const { settingStore: { display: { DateFormat, TimeFormat } }} = this.props;

    return (
      <>
        {/* TODO: move to component */}
        <div className={styles.Header}>
          <Link to={'/menu'}>Menu</Link>
          <div className={styles.Date}>{<div>{moment(new Date()).format(`${DateFormat} ${TimeFormat}`)}</div>}</div>
        </div>

        <Switch>
          <Route path={'/menu*'} render={() => <MenuRoutes />} />
          <Route path={'/current'} render={() => <Current />} />
          <Redirect to="/menu" />
        </Switch>
      </>
    );
  }

}

