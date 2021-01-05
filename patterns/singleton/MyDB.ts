export default class MyDB {
  private name: string;
  private static instance: MyDB;

  private constructor(name: string) {
    this.name = name;
  }
  public static getInstance(name: string): MyDB {
    if (!MyDB.instance) {
      MyDB.instance = new MyDB(name);
    }
    return MyDB.instance;
  }
  getName(): string {
    return this.name;
  }
}
