class Recipe < ApplicationRecord
  validates :author, :title, :yield, :time_minutes, presence: true

  has_attached_file :image, default_url: "13.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/


  belongs_to :author,
    class_name: 'User',
    foreign_key: :author_id,
    primary_key: :id

  has_many :ingredients, dependent: :destroy
  has_many :steps, dependent: :destroy

  has_many :recipe_saves,
    class_name: 'RecipeSave',
    foreign_key: :recipe_id,
    primary_key: :id

  has_many :users_who_have_saved,
    through: :recipe_saves,
    source: :user

  has_many :comments, dependent: :destroy

  has_many :ratings, dependent: :destroy




end
