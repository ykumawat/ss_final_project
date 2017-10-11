class CreateSlides < ActiveRecord::Migration[5.1]
  def change
    create_table :slides do |t|
      t.integer :user_id
      t.string :topic
      t.string :language
      t.string :text
      t.string :url

      t.timestamps
    end
  end
end
