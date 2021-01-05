enum Base {
  water = "water",
  milk = "milk",
}

enum Temperature {
  cold = "cold",
  hot = "hot",
}

enum Flavor {
  coffe = "coffe",
  choco = "choco",
}

interface DrinkInterface {
  recipe: string;
  base: Base;
  temperature: Temperature;
  flavor: Flavor;
  aditional: string;
}

abstract class Drink {
  public template(): DrinkInterface {
    return {
      recipe: this.recipe(),
      base: this.base(),
      temperature: this.temperature(),
      flavor: this.flavor(),
      aditional: this.aditional(),
    };
  }

  protected recipe(): string {
    return "cup";
  }

  protected abstract base(): Base;
  protected abstract temperature(): Temperature;
  protected abstract flavor(): Flavor;

  protected aditional(): string {
    return "none";
  }
}

class Coffe extends Drink {
  protected base(): Base {
    return Base.water;
  }

  protected temperature(): Temperature {
    return Temperature.hot;
  }

  protected flavor(): Flavor {
    return Flavor.coffe;
  }
}

class SugarCoffe extends Drink {
  protected base(): Base {
    return Base.water;
  }

  protected temperature(): Temperature {
    return Temperature.hot;
  }

  protected flavor(): Flavor {
    return Flavor.coffe;
  }

  protected aditional(): string {
    return "sugar";
  }
}

class ColdChoco extends Drink {
  protected base(): Base {
    return Base.milk;
  }

  protected temperature(): Temperature {
    return Temperature.cold;
  }

  protected flavor(): Flavor {
    return Flavor.choco;
  }
}

export default function DrinkTemplate(drinkType: string): DrinkInterface {
  switch (drinkType) {
    case "coffe":
      return new Coffe().template();
    case "sugarCoffe":
      return new SugarCoffe().template();
    case "coldChoco":
      return new ColdChoco().template();
    default:
      return new Coffe().template();
  }
}
