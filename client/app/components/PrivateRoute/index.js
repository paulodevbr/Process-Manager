/**
 *
 * PrivateRoute
 * Component to manage private routes
 */

import React, {memo} from 'react';
import {Redirect, Route} from "react-router-dom";
import {createStructuredSelector} from "reselect";
import makeSelectLoginPage, {
  makeSelectAuthenticated,
  makeSelectEmail,
  makeSelectPassword,
  makeSelectAuthFailed
} from "../../containers/LoginPage/selectors";
import {changeEmail, changePassword, login} from "../../containers/LoginPage/actions";
import {connect} from "react-redux";
import {compose} from "redux";
import {LoginPage} from "../../containers/LoginPage";

const PrivateRoute = ({ component: Component, login, ...rest }) => (
  <Route {...rest} render={(props) => (
    // TODO: change here to see if the user log in
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

// export default PrivateRoute;
