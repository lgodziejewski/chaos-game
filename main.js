function MainClass() {


    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    var info = document.getElementById("info");

    var maxIterations = 20000;

    var dot1 = {
        x: 10,
        y: 490
    };

    var dot2 = {
        x: 490,
        y: 490
    };

    var dot3 = {
        x: 250,
        y: 10
    };

    var dots = [
        dot1,
        dot2,
        dot3
    ];

    var startingPoint = {
        x: getRandomInCanvas(),
        y: getRandomInCanvas()
    };

    var intervalId;
    var iteration = 0;
    var lastDot;

    init();

    function init() {
        console.log("Starting");

        drawInitialDots();
        lastDot = startingPoint;

        info.innerHTML = 'drawing';

        intervalId = window.setInterval(loop, 1);

    }

    function drawInitialDots() {
        var i;
        for (i = 0; i < dots.length; i++) {
            drawDot(dots[i]);
        }

        drawDot(startingPoint);
    }

    function loop() {

        info.innerHTML = 'drawing, iteration: ' + iteration;

        var newId = getRandomId();

        var goToDot = dots[newId];

        var newDot = calculateNewDot(lastDot, goToDot);

        drawDot(newDot);

        lastDot = newDot;

        iteration++;
        if (iteration >= maxIterations) {
            window.clearInterval(intervalId);
            info.innerHTML = 'Finished. Result: Sierpinski Triangle';
            console.log('end');
        }
    }

    function drawDot(dot) {
        ctx.fillRect(dot.x, dot.y, 1, 1);
    }

    function calculateNewDot(startDot, endDot) {
        return {
            x: startDot.x + Math.floor((endDot.x - startDot.x) / 2),
            y: startDot.y + Math.floor((endDot.y - startDot.y) / 2)
        };
    }

    function getRandomInCanvas() {
        var max = 500;

        return Math.floor(Math.random() * (max + 1));
    }

    function getRandomId() {
        var max = 2;
        return Math.floor(Math.random() * (max + 1));
    }
}
