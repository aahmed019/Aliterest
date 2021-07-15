class Api::LocationsController < ApplicationController

    def index
        locations = Location.all
        if !params[:search].nil? 
            locations = locations.where(amenity: params[:search])
            locations = locations.where(activity: params[:search])
        end
        
        @locations = locations.includes(:host)
        render 'api/locations/index'
    end

    def show
        @location = Location.includes(:host, :activities, :amenities, :terrains).find_by(id: params[:id])
        if @location
            render 'api/locations/show'
        else
            render json: ['cannot find location'], status: 400
        end
    end

    def location_params
        params.require(:location).permit(:title, :description, :price, :lng, :lat, :host_id)
    end

end