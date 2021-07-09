# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  body        :text             not null
#  author_id   :integer          not null
#  location_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Review < ApplicationRecord
    validates :title, :body, :author_id, :location_id, presence: true

    belongs_to :user,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :location,
        foreign_key: :location_id,
        class_name: :Location
  
end
