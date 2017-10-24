class ChangeSharedSlides < ActiveRecord::Migration[5.1]
  def change
    change_column :slides, :shared, :boolean, :default => false
  end
end
