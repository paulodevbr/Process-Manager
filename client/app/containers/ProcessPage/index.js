/**
 *
 * ProcessPage
 *
 */

import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';

import {useInjectSaga} from 'utils/injectSaga';
import {useInjectReducer} from 'utils/injectReducer';
import makeSelectProcessPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import {Form, InputGroup, Jumbotron} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import FormControlIntl from "../../components/FormControlIntl";
import {createObject} from "../HomePage/actions";
import {changeDescription, changeTitle} from "./actions";

export function ProcessPage({
                              processForm,
                              onChangeTitle,
                              onChangeDescription,
                              onCreateObject,
                            }) {
  useInjectReducer({key: 'processPage', reducer});
  useInjectSaga({key: 'processPage', saga});

  const { title, description, users} = processForm;

  return (
    <div>
      <Jumbotron style={{maxHeight: 200}}>
        <h3>Create process</h3>
        <p>
          Enter title, description, and add users to solve this process
        </p>
        <Link to="/"><Button variant="success">View all processes</Button></Link>
      </Jumbotron>

      <label>Process Title</label>
      <InputGroup>
        <Form.Control type="text" onChange={onChangeTitle} value={title} />
      </InputGroup>

      <Form.Group controlId="exampleForm.ControlSelect2">
        <Form.Label>Example multiple select</Form.Label>
        <Form.Control as="select" multiple>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
      </Form.Group>

      <label>Description</label>
      <InputGroup>
        <Form.Control as="textarea" rows={4} onChange={onChangeDescription} value={description} />
      </InputGroup>
      <InputGroup>
        <Button style={{margin: 16}} variant="primary" type="submit" onClick={onCreateObject}>
          Create Process
        </Button>
      </InputGroup>
    </div>
  );
}

ProcessPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  processForm: makeSelectProcessPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    onCreateObject: () => {
      return dispatch(createObject());
    },
    onChangeTitle: evt => {
      if (evt && evt.target)
        return dispatch(changeTitle(evt.target.value))
    },
    onChangeDescription: evt => {
      if (evt && evt.target)
        return dispatch(changeDescription(evt.target.value))
    },
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
)(ProcessPage);
