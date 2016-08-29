document.addEventListener('DOMContentLoaded', () => {
	const span = document.querySelector('span');
	let timeout;
	span.onclick = function () {
		if (span.innerHTML.startsWith('M')) {
			span.innerHTML = '🦁🦄🐶🐱🐮🐷';
			timeout = setTimeout(function () {
				span.innerHTML = 'Matheus Fernandes';
			}, 5000);
		} else {
			clearTimeout(timeout);
			span.innerHTML = 'Matheus Fernandes';
		}
	};
});
