const toggle = document.getElementById('mode-toggle');
const themeStyle = document.getElementById('theme-style');

// Load the user's preference from local storage
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    themeStyle.setAttribute('href', currentTheme);
    toggle.checked = currentTheme === 'dark.css';
}

// Change the theme when the toggle is switched
toggle.addEventListener('change', () => {
    if (toggle.checked) {
        themeStyle.setAttribute('href', 'dark.css');
        localStorage.setItem('theme', 'dark.css'); // Save preference
    } else {
        themeStyle.setAttribute('href', 'light.css');
        localStorage.setItem('theme', 'light.css'); // Save preference
    }
});
