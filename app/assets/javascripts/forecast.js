var SurfForecast = (function() {
  SurfForecast.name = "SurfForecast";

  function SurfForecast() {
    this.stage = new Kinetic.Stage({container: "surf_forecast", width: 709, height: 166});
    this.backgroundLayer = new Kinetic.Layer();
    var rect = new Kinetic.Rect({
        x: 19.5,
        y: 23.5,
        width: 689,
        height: 119,
        stroke: "#969696",
        strokeWidth: 1
    });

    this.backgroundLayer.add(rect);

    this.stage.add(this.backgroundLayer);
  }

  return SurfForecast;
})();


$(document).ready(function() {
  if ($("#surf_forecast").length > 0) {
    new SurfForecast();
  }
});
