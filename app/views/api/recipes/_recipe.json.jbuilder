
json.extract! recipe, :id, :author_id, :title
json.minuteTime recipe.time_minutes
json.authorName recipe.author.name
json.image_url asset_path(recipe.image.url)
