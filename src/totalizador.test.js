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
});