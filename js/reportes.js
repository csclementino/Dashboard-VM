

// Voltar para a página inicial
function voltar() {
  window.location.href = "reportes.html";
}


document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop(); // ex: reportes.html
  const cardNavs = document.querySelectorAll(".card-nav");

  cardNavs.forEach(card => {
    const link = card.querySelector("a");
    if (link) {
      const linkPage = link.getAttribute("href");
      if (linkPage && linkPage !== "#") {
        if (
          (currentPage === "reportes.html" || currentPage === "detalhes.html") &&
          linkPage === "reportes.html"
        ) {
          card.classList.add("active");
        }
        else if (linkPage === currentPage) {
          card.classList.add("active");
        }
      }
    }
  });
});

const idCco = sessionStorage.getItem('id_cco');
console.log('id cco', idCco)
const nomeCco = sessionStorage.getItem('nome_cco');
console.log('nome cco', nomeCco)

// seta cores do tema
document.addEventListener('DOMContentLoaded', () => {
  if (!idCco) {
    // Redireciona para login se não houver ID
    window.location.href = 'login.html';
    return;
}
const coresPorId = {
    5: '#9870CB',
    4: '#DBA217',
    8: '#8B8E8E',
    9: '#009C97'
};
const corSelecionada = coresPorId[idCco];
if (corSelecionada) {
    document.documentElement.style.setProperty('--cor-dinamica', corSelecionada);
    localStorage.setItem('corDinamica', corSelecionada);
} else {
    console.warn("ID_CCO não reconhecido para cor dinâmica.");
}
   document.getElementById('ccoText').textContent = `CCO ${nomeCco}`;
});

// fazer logout
document.addEventListener('DOMContentLoaded', () => {
  const botaoSair = document.getElementById('btn-sair');
  if (botaoSair) {
    botaoSair.addEventListener('click', (e) => {
      e.preventDefault(); 
      sessionStorage.clear();
      window.location.href = 'index.html';
    });
  }
});