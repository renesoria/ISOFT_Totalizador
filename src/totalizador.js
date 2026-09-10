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

const CATEGORIAS = [
  "Varios",
  "Alimentos",
  "Bebidas alcohólicas",
  "Material de escritorio",
  "Muebles",
  "Electrónicos",
  "Vestimenta",
];

const DESCUENTOS_CATEGORIA = {
  Alimentos: 0.02,
  "Material de escritorio": 0.015,
  "Electrónicos": 0.01,
};

const IMPUESTOS_CATEGORIA = {
  "Bebidas alcohólicas": 0.07,
  Muebles: 0.03,
  "Electrónicos": 0.04,
  Vestimenta: 0.02,
};

class Totalizador {
  calcularPrecioNeto(cantidad, precio) {
    return cantidad * precio;
  }

  calcularImpuesto(precioNeto, estado, categoria = "Varios") {
    const porcentajeImpuesto = this.obtenerPorcentajeImpuesto(
      estado,
      categoria
    );

    if (porcentajeImpuesto === undefined) {
      return undefined;
    }

    return precioNeto * (porcentajeImpuesto / 100);
  }

  calcularDescuento(precioNeto, categoria = "Varios") {
    const porcentaje = this.obtenerPorcentajeDescuento(precioNeto, categoria);

    return precioNeto * (porcentaje / 100);
  }

  obtenerPorcentajeDescuento(precioNeto, categoria = "Varios") {
    const descuento = DESCUENTOS.find(
      (descuento) => precioNeto >= descuento.minimo
    );

    const descuentoCategoria = DESCUENTOS_CATEGORIA[categoria] || 0;

    if (descuento === undefined) {
      return descuentoCategoria * 100;
    }

    return (descuento.tasa + descuentoCategoria) * 100;
  }

  obtenerPorcentajeImpuesto(estado, categoria = "Varios") {
    const tasaImpuesto = IMPUESTOS[estado];

    if (tasaImpuesto === undefined) {
      return undefined;
    }

    const impuestoCategoria = IMPUESTOS_CATEGORIA[categoria] || 0;

    return tasaImpuesto * 100 + impuestoCategoria * 100;
  }

  calcularPrecioTotal(precioNeto, impuesto, descuento = 0, envio = 0) {
    return precioNeto + impuesto - descuento + envio;
  }
  obtenerEstadosDisponibles() {
  return Object.keys(IMPUESTOS);
    }
    obtenerCategoriasDisponibles() {
  return CATEGORIAS;
    }
    calcularCostoEnvio(pesoVolumetrico, cantidad) {
  if (pesoVolumetrico <= 10) {
    return 0;
  }

  if (pesoVolumetrico <= 20) {
    return 3.5 * cantidad;
  }

  if (pesoVolumetrico <= 40) {
    return 5 * cantidad;
  }

  if (pesoVolumetrico <= 80) {
    return 6 * cantidad;
  }

  if (pesoVolumetrico <= 100) {
    return 6.5 * cantidad;
  }

  return undefined;
    }
    validarCantidad(cantidad) {
    return cantidad > 0;
    }
    validarPrecio(precio) {
  return precio >= 0;
    }
    cancelarCompra() {
  return "cancelada";
    }
    confirmarCompra() {
  return "confirmada";
    }
}

export default Totalizador;
