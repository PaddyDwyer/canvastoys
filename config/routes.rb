Canvas::Application.routes.draw do
  scope ENV['RAILS_RELATIVE_URL_ROOT'] || '/' do
    get "canvas/paper" => "canvas#paper"
    get "canvas/tron" => "canvas#tron"
    get "canvas/hsl" => "canvas#hsl"
    get "canvas/highlighter" => "canvas#highlighter"

    get "forecast/canvas" => "forecast#canvas"
    get "forecast/wavemaps" => "forecast#wavemaps"

    get "data/timelines(/:id)" => "data/timelines#show"
    get "data/bull_xml" => "data#bull_xml"

    get "data/wave_map_times" => "data#wave_map_times"
    get "data/wind_map_times" => "data#wind_map_times"
    get "data/pressure_map_times" => "data#pressure_map_times"

    get "data/wave_maps_hierarchy" => "data#wave_maps_hierarchy"
    get "data/period_maps_hierarchy" => "data#period_maps_hierarchy"
    get "data/nearshorewind_maps_hierarchy" => "data#nearshorewind_maps_hierarchy"
    get "data/pressure_maps_hierarchy" => "data#pressure_maps_hierarchy"
    get "data/sst_maps_hierarchy" => "data#sst_maps_hierarchy"
    get "data/buoy_maps" => "data#buoy_maps"

    get "data/forecast_xy" => "data#forecast_xy"
    get "data/buoy_data" => "data#buoy_data"

    namespace :data do
      resources :timelines
    end


    # The priority is based upon order of creation:
    # first created -> highest priority.

    # Sample of regular route:
    #   match 'products/:id' => 'catalog#view'
    # Keep in mind you can assign values other than :controller and :action

    # Sample of named route:
    #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
    # This route can be invoked with purchase_url(:id => product.id)

    # Sample resource route (maps HTTP verbs to controller actions automatically):
    #   resources :products

    # Sample resource route with options:
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

    # Sample resource route with sub-resources:
    #   resources :products do
    #     resources :comments, :sales
    #     resource :seller
    #   end

    # Sample resource route with more complex sub-resources
    #   resources :products do
    #     resources :comments
    #     resources :sales do
    #       get 'recent', :on => :collection
    #     end
    #   end

    # Sample resource route within a namespace:
    #   namespace :admin do
    #     # Directs /admin/products/* to Admin::ProductsController
    #     # (app/controllers/admin/products_controller.rb)
    #     resources :products
    #   end

    # You can have the root of your site routed with "root"
    # just remember to delete public/index.html.
    # root :to => 'welcome#index'

    # See how all your routes lay out with "rake routes"

    # This is a legacy wild controller route that's not recommended for RESTful applications.
    # Note: This route will make all actions in every controller accessible via GET requests.
    # match ':controller(/:action(/:id))(.:format)'
  end
end
