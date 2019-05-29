/**
 *
 * ObjectForm
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import {Card} from "react-bootstrap";
import Button from "../Button";
import {ADMIN, FINALIZADOR, TRIADOR} from "../../containers/HomePage/constants";
import mapUsers from "./MapUsers";

function ObjectForm({user}) {

  if(user && user.userGroup){
    return (
      <div>
        <Card>
          <Card.Header>{mapUsers[user.userGroup].title}</Card.Header>
          <Card.Body>
            {mapUsers[user.userGroup].form}
            {/*<Button variant="primary">Go somewhere</Button>*/}
          </Card.Body>
        </Card>
      </div>
    );
  }
  return <div></div>;
}

ObjectForm.propTypes = {};

export default memo(ObjectForm);
