import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import {saveRecipe, unsaveRecipe} from './actions/recipe_actions';


document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    store = configureStore({session: {currentUser: window.currentUser}});
  } else {
    store = configureStore();
  }
  window.store = store;
  window.saveRecipe = saveRecipe;
  window.unsaveRecipe = unsaveRecipe;


  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);

});
