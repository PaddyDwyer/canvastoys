class Data::WindMapTimesController < ApplicationController
  def index
    timezone = params[:timezone]
    map = params[:map]
    xml = SurfData.get_wind_map_times(timezone, map)
    render :inline => xml.body
  end
end
