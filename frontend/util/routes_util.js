import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';


const mapStateToProps = (state) => {
  return {
    loggedIn: state.session.currentUser ? true : false,

  };
};

const Protected = ({component: Component, path, loggedIn}) => (
  <Route path={path} render={(props) => (
    loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/?protected=true" />
    )
  )}/>
);

export const ProtectedRoute = withRouter(connect(mapStateToProps,null)(Protected));
