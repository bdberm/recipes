import React from 'react';
import {Route} from 'react-router-dom';
import GlobalNav from './global_nav/global_nav';
import Modal from './modal';

const App = () => (
  <div>
    <Modal />
    <header>
      <GlobalNav />
    </header>
  </div>
);

export default App;
