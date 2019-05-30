/**
 *
 * CreateUserForm
 *
 */

import React, {memo} from 'react';
import PropTypes from 'prop-types';
import FormControlIntl from "../FormControlIntl";
import messages from './messages';
import {FormattedMessage} from 'react-intl';

import {useInjectReducer} from "../../utils/injectReducer";
import reducer from "./reducer";
import {createStructuredSelector} from "reselect";
import {makeSelectUserForm} from "./selectors";
import {changeEmail, changeName, changePassword, changeUserGroup} from "./actions";
import {connect} from "react-redux";
import {compose} from "redux";
import {createObject} from "../../containers/HomePage/actions";

import {ADMIN, FINALIZADOR, TRIADOR} from "../../containers/HomePage/constants";
import {Button, Col, Dropdown, InputGroup, Row} from "react-bootstrap";

const key = 'userForm';

function CreateUserForm({
                          userForm,
                          onChangeName,
                          onChangeEmail,
                          onChangePassword,
                          onChangeUserGroup,
                          onCreateObject,
                        }) {
  const userGroupList = [
    {id: 1, name: ADMIN},
    {id: 2, name: TRIADOR},
    {id: 3, name: FINALIZADOR}];

  useInjectReducer({key, reducer});

  const { name, email, password } = userForm;

  return (
    <div>
      <Row>
        <Col sm={12} md={6}>
          <label><FormattedMessage {...messages.nameLabel} /></label>
          <FormControlIntl required type="text" value={name} onChange={onChangeName} details={messages.nameDescription}/>
        </Col>
        <Col sm={12} md={6}>
          <label><FormattedMessage {...messages.emailLabel} /></label>
          <FormControlIntl type="email" value={email} onChange={onChangeEmail} details={messages.emailDescription}/>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6}>
          <label><FormattedMessage {...messages.passwordLabel} /></label>
          <FormControlIntl type="password" value={password} onChange={onChangePassword} details={messages.passwordDescription}/>
        </Col>
        <Col sm={12} md={6}>
          <Dropdown style={{marginTop:32}}>
            <Dropdown.Toggle block variant="outline-secondary" id="dropdown-basic">
              {userForm && userForm.userGroup ? userForm.userGroup : 'Selecione o grupo do usuário'}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {userGroupList.map(group =>
                <Dropdown.Item key={group.id} eventKey={group.id} onClick={onChangeUserGroup(group.id)}>{group.name}</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <br/>
      <Row>
        <Col>
          <InputGroup>
            <Button variant="success" onClick={onCreateObject}>Criar usuário</Button>
          </InputGroup>
        </Col>
      </Row>
    </div>
  );
}

CreateUserForm.propTypes = {
  userForm: PropTypes.object,
  onChangeName: PropTypes.func,
  onChangeEmail: PropTypes.func,
  onChangePassword: PropTypes.func,
  onChangeUserGroup: PropTypes.func,
  onCreateObject: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  userForm: makeSelectUserForm(),
});

function mapDispatchToProps(dispatch) {
  return {
    onCreateObject: () => {
      return dispatch(createObject());
    },
    onChangeName: evt => {
      if (evt && evt.target)
        return dispatch(changeName(evt.target.value))
    },
    onChangeEmail: evt => {
      if (evt && evt.target)
        return dispatch(changeEmail(evt.target.value))
    },
    onChangePassword: evt => {
      if (evt && evt.target)
        return dispatch(changePassword(evt.target.value))
    },
    onChangeUserGroup: (id) => evt => {
      if (evt && evt.target && evt.target.text)
        return dispatch(changeUserGroup(id, evt.target.text))
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
)(CreateUserForm);
