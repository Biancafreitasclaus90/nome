function setup() {
  createCanvas(500, 500);
  background("purple");
}

function draw() {
 stroke("blue")                     
  fill("blue");  
  
  
  if(mouseIsPressed) 
  rect(mouseX,mouseY,40,40);
}
