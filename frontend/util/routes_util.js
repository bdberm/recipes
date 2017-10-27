import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import {receiveModal} from '../actions/ui_actions';
import LoginFormContainer from '../components/session_forms/login_form_container';


const mapStateToProps = (state) => {
  return {
    loggedIn: state.session.currentUser ? true : false,

  };
};

const mapDispatchToProps = (dispatch) => (
  {
    launchLoginForm: (() => dispatch(receiveModal(LoginFormContainer))),
  }
);
//
// const Protected = ({component: Component, path, loggedIn}) => (
//   <Route path={path} render={(props) => (
//     loggedIn ? (
//       <Component {...props} />
//     ) : (
//       <Redirect to="/" />
//     )
//   )}/>
// );

class ProtectedComponent extends React.Component {

  componentDidMount() {

    if (!this.props.loggedIn) {
      this.props.launchLoginForm();
    }
  }

  componentWillReceiveProps() {
    if (!this.props.loggedIn) {
      this.props.launchLoginForm();
    }
  }


  render () {
    const {component: Component, path} = this.props;
    return (
      <Component {...this.props} />
    );
  }
}

// const Protected = ({component: Component, path, loggedIn, launchLoginForm}) => (
const Protected = (protectedProps) => {
  const { component: Component, path, loggedIn } = protectedProps;
  return(
    <Route path={path} render={(props) => (
      loggedIn ? (
        <Component  {...props} />
      ) : (
        <ProtectedComponent {...Object.assign({}, protectedProps, props)} />
      )
    )}/>
  );
};





export const ProtectedRoute = withRouter(connect(mapStateToProps, mapDispatchToProps)(Protected));
