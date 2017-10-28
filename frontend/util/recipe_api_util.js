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

export const saveRecipe = (recipeId) => (
  $.ajax({
    method: 'post',
    url: `api/recipes/${recipeId}/save`,
  })
);

export const unsaveRecipe = (recipeId) => (
  $.ajax({
    method: 'delete',
    url: `api/recipes/${recipeId}/unsave`,
  })
);
