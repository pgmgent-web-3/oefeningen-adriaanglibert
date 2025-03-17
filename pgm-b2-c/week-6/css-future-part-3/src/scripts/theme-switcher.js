function toggleTheme() {
    // Toggle the 'dark-mode' class on the body
    document.body.classList.toggle('dark-mode');

    // Check if dark mode is enabled
    if (document.body.classList.contains('dark-mode')) {
        // Set dark mode colors
        document.documentElement.style.setProperty('--background-color-light', 'var(--background-color-dark)');
        document.documentElement.style.setProperty('--text-color-light', 'var(--text-color-dark)');
    } else {
        // Set light mode colors
        document.documentElement.style.setProperty('--background-color-light', '#ffffff');
        document.documentElement.style.setProperty('--text-color-light', '#000000');
    }
}

function initThemeSwitcher() {
    const $toggle = document.getElementById('color-mode-toggle');

    $toggle.addEventListener('click', () => {
        toggleTheme();
    })
}

export default initThemeSwitcher;
