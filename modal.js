const btn = document.querySelector('.btn-popup');
const modalOverlay = document.querySelector('.modal-overlay ');
const modal = document.querySelector('.modal');


	btn.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');

		modal.classList.remove('modal--visible');

		btn.classList.add('modal--visible');
		modalOverlay.classList.add('modal-overlay--visible');
	});


modalOverlay.addEventListener('click', (e) => {
	console.log(e.target);

	if (e.target == modalOverlay) {
		modalOverlay.classList.remove('modal-overlay--visible');
		modal.classList.remove('modal--visible');
	}
});