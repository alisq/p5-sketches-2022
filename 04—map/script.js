function setup() {
	createCanvas(1000,1000)
	colorMode(HSB, 255);  //color mode Hue, Saturation Brightness

	noStroke();
	fill(0)
	

}

function draw() { //the draw function is a loop.
	var size = random(50,100) //generate random circle size
	var fillColor = map(mouseX,0,width, 0, 255)  //generate fill color based on mouse position. see map()
	fill(fillColor,255,255); //set fillColor
	circle(mouseX, mouseY, size) //create circle
}



function mousePressed() {
	saveCanvas("s1","png")
}