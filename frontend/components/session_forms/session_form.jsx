import React from 'react';
import merge from 'lodash/merge';
import SessionLinkButtonContainer from './session_link_button_container';
import {Redirect} from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: "", password: ""};

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.noScroll = this.noScroll.bind(this);
  }

  componentDidMount() {
    this.props.removeErrors();
    window.addEventListener('scroll', this.noScroll);
  }

  componentWillReceiveProps(newProps) {
    window.addEventListener('scroll', this.noScroll);

    if (newProps.currentUser) {
      this.props.removeModal();
    }
    if (newProps.formType !== this.props.formType) {
      this.props.removeErrors();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.noScroll);
  }

  noScroll() {
    window.scrollTo(0,0);
  }

  handleInput(stateKey) {
    return (e) => {
      this.setState({[stateKey]: e.target.value});
    };

  }

  handleSubmit(e) {
    e.preventDefault();
    const user = merge({}, this.state);
    this.props.submitAction(user);
  }

  handleClose() {

    this.props.removeModal();
    this.props.removeErrors();
    window.location.href = "/";
  }


  render() {
    let errors = [];
    if(this.props.errors) {
      errors = this.props.errors.map((error, idx) => {
        return <li key={idx}>{error}</li>;
      });
    }

    const switchButtonText = (this.props.formType === "Sign up")
    ? "Log in" : "Sign up";
    const headerText = (this.props.formType === "Sign up")
    ? "Sign up for Recipes" : "Log in to Recipes";
    const switchSentence = (this.props.formType === "Sign up")
    ? "Already have a Recipes account? " : "Don't have a Recipes account? ";


    return (
      <div className="session-form-container">
        <div className = "session-form-image"></div>

        <div className = "session-form-wrapper" >
          <span className="modal-close" onClick={this.handleClose}>
            &times;</span>
          <h3>{headerText}</h3>
          <p>{switchSentence}
            <SessionLinkButtonContainer
              component={this.props.switchComp}
              switchText= {switchButtonText}
            />
            .</p>

          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder = "Email"
              onChange={this.handleInput("email")} />
            <input type="password" placeholder = "Password"
              onChange={this.handleInput("password")} />
            <input type="submit" value = {this.props.formType} />
          </form>
          <ul>
            {errors}
          </ul>
        </div>
      </div>
    );
  }
}

export default SessionForm;
