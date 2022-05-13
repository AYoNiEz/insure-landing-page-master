const menu = document.querySelector('.menu-box');
const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');

hamburger.addEventListener('click', openMenu);
close.addEventListener('click', closeMenu);

function openMenu(event) {
    menu.classList.add('show');
    hamburger.classList.add('hide');
    close.classList.add('show');
}
function closeMenu(event) {
    menu.classList.remove('show');
    hamburger.classList.remove('hide');
    close.classList.remove('show');
}