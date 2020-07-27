Rails.application.routes.draw do
  resources :locations
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations',
    confirmations: 'users/confirmations'
  }
  resources :users, only: :index
  root to: "home#index"
end
