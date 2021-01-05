import PersonBuilder from "../../../src/patterns/builder/PersonBuilder";

describe("Builder Person", () => {
  it("Deve criar uma instancia de Person", () => {
    const person = new PersonBuilder()
      .setName("Bruno Prado")
      .setBirthDate(new Date(2021, 1, 6))
      .setCity("Maringá")
      .setEmail("bruno.prado@email.com")
      .setCode(87020025)
      .setPhone("4430379500")
      .setAddress("Av. Duque de Caxias, 882 - 17º andar - Centro")
      .build();

    expect(person.constructor.name).toBe("Person");
    expect(person.Name).toBe("Bruno Prado");
    expect(person.City).toBe("Maringá");
  });
});
