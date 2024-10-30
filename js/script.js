const menuToggle = document.querySelector('.menu_toggle');
const navigation = document.querySelector('.main_navigation');

menuToggle.addEventListener('click', () => {
    navigation.classList.toggle('active');
});

// Back to Top 
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    const backToTopBtn = document.getElementById("backToTop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block"; 
    } else {
        backToTopBtn.style.display = "none"; 
    }
}

document.getElementById("backToTop").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Hello Message JS Code 
const helloMessage = document.querySelector('.hello_message');

helloMessage.addEventListener('mousemove', (e) => {
    const rect = helloMessage.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    helloMessage.style.setProperty('--x', `${x}px`);
    helloMessage.style.setProperty('--y', `${y}px`);
});

