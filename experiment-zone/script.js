//SOME BASIC MOVEMENT EXAMPlES
let font;


function preload(){
	font = loadFont('Roboto-Regular_enoki-VF.ttf');
  }
  
  let points;
  let bounds;


  function setup() {
	createCanvas(1000, 1000);
	angleMode(DEGREES)
	noStroke()
	fill(255, 104, 204);
  
	points = font.textToPoints('H', 500,500, 400);


	console.log(points)


  }

function draw() {

	//stroke(9)

	

	background(255);
	beginShape()
	for(let i=0;i<points.length;i++) {
		vertex(points[i].x+random(-3,3), points[i].y+random(-3,3));
	}
	endShape()
	
	
	
}



function mousePressed() {
	saveCanvas("s1","png")
}