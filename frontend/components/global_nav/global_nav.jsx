import React from 'react';
import SessionButtonContainer from './session_button_container';
import {connect} from 'react-redux';

const mapStateToProps = (state) => (
  {
    loggedInClass: state.session.currentUser ? " loggedIn" : "",
  }
);


const GlobalNav = ({loggedInClass}) => (
  <nav className="global-nav">
    <div className ="logo">LOGO</div>
    <div className = {`search-container${loggedInClass}`}>What Would You Like To Cook?</div>

    <button className = {`recipe-box-button${loggedInClass}`}>Recipe Box</button>
    <SessionButtonContainer loggedInClass = {loggedInClass} />
  </nav>
);

export default connect(mapStateToProps, null)(GlobalNav);
