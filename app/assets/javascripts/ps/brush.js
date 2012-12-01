var myPath = new Path();
myPath.add(new Point(50, 215));
myPath.add(new Point(100, 380));
myPath.add(new Point(280, 100));
myPath.add(new Point(250, 450));
myPath.add(new Point(400, 200));
//myPath.add(new Point(450, 200));
myPath.add(new Point(500, 300));

myPath.smooth();

myPath.strokeColor = '#ff0000';
myPath.strokeWidth = 78;

myPath.strokeCap = 'butt';

var startCap;
var lastStart;
updateStartCap = function(thePath) {
  point = thePath.getPointAt(0);

  if (!startCap) {
    console.log("creating startCap", point);
    startCap = new Path.Circle(point, 40);
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
updateEndCap = function(thePath, drawCallback) {
  if (!drawCallback) {
    drawCallback = drawBrush1;
  }
  length = thePath.length;
  point = thePath.getPointAt(length);
  //point = new Point(60, 180);
  tangent = thePath.getTangentAt(length);
  tangent.length = 30;


  if (!endCap) {
    endCap = drawCallback(point);
    endCap.rotate(tangent.angle - 90, point);
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

var drawBrush1 = function(translationPoint) {
  var bigBlob = new Path();
  bigBlob.add(new Point(20,0));
  bigBlob.curveTo(new Point(15, 81), new Point(0, 161));
  bigBlob.curveTo(new Point(3, 163), new Point(9, 161));
  bigBlob.curveTo(new Point(17, 119), new Point(23, 81));
  bigBlob.curveTo(new Point(28, 79), new Point(31, 83));
  bigBlob.curveTo(new Point(28, 104), new Point(25, 127));
  bigBlob.curveTo(new Point(27, 129), new Point(32, 128));
  bigBlob.curveTo(new Point(34, 121), new Point(35, 116));
  bigBlob.curveTo(new Point(38, 114), new Point(43, 119));
  bigBlob.curveTo(new Point(41, 127), new Point(39, 138));
  bigBlob.curveTo(new Point(42, 142), new Point(47, 139));
  bigBlob.curveTo(new Point(57, 71), new Point(61, 3));
  bigBlob.curveTo(new Point(65, 0), new Point(69, 3));
  bigBlob.curveTo(new Point(65, 76), new Point(51, 157));
  bigBlob.curveTo(new Point(54, 161), new Point(59, 160));
  bigBlob.curveTo(new Point(73, 78), new Point(76, 0));
  bigBlob.closePath();
  bigBlob.strokeColor = 'black';
  bigBlob.fillColor = 'black';
  bigBlob.strokeWidth = 1;

  var leftGap = new Path();
  leftGap.add(new Point(29, 19));
  leftGap.curveTo(new Point(28, 37), new Point(26, 57));
  leftGap.curveTo(new Point(30, 61), new Point(34, 59));
  leftGap.curveTo(new Point(36, 40), new Point(37, 19));
  leftGap.curveTo(new Point(33, 17), new Point(29, 19));

  var rightGap = new Path();
  rightGap.add(new Point(43, 58));
  rightGap.curveTo(new Point(41, 80), new Point(36, 103));
  rightGap.curveTo(new Point(40, 107), new Point(45, 106));
  rightGap.curveTo(new Point(49, 83), new Point(50, 59));
  rightGap.curveTo(new Point(47, 56), new Point(43, 58));

  var leftBlob = new Path();
  leftBlob.add(new Point(21, 147));
  leftBlob.curveTo(new Point(12, 180), new Point(0, 208));
  leftBlob.curveTo(new Point(2, 214), new Point(6, 215));
  leftBlob.curveTo(new Point(20, 184), new Point(28, 149));
  leftBlob.curveTo(new Point(24, 147), new Point(21, 147));

  var rightBlob = new Path();
  rightBlob.add(new Point(37, 147));
  rightBlob.curveTo(new Point(33, 161), new Point(29, 179));
  rightBlob.curveTo(new Point(31, 182), new Point(37, 181));
  rightBlob.curveTo(new Point(41, 164), new Point(45, 149));
  rightBlob.curveTo(new Point(41, 146), new Point(37, 147));

  var endCap = new CompoundPath([bigBlob, leftGap, rightGap, leftBlob, rightBlob]);
  endCap.scale(1.37, endCap.bounds.topLeft);
  var bounds = endCap.bounds;
  endCap.translate(translationPoint - new Point(bounds.width - 39, 0));

  return endCap;
}

var drawBrush2 = function(translationPoint) {
  var bigBlob = new Path();
  bigBlob.add(new Point(2, 0));
  bigBlob.curveTo(new Point(1, 78), new Point(5, 183));
  bigBlob.curveTo(new Point(8, 185), new Point(13, 183));
  bigBlob.curveTo(new Point(8, 84), new Point(9, 4));
  bigBlob.curveTo(new Point(13, 0), new Point(17, 4));
  bigBlob.curveTo(new Point(16, 82), new Point(21, 167));
  bigBlob.curveTo(new Point(24, 168), new Point(27, 165));
  bigBlob.curveTo(new Point(27, 154), new Point(28, 144));
  bigBlob.curveTo(new Point(30, 143), new Point(36, 144));
  bigBlob.curveTo(new Point(40, 158), new Point(43, 157));
  bigBlob.curveTo(new Point(43, 131), new Point(42, 111));
  bigBlob.curveTo(new Point(45, 109), new Point(49, 111));
  bigBlob.curveTo(new Point(51, 150), new Point(54, 193));
  bigBlob.curveTo(new Point(59, 194), new Point(63, 192));
  bigBlob.curveTo(new Point(58, 94), new Point(56, 0));
  bigBlob.closePath();
  bigBlob.strokeColor = 'black';
  bigBlob.fillColor = 'black';
  bigBlob.strokeWidth = 1;

  var leftGap = new Path();
  leftGap.add(new Point(25, 85));
  leftGap.curveTo(new Point(24, 111), new Point(26, 133));
  leftGap.curveTo(new Point(31, 135), new Point(34, 132));
  leftGap.curveTo(new Point(33, 111), new Point(33, 87));
  leftGap.curveTo(new Point(29, 84), new Point(25, 85));

  var rightGap = new Path();
  rightGap.add(new Point(40, 48));
  rightGap.curveTo(new Point(40, 69), new Point(40, 87));
  rightGap.curveTo(new Point(45, 90), new Point(49, 87));
  rightGap.curveTo(new Point(49, 69), new Point(49, 50));
  rightGap.curveTo(new Point(44, 47), new Point(40, 48));

  var leftBlob = new Path();
  leftBlob.add(new Point(21, 175));
  leftBlob.curveTo(new Point(21, 194), new Point(24, 208));
  leftBlob.curveTo(new Point(28, 209), new Point(31, 206));
  leftBlob.curveTo(new Point(29, 191), new Point(29, 176));
  leftBlob.curveTo(new Point(25, 173), new Point(21, 175));

  var rightBlob = new Path();
  rightBlob.add(new Point(37, 178));
  rightBlob.curveTo(new Point(40, 216), new Point(44, 248));
  rightBlob.curveTo(new Point(48, 248), new Point(52, 245));
  rightBlob.curveTo(new Point(49, 213), new Point(44, 178));
  rightBlob.curveTo(new Point(40, 176), new Point(37, 178));

  var endCap = new CompoundPath([bigBlob, leftGap, rightGap, leftBlob, rightBlob]);
  endCap.scale(1.41, endCap.bounds.topLeft);
  var bounds = endCap.bounds;
  endCap.translate(translationPoint - new Point(bounds.width - 47, 0));

  return endCap;
}

var drawBrush3 = function(translationPoint) {
  var bigBlob = new Path();
  bigBlob.add(new Point(121, 0));
  bigBlob.curveTo(new Point(99, 92), new Point(33, 167));
  bigBlob.curveTo(new Point(33, 172), new Point(38, 175));
  bigBlob.curveTo(new Point(69, 147), new Point(92, 120));
  bigBlob.curveTo(new Point(96, 120), new Point(99, 124));
  bigBlob.curveTo(new Point(85, 141), new Point(71, 157));
  bigBlob.curveTo(new Point(72, 161), new Point(77, 162));
  bigBlob.curveTo(new Point(80, 157), new Point(84, 154));
  bigBlob.curveTo(new Point(84, 165), new Point(91, 158));
  bigBlob.curveTo(new Point(77, 179), new Point(82, 180));
  bigBlob.curveTo(new Point(134, 113), new Point(159, 34));
  bigBlob.curveTo(new Point(163, 32), new Point(168, 34));
  bigBlob.curveTo(new Point(135, 128), new Point(76, 196));
  bigBlob.curveTo(new Point(74, 201), new Point(80, 203));
  bigBlob.curveTo(new Point(153, 112), new Point(178, 0));
  bigBlob.closePath();
  bigBlob.strokeColor = 'black';
  bigBlob.fillColor = 'black';
  bigBlob.strokeWidth = 1;

  var leftGap = new Path();
  leftGap.add(new Point(119, 68));
  leftGap.curveTo(new Point(112, 86), new Point(104, 100));
  leftGap.curveTo(new Point(105, 105), new Point(110, 105));
  leftGap.curveTo(new Point(119, 89), new Point(126, 73));
  leftGap.curveTo(new Point(123, 67), new Point(119, 68));

  var rightGap = new Path();
  rightGap.add(new Point(119, 108));
  rightGap.curveTo(new Point(105, 129), new Point(92, 144));
  rightGap.curveTo(new Point(93, 149), new Point(99, 150));
  rightGap.curveTo(new Point(112, 132), new Point(126, 112));
  rightGap.curveTo(new Point(123, 107), new Point(119, 108));

  var leftBlob = new Path();
  leftBlob.add(new Point(55, 171));
  leftBlob.curveTo(new Point(26, 194), new Point(2, 210));
  leftBlob.curveTo(new Point(0, 215), new Point(4, 218));
  leftBlob.curveTo(new Point(34, 198), new Point(60, 177));
  leftBlob.curveTo(new Point(60, 172), new Point(55, 171));

  var rightBlob = new Path();
  rightBlob.add(new Point(69, 181));
  rightBlob.curveTo(new Point(57, 190), new Point(44, 200));
  rightBlob.curveTo(new Point(44, 205), new Point(49, 206));
  rightBlob.curveTo(new Point(62, 198), new Point(74, 186));
  rightBlob.curveTo(new Point(73, 182), new Point(69, 181));

  var endCap = new CompoundPath([bigBlob, leftGap, rightGap, leftBlob, rightBlob]);
  endCap.scale(1.37, endCap.bounds.topLeft);
  var bounds = endCap.bounds;
  endCap.translate(translationPoint - new Point(bounds.width - 37, 0));

  return endCap;
}

updateEndCap(myPath);
updateStartCap(myPath);
    

  var hitOptions = {
    segments: true,
    stroke: true,
    fill: true,
    tolerance: 5
  };

var endCapCount = 0;

  //tool = new Tool();

  //tool.onMouseDown = function(event) {
  onMouseDown = function(event) {
    segment = path = null;
    var hitResult = myPath.hitTest(event.point, hitOptions);
    //var hitResult = project.hitTest(event.point, hitOptions);

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

    hitResult = endCap.hitTest(event.point, {fill:true});
    if (hitResult) {
      endCapCount = (endCapCount + 1) % 3;
      endCap.remove();
      endCap = null;

      var drawCallback;
      if (endCapCount == 0) {
        drawCallback = drawBrush1;
      } else if (endCapCount == 1) {
        drawCallback = drawBrush2;
      } else if (endCapCount == 2) {
        drawCallback = drawBrush3;
      }

      updateEndCap(myPath, drawCallback);
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
      updateEndCap(path);
      updateStartCap(path);
    }
}
