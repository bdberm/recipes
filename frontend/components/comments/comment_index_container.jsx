import React from 'react';
import {connect} from 'react-redux';
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
  };
};

export default connect(mapStateToProps, null)(CommentIndex);
