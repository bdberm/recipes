import {connect} from 'react-redux';
import SessionButton from './session_button';
import {logout} from '../../actions/session_actions';
import {receiveModal} from '../../actions/ui_actions';


const mapStateToProps = (state) => {
  let buttonType;
  let currentUserId;
  if (state.session.currentUser) {
    buttonType = "Log In";
    currentUserId = state.session.currentUser.id;
  } else {
    buttonType = "Log Out";
  }

  return {buttonType};
};

const mapDispatchToProps = (dispatch) => {

};
