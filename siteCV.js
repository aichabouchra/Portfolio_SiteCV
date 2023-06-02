const icon = document.querySelector('.nav_bar');
const menu = document.querySelector('.navi');

icon.addEventListener('click', () => {
  menu.classList.toggle('active');
});
