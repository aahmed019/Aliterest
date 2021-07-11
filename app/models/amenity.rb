# == Schema Information
#
# Table name: amenities
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :string           not null
#
class Amenity < ApplicationRecord

    has_many :location_amenities,
        foreign_key: :amenity_id,
        class_name: :LocationAmenity

    has_many :locations,
        through: :location_amenities,
        source: :location
end
