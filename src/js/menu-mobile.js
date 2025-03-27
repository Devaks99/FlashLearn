// src/js/menu-mobile.js
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const body = document.body;

    function toggleMenu() {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        body.classList.toggle('no-scroll');
    }

    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });

    document.addEventListener('click', function(e) {
        if (!e.target.closest('.mobile-menu') && !e.target.closest('.hamburger')) {
            if (mobileMenu.classList.contains('active')) {
                toggleMenu();
            }
        }
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && mobileMenu.classList.contains('active')) {
            toggleMenu();
        }
    });
});