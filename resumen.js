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
      let totalGastos = 0;
      let totalPropinas = 0;
  
      for (const comensal in gastosComensales) {
        if (Array.isArray(gastosComensales[comensal])) {
          const gasto = gastosComensales[comensal].reduce(
            (total, plato) => total + plato.precio,
            0
          );
          const propina = gasto * 0.1;
  
          totalGastos += gasto;
          totalPropinas += propina;
  
          const tituloComensal = document.createElement("h3");
          tituloComensal.textContent = `Comensal: ${comensal}`;
          const tabla = document.createElement("table");
          const encabezado = document.createElement("tr");
          const encabezadoPlato = document.createElement("th");
          encabezadoPlato.textContent = "Plato";
          const encabezadoGasto = document.createElement("th");
          encabezadoGasto.textContent = "Gasto";
          const encabezadoPropina = document.createElement("th");
          encabezadoPropina.textContent = "Propina Sugerida";
          encabezado.appendChild(encabezadoPlato);
          encabezado.appendChild(encabezadoGasto);
          encabezado.appendChild(encabezadoPropina);
          tabla.appendChild(encabezado);
  
          gastosComensales[comensal].forEach((plato) => {
            const fila = document.createElement("tr");
            const celdaPlato = document.createElement("td");
            celdaPlato.textContent = plato.nombre;
            const celdaGasto = document.createElement("td");
            celdaGasto.textContent = plato.precio.toFixed(2);
            const celdaPropina = document.createElement("td");
            celdaPropina.textContent = (plato.precio * 0.1).toFixed(2);
            fila.appendChild(celdaPlato);
            fila.appendChild(celdaGasto);
            fila.appendChild(celdaPropina);
            tabla.appendChild(fila);
          });
  
          const totalGastosComensal = document.createElement("p");
          totalGastosComensal.textContent = `Total de gastos: $${gasto.toFixed(2)}`;
          const totalPropinaComensal = document.createElement("p");
          totalPropinaComensal.textContent = `Total de propina sugerida: $${propina.toFixed(2)}`;
  
          resumenContainer.appendChild(tituloComensal);
          resumenContainer.appendChild(tabla);
          resumenContainer.appendChild(totalGastosComensal);
          resumenContainer.appendChild(totalPropinaComensal);
        }
      }
  
      const totalGastosTexto = document.createElement("p");
      totalGastosTexto.textContent = `Total de gastos: $${totalGastos.toFixed(2)}`;
      const totalPropinasTexto = document.createElement("p");
      totalPropinasTexto.textContent = `Total de propinas sugeridas: $${totalPropinas.toFixed(2)}`;
  
      resumenContainer.innerHTML = "";
      resumenContainer.appendChild(totalGastosTexto);
      resumenContainer.appendChild(totalPropinasTexto);
    }
  
    // Mostrar el resumen
    mostrarResumen(gastosComensales);
  });
  

  /*PROBAR PROBAR PROBAR */