class SlideSerializer < ActiveModel::Serializer
  attributes *Slide.column_names
end
