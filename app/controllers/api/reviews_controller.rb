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
            render json: {id: @review.id, title: @review.title, body: @review.body}
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def update
        @review = Review.find_by(id: review_params[:id])
        if @review.update(review_params)
            render json: {id: @review.id, title: @review.title, body: @review.body}
        else
            render json: ["FAIL"]
        end
    end

    def destroy
        @review = Review.find_by(id: params[:id])
        if @review.destroy!
            render json: ["deleted"]
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def review_params
        params.require(:review).permit(:id, :title, :body, :author_id, :location_id)
    end
end