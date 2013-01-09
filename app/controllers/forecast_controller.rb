class ForecastController < ApplicationController
  def canvas
  end

  def wavemaps
  end

  def swell_data
  end

  def surf_data
    render :file => 'forecast/surf_data.xml', :content_type => 'application/xml'
  end
end
