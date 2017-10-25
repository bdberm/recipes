class CreateRecipes < ActiveRecord::Migration[5.1]
  def change
    create_table :recipes do |t|
      t.integer :author_id, null: false
      t.string :title, null: false
      t.string :yield, null: false
      t.integer :time_minutes, null: false
      t.text :description
      t.boolean :featured, default: false
      t.timestamps
    end
    add_index :recipes, :author_id
    add_index :recipes, :title
  end
end
