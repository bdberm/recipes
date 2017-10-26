class Recipe < ApplicationRecord
  validates :author_id, :title, :yield, :time_minutes, presence: true

  has_attached_file :image, default_url: "missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/


  belongs_to :author,
    class_name: 'User',
    foreign_key: :author_id,
    primary_key: :id

  has_many :ingredients, dependent: :destroy
  has_many :steps, dependent: :destroy


end
