class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.integer :user_id, null: false
      t.integer :recipe_id, null: false
      t.integer :parent_id
      t.string :comment_name, null: false
      t.text :body, null: false
      t.timestamps
    end
    add_index :comments, :user_id
    add_index :comments, :recipe_id
    add_index :comments, :parent_id
  end
end
