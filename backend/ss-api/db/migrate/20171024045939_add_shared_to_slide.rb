class AddSharedToSlide < ActiveRecord::Migration[5.1]
  def change
    add_column :slides, :shared, :boolean
  end
end
