json.recipe do
  json.id @recipe.id
  json.commentIds @recipe.comment_ids
end


json.comment do
  json.partial! '/api/comments/comment', comment: @comment
end
