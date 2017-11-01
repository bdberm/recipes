json.recipe do
  json.id @recipe.id
  json.ratingIds @recipe.rating_ids
end


json.rating do
  json.partial! '/api/ratings/rating', rating: @rating
end
