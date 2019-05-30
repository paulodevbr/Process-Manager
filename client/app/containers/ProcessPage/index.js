/**
 *
 * ProcessPage
 *
 */

import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import reducer from './reducer';
import saga from './saga';
import makeSelectProcessPage from './selectors';

import {useInjectSaga} from 'utils/injectSaga';
import {useInjectReducer} from 'utils/injectReducer';

import {Link} from "react-router-dom";
import {createObject} from "../HomePage/actions";
import {changeDescription, changeTitle, loadUsersList} from "./actions";
import {Form, InputGroup, Jumbotron, Button, Alert} from "react-bootstrap";

export function ProcessPage({
                              processForm,
                              onChangeTitle,
                              onChangeDescription,
                              onCreateObject,
                              loadUsersListFunc,
                            }) {
  useInjectReducer({key: 'processPage', reducer});
  useInjectSaga({key: 'processPage', saga});

  const {title, description, users, usersList, createdProcess} = processForm;

  if (!usersList) {
    loadUsersListFunc();
  }

  return (
    <div>
      <Jumbotron style={{maxHeight: 200}}>
        <h3>Criar processo</h3>
        <p>
          Entre com o titulo, descricao e adicione usuarios para adicionar um parecer
        </p>
        <Link to="/"><Button variant="success">Ver todos os processos</Button></Link>
      </Jumbotron>

      <Alert show={createdProcess} variant='success'>
        Processo criado com sucesso!
      </Alert>

      <label>Titulo</label>
      <InputGroup>
        <Form.Control type="text" onChange={onChangeTitle} value={title}/>
      </InputGroup>

      <Form.Group controlId="exampleForm.ControlSelect2">
        <Form.Label>Selecione os usuarios que devem adicionar parecer.</Form.Label>
        <Form.Text className="text-muted">
          Utilize a tecla Ctrl ou segure e arraste para selecionar varios
        </Form.Text>
        {usersList && (
          <Form.Control as="select" multiple>
            {usersList.map(u => (
              <option>{u.name}</option>
            ))}
          </Form.Control>
        )}
      </Form.Group>

      <label>Descrição</label>
      <InputGroup>
        <Form.Control as="textarea" rows={4} onChange={onChangeDescription} value={description}/>
      </InputGroup>
      <InputGroup>
        <Button style={{margin: 16}} variant="primary" type="submit" onClick={onCreateObject}>
          Criar processo
        </Button>
      </InputGroup>
    </div>
  );
}

ProcessPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  processForm: PropTypes.object.isRequired,
  onCreateObject: PropTypes.func.isRequired,
  onChangeTitle: PropTypes.func.isRequired,
  onChangeDescription:  PropTypes.func.isRequired,
  loadUsersListFunc: PropTypes.func.isRequired,
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
    loadUsersListFunc: () => dispatch(loadUsersList()),
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
