class CreateNewsfeedPosts < ActiveRecord::Migration[5.1]
  def change
    create_table :newsfeed_posts do |t|
      t.integer :user_id
      t.integer :contact_id
      t.integer :slide_id
      t.integer :likes

      t.timestamps
    end
  end
end
