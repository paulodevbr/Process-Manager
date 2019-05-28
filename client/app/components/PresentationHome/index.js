import React, {memo} from 'react';
import {Button, Jumbotron} from "react-bootstrap";
import PageTitle from "./PageTitle";
import PageDetails from "./PageDetails";
import PageActionButton from "./PageActionButton";

const PresentationHome = ({user}) => {
    return (
      <Jumbotron>
        <h1><PageTitle user={user}/></h1>
        <p><PageDetails user={user} /></p>
        <PageActionButton user={user} />
      </Jumbotron>
    );
}

export default PresentationHome;
