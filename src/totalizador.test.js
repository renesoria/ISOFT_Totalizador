import { calcularPrecioNeto } from "./totalizador.js";

describe("Totalizador", () => {
  it("deberia calcular el precio neto de la compra", () => {
    expect(calcularPrecioNeto(20, 3)).toEqual(60);
  });
});