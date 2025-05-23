// Garantir que o menu funcione em todos os dispositivos
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
    
    // Fechar menu ao clicar em um item
    const menuItems = document.querySelectorAll('.mobile-menu a');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });
});