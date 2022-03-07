//REMEMBER! To use an external asset in your sketch, you NEED to run a localserver.


function preload() {   //This script will load all the data you need before your sketchloads
	examplePic = loadImage('assets/example.png')
}


function setup() {
	createCanvas(1000,1000)
	
	
	

}

function draw() {
	blendMode(MULTIPLY) //try other blendmodes outlined here: https://p5js.org/reference/#/p5/blendMode

	image(examplePic, mouseX, mouseY,150,100);
}



function mousePressed() {
	saveCanvas("s1","png")
}