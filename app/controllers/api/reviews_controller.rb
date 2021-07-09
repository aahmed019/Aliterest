class Api::ReviewsController < ApplicationController

    # def index
    #     @reviews = Review.all
    #     render 'api/reviews/index'
    # end

    def show
        @reviews = Review.all.where(location_id: params[:id])
        render 'api/reviews/show'
    end
    
    def create
        @review = Review.new(review_params)
        if @review.save
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def edit
        @review = Review.find_by(id: params[:id])
    end

    def update
        # if @review.update(review_params)
    end

    def destroy
        @review = Review.find_by(id: params[:id])
        if @review.destroy
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def review_params
        params.require(:review).permit(:title, :body, :author_id, :location_id)
    end
end