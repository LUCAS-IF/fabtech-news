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
        resumo: "Novas tecnologias de fabricação aditiva estão aumentando a velocidade e a precisão na produção de peças."
    },

    {
        id: 2,
        titulo: "Impressão 3D ganha espaço na criação de peças personalizadas",
        categoria: "Impressão 3D",
        autor: "Equipe FabTech",
        data: "23/09/2026",
        imagem: "../img/impressao-3d-2.jpg",
        alt: "Peças produzidas em uma impressora 3D",
        resumo: "A fabricação de peças personalizadas continua ampliando as possibilidades para projetos independentes e pequenos negócios."
    },

    {
        id: 3,
        titulo: "Marcenaria digital aproxima ferramentas tradicionais da tecnologia",
        categoria: "Marcenaria",
        autor: "Equipe FabTech",
        data: "21/09/2026",
        imagem: "../img/marcenaria.jpg",
        alt: "Pessoa trabalhando com madeira em uma oficina",
        resumo: "Máquinas digitais e ferramentas tradicionais estão sendo combinadas para criar projetos de marcenaria mais precisos."
    },

    {
        id: 4,
        titulo: "Corte a laser permite criar projetos detalhados em diferentes materiais",
        categoria: "Corte a Laser",
        autor: "Equipe FabTech",
        data: "19/09/2026",
        imagem: "../img/corte-laser.jpg",
        alt: "Máquina de corte a laser trabalhando em uma placa",
        resumo: "O corte a laser facilita a produção de protótipos, peças decorativas e componentes para projetos maker."
    },

    {
        id: 5,
        titulo: "Projetos maker exploram novas possibilidades com corte a laser",
        categoria: "Corte a Laser",
        autor: "Equipe FabTech",
        data: "17/09/2026",
        imagem: "../img/corte-laser-2.jpg",
        alt: "Peça de madeira sendo cortada a laser",
        resumo: "A tecnologia vem sendo utilizada em projetos de pequena escala que combinam criatividade, design e fabricação digital."
    },

    {
        id: 6,
        titulo: "Eletrônica continua sendo uma das principais portas para projetos maker",
        categoria: "Eletrônica",
        autor: "Equipe FabTech",
        data: "15/09/2026",
        imagem: "../img/eletronica.jpg",
        alt: "Componentes eletrônicos sobre uma bancada",
        resumo: "Sensores, microcontroladores e componentes eletrônicos estão presentes em uma grande variedade de projetos."
    },

    {
        id: 7,
        titulo: "Arduino facilita a criação de protótipos e projetos interativos",
        categoria: "Arduino",
        autor: "Equipe FabTech",
        data: "13/09/2026",
        imagem: "../img/arduino.jpg",
        alt: "Placa Arduino conectada a componentes eletrônicos",
        resumo: "A plataforma continua sendo utilizada para ensinar programação, eletrônica e desenvolvimento de protótipos."
    },

    {
        id: 8,
        titulo: "Programação está cada vez mais presente nos projetos maker",
        categoria: "Programação",
        autor: "Equipe FabTech",
        data: "11/09/2026",
        imagem: "../img/programacao.jpg",
        alt: "Código de programação exibido em um computador",
        resumo: "Conhecimentos de programação permitem transformar projetos eletrônicos em sistemas cada vez mais interativos."
    },

    {
        id: 9,
        titulo: "Inteligência artificial começa a fazer parte do cotidiano maker",
        categoria: "Inteligência Artificial",
        autor: "Equipe FabTech",
        data: "09/09/2026",
        imagem: "../img/inteligencia-artificial.jpg",
        alt: "Representação de inteligência artificial em uma tela",
        resumo: "Ferramentas de inteligência artificial estão sendo utilizadas para auxiliar pesquisas, programação, criação e prototipagem."
    },

    {
        id: 10,
        titulo: "Robótica combina programação, eletrônica e fabricação digital",
        categoria: "Robótica",
        autor: "Equipe FabTech",
        data: "07/09/2026",
        imagem: "../img/robotica.jpg",
        alt: "Robô desenvolvido em uma bancada de projetos",
        resumo: "Projetos de robótica reúnem diferentes áreas da tecnologia em sistemas capazes de interagir com o ambiente."
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


/* =================     CRIAR CARD     ==================== */

function criarCard(noticia) {

    return `
        <article class="card">
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

    const noticia = noticias[0];

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

}


/* =================     NOTÍCIAS SECUNDÁRIAS     ==================== */

function criarSecundarias() {

    const noticiasSecundarias = noticias.slice(1, 4);

    secundarias.innerHTML = noticiasSecundarias.map(noticia => `
        <article class="secundaria">
            <img src="${noticia.imagem}" alt="${noticia.alt}">
            <div>
                <span class="categoria">${noticia.categoria}</span>
                <h3>${noticia.titulo}</h3>
                <span class="data">${noticia.data}</span>
            </div>
        </article>
    `).join("");

}
