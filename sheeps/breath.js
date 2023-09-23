

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
var cp1x = 60
var cp1y = 200
var cp2x = 10
var cp2y = -90

ctx.strokeStyle = "#4fa3aa"; 
ctx.beginPath();
ctx.moveTo(30, 30);
ctx.bezierCurveTo(cp1x*.5, cp1y, cp2x, cp2y, 320, 50);
ctx.stroke();

function drawCurve() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update control points for animation
    cp1x += 0.1;
    cp1y += 0.1;
    cp2x += 0.1;
    cp2y += 0.1;

    // Redraw the curve
    ctx.beginPath();
    ctx.moveTo(30, 20);
    ctx.bezierCurveTo(cp1x*3, cp1y, cp2x*2, cp2y*2, 320, 100);
    ctx.stroke();

    // Request the next frame
    requestAnimationFrame(drawCurve);
}


//ctx.fillStyle = "transparent";
//ctx.fillRect(10, 10, 379, 100);
//bezierCurveTo(.08, .83, .1, .51, x, y)
//cubic-bezier(.08,.83,1,.51)
