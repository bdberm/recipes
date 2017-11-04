if comment.parent_id
  pid = comment.parent_id
else
  pid = false
end



json.extract! comment, :id, :recipe_id, :user_id, :comment_name, :body, :created_at
json.parent_id pid
json.childrenIds comment.child_comment_ids
