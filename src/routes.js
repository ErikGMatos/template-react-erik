import React, { lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import commom from '~/services/commom';

const Dashboard = lazy(() =>
  import(/* webpackChunkName:"dashboard" */ './pages/Dashboard')
);
const NotFound = lazy(() =>
  import(/* webpackChunkName:"not-found" */ './pages/NotFound')
);

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path={commom.CONFIG_CRM_NOT_FOUND_PAGE} component={NotFound} />
      <Redirect path="*" to={commom.CONFIG_CRM_NOT_FOUND_PAGE} />
    </Switch>
  );
}
