/* eslint-disable indent */
const modals = (state) => {
    let btnPressed = false;

	function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal =  document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]'),
              form = document.querySelectorAll('form'),
              scroll = calcScroll(),
              gift = document.querySelector('.fixed-gift');

        gift.classList.add('animated', 'headShake');    

		trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if(e.target) {
                    e.preventDefault();
                }

                btnPressed = true;

                if (destroy) {
                    item.remove();
                }

                windows.forEach(item => {
                    item.style.display = 'none';
                    item.classList.add('animated', 'fadeIn');
                });
                gift.style.right = `${scroll + 20}px`;
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scroll}px`;
                gift.classList.remove('animated', 'headShake');  
            });
        });

        close.addEventListener('click', () => {
            windows.forEach(item => {
                item.style.display = 'none';
            });

            modal.style.display = 'none';
            document.body.style.overflow = '';

            form.forEach(item => {
                item.reset();
            });

            document.body.style.marginRight = '0px';
            gift.style.right = `${20}px`;
            gift.classList.add('animated', 'headShake');    
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                windows.forEach(item => {
                    item.style.display = 'none';
                });


                modal.style.display = 'none';
                document.body.style.overflow = '';

                form.forEach(item => {
                    item.reset();
                });
                
                document.body.style.marginRight = '0px';
                gift.style.right = `${20}px`;
            }
            gift.classList.add('animated', 'headShake');    
        });
	}

    function showModalByTime(selector, time) {
        setTimeout(function() {
			let display;

			document.querySelectorAll('[data-modal]').forEach(item => {
				if (getComputedStyle(item).display !== 'none') {
					display = 'block';
				}
			});

			if (!display) {
				document.querySelector(selector).style.display = 'block';
				document.body.style.overflow = 'hidden';
                scroll = calcScroll();
                document.body.style.marginRight = `${scroll}px`;
                console.log(scroll);
			}
        }, time);
    }

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
        return scrollWidth;
    }

    function openByScroll(selector) {
        window.addEventListener('scroll', () => {
            if (!btnPressed && (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1)) {
                document.querySelector(selector).click();
            }
        });
    }

    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
	bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
    openByScroll('.fixed-gift');
	showModalByTime('.popup-consultation', 60000);
};

export default modals;