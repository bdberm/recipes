import {RECEIVE_MODAL, REMOVE_MODAL} from '../../actions/ui_actions';

const _defaultState = {};

const ModalReducer = (oldState = _defaultState, action) => {
  switch (action.type) {
    case RECEIVE_MODAL:
      return {component: action.component};
    case REMOVE_MODAL:
      return {};
    default:
      return oldState;
  }
};
