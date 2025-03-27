document.addEventListener('DOMContentLoaded', () => {
    // Elementos globais
    let currentLanguage = getLanguageFromURL();

    // 1. Sistema de Quizzes
    let quizState = {
        currentQuestion: 0,
        currentScore: 0,
        quizContainer: document.createElement('div')
    };

    function initializeVideoPlayers() {
        document.querySelectorAll('.video-thumbnail').forEach(container => {
            container.addEventListener('click', function() {
                if (!this.querySelector('iframe')) {
                    const iframe = document.createElement('iframe');
                    iframe.setAttribute('src', `${this.dataset.src}&autoplay=1`);
                    iframe.setAttribute('frameborder', '0');
                    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
                    iframe.setAttribute('allowfullscreen', '');
                    iframe.style.width = '100%';
                    iframe.style.height = '100%';
                    this.appendChild(iframe);
                    this.classList.add('loaded');
                }
            });
        });
    }

    // 2. Navegação e Conteúdo Dinâmico
    function setupNavigation() {
        document.body.addEventListener('click', (e) => {
            const langLink = e.target.closest('[data-lang]');
            if (langLink) {
                e.preventDefault();
                const language = langLink.dataset.lang;
                navigateToLanguage(language);
            }
        });
    }

    function navigateToLanguage(language) {
        if (language === currentLanguage) return;
        currentLanguage = language;
        window.history.pushState({ language }, '', `${language}.html`);
        loadLanguageContent(language);
    }

    // 3. Observadores de Intersecção
    function setupIntersectionObservers() {
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.feature-card').forEach(card => {
            cardObserver.observe(card);
        });
    }

    // 4. Sistema de Notificações
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => notification.remove(), 3000);
    }

    // Funções auxiliares
    function getLanguageFromURL() {
        const path = window.location.pathname;
        const language = path.split('/').pop().replace('.html', '');
        return languageData[language] ? language : 'home';
    }

    function loadLanguageContent(language) {
        const data = languageData[language];
        if (!data) return;

        document.title = `FlashLearn - ${data.title}`;
        const mainContent = document.getElementById('main-content');
        
        if (mainContent) {
            mainContent.innerHTML = `
                <section id="${language}">
                    <h1>${data.title}</h1>
                    <div class="topic-grid">
                        ${Object.entries(data.content).map(([key, value]) => `
                            <div class="topic-card">
                                <h3>${value.title}</h3>
                                <p>${value.text}</p>
                            </div>
                        `).join('')}
                    </div>
                </section>
            `;
        }
        
        // Atualiza links ativos
        document.querySelectorAll('[data-lang]').forEach(link => {
            link.classList.toggle('active', link.dataset.lang === language);
        });
        
        setupNavigation();
        setupIntersectionObservers();
    }

    // Tratamento do histórico
    window.addEventListener('popstate', (e) => {
        if (e.state?.language) {
            currentLanguage = e.state.language;
            loadLanguageContent(currentLanguage);
        }
    });

    // Inicialização
    function init() {
        document.querySelector('.sidebar .logo').classList.add('logo-white');
        initializeVideoPlayers();
        setupNavigation();
        setupIntersectionObservers();
        loadLanguageContent(currentLanguage);
        showNotification('Bem-vindo ao FlashLearn! Comece sua jornada de aprendizado.', 'success');
    }

    // Iniciar aplicação
    init();
});