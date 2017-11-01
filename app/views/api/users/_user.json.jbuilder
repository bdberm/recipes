if user.name
  n = user.name
else
  n= ""
end

# savedRecipeIds = user.saved_recipe_ids


json.extract! user, :email, :id
json.name n
json.savedRecipeIds user.saved_recipe_ids
json.commentIds user.comment_ids
json.ratedRecipeIds user.rated_recipe_ids
