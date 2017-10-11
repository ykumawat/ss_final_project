class ContactSerializer < ActiveModel::Serializer
  attributes *Contact.column_names
end
