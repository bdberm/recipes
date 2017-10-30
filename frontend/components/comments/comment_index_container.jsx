import React from 'react';
import {connect} from 'react-redux';
import {deleteComment} from '../../actions/comment_actions';
import CommentIndex from './comment_index';

const mapStateToProps = (state, ownProps) => {

  let comments = [];
  if (state.entities.comments && ownProps.commentIds)  {
    comments = Object.values(state.entities.comments).filter((comment) => {
      return ownProps.commentIds.includes(comment.id);
    });
  }

  return {
    comments,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => (
  {
    deleteComment: ((commentId) => dispatch(deleteComment(commentId))),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);
