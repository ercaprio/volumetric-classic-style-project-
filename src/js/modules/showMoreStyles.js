const showMoreStyles = (trigger, styles) => {
	const cards = document.querySelectorAll(styles),
		  btn = document.querySelector(trigger);

	// cards.forEach(card => {
		
	// });

	btn.addEventListener('click', () => {
		btn.classList.add('animated', 'fadeOut');
		setTimeout(() => {
			cards.forEach(card => {
				card.classList.add('animated', 'fadeIn');
				card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
				card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
			});
			btn.remove();
		}, 700);
	});
};

export default showMoreStyles;