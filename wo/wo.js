// === DARK MODE TOGGLE ===
const toggle = document.getElementById('darkModeToggle');

toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggle.textContent = document.body.classList.contains('dark-mode') ? '☀' : '🌙';
});

// === BUTTON CLICKS ===
const buttons = document.querySelectorAll('.text-button');

// Example: click a button to navigate or log
buttons.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        console.log(`Button ${i+1} clicked: ${btn.textContent}`);
        // Example: navigate
        // window.location.href = "https://example.com";
    });
});

// === OPTIONAL SPLASH SCREEN HANDLER ===
const splash = document.getElementById('splash');
const main = document.getElementById('main-content');

if (splash && main) {
    window.addEventListener('load', () => {
        // Fade out splash
        splash.style.transition = 'opacity 2s ease';
        splash.style.opacity = '0';

        // Show main content after splash
        setTimeout(() => {
            splash.style.display = 'none';
            main.style.transition = 'opacity 1s ease';
            main.style.opacity = '1';
        }, 2000);
    });
}