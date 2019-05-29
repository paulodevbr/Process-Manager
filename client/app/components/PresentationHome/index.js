import React, {memo} from 'react';
import {Button, Jumbotron} from "react-bootstrap";
import PageTitle from "./PageTitle";
import PageDetails from "./PageDetails";

const PresentationHome = ({login}) => {
  if(login){
    return (
      <Jumbotron>
        <h1><PageTitle user={login}/></h1>
        <p><PageDetails user={login} /></p>
      </Jumbotron>
    );
  }

  return <div></div>;
};


 export default memo(PresentationHome);
