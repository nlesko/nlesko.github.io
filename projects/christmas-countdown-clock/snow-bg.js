window.onload = function () {

    // Loading the clock on top of background
    let deadline = new Date('December 25, 2018 00:00:010');
    startTimer('clock', deadline);


    // Get Canvas and contex, store them in variables
    let canvas = document.getElementById('sky');
    let ctx = canvas.getContext('2d');

    // Set canvas dimensions to Window height and width
    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.height = H;
    canvas.width = W;

    // generate Snowflakes and apply attributes
    let mf = 100; // maximum flakes on window object
    let flakes = [];

    // loop throught empty falkes array and apply attributes to snowflake
    for (let i = 0; i < mf; i++) {
        flakes.push({
            x: Math.random() * W,
            y: Math.random() * H,
            r: Math.random() * 5 + 2, // radius, min of 2px and max of 7px
            d: Math.random() + 1 // density of the flake
        })
    }

    // drawing snowflakes to the canvas
    function drawFlakes() {
        ctx.clearRect(0, 0, W, H);
        ctx.fillStyle = 'white';
        ctx.beginPath();
        for (let i = 0; i < mf; i++) {
            let f = flakes[i];
            ctx.moveTo(f.x, f.y);
            ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
        }
        ctx.fill();
        moveFlakes();
    }

    // Angle for animating flakes
    let angle = 0;

    function moveFlakes() {
        angle += 0.1;
        for (let i = 0; i < mf; i++) {
            // sore current flake
            let f = flakes[i];

            //update X and Y coordinates of each snowflakes
            f.y += Math.pow(f.d, 2) + 1;
            f.x += Math.sin(angle) * 2;

            // if the snowflake reaches the bottom, create new one on the top
            if (f.y > H) {
                flakes[i] = {
                    x: Math.random() * W,
                    y: 0,
                    r: f.r,
                    d: f.d
                }
            }
        }
    }

    setInterval(drawFlakes, 25);
}