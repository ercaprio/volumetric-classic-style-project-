import {getResource} from '../services/requests';

const showMoreStyles = (trigger, wrapper) => {
	const btn = document.querySelector(trigger);

	// btn.addEventListener('click', () => {
	// 	btn.classList.add('animated', 'fadeOut');
	// 	setTimeout(() => {
	// 		cards.forEach(card => {
	// 			card.classList.add('animated', 'fadeIn');
	// 			card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
	// 			card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
	// 		});
	// 		btn.remove();
	// 	}, 700);
	// });

	btn.addEventListener('click', function() {
		getResource('http://localhost:3000/styles')
			.then(res => createCards(res))
			.catch(error => {
				let errorDiv = document.createElement('div');
				errorDiv.textContent = `Failed to fetch: ${error.name}!`;
				errorDiv.style.cssText = 'color: red; text-align: center; font-size: 30px; margin-bottom: 20px';
				document.querySelector(wrapper).append(errorDiv);
				console.log(error);
			});

		this.remove();
	});

	function createCards(response) {
		response.forEach(({src, title, link}) => {
			let card = document.createElement('div');

			card.classList.add('animated', 'fadeIn', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

			card.innerHTML = `
				<div class="styles-block">
					<img src="${src}" alt="style">	
					<h4>${title}</h4>
					<a href="${link}">Подробнее</a>
				</div>
			`;

			document.querySelector(wrapper).append(card);
		});
	};
};

export default showMoreStyles;