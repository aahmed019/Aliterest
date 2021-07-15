@locations.each do |location|
    json.set! location.id do 
        json.extract! location, :id, :title, :description, :price, :lng, :lat, :host_id
        json.extract! location.host, :f_name, :l_name
        json.photos location.photos.map { |file| url_for(file) }
    end
end

