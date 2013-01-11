class Data::WaveMapTimesController < ApplicationController
  def index
    timezone = params[:timezone]
    map = params[:map]
    maptype = params[:maptype]
    xml = SurfData.get_wave_map_times(timezone, map, maptype)
    render :inline => xml.body
  end
end
