class NewsfeedPost < ApplicationRecord
  belongs_to :user
  has_one :image
  has_one :slide
end
