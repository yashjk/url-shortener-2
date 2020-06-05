class AddForeignKeyToCounts < ActiveRecord::Migration[6.0]
  def change
    add_foreign_key :counts, :urls, column: :url_id
  end
end
