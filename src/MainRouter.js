import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Auth from './module/auth.module';

const MainRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Auth} />
      </Switch>
    </div>
  );
};
export default MainRouter;
