let capture;

function setup() {
  createCanvas(1000, 1000);
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  //capture.hide();
}

function draw() {
  
  //image(capture, 0, 0, 320, 240);
  console.log(capture.get(50,50))
  
}