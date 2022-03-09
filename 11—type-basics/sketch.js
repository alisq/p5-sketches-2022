var exampleText = "In fact, quite paradoxically, this typographic monoculture seems to thrive in European independent art publishing and events, and in schools with cultural ambitions; the paradox lies in seeing its extreme conformism and disregard to visual diversity used to support and promote alternative content, often self produced and loaded with critical expectations which are instantly denied by its flattened-out visual presentation."

function setup() {
	createCanvas(1000,1000)

	// setting up basic text in p5;	
	// textSize(500)	
	// fill(255,0,0)	
	// text("hello world", 150,750)

	noFill();
	
	
}


function draw() {
	background(255)

	stroke(255,0,0);
	//textSize(mouseX)	
	
	//SIMPLE POINT TEXT
	text("hello world", 150,750)

	stroke(0,0,255)
	
	textSize(50)

	//CHANGE THE LEADING OF THE AREA TEXT BASED ON MOUSEY (MAP TO SMALLER RANGE)
	var leading = map(mouseY,0,height,50,150)

	//AREA TYPE
	textLeading(leading)
	text(exampleText,120,120,880,880)

}


