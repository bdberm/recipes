import React from 'react';

class SessionButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (this.props.loggedIn) {
      this.props.history.push("/");
      this.props.logout();
    } else {
      this.props.launchSignInModal();
    }
  }

  render () {


    return (
      <button className = {`session-button`}
        onClick = {this.handleClick}> {this.props.buttonType}</button>
    );


  }

}

export default SessionButton;
