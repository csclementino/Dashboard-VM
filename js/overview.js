document.addEventListener("DOMContentLoaded", function () {
  carregarOverview();
});

function carregarOverview() {
  const idCco = sessionStorage.getItem('id_cco');
  if (!idCco) return;
  fetch(`http://127.0.0.1:8000/api/admin/overview/line/${idCco}`) 
    .then(response => response.json())
    .then(dados => {
      document.getElementById("campo_solucinados").textContent = dados.overview.solucionados;
      document.getElementById("campo_reporte").textContent = dados.overview.mais_reportado;
      document.getElementById("campo_estacao").textContent = dados.overview.estacao;
      document.getElementById("campo_recentes").textContent = dados.overview.recentes;
    })
    .catch(error => {
      console.error("Erro ao carregar os dados da API:", error);
    });
}

