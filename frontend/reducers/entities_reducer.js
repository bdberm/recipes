import { combineReducers } from 'redux';
import recipes from './recipes/recipes_reducer';
import comments from './comments/comments_reducer';
import ratings from './ratings/ratings_reducer';

export default combineReducers({
  recipes,
  comments,
});
