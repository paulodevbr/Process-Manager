/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, {memo} from 'react';
import PropTypes from 'prop-types';
import reducer from './reducer';
import saga from './saga';
import PresentationHome from "../../components/PresentationHome";
import ObjectForm from "../../components/ObjectForm";
import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import {useInjectReducer} from 'utils/injectReducer';
import {useInjectSaga} from 'utils/injectSaga';
import makeSelectLoginPage from "../LoginPage/selectors";
import {makeSelectObjects} from './selectors';
import {ListGroup} from "react-bootstrap";
import UserItem from "../../components/UserItem";
import ProcessItem from "../../components/ProcessItem/Loadable";
import {ADMIN, FINALIZADOR, TRIADOR} from "./constants";
import {deleteObject, loadList} from './actions';


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
      (<ListGroup style={{marginTop:16, maxHeight: 500, overflowY: 'auto'}}>{
        objects.map(obj => {
          switch(login.userGroup){
            case ADMIN:
              return (<ListGroup.Item key={obj.email}><UserItem user={obj} login={login} onDelete={onDeleteObject} /></ListGroup.Item>);
            case TRIADOR:
              return (<ListGroup.Item key={obj.title}><ProcessItem process={obj} login={login} onDelete={onDeleteObject} /></ListGroup.Item>);
            case FINALIZADOR:
              return (<ListGroup.Item key={obj.id}><ProcessItem process={obj} login={login} onDelete={onDeleteObject} /></ListGroup.Item>);
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
