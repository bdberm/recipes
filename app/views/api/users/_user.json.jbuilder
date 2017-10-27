if user.name
  n = user.name
else
  n= ""
end

# savedRecipeIds = user.saved_recipe_ids


json.extract! user, :email, :id
json.name n
json.savedRecipeIds user.saved_recipe_ids
