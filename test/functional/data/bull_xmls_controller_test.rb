require 'test_helper'

class Data::BullXmlsControllerTest < ActionController::TestCase
  test "should get show" do
    get :show
    assert_response :success
  end

end
