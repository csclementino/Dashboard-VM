document.addEventListener("DOMContentLoaded", function () {
  carregarReportes();
});

function carregarReportes() {
  const container = document.getElementById("lista-reportes");
  const idCco = sessionStorage.getItem('id_cco');
  if (!container || !idCco) return;
  container.innerHTML = "";
    fetch(`http://127.0.0.1:8000/api/admin/historico/line/${idCco}`) 
        .then(response => response.json())
        .then(dadosDaAPI => {
            exibirReportes(dadosDaAPI);
        })
        .catch(error => {
            console.error("Erro ao carregar os dados da API:", error);
        });

}

function exibirReportes(dadosDaAPI) {
  const container = document.getElementById("lista-reportes");
  container.innerHTML = "";
  dadosDaAPI.dados_reportes.forEach((reporte) => {
    const row = document.createElement("div");
    row.classList.add("row");
    row.dataset.reporteId = reporte.id_reporte;
    row.innerHTML = `
        <div>${reporte.tipo_reporte}</div>
        <div><span class="linha">${reporte.id_linha + ' ' + reporte.nome_linha}</span></div>
        <div>${reporte.id_estacao}</div>
        <div>${reporte.data_criacao}</div>
    `;
    container.appendChild(row);
  });
}