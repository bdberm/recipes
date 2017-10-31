export const searchRecipes = (recipes, searchTerm) => (
  recipes.filter((recipe) => {
    return recipe.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
  })
);
