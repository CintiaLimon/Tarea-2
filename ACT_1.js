var x;
var y;
function setup() {
  createCanvas(400, 400);
  x=75
  y=325
}

function draw() {
  background(255);
  fill(225)
  ellipse(x,x,80,80);
  ellipse(y,y,80,80);
  ellipse(x,y,80,80);
  ellipse(y,x,80,80);
  x=x+1
  y=y-1
}
