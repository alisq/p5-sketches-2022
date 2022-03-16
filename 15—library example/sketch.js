//MAKE SURE YOU ALSO CHECK THE HTML FILE TO FIND THE SOUND LIBRARY

var mic; //empty global variable

function setup() {
    createCanvas(1000,1000)

    mic = new p5.AudioIn();  //initializing the the sound library
    mic.start();    //start recording sound from the microphone
    noStroke();
    colorMode(HSB)
    
    
    
 
}

// function mousePressed() {
//     mic.start();
// }

function draw() {
    
    var v = map(mic.getLevel(),0,0.5,1000,0); //variable to map the mic level to the height of the document.

    

    console.log(v)


    fill(map(mic.getLevel(),0,0.5,0,255),255,255)  //circle color based on mapped mic level too.
    circle(width/2,v,map(mic.getLevel(),0,0.5,30,100))

}
