export default class Sms {
  private phone: string;
  private message: string;
  constructor(phone: string, message: string) {
    this.phone = phone;
    this.message = message;
  }

  sendSms(): string {
    return `Phone: ${this.phone} - Message: ${this.message}`;
  }
}
