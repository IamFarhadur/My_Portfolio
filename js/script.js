const menuToggle = document.querySelector('.menu_toggle');
const navigation = document.querySelector('.main_navigation');

menuToggle.addEventListener('click', () => {
    navigation.classList.toggle('active');
});
