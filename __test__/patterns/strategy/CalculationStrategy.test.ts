import CalculationStrategy from "../../../src/patterns/strategy/CalculationStrategy";

describe("Calculation Strategy", () => {
  it("Deve arredondar o primeiro número e truncar o segundo", () => {
    const number = 9.9999;

    const calculator = new CalculationStrategy("round");

    const firstRestult = calculator.calculate(number);

    calculator.setStrategy("truncate");

    const secondResult = calculator.calculate(number);

    expect(firstRestult).toBe(10.0);
    expect(secondResult).toBe(9);
  });
});
