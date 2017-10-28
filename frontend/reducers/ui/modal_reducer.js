import {RECEIVE_MODAL, RECEIVE_MODAL_WITH_RECIPE,
   REMOVE_MODAL} from '../../actions/ui_actions';

const _defaultState = {component: null, recipe: null};

const ModalReducer = (oldState = _defaultState, action) => {

  switch (action.type) {
    case RECEIVE_MODAL:
      return {component: action.component};
    case RECEIVE_MODAL_WITH_RECIPE:
      return {component: action.component, recipe: action.recipe};
    case REMOVE_MODAL:
      return _defaultState;
    default:
      return oldState;
  }
};

export default ModalReducer;
