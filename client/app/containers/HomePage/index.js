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
import {loadList} from './actions';
import {makeSelectObjects} from './selectors';
import reducer from './reducer';
import saga from './saga';
import {ListGroup} from "react-bootstrap";
import UserItem from "../../components/UserItem";
import makeSelectLoginPage from "../LoginPage/selectors";
import {ADMIN, FINALIZADOR, TRIADOR} from "./constants";
import PresentationHome from "../../components/PresentationHome";

const key = 'home';

export function HomePage({ user,
                           objects,
                           loading,
                           error,
                           repos,
                           loadListFunc,
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
      <PresentationHome user={user}/>
      {objects &&
      (<ListGroup variant="flush">{
        objects.map(obj => {
          switch(user.userGroup){
            case ADMIN:
              return (<ListGroup.Item key={obj.email}><UserItem user={obj} /></ListGroup.Item>);
            case TRIADOR:
              return (<ListGroup.Item key={obj.email}><UserItem user={obj} /></ListGroup.Item>);
            case FINALIZADOR:
              return (<ListGroup.Item key={obj.email}><UserItem user={obj} /></ListGroup.Item>);
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
};

const mapStateToProps = createStructuredSelector({
  objects: makeSelectObjects(),
  user: makeSelectLoginPage(),
});

export function mapDispatchToProps(dispatch) {
  return {
    loadListFunc: () => dispatch(loadList()),
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
