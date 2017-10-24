import React from 'react';
import SessionButtonContainer from './session_button_container';

const GlobalNav = () => (
  <nav className="global-nav">
    <div className ="logo">LOGO</div>
    <div className = "search-container"></div>
    <SessionButtonContainer />
  </nav>
);

export default GlobalNav;
