import React from 'react';
import Comment from './comment';

class CommentIndex extends React.Component {

  render() {

    const comments = this.props.comments.map((comment, idx) => {
      return <Comment key={idx} comment={comment} currentUser={this.props.currentUser}
        deleteComment={this.props.deleteComment}/>;
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
