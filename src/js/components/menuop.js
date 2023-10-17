const menuBtn = document.querySelector('.header__menu-btn'); // выбрали кнопку меню
const menu = document.querySelector('.menu'); // выбрали сам обьект в меню, чтобы в дальнейшем удобнее искать в нем
const html = document.querySelector('html'); // сам документ html
const menuClose = menu.querySelector('.menu__close'); // выбрали крестик

menuBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  menu.classList.add('menu--open'); // добавить(add) меню
  html.classList.add('no-scroll'); // без скролла
});

menuClose.addEventListener('click', (evt) => {
  evt.preventDefault();
  menu.classList.remove('menu--open');//убрать(remive) вызванную ранее функцию
  html.classList.remove('no-scroll'); //убрать(remive) вызванную ранее функцию
});