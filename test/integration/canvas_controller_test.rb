require 'test_helper'

class CanvasControllerTest < ActionDispatch::IntegrationTest
  test "GET /canvas/canvas/hsl" do
    get "/canvas/canvas/hsl"
    assert_response :success
  end
end
