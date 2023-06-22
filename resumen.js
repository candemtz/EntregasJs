document.addEventListener("DOMContentLoaded", () => {
  // Obtener los datos del resumen de la URL
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const gastosComensalesEncoded = urlParams.get("gastosComensales");

  // Decodificar la cadena y convertirla de nuevo a un objeto
  const gastosComensalesString = decodeURIComponent(gastosComensalesEncoded);
  const gastosComensales = JSON.parse(gastosComensalesString);

  // Función para mostrar el resumen de gastos y propinas
  function mostrarResumen(gastosComensales) {
    const resumenContainer = document.getElementById("resumen");
    resumenContainer.innerHTML = ""; // Limpiar el contenido previo del contenedor

    let totalGastos = 0;
    let totalPropinas = 0;

    for (const comensal of Object.keys(gastosComensales)) {
      const gastos = gastosComensales[comensal];
      const gasto = gastos.reduce((total, plato) => total + plato.precio, 0);
      const propina = gasto * 0.1;

      totalGastos += gasto;
      totalPropinas += propina;

      const comensalDiv = document.createElement("div");
      const tituloComensal = document.createElement("h3");
      tituloComensal.textContent = `Comensal: ${comensal}`;
      comensalDiv.appendChild(tituloComensal);

      const gastosComensal = document.createElement("p");
      gastosComensal.textContent = `Gastos: $${gasto.toFixed(2)}`;
      comensalDiv.appendChild(gastosComensal);

      const propinaComensal = document.createElement("p");
      propinaComensal.textContent = `Propina sugerida: $${propina.toFixed(2)}`;
      comensalDiv.appendChild(propinaComensal);

      resumenContainer.appendChild(comensalDiv);
    }

    const totalGastosTexto = document.createElement("p");
    totalGastosTexto.textContent = `Total de gastos: $${totalGastos.toFixed(2)}`;
    resumenContainer.appendChild(totalGastosTexto);

    const totalPropinasTexto = document.createElement("p");
    totalPropinasTexto.textContent = `Total de propinas sugeridas: $${totalPropinas.toFixed(2)}`;
    resumenContainer.appendChild(totalPropinasTexto);
  }

  // Mostrar el resumen
  mostrarResumen(gastosComensales);
});
  /*PROBAR PROBAR PROBAR */