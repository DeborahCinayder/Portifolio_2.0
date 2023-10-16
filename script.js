const header = document.querySelector("header");
const logoHTML = document.querySelector("logo-html");
const logoJS = document.querySelector("logo-js");
const logoCSS = document.querySelector("logo-css");
const btnMobile = document.getElementById("btn-mobile");

window.addEventListener("scroll", diminuiHeader);

function diminuiHeader() {
    if (window.pageYOffset > 100 && header.classList.contains("max")) {
        header.classList.remove("max");
        header.classList.add("min");
        logoHTML.style.width = "60 px"
        logoJS.style.width = "70 px"
        logoCSS.style.width = "60 px"

    } else if (window.pageYOffset == 0 && header.classList.contains("min")) {
        header.classList.add("max");
        header.classList.remove("min");
        logoHTML.style.width = "40 px"
        logoJS.style.width = "50 px"
        logoCSS.style.width = "40 px"
    }
}



const imageDetails = [
    "HTML (Hypertext Markup Language) é uma linguagem de marcação usada para criar e estruturar conteúdo na web, incluindo texto, imagens e links.",
    "CSS (Cascading Style Sheets) é uma linguagem de estilo usada para controlar a aparência e o design de elementos em páginas da web, como cores, fontes, layouts e animações.",
    "JavaScript é uma linguagem de programação de alto nível amplamente usada para criar interatividade em páginas da web e aplicativos, permitindo a manipulação de elementos HTML, ações do usuário e comunicação com servidores.",
    "Bootstrap é um popular framework de código aberto para desenvolvimento web que fornece estilos, componentes e funcionalidades pré-projetadas para facilitar a criação de páginas e aplicativos responsivos e visualmente atraentes.",
    "jQuery é uma biblioteca JavaScript que simplifica a manipulação de documentos HTML, gerenciamento de eventos, animações e interações com o servidor, tornando o desenvolvimento web mais eficiente.",
    "React é uma biblioteca JavaScript para construção de interfaces de usuário, focada na criação de componentes reutilizáveis e no gerenciamento eficiente do estado da aplicação."

];

function openModal(photoId) {
    const modal = document.getElementById("modal");
    const modalDetails = document.getElementById("image-details");

    modalDetails.textContent = imageDetails[photoId - 1];
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

window.onclick = function (event) {
    const modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
