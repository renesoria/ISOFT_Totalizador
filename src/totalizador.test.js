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
});