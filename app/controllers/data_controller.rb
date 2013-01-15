class DataController < ApplicationController
  def timeline
    id = params[:id]
    xml = SurfData.get_timeline(id)
    render :inline => xml.body
  end

  def bull_xml
    id = params[:id]
    xml = SurfData.get_bull_xml(id)
    render :inline => xml.body
  end

  def wave_map_times
    timezone = params[:timezone]
    map = params[:map]
    maptype = params[:maptype]
    xml = SurfData.get_wave_map_times(timezone, map, maptype)
    render :inline => xml.body
  end

  def wind_map_times
    timezone = params[:timezone]
    map = params[:map]
    xml = SurfData.get_wind_map_times(timezone, map)
    render :inline => xml.body
  end

  def pressure_map_times
    timezone = params[:timezone]
    map = params[:map]
    maptype = params[:maptype]
    xml = SurfData.get_pressure_map_times(timezone, map, maptype)
    render :inline => xml.body
  end

  def wave_maps_hierarchy
    xml = SurfData.get_wave_maps_hierarchy
    render :inline => xml.body
  end

  def period_maps_hierarchy
    xml = SurfData.get_period_maps_hierarchy
    render :inline => xml.body
  end

  def nearshorewind_maps_hierarchy
    xml = SurfData.get_nearshorewind_maps_hierarchy
    render :inline => xml.body
  end

  def pressure_maps_hierarchy
    xml = SurfData.get_pressure_maps_hierarchy
    render :inline => xml.body
  end
end
