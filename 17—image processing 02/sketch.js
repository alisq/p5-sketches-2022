var arrowImg;
var squareSize = 20;
var slipDistance = 50;

function preload() {
	arrowImg = loadImage('assets/arrows.png');
}

function setup() {
	createCanvas(1000,1000);
	noStroke();

	frameRate(60)

	image(arrowImg,0,0)



}

function draw() {
		var randomLeft = random(0,width)
		var randomRight = random(0, height)
		square = arrowImg.get(randomLeft,randomRight,squareSize,squareSize);
		image(square,randomLeft+random(-slipDistance,slipDistance),randomRight+random(-slipDistance,slipDistance))
	
}

