const accordion = (triggersSelector) => {
	const btns = document.querySelectorAll(triggersSelector);

	btns.forEach(btn => {
		btn.addEventListener('click',  function(){
			// this.classList.toggle('active-style');
			// this.nextElementSibling.classList.toggle('active-content');
			
			btns.forEach(cuttentBtn => {
				if(cuttentBtn === this) {
					this.classList.toggle('active-style');
					this.nextElementSibling.classList.toggle('active-content');
				} else {
					cuttentBtn.classList.remove('active-style');
					cuttentBtn.nextElementSibling.classList.remove('active-content');
					cuttentBtn.nextElementSibling.style.maxHeight = '0px';
				} 
			});

			if(this.classList.contains('active-style')) {
				this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
			} else {
				this.nextElementSibling.style.maxHeight = '0px';
			}
		});
	});

	//    blocks = document.querySelectorAll(itemsSelector);

	// blocks.forEach(block => {
	// 	block.classList.add('animated', 'fadeInDown');
	// });

	// btns.forEach(btn => {
	// 	btn.addEventListener('click', function() {
	// 		if (!this.classList.contains('active')) {
	// 			btns.forEach(btn => {
	// 				btns.forEach(btn => {
	// 					btn.classList.remove('active', 'active-style');
	// 				});
	// 			});
	// 			this.classList.add('active', 'active-style');
	// 		}
	// 	});
	// });
};

export default accordion;