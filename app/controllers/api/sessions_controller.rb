class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
        if @user
            login(@user)
            render '/api/users/show'
        else
            render json: ["Invalid Username or Password"], status: 404
        end
    end

    def destroy
        render json: {error: "User Not Found"} unless logged_in?
        logout!
        render json: {}
    end

    def user_params
        params.require(:user).permit(:email, :f_name, :l_name, :password)
    end

end