
function setup() {
	createCanvas(1000,1000)
	
	angleMode(DEGREES) //this allows you to input degrees instead of radians (360 degrees = full circle, 1pi = full cicle in radians)


	noFill();
	stroke(255,0,0);

	for (var i=0;i<360;i=i+10) {

		//if you're stuggling to understand transformations, watch this video: https://www.youtube.com/watch?v=o9sgjuh-CBM&ab_channel=TheCodingTrain
		
		push();
			translate(500,500);
			rotate(i)
			rect(0,0,250,100);
		pop();
	}
	

}

// 



function mousePressed() {
	saveCanvas("s1","png")
}