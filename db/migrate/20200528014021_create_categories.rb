class CreateCategories < ActiveRecord::Migration[6.0]
  def change
    create_table :categories do |t|
      t.string :title, null: false, index: {unique: true}

      t.timestamps
    end
    add_reference :urls, :category
    add_foreign_key :urls, :categories, column: :category_id
  end
end
