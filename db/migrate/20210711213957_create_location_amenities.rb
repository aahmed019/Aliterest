class CreateLocationAmenities < ActiveRecord::Migration[5.2]
  def change
    create_table :location_amenities do |t|
        t.integer :location_id
        t.integer :amenity_id
    end
  end
end
