let particles = [];

let fireColors;
let waterColors;
let forestColors;

let currentColors;

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();

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

    waterColors = [
        color("#001b48"),
        color("#004581"),
        color("#018abd"),
        color("#97cbdc"),
        color("#dde8f0"),
    ];

    forestColors = [
        color("#4b6154"),
        color("#64ac8f"),
        color("#94d6ba"),
        color("#e7f5dc"),
        color("#c0dfc2"),
    ];

    currentColors = fireColors;
}

function draw() {
    background(20);

    let isMovingX = mouseX != pmouseX;
    let isMovingY = mouseY != pmouseY;

    if (isMovingX || isMovingY) {
        for (let i = 0; i < 30; i += 1) {
            let p = {
                x: mouseX,
                y: mouseY,
                size: random(5, 20),
                xSpeed: random(-5, 5),
                ySpeed: random(-5, 5),
                shrinkRate: random(0.5, 1.5),
                c: random(currentColors),
            };
            particles.push(p);
        }
    }

    for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        const factor = mouseIsPressed ? 0.5 : 1.5;
        p.x += p.xSpeed * factor;
        p.y += p.ySpeed * factor;
        p.size -= p.shrinkRate;
        fill(p.c);
        noStroke();
        circle(p.x, p.y, p.size);

        if (p.size <= 0) {
            particles.splice(i, 1);
            i--;
        }

    }
}

function keyPressed() {
    if (key == "1") {
        currentColors = fireColors;
    } else if (key == "2") {
        currentColors = waterColors;
    } else if (key == "3") {
        currentColors = forestColors;
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}