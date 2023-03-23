const input = document.querySelector('.input');
const output = document.querySelector('.output');

input.addEventListener('keydown', (event) => {
	if (event.key === 'Enter') {
		const command = input.value.trim();
		input.value = '';
		output.value += '> ' + command + '\n';
		// TODO: Handle the user input
	} else if (event.key.length === 1) {
		output.value += event.key;
	}
});
