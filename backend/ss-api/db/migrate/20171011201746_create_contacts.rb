class CreateContacts < ActiveRecord::Migration[5.1]
  def change
    create_table :contacts do |t|
      t.integer :user_id
      t.string :company
      t.string :name
      t.string :email
      t.string :phone
      t.string :notes
      t.string :url

      t.timestamps
    end
  end
end
