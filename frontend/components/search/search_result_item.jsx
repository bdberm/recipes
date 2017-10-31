import React from 'react';

const SearchResultItem = ({recipe, classStr, history}) => (
  <div className={classStr} onClick={
      (e) => {history.push(`/recipes/${recipe.id}`);}
    }>
    <img src={recipe.image_url} />
    <p>{recipe.title}</p>
  </div>
);

export default SearchResultItem;
