import React from 'react';
import {ADMIN} from "../../containers/HomePage/constants";
import {FormattedMessage} from "react-intl";
import messages from "./messages";
import CreateUserForm from "../CreateUserForm";

const mapUsers = {
  ADMIN: {
    title: <FormattedMessage {...messages.adminFormTitle}/>,
    form: <CreateUserForm />
  },
  TRIADOR: {
    title: <FormattedMessage {...messages.triadorFormTitle}/>,
    form: <div></div>
    },
};

export default mapUsers;
