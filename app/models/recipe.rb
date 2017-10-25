class Recipe < ApplicationRecord
  validates :author_id, :title, :yield, :time_minutes, presence: true


  belongs_to :author,
    class_name: 'User',
    foreign_key: :author_id,
    primary_key: :id

  has_many :ingredients, dependent: :destroy
  has_many :steps, dependent: :destroy


end
