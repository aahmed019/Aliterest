class Api::ReviewsController < ApplicationController

    def index

    end

    def edit

    end

    def update

    end

    def show

    end
    

    def review_params
        params.require(:review).permit(:title, :body, :author_id, :location_id)
    end
end