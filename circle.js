var NUMBER_OF_LINES = 1
var SPEED = 0.05

var t = 0
function setup() {
  createCanvas(windowWidth, windowHeight)
  stroke(color(255, 200, 255, 200))
  strokeWeight(5)
  c = color(200, 0, 100, 10)
  background(c)
}

function draw() {
  background(c)

  translate(width/2, height/2)
  for (var i=0; i<NUMBER_OF_LINES; i++) {
    line(x1(t + i), y1(t + i), x2(t + i), y2(t + i))
  }

  t += SPEED
  console.log(t);
}

function x1(t) {
  return Math.sin(t) * 250
}

function y1(t) {
  return Math.cos(t) * 200
}

function x2(t) {
  return -Math.sin(t) * 50
}

function y2(t) {
  return Math.cos(t) * 50
}
