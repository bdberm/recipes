class Ingredient < ApplicationRecord
  validates :recipe_id, :content, :ord, presence: true

  belongs_to :recipe
end
