const toggle = document.getElementById('darkModeToggle');

toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Swap the emoji
    if (document.body.classList.contains('dark-mode')) {
        toggle.textContent = "☼"; // dark mode active → show sun
    } else {
        toggle.textContent = "⏾"; // light mode → show moon
    }
});
