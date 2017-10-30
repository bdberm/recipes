import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';
export const REMOVE_COMMENT_ERRORS = 'REMOVE_COMMENT_ERRORS';

const receiveComment = (payload) => (
  {
    type: RECEIVE_COMMENT,
    payload
  }
);


const removeComment = (payload) => (
  {
    type: REMOVE_COMMENT,
    payload
  }
);

const receiveCommentErrors = (errors) => (
  {
    type: RECEIVE_COMMENT_ERRORS,
    errors
  }
);

export const removeCommentErrors = () => (
  {
    type: REMOVE_COMMENT_ERRORS
  }
);


export const createComment = (comment, recipeId) => (dispatch) => (
  CommentAPIUtil.createComment(comment, recipeId).then(
    ((response) => dispatch(receiveComment(response))),
    ((errors) => dispatch(receiveCommentErrors(errors)))
  )
);

export const deleteComment = (commentId) => (dispatch) => (
  CommentAPIUtil.deleteComment(commentId).then(
    ((response) => dispatch(removeComment(response))),
    ((errors) => dispatch(receiveCommentErrors(errors)))
  )
);
