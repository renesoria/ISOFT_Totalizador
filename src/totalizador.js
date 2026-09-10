class Totalizador {
  calcularPrecioNeto(cantidad, precio) {
    return cantidad * precio;
  }

  calcularImpuesto(precioNeto, estado) {
  if (estado === "CA") {
    return precioNeto * 0.0825;
  }

  if (estado === "AL") {
    return precioNeto * 0.04;
  }

  if (estado === "NV") {
    return precioNeto * 0.08;
  }
  if (estado === "UT") {
  return precioNeto * 0.0665;
}
}

  calcularPrecioTotal(precioNeto, impuesto) {
    return precioNeto + impuesto;
  }
}

export default Totalizador;