import React from 'react';
import {Link} from 'react-router-dom';
import {convertMinutesToTimeString} from '../../util/time_converter';

const RecipeIndexItem = ({recipe}) => (
  <Link to={`/recipes/${recipe.id}`}>
  <div className="recipe-index-item">
    <div className="recipe-index-image"></div>
    <div className="recipe-index-info">
      <h3>{recipe.title}</h3>
      <h4>By {recipe.authorName}</h4>
      <h5>{convertMinutesToTimeString(recipe.minuteTime)}</h5>
    </div>
    <button className="save-from-index"></button>
  </div>
  </Link>
);

export default RecipeIndexItem;
