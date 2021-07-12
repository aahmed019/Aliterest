# == Schema Information
#
# Table name: locations
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :text
#  price       :integer          not null
#  lng         :string           not null
#  lat         :string           not null
#  host_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Location < ApplicationRecord
    validates :title, :price, :host_id, presence: true
    validates :lng, :lat, presence: true
    
    has_many_attached :photos

    belongs_to :host,
        foreign_key: :host_id,
        class_name: :User

    has_many :location_activities,
        foreign_key: :location_id,
        class_name: :LocationActivity

    has_many :location_amenities,
        foreign_key: :location_id,
        class_name: :LocationAmenity

    has_many :activities,
        through: :location_activities,
        source: :activity

    has_many :amenities,
        through: :location_amenities,
        source: :amenity

    has_many :location_terrains,
        foreign_key: :location_id,
        class_name: :LocationTerrain

    has_many :terrains,
        through: :location_terrains,
        source: :terrain

    
        
end
