import MyDB from "../../../src/patterns/singleton/MyDB";

describe("Singleton MyDB", () => {
  it("Deve criar apenas uma instancia de MyDB", () => {
    const myDB1 = MyDB.getInstance("mysql");
    const myDB2 = MyDB.getInstance("postgres");

    expect(myDB1 === myDB2).toBe(true);
    expect(myDB1.getName()).toBe(myDB2.getName());
  });
});
