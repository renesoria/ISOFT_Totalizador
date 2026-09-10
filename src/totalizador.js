const IMPUESTOS = {
  CA: 0.0825,
  AL: 0.04,
  NV: 0.08,
  UT: 0.0665,
  TX: 0.0625,
};

const DESCUENTOS = [
  { minimo: 30000, tasa: 0.15 },
  { minimo: 10000, tasa: 0.10 },
  { minimo: 7000, tasa: 0.07 },
  { minimo: 3000, tasa: 0.05 },
  { minimo: 1000, tasa: 0.03 },
];

class Totalizador {
  calcularPrecioNeto(cantidad, precio) {
    return cantidad * precio;
  }

  calcularImpuesto(precioNeto, estado) {
    const porcentajeImpuesto = this.obtenerPorcentajeImpuesto(estado);

    if (porcentajeImpuesto === undefined) {
      return undefined;
    }

    return precioNeto * (porcentajeImpuesto / 100);
  }

  calcularDescuento(precioNeto) {
    const porcentaje = this.obtenerPorcentajeDescuento(precioNeto);

    return precioNeto * (porcentaje / 100);
  }

  obtenerPorcentajeDescuento(precioNeto) {
    const descuento = DESCUENTOS.find(
      (descuento) => precioNeto >= descuento.minimo
    );

    if (descuento === undefined) {
      return 0;
    }

    return descuento.tasa * 100;
  }

  obtenerPorcentajeImpuesto(estado) {
    const tasaImpuesto = IMPUESTOS[estado];

    if (tasaImpuesto === undefined) {
      return undefined;
    }

    return tasaImpuesto * 100;
  }

  calcularPrecioTotal(precioNeto, impuesto, descuento = 0) {
    return precioNeto + impuesto - descuento;
  }
}

export default Totalizador;