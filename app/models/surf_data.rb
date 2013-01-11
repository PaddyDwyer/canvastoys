class SurfData
  include HTTParty
  base_uri 'www.swellinfo.com'

  def self.get_timeline(id)
    get("/data/timeline/#{id}.xml")
  end

  def self.get_bull_xml(id)
    get("/data/bull_xml/#{id}.xml")
  end

  def self.get_wave_map_times(timezone, map, maptype)
    get("/scripts/wave_map_times.xml.php?timezone=#{timezone}&map=#{map}&maptype=#{maptype}")
  end

  def self.get_wind_map_times(timezone, map)
    get("/scripts/wind_map_times.xml.php?timezone=#{timezone}&map=#{map}")
  end

  def self.get_pressure_map_times(timezone, map, maptype)
    get("/scripts/pressure_map_times.xml.php?timezone=#{timezone}&map=#{map}&maptype=#{maptype}")
  end
end
