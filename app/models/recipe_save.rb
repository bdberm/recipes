class RecipeSave < ApplicationRecord
  validates :user_id, :recipe_id, presence: true
  validates :user_id, uniqueness: {scope: :recipe_id, message: 'already saved recipe'}

  belongs_to :recipe
  belongs_to :user

end
