class CreateRecipeSaves < ActiveRecord::Migration[5.1]
  def change
    create_table :recipe_saves do |t|
      t.integer :recipe_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end

    add_index :recipe_saves, [:user_id, :recipe_id], unique: true
  end
end
