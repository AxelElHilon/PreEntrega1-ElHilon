function calcularCosto() {
    // Obtener los valores de los inputs
    const costoBase = parseFloat(document.getElementById("costoBase").value);
    const porcentajeIncremento = parseFloat(document.getElementById("porcentajeIncremento").value);

    // Calcular el incremento
    const incremento = (costoBase * porcentajeIncremento) / 100;

    // Calcular el costo final
    const costoFinal = costoBase + incremento;

    // Mostrar el resultado
    document.getElementById("resultado").innerText = `El costo final es: $${costoFinal.toFixed(2)}`;
}