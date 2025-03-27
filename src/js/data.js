// Adicione os dados das playlists
const playlists = {
    html: "html.html",
    css: "css.html",
    javascript: "javascript.html",
    nodejs: "nodejs.html",
    git: "git.html",
    github: "github.html"
};

const studyData = {
    html: {
        title: "HTML",
        content: `
            <div class="study-section">
                <h2>Domine HTML5 - Iniciante/Intermediário</h2>
                <div class="badge html-badge">HTML5</div>

                <section class="content-section">
                    <h3>O que é HTML?</h3>
                    <p>HTML (<strong>H</strong>yper<strong>T</strong>ext <strong>M</strong>arkup <strong>L</strong>anguage) é a linguagem base para construção de páginas web. Não é uma linguagem de programação, mas sim de <strong>marcação</strong> que define a estrutura e o significado do conteúdo.</p>
                    
                    <div class="best-practice">
                        <strong>Principais Características:</strong>
                        <ul>
                            <li>Utiliza tags envolvidas por &lt; &gt;</li>
                            <li>Hierárquica (elementos pai e filhos)</li>
                            <li>Semântica (significado do conteúdo)</li>
                            <li>Independente de plataforma</li>
                        </ul>
                    </div>
                </section>
                
                <section class="content-section">
                    <h3>Tags Essenciais para Iniciantes</h3>
                    <div class="tags-grid">
                        ${['h1-h6', 'p', 'a', 'img', 'ul/ol'].map(tag => `
                            <div class="tag-item">
                                <code>&lt;${tag}&gt;</code>
                                <p>${this.getTagDescription(tag)}</p>
                            </div>
                        `).join('')}
                    </div>
                </section>

                <!-- Continue com as demais seções mantendo a estrutura -->
                
                <section class="content-section">
                    <h3>Estrutura Básica</h3>
                    <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="pt-BR"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Documento HTML5&lt;/title&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;header&gt;...&lt;/header&gt;
    &lt;main&gt;...&lt;/main&gt;
    &lt;footer&gt;...&lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
                </section>

                <!-- Adicione as demais seções seguindo o mesmo padrão -->

            </div>
        `
    },
    // Mantenha os outros objetos (css, quizData, languageData) conforme existente
};

// Adicione métodos auxiliares se necessário
studyData.html.getTagDescription = function(tag) {
    const descriptions = {
        'h1-h6': 'Títulos hierárquicos<br><em>Importante: Use apenas um H1 por página</em>',
        'p': 'Parágrafos de texto',
        'a': 'Links de navegação<br><em>Atributo href define o destino</em>',
        'img': 'Inserir imagens<br><strong>Dica:</strong> Sempre use alt para acessibilidade',
        'ul/ol': 'Listas não ordenadas e ordenadas<br><em>Com itens &lt;li&gt;</em>'
    };
    return descriptions[tag] || '';
};
