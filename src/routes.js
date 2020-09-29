import React, { lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';

import commom from '~/services/commom';

const Dashboard = lazy(() =>
  import(/* webpackChunkName:"dashboard" */ './pages/Dashboard')
);
const NotFound = lazy(() =>
  import(/* webpackChunkName:"not-found" */ './pages/NotFound')
);
const AccessDenied = lazy(() =>
  import(/* webpackChunkName:"not-found" */ './pages/AccessDenied')
);

const hasPermission = () => false;

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      hasPermission() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: commom.CONFIG_CRM_ACCESS_DENIED_PAGE,
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <PrivateRoute
        exact
        path="/rota-privada"
        component={() => <p>Componente privado</p>}
      />
      <Route
        exact
        path={commom.CONFIG_CRM_ACCESS_DENIED_PAGE}
        component={AccessDenied}
      />
      <Route path={commom.CONFIG_NOT_FOUND_PAGE} component={NotFound} />
      <Redirect path="*" to={commom.CONFIG_NOT_FOUND_PAGE} />
    </Switch>
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object]),
  location: PropTypes.oneOfType([PropTypes.object]),
};

PrivateRoute.defaultProps = {
  component: null,
  location: null,
};
