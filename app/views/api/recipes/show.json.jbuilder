ingredients = []
steps =[]
@recipe.ingredients.each do |ing|
  ingredients.push(ing.content)
end

@recipe.steps.each do |step|
  steps.push(step.content)
end


json.extract! @recipe, :id, :author_id, :title, :yield, :description
json.minuteTime :time_minutes
json.authorName @recipe.author.name
json.ingredients ingredients
json.steps steps

# json.author do
#   json.partial! '/api/users/user', user: @recipe.author
# end
