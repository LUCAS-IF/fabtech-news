# FabTech News

Projeto acadêmico de desenvolvimento web com foco em tecnologia, fabricação digital, eletrônica, programação e inovação.

## Sobre o projeto

O **FabTech News** é um portal de notícias desenvolvido para apresentar conteúdos relacionados ao universo maker e à tecnologia de forma simples, organizada e responsiva.

O projeto foi construído com **HTML, CSS e JavaScript**, sem dependência de frameworks ou bibliotecas externas, permitindo que a aplicação seja executada localmente e utilizada mesmo sem conexão com a internet.

## Objetivo

O objetivo do projeto é desenvolver uma interface de notícias moderna e funcional, aplicando conceitos de desenvolvimento web, organização de conteúdo, interação com JavaScript, armazenamento no navegador, responsividade e acessibilidade.

## Tecnologias utilizadas

- **HTML5** — estrutura semântica das páginas.
- **CSS3** — identidade visual, layout, responsividade e temas.
- **JavaScript (ECMAScript)** — funcionalidades e interação.
- **Web Storage / localStorage** — armazenamento da preferência de tema.
- **Git** — controle de versão do projeto.

## Funcionalidades

### Notícias

O projeto possui 10 notícias distribuídas nas seguintes categorias:

- Impressão 3D
- Marcenaria
- Corte a Laser
- Eletrônica
- Arduino
- Programação
- Inteligência Artificial
- Robótica

As notícias são carregadas dinamicamente pelo JavaScript.

### Destaques

A página inicial possui:

- uma notícia principal em destaque;
- notícias secundárias;
- grade com as demais notícias.

### Filtro por categoria

É possível filtrar as notícias por categoria utilizando os botões da área de notícias, o menu superior ou a lista de categorias da barra lateral.

### Busca

A busca permite localizar notícias pelo texto do:

- título;
- resumo;
- categoria;
- conteúdo da notícia.

A pesquisa é atualizada conforme o usuário digita.

### Carregar mais

As notícias são exibidas inicialmente em quantidade limitada. O botão **Carregar mais** permite mostrar outras notícias progressivamente.

### Página individual

Cada notícia pode ser aberta em uma página própria utilizando um parâmetro na URL.

Exemplo:

```text
html/noticia.html?id=1

## Design

### Paleta de cores

A identidade visual utiliza uma paleta própria com tons claros, azul como cor principal e verde-água como cor de destaque.

- Fundo: `#f5f7fa`
- Fundo dos cards: `#ffffff`
- Fundo secundário: `#eef2f6`
- Texto principal: `#18212f`
- Texto secundário: `#637083`
- Bordas: `#dce2e9`
- Cor principal: `#0f6fff`
- Cor principal escura: `#0958cc`
- Cor de destaque: `#15b8a6`

### Tipografia

- **Newsreader** — utilizada no logotipo e nos títulos das notícias.
- **Inter** — utilizada no corpo dos textos, navegação, botões e informações secundárias.

### Fontes das imagens

As imagens utilizadas no projeto estão armazenadas localmente na pasta `img/`.
