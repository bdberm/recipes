class Rating < ApplicationRecord
  validates :user, :recipe, :rating, presence: true
  validates :user_id, uniqueness: {scope: :recipe_id, message: 'already rated recipe'}
  validates :rating, inclusion: { in: [1,2,3,4,5], message: "rating must be 1-5"}

  belongs_to :recipe
  belongs_to :user



end
