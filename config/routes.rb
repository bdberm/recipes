Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, except: [:new, :edit, :index]
    resource :session, only: [:create, :destroy]
    resources :recipes, only: [:index, :show] do
      post 'save'
      delete 'unsave'
      resources :comments, only: [:create]
      resources :ratings, only: [:create]
    end
    resources :comments, only: [:update, :destroy]
    resources :ratings, only: [:update, :destroy]
  end
end
