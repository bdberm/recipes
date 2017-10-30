import {RECEIVE_COMMENT_ERRORS, REMOVE_COMMENT_ERRORS}
 from '../../actions/comment_actions';

const _defaultState = [];

const CommentErrorsReducer = (oldState = _defaultState, action) => {
  switch (action.type) {
    case RECEIVE_COMMENT_ERRORS:
      return action.errors.responseJSON;
    case REMOVE_COMMENT_ERRORS:
      return _defaultState;
    default:
      return oldState;

  }
};

export default CommentErrorsReducer;
