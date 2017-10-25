import React from 'react';
import {connect} from 'react-redux';
import {login, removeSessionErrors} from '../../actions/session_actions';
import {removeModal, receiveModal} from '../../actions/ui_actions';
import SessionForm from './session_form.jsx';
import SignupFormContainer from './signup_form_container';

const mapStateToProps = (state) =>(
  {
    errors: state.errors.session,
    currentUser: state.session.currentUser,
    formType: "Log in",
    switchComp: SignupFormContainer,
 }
);


const mapDispatchToProps = (dispatch) => (
  {
    submitAction: ((user) => dispatch(login(user))),
    removeModal: (() => dispatch(removeModal())),
    removeErrors: (() => dispatch(removeSessionErrors())),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
