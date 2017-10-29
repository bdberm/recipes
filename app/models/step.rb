class Step < ApplicationRecord
  validates :recipe, :content, :ord, presence: true

  belongs_to :recipe
end
