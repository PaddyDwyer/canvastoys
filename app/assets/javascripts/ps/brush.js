var myPath = new Path();
myPath.add(new Point(50, 215));
myPath.add(new Point(80, 380));
myPath.add(new Point(180, 100));
myPath.add(new Point(200, 450));
myPath.add(new Point(500, 100));
//myPath.add(new Point(450, 200));
myPath.add(new Point(500, 500));

myPath.smooth();

myPath.strokeColor = '#ff0000';
myPath.strokeWidth = 50;

myPath.strokeCap = 'butt';

var startCap;
var lastStart;
updateStartCap = function(thePath) {
  point = thePath.getPointAt(0);

  if (!startCap) {
    console.log("creating startCap", point);
    startCap = new Path.Circle(point, 25);
    startCap.fillColor = '#ff0000';
    console.log(startCap);
  } else {
    startCap.translate(point-lastStart);
  }
  lastStart = point;
}

var endCap;
var lastAngle = 0;
var lastPoint;
updateEndCap = function(thePath) {
  length = thePath.length;
  point = thePath.getPointAt(length);
  //point = new Point(60, 180);
  tangent = thePath.getTangentAt(length);
  tangent.length = 30;


  if (!endCap) {
    transformedPoint = point - [24.5, 135];
    var bigBlob = new Path();
    bigBlob.strokeColor = '#ff0000';
    bigBlob.fillColor = '#ff0000';
    bigBlob.strokeWidth = 1;
    bigBlob.strokeCap = 'butt';
    handleIn = new Point(3,0);
    handleOut = new Point(-3,0);
    bigBlob.add(new Point(0, 135) + transformedPoint);
    bigBlob.add(new Point(49, 135) + transformedPoint);
    bigBlob.add(new Point(49, 16) + transformedPoint);
    bigBlob.add(new Segment(new Point(45, 12.5) + transformedPoint, handleIn, handleOut));
    bigBlob.add(new Point(42, 16) + transformedPoint);
    bigBlob.add(new Point(42, 131.5) + transformedPoint);
    bigBlob.add(new Segment(new Point(36.5, 135) + transformedPoint, handleIn, handleOut));
    bigBlob.add(new Point(33, 131.5) + transformedPoint);
    bigBlob.add(new Point(33, 30) + transformedPoint);
    bigBlob.add(new Segment(new Point(30, 26.5) + transformedPoint, handleIn, handleOut));
    bigBlob.add(new Point(27, 30) + transformedPoint);
    bigBlob.add(new Point(27, 50) + transformedPoint);
    bigBlob.add(new Segment(new Point(22.5, 53.5) + transformedPoint, handleIn, handleOut));
    bigBlob.add(new Point(19, 50) + transformedPoint);
    bigBlob.add(new Point(19, 38) + transformedPoint);
    bigBlob.add(new Segment(new Point(16.5, 35.5) + transformedPoint, handleIn, handleOut));
    bigBlob.add(new Point(13, 38) + transformedPoint);
    bigBlob.add(new Point(13, 68) + transformedPoint);
    bigBlob.add(new Segment(new Point(9.5, 71.5) + transformedPoint, handleIn, handleOut));
    bigBlob.add(new Point(6, 68) + transformedPoint);
    bigBlob.add(new Point(6, 4) + transformedPoint);
    bigBlob.add(new Segment(new Point(3, 0.5) + transformedPoint, handleIn, handleOut));
    bigBlob.add(new Point(0, 4) + transformedPoint);
    bigBlob.closePath();

    var leftGap = new Path();
    leftGap.add(new Point(6, 125) + transformedPoint);
    leftGap.add(new Segment(new Point(9.5, 128.5) + transformedPoint, handleIn, handleOut));
    leftGap.add(new Point(13, 125) + transformedPoint); 
    leftGap.add(new Point(13, 91) + transformedPoint);
    leftGap.add(new Segment(new Point(9.5, 87.5) + transformedPoint, handleIn, handleOut));
    leftGap.add(new Point(6, 91) + transformedPoint);
    leftGap.closePath();

    var midGap = new Path();
    midGap.add(new Point(19, 106) + transformedPoint);
    midGap.add(new Point(23, 109.5) + transformedPoint);
    midGap.add(new Point(27, 106) + transformedPoint);
    midGap.add(new Point(27, 65) + transformedPoint);
    midGap.add(new Point(23, 62.5) + transformedPoint);
    midGap.add(new Point(19, 65) + transformedPoint);
    midGap.closePath();

    var leftBlob = new Path();
    leftBlob.add(new Point(13, 20) + transformedPoint);
    leftBlob.add(new Point(16, 23.5) + transformedPoint);
    leftBlob.add(new Point(19, 20) + transformedPoint);
    leftBlob.add(new Point(19, -26) + transformedPoint);
    leftBlob.add(new Point(16, -29.5) + transformedPoint);
    leftBlob.add(new Point(13, -26) + transformedPoint);
    leftBlob.closePath();

    var rightBlob = new Path();
    rightBlob.add(new Point(27, 20) + transformedPoint);
    rightBlob.add(new Point(30, 23.5) + transformedPoint);
    rightBlob.add(new Point(33, 20) + transformedPoint);
    rightBlob.add(new Point(33, -11) + transformedPoint);
    rightBlob.add(new Point(30, -14.5) + transformedPoint);
    rightBlob.add(new Point(27, -11) + transformedPoint);
    rightBlob.closePath();

    endCap = new CompoundPath([bigBlob, leftGap, midGap, leftBlob, rightBlob]);
    endCap.rotate(tangent.angle + 90, point);
    lastPoint = point;
    lastAngle = tangent.angle;
  } else {
    endCap.translate(point-lastPoint);
    lastPoint = point;
    angle = tangent.angle;
    endCap.rotate(angle - lastAngle, point);
    lastAngle = tangent.angle;
  }

}

updateEndCap(myPath);
updateStartCap(myPath);
    

  var hitOptions = {
    segments: true,
    stroke: true,
    fill: true,
    tolerance: 5
  };


  //tool = new Tool();

  //tool.onMouseDown = function(event) {
  onMouseDown = function(event) {
    segment = path = null;
    var hitResult = myPath.hitTest(event.point, hitOptions);
    //var hitResult = project.hitTest(event.point, hitOptions);
    console.log(hitResult.type)

    if (event.modifiers.shift) {
      if (hitResult.type == 'segment') {
        hitResult.segment.remove();
      };
      return;
    }

    if (hitResult) {
      path = hitResult.item;
      console.log("which path", path.name === 'endCap');
      if (hitResult.type == 'segment') {
        segment = hitResult.segment;
      } else if (hitResult.type == 'stroke') {
        var location = hitResult.location;
        segment = path.insert(location.index + 1, event.point);
        path.smooth();
        updateEndCap(path);
        updateStartCap(path);
      }
    }
    movePath = hitResult.type == 'fill';
    if (movePath){
      project.activeLayer.addChild(hitResult.item);
    }
  }

  onMouseMove = function(event) {
    var hitResult = myPath.hitTest(event.point, hitOptions);
    //var hitResult = project.hitTest(event.point, hitOptions);
    project.activeLayer.selected = false;
    if (hitResult && hitResult.item){
      hitResult.item.fullySelected = true;
    }
  }

  onMouseDrag = function(event) {
    if (segment) {
      segment.point = event.point;
      path.smooth();
    }

    if (movePath){
      path.position = event.point;
    }
    updateEndCap(path);
    updateStartCap(path);
}
