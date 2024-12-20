// Variables necesarias
const historicoCostos = []; // Array para almacenar resultados de simulaciones

// Función para iniciar la simulación
function iniciarSimulacion() {
    // Entradas mediante prompt()
    const costoBase = parseFloat(prompt("Ingrese el costo base ($):"));
    const porcentajeIncremento = parseFloat(prompt("Ingrese el porcentaje de incremento (%):"));

    // Validar entradas
    if (isNaN(costoBase) || isNaN(porcentajeIncremento)) {
        alert("Por favor, ingrese valores numéricos válidos.");
        return;
    }

    // Crear un objeto para almacenar los datos de la simulación
    const simulacion = {
        costoBase,
        porcentajeIncremento,
        incremento: calcularIncremento(costoBase, porcentajeIncremento),
        costoFinal: calcularCostoFinal(costoBase, porcentajeIncremento)
    };

    // Guardar el objeto en el array
    historicoCostos.push(simulacion);

    // Mostrar resultado al usuario
    alert(`El costo final es: $${simulacion.costoFinal.toFixed(2)}`);

    // Mostrar el historial en consola
    console.log("Histórico de simulaciones:");
    console.log(historicoCostos);

    // Método de búsqueda y filtrado
    const filtro = parseFloat(prompt("Filtrar simulaciones con costo final mayor a ($):"));
    if (!isNaN(filtro)) {
        const resultadosFiltrados = filtrarPorCostoFinal(filtro);
        console.log(`Simulaciones con costo final mayor a $${filtro}:`, resultadosFiltrados);
    }
}

// Funciones esenciales
function calcularIncremento(costoBase, porcentajeIncremento) {
    return (costoBase * porcentajeIncremento) / 100;
}

function calcularCostoFinal(costoBase, porcentajeIncremento) {
    const incremento = calcularIncremento(costoBase, porcentajeIncremento);
    return costoBase + incremento;
}

// Método de búsqueda y filtrado
function filtrarPorCostoFinal(valor) {
    return historicoCostos.filter(simulacion => simulacion.costoFinal > valor);
}
