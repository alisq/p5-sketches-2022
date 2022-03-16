var circleWidth = 300

function setup() {
    createCanvas(1000,1000);
    colorMode(HSB)
    noStroke()
    

}


function draw() {
    //background(255)

    var r = random() //random values generate a random number between zero and 1
    
    var n = noise(frameCount) //random not from number to number. Google PERLIN noise. fascinating history. we covered this.
    
    
    var s = sin(frameCount/100) //the sets up a SINE WAVE        

    var cX = map(s,-1,1,circleWidth/2,width-circleWidth/2) //take the S variable and scale it over the width of the page


    var cColor = map(sin(frameCount/300),-1,1,0,255); //getting a number from 0-255 that will be used to determin the fill value.

    

    fill(cColor,255,255) // here we make the cColor number into that actual fill color of the circle.


    circleWidth = noise(frameCount/100)*100 //rewriting the circleWidth variable to be a noisy number between 0-100

    
    var cY = noise(frameCount/50)   //getting a noisy number based on frameCount but between 0 and 1.
        cY = map(cY, 0,1,0,height)  //remapping that variable to be between 0 and the canvas height.

        //I could have easily done the same thing in one line, it would be a little less legible though. SEE BELOW.
        //var cY = map(noise(frameCount/50), 0,1,0,height)

    
    circle(cX,cY,circleWidth)
    
    









}