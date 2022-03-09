var ourFont; //create an empty global variable.

//a reminder: in order to load external assets, you need to have a localserver running.
function preload() {
	//this loads the font data into a global variable	
	ourFont = loadFont("assets/SpaceMono-Bold.ttf")
}

var points;

function setup() {
	createCanvas(1000,1000)
	textSize(500)
	
	//calling our font variable before loading the text
	textFont(ourFont)
	// text("hello",100,800)

	fill(0)
	noStroke()

						//textToPoints doesn't draw the text on your canvas, instead it generates the data of your shape
						//here's a video tutorial of it: https://www.youtube.com/watch?v=wbDF6xcgvV8&t=725s&ab_channel=xinxin

	points = ourFont.textToPoints("h",100,800,900);
	

}


function draw() {
	background(255)

	for(var i=0;i<points.length;i++) {
		
		var circleRad = random(2,10)
		var xPos = points[i].x
		var yPos = points[i].y
		circle(xPos, yPos,circleRad)
	}
	
}