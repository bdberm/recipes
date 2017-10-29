import React from 'react';

const Comment = ({comment}) => (
  <div>
    <h3>{comment.comment_name}</h3>
    <p>{comment.body}</p>
  </div>
);

export default Comment;
