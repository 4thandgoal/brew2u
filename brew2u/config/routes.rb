Rails.application.routes.draw do
  
    resources :reviews
    resources :establishments
    
    devise_for :admins
    devise_for :users
    
    get '*path', to: 'pages#root', constraints: ->(request){ request.format.html? }
    
    root to: 'pages#index'
end
