var rad = 50;
var xpos, ypos; // Starting position of shape
var img;

let xspeed = 5.8; // Speed of the shape
let yspeed = 2.2; // Speed of the shape

let xdirection = 1; // Left or Right
let ydirection = 1; // Top to Bottom

function preload() {
	img = loadImage('example.png')
}

function setup() {
	colorMode(HSB)
	noStroke();
  createCanvas(1000, 1000);
  
  ellipseMode(RADIUS);
  
  xpos = width / 2;
  ypos = height / 2;

  blendMode(SCREEN)
  
  

  	translate(500,500)
  	
	image(img,0,0);
   filter(BLUR, 13);
  



}
	

function draw() {
  //background(255);

  // Update the position of the shape
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;

  // Test to see if the shape exceeds the boundaries of the screen
  // If it does, reverse its direction by multiplying by -1
  if (xpos > width - rad || xpos < rad) {
    xdirection *= -1;
  }
  if (ypos > height - rad || ypos < rad) {
    ydirection *= -1;
  }

  // Draw the shape
  fill(map(xpos,0,1000,0,255),255,255)
  blendMode(MULTIPLYx	)
  ellipse(xpos, ypos, rad, rad);
}





