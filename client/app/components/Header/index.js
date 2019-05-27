import React from 'react';
import { FormattedMessage } from 'react-intl';

import Banner from './banner.jpg';
import messages from './messages';
import {Container, Nav, Navbar} from "react-bootstrap";

function Header() {
  return (
    <div>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/"><FormattedMessage {...messages.appName} /></Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
