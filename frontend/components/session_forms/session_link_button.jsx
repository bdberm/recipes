import React from 'react';

const SessionLinkButton = ({component: Component, switchText, switchModal}) => (
  <button className = "session-link-button"
    onClick={switchModal(Component)}>{switchText}</button>
);

export default SessionLinkButton;
