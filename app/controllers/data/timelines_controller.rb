class Data::TimelinesController < ApplicationController
  def show
    id = params[:id]
    xml = SurfData.get_timeline(id)
    render :inline => xml.body
  end
end
