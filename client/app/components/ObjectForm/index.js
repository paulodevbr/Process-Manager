/**
 *
 * ObjectForm
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

import {Card} from "react-bootstrap";
import mapUsers from "./MapUsers";
import {ADMIN} from "../../containers/HomePage/constants";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

function ObjectForm({login}) {

  if(login && login.userGroup && login.userGroup === ADMIN){
    return (
      <div>
        <Card>
          <Card.Header>{mapUsers[login.userGroup].title}</Card.Header>
          <Card.Body>
            {mapUsers[login.userGroup].form}
          </Card.Body>
        </Card>
      </div>
    );
  }
  return <div></div>;
}

ObjectForm.propTypes = {
  login: PropTypes.object
};

export default memo(ObjectForm);
