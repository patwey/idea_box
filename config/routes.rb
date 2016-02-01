Rails.application.routes.draw do
  root to: "home#index"

  namespace :api do
    namespace :v1 do
      resources :ideas, except: [:new, :edit], defaults: { format: :json }
    end
  end
end
