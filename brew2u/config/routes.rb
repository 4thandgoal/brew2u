Rails.application.routes.draw do
    
    devise_for :admins
    devise_for :users
    
    resources :establishments do
      	resources :reviews, except: [:show, :index]
    end
    
    get '*path', :to => 'pages#root', constraints: ->(request){ request.format.html? }
    
    resources :reviews
    resources :establishments
    
    root :to => 'pages#index'
end
