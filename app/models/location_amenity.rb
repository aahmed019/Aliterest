# == Schema Information
#
# Table name: location_amenities
#
#  id          :bigint           not null, primary key
#  location_id :integer
#  amenity_id  :integer
#
class LocationAmenity < ApplicationRecord

    belongs_to :location,
        foreign_key: :location_id,
        class_name: :Location

    belongs_to :amenity,
        foreign_key: :amenity_id,
        class_name: :Amenity
end
