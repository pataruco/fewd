const navButtons = document.querySelectorAll('.js-nav');

const toggleMenu = (event) => {
  event.preventDefault();
  console.log('click');
  document.body.classList.toggle('menu-is-open');
};

navButtons.forEach((button) => {
  button.addEventListener('click', toggleMenu);
});
