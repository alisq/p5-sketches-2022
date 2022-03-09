var noiseTime = 0;


function setup() {
	createCanvas(1000,1000)
	//colorMode(HSB)



	//noStroke();

	

	beginShape();




	for(var x = 0; x < width; x=x+1) {

		console.log(noise(x));
		vertex(x, 500+noise(x*0.1)*100);





	}



	endShape();
}



function draw() {



	noStroke();
	fill(0);
	

	circle(mouseX,mouseY-50-(noise(mouseY*0.01)*25),5);

	circle(mouseX,mouseY-25-(noise(mouseX*0.01)*25),5);

	circle(mouseX,mouseY,5);

	circle(mouseX,mouseY+25+(noise(mouseY*0.01)*25),5);

	circle(mouseX,mouseY+50+(noise(mouseY*0.01)*25),5);



}


function mousePressed() {
	saveCanvas("s1","png")
}


















