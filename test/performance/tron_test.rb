require 'test_helper'
require 'rails/performance_test_help'

class TronTest < ActionDispatch::PerformanceTest
  # Refer to the documentation for all available options
  #self.profile_options = { :runs => 100, :metrics => [:wall_time, :memory, :objects, :gc_runs, :gc_time],
  #                         :output => 'tmp/performance', :formats => [:flat] }

  def test_canvas_tron
    get '/canvas/tron'
  end
end
