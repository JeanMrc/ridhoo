const toggleTheme = document.getElementById('toggleTheme');

toggleTheme.addEventListener('click', () => {
	document.body.classList.toggle('light');
});