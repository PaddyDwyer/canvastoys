var SurfForecast = (function() {
  SurfForecast.name = "SurfForecast";

  function SurfForecast(surfUrl) {
    this.surfUrl = surfUrl;
    this.stage = new Kinetic.Stage({container: "surf_forecast", width: 709, height: 166});
    this.backgroundLayer = new Kinetic.Layer();
    this.graphWidth = 689;
    var rect = new Kinetic.Rect({
        x: 19.5,
        y: 23.5,
        width: this.graphWidth,
        height: 119,
        stroke: "#969696",
        strokeWidth: 1
    });

    this.backgroundLayer.add(rect);

    this.stage.add(this.backgroundLayer);

    this.fetchData();
  }

  SurfForecast.prototype.fetchData = function() {
    $.ajax(this.surfUrl, {
      success: $.proxy(this.bindData, this)
    });
  }

  SurfForecast.prototype.bindData = function(data, textStatus, xhr) {
    this.data = data;
    this.dataPoints = data.getElementsByTagName("data").length;
    this.dataColumnWidth = this.graphWidth / this.dataPoints;
  }


  return SurfForecast;
})();


$(document).ready(function() {
  if ($("#surf_forecast").length > 0) {
    new SurfForecast("/forecast/surf_data");
  }
});
