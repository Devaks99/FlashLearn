/******************************************************/
// LÓGICA DO HEADER NO MODO RESPONSIVO (MENU-HAMBURGUER)
/*****************************************************/

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const body = document.body;
  
    hamburger.addEventListener('click', function() {
      this.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      body.classList.toggle('menu-open');
    });
  
    // Fechar o menu ao clicar fora
    document.addEventListener('click', function(event) {
      if (!event.target.closest('.mobile-header') && !event.target.closest('.mobile-menu')) {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        body.classList.remove('menu-open');
      }
    });
  
    // Fechar menu ao rolar
    window.addEventListener('scroll', function() {
      if (mobileMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        body.classList.remove('menu-open');
      }
    });
  });

  