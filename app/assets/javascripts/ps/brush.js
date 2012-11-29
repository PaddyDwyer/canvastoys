var myPath = new Path();
myPath.add(new Point(50, 215));
myPath.add(new Point(80, 380));
myPath.add(new Point(180, 100));
myPath.add(new Point(200, 450));
myPath.add(new Point(350, 100));
myPath.add(new Point(500, 500));


myPath.smooth();

myPath.strokeColor = '#ff0000';
myPath.strokeWidth = 50;

myPath.strokeCap = 'round';

lastPoint = myPath.getPointAt(myPath.length);
tangent = myPath.getTangentAt(myPath.length);
tangent.length = 60;

path = new Path.Rectangle(lastPoint + [-25, -25], new Size(50,50));
path.fillColor = 'black';

path.rotate(tangent.angle);
    

  var hitOptions = {
    segments: true,
    stroke: true,
    fill: true,
    tolerance: 5
  };


  tool = new Tool();

  tool.onMouseDown = function(event) {
    segment = path = null;
    var hitResult = project.hitTest(event.point, hitOptions);
    console.log(hitResult.type)

    if (event.modifiers.shift) {
      if (hitResult.type == 'segment') {
        hitResult.segment.remove();
      };
      return;
    }

    if (hitResult) {
      path = hitResult.item;
      if (hitResult.type == 'segment') {
        segment = hitResult.segment;
      } else if (hitResult.type == 'stroke') {
        var location = hitResult.location;
        segment = path.insert(location.index + 1, event.point);
        path.smooth();
      }
    }
    movePath = hitResult.type == 'fill';
    if (movePath){
      project.activeLayer.addChild(hitResult.item);
    }
  }

  tool.onMouseMove = function(event) {
    var hitResult = project.hitTest(event.point, hitOptions);
    project.activeLayer.selected = false;
    if (hitResult && hitResult.item){
      hitResult.item.fullySelected = true;
    }
  }

  tool.onMouseDrag = function(event) {
    if (segment) {
      segment.point = event.point;
      path.smooth();
    }

    if (movePath){
      path.position = event.point;
    }
  
}
