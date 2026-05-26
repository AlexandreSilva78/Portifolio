const botaoCurriculo = document.getElementById("curriculo");
const botaoSobre = document.getElementById("sobre");
const botaoProjetos = document.getElementById("projetos");
const botaoCertificados = document.getElementById("certificados");

const respostaCurriculo = document.querySelector(".resposta-curriculo");
const respostaSobre = document.querySelector(".resposta-sobre");
const containerProjetos = document.querySelector(".container-projetos");
const containerCertificados = document.querySelector(".container-certificados");


// ==========================================
// ESCONDE TODAS AS SEÇÕES
// ==========================================
function esconderTudo() {
    respostaCurriculo.style.display = "none";
    respostaSobre.style.display = "none";
    containerProjetos.style.display = "none";
    containerCertificados.style.display = "none";
}


// ==========================================
// ESTADO INICIAL
// ==========================================
esconderTudo();


// ==========================================
// FUNÇÃO GENÉRICA
// ==========================================
function toggleSecao(secao, tipoDisplay = "block") {

    // verifica se a seção já está aberta
    const secaoAberta = secao.style.display === tipoDisplay;

    // fecha tudo
    esconderTudo();

    // se NÃO estava aberta, abre
    if (!secaoAberta) {
        secao.style.display = tipoDisplay;
    }
}


// ==========================================
// BOTÃO SOBRE
// ==========================================
botaoSobre.addEventListener("click", () => {
    toggleSecao(respostaSobre);
});


// ==========================================
// BOTÃO PROJETOS
// ==========================================
botaoProjetos.addEventListener("click", () => {
    toggleSecao(containerProjetos);
});


// ==========================================
// BOTÃO CURRÍCULO
// ==========================================
botaoCurriculo.addEventListener("click", () => {
    toggleSecao(respostaCurriculo);
});


// ==========================================
// BOTÃO CERTIFICADOS
// ==========================================
botaoCertificados.addEventListener("click", () => {
    toggleSecao(containerCertificados, "grid");
});

