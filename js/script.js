let burger = document.querySelector('.burger-nav__burger');
let menu = document.querySelector('.burger-nav__menu');

function toggleClass() {
  console.log("test")
  burger.classList.toggle('active');
  menu.classList.toggle('active');
}

burger.onclick = toggleClass;