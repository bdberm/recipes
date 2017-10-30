import {connect} from 'react-redux';
import SessionButton from './session_button';
import {logout} from '../../actions/session_actions';
import {receiveModal} from '../../actions/ui_actions';
import LoginFormContainer from '../session_forms/login_form_container';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state) => {
  let buttonType;
  let loggedIn;

  if (state.session.currentUser) {
    buttonType = "Log Out";
    loggedIn = true;
  } else {
    buttonType = "Log In";
    loggedIn = false;
  }

  return {buttonType, loggedIn};
};

const mapDispatchToProps = (dispatch) => (
  {
    logout: (() => dispatch(logout())),
    launchSignInModal: (() => dispatch(receiveModal(LoginFormContainer))),
  }

);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionButton));
