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
            size: random(10, 20),
        };
        particles.push(p);
    }

    for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        circle(p.x, p.y, p.size);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}