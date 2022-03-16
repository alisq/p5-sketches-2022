var points; //declaring empty variable (global)
var font;   //declaring empty variable (global)

function preload() {
    font = loadFont('assets/bluu.otf') //loading an external font file before the sketch loads.
}

function setup() {
    createCanvas(1000,1000)
    
    
     points = font.textToPoints("X",100,800,900) //converts font to points

    

    beginShape()        //the shape function, has three parts: BEGINNING
    for (i=0;i<points.length;i++) {
        
        var xPos = points[i].x+map(sin(points[i].x*0.05),-1,1,-20,20);
        vertex(xPos, points[i].y)       //THEN ALL THE VERTICES of the SHAPE
    }
    endShape(CLOSE) //THEN ENDING

}

