// src/routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LandingView from './components/Hero';
import proRoutes from './views/Users/proRoutes'
import adminRoutes from './views/Users/adminRoutes';
import { notifyError } from './services/notificationServices';
import { getState } from './services';

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       getState('signer') ? (
//         <Component {...props} />
//       ) : (
//         <>
//           {notifyError("You are not Connected")}
//           <Redirect to="/" />
//         </>
//       )
//     }
//   />
// );

const AdminRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      getState('role') === 'admin' ? (
        <Component {...props} />
      ) : (
        <>
          {notifyError("You are not Authenticated")}
          <Redirect to="/" />
        </>
      )
    }
  />
);

const ProRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      getState('role') === 'pro' ? (
        <Component {...props} />
      ) : (
        <>
          {notifyError("You are not Authenticated")}
          <Redirect to="/" />
        </>
      )
    }
  />
);

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={LandingView} />
      {proRoutes.map(route => (
        <ProRoute key={route.path} {...route} />
      ))}
      {adminRoutes.map(route => (
        <AdminRoute key={route.path} {...route} />
      ))}
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
