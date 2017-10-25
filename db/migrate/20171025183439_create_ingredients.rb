class CreateIngredients < ActiveRecord::Migration[5.1]
  def change
    create_table :ingredients do |t|
      t.integer :recipe_id, null: false
      t.string :content, null: false
      t.integer :ord, null: false
      t.timestamps
    end
    add_index :ingredients, :recipe_id
  end
end
