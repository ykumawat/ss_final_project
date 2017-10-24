class Slide < ApplicationRecord
  belongs_to :user
  has_one :newsfeed_post
end
