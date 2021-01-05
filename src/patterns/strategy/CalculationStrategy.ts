interface Strategy {
  calculate(number: number): number;
}

class Round implements Strategy {
  public calculate(number: number): number {
    return Math.round(number);
  }
}

class Truncate implements Strategy {
  public calculate(number: number): number {
    return Math.trunc(number);
  }
}

export default class CalculationStrategy {
  private strategy: Strategy;

  constructor(strategyName: string) {
    this.strategy = this.getStrategy(strategyName);
  }

  public setStrategy(strategyName: string): void {
    this.strategy = this.getStrategy(strategyName);
  }

  public calculate(number: number): number {
    return this.strategy.calculate(number);
  }

  private getStrategy(strategyName: string): Strategy {
    switch (strategyName) {
      case "round":
        return new Round();
      case "truncate":
        return new Truncate();
      default:
        return new Round();
    }
  }
}
