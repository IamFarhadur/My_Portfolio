const cursorDot = document.getElementById('cursorDot');
const cursorOutline = document.getElementById('cursorOutline');

// For smooth trailing effect
let mouseX = 0, mouseY = 0;
let outlineX = 0, outlineY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Move the dot immediately
    cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
});

// Smooth trailing for the outline
function animateOutline() {
    // Calculate the new position of the outline (with delay)
    outlineX += (mouseX - outlineX) * 0.1;
    outlineY += (mouseY - outlineY) * 0.1;

    // Move the outline
    cursorOutline.style.transform = `translate(${outlineX}px, ${outlineY}px)`;

    // Keep animating the outline
    requestAnimationFrame(animateOutline);
}

// Start the animation
animateOutline();
