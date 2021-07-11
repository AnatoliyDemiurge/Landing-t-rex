var btn = document.querySelector('.why__submit'), // Главная кнопка
    modal = document.querySelector('.modal'), // Модальное окно
    closeBtn = document.querySelector('.closeBtn'); // Кнопка, закрывающая модальное окно

	// Открытие модального окна
	btn.addEventListener('click', function() {
		modal.style.display = 'flex'; 
		var $body = $(document.body);
		var oldWidth = $body.innerWidth();
		$body.css("overflow", "hidden");
		$body.width(oldWidth);
	})
	// Закрытие модального окна при клике на кнопку
	closeBtn.addEventListener('click', function () {
		modal.style.display = "none";
		var $body = $(document.body);
		$body.css("overflow", "auto");
		$body.width("auto");
	})
	// Закрытие модального окна при клике на серую область
	window.addEventListener('click', function (e) {
		if(e.target == modal) {
			modal.style.display = "none";
			var $body = $(document.body);
			$body.css("overflow", "auto");
			$body.width("auto");
		}  	
	})


function validate() {
	var userName = document.getElementById("userName");
	var userPassword = document.getElementById("userPassword");
	var modalValidator = document.querySelector('.modal__validation-erorrs');
	if(!userName.value) {
		modalValidator.classList.add('modal__validation-erorrs-active-name');
		return false;
	}

	if(!userPassword.value) {
		modalValidator.classList.add('modal__validation-erorrs-active-password');
		return false;
	}

	return true;

}