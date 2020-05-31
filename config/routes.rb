Rails.application.routes.draw do
  root 'homepage#index'
  namespace :api do
    namespace :v1 do
      resources :urls, only: [:index, :create, :update, :destroy]
      resources :categories, only: [:index, :create, :update, :destroy]
    end
  end
end
