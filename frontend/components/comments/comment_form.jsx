import React from 'react';
import {FormFade} from '../transitions/fade';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {comment_name: `${props.currentUser.name}`, body:"",
     show: false, showForm: false};
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

    return(
      <div>
        <FormFade in={Boolean(!showForm)} component={
            <button className="add-comment-button"
              onClick={this.toggleShowForm}>Share a note with other cooks or leave a private note</button>
          }
          />
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
