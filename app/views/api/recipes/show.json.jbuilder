json.recipe do
  ingredients = []
  steps =[]
  @recipe.ingredients.each do |ing|
    ingredients.push(ing.content)
  end

  @recipe.steps.each do |step|
    steps.push(step.content)
  end


  json.extract! @recipe, :id, :author_id, :title, :yield, :description
  json.minuteTime @recipe.time_minutes
  json.authorName @recipe.author.name
  json.ingredients ingredients
  json.steps steps
  json.image_url asset_path(@recipe.image.url)
  json.commentIds @recipe.comment_ids
end

json.comments do
  @recipe.comments.order('comments.created_at desc').each do |comment|
    json.set! comment.id do
      json.partial! '/api/comments/comment', comment: comment
    end
  end
end
