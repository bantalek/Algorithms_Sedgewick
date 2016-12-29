// The compareTo() method should compare points by their y-coordinates, breaking ties by their x-coordinates. Formally, the invoking point (x0, y0) is less than the argument point (x1, y1) if and only if either y0 < y1 or if y0 = y1 and x0 < x1.
// The slopeTo() method should return the slope between the invoking point (x0, y0) and the argument point (x1, y1), which is given by the formula (y1 − y0) / (x1 − x0). Treat the slope of a horizontal line segment as positive zero; treat the slope of a vertical line segment as positive infinity; treat the slope of a degenerate line segment (between a point and itself) as negative infinity.
// The slopeOrder() method should return a comparator that compares its two argument points by the slopes they make with the invoking point (x0, y0). Formally, the point (x1, y1) is less than the point (x2, y2) if and only if the slope (y1 − y0) / (x1 − x0) is less than the slope (y2 − y0) / (x2 − x0). Treat horizontal, vertical, and degenerate line segments as in the slopeTo() method.
function draw() {
  var canvas = document.getElementById('canvas');
  console.log(canvas, canvas.getContext)
  if (canvas.getContext) {
    var x0 = 400
    var y0 = 400
    let count = 0;

  }
};
draw();

console.log(fs.readFileSync('./input1000.txt', 'utf8'));


const mappedCoords = coords.map((e) => [e[0]/ 41.25, e[1] / 41.25]);

class Points {
  constructor(points) {
    this.canvas = document.getElementById('canvas');
    this.x0 = 0;
    this.y0 = 800;
    this.coords = points.map((e) => [e[0], this.y0 - e[1]]);
  }

  renderCircles(points = this.coords) {
    let count = 0;
    let circle = new Path2D();
    var ctx = canvas.getContext('2d');

    while (count < points.length) {
      console.log(points[count])
      circle.moveTo(125, 35);
      circle.arc(points[count][0], points[count][1], 10, 0, 2 * Math.PI);
      ctx.fill(circle);
      count++;
    }
  }
}

const x = new Points(mappedCoords);
x.renderCircles();



