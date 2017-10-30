import React from 'react';
import Comment from './comment';

class CommentIndex extends React.Component {

  render() {

    const comments = this.props.comments.map((comment, idx) => {
      return <Comment key={idx} comment={comment} />;
    });

    return (
      <div className="comments-index">
        <h3>Cooking Notes</h3>
        <ul>
          {comments}
        </ul>
      </div>
    );
  }

}

export default CommentIndex;
