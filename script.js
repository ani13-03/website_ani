// Untuk mengaktifkan menu hamburger //
const hamburger = document.getElementById('hamburger');
const menuNav = document.getElementById('menuNav');

hamburger.addEventListener('click', function() {
    menuNav.classList.toggle('active');
    hamburger.classList.toggle('is-active');
});