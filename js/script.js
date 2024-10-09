const hamburger = document.getElementById('hamburger');
const navBar = document.querySelector('.nav_bar');

hamburger.addEventListener('click', () => {
    navBar.classList.toggle('active'); // Toggle the active class
});



document.addEventListener("DOMContentLoaded", () => {
    const skillsSection = document.getElementById("skills");
    const progressBars = document.querySelectorAll(".progress");

    // Function to animate progress bars
    const animateProgressBars = () => {
        progressBars.forEach((progressBar) => {
            const skillValue = progressBar.getAttribute("data-skill");
            progressBar.style.width = skillValue;
        });
    };

    // Check if the skills section is in the viewport
    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
                (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <=
                (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    // Listen for scroll events to trigger animations
    window.addEventListener("scroll", () => {
        if (isInViewport(skillsSection)) {
            animateProgressBars();
            // Remove the event listener once the animation has run
            window.removeEventListener("scroll", arguments.callee);
        }
    });
});
