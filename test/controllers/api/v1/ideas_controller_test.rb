require 'test_helper'

class Api::V1::IdeasControllerTest < ActionController::TestCase
  test "#index returns OK response" do
    get :index, format: :json

    assert_equal 200, response.status
  end
end
