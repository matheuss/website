$(() => {
	let timeout;
	$('#name').on('click', function () {
		if ($(this).text().startsWith('M')) {
			$(this).text('🦁🦄🐶🐱🐮🐷');
			const self = this;
			timeout = setTimeout(function () {
				$(self).text('Matheus Fernandes');
			}, 5000);
		} else {
			clearTimeout(timeout);
			$(this).text('Matheus Fernandes');
		}
	});
});
