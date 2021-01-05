export default class User {
  public id: number;
  public url: string;
  public phone: string;
  public email: string;

  constructor(id: number) {
    this.id = id;
    this.url = "https://meuwebhook.com/receive";
    this.phone = "190";
    this.email = "bruno@email.com";
  }
}
