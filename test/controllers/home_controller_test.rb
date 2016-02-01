require 'test_helper'

class HomeControllerTest < ActionController::TestCase
  test "#index returns 200 OK status" do
    get :index

    assert_equal 200, response.status
  end
end
