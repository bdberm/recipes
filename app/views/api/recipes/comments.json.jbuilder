json.recipe do
  json.commentIds @recipe.comment_ids
end


json.comment json.partial! '/api/comments/comment', comment: @comment
