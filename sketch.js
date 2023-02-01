//setup runs once,draw runs over and over and over.

function setup() {//function is a box of code that does things that are connected.
  createCanvas(450, 450);//(width of my canvas , height of canvas)
background(150, 20, 50)
}
function draw() {
  noStroke()
fill('black')  
  circle(mouseX , mouseY, 10) // x position, y position and the diameter
  circle(300, 250, 160)
 }