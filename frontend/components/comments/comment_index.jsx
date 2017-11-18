import React from 'react';
import Comment from './comment';
import {CommentFade} from '../transitions/fade';


class CommentIndex extends React.Component {

  render() {

    const comments = this.props.comments.filter((c) => {
      return !c.parent_id;
    }).map((comment) => {



      return <CommentFade key={comment.id} component={
          <Comment key={comment.id} comment={comment} currentUser ={this.props.currentUser}
            deleteComment={this.props.deleteComment} level={1} comments={this.props.comments}
            canReply={this.props.canReply}/>
        } />;
    });

    return (
      <div className="comments-index">
        <ul>
          {comments}
        </ul>
      </div>
    );
  }

}

export default CommentIndex;
