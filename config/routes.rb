Rails.application.routes.draw do
    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    root to: 'static_pages#root'
    namespace :api, defaults: {format: :json} do
        resources :users, only: [:create, :show]
        resources :reviews, except: [:new, :index]
        resource :session, only: [:create, :destroy]
        resources :locations, only: %i[index show]
    end
end