class ApplicationController < ActionController::Base
    helper_method :logged_in?, :current_user
    protect_from_forgery with: :exception

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def ensure_logged_in
        unless current_user
            render json: { base: ['invalid credentials'] }, status: 401
        end
    end

    def login(user)
        @current_user = user
        session[:session_token] = user.reset_session_token!
    end

    def logout!
        current_user.reset_session_token!
        current_user = nil
        session[:session_token] = nil
    end

    def logged_in?
        !!current_user
    end
end
