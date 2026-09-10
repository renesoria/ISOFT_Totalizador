import Totalizador from "./totalizador.js";

const cantidad = document.querySelector("#cantidad");
const precio = document.querySelector("#precio");
const estado = document.querySelector("#estado");
const categoria = document.querySelector("#categoria");
const peso = document.querySelector("#peso");
const cliente = document.querySelector("#cliente");
const form = document.querySelector("#totalizar-form");
const div = document.querySelector("#resultado-div");
const cancelarButton = document.querySelector("#cancelar-button");
const confirmarButton = document.querySelector("#confirmar-button");

const totalizador = new Totalizador();

const estadosDisponibles = totalizador.obtenerEstadosDisponibles();

estadosDisponibles.forEach((codigoEstado) => {
  const opcion = document.createElement("option");

  opcion.value = codigoEstado;
  opcion.textContent = codigoEstado;

  estado.appendChild(opcion);
});

const categoriasDisponibles = totalizador.obtenerCategoriasDisponibles();

categoriasDisponibles.forEach((categoriaProducto) => {
  const opcion = document.createElement("option");

  opcion.value = categoriaProducto;
  opcion.textContent = categoriaProducto;

  categoria.appendChild(opcion);
});

const tiposClienteDisponibles = totalizador.obtenerTiposClienteDisponibles();

tiposClienteDisponibles.forEach((tipoCliente) => {
  const opcion = document.createElement("option");

  opcion.value = tipoCliente;
  opcion.textContent = tipoCliente;

  cliente.appendChild(opcion);
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

confirmarButton.addEventListener("click", () => {
  const estadoCompra = totalizador.confirmarCompra();

  if (estadoCompra === "confirmada") {
    div.innerHTML += "<p>Compra confirmada</p>";
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidadItems = Number(cantidad.value);
  const precioIngresado = precio.value;
  const codigoEstado = estado.value;
  const categoriaProducto = categoria.value;
  const tipoCliente = cliente.value;

  if (!totalizador.validarCantidad(cantidadItems)) {
    div.innerHTML = "<p>Error: cantidad invalida</p>";
    return;
  }

  if (!totalizador.validarPrecio(precioIngresado)) {
    div.innerHTML = "<p>Error: precio invalido</p>";
    return;
  }

  if (!totalizador.validarPeso(peso.value)) {
    div.innerHTML = "<p>Error: peso invalido</p>";
    return;
  }

  const precioItem = Number(precioIngresado);
  const pesoVolumetrico = Number(peso.value);

  const precioNeto = totalizador.calcularPrecioNeto(
    cantidadItems,
    precioItem
  );

  const descuento = totalizador.calcularDescuento(
    precioNeto,
    categoriaProducto
  );

  const porcentajeDescuento =
    totalizador.obtenerPorcentajeDescuento(
      precioNeto,
      categoriaProducto
    );

  const precioConDescuento = precioNeto - descuento;
  const descuentoFijo = totalizador.calcularDescuentoFijo(
    precioConDescuento,
    categoriaProducto,
    tipoCliente
  );
  const descuentoTotal = descuento + descuentoFijo;
  const precioConTodosLosDescuentos = precioNeto - descuentoTotal;

  const porcentajeImpuesto =
    totalizador.obtenerPorcentajeImpuesto(
      codigoEstado,
      categoriaProducto
    );

  const impuesto = totalizador.calcularImpuesto(
    precioConTodosLosDescuentos,
    codigoEstado,
    categoriaProducto
  );

  const costoEnvio =
    totalizador.calcularCostoEnvio(pesoVolumetrico, cantidadItems) ?? 0;
  const descuentoEnvio = totalizador.calcularDescuentoEnvio(
    costoEnvio,
    tipoCliente
  );
  const envioFinal = costoEnvio - descuentoEnvio;

  const precioTotal = totalizador.calcularPrecioTotal(
    precioNeto,
    impuesto,
    descuentoTotal,
    envioFinal
  );

  div.innerHTML =
    "<p>Categoría: " + categoriaProducto + "</p>" +
    "<p>Tipo de cliente: " + tipoCliente + "</p>" +
    "<p>Precio neto: $" + formatearMonto(precioNeto) + "</p>" +
    "<p>Descuento (" + porcentajeDescuento + "%): $" +
    formatearMonto(descuento) + "</p>" +
    "<p>Descuento fijo: $" + formatearMonto(descuentoFijo) + "</p>" +
    "<p>Impuesto para " + codigoEstado + " (" +
    porcentajeImpuesto + "%): $" +
    formatearMonto(impuesto) + "</p>" +
    "<p>Envío: $" + formatearMonto(costoEnvio) + "</p>" +
    "<p>Descuento de envío: $" + formatearMonto(descuentoEnvio) + "</p>" +
    "<p>Envío final: $" + formatearMonto(envioFinal) + "</p>" +
    "<p>Precio total: $" + formatearMonto(precioTotal) + "</p>";
});
