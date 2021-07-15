# json.extract! @reservations, :id, :start_date, :end_date, :user_id, :location_id

@reservations.each do |reservation|
    json.set! reservation.id do
        json.extract! reservation, :id, :start_date, :end_date, :user_id, :location_id, :guest_amount
        json.extract! reservation.location, :title, :price
        json.photos reservation.location.photos.map { |file| url_for(file) }
    end
end




