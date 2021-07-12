class CreateLocationTerrains < ActiveRecord::Migration[5.2]
  def change
    create_table :location_terrains do |t|
        t.integer :location_id
        t.integer :terrain_id
    end
  end
end
