import React from 'react';
import {FormattedMessage} from "react-intl";
import messages from './messages';
import {ADMIN, FINALIZADOR, TRIADOR} from "../../containers/HomePage/constants";

const PageTitle = ({user}) => {
  switch(user.userGroup){
    case ADMIN:
      return <FormattedMessage {...messages.adminTitle}/>;
    case TRIADOR:
      return <FormattedMessage {...messages.triadorTitle}/>;
    case FINALIZADOR:
      return <FormattedMessage {...messages.finalizadorTitle} />
    default:
      return <div></div>
  }
};

export default PageTitle;
