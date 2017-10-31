import React from 'react';

const SearchResultItem = ({recipe, classStr}) => (
  <div className={classStr}>
    <img src={recipe.image_url} />
    <p>{recipe.title}</p>
  </div>
);

export default SearchResultItem;
