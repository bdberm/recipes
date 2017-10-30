import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {comment_name: `${props.currentUser.name}`, body:""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then(
      this.props.removeErrors()
    );

  }
  handleInput(param) {
    return ((e) => {
      this.setState({[param]: e.target.value});
    });
  }

  render () {
    let errors = [];
    if (this.props.errors) {
      errors = this.props.errors.map((error, idx) => {
        return <li key={idx}>{error}</li>;
      });
    }
    const {currentUser} = this.props;
    return(
      <form className="comment-form">
        <input onChange={this.handleInput("comment_name")} type="text"
           value ={this.state.comment_name}></input>
        <textarea value={this.state.body} onChange={this.handleInput("body")} />
        <button onClick={this.handleSubmit}>Add Note</button>
        <ul>
          {errors}
        </ul>
      </form>
    );
  }
}

export default CommentForm;
