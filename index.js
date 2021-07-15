function darktheme(options) {
	let dark = document.querySelectorAll('.darktheme');

	if (options.background_color === 'dark') {
		options.background_color = '#000000';
	} else if (options.background_color === 'light') {
		options.background_color = '#FFFFFF';
	} else {
		options.background_color = '#FFFFFF';
	}

	if (options.color === 'light') {
		options.color = '#FFFFFF';
	} else if (options.color === 'dark') {
		options.color = '#000000';
	} else {
		options.color = '#000000';
	}

	dark.forEach(bg => {
		bg.style.backgroundColor = options.background_color;
		bg.style.color = options.color;
	});
}

module.exports = { darktheme };
