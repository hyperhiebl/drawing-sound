var c1 = 0;
var osc;

function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB, 255);
	stroke(color(0, 126, 255));
	strokeWeight(10)
	frameRate(30);
	background(255);


	// A triangle oscillator
	osc = new p5.Noise();
	// Start silent
	osc.start();
	osc.amp(0.5);
	// osc.fade(0.5,0.2);
}

function draw() {
	c1++;
	stroke(color(c1%255, 126, 255));
	console.log(c1);
	line(mouseX, mouseY, pmouseX, pmouseY);
} 