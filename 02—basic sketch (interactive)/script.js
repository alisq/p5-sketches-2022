var yigit = 0;

function setup() {
	createCanvas(1000,1000)
	background(105, 0, 255)

	

	stroke(255)
	noFill()
	strokeWeight(2)


}

function draw() {
	

	//this variable is based on the X position of the mouse and it affects the radius of the circle.
	var circleRadius = 50+mouseX/4

	//mouseX = x-coordinate of the mouse
	//mouseY = y-coordinate of the mouse
	//circleRadius = custom variable I made up (see above)
	circle(mouseX, mouseY,circleRadius)

}



function mousePressed() {
	saveCanvas("s2","png")
}


















