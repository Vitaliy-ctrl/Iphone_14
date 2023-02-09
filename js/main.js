const btn = document.querySelector('.menu-btn');
const header__menu = document.querySelector('.header__menu');

btn.addEventListener('click', ()=>{
    header__menu.classList.toggle('menu-open');
});