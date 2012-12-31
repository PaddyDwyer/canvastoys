class SurfData
  include HTTParty
  base_uri 'www.swellinfo.com'

  def self.get_timeline(id)
    get("/data/timeline/#{id}.xml");
  end

  def self.get_bull_xml(id)
    get("/data/bull_xml/#{id}.xml");
  end
end
