const IMPUESTOS = {
  CA: 0.0825,
  AL: 0.04,
  NV: 0.08,
  UT: 0.0665,
  TX: 0.0625,
};

class Totalizador {
  calcularPrecioNeto(cantidad, precio) {
    return cantidad * precio;
  }

  calcularImpuesto(precioNeto, estado) {
    const tasaImpuesto = IMPUESTOS[estado];

    if (tasaImpuesto === undefined) {
      return undefined;
    }

    return precioNeto * tasaImpuesto;
  }

  calcularPrecioTotal(precioNeto, impuesto) {
    return precioNeto + impuesto;
  }
}

export default Totalizador;