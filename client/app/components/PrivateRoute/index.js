/**
 *
 * PrivateRoute
 * Component to manage private routes
 */

import React from 'react';
import {Redirect, Route} from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    // TODO: change here to see if the user log in
    false === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

export default PrivateRoute;
