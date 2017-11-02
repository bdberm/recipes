import React from 'react';
import {connect} from 'react-redux';
import {deleteComment} from '../../actions/comment_actions';
import CommentIndex from './comment_index';

const mapStateToProps = (state, ownProps) => {

  let comments = [];
  let currentUser = {commentIds:[]};
  if (state.entities.comments && ownProps.commentIds)  {
    comments = Object.values(state.entities.comments).filter((comment) => {
      return ownProps.commentIds.includes(comment.id);
    });
  }

  comments.sort((comment1, comment2) => {

    const time1 = new Date(comment1.created_at);
    const time2 = new Date(comment2.created_at);

    if (time1 > time2) {
      return 1;
    } else if (time1 < time2) {
      return -1;
    } else {
      return 0;
    }
  });

  if (state.session.currentUser) {
    currentUser = state.session.currentUser;
  }

  return {
    comments,
    currentUser
  };
};

const mapDispatchToProps = (dispatch) => (
  {
    deleteComment: ((commentId) => dispatch(deleteComment(commentId))),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);
