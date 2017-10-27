import React from 'react';
import {Route} from 'react-router-dom';
import GlobalNav from './global_nav/global_nav';
import Modal from './modal';
import MainPageIndexContainer from './recipe_index/main_page_index_container';
import RecipeShowContainer from './recipe_show/recipe_show_container';
import {ProtectedRoute} from '../util/routes_util';

const App = () => (
  <div>
    <Modal />
    <header>
      <GlobalNav />
    </header>
      <Route exact path="/" component={MainPageIndexContainer} />
      <ProtectedRoute path="/recipes/:recipeId" component={RecipeShowContainer} />


  </div>
);

export default App;
