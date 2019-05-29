/**
 *
 * CreateUserForm
 *
 */

import React, {memo} from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';
import messages from './messages';
import {Button, Col, Dropdown, InputGroup, Row} from "react-bootstrap";
import FormControlIntl from "../FormControlIntl";
import {ADMIN, FINALIZADOR, TRIADOR} from "../../containers/HomePage/constants";
import {useInjectReducer} from "../../utils/injectReducer";
import reducer from "./reducer";
import {createStructuredSelector} from "reselect";
import {
  makeSelectUserForm
} from "./selectors";
import {changeEmail, changeName, changePassword, changeUserGroup} from "./actions";
import {connect} from "react-redux";
import {compose} from "redux";

const key = 'userForm';

function CreateUserForm({
                          userForm,
                          onChangeName,
                          onChangeEmail,
                          onChangePassword,
                          onChangeUserGroup,
                        }) {
  const userGroupList = [ADMIN, TRIADOR, FINALIZADOR];

  useInjectReducer({key, reducer});

  return (
    <div>
      <Row>
        <Col sm={12} md={6}>
          <label><FormattedMessage {...messages.nameLabel} /></label>
          <FormControlIntl type="text" onChange={onChangeName} details={messages.nameDescription}/>
        </Col>
        <Col sm={12} md={6}>
          <label><FormattedMessage {...messages.emailLabel} /></label>
          <FormControlIntl type="email" onChange={onChangeEmail} details={messages.emailDescription}/>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6}>
          <label><FormattedMessage {...messages.passwordLabel} /></label>
          <FormControlIntl type="password" onChange={onChangePassword} details={messages.passwordDescription}/>
        </Col>
        <Col sm={12} md={6}>
          <Dropdown style={{marginTop:32}}>
            <Dropdown.Toggle block variant="outline-secondary" id="dropdown-basic">
              {userForm && userForm.userGroup ? userForm.userGroup : 'Select the user group'}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {userGroupList.map(group =>
                <Dropdown.Item key={group} eventKey={group} onClick={onChangeUserGroup}>{group}</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <br/>
      <Row>
        <Col>
          <InputGroup>
            <Button variant="primary">Create user</Button>
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
};

const mapStateToProps = createStructuredSelector({
  userForm: makeSelectUserForm(),
});

function mapDispatchToProps(dispatch) {
  return {
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
    onChangeUserGroup: evt => {
      if (evt && evt.target && evt.target.text)
        return dispatch(changeUserGroup(evt.target.text))
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
