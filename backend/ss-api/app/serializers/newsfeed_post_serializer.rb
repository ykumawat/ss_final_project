class NewsfeedPostSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :contact_id, :slide_id, :likes
end
