import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import {createRating, deleteRating, updateRating} from './actions/rating_actions';



document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    store = configureStore({session: {currentUser: window.currentUser}});
  } else {
    store = configureStore();
  }
  window.store = store;
  window.createRating = createRating;
  window.deleteRating = deleteRating;
  window.updateRating = updateRating;



  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);

});
