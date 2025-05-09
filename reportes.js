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
  window.location.href = "index.html";
}

// Executa automaticamente nas páginas corretas
carregarReportes();
mostrarDetalhes();



