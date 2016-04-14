var NUMBER_OF_LINES = 10
var SPEED = 0.5

var t = 0
function setup() {
  createCanvas(600, 600)
  background(20)
}

function draw() {
  background(20)

  translate(width/2, height/2)

  for (var i=0; i < NUMBER_OF_LINES; i++) {
    stroke((t+i*20)%100+100, 20, 100)
    strokeWeight(5)
    line(x1(t + i), y1(t + i), x2(t + i), y2(t + i))

    stroke((t+i*20)%100+100, 20, 200)
    strokeWeight(1)
    line(x2(t + i * 2), y1(t + i * 2), x1(t + i * 2), y2(t + i * 2))
  }

  // point(x1(t), y1(t))
  // point(x2(t), y2(t))

  t += SPEED
}

function x1(t) {
  return Math.sin(t / 10) * 100 + Math.sin(t / 5) * 20
}

function y1(t) {
  return Math.cos(t / 10) * 100
}

function x2(t) {
  return Math.sin(t / 10) * 200 + Math.sin(t) * 2
}

function y2(t) {
  return Math.cos(t / 20) * 200 + Math.cos(t / 12) * 20
}
