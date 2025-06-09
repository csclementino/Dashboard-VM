document.addEventListener("DOMContentLoaded", function () {
  carregarOverview();
});

function carregarOverview() {
  const idCco = sessionStorage.getItem('id_cco');
  if (!idCco) return;
  fetch(`https://viamobility-backend-dzb8a3hterh6d2ce.brazilsouth-01.azurewebsites.net/api/admin/overview/line/${idCco}`) 
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

