import Totalizador from "./totalizador.js";

const cantidad = document.querySelector("#cantidad");
const precio = document.querySelector("#precio");
const estado = document.querySelector("#estado");
const form = document.querySelector("#totalizar-form");
const div = document.querySelector("#resultado-div");

const totalizador = new Totalizador();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidadItems = Number(cantidad.value);
  const precioItem = Number(precio.value);
  const codigoEstado = estado.value.toUpperCase();

  const precioNeto = totalizador.calcularPrecioNeto(
    cantidadItems,
    precioItem
  );

  const impuesto = totalizador.calcularImpuesto(
    precioNeto,
    codigoEstado
  );

  div.innerHTML =
    "<p>Precio neto: $" + precioNeto + "</p>" +
    "<p>Impuesto para " + codigoEstado + ": $" + impuesto + "</p>";
});