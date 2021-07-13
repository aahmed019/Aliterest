class Api::ReservationsController < ApplicationController

    # def index
    #     @user = User.find(params[:user_id])
    #     render 'api/users/show'
    # end

    def show
        @reservations = Reservation.all.includes(:user).where(user_id: params[:id])
        render 'api/reservations/show'
    end
    
    def create
        @reservation = Reservation.new(reservation_params)
        debugger
        if @reservation.save
            render 'api/reservations/show'
        else
            render json: @reservation.errors.full_messages, status: 422
        end
    end

    def update
        @reservation = Reservation.find_by(id: reservation_params[:id])
        if @reservation && @reservation.update(reservation_params)
            # render json: {
            #     id: @review.id, body: @review.body, 
            #     f_name: @review.user.f_name, 
            #     l_name: @review.user.l_name,
            #     author_id: @review.author_id
            # }
        else
            render json: ["FAIL"]
        end
    end

    def destroy
        @reservation = Reservation.find_by(id: params[:id])
        if @reservation.destroy!
            render json: ["deleted"]
        else
            render json: @reservation.errors.full_messages, status: 422
        end
    end

    def reservation_params
        params.require(:reservation).permit(:id, :start_date, :end_date, :user_id, :location_id, :guest_amount)
    end
end