class SurfData
  include HTTParty
  base_uri 'www.swellinfo.com'

  def self.get_timeline(id)
    get("/data/timeline/#{id}.xml");
  end
end
