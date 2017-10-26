import React from 'react';

const RecipeIndexItem = ({recipe}) => (
  <div className="recipe-index-item">
    <div className="recipe-index-image"></div>
    <div className="receipe-index-info">
      <h3>{recipe.title}</h3>
      <h4>By {recipe.authorName}</h4>
    </div>
    <button className="save-from-index"></button>
  </div>
);

export default RecipeIndexItem;
