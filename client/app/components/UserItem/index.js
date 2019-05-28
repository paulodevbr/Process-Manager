/**
 *
 * UserItem
 *
 */
import styled from 'styled-components';
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import {Badge, Button, ButtonGroup, Col, Row} from "react-bootstrap";
import {ADMIN, FINALIZADOR, TRIADOR} from "../../containers/HomePage/constants";

function UserItem({user, login}) {

  const CustomBadge = () => {
    switch(user.userGroup.name){
      case ADMIN:
        return (<Badge variant="primary">{user.userGroup.name}</Badge>);
      case TRIADOR:
        return (<Badge variant="secondary">{user.userGroup.name}</Badge>);
      case FINALIZADOR:
        return (<Badge variant="success">{user.userGroup.name}</Badge>);
    }
  };

  return (
    <div>
      <Row>
        <Col sm={10}><h5>{user.name}</h5><CustomBadge/></Col>
        <Col sm={2}>
          <ButtonGroup>
            <Button variant="secondary"><i class="fas fa-edit" /></Button>
            <Button variant="secondary"><i className="fas fa-trash"/></Button>
        </ButtonGroup></Col>
      </Row>
      <Row>
        <Col sm={10}><EmailText>{user.email}</EmailText></Col>
      </Row>
    </div>
  );
}

const EmailText = styled.p`
  font-size: 12;
  color: grey;
`;


UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
