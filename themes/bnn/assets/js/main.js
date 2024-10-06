document.addEventListener('DOMContentLoaded', function () {
    console.log('main.js loaded');
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarMenu = document.getElementById('navbar-menu');

    function toggleMenu() {
        navbarMenu.classList.toggle('active');
        const expanded = navbarToggle.getAttribute('aria-expanded') === 'true' || false;
        navbarToggle.setAttribute('aria-expanded', !expanded);
    }

    navbarToggle.addEventListener('click', function () {
        console.log('click menu');
        toggleMenu();
    });

    // Event listener for clicks outside the menu
    document.addEventListener('click', function (event) {
        var targetElement = event.target; // Clicked element

        // Check if the menu is open and the click was outside the menu and toggle button
        if (navbarMenu.classList.contains('active') && !navbarMenu.contains(targetElement) && !navbarToggle.contains(targetElement)) {
            toggleMenu();
        }
    });
});