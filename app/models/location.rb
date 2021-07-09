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

    belongs_to :host,
        foreign_key: :host_id,
        class_name: :User
        
end
