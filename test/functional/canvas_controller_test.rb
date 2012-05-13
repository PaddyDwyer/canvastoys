require 'test_helper'

class CanvasControllerTest < ActionController::TestCase
  test "should get tron" do
    get :tron
    assert_response :success
  end

end
