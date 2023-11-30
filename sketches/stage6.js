let particles = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(20);

    let isMovingX = mouseX != pmouseX;
    let isMovingY = mouseY != pmouseY;

    if (isMovingX || isMovingY) {
        for (let i = 0; i < 10; i += 1) {
            let p = {
                x: mouseX,
                y: mouseY,
                size: random(10, 20),
                xSpeed: random(-5, 5),
                ySpeed: random(-5, 5),
            };
            particles.push(p);
        }
    }

    for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        p.x += p.xSpeed;
        p.y += p.ySpeed;
        circle(p.x, p.y, p.size);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}