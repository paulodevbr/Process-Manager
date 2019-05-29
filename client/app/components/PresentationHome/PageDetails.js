import React from 'react';
import {ADMIN, FINALIZADOR, TRIADOR} from "../../containers/HomePage/constants";
import {FormattedMessage} from "react-intl";
import messages from './messages';

const PageDetails = ({user}) => {
  switch(user.userGroup){
    case ADMIN:
      return <FormattedMessage {...messages.adminDetails}/>;
    case TRIADOR:
      return <FormattedMessage {...messages.triadorDetails}/>;
    case FINALIZADOR:
      return <FormattedMessage {...messages.finalizadorDetails} />
    default:
      return "";
  }
};

export default PageDetails;
