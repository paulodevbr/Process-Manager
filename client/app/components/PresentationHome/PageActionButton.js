import React from 'react';
import {ADMIN, FINALIZADOR, TRIADOR} from "../../containers/HomePage/constants";
import {FormattedMessage} from "react-intl";
import messages from './messages';
import {Button} from "react-bootstrap";

const PageActionButton = ({user}) => {
  switch(user.userGroup){
    case ADMIN:
      return <Button variant="primary"><FormattedMessage {...messages.adminButton}/></Button>;
    case TRIADOR:
      return <Button variant="primary"><FormattedMessage {...nessages.triadorButton}/></Button>;
    case FINALIZADOR:
      return <div></div>;
  }
};

export default PageActionButton;
