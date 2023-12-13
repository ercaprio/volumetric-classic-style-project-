const checkNumInputs = (selector) => {
	const txtInputs = document.querySelectorAll(selector);

	txtInputs.forEach(input => {
		input.addEventListener('keypress', function(e) {
			if (e.key.match(/[^а-яё 0-9]/ig)) {
				e.preventDefault();
			}
		});

		input.addEventListener('input', () => {
			if (!/^[а-яА-ЯёЁ0-9]+$/u.test(input.value)) {
				input.value = '';
				input.style.boxShadow = '0 0 0 30px white inset';
			} else {
				input.style.boxShadow = 'none';
			}
		});
	});
};

export default checkNumInputs;