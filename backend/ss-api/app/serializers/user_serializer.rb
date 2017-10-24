class UserSerializer < ActiveModel::Serializer
  attributes *User.column_names
  has_many :slides
  has_many :contacts
  has_many :friendships
  has_many :newsfeed_posts
end
