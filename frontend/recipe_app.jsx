import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import {convertMinutesToTimeString} from './util/time_converter';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    store = configureStore({session: {currentUser: window.currentUser}});
  } else {
    store = configureStore();
  }
  window.convertMinutesToTimeString = convertMinutesToTimeString;
  window.store = store;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);

});
