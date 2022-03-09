var prof = "absent"

function setup() {
	createCanvas(300,1000)


	//THE FOR LOOP RETURNS A TRUE OR FALSE BASED ON THE CONDTIONS INSIDE THE PARENTHESES.
	for (var i = 0; i<20;i++) {
		circle(random(1000), random(1000),10)
	}



	// COMPARISON OPERATORS
	// == IS EQUAL TO
	// != IS not EQUAL TO
	// > GREATER THAN
	// < LESS THAN
	// >= GREATER THAN OR EQUAL TO
	// <= LESS THAN OR EQUAL TO

	// if (prof == "present") {
	// 	alert("Ali is in the classroom")
	// } else {
	// 	alert("Ali's not here.")
	// }


	//MATHEMATICAL OPERATORS
	// + plus
	// - minus
	// * multiply
	// / divide


	//VARIABLES
	// Variables can NUMBERS:
	var ourNumber = 20;
	ourNumber = ourNumber+10

	//variables can be STRINGS;
	var profFirstName = "Ali";
	var profLastName = "Qadeer"
	var profName = profFirstName+" "+profLastName;
	console.log(profName)

	//variables can be ARRAYS
	var students = ["Renniel" , "Mariam" , "Phoebe" , "Aleyna" , "Ava" , "Michael" , "Kang" , "Ryan" , "Jabez" , "Na" , "Yijia" , "Humera" , "Dorsa" , "Emily" , "Kavita" , "Radi" , "Amneet" , "Yigit" , "Emily" , "Joycelyn" , "Yumin" , "Hyerim" , "Alice" , "Robson" , "Xin" , "Jiayi"]

	var randomStudent = parseInt( random(0,25) );
	console.log(students[randomStudent])


}


function draw() {


	if (mouseX <= width/2) {
		
		push()

		if (mouseY <= height/2) {
			fill(255,0,0)
		} else {
			fill(0,255,0)
		}
		circle(mouseX,mouseY,30);

		pop()
	} else {
		rect(mouseX, mouseY, 30, 30)
	}
}