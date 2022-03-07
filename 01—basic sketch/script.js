
function setup() {  
	createCanvas(1000,1000)
	background(105, 0, 255)
	
	
	stroke(255)
	noFill()
	strokeWeight(2)
	circle(500, 500,200)


	noStroke();
	fill(255,0,0)
	rect(50,55,200,200)

	
}


function mousePressed() {
	saveCanvas("s1","png")
}


















