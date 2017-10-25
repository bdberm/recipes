import React from 'react';
import {connect} from 'react-redux';
import {signup} from '../../actions/session_actions';
import {removeModal, receiveModal} from '../../actions/ui_actions';
import SessionForm from './session_form';
import LoginFormContainer from './login_form_container';

const mapStateToProps = (state) =>(
  {
    errors: state.errors.session,
    currentUser: state.session.currentUser,
    formType: 'Sign up',
    switchComp: LoginFormContainer,
 }
);


const mapDispatchToProps = (dispatch) => (
  {
    submitAction: ((user) => dispatch(signup(user))),
    removeModal: (() => dispatch(removeModal())),

  }
);

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
