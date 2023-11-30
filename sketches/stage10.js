let particles = [];
let fireColors;

function setup() {
    createCanvas(windowWidth, windowHeight);
    fireColors = [
        color("#FF0000"),
        color("#FF5A00"),
        color("#FF9A00"),
        color("#FFCE00"),
        color("#FFE808"),
        color("#FFFFFF"),
        color("#051E3D"),
        color("#052D61"),
        color("#0B1118"),
    ];
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
                shrinkRate: random(0.5, 1.5),
                r: random(255),
                g: random(255),
                b: random(255),
                c: random(fireColors),
            };
            particles.push(p);
        }
    }

    for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        p.x += p.xSpeed;
        p.y += p.ySpeed;
        p.size -= p.shrinkRate;
        fill(p.r, p.g, p.b);
        fill(p.c);
        circle(p.x, p.y, p.size);

        if (p.size <= 0) {
            particles.splice(i, 1);
            i--;
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}