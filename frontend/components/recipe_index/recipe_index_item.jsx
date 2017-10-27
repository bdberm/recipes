import React from 'react';
import {Link} from 'react-router-dom';
import {convertMinutesToTimeString} from '../../util/time_converter';
import RecipeIndexItemSaveContainer from './recipe_index_item_save_container';


const RecipeIndexItem = ({recipe}) => (
  <Link to={`/recipes/${recipe.id}`}>
  <div className="recipe-index-item">
    <img className="recipe-index-image" src={recipe.image_url} />
    <div className="recipe-index-info">
      <h3>{recipe.title}</h3>
      <h4>By {recipe.authorName}</h4>
      <h5>{convertMinutesToTimeString(recipe.minuteTime)}</h5>
    </div>
    <RecipeIndexItemSaveContainer recipe={recipe} />
    
  </div>
  </Link>
);

export default RecipeIndexItem;
