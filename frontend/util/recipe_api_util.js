export const fetchRecipes = () => (
  $.ajax({
    method: 'get',
    url: `api/recipes`,
  })
);

export const fetchRecipe = (recipeId) => (
  $.ajax({
    method: 'get',
    url: `api/recipes/${recipeId}`,
  })
);
