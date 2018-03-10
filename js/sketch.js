function setup() {
  createCanvas(windowWidth, windowHeight);  
  colorMode(HSB, 255);
  fill(color(0, 126, 255));
  noStroke();     
  frameRate(30);
  background(255);
}

function draw() { 
  ellipse(mouseX, mouseY, 20, 20);
} 