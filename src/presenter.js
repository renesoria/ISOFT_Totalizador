import Totalizador from "./totalizador.js";

const cantidad = document.querySelector("#cantidad");
const precio = document.querySelector("#precio");
const estado = document.querySelector("#estado");
const form = document.querySelector("#totalizar-form");
const div = document.querySelector("#resultado-div");

const totalizador = new Totalizador();

function formatearMonto(valor) {
  return Number(valor.toFixed(2));
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidadItems = Number(cantidad.value);
  const precioItem = Number(precio.value);
  const codigoEstado = estado.value.toUpperCase();

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