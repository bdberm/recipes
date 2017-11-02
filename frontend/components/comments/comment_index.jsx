import React from 'react';
import Comment from './comment';
import {CommentFade} from '../transitions/fade';


class CommentIndex extends React.Component {

  render() {

    // const comments = this.props.comments.map((comment, idx) => {
    //   return <Comment key={idx} comment={comment} currentUser={this.props.currentUser}
    //     deleteComment={this.props.deleteComment}/>;
    // });

    const comments = this.props.comments.map((comment) => {
      return <CommentFade component={
          <Comment key={comment.id} comment={comment} currentUser ={this.props.currentUser}
            deleteComment={this.props.deleteComment}/>
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
