class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

# this allows the Active Admin install generator to run
# controllers handing API requests will inherit from `api_controller.rb`

end
