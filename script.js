// obtener referencia a los elementos del DOM
const cantidad = document.getElementById("cantidad");
const deMoneda = document.getElementById("de-moneda");
const aMoneda = document.getElementById("a-moneda");
const convertirBtn = document.getElementById("convertir");
const resultado = document.getElementById("resultado");

// agregar un event listener al botón de convertir
convertirBtn.addEventListener("click", () => {
  // Obtener los valores seleccionados y la cantidad ingresada
  const amount = parseFloat(cantidad.value);
  const fromInput = deMoneda.value;
  const toInput = aMoneda.value;

  // realizar la conversión de moneda
  const resultadoM = convertirMoneda(amount, fromInput, toInput);

  // mostrar el resultado en el elemento del DOM
  resultado.textContent = `Resultado: ${resultadoM.toFixed(2)}`;
});

// función para realizar la conversión de moneda
function convertirMoneda(amount, fromInput, toInput) {
  let resultadoM;

  //   revisar la conversión utilizando la fórmula matemática
  if (fromInput === "USD" && toInput === "EUR") {
    resultadoM = amount * 0.92;
  } else if (fromInput === "EUR" && toInput === "USD") {
    resultadoM = amount * 1.09;
  } else if (fromInput === "USD" && toInput === "JPY") {
    resultadoM = amount * 142;
  } else if (fromInput === "JPY" && toInput === "USD") {
    resultadoM = amount * 0.01;
  } else if (fromInput === "EUR" && toInput === "JPY") {
    resultadoM = amount * 155;
  } else if (fromInput === "JPY" && toInput === "EUR") {
    resultadoM = amount * 0.01;
  } else {
    resultadoM = amount; // No se realiza la conversión
  }

  return resultadoM;
}
