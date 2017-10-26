import React from 'react';

class SessionButton extends React.Component {

  render () {

    const action = this.props.loggedIn ?
    this.props.logout : this.props.launchSignInModal;


    return (
      <button className = {`session-button`}
        onClick = {action}> {this.props.buttonType}</button>
    );


  }

}

export default SessionButton;
