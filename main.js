const hamburger = document.querySelector('.hamburger');
const navLists = document.querySelector('.nav-lists');

hamburger.addEventListener('click', (e) => {
  e.preventDefault();
  hamburger.classList.toggle('active');
  navLists.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((nav) => nav.addEventListener('click', (e) => {
  e.preventDefault();
  hamburger.classList.remove('active');
  navLists.classList.remove('active');
}));
