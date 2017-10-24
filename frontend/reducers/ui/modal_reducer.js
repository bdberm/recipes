import {RECEIVE_MODAL, REMOVE_MODAL} from '../../actions/ui_actions';

const _defaultState = {component: null};

const ModalReducer = (oldState = _defaultState, action) => {
  switch (action.type) {
    case RECEIVE_MODAL:
      return {component: action.component};
    case REMOVE_MODAL:
      return _defaultState;
    default:
      return oldState;
  }
};

export default ModalReducer;
