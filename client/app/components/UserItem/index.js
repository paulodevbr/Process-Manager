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
        return (<Badge variant="dark">{user.userGroup.name}</Badge>);
      case TRIADOR:
        return (<Badge variant="secondary">{user.userGroup.name}</Badge>);
      case FINALIZADOR:
        return (<Badge variant="success">{user.userGroup.name}</Badge>);
    }
  };

  return (
    <div>
      <Row>
        <Col><h5>{user.name}</h5></Col>
      </Row>
      <Row>
        <Col md={10} xs={8}><EmailText>{user.email}</EmailText><CustomBadge/></Col>
        <Col md={2} xs={4}>
          <ButtonGroup>
            <Button variant="light"><i className="fas fa-edit" style={{color: "dark"}}/></Button>
            <Button variant="light"><i className="fas fa-trash" style={{color: "red"}}/></Button>
          </ButtonGroup></Col>
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
