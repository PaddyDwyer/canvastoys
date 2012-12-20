require 'test_helper'

class ForecastControllerTest < ActionController::TestCase
  test "should get canvas" do
    get :canvas
    assert_response :success
  end

  test "should get swell_data" do
    get :swell_data
    assert_response :success
  end

  test "should get surf_data" do
    get :surf_data
    assert_response :success
  end

end
