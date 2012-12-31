class Data::BullXmlsController < ApplicationController
  def show
    id = params[:id]
    xml = SurfData.get_bull_xml(id)
    render :inline => xml.body
  end
end
