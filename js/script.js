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
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; 
  slider.scrollLeft = scrollLeft - walk;
});
