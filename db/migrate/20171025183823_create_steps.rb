class CreateSteps < ActiveRecord::Migration[5.1]
  def change
    create_table :steps do |t|
      t.integer :recipe_id, null: false
      t.string :content, null: false
      t.integer :ord, null: false
      t.timestamps
    end
    add_index :steps, :recipe_id
  end
end
