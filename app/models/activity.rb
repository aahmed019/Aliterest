# == Schema Information
#
# Table name: activities
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :string           not null
#
class Activity < ApplicationRecord

    has_many :location_activities,
        foreign_key: :activity_id,
        class_name: :LocationActivity

    has_many :locations,
        through: :location_activities,
        source: :location

end
