
//burger
(function () {
    const logo = document.querySelector('.header__logo');
    const login = document.querySelector('.header__login');
    const loginSm = document.querySelector('.header__login-sm');

const animate = () =>{
   
    logo.style.opacity = 1;
    logo.style.marginLeft = 0 + "px";
    logo.style.marginTop = 0 + "px";

    login.style.opacity = 1;
    login.style.marginRight = 0 + "px";
    login.style.marginTop = 0 + "px";
};

setTimeout(animate,500);

    var burgerItem = document.querySelector('.burger');
    var menu = document.querySelector('.header__nav');
    var menuItemClose = document.querySelector('.header__close');
    burgerItem.addEventListener('click', function() {
        setTimeout(()=>{
            loginSm.style.opacity = 1;
            loginSm.style.marginRight = 0 + "px";
            loginSm.style.marginTop = 0 + "px";
        },1000);
        menu.classList.add('header__active');
        var $body = $(document.body);
		var oldWidth = $body.innerWidth();
		$body.css("overflow", "hidden");
		$body.width(oldWidth);
    });
    menuItemClose.addEventListener('click', function() {
        menu.classList.remove('header__active');
        var $body = $(document.body);
		$body.css("overflow", "auto");
		$body.width("auto");
    });
}());