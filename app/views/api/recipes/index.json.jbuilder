@recipes.each do |recipe|
  json.set! recipe.id do
    json.partial! '/api/recipes/recipe', recipe: recipe
  end
end
