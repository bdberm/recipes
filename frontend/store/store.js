import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from '../middleware/thunk';
import RootReducer from '../reducers/root_reducer';


const configureStore = (preloadedState = {}) => (
  createStore(RootReducer, preloadedState, applyMiddleware(thunk))
);

export default configureStore;
