Rails.application.routes.draw do

  root 'site#index'
  # root 'api/users#index'

  devise_for :users, controllers: { registrations: 'registrations' }

  namespace :api do
    resources :users, only: [:index, :show, :create, :destroy, :update]
  end

  # root 'users#index'

  # devise_for :users, controllers: { registrations: 'registrations' }

  # # devise_scope :user do
  # #   get "/users/sign_out" => "devise/sessions#destroy"
  # # end

  # resources :users_admin, controller: 'users' do
  #   get :order_by_login, on: :collection
  #   get :order_by_email, on: :collection
  #   get :order_by_fname, on: :collection
  #   get :order_by_lname, on: :collection
  # end

  get '*a' => 'api/users#404'

  # root 'users#index'
  
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end