
function setup() {
	createCanvas(1000,1000)

	noStroke();
	fill(0)
	
	

	//this is a for loop.
	for(var i = 0;i <100;i++) {

		var fromTop = random(height)
		var fromLeft = random(width)
		var size = random(50,100)
		circle(fromTop, fromLeft, size)
	}

}

function draw() {
}



function mousePressed() {
	saveCanvas("s1","png")
}