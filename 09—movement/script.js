//SOME BASIC MOVEMENT EXAMPlES

function setup() {
	createCanvas(1000,1000)
	angleMode(DEGREES)
}

function draw() {
	background(255) //COMMENT OUT THIS LINE TO SEE HOW MOVEMENT IS LOOKS WITHOUT REWRITING THE BACKGROUND FOR EVERY FRAME





	noStroke();
	fill(0,255,0)
	var circleSize = map(noise(frameCount*0.01),0,1,0,400);
	circle(200,200,circleSize);

	noFill();
	stroke(255,0,0)
	strokeWeight(4)

	push();
		translate(500,500)
		rotate(frameCount)
		rect(0,0,200,50)
	pop();


	fill(0,0,255)
	noStroke()
	
	
	circle(frameCount-50,800,100);

	

	
}



function mousePressed() {
	saveCanvas("s1","png")
}