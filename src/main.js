const menu = document.querySelector('.menu');

menu.addEventListener('click', () => {
  menu.toggleAttribute('data-open');
});
