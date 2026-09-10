import Totalizador from "./totalizador.js";

const cantidad = document.querySelector("#cantidad");
const precio = document.querySelector("#precio");
const estado = document.querySelector("#estado");
const form = document.querySelector("#totalizar-form");
const div = document.querySelector("#resultado-div");
const cancelarButton = document.querySelector("#cancelar-button");

const totalizador = new Totalizador();

const estadosDisponibles = totalizador.obtenerEstadosDisponibles();

estadosDisponibles.forEach((codigoEstado) => {
  const opcion = document.createElement("option");

  opcion.value = codigoEstado;
  opcion.textContent = codigoEstado;

  estado.appendChild(opcion);
});

function formatearMonto(valor) {
  return Number(valor.toFixed(2));
}
cancelarButton.addEventListener("click", () => {
  const estadoCompra = totalizador.cancelarCompra();

  if (estadoCompra === "cancelada") {
    form.reset();
    div.innerHTML = "<p>Compra cancelada</p>";
  }
});
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidadItems = Number(cantidad.value);
  const precioItem = Number(precio.value);
  const codigoEstado = estado.value;
  if (!totalizador.validarCantidad(cantidadItems)) {
  div.innerHTML = "<p>Error: cantidad invalida</p>";
  return;
}
if (!totalizador.validarPrecio(precioItem)) {
  div.innerHTML = "<p>Error: precio invalido</p>";
  return;
}

  const precioNeto = totalizador.calcularPrecioNeto(
    cantidadItems,
    precioItem
  );

  const descuento = totalizador.calcularDescuento(precioNeto);

  const porcentajeDescuento =
    totalizador.obtenerPorcentajeDescuento(precioNeto);

  const precioConDescuento = precioNeto - descuento;

  const porcentajeImpuesto =
    totalizador.obtenerPorcentajeImpuesto(codigoEstado);

  const impuesto = totalizador.calcularImpuesto(
    precioConDescuento,
    codigoEstado
  );

  const precioTotal = totalizador.calcularPrecioTotal(
    precioNeto,
    impuesto,
    descuento
  );

  div.innerHTML =
    "<p>Precio neto: $" + formatearMonto(precioNeto) + "</p>" +
    "<p>Descuento (" + porcentajeDescuento + "%): $" +
    formatearMonto(descuento) + "</p>" +
    "<p>Impuesto para " + codigoEstado + " (" +
    porcentajeImpuesto + "%): $" +
    formatearMonto(impuesto) + "</p>" +
    "<p>Precio total: $" + formatearMonto(precioTotal) + "</p>";
});