import React from 'react';
import {connect} from 'react-redux';
import {createComment, removeCommentErrors} from '../../actions/comment_actions';
import CommentForm from './comment_form';

const mapStateToProps = (state) => {
  const currentUser = state.session.currentUser || {name:""};

  return {
    currentUser,
    errors: state.errors.comments
  };
};

const mapDispatchToProps = (dispatch, ownProps) => (
  {
    action: ((comment) => dispatch(createComment(comment, ownProps.recipeId))),
    removeErrors: (() => dispatch(removeCommentErrors())),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
