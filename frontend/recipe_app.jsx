import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import {createComment, deleteComment} from './actions/comment_actions';



document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    store = configureStore({session: {currentUser: window.currentUser}});
  } else {
    store = configureStore();
  }
  window.store = store;
  window.createComment = createComment;
  window.deleteComment = deleteComment;


  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);

});
