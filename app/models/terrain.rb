# == Schema Information
#
# Table name: terrains
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :string           not null
#
class Terrain < ApplicationRecord

    has_many :location_terrains,
        foreign_key: :terrain_id,
        class_name: :LocationTerrain

    has_many :locations,
        through: :location_terrains,
        source: :location
end
