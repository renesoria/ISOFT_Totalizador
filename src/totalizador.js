class Totalizador {
  calcularPrecioNeto(cantidad, precio) {
    return cantidad * precio;
  }

  calcularImpuesto(precioNeto, estado) {
    if (estado === "CA") {
      return precioNeto * 0.0825;
    }
  }
}

export default Totalizador;