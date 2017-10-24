class ChangeSharedContacts < ActiveRecord::Migration[5.1]
  def change
    change_column :contacts, :shared, :boolean, :default => false
  end
end
