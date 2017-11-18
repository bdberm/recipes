import React from 'react';
import {calcTimeSinceCreate} from '../../util/time_converter';
import {CommentFade} from '../transitions/fade';


const Comment = ({comment, currentUser, deleteComment, level, comments, canReply}) => {
  let comp;

  if (currentUser.commentIds.includes(comment.id)) {
    comp = <button onClick={() => deleteComment(comment.id)}>Delete</button>;
  }


  const children = comments.filter((c) => {
    return c.parent_id === comment.id;
  });

  const childComments = children.map((c) => {
    return <Comment key={c.id} comment={c} currentUser={currentUser}
      deleteComment={deleteComment} comments={comments} canReply={false}
       />;
  });

  const replyButton = (canReply) ?
    <button className="reply-button">Reply</button> : <div></div>;


  return (
    <div className="comment">
      <div className="comment-header">
        <h3>{comment.comment_name}</h3>
        <h3>{calcTimeSinceCreate(comment.created_at)}</h3>
        {comp}
      </div>
      <p>{comment.body}</p>
      {replyButton}
      <ul className="child-index">
        {childComments}
      </ul>
    </div>
  );
};



export default Comment;
