Rails.application.routes.draw do
  resources :homes
  root 'homes#index'

 
end
