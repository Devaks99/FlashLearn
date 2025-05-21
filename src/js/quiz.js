// quiz.js
const quizzes = {
    html: [
        {
            question: "Qual atributo define o texto alternativo em imagens?",
            options: ["src", "alt", "title", "href"],
            correct: 1,
            explanation: "O atributo 'alt' fornece texto alternativo para acessibilidade e SEO (Search Engine Optimization)."
        },
        {
            question: "Qual tag define uma lista de definição?",
            options:  ["&lt;ul&gt;", "&lt;dl&gt;", "&lt;ol&gt;", "&lt;dt&gt;"],
            correct: 1,
            explanation: "'&lt;dl&gt;' define lista de definição, contendo '&lt;dt&gt;' (termo) e '&lt;dd&gt;' (descrição)"
        },
        {
            question: "Para que serve o atributo 'defer' em scripts?",
            options:  [
                "Executar o script após o parsing do HTML",
                "Carregar o script em segundo plano",
                "Desativar o script"
            ],
            correct: 0,
            explanation:"O 'defer' adia a execução até que o HTML esteja totalmente carregado"
        },
        
        {
            question: "Qual elemento HTML5 é usado para conteúdo independente?",
            options:  ["&lt;div&gt;", "&lt;section&gt;", "&lt;article&gt;", "&lt;aside&gt;"],
            correct:  2,
            explanation: "'&lt;article&gt;' representa conteúdo independente e autocontido"
        },
        {
            question: "Como criar um link que abre em nova aba/janela?",
            options: [
                "&lt;a href='...' newtab&gt;",
                "&lt;a href='...' target='_self'&gt;",
                "&lt;a href='...' target='_blank'&gt;",
                "&lt;a href='...' open='new'&gt;"
            ],
            correct:  2,
            explanation: "target='_blank' abre o link em nova aba/janela"
        },
        {
            question: "Qual elemento é obrigatório em todos os documentos HTML?",
            options:  ["&lt;head&gt;", "&lt;title&gt;", "&lt;!DOCTYPE&gt;", "&lt;body&gt;"],
            correct:  2,
            explanation: "A declaração '&lt;!DOCTYPE html&gt;' é obrigatória no início"
        },
        {
            question: "Para que serve o elemento &lt;time&gt;?",
            options:  [
                "Medir o tempo de carregamento",
                "Exibir um relógio",
                "Representar datas/horários de forma legível por máquinas",
                "Criar um timer"
            ],
            correct:  2,
            explanation: "'&lt;time&gt;' fornece data/hora em formato padronizado"
        },
        {
            question: "Qual atributo define a descrição de uma imagem?",
            options:  ["title", "src", "alt", "description"],
            correct:  2,
           explanation: "'alt' fornece texto alternativo para acessibilidade e SEO (Search Engine Optimization)"
        },
        {
            question: "Qual elemento não é semântico ou não possui significado semântico?",
            options:  ["&lt;nav&gt;", "&lt;div&gt;", "&lt;header&gt;", "&lt;footer&gt;"],
            correct:  1,
            explanation: "'&lt;div&gt;' é um container genérico sem significado semântico"
        },
        {
            question: "Como criar um campo de entrada numérico?",
            options:  [
                "&lt;input type='number'&gt;",
                "&lt;input type='text' pattern='[0-9]'&gt;",
                "&lt;number&gt;",
                "&lt;input type='numeric'&gt;"
            ],
            correct:  0,
           explanation: "type='number' cria um campo numérico com controles"
        },
        {
            question: "Qual meta tag é essencial para responsividade?",
            options:  [
                "&lt;meta name='responsive' content='true'&gt;",
                "&lt;meta viewport&gt;",
                "&lt;meta name='viewport' content='width=device-width, initial-scale=1.0'&gt;",
                "&lt;meta media='all'&gt;"
            ],
            correct:  2,
            explanation: "A 'viewport meta tag' é crucial para designs responsivos"
        },
        {
            question: "Qual elemento deve ser único na página? (NÃO pode ter mais de um)",
            options: ["&lt;main&gt;", "&lt;header&gt;", "&lt;article&gt;", "&lt;section&gt;"],
            correct:  0,
            explanation:"'&lt;main&gt;' deve aparecer apenas uma vez, representando o conteúdo principal"
        },
        {
            question: "Como marcar uma palavra-chave no texto?",
            options: ["&lt;b&gt;", "&lt;mark&gt;", "&lt;strong&gt;", "&lt;em&gt;"],
            correct:  1,
           explanation:"'&lt;mark&gt;' destaca texto relevante no contexto atual"
        },
        {
            question: "Qual atributo é OBRIGATÓRIO em todas as tags &lt;img&gt;?",
            options: ["src", "alt", "width", "title"],
            correct:  1,
            explanation:"O 'alt' é essencial para acessibilidade, mesmo que vazio (alt='')"
        },
        {
           question: "Como inserir um vídeo que reproduz automaticamente sem som?",
           options:  ["&lt;video autoplay muted&gt;","&lt;video auto play&gt;","&lt;video autoplay sound='off'&gt;","&lt;video automatic&gt;"],
           correct: 0,
           explanation: "autoplay com muted é a única forma aceitável para auto-reprodução"
        },
        {
            question: "Qual a estrutura CORRETA de um link?",
            options:  [ "&lt;a url='https://...'&gt;Link&lt;/a&gt;", "&lt;a href='https://...'&gt;Link&lt;/a&gt;", "&lt;a src='https://...'&gt;Link&lt;/a&gt;", "&lt;link&gt;https://...&lt;/link&gt;"],
            correct:  1,
            explanation: "'href' é o atributo correto para definir o destino do link"
        },
        {
            question: "Qual tag NÃO é semântica?",
            options:  ["&lt;header&gt;", "&lt;section&gt;", "&lt;div&gt;", "&lt;nav&gt;"],
            correct:  2,
            explanation: "'&lt;div&gt;' é um container genérico sem significado semântico"
        },
        {
            question: "Para que serve o atributo 'lang' na tag &lt;html&gt;?",
            options: ["Definir o idioma da página","Carregar traduções automaticamente","Especificar layout vertical/horizontal","Declarar a linguagem de programação"],
            correct:  0,
            explanation:"lang='pt-BR' indica que o conteúdo está em português do Brasil"
        },
        {
            question:"Qual elemento é usado para conteúdo lateral? Ex: barras laterais(sidebars), menus, anúncios ou informações adicionais.",
            options: ["&lt;aside&gt;", "&lt;sidebar&gt;", "&lt;div&gt;", "&lt;nav&gt;"],
            correct: 0,
            explanation: "'&lt;aside&gt;' representa conteúdo relacionado indiretamente ao principal"
        },
        {
            question: "O que é HTML?",
            options: [
                "Uma linguagem de programação para criar sites dinâmicos",
                "Uma linguagem de marcação para estruturar conteúdo web",
                "Um framework para estilização de páginas",
                "Uma linguagem de consulta para bancos de dados"
            ],
            correct: 1,
            explanation: "HTML (HyperText Markup Language) é uma linguagem de MARCAÇÃO usada para estruturar e organizar o conteúdo web através de tags. Não é uma linguagem de programação!"
        }
    ],

    css: [
        {
            question: "Qual propriedade muda a cor do texto?",
            options: ["text-color", "font-color", "color", "text-style"],
            correct: 2,
            explanation: "A propriedade 'color' define a cor do texto em CSS."
        },
        {
           question: "Como criar um layout de 3 colunas com Grid?",
           options: [
                "grid-template: repeat(3, 1fr)",
                "grid-template-columns: repeat(3, 1fr)",
                "grid-rows: 3"
            ],
           correct: 1,
            explanation: "'grid-template-columns' define as colunas do grid"
        },
        {
           question: "Qual propriedade remove a decoração de links?",
           options: ["text-decoration: none", "list-style: none", "border: 0", "outline: 0"],
           correct: 0,
            explanation: "'text-decoration: none' Remove sublinhado de links"
        },
        {
           question: "Como centralizar verticalmente com Flexbox?",
           options: ["align-content: center", "justify-content: center", "align-items: center", "place-items: center"],
           correct: 2,
            explanation: "'align-items' alinha/centraliza os itens no eixo transversal (perpendicular ao eixo principal)"
        },
        {
           question: "Qual unidade é relativa ao tamanho da fonte do elemento?",
           options: ["px", "rem", "em", "%"],
           correct: 2,
            explanation: "'em' é relativo à font-size do elemento Pai"
        },
        {
           question: "Como aplicar estilos apenas para impressão?",
           options: ["@print", "@media print", "@page", "@media screen"],
           correct: 1,
            explanation: "'@media print' define estilos específicos para impressão"
        },
        {
           question: "Qual propriedade controla a ordem dos flex itens?",
           options: ["flex-order", "order", "z-index", "flex-position"],
           correct: 1,
            explanation: "'order' define a ordem de exibição dos flex itens"
        },
        {
           question: "Como suavizar transições?",
           options: ["transition-duration", "transition-timing-function", "transition-property", "animation-timing"],
           correct: 1,
            explanation: "'transition-timing-function' suaviza transições, ou seja, controla a curva de aceleração"
        },
        {
           question: "Qual valor de position permite elementos sobrepostos?",
           options: ["static", "relative", "absolute", "fixed"],
           correct: 2,
            explanation: "'absolute' e 'fixed' permitem a sobreposição dos elementos"
        },
        {
           question: "Como ocultar elementos mantendo o espaço?",
           options: ["display: none", "visibility: hidden", "opacity: 0", "width: 0"],
           correct: 1,
            explanation: "Usa-se o 'visibility: hidden' quando você quer que o elemento desapareça visualmente, mas ainda ocupe o mesmo espaço no layout, diferentemente de 'display: none', que remove o elemento completamente da renderização."
        },
        {
           question: "Qual pseudo-elemento cria conteúdo antes?",
           options: ["::before", "::after", "::first-line", "::placeholder"],
           correct: 0,
            explanation: "'::before' insere conteúdo ANTES do elemento"
        },
        {
           question: "Como resetar estilos padrão?",
           options: ["normalize.css", "reset.css", "* { margin: 0 }", "Todas anteriores"],
           correct: 3,
            explanation: "Todas são técnicas válidas de reset CSS!"
        },
        {
           question: "Qual propriedade controla o fluxo de texto?",
           options: ["white-space", "text-wrap", "word-break", "overflow-wrap"],
           correct: 0,
            explanation: "'white-space' controla espaços em branco e quebras de linha"
        },
        {
           question: "Como criar animações em loop?",
           options: ["animation-iteration-count: infinite", "animation-loop: true", "animation-repeat: forever", "animation: infinite"],
           correct: 0,
            explanation: "Para criar animações em loop, você deve usar 'animation-iteration-count: infinite', que faz a animação se repetir infinitamente."
        },
        {
           question: "Qual propriedade melhora performance de animações?",
           options: ["transform", "will-change", "backface-visibility", "Todas anteriores"],
           correct: 3,
            explanation: "Todas ajudam a otimizar animações!"
        },
        {
           question: "Como criar sombras em textos?",
           options: ["text-shadow", "box-shadow", "filter: drop-shadow", "font-effect"],
           correct: 0,
            explanation: "'text-shadow' aplica sombras diretamente nos textos"
        },
        {
       question: "Como definir uma variável CSS global?",
       options: [
            ":root { --cor-principal: #333; }",
            "var: --cor-principal #333;",
            "global { --cor-principal: #333; }",
            "$cor-principal: #333;"
        ],
       correct: 0,
        explanation: "Variáveis globais são definidas no seletor ':root'"
    },
    {
       question: "Qual o efeito de box-sizing: border-box?",
       options: [
            "Inclui padding e border na largura total",
            "Adiciona borda automática aos elementos",
            "Centraliza o conteúdo na caixa",
            "Cria efeito 3D nos elementos"
        ],
       correct: 0,
        explanation: "'box-sizing: border-box' faz com que a largura e a altura do elemento incluam o preenchimento e a borda , garantindo que o tamanho total permaneça o mesmo, sem expandir além do valor definido."
    },
    {
       question: "Como calcular largura considerando margens?",
       options: [
            "width: 100% - 20px;",
            "width: calc(100% - 20px);",
            "width: subtract(20px from 100%);",
            "width: auto(20px);"
        ],
       correct: 1,
        explanation: "A função 'calc()' permite cálculos matemáticos"
    },
    {
       question: "Qual media query é ideal para mobile-first?",
       options: [
            "@media (max-width: 768px)",
            "@media (min-width: 769px)",
            "@media (orientation: portrait)",
            "@media (hover: none)"
        ],
       correct: 1,
        explanation: "'min-width' começa do mobile (telas menores) e adapta para telas maiores"
    }
    ],
    
    javascript: [
        {
            question: "Como declarar uma constante?",
            options: [
                "const x = 10;",
                "var x = 10;",
                "let x = 10;"
            ],
           correct: 0,
           explanation: "'Const' é usado para constantes imutáveis"
        },
        {
            question: "Qual função mostra um popup?",
            options: [
                "alert('Olá')",
                "console.log('Olá')",
                "prompt('Olá')"
            ],
           correct: 0,
           explanation: "'Alert()' exibe uma mensagem ao usuário"
        },
        {
            question: "Como selecionar um elemento por ID?",
            options: [
                "document.getElementById()",
                "document.querySelector()",
                "document.getElementsByClassName()"
            ],
           correct: 0,
           explanation: "'GetElementById()' é o método específico para IDs"
        },
        {
            question: "Como converter número para string?",
            options: ["String(42)", "42.toString()", "Ambos"],
           correct: 2,
           explanation: "Ambos métodos são válidos!"
        },
        {
            question: "Qual método cria elemento HTML?",
            options: ["document.createElement()", "document.querySelector()", "document.write()"],
           correct: 0,
           explanation: "'CreateElement()' cria novos elementos"
        },
        {
            question: "Qual método adiciona um item no final do array?",
            options: [
                "push()",
                "pop()",
                "shift()"
            ],
           correct: 0,
           explanation: "'Push()' adiciona elementos no final do array"
        },
        {
            question: "Como criar um objeto vazio?",
            options: [
                "const obj = {};",
                "const obj = new Object();",
                "Ambos estão corretos"
            ],
           correct: 2,
           explanation: "Ambas as sintaxes criam objetos válidos!"
        },
        {
            question: "O que faz o operador % ?",
            options: [
                "Resto da divisão",
                "Porcentagem",
                "Divisão decimal"
            ],
           correct: 0,
           explanation: "Retorna o resto da divisão inteira"
        },
        {
            question: "Como verificar o tipo de uma variável?",
            options: [
                "typeof variavel",
                "variavel.type()",
                "variavel instanceof"
            ],
           correct: 0,
           explanation: "'Typeof' retorna o tipo como string"
        },
        {
            question: "Qual método divide uma string em array?",
            options: [
                "split()",
                "join()",
                "slice()"
            ],
           correct: 0,
           explanation: "'Split()' divide a string baseado no separador"
        },
        {
            question: "Qual operador retorna tipo?",
            options: ["typeof", "instanceof", "==="],
           correct: 0,
           explanation: "'Typeof' retorna o tipo como string"
        },
        {
            question: "Como adicionar classe CSS?",
            options: ["elemento.classList.add()", "elemento.className =", "Ambos"],
           correct: 2,
           explanation: "Ambos métodos funcionam!"
        },
        {
            question: "O que faz document.createElement()?",
            options: [
                "Cria novo elemento HTML",
                "Modifica elemento existente",
                "Seleciona elemento do DOM"
            ],
           correct: 0,
           explanation: "Cria elemento HTML, mas não o adiciona ao DOM"
        },
        {
            question: "Como converter para string?",
            options: [
                "String(10)",
                "10.toString()",
                "Ambos estão corretos"
            ],
           correct: 2,
           explanation: "Ambos métodos convertem para string!"
        },
        {
            question: "Qual evento ocorre ao digitar?",
            options: ["keypress", "click", "mouseover"],
           correct: 0,
           explanation: "'Keypress' detecta o pressionamento de tecla"
        },
        {
            question: "O que faz o método addEventListener()?",
            options: [
                "Vincula função a um evento",
                "Cria novo elemento",
                "Modifica estilos CSS"
            ],
           correct: 0,
           explanation: "Permite vincular múltiplos ouvintes ao mesmo evento"
        },
        {
            question: "Qual loop repete código número específico de vezes?",
            options: [
                "for",
                "while",
                "do...while"
            ],
           correct: 0,
           explanation: "'For' é ideal quando sabemos o número de iterações"
        },
        {
            question: "Como acessar propriedades de objeto?",
            options: [
                "objeto.propriedade",
                "objeto['propriedade']",
                "Ambos estão corretos"
            ],
           correct: 2,
           explanation: "Ambas as sintaxes são válidas!"
        },
        {
            question: "O que é JSON?",
            options: [
                "Formato de troca de dados",
                "Linguagem de programação",
                "Tipo de objeto JavaScript"
            ],
           correct: 0,
           explanation: "JavaScript Object Notation, formato universal de troca de dados"
        },
        {
            question: "Qual método executa função após tempo?",
            options: [
                "setTimeout()",
                "setInterval()",
                "requestAnimationFrame()"
            ],
           correct: 0,
           explanation: "Executa função uma vez após o tempo especificado"
        },
    ],

    nodejs: [
        {
            question: "Qual método é usado para criar um servidor HTTP?",
           options: [
                "http.createServer()",
                "http.newServer()",
                "http.server()"
            ],
           correct: 0,
           explanation: "'Http.createServer()' cria uma nova instância de servidor"
        },
        {
            question: "Como importar módulos core do Node.js?",
           options: [
                "Usando require com caminho relativo",
                "Usando import de ES6",
                "Usando require sem caminho"
            ],
           correct: 2,
           explanation: "Módulos 'core' são importados pelo nome SEM caminho"
        },
        {
            question: "Qual comando fornece recarregamento automático durante o desenvolvimento?",
           options: [
                "node --watch app.js",
                "nodemon app.js", 
                "npm run refresh"
            ],
           correct: 1,
           explanation: " 'Nodemon' reinicia automaticamente o servidor ao detectar mudanças"
        },
        {
            question: "Como definir variáveis de ambiente temporárias no terminal Linux?",
           options: [
                "SET PORT=3000",
                "export PORT=3000", 
                "ENV PORT=3000"
            ],
           correct: 1,
           explanation: "O comando 'export' define variáveis de ambiente em sistemas Unix (É um sistema operacional multitarefa e multiusuário, base para Linux e macOS.)"
        },
        {
            question: "Qual método do Express.js lida com requisições GET?",
           options: [
                "app.get()",
                "app.post()", 
                "app.route()"
            ],
           correct: 0,
           explanation: "'App.get()' é específico para requisições HTTP do tipo GET"
        },
        {
            question: "Qual a função principal do package.json?",
           options: [
                "Configurar o compilador TypeScript",
                "Gerenciar metadados e dependências do projeto", 
                "Definir regras de linting"
            ],
           correct: 1,
           explanation: "Armazena configurações do projeto e lista dependências"
        },
        {
            question: "Qual módulo lida com operações de arquivos?",
           options: [
                "file system", 
                "path", 
                "stream"
            ],
           correct: 0,
           explanation: "'File System (FS)' fornece operações de leitura/escrita de arquivos"
        },
        {
            question: "Como instalar o Express como dependência de produção?",
           options: [
                "npm install express --production",
                "npm install express --save", 
                "npm install express -D"
            ],
           correct: 1,
           explanation: "'--save' salva no package.json como dependência regular"
        },
        {
            question: "Qual método inicia um servidor HTTP?",
           options: [
                "server.start()",
                "server.listen()", 
                "server.init()"
            ],
           correct: 1,
           explanation: "'Server.listen()' inicia o servidor na porta especificada"
        },
        {
            question: "Para que serve express.json()?",
           options: [
                "Servir páginas HTML",
                "Processar dados JSON recebidos", 
                "Configurar autenticação"
            ],
           correct: 1,
           explanation: "'Middleware' para analisar corpos de requisições em JSON"
        },
        {
            question: "Como executar um script personalizado 'dev'?",
           options: [
                "npm start",
                "npm run dev", 
                "node dev"
            ],
           correct: 1,
           explanation: "'npm run' executa scripts definidos no package.json"
        },
        {
            question: "O que faz o npm audit?",
           options: [
                "Verificar atualizações de pacotes",
                "Auditar segurança das dependências", 
                "Limpar cache do npm"
            ],
           correct: 1,
           explanation: "Verifica a vulnerabilidades nas dependências instaladas"
        },
        {
            question: "Como atualizar todas as dependências?",
           options: [
                "npm refresh",
                "npm update", 
                "npm upgrade-all"
            ],
           correct: 1,
           explanation: "'npm update' atualiza para as versões permitidas"
        },
        {
            question: "Para que serve process.exit()?",
           options: [
                "Reiniciar o servidor",
                "Encerrar o processo Node", 
                "Parar uma requisição HTTP"
            ],
           correct: 1,
           explanation: "Encerra imediatamente o processo Node.js"
        },
        {
            question: "Como construir caminhos de arquivo corretamente?",
           options: [
                "path.join()", 
                "fs.joinPath()", 
                "os.path()"
            ],
           correct: 0,
           explanation: "'path.join()' une segmentos considerando o SO (sistema operacional)"
        },
        {
            question: "Qual padrão de callback é mais usado?",
           options: [
                "(resultado, erro)",
                "(erro, resultado)", 
                "(data, status)"
            ],
           correct: 1,
           explanation: "Convenção de 'Error-first', que significa erro e resultado no padrão callback"
        },
        {
            question: "O que representa __dirname?",
           options: [
                "Diretório do módulo atual",
                "Diretório de trabalho", 
                "Caminho do executável Node"
            ],
           correct: 0,
           explanation: "Contém o caminho absoluto do diretório do módulo atual"
        },
        {
            question: "O que é o Event Loop no Node.js?",
            options: [
                "Um ciclo que gerencia operações assíncronas de forma não bloqueante",
                "Um módulo para criar eventos customizados",
                "Um sistema de paralelismo multi-thread"
            ],
            correct: 0,
            explanation: "O 'Event Loop' é responsável por gerenciar operações I/O assíncronas de forma não bloqueante, ou seja, ele coordena tarefas assíncronas para que o Node.js continue respondendo rapidamente sem ficar preso esperando respostas."
        },
        {
            question: "Qual objeto global armazena variáveis de ambiente?",
            options: [
                "process.env",
                "global.vars", 
                "environment.config"
            ],
            correct: 0,
            explanation: "'Process.env' dá acesso às variáveis de ambiente do sistema"
        },
        {
            question: "Para que serve o middleware no Express.js?",
            options: [
                "Processar requisições antes de chegar nas rotas",
                "Conectar ao banco de dados",
                "Gerar templates HTML"
            ],
            correct: 0,
            explanation: "'Middlewares' interceptam e processam requisições HTTP antes de atingirem as rotas finais"
        }
    ],

    git: [
        {
           question: "Qual comando inicia um novo repositório Git?",
           options: [
                "git start",
                "git init", 
                "git new"
            ],
           correct: 1,
            explanation: "'git init' cria um novo repositório na pasta atual"
        },
        {
           question: "Como preparar/adicionar todos os arquivos para commit?",
           options: [
                "git add .",
                "git commit -a", 
                "git stage all"
            ],
           correct: 0,
            explanation: "'git add .'adiciona todas as mudanças à área de staging"
        },
        {
           question: "Qual comando salva as mudanças com uma mensagem?",
           options: [
                "git save -m 'mensagem'",
                "git commit -m 'mensagem'", 
                "git snapshot 'mensagem'"
            ],
           correct: 1,
            explanation: "'git commit -m' registra as mudanças no histórico"
        },
        {
           question: "Como baixar/copiar um repositório remoto?",
           options: [
                "git download",
                "git clone", 
                "git copy"
            ],
           correct: 1,
            explanation: "'git clone' copia um repositório completo para sua máquina"
        },
        {
           question: "Qual comando mostra o estado atual do repositório?",
           options: [
                "git status",
                "git check", 
                "git info"
            ],
           correct: 0,
            explanation: "'git status' exibe arquivos modificados e preparados"
        },
        {
           question: "Como ver o histórico de commits simplificado?",
           options: [
                "git log --oneline",
                "git history", 
                "git timeline"
            ],
           correct: 0,
            explanation: "'--oneline' mostra cada commit em uma única linha"
        },
        {
           question: "Para que serve o arquivo .gitignore?",
           options: [
                "Ignorar comandos inválidos",
                "Listar arquivos não rastreados", 
                "Especificar arquivos a não rastrear"
            ],
           correct: 2,
            explanation: "Ele define quais arquivos/pastas o Git deve ignorar"
        },
        {
           question: "Como criar e mudar para uma nova branch?",
           options: [
                "git branch nova-branch",
                "git checkout -b nova-branch", 
                "git switch nova-branch"
            ],
           correct: 1,
            explanation: "'checkout -b' cria e muda para a nova branch"
        },
        {
           question: "O que é um conflito de merge?",
           options: [
                "Erro de conexão com o remoto",
                "Alterações incompatíveis no mesmo arquivo", 
                "Problema de autenticação"
            ],
           correct: 1,
            explanation: "Ocorre quando alterações conflitantes são mescladas"
        },
        {
           question: "Como atualizar o repositório local com alterações remotas?",
           options: [
                "git refresh",
                "git pull", 
                "git sync"
            ],
           correct: 1,
            explanation: "'git pull' busca e mescla alterações do remoto"
        },
        {
           question: "Qual comando envia commits para o repositório remoto?",
           options: [
                "git send",
                "git upload", 
                "git push"
            ],
           correct: 2,
            explanation: "'git push' envia seus commits para o servidor remoto"
        },
        {
           question: "Como ver as diferenças entre commits?",
           options: [
                "git changes",
                "git diff", 
                "git compare"
            ],
           correct: 1,
            explanation: "'git diff' mostra diferenças entre arquivos/commits"
        },
        {
           question: "Para que serve git stash?",
           options: [
                "Armazenar alterações temporariamente",
                "Excluir arquivos não rastreados", 
                "Compactar o histórico"
            ],
           correct: 0,
            explanation: "Guardar alterações sem fazer commit para uso posterior"
        },
        {
           question: "Como adicionar um repositório remoto?",
           options: [
                "git add remote",
                "git remote add", 
                "git connect origin"
            ],
           correct: 1,
            explanation: "'git remote add [nome] [url] ' configura um novo repositório remoto"
        },
        {
           question: "Qual comando desfaz alterações não commitadas?",
           options: [
                "git undo",
                "git checkout -- .", 
                "git reset"
            ],
           correct: 1,
            explanation: "'checkout -- .' reverte arquivos para último commit"
        },
        {
           question: "Como alterar o último commit?",
           options: [
                "git modify",
                "git commit --amend", 
                "git redo"
            ],
           correct: 1,
            explanation: "'--amend' permite corrigir o último commit"
        },
        {
           question: "Qual a diferença entre fetch e pull?",
           options: [
                "Fetch baixa alterações, pull baixa e mescla",
                "São comandos idênticos", 
                "Pull apenas verifica atualizações"
            ],
           correct: 0,
            explanation: "'Fetch' baixa as alterações do repositório remoto para o local, mas não altera seu código. Já o 'pull' faz o fetch e, além disso, mescla essas alterações com seu código local."
        },
        {
           question: "Como ver as configurações do Git?",
           options: [
                "git config --list",
                "git settings", 
                "git show-config"
            ],
           correct: 0,
            explanation: "O comando 'git config --list' exibe todas as configurações atuais do Git no seu ambiente, como usuário, email, editor e outras opções personalizadas. Isso permite que você veja as configurações globais e locais definidas para o repositório ou para o sistema."
        },
        {
           question: "O que faz git reset --soft?",
           options: [
                "Apaga todas as alterações",
                "Desfaz commits mantendo alterações", 
                "Remove arquivos não rastreados"
            ],
           correct: 1,
            explanation: "'Reset --soft' mantém alterações na área de staging (é onde você coloca as alterações antes de confirmá-las no Git.)"
        },
        {
           question: "Como forçar um push para o repositório remoto?",
           options: [
                "git push --force",
                "git push -overwrite", 
                "git push --replace"
            ],
           correct: 0,
            explanation: "'--force' substitui o histórico remoto mas use com cuidado! ou seja, o comando 'git push --force' pode sobrescrever alterações no repositório remoto, o que pode causar problemas, como perda de dados. "
        }
    ],

    github: [
        {
            question: "Qual o primeiro passo para usar GitHub em um projeto existente?",
           options: [
                "Criar repositório no GitHub e vincular local",
                "Instalar extensão do VSCode",
                "Configurar email no Git"
            ],
           correct: 0,
            explanation: "Crie o repositório remoto e vincule com 'git remote add'"
        },
        {
            question: "Para que serve o arquivo .gitignore?",
           options: [
                "Ignorar arquivos sensíveis no versionamento",
                "Documentar o projeto",
                "Configurar identidade do usuário"
            ],
           correct: 0,
            explanation: "Listar arquivos/pastas que o Git deve ignorar"
        },
        {
            question: "Qual a principal função de um Pull Request?",
           options: [
                "Solicitar revisão de código antes de mesclar",
                "Atualizar o repositório local",
                "Excluir branches antigos"
            ],
           correct: 0,
            explanation: "Mecanismo central para colaboração no GitHub"
        },
        {
            question: "Como proteger dados sensíveis no GitHub?",
           options: [
                "Usar variáveis de ambiente/secrets",
                "Comitar em branch privada",
                "Compactar arquivos"
            ],
           correct: 0,
            explanation: "Nunca comite senhas ou chaves use 'secrets'"
        },
        {
            question: "Qual a vantagem do GitHub Actions?",
           options: [
                "Automatizar testes e deploys",
                "Editar código colaborativamente",
                "Gerenciar issues automaticamente"
            ],
           correct: 0,
            explanation: "A vantagem do GitHub Actions é automatizar tarefas como testes e deploys diretamente no seu repositório. Isso facilita o processo de CI/CD, executando esses processos automaticamente sempre que há mudanças no código."
        },
        {
            question: "Para que serve o GitHub Pages?",
           options: [
                "Hospedar sites estáticos gratuitamente",
                "Armazenar backups de banco de dados",
                "Gerenciar documentação técnica"
            ],
           correct: 0,
            explanation: "Hospeda páginas gratuitamente. Ideal para portfólios e documentação"
        },
        {
            question: "Como contribuir em projetos open source?",
           options: [
                "Fazer fork e enviar Pull Request",
                "Editar diretamente no repositório",
                "Enviar arquivos por email"
            ],
           correct: 0,
            explanation: "O fluxo padrão para contribuir em projetos open source é fazer um fork (copiar o repositório para o seu perfil), fazer as alterações no seu fork, e depois enviar um Pull Request para o repositório original."
        },
        {
            question: "O que são Protected Branches?",
           options: [
                "Branches com restrições de alteração",
                "Branches criptografados",
                "Branches temporários"
            ],
           correct: 0,
            explanation: "São Branches com restrições de alteração. Protege branches importantes como main/master e ajuda a manter a integridade do código"
        },
        {
            question: "Qual a função do GitHub Desktop?",
           options: [
                "Interface gráfica para Git/GitHub",
                "Editor de código online",
                "Cliente de email integrado"
            ],
           correct: 0,
            explanation: "O 'GitHub Desktop' é uma interface gráfica que facilita o uso do Git e GitHub para iniciantes, permitindo que você faça operações como commit e push de forma mais simples, sem precisar usar o terminal."
        },
        {
            question: "Como resolver merge conflicts (são conflitos que ocorrem quando o Git não consegue combinar automaticamente as alterações em arquivos.)?",
           options: [
                "Editar arquivos conflitantes e commitar",
                "Excluir o repositório",
                "Resetar todo o histórico"
            ],
           correct: 0,
            explanation: "Para resolver merge conflicts, você deve editar manualmente os arquivos conflitantes, escolher qual versão manter ou combinar as alterações, e depois fazer o commit para registrar a resolução."
        },
        {
            question: "Para que serve o 2FA no GitHub?",
           options: [
                "Aumentar segurança da conta",
                "Acelerar o envio de commits",
                "Gerar tokens de acesso"
            ],
           correct: 0,
            explanation: "2A (Autenticação em dois fatores) é essencial para aumentar a segurança da conta"
        },
        {
            question: "Como usar Issues de forma eficiente?",
           options: [
                "Descrever problemas e tarefas detalhadamente",
                "Substituir emails internos",
                "Armazenar arquivos temporários"
            ],
           correct: 0,
            explanation: "Descrever problemas e tarefas detalhadamente, facilitando o acompanhamento, a organização e a comunicação sobre o progresso de trabalho e discussões técnicas no projeto."
        },
        {
            question: "O que é um template de Pull Request?",
           options: [
                "Formato padrão para descrição de PRs",
                "Modelo de código para novas features",
                "Configuração de repositório"
            ],
           correct: 0,
            explanation: "Formato padrão para descrição de PRs. Ajuda a padronizar a forma como os desenvolvedores descrevem as mudanças e facilita o processo de revisão de código (code review)."
        },
        {
            question: "Para que serve git rebase?",
           options: [
                "Reaplicar commits em nova base",
                "Excluir histórico antigo",
                "Compactar múltiplos branches"
            ],
           correct: 0,
            explanation: "Serve para reaplicar commits em nova base, mantendo o histórico linear e organizado"
        },
        {
            question: "Como visualizar alterações não commitadas?",
           options: [
                "git diff",
                "git status",
                "git log"
            ],
           correct: 0,
            explanation: " 'git diff'. Mostra diferenças linha por linha"
        },
        {
            question: "Qual a função do README.md?",
           options: [
                "Documentação principal do projeto",
                "Configurar ambiente de desenvolvimento",
                "Listar dependências obrigatórias"
            ],
           correct: 0,
            explanation: " README.md é a documentação principal do projeto, ou seja, primeiro ponto de contato com o projeto"
        },
        {
            question: "Como gerenciar múltiplos remotos?",
           options: [
                "git remote add [nome] [url]",
                "Editar arquivo .git/config",
                "Usar múltiplas contas GitHub"
            ],
           correct: 0,
            explanation: "'git remote add [nome] [url]' Adiciona e nomeia diferentes repositórios remotos"
        },
        {
            question: "O que são GitHub Wikis?",
           options: [
                "Documentação colaborativa do projeto",
                "Ferramenta de comunicação interna",
                "Sistema de armazenamento de arquivos"
            ],
           correct: 0,
            explanation: "'Documentação colaborativa do projeto' é utilizada para documentação técnica detalhada"
        },
        {
            question: "Como usar emojis em mensagens de commit?",
           options: [
                "git commit -m \"🚀 Adiciona nova feature\"",
                "Ativar plugin especial",
                "Editar configurações do terminal"
            ],
           correct: 0,
            explanation: "Você pode usar emojis nas mensagens de commit diretamente com o comando 'git commit -m \"🚀 Adiciona nova feature\"', sem necessidade de configurações extras, pois o Git suporta emojis nativamente."
        },
        {
            question: "Para que serve o GitHub Codespaces?",
            options: [
                "Ambiente de desenvolvimento na nuvem prontamente configurado",
                "Armazenamento de backups de código",
                "Ferramenta de monitoramento de desempenho"
            ],
            correct: 0,
            explanation: "GitHub Codespaces permite criar ambientes de desenvolvimento na nuvem pré-configurados diretamente do seu repositório. Isso elimina a necessidade de configurar ambientes locais e mantém toda a equipe com setups consistentes."
        }
    ],

   logica : [
        {
            question: "Qual a definição correta de algoritmo?",
            options: [
                "Sequência lógica de passos para resolver um problema",
                "Tipo especial de variável",
                "Linguagem de programação visual"
            ],
            correct: 0,
            explanation: "Algoritmo é uma sequência finita de instruções bem definidas para resolver problemas específicos"
        },
        {
            question: "Qual estrutura verifica múltiplas condições?",
            options: [
                "else if",
                "switch case",
                "Ambas as anteriores"
            ],
            correct: 2,
            explanation: "Tanto 'else if' quanto 'switch case' permitem verificar múltiplas condições de forma estruturada"
        },
        {
            question: "Qual loop SEMPRE executa pelo menos uma vez?",
            options: [
                "do...while",
                "for",
                "while"
            ],
            correct: 0,
            explanation: "O loop 'do...while' sempre executa pelo menos uma vez porque a condição é verificada somente após a primeira execução. Ou seja, ele executa o bloco de código primeiro e só depois verifica se deve continuar."
        },
        {
            question: "Para que serve o operador % ?",
            options: [
                "Resto da divisão",
                "Porcentagem",
                "Comentário"
            ],
            correct: 0,
            explanation: "Em programação, % é o operador módulo (resto da divisão)"
        },
        {
            question: "Qual erro ocorre neste código? if (x = 5) { ... }",
            options: [
                "Atribuição ao invés de comparação",
                "Falta de chaves",
                "Variável não declarada"
            ],
            correct: 0,
            explanation: "'=' é operador de atribuição. Para comparação use '=='. Então o correto seria: if (x == 5) { ... }"
        },
        {
            question: "Qual estrutura é ideal para repetição com contador?",
            options: [
                "for",
                "while",
                "do...while"
            ],
            correct: 0,
            explanation: "O 'for' é melhor quando sabemos o número exato de iterações!"
        },
        {
            question: "O que é debug?",
            options: [
                "Processo de encontrar e corrigir erros",
                "Tipo de variável",
                "Método para excluir código"
            ],
            correct: 0,
            explanation: "Debug é a prática de identificar e resolver problemas no código (corrigir erros)"
        },
        {
            question: "Qual a função do Math.sqrt(num)?",
            options: [
                "Calcular raiz quadrada",
                "Arredondar números",
                "Gerar números aleatórios"
            ],
            correct: 0,
            explanation: "A função 'Math.sqrt()' retorna a raiz quadrada de um número"
        },
        {
            question: "Qual destes é um operador lógico?",
            options: [
                "&&",
                "++",
                "#"
            ],
            correct: 0,
            explanation: "&& representa o operador lógico AND. O '++' é um operador de incremento, e o '#' não é um operador válido em JavaScript"
        },
        {
            question: "Para que serve break em loops?",
            options: [
                "Interromper a execução do loop",
                "Pausar temporariamente",
                "Ignorar iteração atual"
            ],
            correct: 0,
            explanation: "O comando break é usado para parar imediatamente a execução de um loop, saindo dele completamente."
        },
        {
            question: "Qual método verifica elementos em array?",
            options: [
                "includes()",
                "join()",
                "push()"
            ],
            correct: 0,
            explanation: "includes() verifica se elemento existe no array ✅. 'join()' transforma o array em string, e 'push()' adiciona um elemento no array."
        },
        {
            question: "O que significa DRY em programação?",
            options: [
                "Don't Repeat Yourself",
                "Debug Repeatedly Yourself",
                "Data Recovery Yield"
            ],
            correct: 0,
            explanation: "DRY = Don't Repeat Yourself (Não se Repita). Princípio de reutilização de código!"
        },
        {
            question: "Qual destes NÃO é tipo primitivo?",
            options: [
                "array",
                "boolean",
                "number"
            ],
            correct: 0,
            explanation: "O Array é estrutura de dados, não tipo primitivo. Os tipos primitivos em JavaScript são dados que não são objetos e não possuem métodos. Exemplo: string, number, boolean, undefined, null, bigint e symbol."
        },
        {
            question: "Para que serve parseInt()?",
            options: [
                "Converter string para número inteiro",
                "Verificar tipo de dado",
                "Dividir strings"
            ],
            correct: 0,
            explanation: "parseInt() converte string para número inteiro"
        },
        {
            question: "Qual a diferença entre == e ===?",
            options: [
                "Comparação com verificação de tipo",
                "Atribuição vs comparação",
                "Operadores matemáticos"
            ],
            correct: 0,
            explanation: "'==' (igualdade solta) → Compara apenas o valor, sem verificar o tipo. Se os tipos forem diferentes, ele tenta converter para comparar. '===' (igualdade estrita) → Compara valor e tipo, sem conversão."
        },
        {
            question: "O que é escopo de variável?",
            options: [
                "Onde a variável pode ser acessada",
                "Tipo de dados da variável",
                "Valor armazenado na variável"
            ],
            correct: 0,
            explanation: "Escopo define a visibilidade e acesso da variável. É onde a variável pode ser acessada."
        },
        {
            question: "Qual método ordena arrays?",
            options: [
                "sort()",
                "filter()",
                "map()"
            ],
            correct: 0,
            explanation: "'sort()' ordena elementos do array alfabeticamente. 'filter()' (Filtra elementos, mas não ordena) 'map()' (Cria um novo array transformado, sem ordenar)"
        },
        {
            question: "O que é NaN?",
            options: [
                "Not a Number",
                "New Array Number",
                "Null Alternative Number"
            ],
            correct: 0,
        explanation: "NaN = Not a Number (Não é Número). É o resultado de operações inválidas!"
        },
        {
            question: "Qual a função de try...catch?",
            options: [
                "Tratamento de erros",
                "Declaração de variáveis",
                "Controle de loops"
            ],
            correct: 0,
            explanation: "O bloco 'try...catch' é usado para capturar e tratar erros em um código, evitando que ele quebre completamente quando ocorre uma exceção."
        },
        {
            question: "O que significa 'callback function'?",
            options: [
                "Função passada como argumento",
                "Função que retorna valores",
                "Função matemática"
            ],
            correct: 0,
            explanation: "Uma callback function é uma função passada como argumento para outra função, para ser executada depois que a função principal completar sua execução. Ou seja, é uma maneira de garantir que o código seja executado em um momento específico, sem interromper a execução do fluxo principal."
        }
    ]
};

let quizActiveElement = document.querySelector('.quiz-active');
let quizResultElement = document.getElementById('quizResult');
let userAnswers = [];
let currentLang = null;
let currentQuiz = null;
let currentQuestion = 0;
let score = 0;

// Referências de elementos
const quizDom = {
    quizzesGrid: document.getElementById('quizzesGrid'),
    quizContainer: document.getElementById('quizContainer'),
    quizActive: document.querySelector('.quiz-active'),
    quizResult: document.getElementById('quizResult'),
    quizTitle: document.getElementById('quizTitle'),
    currentScore: document.getElementById('currentScore'),
    questionText: document.getElementById('questionText'),
    optionsContainer: document.getElementById('optionsContainer'),
    feedback: document.getElementById('feedback'),
    nextQuestion: document.getElementById('nextQuestion')
};

document.querySelectorAll('.quiz-card').forEach(card => {
    card.addEventListener('click', () => {
        const lang = card.dataset.lang;
        startQuiz(lang);
    });
});

function startQuiz(lang) {
    document.getElementById('quizzesGrid').classList.add('hidden');
    document.getElementById('quizContainer').classList.remove('hidden');
    
    currentQuiz = quizzes[lang];
    currentLang = lang;
    currentQuestion = 0;
    score = 0;
    userAnswers = [];
    
    const quizNames = {
        logica: "Lógica de Programação",
        html: "HTML",
        css: "CSS",
        javascript: "JavaScript",
        nodejs: "Node.js",
        git: "Git",
        github: "GitHub"
    };
    document.getElementById('quizTitle').textContent = `Quiz de ${quizNames[lang] || lang.toUpperCase()}`;
    document.getElementById('currentScore').textContent = score;
    
    showQuestion();
}

function showQuestion() {
    const question = currentQuiz[currentQuestion];
    const feedback = document.getElementById('feedback');

    // Resetar o feedback ao mostrar nova questão
    feedback.innerHTML = '';
    feedback.className = 'hidden';

    quizDom.questionText.innerHTML = question.question;
    quizDom.optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const button = document.createElement('div');
        button.className = 'option';
        button.innerHTML = option;
        button.onclick = () => checkAnswer(index);
        quizDom.optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    userAnswers[currentQuestion] = selectedIndex;
    const options = document.querySelectorAll('.option');
    const feedback = document.getElementById('feedback');
    const question = currentQuiz[currentQuestion];
    
    options.forEach(option => {
        option.classList.add('disabled');
        option.style.pointerEvents = 'none';
    });

    if(selectedIndex === question.correct) {
        quizDom.feedback.classList.remove('incorrect');
        quizDom.feedback.classList.add('correct');
        score += 10;
        feedback.innerHTML = `
            <div class="feedback-content">
                🎉✅ Parabéns! Você ganhou +10 pontos!
                <div class="confetti-effect"></div>
                <p>${question.explanation}</p>
            </div>
        `;
        feedback.classList.add('correct');
        triggerConfetti();
    } else {
        quizDom.feedback.classList.remove('correct');
        quizDom.feedback.classList.add('incorrect');
        score -= 5;
        feedback.innerHTML = `
            <div class="feedback-content">
                ❌ Ops... Não foi dessa vez! -5 pontos
                <div class="sad-effect">💧😢💧</div>
                <p>Resposta correta: ${question.options[question.correct]}</p>
                <p>${question.explanation}</p>
            </div>
        `;
        feedback.classList.add('incorrect');
    }

    document.getElementById('currentScore').textContent = score;
    feedback.classList.remove('hidden');
    document.getElementById('nextQuestion').classList.remove('hidden');
}

function triggerConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

document.getElementById('nextQuestion').addEventListener('click', () => {
    currentQuestion++;
    
    if(currentQuestion < currentQuiz.length) {
        showQuestion();
    } else {
        endQuiz();
    }
});

function endQuiz() {
    // Calcular porcentagens
    const totalQuestions = currentQuiz.length;
    const correctAnswers = userAnswers.reduce((acc, answer, index) => {
        return acc + (answer === currentQuiz[index].correct ? 1 : 0);
    }, 0);
    const correctPercentage = Math.round((correctAnswers / totalQuestions) * 100);
    const wrongPercentage = 100 - correctPercentage;

    const resultsHTML = `
        <div class="result-content">
            <h2>Quiz Concluído! 🎉</h2>
            <p class="result-subtitle">Você completou o quiz sobre ${currentLang.toUpperCase()}</p>
            
            <div class="result-summary">
                <h3>📊 Resultado Final</h3>
                <p>Pontuação: ${score} pontos (${correctAnswers} de ${totalQuestions} acertos)</p>
                
                <div class="progress-container">
                    <div class="progress-bar">
                        <div class="correct-progress" style="width: ${correctPercentage}%"></div>
                        <div class="wrong-progress" style="width: ${wrongPercentage}%"></div>
                    </div>
                    <div class="progress-labels">
                        <span>${correctPercentage}% Acertos</span>
                        <span>${wrongPercentage}% Erros</span>
                    </div>
                </div>
                
                <h3 class="detailed-results">📝 Detalhes por Questão</h3>
                ${currentQuiz.map((question, index) => `
                    <div class="question-result ${userAnswers[index] === question.correct ? 'correct' : 'incorrect'}">
                        <h4>Questão ${index + 1}:</h4>
                        <p>${question.question}</p>
                        <p>Sua resposta: ${question.options[userAnswers[index]]} ${userAnswers[index] === question.correct ? '✅' : '❌'}</p>
                        ${userAnswers[index] !== question.correct ? 
                            `<p>Resposta correta: ${question.options[question.correct]}</p>` : ''}
                        <p class="explanation">📚 Explicação: ${question.explanation}</p>
                    </div>
                `).join('')}
            </div>
            
            <div class="result-actions">
                <button id="restartButton">Refazer Quiz</button>
                <button id="returnButton">Voltar para Quizzes</button>
            </div>
        </div>
        
        <style>
            .progress-container {
                margin: 2rem 0;
            }
            .progress-bar {
                height: 30px;
                background: #fee2e2;
                border-radius: 15px;
                overflow: hidden;
                display: flex;
                margin-bottom: 0.5rem;
            }
            .correct-progress {
                background: #22c55e;
                height: 100%;
                transition: width 1s ease;
            }
            .wrong-progress {
                background: #ef4444;
                height: 100%;
                transition: width 1s ease;
            }
            .progress-labels {
                display: flex;
                justify-content: space-between;
                font-size: 0.9rem;
                color: #64748b;
            }
            .detailed-results {
                margin-top: 2rem;
                border-top: 1px solid #e2e8f0;
                padding-top: 1.5rem;
            }
        </style>
    `;

    quizDom.quizResult.innerHTML = resultsHTML;
    quizDom.quizActive.classList.add('hidden');
    quizDom.quizResult.classList.remove('hidden');

    // Adicionar event listeners
    document.getElementById('restartButton').addEventListener('click', restartQuiz);
    document.getElementById('returnButton').addEventListener('click', () => location.reload());

    // Adicionar e configurar botão scroll-to-top
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.className = 'scroll-to-top-btn';
    scrollTopBtn.innerHTML = '↑';
    scrollTopBtn.onclick = () => window.scrollTo({top: 0, behavior: 'smooth'});
    document.body.appendChild(scrollTopBtn);

    // Ativar/desativar botão conforme scroll
    window.addEventListener('scroll', () => {
        scrollTopBtn.classList.toggle('active', window.scrollY > 200);
    });
}

function restartQuiz() {
    // Resetar todas as variáveis do quiz
    currentQuestion = 0;
    score = 0;
    userAnswers = [];
    
    // Resetar interface
    quizDom.currentScore.textContent = score;
    quizDom.optionsContainer.innerHTML = '';
    quizDom.feedback.classList.add('hidden');
    quizDom.nextQuestion.classList.add('hidden');
    
    // Alternar visibilidade
    quizDom.quizResult.classList.add('hidden');
    quizDom.quizActive.classList.remove('hidden');
    
    // Reiniciar questões
    showQuestion();
}

// Botão Voltar
document.addEventListener('DOMContentLoaded', () => {
    const backButton = document.createElement('button');
    backButton.textContent = '← Voltar para Quizzes';
    backButton.className = 'back-button';
    backButton.onclick = () => {
        document.getElementById('quizzesGrid').classList.remove('hidden');
        document.getElementById('quizContainer').classList.add('hidden');
    };
    document.querySelector('.quiz-header').prepend(backButton);
});

window.addEventListener('scroll', () => {
    const scrollBtn = document.querySelector('.scroll-to-top-btn');
    if (scrollBtn) {
        scrollBtn.classList.toggle('active', window.scrollY > 200);
    }
});