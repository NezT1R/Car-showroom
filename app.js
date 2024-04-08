let burgerMenu = document.querySelector('.menu__burger-btn');
let menuCross = document.querySelector('.menu__cross');
let burger = document.querySelector('.menu__burger')

burger.style.display = 'block';

function toggleMenu() {
    if (burger.style.display === 'block') {
        burger.style.display = 'none'
        menuCross.style.display = 'block'
    } else {
        burger.style.display = 'block'
        menuCross.style.display = 'none'
    }
}

burgerMenu.addEventListener('click', toggleMenu);