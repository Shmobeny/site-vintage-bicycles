let burger = document.getElementsByClassName('burger-nav__burger');
let menu = document.getElementsByClassName('burger-nav__menu');

function toggleClass() {
  burger[0].classList.toggle('active');
  menu[0].classList.toggle('active');
}