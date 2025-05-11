// Simulação de resposta de API
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
  
    function carregarReportes() {
      const container = document.getElementById("lista-reportes");
      container.innerHTML = ""; // Limpa o conteúdo anterior
  
      dadosDaAPI.forEach(reporte => {
        const linhaClasse = reporte.linha.includes("ESMERALDA") ? "esmeralda" : "diamante";
  
        const row = document.createElement("div");
        row.classList.add("row");
        row.innerHTML = `
          <div>${reporte.tipo}</div>
          <div><span class="linha ${linhaClasse}">${reporte.linha}</span></div>
          <div>${reporte.estacao}</div>
          <div>${reporte.data}</div>
        `;
        container.appendChild(row);
      });
    }
  
    // Carrega ao iniciar
    carregarReportes();




    function carregarReportes() {
    const container = document.getElementById("lista-reportes");
    if (!container) return;

    // Limpa o conteúdo existente
    container.innerHTML = "";

    // Fazendo a requisição à API
    fetch('URL_DA_SUA_API')  // Substitua 'URL_DA_SUA_API' pelo endpoint correto da sua API
        .then(response => response.json())
        .then(dadosDaAPI => {
            // Itera sobre os dados recebidos da API
            dadosDaAPI.forEach((reporte, index) => {
                const row = document.createElement("div");
                row.classList.add("row");
                row.innerHTML = `
                    <div>${reporte.tipo}</div>
                    <div><span class="linha">${reporte.linha}</span></div>
                    <div>${reporte.estacao}</div>
                    <div>${reporte.data}</div>
                `;

                // Ação ao clicar em um item da lista
                row.onclick = () => {
                    localStorage.setItem("reporteSelecionado", JSON.stringify(reporte));
                    window.location.href = "detalhes.html";
                };

                container.appendChild(row);
            });
        })
        .catch(error => {
            console.error("Erro ao carregar os dados da API:", error);
        });
}