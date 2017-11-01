# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :email, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}
  # default rails email validation taken from:
  # http://api.rubyonrails.org/classes/ActiveModel/Validations/ClassMethods.html
  validates :email, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create }
  after_initialize :ensure_session_token

  has_many :authored_recipes,
    class_name: 'Recipe',
    foreign_key: :author_id,
    primary_key: :id

  has_many :recipe_saves,
    class_name: 'RecipeSave',
    foreign_key: :user_id,
    primary_key: :id

  has_many :saved_recipes,
    through: :recipe_saves,
    source: :recipe

  has_many :ratings, dependent: :destroy

  has_many :comments, dependent: :destroy

  attr_reader :password

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    (user && user.is_password?(password)) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end


end
