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