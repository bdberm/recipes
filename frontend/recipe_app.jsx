import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import * as RatingAPIUtil from './util/rating_api_util';



document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    store = configureStore({session: {currentUser: window.currentUser}});
  } else {
    store = configureStore();
  }
  window.store = store;
  window.createRating = RatingAPIUtil.createRating;
  window.deleteRating = RatingAPIUtil.deleteRating;
  window.updateRating = RatingAPIUtil.updateRating;



  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);

});
