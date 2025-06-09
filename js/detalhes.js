
document.addEventListener("DOMContentLoaded", () => {
  const reporteSelecionado = JSON.parse(localStorage.getItem("reporteSelecionado"));

  if (!reporteSelecionado || !reporteSelecionado.id_reporte) {
    console.error("Nenhum reporte selecionado ou ID inválido.");
    return;
  }

  console.log(reporteSelecionado);

  const id = reporteSelecionado.id_reporte;
  const endpoint = `https://viamobility-backend-dzb8a3hterh6d2ce.brazilsouth-01.azurewebsites.net/api/admin/reportes/${id}`;

  fetch(endpoint)
    .then(response => {
      if (!response.ok) throw new Error("Erro na requisição");
      return response.json();
    })
    .then(dados => {
        console.log("Resposta da API:", dados);
      document.getElementById("campo-tipo").textContent = dados.dado_reporte.tipo_reporte;
      document.getElementById("campo-linha").textContent = 'Linha ' + dados.dado_reporte.id_linha;
      document.getElementById("campo-estacao").textContent = dados.dado_reporte.id_estacao;
      document.getElementById("campo-data").textContent = dados.dado_reporte.data_ocorrencia;
      document.getElementById("campo-hora").textContent = dados.dado_reporte.hora_ocorrencia;
      document.getElementById("campo-descricao").textContent = dados.dado_reporte.descricao || "Sem descrição.";
      document.getElementById("campo-reportado").textContent = 'Reportado em: ' + dados.dado_reporte.data_criacao;
      document.getElementById("campo-id").textContent = 'Reporte #' + dados.dado_reporte.id_reporte;
    })
    .catch(error => {
      console.error("Erro ao buscar detalhes do reporte:", error);
    });
});


function marcarComoNaoAnalisado() {
  const reporteSelecionado = JSON.parse(localStorage.getItem("reporteSelecionado"));
  const id = reporteSelecionado.id_reporte;
  const endpoint = `http://127.0.0.1:8000/api/admin/reportes/analisar`;

  const dadosParaAtualizar = {
    id_reporte: id,
    analisado: "S"
  };

  fetch(endpoint, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(dadosParaAtualizar)
  })
    .then(response => {
      if (!response.ok) throw new Error("Erro ao atualizar o reporte.");
      return response.json();
    })
    .then(() => {
      removerReporteDoCache()
      window.location.href = "reportes.html";
        
    })
    .catch(error => {
      console.error("Erro ao atualizar reporte:", error);
      alert("Erro ao tentar atualizar o reporte.");
    });
}

function removerReporteDoCache() {
  const reporteSelecionado = JSON.parse(localStorage.getItem("reporteSelecionado"));
  const cache = JSON.parse(sessionStorage.getItem("reportesCache"));

  if (!reporteSelecionado || !cache || !Array.isArray(cache.dados_reportes)) {
    console.warn("Nada para remover do cache.");
    return;
  }
  const novosReportes = cache.dados_reportes.filter(
    reporte => reporte.id_reporte !== reporteSelecionado.id_reporte
  );
  sessionStorage.setItem("reportesCache", JSON.stringify({ dados_reportes: novosReportes }));
  localStorage.removeItem("reporteSelecionado");
  window.location.href = "reportes.html";
}
