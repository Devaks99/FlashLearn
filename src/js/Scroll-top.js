/******************************************************/
// LÓGICA DO BOTÃO DO SCROLL-TOP
/*****************************************************/

document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopButton = document.getElementById('scrollToTop');
    const scrollThreshold = 10; // Altura ajustada para melhor UX

    function toggleScrollButton() {
        const shouldShow = window.scrollY > scrollThreshold;
        scrollToTopButton.classList.toggle('active', shouldShow);
    }

    // Controle de visibilidade
    window.addEventListener('scroll', toggleScrollButton);
    window.addEventListener('resize', toggleScrollButton);
    
    // Verificação inicial
    toggleScrollButton();

    // Rolagem suave com comportamento consistente
    scrollToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});