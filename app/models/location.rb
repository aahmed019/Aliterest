# == Schema Information
#
# Table name: locations
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :text
#  price       :integer          not null
#  longitude   :string           not null
#  latitude    :string           not null
#  host_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Location < ApplicationRecord
    validates :title, :price, :host_id, presence: true
    validates :longitude, :latitude, presence: true

    belongs_to :host,
        foreign_key: :host_id,
        class_name: :User
        
end
