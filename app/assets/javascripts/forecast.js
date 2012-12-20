var SurfForecastData = (function() {
  SurfForecastData.name = "SurfForecastData";

  function SurfForecastData(dataElement) {
    this.day = parseInt(dataElement.getAttribute("day"), 0);
    this.hour = dataElement.getAttribute("hour");
  }

  return SurfForecastData;
})();

var SurfForecast = (function() {
  SurfForecast.name = "SurfForecast";

  function SurfForecast(surfUrl) {
    this.surfUrl = surfUrl;
    this.stage = new Kinetic.Stage({container: "surf_forecast", width: 709, height: 166});
    this.backgroundLayer = new Kinetic.Layer();
    this.graphWidth = 689;
    this.graphOffsetX = 19.5;

    this.stage.add(this.backgroundLayer);
    this.fetchData();
  }

  SurfForecast.prototype.fetchData = function() {
    $.ajax(this.surfUrl, {
      success: $.proxy(this.bindData, this)
    });
  }

  SurfForecast.prototype.bindData = function(data, textStatus, xhr) {
    var dataPoints = data.getElementsByTagName("data");
    var surfForecastDataArray = [];
    var firstDataPoint;
    for (var i = 0; i < dataPoints.length; i++) {
      var dataPoint = new SurfForecastData(dataPoints[i]);
      if (!firstDataPoint) {
        firstDataPoint = dataPoint;
      }
      if (dataPoint.day == firstDataPoint.day + 7 && dataPoint.hour == firstDataPoint.hour ) {
        break;
      } else {
        surfForecastDataArray.push(dataPoint);
      }
    }

    this.data = surfForecastDataArray;
    this.dataColumnWidth = this.graphWidth / this.data.length;
    this.generateSurfBackground();
  }


  SurfForecast.prototype.generateSurfBackground = function() {
    // Build the surrounding rectangle
    var rect = new Kinetic.Rect({
        x: this.graphOffsetX,
        y: 23.5,
        width: this.graphWidth,
        height: 119,
        stroke: "#969696",
        strokeWidth: 1
    });
    this.backgroundLayer.add(rect);


    // Build the day seperators
    var points, ytop = 22, ybottom = 142;
    for (var i = 0; i < this.data.length; i++) {
      if (this.data[i].hour === "12am") {
        points = []
        var x = Math.round(((i * this.dataColumnWidth) + this.graphOffsetX) + 0.5) - 0.5;
        points.push(x);
        points.push(ytop);
        points.push(x);
        points.push(ybottom);
        var daySeperatorLine = new Kinetic.Line({
          points: points,
          stroke: '#d9d9d9',
          strokeWidth: 1
        });
        this.backgroundLayer.add(daySeperatorLine);
      }
    }

    this.backgroundLayer.draw();
  }

  return SurfForecast;
})();


$(document).ready(function() {
  if ($("#surf_forecast").length > 0) {
    new SurfForecast("/forecast/surf_data");
  }
});
