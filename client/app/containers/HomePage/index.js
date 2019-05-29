/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';

import {useInjectReducer} from 'utils/injectReducer';
import {useInjectSaga} from 'utils/injectSaga';
import {deleteObject, loadList} from './actions';
import {makeSelectObjects} from './selectors';
import reducer from './reducer';
import saga from './saga';
import {ListGroup} from "react-bootstrap";
import UserItem from "../../components/UserItem";
import makeSelectLoginPage from "../LoginPage/selectors";
import {ADMIN, FINALIZADOR, TRIADOR} from "./constants";
import PresentationHome from "../../components/PresentationHome";
import CreateUserForm from "../../components/CreateUserForm";
import ObjectForm from "../../components/ObjectForm";

const key = 'home';

export function HomePage({ login,
                           objects,
                           loading,
                           error,
                           repos,
                           loadListFunc,
                           onDeleteObject,
                         }) {
  useInjectReducer({key, reducer});
  useInjectSaga({key, saga});

  const reposListProps = {
    loading,
    error,
    repos,
  };

  if (!objects && !loading) {
    loadListFunc();
  }

  return (
    <div>
      <PresentationHome login={login}/>
      <ObjectForm login={login}/>
      {objects &&
      (<ListGroup style={{marginTop:16}}>{
        objects.map(obj => {
          switch(login.userGroup){
            case ADMIN:
              return (<ListGroup.Item key={obj.email}><UserItem user={obj} login={login} onDelete={onDeleteObject} /></ListGroup.Item>);
            case TRIADOR:
              return <div></div>;
            case FINALIZADOR:
              return <div></div>;
            default:
              return (<div></div>);
          }
        }
        )
      }
      </ListGroup>)
      }
    </div>

  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  loadListFunc: PropTypes.func,
  objects: PropTypes.array,
  onDeleteObject: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  objects: makeSelectObjects(),
  login: makeSelectLoginPage(),
});

export function mapDispatchToProps(dispatch) {
  return {
    loadListFunc: () => dispatch(loadList()),
    onDeleteObject: (id) => () => dispatch(deleteObject(id)),
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
)(HomePage);
