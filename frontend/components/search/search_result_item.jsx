import React from 'react';

const SearchResultItem = ({recipe, classStr, history, clearSearch}) => (
  <div className={classStr} onClick={
      (e) => {
        history.push(`/recipes/${recipe.id}`);
        clearSearch();
      }
    }>
    <img src={recipe.image_url} />
    <p>{recipe.title}</p>
  </div>
);

export default SearchResultItem;
