// Dados simulados (como sua API retornaria)
const dadosDaAPI = [
  { tipo: "Vendedor Ilegal", linha: "9 ESMERALDA", estacao: "PAL", data: "06/05/2025 10:15" },
  { tipo: "Assédio", linha: "8 DIAMANTE", estacao: "OSA", data: "06/05/2025 10:10" },
  { tipo: "Racismo", linha: "8 DIAMANTE", estacao: "QTU", data: "06/05/2025 10:09" },
  { tipo: "Violência", linha: "9 ESMERALDA", estacao: "CEA", data: "06/05/2025 10:00" },
  { tipo: "Roubo", linha: "9 ESMERALDA", estacao: "OSA", data: "06/05/2025 09:50" },
  { tipo: "Vandalismo", linha: "8 DIAMANTE", estacao: "JPR", data: "06/05/2025 09:49" },
  { tipo: "Vandalismo", linha: "8 DIAMANTE", estacao: "JPR", data: "06/05/2025 09:49" },
  { tipo: "Vandalismo", linha: "8 DIAMANTE", estacao: "JPR", data: "06/05/2025 09:49" }
];

// Lista de reportes (em index.html)
function carregarReportes() {
  const container = document.getElementById("lista-reportes");
  if (!container) return;

  container.innerHTML = "";

  dadosDaAPI.forEach((reporte, index) => {
    const linhaClasse = reporte.linha.includes("ESMERALDA") ? "esmeralda" : "diamante";

    const row = document.createElement("div");
    row.classList.add("row");
    row.innerHTML = `
      <div>${reporte.tipo}</div>
      <div><span class="linha ${linhaClasse}">${reporte.linha}</span></div>
      <div>${reporte.estacao}</div>
      <div>${reporte.data}</div>
    `;

    row.onclick = () => {
      localStorage.setItem("reporteSelecionado", JSON.stringify(reporte));
      window.location.href = "detalhes.html";
    };
    container.appendChild(row);
  });
}

// Exibe os detalhes (em detalhes.html)
function mostrarDetalhes() {
  const container = document.getElementById("detalhes-reporte");
  if (!container) return;

  const reporte = JSON.parse(localStorage.getItem("reporteSelecionado"));
  if (!reporte) {
    container.innerHTML = "<p>Reporte não encontrado.</p>";
    return;
  }

  const linhaClasse = reporte.linha.includes("ESMERALDA") ? "esmeralda" : "diamante";

  container.innerHTML = `
    <p><strong>Tipo:</strong> ${reporte.tipo}</p>
    <p><strong>Linha:</strong> <span class="linha ${linhaClasse}">${reporte.linha}</span></p>
    <p><strong>Estação:</strong> ${reporte.estacao}</p>
    <p><strong>Data:</strong> ${reporte.data}</p>
  `;
}

// Voltar para a página inicial
function voltar() {
  window.location.href = "reportes.html";
}

// Executa automaticamente nas páginas corretas
carregarReportes();
mostrarDetalhes();

document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop(); // ex: reportes.html
  const cardNavs = document.querySelectorAll(".card-nav");

  cardNavs.forEach(card => {
    const link = card.querySelector("a");
    if (link) {
      const linkPage = link.getAttribute("href");

      // Garante que o link não está vazio ou só um "#"
      if (linkPage && linkPage !== "#" && linkPage === currentPage) {
        card.classList.add("active");
      }
    }
  });
});



const cores = ['#009C97', '#DBA217', '#9870CB']; // azul, vermelho, verde

// Recupera índice salvo ou usa 0 como padrão
let indiceCor = parseInt(localStorage.getItem('corIndex')) || 0;

// Aplica cor inicial ao carregar a página
document.documentElement.style.setProperty('--cor-dinamica', cores[indiceCor]);

function mudarCor() {
  indiceCor = (indiceCor + 1) % cores.length;
  document.documentElement.style.setProperty('--cor-dinamica', cores[indiceCor]);
  localStorage.setItem('corIndex', indiceCor); // Salva no localStorage
}