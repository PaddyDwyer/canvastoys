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
  bigBlob.add(new Point(12,0));
  bigBlob.curveTo(new Point(10, 81), new Point(0, 160));
  bigBlob.curveTo(new Point(2, 165), new Point(7, 163)); //tip
  bigBlob.curveTo(new Point(12.5, 123), new Point(18, 82));
  bigBlob.curveTo(new Point(22.3, 79), new Point(26, 83)); //tip
  bigBlob.curveTo(new Point(25, 101), new Point(22, 126));
  bigBlob.curveTo(new Point(25, 131), new Point(30, 128)); //tip
  bigBlob.curveTo(new Point(31, 122), new Point(32, 115));
  bigBlob.curveTo(new Point(36, 112), new Point(39, 117)); //tip
  bigBlob.curveTo(new Point(38, 125), new Point(36, 138));
  bigBlob.curveTo(new Point(40, 142), new Point(44, 139)); //tip
  bigBlob.curveTo(new Point(51, 73), new Point(52, 6));
  bigBlob.curveTo(new Point(56, 2), new Point(60, 5)); //tip
  bigBlob.curveTo(new Point(59, 83), new Point(50, 156));
  bigBlob.curveTo(new Point(53, 161), new Point(58, 158)); //tip
  bigBlob.curveTo(new Point(68, 76), new Point(69, 0));
  bigBlob.closePath();
  bigBlob.strokeColor = '#ff0000';
  bigBlob.fillColor = '#ff0000';
  bigBlob.strokeWidth = 1;

  var leftGap = new Path();
  leftGap.add(new Point(21, 19));
  leftGap.curveTo(new Point(21, 40), new Point(20, 57));
  leftGap.curveTo(new Point(23.3, 61), new Point(27, 59)); //tip
  leftGap.curveTo(new Point(28, 41), new Point(28, 20));
  leftGap.curveTo(new Point(24.5, 16), new Point(21, 19)); //tip

  var rightGap = new Path();
  rightGap.add(new Point(37, 57));
  rightGap.curveTo(new Point(35, 81), new Point(33, 104));
  rightGap.curveTo(new Point(36, 108), new Point(40, 105)); //tip
  rightGap.curveTo(new Point(43, 81), new Point(44, 59));
  rightGap.curveTo(new Point(41, 54), new Point(37, 57)); //tip

  var leftBlob = new Path();
  leftBlob.add(new Point(19, 149));
  leftBlob.curveTo(new Point(13, 181), new Point(2, 209));
  leftBlob.curveTo(new Point(2, 216), new Point(8, 215)); //tip
  leftBlob.curveTo(new Point(20, 183), new Point(26, 151));
  leftBlob.curveTo(new Point(24, 144), new Point(19, 148)); //tip

  var rightBlob = new Path();
  rightBlob.add(new Point(35, 148));
  rightBlob.curveTo(new Point(33, 162), new Point(29, 178));
  rightBlob.curveTo(new Point(32, 182), new Point(37, 180)); //tip
  rightBlob.curveTo(new Point(40, 163), new Point(43, 148));
  rightBlob.curveTo(new Point(40, 144), new Point(35, 147)); //tip

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
  bigBlob.curveTo(new Point(9, 187), new Point(13, 183)); //tip
  bigBlob.curveTo(new Point(8, 84), new Point(9, 4));
  bigBlob.curveTo(new Point(13, 0), new Point(17, 4)); //tip
  bigBlob.curveTo(new Point(16, 82), new Point(20, 167));
  bigBlob.curveTo(new Point(24, 169), new Point(27, 165)); //tip
  bigBlob.curveTo(new Point(26, 154), new Point(26, 144));
  bigBlob.curveTo(new Point(30, 140), new Point(34, 144)); //tip
  bigBlob.curveTo(new Point(35, 150), new Point(35, 156));
  bigBlob.curveTo(new Point(39, 160), new Point(43, 157)); //tip
  bigBlob.curveTo(new Point(42, 131), new Point(42, 111));
  bigBlob.curveTo(new Point(45, 108), new Point(49, 111)); //tip
  bigBlob.curveTo(new Point(51, 150), new Point(54, 193));
  bigBlob.curveTo(new Point(59, 196), new Point(63, 192)); //tip
  bigBlob.curveTo(new Point(58, 94), new Point(56, 0));
  bigBlob.closePath();
  bigBlob.strokeColor = '#ff0000';
  bigBlob.fillColor = '#ff0000';
  bigBlob.strokeWidth = 1;

  var leftGap = new Path();
  leftGap.add(new Point(25, 85));
  leftGap.curveTo(new Point(25, 111), new Point(26, 133));
  leftGap.curveTo(new Point(30, 137), new Point(34, 132)); //tip
  leftGap.curveTo(new Point(33, 111), new Point(33, 87));
  leftGap.curveTo(new Point(29.5, 81), new Point(25, 85)); //tip

  var rightGap = new Path();
  rightGap.add(new Point(40, 48));
  rightGap.curveTo(new Point(40, 69), new Point(40, 87));
  rightGap.curveTo(new Point(45, 92), new Point(49, 87)); //tip
  rightGap.curveTo(new Point(49, 69), new Point(49, 50));
  rightGap.curveTo(new Point(45, 44), new Point(40, 48)); //tip

  var leftBlob = new Path();
  leftBlob.add(new Point(21, 175));
  leftBlob.curveTo(new Point(22, 194), new Point(24, 208));
  leftBlob.curveTo(new Point(28, 211), new Point(31, 206)); //tip
  leftBlob.curveTo(new Point(30, 191), new Point(29, 176));
  leftBlob.curveTo(new Point(25, 171), new Point(21, 175)); //tip

  var rightBlob = new Path();
  rightBlob.add(new Point(37, 178));
  rightBlob.curveTo(new Point(40, 216), new Point(44, 248));
  rightBlob.curveTo(new Point(49, 250), new Point(52, 245)); //tip
  rightBlob.curveTo(new Point(48, 213), new Point(44, 178));
  rightBlob.curveTo(new Point(40, 173), new Point(37, 178)); //tip

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
  bigBlob.curveTo(new Point(32, 173), new Point(38, 175)); //tip
  bigBlob.curveTo(new Point(69, 147), new Point(92, 120));
  bigBlob.curveTo(new Point(97, 119), new Point(99, 124)); //tip
  bigBlob.curveTo(new Point(85, 141), new Point(71, 157));
  bigBlob.curveTo(new Point(71, 162), new Point(77, 162)); //tip
  bigBlob.curveTo(new Point(81, 157), new Point(84, 154));
  bigBlob.curveTo(new Point(89, 154), new Point(91, 158)); //tip
  bigBlob.curveTo(new Point(83, 167), new Point(76, 174));
  bigBlob.curveTo(new Point(76, 180), new Point(82, 180)); //tip
  bigBlob.curveTo(new Point(134, 113), new Point(159, 34));
  bigBlob.curveTo(new Point(163, 30), new Point(168, 34)); //tip
  bigBlob.curveTo(new Point(135, 128), new Point(76, 196));
  bigBlob.curveTo(new Point(73, 203), new Point(80, 203)); //tip
  bigBlob.curveTo(new Point(153, 112), new Point(178, 0));
  bigBlob.closePath();
  bigBlob.strokeColor = '#ff0000';
  bigBlob.fillColor = '#ff0000';
  bigBlob.strokeWidth = 1;

  var leftGap = new Path();
  leftGap.add(new Point(119, 68));
  leftGap.curveTo(new Point(112, 86), new Point(104, 100));
  leftGap.curveTo(new Point(105, 106), new Point(110, 105)); //tip
  leftGap.curveTo(new Point(119, 89), new Point(126, 73));
  leftGap.curveTo(new Point(124, 67), new Point(119, 68)); //tip

  var rightGap = new Path();
  rightGap.add(new Point(119, 108));
  rightGap.curveTo(new Point(104, 129), new Point(92, 144));
  rightGap.curveTo(new Point(92, 150), new Point(99, 150)); //tip
  rightGap.curveTo(new Point(112, 132), new Point(126, 112));
  rightGap.curveTo(new Point(125, 106), new Point(119, 108)); //tip

  var leftBlob = new Path();
  leftBlob.add(new Point(55, 171));
  leftBlob.curveTo(new Point(25, 195), new Point(2, 210));
  leftBlob.curveTo(new Point(-1, 216), new Point(4, 218)); //tip
  leftBlob.curveTo(new Point(34, 198), new Point(60, 177));
  leftBlob.curveTo(new Point(61, 171), new Point(55, 171)); //tip

  var rightBlob = new Path();
  rightBlob.add(new Point(69, 181));
  rightBlob.curveTo(new Point(57, 190), new Point(44, 200));
  rightBlob.curveTo(new Point(43, 206), new Point(49, 206)); //tip
  rightBlob.curveTo(new Point(61, 197), new Point(74, 186));
  rightBlob.curveTo(new Point(74, 181), new Point(69, 181)); //tip

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
    //var hitResult = myPath.hitTest(event.point, hitOptions);
    var hitResult = project.hitTest(event.point, hitOptions);
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
