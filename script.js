const hamburger = document.getElementById('hamburger');
const navBar = document.querySelector('.nav_bar');

hamburger.addEventListener('click', () => {
    navBar.classList.toggle('active'); 
});



document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress");

    const animateProgressBar = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const skillValue = progressBar.getAttribute("data-skill");
                progressBar.style.width = skillValue;
                observer.unobserve(progressBar); // Unobserve once animated
            }
        });
    };

    const observer = new IntersectionObserver(animateProgressBar, {
        threshold: 0.5 
    });

    progressBars.forEach(bar => {
        observer.observe(bar);
    });
});


document.getElementById('contact-form').onsubmit = function() {
    alert('Thank you for your message! I will get back to you soon.');
};


// Skill Section

const slider = document.querySelector('.skills-slider');
const slideTrack = document.querySelector('.slide-track');
let isDown = false;
let startX;
let scrollLeftPos;
let autoScrollInterval;
const autoScrollSpeed = 1; // pixels per interval
const scrollIntervalTime = 20; // ms

// Function to start auto-scrolling
function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
        slideTrack.scrollLeft += autoScrollSpeed;
        // Reset scrollLeft to 0 when reaching halfway (duplicate slides)
        if (slideTrack.scrollLeft >= (slideTrack.scrollWidth / 2)) {
            slideTrack.scrollLeft = 0;
        }
    }, scrollIntervalTime);
}

// Function to stop auto-scrolling
function stopAutoScroll() {
    clearInterval(autoScrollInterval);
}

// Initialize auto-scroll
startAutoScroll();

// Mouse Down
slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active'); // Pause the auto-scroll
    startX = e.pageX - slider.offsetLeft;
    scrollLeftPos = slideTrack.scrollLeft;
    stopAutoScroll(); // Pause auto-scroll when user starts dragging
});

// Mouse Leave
slider.addEventListener('mouseleave', () => {
    if (!isDown) return;
    isDown = false;
    slider.classList.remove('active'); // Resume the auto-scroll
    startAutoScroll(); // Resume auto-scroll when user stops dragging
});

// Mouse Up
slider.addEventListener('mouseup', () => {
    if (!isDown) return;
    isDown = false;
    slider.classList.remove('active'); // Resume the auto-scroll
    startAutoScroll(); // Resume auto-scroll when user stops dragging
});

// Mouse Move
slider.addEventListener('mousemove', (e) => {
    if (!isDown) return; // Only execute if the mouse is pressed
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5; // Adjust the multiplier for sensitivity
    // Adjust the transform based on user drag
    slideTrack.scrollLeft = scrollLeftPos - walk;
});

// Touch Events for Mobile Devices

// Touch Start Event
slider.addEventListener('touchstart', (e) => {
    isDown = true;
    slider.classList.add('active'); // Pause the auto-scroll
    startX = e.touches[0].pageX - slider.offsetLeft;
    scrollLeftPos = slideTrack.scrollLeft;
    stopAutoScroll(); // Pause auto-scroll when user starts dragging
});

// Touch End Event
slider.addEventListener('touchend', () => {
    if (!isDown) return;
    isDown = false;
    slider.classList.remove('active'); // Resume the auto-scroll
    startAutoScroll(); // Resume auto-scroll when user stops dragging
});

// Touch Move Event
slider.addEventListener('touchmove', (e) => {
    if (!isDown) return; // Only execute if touch is active
    const x = e.touches[0].pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5; // Adjust the multiplier for sensitivity
    // Adjust the transform based on user drag
    slideTrack.scrollLeft = scrollLeftPos - walk;
});



// For Loading

window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loading');
  const progressBar = document.getElementById('progressBar');

  let width = 0;
  const interval = setInterval(() => {
      if (width >= 100) {
          clearInterval(interval);
          loadingScreen.classList.add('hidden');


          setTimeout(() => {
              loadingScreen.style.display = 'none';
          }, 500); 
      } else {
          width += 1;
          progressBar.style.width = width + '%';
      }
  }, 30); 
});