
function setup() {
	createCanvas(1000,1000)
	

	//width = the width of your canvas (see line 3)
	//height = the height of your canvas (see line 3)
	

}

function draw() { //the draw function is a loop.
	background(255)


	console.log(frameCount) //check your console. frameCount is the nyumber of times your draw loop has loaded
	//mouseX = the current x-coordinate of your mouse.
	//mouseY = the current y-coordinate of your mouse.


	var textContent = mouseX+" pixels from the left"
	textSize(50)
	text(textContent, mouseX, mouseY);
	
}



function mousePressed() {
	saveCanvas("s1","png")
}