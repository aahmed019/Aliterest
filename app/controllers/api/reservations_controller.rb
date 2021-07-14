class Api::ReservationsController < ApplicationController

    # def index
    #     @user = User.find(params[:user_id])
    #     render 'api/users/show'
    # end

    def show
        @reservations = Reservation.all.includes(:user, :location).where(user_id: params[:id])
        render 'api/reservations/show'
    end
    
    def create
        @reservation = Reservation.new(reservation_params)
        if @reservation.save
            @reservations = Reservation.all.includes(:user, :location).where(user_id: @reservation.user_id)
            render 'api/reservations/show'
        else
            render json: @reservation.errors.full_messages, status: 422
        end
    end

    def update
        @reservation = Reservation.all.includes(:user, :location).find_by(id: reservation_params[:id])
        # debugger
        if @reservation && @reservation.update(reservation_params)
            render json: {
                id: @reservation.id, 
                start_date: @reservation.start_date, 
                end_date: @reservation.end_date,
                user_id: @reservation.user_id,
                location_id: @reservation.location_id,
                guest_amount: @reservation.guest_amount,
                title: @reservation.location.title
            }
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