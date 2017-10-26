import React from 'react';
import {Route} from 'react-router-dom';
import GlobalNav from './global_nav/global_nav';
import Modal from './modal';
import MainPageIndexContainer from './recipe_index/main_page_index_container';

const App = () => (
  <div>
    <Modal />
    <header>
      <GlobalNav />
      <Route exact path="/" component={MainPageIndexContainer} />
    </header>
  </div>
);

export default App;
