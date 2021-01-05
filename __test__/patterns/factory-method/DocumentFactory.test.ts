import { createDocument } from "../../../src/patterns/factory-method/DocumentFactory";

describe("Factor Method CPF", () => {
  it("Deve criar instancia de CPF", () => {
    const document = createDocument("cpf");
    expect(document?.constructor.name).toBe("CPF");
  });
  it("Quando informado um cpf valido, deve retornar true", () => {
    const document = createDocument("cpf");
    expect(document?.validate("97558120080")).toBe(true);
  });
  it("Quando informado um cpf invalido, deve retornar false", () => {
    const document = createDocument("cpf");
    expect(document?.validate("9755812008")).toBe(false);
  });
});

describe("Factor Method CNPJ", () => {
  it("Deve criar instancia de CNPJ", () => {
    const document = createDocument("cnpj");
    expect(document?.constructor.name).toBe("CNPJ");
  });
  it("Quando informado um cnpj valido, deve retornar true", () => {
    const document = createDocument("cnpj");
    expect(document?.validate("93055101000140")).toBe(true);
  });
  it("Quando informado um cnpj invalido, deve retornar false", () => {
    const document = createDocument("cnpj");
    expect(document?.validate("9305510100014")).toBe(false);
  });
});
