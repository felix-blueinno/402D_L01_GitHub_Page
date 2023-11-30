# Project 1

Duration: 90 mins

## Topic

Elemental Bubblescape

## Objectives

### Attitude

1. Foster an appreciation for creative coding and interactive art using p5.js.

2. Encourage experimentation and exploration in designing and customizing visual effects.

3. Promote perseverance and problem-solving in debugging and modifying code for visual simulations.

### Skills

1. Develop proficiency in using p5.js for creating dynamic and interactive visual simulations.

2. Acquire the ability to generate and manipulate particle systems with varying properties (color, size, movement).

3. Enhance coding skills in JavaScript, particularly in animation and event handling.

4. Improve understanding of p5.js functions and concepts, such as drawing shapes, handling mouse events, and creating particle effects.

5. Learn to respond to keyboard input (key-press) to change the color scheme of the particle simulation.

### Knowledge

1. Comprehend how to create and manage particle objects within the simulation.

2. Learn about randomness (random number generation) and how it is used to create dynamic particle effects.

3. Gain knowledge about color handling in p5.js, including creating custom color palettes.

4. Explore the use of alpha transparency to achieve fading and blending effects in visual simulations.

## Prior Knowledge

1. Coordinate system in P5JS
2. P5JS flow (setup → draw)
3. Basic understandings of shapes API
4. RGB Color code
5. if-else
6. for loop
7. array/list
8. object literal

## Preparations

1. Account for logging in p5.js (Google/Github)
2. Account for logging in Kahoot

## Materials

1. Project sample: <https://editor.p5js.org/felix-tropical/sketches/lkaxISO3B>

2. Kahoot Quiz: <https://play.kahoot.it/v2/?quizId=6b05ed89-c202-4089-af69-9850d77ad9cc>

## Content

### 1. Introduction (5 mins)

1. Demonstrate the project sample.

2. Briefly explain the principle and break down the steps:
    a. Detect mouse movement.
    b. Create particle objects if mouse is moving at mouse position.
    c. Each particle object has random properties (e.g. size, color, speed, direction).
    d. Each particle object will shrink and fade out over time.
    e. Each particle object will be removed from the list when it is no longer visible.

### 2. Detect Mouse Movement (10 mins)

1. Introduce/Revise the `mouseX` and `mouseY` variables.

    ```javascript
    function draw() {
        background(20);

        text(`mouseX: ${mouseX}`, 10, 10);
        text(`mouseY: ${mouseY}`, 10, 20);
    }
    ```

2. Introduce/Revise the `pmouseX` and `pmouseY` variables.

    ```javascript
    function setup() {
        createCanvas(windowWidth, windowHeight);
        frameRate(1);
    }
    
    function draw() {
        background(20);

        text(`pmouseX: ${pmouseX} --> mouseX: ${mouseX}`, 10, 10);
        text(`pmouseY: ${pmouseY} --> mouseY: ${mouseY}`, 10, 20);
    }
    ```

    > Note: `frameRate(1)` is used to slow down the animation to make it easier to see the changes between `pmouseX` and `mouseX`.

3. Question students how to tell if mouse is moving.

    ```javascript
    function setup() {
        createCanvas(windowWidth, windowHeight);
        // frameRate(1);
    }

    function draw() {
        background(20);

        // text(`pmouseX: ${pmouseX} --> mouseX: ${mouseX}`, 10, 10);
        // text(`pmouseY: ${pmouseY} --> mouseY: ${mouseY}`, 10, 20);

        let isMovingX = mouseX != pmouseX;
        let isMovingY = mouseY != pmouseY;

        if (isMovingX || isMovingY) {
            // TODO: create particles
        }
    }
    ```

### 3. Create Particle Objects (15 mins)

1. Create an empty list to store particle objects.

    ```javascript
    let particles = [];
    ```

2. Create particle object if mouse is moving and add it to the list.

    ```javascript
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
    }
    ```

3. Draw the particle objects.

    ```javascript
    function draw() {
        ...

        for (let i = 0; i < particles.length; i++) {
            let p = particles[i];
            circle(p.x, p.y, 10);
        }
    }
    ```

4. Question students how to randomize the particle size.

    > Expected response: adds `size` property to the particle object. Then, update the `size` property of the particle with a random number.

    ```javascript
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
    ```

5. Question students how to make the particles move.

    > Expected response: adds `xSpeed` and `ySpeed` properties to the particle object. Then, update the `x` and `y` properties of the particle with the speed properties.

    ```javascript
    function draw() {
        background(20);

        let isMovingX = mouseX != pmouseX;
        let isMovingY = mouseY != pmouseY;

        if (isMovingX || isMovingY) {
            let p = {
                x: mouseX,
                y: mouseY,
                size: random(10, 20),
                xSpeed: random(-5, 5),
                ySpeed: random(-5, 5),
            };
            particles.push(p);
        }

        for (let i = 0; i < particles.length; i++) {
            let p = particles[i];
            p.x += p.xSpeed;
            p.y += p.ySpeed;
            circle(p.x, p.y, p.size);
        }
    }
    ```

6. Question students how to create multiple particles at once.

    > Expected response: Wrap the code in a for loop.

    ```javascript
    function draw() {
        ...
        if (isMovingX || isMovingY) {
            for (let i = 0; i < 10; i += 1) {
                let p = {
                    x: mouseX,
                    y: mouseY,
                    size: random(5, 20),
                    xSpeed: random(-5, 5),
                    ySpeed: random(-5, 5),
                };
                particles.push(p);
            }
        }
        ...
    }
    ```

### 4. Shrinking and Removing (10 mins)

1. Question students how to shrink the particles.

    > Expected response: adds `shrinkRate` property to the particle object. Then, update the `size` property of the particle by subtracting the shrink rate.

    ```javascript
    function draw() {
        background(20);

        let isMovingX = mouseX != pmouseX;
        let isMovingY = mouseY != pmouseY;

        if (isMovingX || isMovingY) {
            for (let i = 0; i < 10; i += 1) {
                let p = {
                    x: mouseX,
                    y: mouseY,
                    size: random(5, 20),
                    xSpeed: random(-5, 5),
                    ySpeed: random(-5, 5),
                    shrinkRate: random(0.5, 1.5),
                };
                particles.push(p);
            }
        }

        for (let i = 0; i < particles.length; i++) {
            let p = particles[i];
            p.x += p.xSpeed;
            p.y += p.ySpeed;
            p.size -= p.shrinkRate;
            circle(p.x, p.y, p.size);
        }
    }
    ```

    > Expected response: When the particles shrink to negative size, they become bigger again. To fix this, add a condition to remove the particle from the list when it is no longer visible.

2. Remove particles if size is smaller than 0.

    ```javascript
    function draw() {
        ...

        for (let i = 0; i < particles.length; i++) {
            let p = particles[i];
            p.x += p.xSpeed;
            p.y += p.ySpeed;
            p.size -= p.shrinkRate;
            circle(p.x, p.y, p.size);

            if (p.size <= 0) {
                particles.splice(i, 1);
                i--;
            }
        }
    }
    ```

### 5. Color Handling (10 mins)

1. Question students how to randomize the particle color.

    ```javascript
    function draw() {
        ...

        if (isMovingX || isMovingY) {
            for (let i = 0; i < 10; i += 1) {
                let p = {
                    x: mouseX,
                    y: mouseY,
                    size: random(5, 20),
                    xSpeed: random(-5, 5),
                    ySpeed: random(-5, 5),
                    shrinkRate: random(0.5, 1.5),
                    r: random(255),
                    g: random(255),
                    b: random(255),
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
            circle(p.x, p.y, p.size);

            if (p.size <= 0) {
                particles.splice(i, 1);
                i--;
            }
        }
    }
    ```

2. Distribute the color palettes to students. (Or let them choose their own colors.)

    ```javascript
    let fireColors;

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
    }
    ```

3. Set particles' color from the color list instead.

    ```javascript
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
                    // r: random(255),
                    // g: random(255),
                    // b: random(255),
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
            // fill(p.r, p.g, p.b);
            fill(p.c);
            circle(p.x, p.y, p.size);

            if (p.size <= 0) {
                particles.splice(i, 1);
                i--;
            }
        }
    }
    ```

4. Distribute two more palettes and let students try them out.

    ```javascript
    let fireColors;
    let waterColors;
    let forestColors;

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
    }
    ```

### 6. Keyboard Input (10 mins)

1. Question students how to switch the color palette.

    > Expected response: adds a variable to store the current color palette. Then, update the color palette variable when a key is pressed.

    ```javascript
    ...
    let currentColors;

    function setup() {
        ...
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
        ...
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
    ```

### 7. Preparation for Next Lesson (15 mins)

#### 7.1 Recognizing the Three Sides (5 mins)

1. Explain the necessity of understanding trigonometry for creating more complex effects for coming lessons.

2. Draw a right-angle triangle on the board and label its three sides: hypotenuse, opposite, and adjacent.

3. Explain the definitions of each side:
    - Hypotenuse: The side opposite the right angle (always the longest side).
    - Opposite: The side opposite the angle of interest.
    - Adjacent: The side adjacent (next to) the angle of interest.

4. Provide a few examples on the board for practice, labeling the sides.

#### 7.2 Using Sin, Cos, and Tan (5 minutes)

1. Introduce the sine (sin), cosine (cos), and tangent (tan) trigonometric ratios.

2. Explain how to use these ratios to find missing sides or angles in a right-angle triangle.

3. Write down the formulas on the board:
    sin(angle) = opp/hyp
    cos(angle) = adj/hyp
    tan(angle) = opp/adj

    angle = arcsin(opp/hyp)
    angle = arccos(adj/hyp)
    angle = arctan(opp/adj)

4. Provide a few examples of using these ratios to find missing sides or angles in right-angle triangles.

    > Note: Maybe use online calculator to demonstrate the calculations.
    >
    > <https://www.symbolab.com/solver/trigonometry-calculator>, turn on "full pad" option and select "sin cos" tab to see the options.
    >
    > <https://www.mathsisfun.com/sine-cosine-tangent.html>

### 8. Kahoot Quiz (10 mins)

1. Kahoot quiz: <https://play.kahoot.it/v2/?quizId=6b05ed89-c202-4089-af69-9850d77ad9cc>

    > Teacher may show the formulas on the board for students to refer to.
