class AddSharedToContact < ActiveRecord::Migration[5.1]
  def change
    add_column :contacts, :shared, :boolean
  end
end
