export const createRating = (rating, recipeId) => (
  $.ajax({
    url: `/api/recipes/${recipeId}/ratings`,
    method: 'post',
    data: {rating},
  })
);

export const deleteRating = (ratingId) => (
  $.ajax({
    url: `/api/ratings/${ratingId}`,
    method: 'delete',
  })
);

export const updateRating = (rating) => (
  $.ajax({
    url: `/api/ratings/${rating.id}`,
    method: 'patch',
    data: {rating},
  })
);
