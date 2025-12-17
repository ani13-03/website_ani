const hamburger = document.getElementById('hamburger');
const menuNav = document.getElementById('menuNav');

hamburger.addEventListener('click', () => {
  menuNav.classList.toggle('show');
});
