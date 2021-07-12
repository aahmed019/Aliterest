# == Schema Information
#
# Table name: location_terrains
#
#  id          :bigint           not null, primary key
#  location_id :integer
#  terrain_id  :integer
#
class LocationTerrain < ApplicationRecord

    belongs_to :location,
        foreign_key: :location_id,
        class_name: :Location

    belongs_to :terrain,
        foreign_key: :terrain_id,
        class_name: :Terrain

end
