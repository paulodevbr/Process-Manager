import React, {memo} from 'react';
import {Button, Jumbotron} from "react-bootstrap";
import PageTitle from "./PageTitle";
import PageDetails from "./PageDetails";
import {Link} from "react-router-dom";
import mapUsers from "../ObjectForm/MapUsers";
import {TRIADOR} from "../../containers/HomePage/constants";

const PresentationHome = ({login}) => {
  if (login) {
    return (
      <Jumbotron style={{maxHeight: 200}}>
        <h3><PageTitle user={login}/></h3>
        <p><PageDetails user={login}/></p>
        {login.userGroup === TRIADOR && (
          <Link to='process/create'><Button variant="success">{mapUsers[login.userGroup].title}</Button></Link>
        )}
      </Jumbotron>
    );
  }

  return <div></div>;
};


export default memo(PresentationHome);
