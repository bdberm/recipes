import React from 'react';
import {FormFade} from '../transitions/fade';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {comment_name: `${props.currentUser.name}`, body:"",
     show: false, showForm: false, parent_id: props.parentId};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.toggleShowForm = this.toggleShowForm.bind(this);
  }

  toggleShowForm(e){
    this.setState({showForm: !this.state.showForm});
  }

  handleSubmit(e) {
    e.preventDefault();
    window.promise = this.props.action(this.state).then(
      (() => {
        this.props.removeErrors();
        this.setState({body:""});
        window.setTimeout(this.toggleShowForm, 1500);
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
    const {showForm, comment_name, body} = this.state;

    const inputButtonClass = (this.props.parentId) ? "add-comment-button hide"
    : "add-comment-button";

    const replyButtonClass = (this.props.parentId) ? "reply-comment-button"
    : "reply-comment-button hide";

    return(
      <div>
        <FormFade in={Boolean(!showForm)} component={
            <button className={inputButtonClass}
              onClick={this.toggleShowForm}>Share a note with other cooks or leave a private note</button>}
          />

        <button className={replyButtonClass}
          onClick={this.toggleShowForm}>Reply</button>

        <FormFade in={Boolean(showForm)}  component={
            <form className="comment-form">
              <input onChange={this.handleInput("comment_name")} type="text"
                value ={comment_name}></input>
              <textarea value={body} onChange={this.handleInput("body")} />
              <div><button onClick={this.handleSubmit}>Add Note</button></div>
              <ul>
                {errors}
              </ul>
            </form>
          }/>
        </div>
    );
  }
}

export default CommentForm;
