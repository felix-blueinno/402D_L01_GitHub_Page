let particles = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(20);

    let isMovingX = mouseX != pmouseX;
    let isMovingY = mouseY != pmouseY;

    if (isMovingX || isMovingY) {
        let p = {
            x: mouseX,
            y: mouseY,
        };
        particles.push(p);
    }

    for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        circle(p.x, p.y, 10);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}