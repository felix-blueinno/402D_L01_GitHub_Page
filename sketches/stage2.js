function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(1);
}

function draw() {
    background(20);

    fill(255);
    text(`pmouseX: ${pmouseX} --> mouseX: ${mouseX}`, 10, 10);
    text(`pmouseY: ${pmouseY} --> mouseY: ${mouseY}`, 10, 20);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}