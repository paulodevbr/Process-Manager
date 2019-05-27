/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { loadRepos } from '../App/actions';
import {changeUsername, loadUsers} from './actions';
import { makeSelectUsers } from './selectors';
import reducer from './reducer';
import saga from './saga';
import FormControlIntl from "../../components/FormControlIntl";
import messages from "../LoginPage/messages";
import {InputGroup} from "react-bootstrap";
import FormControl from "react-bootstrap/es/FormControl";
import {changeEmail} from "../LoginPage/actions";

const key = 'home';

export function HomePage({
  users,
  loading,
  error,
  repos,
  loadUsersFunc,
  onChangeEmail,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const reposListProps = {
    loading,
    error,
    repos,
  };

  if(users){
    return (
      users.map(user => (
        <div>
          {user.email}
        </div>
      ))
    );
  } else {
    loadUsersFunc();
  }

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <div>
      </div>
    </article>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  users: makeSelectUsers(),
});

export function mapDispatchToProps(dispatch) {
  return {
    loadUsersFunc: () => dispatch(loadUsers()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
