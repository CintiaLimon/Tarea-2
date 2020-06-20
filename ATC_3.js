var x;
var y;
function setup() {
  createCanvas(400,400);
  x=360
  y=200
}

function draw() {
  background(255);
  fill(225);
  rectMode(CENTER);
  rect(200,200,x,x);
  fill(255);
  ellipseMode(CENTER);
  ellipse(200,200,y,y);
  x=x-1
  y=y-1
}
