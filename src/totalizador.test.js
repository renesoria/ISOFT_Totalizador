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
});