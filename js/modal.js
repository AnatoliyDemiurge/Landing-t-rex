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


