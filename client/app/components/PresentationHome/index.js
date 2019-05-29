import React, {memo} from 'react';
import {Button, Jumbotron} from "react-bootstrap";
import PageTitle from "./PageTitle";
import PageDetails from "./PageDetails";

const PresentationHome = ({user}) => {
  if(user){
    return (
      <Jumbotron>
        <h1><PageTitle user={user}/></h1>
        <p><PageDetails user={user} /></p>
      </Jumbotron>
    );
  }

  return <div></div>;
};


 export default memo(PresentationHome);
