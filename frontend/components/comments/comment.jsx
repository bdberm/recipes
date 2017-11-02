import React from 'react';
import {calcTimeSinceCreate} from '../../util/time_converter';

const Comment = ({comment, currentUser, deleteComment}) => {
  let comp;

  if (currentUser.commentIds.includes(comment.id)) {
    comp = <button onClick={() => deleteComment(comment.id)}>Delete</button>;
  }

  return (
    <div className="comment">
      <div className="comment-header">
        <h3>{comment.comment_name}</h3>
        <h3>{calcTimeSinceCreate(comment.created_at)}</h3>
        {comp}
      </div>
      <p>{comment.body}</p>
    </div>
  );
};



export default Comment;
