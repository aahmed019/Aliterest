# == Schema Information
#
# Table name: reservations
#
#  id          :bigint           not null, primary key
#  start_date  :date             not null
#  end_date    :date             not null
#  user_id     :integer
#  location_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Reservation < ApplicationRecord

    validates :start_date, :end_date, presence: true

    belongs_to :user
    belongs_to :location

end
