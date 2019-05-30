/**
 *
 * ProcessItem
 *
 */

import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup, Col, Row} from "react-bootstrap";

function ProcessItem({process, onDelete}) {

  return (
    <div>
      <Row>
        <Col><h5>{process.title}</h5></Col>
      </Row>
      <Row>
        <Col md={10} xs={8}><ProcessCreationText>{process.dateOfCreation}</ProcessCreationText></Col>
        <Col md={2} xs={4}>
          <ButtonGroup>
            {/*TODO: implement edit option*/}
            {/*<Button variant="light"><i className="fas fa-edit" style={{color: "dark"}}/></Button>*/}
            <Button variant="light" onClick={onDelete(process.id)}><i className="fas fa-trash" style={{color: "red"}}/></Button>
          </ButtonGroup></Col>
      </Row>
    </div>
  );
}

const ProcessCreationText = styled.p`
  font-size: 12;
  color: grey;
`;


ProcessItem.propTypes = {
  process: PropTypes.object.isRequired,
  onDelete: PropTypes.func,
};

export default ProcessItem;
