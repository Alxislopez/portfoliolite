// This file contains JavaScript code to prevent right-click actions, disable keyboard shortcuts for copying, and implement other interactive features for the portfolio website.

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('keydown', function(e) {
    // Disable Ctrl+C, Ctrl+S, Ctrl+U
    if (e.ctrlKey && (e.key === 'c' || e.key === 's' || e.key === 'u')) {
        e.preventDefault();
    }
});

// Function to prevent screenshotting (not foolproof)
window.addEventListener('blur', function() {
    document.body.style.display = 'none';
});

window.addEventListener('focus', function() {
    document.body.style.display = 'block';
});