// Get the canvas element and context
const canvas = document.getElementById('signature-pad');
const ctx = canvas.getContext('2d');
const container = document.querySelector('.canvas-container');

let isDrawing = false;
let lastX = 0;
let lastY = 0;

// Event listeners for mouse movements
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', (e) => {
    if (isDrawing) {
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        [lastX, lastY] = [e.offsetX, e.offsetY];
    }
});

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
});

canvas.addEventListener('mouseout', () => {
    isDrawing = false;
});

// Function to clear the canvas
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Function to save the signature
function saveSignature() {
    const dataUrl = canvas.toDataURL(); // Save canvas image as data URL
    // You can use dataUrl to save the signature or send it to a server
    console.log(dataUrl); // Example: log data URL to console
    alert('Signature saved!');
}





function resizeCanvas() {
    const ratio = window.devicePixelRatio || 1;
    canvas.width = container.offsetWidth * ratio;
    canvas.height = container.offsetHeight * ratio;
    canvas.getContext('2d').scale(ratio, ratio);
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas(); // Call once to set initial size

