var windowHeight = window.innerHeight,
  windowWidth = window.innerWidth;

var centerX = windowWidth / 2,
  centerY = windowHeight / 2;

var dx, dy, dmouse, mmX, mmY, mouseDown, mouseDrag;

var objects = [],
  numObjects = 100;

var spriteLocations = [];
var sprites = [];


//System Functions
function preload() { // preload() runs once
  // img = loadImage('assets/laDefense.jpg');
}

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('p5-holder');
  populateObjects();
  //frameRate(10);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked() {
  //clear();
  //objects = [];
}

//Helper Functions
function updateMouseVars() {
  dx = mouseX - pmouseX;
  dy = mouseY - pmouseY;
  mmX = mouseX - width / 2;
  mmY = mouseY - height / 2;
  dmouse = int(dist(mouseX, mouseY, pmouseX, pmouseY));
}

function populateObjects() {
  var tempObj;
  for (var i = 0; i < numObjects; i++) {
    tempObj = new Jitter();
    objects.push(tempObj);
  }
}

function updateObjects(objects) {
  var gravity;
  if (mouseIsPressed) {
    gravity = createVector(0, -9.8);
  } else {
    gravity = createVector(0, 9.8);
  }

  for (var i = 0; i < objects.length; i++) {
    objects[i].update();
    objects[i].applyForces(gravity);
    objects[i].display();

    objects[i].checkEdges();
  }
}

//Animation Loop
function draw() {
  //clear();
  updateMouseVars();
  thing1();
  thing2();
  thing3();
  updateObjects(objects);
}
