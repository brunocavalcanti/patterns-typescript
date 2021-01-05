import DrinkTemplate from "../../../src/patterns/template-method/DrinkTemplate";

describe("Drink Template", () => {
  it("Deve retornar template de um café", () => {
    const coffe = DrinkTemplate("coffe");

    expect(coffe).toMatchObject({
      recipe: "cup",
      base: "water",
      temperature: "hot",
      flavor: "coffe",
      aditional: "none",
    });
  });
  it("Deve retornar template de um café com açucar", () => {
    const sugarCoffe = DrinkTemplate("sugarCoffe");

    expect(sugarCoffe).toMatchObject({
      recipe: "cup",
      base: "water",
      temperature: "hot",
      flavor: "coffe",
      aditional: "sugar",
    });
  });

  it("Deve retornar template de um achocolatado", () => {
    const coldChoco = DrinkTemplate("coldChoco");

    expect(coldChoco).toMatchObject({
      recipe: "cup",
      base: "milk",
      temperature: "cold",
      flavor: "choco",
      aditional: "none",
    });
  });
});
