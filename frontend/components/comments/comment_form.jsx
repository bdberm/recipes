import React from 'react';
import {Transition} from 'react-transition-group';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {comment_name: `${props.currentUser.name}`, body:""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }



  handleSubmit(e) {
    e.preventDefault();
    window.promise = this.props.action(this.state).then(
      (() => {
        this.props.removeErrors();
        this.setState({body:""});
      })
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
        <div><button onClick={this.handleSubmit}>Add Note</button></div>
        <ul>
          {errors}
        </ul>
      </form>
    );
  }
}

export default CommentForm;
