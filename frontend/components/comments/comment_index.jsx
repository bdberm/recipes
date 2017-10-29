import React from 'react';
import Comment from './comment';

class CommentIndex extends React.Component {

  render() {

    const comments = this.props.comments.map((comment, idx) => {
      return <Comment key={idx} comment={comment} />;
    });



    return (
      <ul>
        {comments}
      </ul>
    );
  }

}

export default CommentIndex;
