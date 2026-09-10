import { calcularPrecioNeto } from "./totalizador.js";

const cantidad = document.querySelector("#cantidad");
const precio = document.querySelector("#precio");
const form = document.querySelector("#totalizar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidadItems = Number(cantidad.value);
  const precioItem = Number(precio.value);

  const precioNeto = calcularPrecioNeto(cantidadItems, precioItem);

  div.innerHTML = "<p>Precio neto: $" + precioNeto + "</p>";
});