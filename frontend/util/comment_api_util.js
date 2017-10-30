export const createComment = (comment, recipeId) => (
  $.ajax({
    url: `/api/recipes/${recipeId}/comments`,
    method: 'post',
    data: {comment},
  })
);

export const deleteComment = (commentId) => (
  $.ajax({
    url: `/api/comments/${commentId}`,
    method: 'delete',
  })
);
