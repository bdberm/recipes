
json.extract! recipe, :id, :author_id, :title
json.minuteTime recipe.time_minutes
json.authorName recipe.author.name
