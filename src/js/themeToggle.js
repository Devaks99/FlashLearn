document.addEventListener('DOMContentLoaded', function() {
    // Seleciona ambos os botões de tema
    const themeToggleButtons = document.querySelectorAll('#themeToggleMobile, #themeToggleDesktop');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Aplica o tema atual
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Adiciona os event listeners
    themeToggleButtons.forEach(button => {
        button.addEventListener('click', toggleTheme);
    });
    
    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        // Atualiza o tema
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Atualiza todos os botões
        themeToggleButtons.forEach(btn => {
            updateButtonIcon(btn, newTheme);
        });
    }
    
    function updateButtonIcon(button, theme) {
        const sunIcon = button.querySelector('.sun');
        const moonIcon = button.querySelector('.moon');
        
        if (theme === 'dark') {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        } else {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        }
    }
    
    // Inicializa os ícones
    themeToggleButtons.forEach(button => {
        updateButtonIcon(button, currentTheme);
    });
});