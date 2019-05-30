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
import saga, {loadUsers} from './saga';
import messages from './messages';
import {Form, InputGroup, Jumbotron} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import FormControlIntl from "../../components/FormControlIntl";
import {createObject} from "../HomePage/actions";
import {changeDescription, changeTitle, loadUsersList} from "./actions";

export function ProcessPage({
                              processForm,
                              onChangeTitle,
                              onChangeDescription,
                              onCreateObject,
                              loadUsersListFunc,
                            }) {
  useInjectReducer({key: 'processPage', reducer});
  useInjectSaga({key: 'processPage', saga});

  const { title, description, users, usersList} = processForm;

  if(!usersList){
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

      <label>Titulo</label>
      <InputGroup>
        <Form.Control type="text" onChange={onChangeTitle} value={title} />
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
        <Form.Control as="textarea" rows={4} onChange={onChangeDescription} value={description} />
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
