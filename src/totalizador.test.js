import Totalizador from "./totalizador.js";

describe("Totalizador", () => {
  it("deberia calcular el precio neto de la compra", () => {
    let totalizador = new Totalizador();

    expect(totalizador.calcularPrecioNeto(20, 3)).toEqual(60);
  });

  it("deberia calcular el impuesto para CA", () => {
    let totalizador = new Totalizador();

    expect(totalizador.calcularImpuesto(60, "CA")).toEqual(4.95);
  });
  it("deberia calcular el precio total con el impuesto", () => {
  let totalizador = new Totalizador();

  expect(totalizador.calcularPrecioTotal(60, 4.95)).toBeCloseTo(64.95);
});
    it("deberia calcular el impuesto para AL", () => {
    let totalizador = new Totalizador();

    expect(totalizador.calcularImpuesto(60, "AL")).toBeCloseTo(2.4);
});
    it("deberia calcular el impuesto para NV", () => {
  let totalizador = new Totalizador();

  expect(totalizador.calcularImpuesto(60, "NV")).toEqual(4.8);
});
    it("deberia calcular el impuesto para UT", () => {
  let totalizador = new Totalizador();

  expect(totalizador.calcularImpuesto(60, "UT")).toBeCloseTo(3.99);
}); 
it("deberia calcular el impuesto para TX", () => {
  let totalizador = new Totalizador();

  expect(totalizador.calcularImpuesto(60, "TX")).toBeCloseTo(3.75);
});
it("deberia aplicar descuento de 3% para precio neto mayor o igual a 1000", () => {
  let totalizador = new Totalizador();

  expect(totalizador.calcularDescuento(1000)).toEqual(30);
});
it("deberia retornar descuento 0 para precio neto menor a 1000", () => {
  let totalizador = new Totalizador();

  expect(totalizador.calcularDescuento(60)).toEqual(0);
});
it("deberia calcular el precio total incluyendo el descuento", () => {
  let totalizador = new Totalizador();

  expect(
    totalizador.calcularPrecioTotal(1000, 80.025, 30)
  ).toBeCloseTo(1050.025);
});
it("deberia aplicar descuento de 5% para precio neto de 3000", () => {
  let totalizador = new Totalizador();

  expect(totalizador.calcularDescuento(3000)).toEqual(150);
});
it("deberia aplicar descuento de 7% para precio neto de 7000", () => {
  let totalizador = new Totalizador();

  expect(totalizador.calcularDescuento(7000)).toBeCloseTo(490);
});
it("deberia aplicar descuento de 10% para precio neto de 10000", () => {
  let totalizador = new Totalizador();

  expect(totalizador.calcularDescuento(10000)).toBeCloseTo(1000);
});
it("deberia aplicar descuento de 15% para precio neto de 30000", () => {
  let totalizador = new Totalizador();

  expect(totalizador.calcularDescuento(30000)).toBeCloseTo(4500);
});
it("deberia obtener el porcentaje de descuento aplicado", () => {
  let totalizador = new Totalizador();

  expect(totalizador.obtenerPorcentajeDescuento(30000)).toEqual(15);
});
it("deberia obtener el porcentaje de impuesto para TX", () => {
  let totalizador = new Totalizador();

  expect(totalizador.obtenerPorcentajeImpuesto("TX")).toEqual(6.25);
});
it("deberia obtener los estados disponibles", () => {
  let totalizador = new Totalizador();

  expect(totalizador.obtenerEstadosDisponibles()).toEqual([
    "CA",
    "AL",
    "NV",
    "UT",
    "TX",
  ]);
});
it("deberia indicar que la cantidad es invalida cuando es negativa", () => {
  let totalizador = new Totalizador();

  expect(totalizador.validarCantidad(-5)).toEqual(false);
});
it("deberia indicar que el precio es invalido cuando es negativo", () => {
  let totalizador = new Totalizador();

  expect(totalizador.validarPrecio(-3)).toEqual(false);
});
it("deberia cancelar la compra", () => {
  let totalizador = new Totalizador();

  expect(totalizador.cancelarCompra()).toEqual("cancelada");
});
it("deberia confirmar la compra", () => {
  let totalizador = new Totalizador();

  expect(totalizador.confirmarCompra()).toEqual("confirmada");
});
it("deberia obtener las categorias disponibles con Varios como opcion inicial", () => {
  let totalizador = new Totalizador();

  expect(totalizador.obtenerCategoriasDisponibles()).toEqual([
    "Varios",
    "Alimentos",
    "Bebidas alcohólicas",
    "Material de escritorio",
    "Muebles",
    "Electrónicos",
    "Vestimenta",
  ]);
});
it("deberia aplicar 2% de descuento adicional para Alimentos", () => {
  let totalizador = new Totalizador();

  expect(totalizador.calcularDescuento(1000, "Alimentos")).toEqual(50);
});
it("deberia aplicar 7% de impuesto adicional para Bebidas alcohólicas", () => {
  let totalizador = new Totalizador();

  expect(
    totalizador.calcularImpuesto(100, "CA", "Bebidas alcohólicas")
  ).toBeCloseTo(15.25);
});
it("deberia aplicar 1.5% de descuento adicional para Material de escritorio", () => {
  let totalizador = new Totalizador();

  expect(
    totalizador.calcularDescuento(1000, "Material de escritorio")
  ).toBeCloseTo(45);
});
it("deberia aplicar 3% de impuesto adicional para Muebles", () => {
  let totalizador = new Totalizador();

  expect(totalizador.calcularImpuesto(100, "CA", "Muebles")).toBeCloseTo(
    11.25
  );
});
it("deberia aplicar 1% de descuento adicional para Electrónicos", () => {
  let totalizador = new Totalizador();

  expect(totalizador.calcularDescuento(1000, "Electrónicos")).toBeCloseTo(40);
});
it("deberia aplicar 4% de impuesto adicional para Electrónicos", () => {
  let totalizador = new Totalizador();

  expect(totalizador.calcularImpuesto(100, "CA", "Electrónicos")).toBeCloseTo(
    12.25
  );
});
it("deberia aplicar 2% de impuesto adicional para Vestimenta", () => {
  let totalizador = new Totalizador();

  expect(totalizador.calcularImpuesto(100, "CA", "Vestimenta")).toBeCloseTo(
    10.25
  );
});
it("deberia calcular envio gratis para peso volumetrico de hasta 10", () => {
  let totalizador = new Totalizador();

  expect(totalizador.calcularCostoEnvio(10, 3)).toEqual(0);
});
it("deberia calcular envio de 3.5 para peso mayor a 10 y hasta 20", () => {
  let totalizador = new Totalizador();

  expect(totalizador.calcularCostoEnvio(11, 1)).toBeCloseTo(3.5);
});
it("deberia calcular envio de 5 para peso mayor a 20 y hasta 40", () => {
  let totalizador = new Totalizador();

  expect(totalizador.calcularCostoEnvio(21, 1)).toBeCloseTo(5);
});
it("deberia calcular envio de 6 para peso mayor a 40 y hasta 80", () => {
  let totalizador = new Totalizador();

  expect(totalizador.calcularCostoEnvio(41, 1)).toBeCloseTo(6);
});
it("deberia calcular envio de 6.5 para peso mayor a 80 y hasta 100", () => {
  let totalizador = new Totalizador();

  expect(totalizador.calcularCostoEnvio(81, 1)).toBeCloseTo(6.5);
});
it("deberia sumar el costo de envio al precio total", () => {
  let totalizador = new Totalizador();

  expect(totalizador.calcularPrecioTotal(100, 8.25, 0, 6.5)).toBeCloseTo(
    114.75
  );
});
it("deberia calcular envio de 8 para peso mayor a 100 y hasta 200", () => {
  let totalizador = new Totalizador();

  expect(totalizador.calcularCostoEnvio(101, 1)).toBeCloseTo(8);
});
it("deberia calcular envio de 9 para peso mayor a 200", () => {
  let totalizador = new Totalizador();

  expect(totalizador.calcularCostoEnvio(201, 1)).toBeCloseTo(9);
});
it("deberia obtener tipos de cliente con Normal como opcion inicial", () => {
  let totalizador = new Totalizador();

  expect(totalizador.obtenerTiposClienteDisponibles()).toEqual([
    "Normal",
    "Recurrente",
    "Antiguo Recurrente",
    "Especial",
  ]);
});
it("deberia aplicar 0.5% de descuento al envio para Recurrente", () => {
  let totalizador = new Totalizador();

  expect(totalizador.calcularDescuentoEnvio(100, "Recurrente")).toBeCloseTo(
    0.5
  );
});
it("deberia aplicar 1% de descuento al envio para Antiguo Recurrente", () => {
  let totalizador = new Totalizador();

  expect(
    totalizador.calcularDescuentoEnvio(100, "Antiguo Recurrente")
  ).toBeCloseTo(1);
});
it("deberia aplicar 1.5% de descuento al envio para Especial", () => {
  let totalizador = new Totalizador();

  expect(totalizador.calcularDescuentoEnvio(100, "Especial")).toBeCloseTo(
    1.5
  );
});
it("deberia aplicar 100 de descuento fijo a Recurrente con Alimentos sobre 3000", () => {
  let totalizador = new Totalizador();

  expect(
    totalizador.calcularDescuentoFijo(3001, "Alimentos", "Recurrente")
  ).toEqual(100);
});
});
