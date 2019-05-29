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

function UserItem({user, login, onDelete}) {

  const CustomBadge = () => {
    switch(user.userGroup){
      case ADMIN:
        return (<Badge variant="dark">{user.userGroup}</Badge>);
      case TRIADOR:
        return (<Badge variant="info">{user.userGroup}</Badge>);
      case FINALIZADOR:
        return (<Badge variant="primary">{user.userGroup}</Badge>);
    }
  };

  const ButtonDelete = () => user.email === login.email
    ? <Button variant="light" disabled><i className="fas fa-trash" style={{color: "red"}}/></Button>
    : <Button variant="light" onClick={onDelete(user.id)}><i className="fas fa-trash" style={{color: "red"}}/></Button>

  return (
    <div>
      <Row>
        <Col md={{span: 2, order: 1}} xs={{span: 4, order: 2}}><h6><CustomBadge/></h6></Col>
        <Col md={{span: 4, order: 2}} xs={{span: 8, order: 1}}><h5>{user.name}</h5></Col>
        <Col md={{span: 4, order: 3}} xs={{span: 8, order: 3}}><EmailText>{user.email}</EmailText></Col>
        <Col md={{span: 2, order: 4}} xs={{span: 4, order: 4}}>
          <ButtonGroup>
            <Button variant="light"><i className="fas fa-edit" style={{color: "dark"}}/></Button>
            <ButtonDelete/>
          </ButtonGroup></Col>
      </Row>
      <Row>
        {/*<Col md={2}>*/}
        {/*  <CustomBadge/>*/}
        {/*</Col>*/}

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
