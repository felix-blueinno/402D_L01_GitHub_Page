function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(20);

    fill(255);
    text(`X: ${mouseX}`, 10, 10);
    text(`Y: ${mouseY}`, 10, 20);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}