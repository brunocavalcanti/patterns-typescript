import Email from "./Email";
import INotification from "./INotification";
import { NotificationTypes } from "./NotificationType";
import Sms from "./Sms";
import User from "./User";
import WebHook from "./WebHook";

export default class NotificationAdapter implements INotification {
  private idUser: number;
  private message: string;
  private type: NotificationTypes;
  private getUser(idUser: number): User {
    return new User(idUser);
  }
  constructor(idUser: number, message: string, type: NotificationTypes) {
    this.idUser = idUser;
    this.message = message;
    this.type = type;
  }
  send(): string {
    const user = this.getUser(this.idUser);

    switch (this.type) {
      case NotificationTypes.EMAIL:
        const email = new Email(
          [user.email, "noreply@email.com"],
          this.message
        );
        return email.sendEmail();
      case NotificationTypes.SMS:
        const sms = new Sms(user.phone, `Olá: ${this.message}`);
        return sms.sendSms();
      case NotificationTypes.WEBHOOK:
        const webhook = new WebHook(user.url, this.message);
        return webhook.sendPost();
      default:
        return "usuario não foi notificado";
    }
  }
}
