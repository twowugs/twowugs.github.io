const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let isDrawing = false;
let isFirstPoint = true; // Flag to check if it's the first point

// Set the line color and width
ctx.strokeStyle = "#a38c8a";
ctx.lineWidth = 1;

// Event listener for mouse down
canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    const x = e.clientX - canvas.getBoundingClientRect().left;
    const y = e.clientY - canvas.getBoundingClientRect().top;
    
    // Start a new path if it's the first point
    if (isFirstPoint) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        isFirstPoint = false;
    }
    
    ctx.lineTo(x, y);
    ctx.stroke();
});

// Event listener for mouse move
canvas.addEventListener("mousemove", (e) => {
    if (!isDrawing) return;
    const x = e.clientX - canvas.getBoundingClientRect().left;
    const y = e.clientY - canvas.getBoundingClientRect().top;
    ctx.lineTo(x-100, y-25);
    ctx.stroke();
});

// Event listener for mouse up
canvas.addEventListener("mouseup", () => {
    isDrawing = false;
    isFirstPoint = true; // Reset the flag for the next drawing
    ctx.closePath();
});

// Event listener for mouse leave (to stop drawing when the mouse leaves the canvas)
canvas.addEventListener("mouseleave", () => {
    isDrawing = false;
    isFirstPoint = true; // Reset the flag for the next drawing
    ctx.closePath();
});