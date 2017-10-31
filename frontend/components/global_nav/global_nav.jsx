import React from 'react';
import SessionButtonContainer from './session_button_container';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import SearchBarContainer from '../search/search_bar_container';

const mapStateToProps = (state) => (
  {
    loggedInClass: state.session.currentUser ? " loggedIn" : "",
  }
);




const GlobalNav = ({loggedInClass}) => (
  <nav className="global-nav">
    <Link to="/" className="logo"></Link>
    <SearchBarContainer classStr={`search-container${loggedInClass}`} />
  
    <ul className={`top-right-buttons${loggedInClass}`}>
    <button className = {`recipe-box-button${loggedInClass}`}>
        <Link to="/recipe-box">
          Recipe Box
        </Link>
    </button>
      <SessionButtonContainer />
    </ul>
  </nav>
);

export default connect(mapStateToProps, null)(GlobalNav);
