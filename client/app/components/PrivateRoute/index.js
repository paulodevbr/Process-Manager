/**
 *
 * PrivateRoute
 * Component to manage private routes
 */

import React from 'react';
import {Redirect, Route} from "react-router-dom";
import {createStructuredSelector} from "reselect";
import makeSelectLoginPage from "../../containers/LoginPage/selectors";
import {connect} from "react-redux";
import {compose} from "redux";

const PrivateRoute = ({ component: Component, login, ...rest }) => (
  <Route {...rest} render={(props) => (
    login && login.token
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
);

const mapStateToProps = createStructuredSelector({
  login: makeSelectLoginPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
)(PrivateRoute);
