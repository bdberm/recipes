import React from 'react';
import SessionButtonContainer from './session_button_container';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const mapStateToProps = (state) => (
  {
    loggedInClass: state.session.currentUser ? " loggedIn" : "",
  }
);


// <div className ="logo">
//
// </div>

const GlobalNav = ({loggedInClass}) => (
  <nav className="global-nav">
    <Link to="/" className="logo"></Link>
    <div className = {`search-container${loggedInClass}`}>What Would You Like To Cook?</div>
    <ul className={`top-right-buttons${loggedInClass}`}>
      <button className = {`recipe-box-button${loggedInClass}`}>Recipe Box</button>
      <SessionButtonContainer />
    </ul>
  </nav>
);

export default connect(mapStateToProps, null)(GlobalNav);
