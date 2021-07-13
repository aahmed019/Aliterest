Rails.application.routes.draw do
    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    root to: 'static_pages#root'
    namespace :api, defaults: {format: :json} do
        resources :users, only: [:create, :show] do
            resources :reservations, only: [:index]
        end
        resources :reviews, except: [:new, :index, :edit]
        resources :bookings, except: [:new, :edit]
        resource :session, only: [:create, :destroy]
        resources :locations, only: %i[index show]
    end
end