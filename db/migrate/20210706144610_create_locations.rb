class CreateLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :locations do |t|
        t.string :title, null: false
        t.text :description
        t.integer :price, null: false
        t.string :longitude, null: false
        t.string :latitude, null: false
        t.integer :host_id, null: false
        t.timestamps
    end
    add_index :locations, :host_id
  end
end
