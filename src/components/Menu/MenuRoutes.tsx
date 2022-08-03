import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Menu from './Menu';

export default class MenuRoutes extends React.Component<any, any> {

  public render(): JSX.Element {
    return (
      <Switch>
        <Route exact path={'/menu'} render={() => <Menu />} />
        <Route path={'/menu/1'} render={() => <h1>Hello 1</h1>} />
        <Route path={'/menu/2'} render={() => <h1>Hello 2</h1>} />
      </Switch>
    );
  }
}


