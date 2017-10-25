import {connect} from 'react-redux';
import SessionLinkButton from './session_link_button';
import {receiveModal} from '../../actions/ui_actions';


const mapDispatchToProps = (dispatch) => (
  {
    switchModal: ((Component) => () => dispatch(receiveModal(Component))),
  }
);

export default connect(null, mapDispatchToProps)(SessionLinkButton);
