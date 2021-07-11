# == Schema Information
#
# Table name: location_activities
#
#  id          :bigint           not null, primary key
#  location_id :integer
#  activity_id :integer
#
class LocationActivity < ApplicationRecord

    belongs_to :location,
        foreign_key: :location_id,
        class_name: :Location

    belongs_to :activity,
        foreign_key: :activity_id,
        class_name: :Activity    

end
