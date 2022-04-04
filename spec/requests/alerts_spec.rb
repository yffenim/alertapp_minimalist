# https://relishapp.com/rspec/rspec-rails/docs/request-specs/request-spec

require 'spec_helper'

# What tests to write re: JSON?
# alerts api is up
# when user load the home page after logging in, their alerts load

# since Alerts inherits from API not Base
RSpec.describe "Alerts API", :type => :request do
  it "returns a list of alerts" do 
    get "/api/alerts" # fix URI???
    
    expect(response).to be_success
  end
end
