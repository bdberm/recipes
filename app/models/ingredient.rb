class Ingredient < ApplicationRecord
  validates :recipe, :content, :ord, presence: true

  belongs_to :recipe
end
