var windowHeight = window.innerHeight
  , windowWidth = window.innerWidth;
var centerX = windowWidth / 2
  , centerY = windowHeight / 2;
var dx, dy, dmouse, mmX, mmY;

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('p5-holder');
}

function draw() {
  resetMatrix();
  updateMouseVars();
  thing1();
  thing2();
  thing3();
}

function mouseClicked() {
  //clear();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function updateMouseVars() {
  dx = mouseX - pmouseX;
  dy = mouseY - pmouseY;
  mmX = mouseX - width / 2;
  mmY = mouseY - height / 2;
  dmouse = int(dist(mouseX, mouseY, pmouseX, pmouseY));
  if (mouseIsPressed) {
    fill(0);
  }
  else {
    fill(255);
  }
}

function thing1() {
  if (dmouse != 0) {
    ellipse(mouseX, mouseY, dmouse, dmouse);
  }
}
/*
 *  Draws a circle out of circles.
 */
function thing2() {
  var rad, bradius = dmouse, sradius = 25;
  push();
  translate(windowWidth / 2, windowHeight / 2);
  for (var i = 0; i < 360; i++) {
    rad = radians(i);
    ellipse(sin(rad) * bradius + mmX, cos(rad) * bradius + mmY, sradius + dmouse);
  }
  pop();
}
/*
 *  Draws a certain number of circles , in a circle pattern.
 */
function thing3() {
  var angleStep, numCircles = 6, theta, Px, Py, r = 25;
  angleStep = 360.0 / numCircles;
  push();
  for (var i = 0; i < numCircles; i++) {
    theta = i * angleStep + mouseX;
    Px = centerX + (dmouse * cos(radians(theta)));
    Py = centerY + (dmouse * sin(radians(theta)));
    ellipse(Px, Py, sqrt(dmouse));
  }
  pop();
}