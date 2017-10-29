class Comment < ApplicationRecord
  validates :user, :recipe, :comment_name, :body, presence: true

  belongs_to :user
  belongs_to :recipe

  belongs_to :parent_comment,
    class_name: 'Comment',
    foreign_key: :parent_id,
    primary_key: :id,
    optional: true

  has_many :child_comments,
    class_name: 'Comment',
    foreign_key: :parent_id,
    primary_key: :id  


end
