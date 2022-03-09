var ourFont; //create an empty global variable.

function preload() {
		ourFont = loadFont("assets/SpaceMono-Bold.ttf")
}

var points;

function setup() {
	createCanvas(1000,1000)
	textSize(500)
	textFont(ourFont)
	// text("hello",100,800)

	fill(0)
	noStroke()


	points = ourFont.textToPoints("hello",100,800,500);
	console.log(points)

}


function draw() {
	background(255)

	for(var i=0;i<points.length;i++) {
		
		var circleRad = random(2,10)
		circle(points[i].x, points[i].y,circleRad)
	}
	
}