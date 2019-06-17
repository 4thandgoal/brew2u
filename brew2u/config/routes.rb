Rails.application.routes.draw do
  
  resources :reviews
  resources :establishments
    devise_for :admins
    devise_for :users
    root to: 'pages#index'
end
