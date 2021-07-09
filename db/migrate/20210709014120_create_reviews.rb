class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
        t.string :title, null: false
        t.text :body, null: false
        t.integer :author_id, null: false
        t.integer :location_id, null: false
        t.timestamps
    end
  end
end
