class CreateUrls < ActiveRecord::Migration[6.0]
  def change
    create_table :urls do |t|
      t.string :original, null: false
      t.string :shortened, null: false
      t.boolean :pinned, default: false

      t.timestamps
    end
  end
end
