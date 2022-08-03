import React from 'react';
import { withRouter } from 'react-router';
import AppRoutes from './AppRoutes';
import { Provider } from 'mobx-react'

import { DataStore } from '../stores/Data'
import { SettingStore } from '../stores/Settings';
import styles from './styles/app.module.styl';

const stores = {
  dataStore: DataStore,
  settingStore: SettingStore
};

class App extends React.Component<any, any> {

  public render(): JSX.Element {

    return (
      <div className={styles.Container}>
        <div className={styles.Box}>
          <Provider {...stores}>
            <AppRoutes />
          </Provider>      
        </div>
      </div>
    );
  }
}

export default withRouter(App);

