json.extract! @location, :id, :title, :description, :price, :lng, :lat
json.extract! @location.host, :f_name, :l_name

json.set! 'amenities' do
    @location.amenities.each do |amenity|
        json.set! amenity.id do
            json.extract! amenity, :name, :description
        end
    end
end

json.set! 'activities' do
    @location.activities.each do |activity|
        json.set! activity.id do
            json.extract! activity, :name, :description
        end
    end
end

json.set! 'terrains' do
    @location.terrains.each do |terrain|
        json.set! terrain.id do
            json.extract! terrain, :name, :description
        end
    end
end



