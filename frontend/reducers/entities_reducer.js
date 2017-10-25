import { combineReducers } from 'redux';
import recipes from './recipes/recipes_reducer';

export default combineReducers({
  recipes,
});
