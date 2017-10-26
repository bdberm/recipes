import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import {signup, login, logout} from './actions/session_actions';
import {fetchRecipes, fetchRecipe} from './actions/recipe_actions';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    store = configureStore({session: {currentUser: window.currentUser}});
  } else {
    store = configureStore();
  }

  window.store = store;
  window.login = login;
  window.fetchRecipes = fetchRecipes;
  window.fetchRecipe = fetchRecipe;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);

});
