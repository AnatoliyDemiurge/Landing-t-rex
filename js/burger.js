
//burger
(function () {
    var burgerItem = document.querySelector('.burger');
    var menu = document.querySelector('.header__nav');
    var menuItemClose = document.querySelector('.header__close');
    burgerItem.addEventListener('click', function() {
        menu.classList.add('header__active');
    });
    menuItemClose.addEventListener('click', function() {
        menu.classList.remove('header__active');
    });
}());