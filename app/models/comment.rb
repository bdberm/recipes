class Ingredient < ApplicationRecord
  validates :user_id, :recipe_id, :comment_name, :body, presence: true

  belongs_to :user
  belongs_to :recipe

  belongs_to :parent,
    class_name: 'Comment',
    foreign_key: :parent_id,
    primary_key: :id

    
end
