/* eslint-disable @typescript-eslint/interface-name-prefix */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { NotificationTypes } from "./NotificationType";

export default interface INotification {
  send(idUser: number, message: string, type: NotificationTypes): string;
}
