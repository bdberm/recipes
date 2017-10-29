import React from 'react';
import {connect} from 'react-redux';
import CommentIndex from './comment_index';

const mapStateToProps = (state, ownProps) => (
  {
    comments: Object.values(state.comments).filter((comment) => {
      return ownProps.commentIds.includes(comment.id);
    })
  }
);

export default connect(mapStateToProps, null)(CommentIndex);
