import React, {memo} from 'react';
import { FormattedMessage } from 'react-intl';

import Banner from './banner.jpg';
import messages from './messages';
import {Container, Nav, Navbar} from "react-bootstrap";
import {createStructuredSelector} from "reselect";
import {makeSelectObjects} from "../../containers/HomePage/selectors";
import makeSelectLoginPage from "../../containers/LoginPage/selectors";
import {loadList} from "../../containers/HomePage/actions";
import {connect} from "react-redux";
import {compose} from "redux";
import {HomePage} from "../../containers/HomePage";
import {Link} from "react-router-dom";

function Header({login}) {
  return (
    <div>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand><FormattedMessage {...messages.appName} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav-login" />
          {login.authenticated && (
              <Navbar.Collapse id="navbar-nav-login" className="justify-content-end">
                <Navbar.Text style={{fontSize: 12}}>
                  {login.name}
                </Navbar.Text>
                <Nav>
                  <Nav.Link href="/login">Logout</Nav.Link>
                </Nav>
              </Navbar.Collapse>
          )
          }
        </Container>
      </Navbar>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  login: makeSelectLoginPage(),
});

export function mapDispatchToProps(dispatch) {
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
  memo,
)(Header);
