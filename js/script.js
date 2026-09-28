"use strict";


/* =================     NOTÍCIAS     ==================== */

const noticias = [

    {
        id: 1,
        titulo: "Novos avanços tornam a impressão 3D mais rápida e precisa",
        categoria: "Impressão 3D",
        autor: "Equipe FabTech",
        data: "25/09/2026",
        imagem: "../img/impressao-3d.jpg",
        alt: "Impressora 3D produzindo uma peça",
        resumo: "Novas tecnologias de fabricação aditiva estão aumentando a velocidade e a precisão na produção de peças.",
        conteudo: `
            <p>A impressão 3D continua evoluindo e ampliando as possibilidades de fabricação de peças para projetos pessoais, educacionais e profissionais.</p>
            <p>Novos equipamentos e métodos de fabricação procuram reduzir o tempo de produção sem comprometer a qualidade das peças. Essa evolução é importante principalmente para prototipagem e desenvolvimento de produtos.</p>
            <p>Além da velocidade, a precisão também ganhou destaque. Melhorias no controle de movimento, nos materiais e nos softwares permitem produzir objetos cada vez mais detalhados.</p>
            <p>Para o universo maker, essas tecnologias ajudam estudantes, profissionais e criadores a transformar ideias em protótipos físicos com mais facilidade.</p>
        `
    },

    {
        id: 2,
        titulo: "Impressão 3D ganha espaço na criação de peças personalizadas",
        categoria: "Impressão 3D",
        autor: "Equipe FabTech",
        data: "23/09/2026",
        imagem: "../img/impressao-3d-2.jpg",
        alt: "Peças produzidas em uma impressora 3D",
        resumo: "A fabricação de peças personalizadas continua ampliando as possibilidades para projetos independentes e pequenos negócios.",
        conteudo: `
            <p>Uma das principais vantagens da impressão 3D é a possibilidade de produzir objetos personalizados de acordo com diferentes necessidades.</p>
            <p>Peças de reposição, suportes, acessórios e protótipos podem ser desenvolvidos sem a necessidade de grandes estruturas industriais.</p>
            <p>Essa característica também beneficia pequenos negócios e criadores independentes, que conseguem testar diferentes versões de um produto antes de iniciar uma produção maior.</p>
            <p>Com a evolução dos materiais e dos equipamentos, a fabricação personalizada tende a ocupar um espaço cada vez maior em projetos de pequena escala.</p>
        `
    },

    {
        id: 3,
        titulo: "Marcenaria digital aproxima ferramentas tradicionais da tecnologia",
        categoria: "Marcenaria",
        autor: "Equipe FabTech",
        data: "21/09/2026",
        imagem: "../img/marcenaria.jpg",
        alt: "Pessoa trabalhando com madeira em uma oficina",
        resumo: "Máquinas digitais e ferramentas tradicionais estão sendo combinadas para criar projetos de marcenaria mais precisos.",
        conteudo: `
            <p>A marcenaria também passou a incorporar ferramentas digitais capazes de auxiliar diferentes etapas do desenvolvimento de projetos.</p>
            <p>Máquinas de controle computadorizado, softwares de desenho e equipamentos de fabricação digital permitem planejar cortes e encaixes com maior precisão.</p>
            <p>Mesmo com a presença da tecnologia, ferramentas tradicionais continuam sendo importantes para acabamento, montagem e personalização das peças.</p>
            <p>A combinação entre técnicas tradicionais e fabricação digital cria novas possibilidades para oficinas, estudantes e profissionais da área.</p>
        `
    },

    {
        id: 4,
        titulo: "Corte a laser permite criar projetos detalhados em diferentes materiais",
        categoria: "Corte a Laser",
        autor: "Equipe FabTech",
        data: "19/09/2026",
        imagem: "../img/corte-laser.jpg",
        alt: "Máquina de corte a laser trabalhando em uma placa",
        resumo: "O corte a laser facilita a produção de protótipos, peças decorativas e componentes para projetos maker.",
        conteudo: `
            <p>O corte a laser é uma tecnologia utilizada em diversos projetos de fabricação digital por permitir cortes e gravações com grande nível de detalhamento.</p>
            <p>Materiais como madeira, acrílico e outros substratos podem ser trabalhados de acordo com as características do equipamento utilizado.</p>
            <p>No ambiente maker, a tecnologia é utilizada para criar protótipos, peças decorativas, caixas, placas e componentes para diferentes projetos.</p>
            <p>A utilização de arquivos digitais também facilita a repetição de peças e a realização de alterações antes da fabricação.</p>
        `
    },

    {
        id: 5,
        titulo: "Projetos maker exploram novas possibilidades com corte a laser",
        categoria: "Corte a Laser",
        autor: "Equipe FabTech",
        data: "17/09/2026",
        imagem: "../img/corte-laser-2.jpg",
        alt: "Peça de madeira sendo cortada a laser",
        resumo: "A tecnologia vem sendo utilizada em projetos de pequena escala que combinam criatividade, design e fabricação digital.",
        conteudo: `
            <p>Projetos maker utilizam o corte a laser para transformar desenhos digitais em objetos físicos com rapidez e precisão.</p>
            <p>A tecnologia pode ser utilizada em projetos educacionais, peças decorativas, protótipos e estruturas desenvolvidas a partir de modelos digitais.</p>
            <p>Uma característica importante é a possibilidade de testar diferentes formas e dimensões sem precisar refazer todo o processo de planejamento.</p>
            <p>Essa flexibilidade aproxima design, criatividade e fabricação digital em diferentes tipos de projeto.</p>
        `
    },

    {
        id: 6,
        titulo: "Eletrônica continua sendo uma das principais portas para projetos maker",
        categoria: "Eletrônica",
        autor: "Equipe FabTech",
        data: "15/09/2026",
        imagem: "../img/eletronica.jpg",
        alt: "Componentes eletrônicos sobre uma bancada",
        resumo: "Sensores, microcontroladores e componentes eletrônicos estão presentes em uma grande variedade de projetos.",
        conteudo: `
            <p>A eletrônica está presente em grande parte dos projetos desenvolvidos no universo maker.</p>
            <p>Componentes como resistores, LEDs, sensores, motores e microcontroladores permitem criar sistemas capazes de receber informações e executar ações.</p>
            <p>O aprendizado da eletrônica também ajuda estudantes a compreender conceitos relacionados a circuitos, energia e automação.</p>
            <p>Com ferramentas acessíveis e plataformas de prototipagem, projetos eletrônicos podem ser desenvolvidos de forma gradual e experimental.</p>
        `
    },

    {
        id: 7,
        titulo: "Arduino facilita a criação de protótipos e projetos interativos",
        categoria: "Arduino",
        autor: "Equipe FabTech",
        data: "13/09/2026",
        imagem: "../img/arduino.jpg",
        alt: "Placa Arduino conectada a componentes eletrônicos",
        resumo: "A plataforma continua sendo utilizada para ensinar programação, eletrônica e desenvolvimento de protótipos.",
        conteudo: `
            <p>Plataformas baseadas em Arduino são utilizadas em projetos que combinam programação, eletrônica e automação.</p>
            <p>Uma placa pode ser conectada a sensores, LEDs, motores e outros componentes para criar sistemas interativos.</p>
            <p>Por utilizar uma estrutura relativamente simples, a plataforma é bastante adequada para atividades educacionais e protótipos.</p>
            <p>Projetos com Arduino também ajudam a desenvolver conhecimentos que podem ser aplicados posteriormente em sistemas mais complexos.</p>
        `
    },

    {
        id: 8,
        titulo: "Programação está cada vez mais presente nos projetos maker",
        categoria: "Programação",
        autor: "Equipe FabTech",
        data: "11/09/2026",
        imagem: "../img/programacao.jpg",
        alt: "Código de programação exibido em um computador",
        resumo: "Conhecimentos de programação permitem transformar projetos eletrônicos em sistemas cada vez mais interativos.",
        conteudo: `
            <p>A programação é uma ferramenta importante para transformar componentes eletrônicos e dispositivos físicos em sistemas interativos.</p>
            <p>Por meio do código, é possível controlar sensores, motores, iluminação, telas e diferentes tipos de automação.</p>
            <p>O desenvolvimento de projetos maker também pode contribuir para o aprendizado de lógica de programação e resolução de problemas.</p>
            <p>Com linguagens e plataformas acessíveis, estudantes conseguem criar aplicações que conectam software e hardware.</p>
        `
    },

    {
        id: 9,
        titulo: "Inteligência artificial começa a fazer parte do cotidiano maker",
        categoria: "Inteligência Artificial",
        autor: "Equipe FabTech",
        data: "09/09/2026",
        imagem: "../img/inteligencia-artificial.jpg",
        alt: "Representação de inteligência artificial em uma tela",
        resumo: "Ferramentas de inteligência artificial estão sendo utilizadas para auxiliar pesquisas, programação, criação e prototipagem.",
        conteudo: `
            <p>A inteligência artificial vem sendo utilizada em diferentes etapas de desenvolvimento de projetos tecnológicos.</p>
            <p>Ferramentas baseadas em IA podem auxiliar na pesquisa de informações, geração de ideias, organização de projetos e desenvolvimento de código.</p>
            <p>No ambiente maker, essas ferramentas podem servir como apoio durante o planejamento e a prototipagem de soluções.</p>
            <p>Mesmo com essas possibilidades, os resultados precisam ser analisados e testados para verificar se realmente atendem aos objetivos do projeto.</p>
        `
    },

    {
        id: 10,
        titulo: "Robótica combina programação, eletrônica e fabricação digital",
        categoria: "Robótica",
        autor: "Equipe FabTech",
        data: "07/09/2026",
        imagem: "../img/robotica.jpg",
        alt: "Robô desenvolvido em uma bancada de projetos",
        resumo: "Projetos de robótica reúnem diferentes áreas da tecnologia em sistemas capazes de interagir com o ambiente.",
        conteudo: `
            <p>A robótica combina diferentes áreas da tecnologia para desenvolver máquinas capazes de executar tarefas e interagir com o ambiente.</p>
            <p>Projetos de robótica normalmente envolvem programação, eletrônica, sensores, motores e estruturas mecânicas.</p>
            <p>A fabricação digital também pode contribuir para a criação de peças e estruturas personalizadas para robôs e protótipos.</p>
            <p>Por reunir diferentes conhecimentos, a robótica é uma área bastante utilizada em projetos educacionais e experimentais.</p>
        `
    }

];


let noticiasExibidas = 6;
let categoriaAtual = "Todas";
let buscaAtual = "";


/* =================     ELEMENTOS     ==================== */

const gradeNoticias = document.querySelector("#grade-noticias");
const destaque = document.querySelector("#destaque");
const secundarias = document.querySelector("#secundarias");
const campoBusca = document.querySelector("#campo-busca");
const formBusca = document.querySelector("#form-busca");
const botoesFiltro = document.querySelectorAll(".filtro");
const botaoCarregar = document.querySelector("#carregar");
const botaoTema = document.querySelector("#btn-tema");
const relogio = document.querySelector("#relogio");
const formNewsletter = document.querySelector("#form-newsletter");
const mensagem = document.querySelector("#mensagem");


/* =================     ABRIR NOTÍCIA     ==================== */

function abrirNoticia(id) {

    window.location.href = `noticia.html?id=${id}`;

}


function prepararCliqueNoticia(elemento) {

    if (!elemento) {
        return;
    }

    elemento.addEventListener("click", () => {

        const id = elemento.dataset.id;

        if (id) {
            abrirNoticia(id);
        }

    });


    elemento.addEventListener("keydown", evento => {

        if (evento.key === "Enter" || evento.key === " ") {

            evento.preventDefault();

            const id = elemento.dataset.id;

            if (id) {
                abrirNoticia(id);
            }

        }

    });

}


/* =================     CRIAR CARD     ==================== */

function criarCard(noticia) {

    return `
        <article class="card" data-id="${noticia.id}" tabindex="0" role="link">
            <img src="${noticia.imagem}" alt="${noticia.alt}">
            <div class="card-info">
                <span class="categoria">${noticia.categoria}</span>
                <h3>${noticia.titulo}</h3>
                <p>${noticia.resumo}</p>
                <div class="card-meta">
                    <span>${noticia.autor}</span>
                    <time>${noticia.data}</time>
                </div>
            </div>
        </article>
    `;

}


/* =================     CRIAR DESTAQUE     ==================== */

function criarDestaque() {

    if (!destaque) {
        return;
    }


    const noticia = noticias[0];

    destaque.dataset.id = noticia.id;
    destaque.setAttribute("tabindex", "0");
    destaque.setAttribute("role", "link");

    destaque.innerHTML = `
        <img src="${noticia.imagem}" alt="${noticia.alt}">
        <div class="destaque-info">
            <span class="categoria">${noticia.categoria}</span>
            <h2>${noticia.titulo}</h2>
            <p>${noticia.resumo}</p>
            <div class="card-meta">
                <span>${noticia.autor}</span>
                <time>${noticia.data}</time>
            </div>
        </div>
    `;

    prepararCliqueNoticia(destaque);

}


/* =================     NOTÍCIAS SECUNDÁRIAS     ==================== */

function criarSecundarias() {

    if (!secundarias) {
        return;
    }


    const noticiasSecundarias = noticias.slice(1, 4);

    secundarias.innerHTML = noticiasSecundarias.map(noticia => `
        <article class="secundaria" data-id="${noticia.id}" tabindex="0" role="link">
            <img src="${noticia.imagem}" alt="${noticia.alt}">
            <div>
                <span class="categoria">${noticia.categoria}</span>
                <h3>${noticia.titulo}</h3>
                <span class="data">${noticia.data}</span>
            </div>
        </article>
    `).join("");


    document.querySelectorAll(".secundaria").forEach(item => {
        prepararCliqueNoticia(item);
    });

}


/* =================     FILTRAR NOTÍCIAS     ==================== */

function filtrarNoticias() {

    return noticias.filter(noticia => {

        const mesmaCategoria =
            categoriaAtual === "Todas" ||
            noticia.categoria === categoriaAtual;

        const texto = `
            ${noticia.titulo}
            ${noticia.resumo}
            ${noticia.categoria}
            ${noticia.conteudo}
        `.toLowerCase();

        const mesmaBusca =
            texto.includes(buscaAtual.toLowerCase());

        return mesmaCategoria && mesmaBusca;

    });

}


/* =================     MOSTRAR NOTÍCIAS     ==================== */

function mostrarNoticias() {

    if (!gradeNoticias) {
        return;
    }


    const resultado = filtrarNoticias();
    const noticiasParaMostrar = resultado.slice(0, noticiasExibidas);

    gradeNoticias.innerHTML = noticiasParaMostrar
        .map(noticia => criarCard(noticia))
        .join("");


    document.querySelectorAll(".card").forEach(card => {
        prepararCliqueNoticia(card);
    });


    atualizarBotaoCarregar(resultado.length);

}


/* =================     BOTÃO CARREGAR MAIS     ==================== */

function atualizarBotaoCarregar(total) {

    if (!botaoCarregar) {
        return;
    }


    if (noticiasExibidas >= total) {

        botaoCarregar.style.display = "none";

    } else {

        botaoCarregar.style.display = "block";

    }

}


if (botaoCarregar) {

    botaoCarregar.addEventListener("click", () => {

        noticiasExibidas += 3;

        mostrarNoticias();

    });

}


/* =================     FILTROS     ==================== */

botoesFiltro.forEach(botao => {

    botao.addEventListener("click", () => {

        categoriaAtual = botao.dataset.filtro;
        noticiasExibidas = 6;

        botoesFiltro.forEach(item => {
            item.classList.remove("ativo");
        });

        botao.classList.add("ativo");

        mostrarNoticias();

    });

});


/* =================     BUSCA     ==================== */

if (formBusca) {

    formBusca.addEventListener("submit", evento => {

        evento.preventDefault();

        buscaAtual = campoBusca.value.trim();
        noticiasExibidas = 6;

        mostrarNoticias();


        const ultimas = document.querySelector("#ultimas");

        if (ultimas) {

            ultimas.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

}


if (campoBusca) {

    campoBusca.addEventListener("input", () => {

        buscaAtual = campoBusca.value.trim();
        noticiasExibidas = 6;

        mostrarNoticias();

    });

}


/* =================     MENU POR CATEGORIA     ==================== */

document.querySelectorAll("[data-categoria]").forEach(item => {

    item.addEventListener("click", () => {

        categoriaAtual = item.dataset.categoria;
        noticiasExibidas = 6;

        botoesFiltro.forEach(botao => {

            botao.classList.toggle(
                "ativo",
                botao.dataset.filtro === categoriaAtual
            );

        });

        mostrarNoticias();

    });

});


/* =================     RELÓGIO     ==================== */

function atualizarRelogio() {

    if (!relogio) {
        return;
    }

    const agora = new Date();

    const data = agora.toLocaleDateString("pt-BR");
    const hora = agora.toLocaleTimeString("pt-BR");

    relogio.textContent = `${data} - ${hora}`;
    relogio.dateTime = agora.toISOString();

}

if (relogio) {

    atualizarRelogio();

    setInterval(atualizarRelogio, 1000);

}

/* =================     TEMA     ==================== */

function aplicarTema(tema) {

    if (!botaoTema) {
        return;
    }


    document.body.classList.toggle(
        "escuro",
        tema === "escuro"
    );


    botaoTema.textContent =
        tema === "escuro" ? "☀️" : "🌙";


    botaoTema.setAttribute(
        "aria-label",
        tema === "escuro"
            ? "Ativar tema claro"
            : "Ativar tema escuro"
    );

}


/* =================     LOCAL STORAGE     ==================== */

function carregarTema() {

    let tema = "claro";

    try {

        tema = localStorage.getItem("tema") || "claro";

    } catch (erro) {

        tema = "claro";

    }


    aplicarTema(tema);

}


if (botaoTema) {

    botaoTema.addEventListener("click", () => {

        const temaAtual = document.body.classList.contains("escuro")
            ? "escuro"
            : "claro";

        const novoTema =
            temaAtual === "escuro" ? "claro" : "escuro";


        try {

            localStorage.setItem("tema", novoTema);

        } catch (erro) {

            // Continua funcionando mesmo sem localStorage.

        }


        aplicarTema(novoTema);

    });

}


carregarTema();

