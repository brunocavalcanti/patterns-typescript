import NotificationAdapter from "../../../src/patterns/adapter/NotificationAdapter";
import { NotificationTypes } from "../../../src/patterns/adapter/NotificationType";

describe("Adapter Notification", () => {
  it("Quando tipo de notificação for sms, deve enviar sms", () => {
    const notification = new NotificationAdapter(
      1,
      "nova notificação",
      NotificationTypes.SMS
    );

    expect(notification.send()).toBe(
      "Phone: 190 - Message: Olá: nova notificação"
    );
  });
  it("Quando tipo de notificação for email, deve enviar email", () => {
    const notification = new NotificationAdapter(
      1,
      "nova notificação",
      NotificationTypes.EMAIL
    );

    expect(notification.send()).toBe(
      "Email: bruno@email.com,noreply@email.com - Body: nova notificação"
    );
  });
  it("Quando tipo de notificação for webhook, deve enviar webhook", () => {
    const notification = new NotificationAdapter(
      1,
      "nova notificação",
      NotificationTypes.WEBHOOK
    );

    expect(notification.send()).toBe(
      "Url: https://meuwebhook.com/receive - Message: nova notificação"
    );
  });
});
