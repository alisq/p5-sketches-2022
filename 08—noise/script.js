
	// Noise can be a difficult to grapple. To a more in-depth tutorial, please check out this youtube playlist on noise:
	// https://www.youtube.com/watch?v=Qf4dIN99e2w&t=1s&ab_channel=TheCodingTrain
	// Also this, https://genekogan.com/code/p5js-perlin-noise/

	

function setup() {
	createCanvas(1000,1000)
	
	noStroke();
	fill(0)
	

}

function draw() {

	randomY = height/2-200+random()*50

	noiseY = height/2+200+noise(mouseX*0.1)*50

	
	//this circle's Y position is being determined randomly: line 14.  (the upper circle)
	circle(mouseX,randomY, 5)
	
	
	//this circle's Y position is being determined by perlin noise:line 15.  (the upper circle)
	circle(mouseX,noiseY, 5)


	
}



function mousePressed() {
	saveCanvas("s1","png")
}