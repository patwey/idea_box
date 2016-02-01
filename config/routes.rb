Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :ideas, except: :new, defaults: { format: :json }
    end
  end
end
