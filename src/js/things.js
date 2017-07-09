/*
 * Draws 
 */
function thing1() {
  if (dmouse != 0) {
    ellipse(mouseX, mouseY, dmouse, dmouse);
  }
}

function thing2() {
  var rad,
    bradius = 250,
    sradius = 1;
  push();
  translate(windowWidth / 2, windowHeight / 2);
  for (var i = 0; i < 360; i++) {
    rad = radians(i);
    ellipse(sin(rad) * bradius + mmX, cos(rad) * bradius + mmY, sradius*dmouse);
  }
  pop();
}

function thing3() {
  var angleStep,
    numCircles = 24,
    theta,
    Px,
    Py,
    r = 25;
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
