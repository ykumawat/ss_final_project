Rails.application.routes.draw do
  # devise_for :users
  namespace :api do
    namespace :v1 do
      resources :contacts
      resources :slides
      resources :newsfeed_posts
      get '/users', to: 'users#index'
      post '/users', to: 'users#create'
      get '/users/me', to: 'users#me'
      get '/users/me/edit', to: 'users#edit'
      patch '/users/me', to: 'users#update'
      delete '/users/me', to: 'users#destroy'
    end
  end
  post '/login', to: 'auth#create'
  get '/welcome', to: 'application#welcome'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
