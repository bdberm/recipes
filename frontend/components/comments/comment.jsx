import React from 'react';
import {calcTimeSinceCreate} from '../../util/time_converter';
import {CommentFade} from '../transitions/fade';


const Comment = ({comment, currentUser, deleteComment, level, comments}) => {
  let comp;

  if (currentUser.commentIds.includes(comment.id)) {
    comp = <button onClick={() => deleteComment(comment.id)}>Delete</button>;
  }
  

  const children = comments.filter((c) => {
    return c.parent_id === comment.id;
  });

  const childComments = children.map((c) => {
    return <Comment key={c.id} comment={c} currentUser={currentUser}
      deleteComment={deleteComment} comments={comments}
       />;
  });



  return (
    <div className="comment">
      <div className="comment-header">
        <h3>{comment.comment_name}</h3>
        <h3>{calcTimeSinceCreate(comment.created_at)}</h3>
        {comp}
      </div>
      <p>{comment.body}</p>
      <ul className="child-index">
        {childComments}
      </ul>
    </div>
  );
};



export default Comment;
