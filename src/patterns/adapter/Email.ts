export default class Email {
  private email: Array<string>;
  private body: string;
  constructor(email: Array<string>, body: string) {
    this.email = email;
    this.body = body;
  }

  sendEmail(): string {
    return `Email: ${this.email.join(",")} - Body: ${this.body}`;
  }
}
