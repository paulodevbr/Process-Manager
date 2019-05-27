/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import LoginPage from "containers/LoginPage/Loadable";
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';
import PrivateRoute from "../../components/PrivateRoute";
import {createStructuredSelector} from "reselect";
import {makeSelectUser, makeSelectUserData} from "./selectors";
import {connect} from "react-redux";
import {compose} from "redux";
import {Container, Nav, Navbar} from "react-bootstrap";

const AppWrapper = styled.div`
  max-width: calc(1024px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <div>
      <Header />
      <AppWrapper>
        <Switch>
          <Route path="/login" component={LoginPage}/>
          <PrivateRoute exact path="/" component={HomePage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
        <Footer />
        <GlobalStyle />
      </AppWrapper>
    </div>

  );
}

